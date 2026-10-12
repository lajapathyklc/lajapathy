import * as THREE from 'three';
import { JOURNEY_LAYOUT, OPENING_POSITION, SURFACE_HEIGHT } from './journey-layout.js';
export const LANDING_DURATION=8;
export const HARD_LANDING_WORLD=4;
export function hardLandingImpact(progress,to){return to===HARD_LANDING_WORLD&&progress>=.93&&progress<1?Math.sin(Math.PI*(progress-.93)/.07)**2:0;}
let landingHeight=9.6;
export function setLandingHeight(height){landingHeight=height;}
const ease=x=>THREE.MathUtils.smootherstep(x,0,1);
const up=new THREE.Vector3(0,1,0);
export const surfaceAnchor=index=>new THREE.Vector3(JOURNEY_LAYOUT[index].x,SURFACE_HEIGHT,JOURNEY_LAYOUT[index].z);
const nearAngle=(start,end)=>start+Math.atan2(Math.sin(end-start),Math.cos(end-start));
const mixAngle=(start,end,t)=>THREE.MathUtils.lerp(start,nearAngle(start,end),t);
const parkedBearing=[-35,42,-58,28,-44,54,-26,38];
const parkedRadius=index=>14.4+(index%3)*.6;
const parkedElevation=index=>4.1+(index%3)*.3;

export function sampleLanding(elapsed,from=null,to=0){
 const p=THREE.MathUtils.clamp(elapsed/LANDING_DURATION,0,1);
 const end=surfaceAnchor(to).setY(landingHeight);
 const initial=from===null?new THREE.Vector3().fromArray(OPENING_POSITION):surfaceAnchor(from).setY(landingHeight);
 const lifted=initial.clone();if(from!==null)lifted.y+=24;
 const overhead=end.clone().add(new THREE.Vector3(0,24,0));
 let position;
 // Vertical clearance first; all transfers cruise above every planet's highest point.
 if(p<.26)position=initial.clone().lerp(lifted,ease((p-.06)/.20));
 else if(p<.70){const u=ease((p-.26)/.44);position=lifted.clone().lerp(overhead,u);position.y+=Math.sin(Math.PI*u)**2*26;}
 else if(to===HARD_LANDING_WORLD){
  // A single firm touchdown, then a small upward suspension rebound. Never below the deck.
  position=overhead.clone().lerp(end,ease((p-.70)/.23));
  if(p>=.93)position.y+=.12*Math.sin(Math.PI*(p-.93)/.07)**2;
 }else position=overhead.clone().lerp(end,ease((p-.70)/.30));
 const direction=overhead.clone().sub(lifted);direction.y=0;direction.normalize();
 const routeHeading=Math.atan2(-direction.x,-direction.z),startHeading=from===null?0:JOURNEY_LAYOUT[from].heading;
 const travelHeading=nearAngle(startHeading,routeHeading);
 const heading=mixAngle(THREE.MathUtils.lerp(startHeading,travelHeading,ease((p-.08)/.22)),JOURNEY_LAYOUT[to].heading,ease((p-.58)/.32));
 const quaternion=new THREE.Quaternion().setFromAxisAngle(up,heading);
 const bank=Math.sign(nearAngle(startHeading,routeHeading)-startHeading)*-.06*Math.sin(Math.PI*ease((p-.22)/.50))**2;
 quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),bank));
 const phase=p===1?'LANDED':p>=.93&&to===HARD_LANDING_WORLD?'FIRM TOUCHDOWN':p<.06?'IGNITION':p<.26?(from===null?'IGNITION':'LIFT OFF'):p<.62?'TRAVEL':p<.70?'APPROACH':p<.96?'DESCENT':'TOUCHDOWN';
 const thrust=p===1?0:p<.12?ease(p/.12):p<.64?.9:.9*(1-ease((p-.64)/.36));
 return {elapsed:p*LANDING_DURATION,duration:LANDING_DURATION,progress:p,pathProgress:p,position,quaternion,heading,tangent:direction,phase,thrust,speed:p===1?0:1-p,landingState:p===1?'landed':p>.70?'descending':'in-flight'};
}
export function sampleCamera(progress,shipPosition,compact=false,from=null,to=0,aspect=1.5){
 const p=THREE.MathUtils.clamp(progress,0,1),s=sampleLanding(p*LANDING_DURATION,from,to);
 const depart=ease(p/.30),arrival=ease((p-.58)/.42),sweep=Math.sin(Math.PI*p)**2;
 const radius=THREE.MathUtils.lerp(from===null?(compact?12.5:9.2):parkedRadius(from),21,depart)*(1-arrival)+parkedRadius(to)*arrival;
 const elevation=THREE.MathUtils.lerp(from===null?2.4:parkedElevation(from),7.5,depart)*(1-arrival)+parkedElevation(to)*arrival;
 const ahead=sampleLanding((p+.018*sweep)*LANDING_DURATION,from,to),lead=ahead.position.clone().sub(shipPosition).clampLength(0,2.3);
 const turnLag=nearAngle(s.heading,sampleLanding((p-.028*sweep)*LANDING_DURATION,from,to).heading)-s.heading;
 const startBearing=from===null?-35:parkedBearing[from],travelBearing=Math.sign(parkedBearing[to])*57;
 const localBearing=THREE.MathUtils.lerp(THREE.MathUtils.lerp(startBearing,travelBearing,depart),parkedBearing[to],arrival);
 const bearing=-s.heading+THREE.MathUtils.degToRad(localBearing)-THREE.MathUtils.clamp(turnLag,-.15,.15);
 const scale=compact?1.12*Math.max(1,.39/aspect):1,offset=new THREE.Vector3(Math.sin(bearing)*radius,elevation,-Math.cos(bearing)*radius).multiplyScalar(scale);
 const position=shipPosition.clone().add(offset).addScaledVector(lead,.8),target=shipPosition.clone().addScaledVector(lead,.15);
 const fov=compact?50:38,right=new THREE.Vector3().crossVectors(target.clone().sub(position).normalize(),up).normalize();
 const framing=from===null?depart:1,frameX=compact?.015*Math.sin(2*Math.PI*p):(.44+.045*sweep)*framing;
 target.addScaledVector(right,-offset.length()*Math.tan(THREE.MathUtils.degToRad(fov/2))*aspect*frameX);
 target.y+=(compact?1.2:.9)*framing;
 const impact=hardLandingImpact(p,to),jolt=Math.sin((p-.93)*LANDING_DURATION*35)*impact;
 position.y+=jolt*.045;position.addScaledVector(right,jolt*.022);
 return {position,target,fov};
}
