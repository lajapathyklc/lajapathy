"""Render the smooth ignition bed; encode the resulting WAV with ffmpeg."""
import math, random, struct, sys, wave
RATE = 48000
DURATION = 2.4
rng = random.Random(71)
phase = [0.0, 0.0, 0.0]
low = mid = air = 0.0
frames = []
for i in range(int(RATE * DURATION)):
    t = i / RATE
    u = t / DURATION
    rise = u * u * (3 - 2 * u)
    # Continuous pitched energy, with no percussive hits or tremolo gates.
    for j, frequency in enumerate((48 + 35 * rise, 96 + 70 * rise, 230 + 340 * rise)):
        phase[j] += 2 * math.pi * frequency / RATE
    white = rng.uniform(-1, 1)
    low += 0.018 * (white - low)
    mid += 0.09 * (white - mid)
    air += 0.20 * (white - air)
    attack = min(1, t / 0.24)
    attack = attack * attack * (3 - 2 * attack)
    release = min(1, (DURATION - t) / 0.55)
    release = release * release * (3 - 2 * release)
    envelope = attack * release * (0.48 + 0.52 * rise)
    core = 0.30 * math.sin(phase[0]) + 0.14 * math.sin(phase[1])
    roar = 1.20 * low + 0.30 * mid + 0.08 * air
    left = envelope * (core + roar + 0.09 * math.sin(phase[2]))
    right = envelope * (core + roar + 0.09 * math.sin(phase[2] + 0.18))
    frames.append((left, right))
peak = max(abs(v) for pair in frames for v in pair)
scale = 0.82 / peak
with wave.open(sys.argv[1], 'wb') as output:
    output.setparams((2, 2, RATE, 0, 'NONE', 'not compressed'))
    output.writeframes(b''.join(struct.pack('<hh', *(round(v * scale * 32767) for v in pair)) for pair in frames))
print(f'Rendered {DURATION}s continuous engine rise, peak 0.82, smooth attack/release.')
