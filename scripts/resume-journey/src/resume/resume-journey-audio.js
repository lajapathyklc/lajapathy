const AUDIO_URLS = {
  ignition: new URL('../../../../assets/resume-journey/audio/01-engine-ignition.mp3', import.meta.url).href,
  engine: new URL('../../../../assets/resume-journey/audio/02-flight-engine-loop.mp3', import.meta.url).href,
  touchdown: new URL('../../../../assets/resume-journey/audio/04-touchdown.mp3', import.meta.url).href,
};

const MASTER_VOLUME = 0.4;
const VOLUMES = { ignition: 0.45, engine: 0.28, touchdown: 0.4 };
const clamp = value => Math.min(1, Math.max(0, value));

export function createJourneyAudio(onError = () => {}) {
  let context = null;
  let master = null;
  let buffersPromise = null;
  let buffers = null;
  let enabled = false;
  let disposed = false;
  let operation = 0;
  let playback = 'idle';
  let progress = 0;
  let thrust = 0;
  let flightStarted = false;
  let ignitionPlayed = false;
  let touchdownPlayed = false;
  let ignitionSource = null;
  let loopSource = null;
  let loopGain = null;
  let loopStopping = false;
  let loopRestartPending = false;
  let ignitionPending = false;
  let lastLoopTarget = null;
  let lastLoopUpdate = 0;
  const oneShots = new Set();

  function createContext() {
    if (context) return;
    const AudioContextConstructor = window.AudioContext;
    if (!AudioContextConstructor) throw new Error('Web Audio is not supported in this browser.');
    context = new AudioContextConstructor();
    master = context.createGain();
    master.gain.value = 0;
    master.connect(context.destination);
  }

  async function loadBuffers() {
    if (!buffersPromise) {
      buffersPromise = Promise.all(Object.entries(AUDIO_URLS).map(async ([name, url]) => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Audio request failed (${response.status}): ${url}`);
        return [name, await context.decodeAudioData(await response.arrayBuffer())];
      })).then(entries => Object.fromEntries(entries));
    }
    buffers = await buffersPromise;
  }

  function ramp(param, value, duration) {
    const now = context.currentTime;
    param.cancelScheduledValues(now);
    param.setValueAtTime(param.value, now);
    param.linearRampToValueAtTime(value, now + duration);
  }

  function stopSource(source, when) {
    try {
      when === undefined ? source.stop() : source.stop(when);
    } catch (error) {
      if (error.name !== 'InvalidStateError') throw error;
    }
  }

  function cleanOneShot(record) {
    oneShots.delete(record);
    record.source.disconnect();
    record.gain.disconnect();
    if (ignitionSource === record.source) ignitionSource = null;
  }

  function stopOneShots(duration = 0.08) {
    for (const record of oneShots) {
      ramp(record.gain.gain, 0, duration);
      stopSource(record.source, context.currentTime + duration);
    }
  }

  function startOneShot(name, volume, { delay = 0, fade = 0.08, onended } = {}) {
    const source = context.createBufferSource();
    const gain = context.createGain();
    const record = { source, gain };
    source.buffer = buffers[name];
    source.connect(gain);
    gain.connect(master);
    const startsAt = context.currentTime + delay;
    gain.gain.setValueAtTime(0, startsAt);
    gain.gain.linearRampToValueAtTime(volume, startsAt + fade);
    source.onended = () => {
      cleanOneShot(record);
      onended?.();
    };
    oneShots.add(record);
    if (name === 'ignition') ignitionSource = source;
    source.start(startsAt);
    return record;
  }

  function engineVolume() {
    return VOLUMES.engine * clamp(thrust);
  }

  function updateLoopVolume(fade = 0.2) {
    if (!loopGain || loopStopping) return;
    const target = enabled && playback === 'playing' ? engineVolume() : 0;
    const now = context.currentTime;
    if (lastLoopTarget !== null && Math.abs(target - lastLoopTarget) < 0.015 && now - lastLoopUpdate < 0.15) return;
    lastLoopTarget = target;
    lastLoopUpdate = now;
    ramp(loopGain.gain, target, fade);
  }

  function startLoop(fade = 0.35) {
    if (!enabled || disposed || playback !== 'playing' || !buffers) return;
    if (loopSource) {
      if (loopStopping && flightStarted) loopRestartPending = true;
      return;
    }
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = buffers.engine;
    source.loop = true;
    gain.gain.value = 0;
    source.connect(gain);
    gain.connect(master);
    source.onended = () => {
      if (loopSource !== source) return;
      loopSource = null;
      loopGain = null;
      loopStopping = false;
      lastLoopTarget = null;
      source.disconnect();
      gain.disconnect();
      const restart = loopRestartPending;
      loopRestartPending = false;
      if (restart && enabled && playback === 'playing' && flightStarted) startLoop(0.3);
    };
    loopSource = source;
    loopGain = gain;
    loopStopping = false;
    loopRestartPending = false;
    lastLoopTarget = engineVolume();
    lastLoopUpdate = context.currentTime;
    source.start();
    ramp(gain.gain, engineVolume(), fade);
  }

  function stopLoop(fade = 0.18) {
    if (!loopSource) return;
    if (loopStopping) return;
    loopStopping = true;
    loopRestartPending = false;
    ramp(loopGain.gain, 0, fade);
    stopSource(loopSource, context.currentTime + fade + 0.02);
  }

  function playIgnition() {
    if (!enabled || ignitionPlayed || playback !== 'playing') return;
    ignitionPlayed = true;
    startOneShot('ignition', VOLUMES.ignition, {
      fade: 0.16,
      onended: () => {
        if (enabled && playback === 'playing' && flightStarted) startLoop(0.45);
      },
    });
  }

  function playTouchdown() {
    if (!enabled || touchdownPlayed) return;
    touchdownPlayed = true;
    startOneShot('touchdown', VOLUMES.touchdown, { delay: 0.2, fade: 0.12 });
  }

  function sync(nextPlayback, nextProgress, nextThrust) {
    if (disposed) return;
    const previousPlayback = playback;
    playback = nextPlayback;
    progress = clamp(nextProgress);
    thrust = clamp(nextThrust);

    if (playback === 'playing') {
      if (!flightStarted) {
        flightStarted = true;
        loopRestartPending = false;
        touchdownPlayed = false;
        if (enabled && buffers) playIgnition();
        else if (enabled) ignitionPending = true;
        else ignitionPlayed = true;
      }
      if (enabled) {
        if (loopSource) {
          if (loopStopping && flightStarted && !ignitionSource) loopRestartPending = true;
          else updateLoopVolume(0.22);
        }
        else if (!ignitionSource && !ignitionPending) startLoop(0.35);
      }
      return;
    }

    if (playback === 'landed') {
      if (previousPlayback === 'landed') return;
      const completedFlight = previousPlayback === 'playing' || (previousPlayback === 'idle' && progress === 1);
      stopLoop(0.2);
      stopOneShots(0.08);
      if (completedFlight && !touchdownPlayed) playTouchdown();
      flightStarted = false;
      ignitionPlayed = false;
      ignitionPending = false;
      return;
    }

    if (playback === 'paused') {
      if (previousPlayback !== 'paused') {
        stopLoop(0.1);
        stopOneShots(0.08);
      }
    }
  }

  async function enable() {
    if (disposed) return false;
    enabled = true;
    const currentOperation = ++operation;
    try {
      createContext();
      const resumePromise = context.state === 'suspended' ? context.resume() : Promise.resolve();
      await Promise.all([resumePromise, loadBuffers()]);
      if (!enabled || disposed || operation !== currentOperation) return false;
      ramp(master.gain, MASTER_VOLUME, 0.18);
      if (playback === 'playing') {
        if (ignitionPending && !ignitionPlayed) {
          ignitionPending = false;
          playIgnition();
        } else if (loopSource) {
          if (loopStopping && flightStarted && !ignitionSource) loopRestartPending = true;
          else updateLoopVolume(0.25);
        }
        else if (!ignitionSource) startLoop(0.35);
      }
      return true;
    } catch (error) {
      enabled = false;
      if (!buffers) buffersPromise = null;
      if (master) ramp(master.gain, 0, 0.05);
      stopLoop(0.05);
      stopOneShots(0.05);
      onError(error);
      return false;
    }
  }

  function disable() {
    enabled = false;
    operation++;
    if (!context) return;
    ramp(master.gain, 0, 0.08);
    stopLoop(0.08);
    stopOneShots(0.08);
  }

  function reset() {
    flightStarted = false;
    ignitionPlayed = false;
    touchdownPlayed = false;
    ignitionPending = false;
    playback = 'idle';
    progress = 0;
    thrust = 0;
    if (!context) return;
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.setValueAtTime(0, context.currentTime);
    if (loopSource) {
      loopSource.onended = null;
      stopSource(loopSource);
      loopSource.disconnect();
      loopGain.disconnect();
      loopSource = null;
      loopGain = null;
      loopStopping = false;
      loopRestartPending = false;
      lastLoopTarget = null;
    }
    for (const record of oneShots) {
      record.source.onended = null;
      stopSource(record.source);
      record.source.disconnect();
      record.gain.disconnect();
    }
    oneShots.clear();
    ignitionSource = null;
  }

  async function suspend() {
    if (!context || context.state === 'closed') return;
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.setValueAtTime(0, context.currentTime);
    if (loopSource) {
      loopSource.onended = null;
      stopSource(loopSource);
      loopSource.disconnect();
      loopGain.disconnect();
      loopSource = null;
      loopGain = null;
      loopStopping = false;
      loopRestartPending = false;
      lastLoopTarget = null;
    }
    for (const record of oneShots) {
      record.source.onended = null;
      stopSource(record.source);
      record.source.disconnect();
      record.gain.disconnect();
    }
    oneShots.clear();
    ignitionSource = null;
    await context.suspend();
  }

  async function resume() {
    if (!enabled || !context || context.state === 'closed') return;
    try {
      await context.resume();
      if (!enabled || disposed) return;
      ramp(master.gain, MASTER_VOLUME, 0.18);
      if (playback === 'playing' && flightStarted) {
        if (ignitionPending && !ignitionPlayed && buffers) {
          ignitionPending = false;
          playIgnition();
        } else if (loopSource && loopStopping && !ignitionSource) loopRestartPending = true;
        else if (!ignitionSource) startLoop(0.3);
      }
    } catch (error) {
      enabled = false;
      ramp(master.gain, 0, 0.05);
      stopLoop(0.05);
      stopOneShots(0.05);
      onError(error);
    }
  }

  async function dispose() {
    if (disposed) return;
    reset();
    disposed = true;
    if (context && context.state !== 'closed') await context.close();
    context = null;
    master = null;
  }

  return { enable, disable, sync, reset, suspend, resume, dispose, snapshot: () => ({ enabled, contextState: context?.state ?? 'uninitialized', buffersLoaded: !!buffers, playback, progress, thrust, ignitionActive: !!ignitionSource, loopActive: !!loopSource, loopStopping, oneShots: oneShots.size }), get enabled() { return enabled; } };
}
