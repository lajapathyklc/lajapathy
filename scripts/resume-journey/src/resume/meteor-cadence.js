// Canonical values from lp-hero-cinematic.js spawn() and render().
// Home is intentionally unchanged; both WebGL heroes consume this adapter config.
export const homeMeteorCadence = Object.freeze({
  firstDelay:.25, interval:[.75,1.65], quietInterval:[3.8,5.5], quietEvery:6,
  desktopLimit:4, mobileLimit:3, mobileBreakpoint:600,
  layerThresholds:[.45,.88], depth:[.55,.85,1.15], opacity:[.28,.60,.76],
  angle:[.18,.55], impactDirection:[.70,-.36,-.62], skimDirection:[.90,-.28], speed:[[.18,.30],[.35,.62],[.75,1.1]],
  speedThresholds:[.3,.8], headSize:[.65,1.5], impactSize:[1.4,2.2],
  tailSeconds:[.18,.32], tailPixels:[40,220], standOff:[.38,.65], life:5,
});
export function homeMeteorKind(count){return count%4===1||count%4===3?'impact':count%4===0?'skim':'flyby';}
export function nextHomeMeteorDelay(count,random){return random(...(count%6===0?homeMeteorCadence.quietInterval:homeMeteorCadence.interval));}
