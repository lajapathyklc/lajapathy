// A stable scattered layout: chapter order is independent of physical direction.
// Surface anchors share a height so every direct route clears the other globes.
export const PLANET_RADIUS=65;
export const SURFACE_HEIGHT=8;
export const JOURNEY_LAYOUT=Object.freeze([
 {x:0,z:0,heading:24},
 {x:215,z:-155,heading:-68},
 {x:-195,z:-210,heading:138},
 {x:125,z:235,heading:76},
 {x:-245,z:145,heading:-142},
 {x:390,z:90,heading:-18},
 {x:15,z:-395,heading:174},
 {x:-425,z:-70,heading:-102},
].map((world,index)=>Object.freeze({...world,index,heading:world.heading*Math.PI/180})));
export const OPENING_POSITION=Object.freeze([-150,58,90]);
