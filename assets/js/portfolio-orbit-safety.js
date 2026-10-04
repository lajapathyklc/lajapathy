import {THREE} from './hero-3d-core.js';
// Non-overlapping radial shells guarantee clearance for every phase, speed,
// hover slowdown and inclination, rather than only a finite time sample.
export function createSafeOrbits(projects,orbits,planetRadius,moonRadius){
  const shells={},rotations={};let previous=null;
  for(const [id,o] of Object.entries(orbits))rotations[id]=new THREE.Euler(o.tilt,0,o.roll);
  for(const orbit of Object.keys(orbits))for(const p of projects.filter(p=>p.orbit===orbit)){
    const r=moonRadius*p.scale;
    const radius=previous?previous.radius+previous.moonRadius+r+.035:planetRadius+r+Math.max(.05,.55*r+.012);
    shells[p.id]={radius,moonRadius:r};previous=shells[p.id];
  }
  function position(p,angle,out=new THREE.Vector3()){
    const o=orbits[p.orbit];return out.set(Math.cos(angle)*o.radiusX,0,Math.sin(angle)*o.radiusZ).applyEuler(rotations[p.orbit]).add(new THREE.Vector3(0,o.verticalOffset+(p.orbitLift||0),0)).normalize().multiplyScalar(shells[p.id].radius);
  }
  let minimumPlanetGap=Infinity,minimumPairGap=Infinity;
  const points=projects.map(()=>new THREE.Vector3());
  for(let step=0;step<=7200;step++){
    const t=step/12;
    projects.forEach((p,i)=>{position(p,p.phase+t*2*Math.PI/p.orbitDuration*p.direction,points[i]);minimumPlanetGap=Math.min(minimumPlanetGap,points[i].length()-planetRadius-shells[p.id].moonRadius);});
    projects.forEach((p,i)=>projects.slice(i+1).forEach((q,j)=>{minimumPairGap=Math.min(minimumPairGap,points[i].distanceTo(points[i+j+1])-shells[p.id].moonRadius-shells[q.id].moonRadius);}));
  }
  if(minimumPlanetGap<.049||minimumPairGap<.034)throw Error('Unsafe portfolio orbital clearance');
  return {position,shells,validation:{virtualSeconds:600,samples:7201,minimumPlanetGap,minimumPairGap}};
}
