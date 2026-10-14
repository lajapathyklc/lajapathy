(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="181",zu=0,Zc=1,Gu=2,Id=1,Vu=2,ni=3,Ln=0,jt=1,on=2,ai=0,lr=1,Mi=2,$c=3,el=4,Hu=5,Fi=100,Wu=101,Xu=102,ju=103,qu=104,Yu=200,Ku=201,Ju=202,Qu=203,lo=204,uo=205,Zu=206,$u=207,eh=208,th=209,nh=210,ih=211,rh=212,sh=213,ah=214,ho=0,fo=1,po=2,hr=3,mo=4,go=5,xo=6,bo=7,uc=0,oh=1,ch=2,yi=0,lh=1,dh=2,uh=3,Ud=4,hh=5,fh=6,ph=7,tl="attached",mh="detached",Nd=300,fr=301,pr=302,_o=303,vo=304,da=306,Bi=1e3,kn=1001,qs=1002,qt=1003,Fd=1004,zr=1005,Xt=1006,Fs=1007,ri=1008,Wn=1009,Od=1010,kd=1011,qr=1012,hc=1013,zi=1014,En=1015,Sr=1016,fc=1017,pc=1018,Yr=1020,Bd=35902,zd=35899,Gd=1021,Vd=1022,fn=1023,Kr=1026,Jr=1027,mc=1028,gc=1029,xc=1030,bc=1031,_c=1033,Os=33776,ks=33777,Bs=33778,zs=33779,yo=35840,Mo=35841,So=35842,To=35843,Eo=36196,Ao=37492,wo=37496,Ro=37808,Co=37809,Po=37810,Lo=37811,Do=37812,Io=37813,Uo=37814,No=37815,Fo=37816,Oo=37817,ko=37818,Bo=37819,zo=37820,Go=37821,Vo=36492,Ho=36494,Wo=36495,Xo=36283,jo=36284,qo=36285,Yo=36286,Qr=2300,Zr=2301,ya=2302,nl=2400,il=2401,rl=2402,gh=2500,xh=0,Hd=1,Ko=2,bh=3200,_h=3201,vc=0,vh=1,_i="",Tt="srgb",Yt="srgb-linear",Ys="linear",dt="srgb",Wi=7680,sl=519,yh=512,Mh=513,Sh=514,Wd=515,Th=516,Eh=517,Ah=518,wh=519,Jo=35044,Rh=35048,al="300 es",Bn=2e3,Ks=2001;function Xd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $r(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ch(){const r=$r("canvas");return r.style.display="block",r}const ol={};function Js(...r){const e="THREE."+r.shift();console.log(e,...r)}function ye(...r){const e="THREE."+r.shift();console.warn(e,...r)}function qe(...r){const e="THREE."+r.shift();console.error(e,...r)}function es(...r){const e=r.join(" ");e in ol||(ol[e]=!0,ye(...r))}function Ph(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Vr=Math.PI/180,mr=180/Math.PI;function wn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Ye(r,e,t){return Math.max(e,Math.min(t,r))}function yc(r,e){return(r%e+e)%e}function Lh(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Dh(r,e,t){return r!==e?(t-r)/(e-r):0}function Hr(r,e,t){return(1-t)*r+t*e}function Ih(r,e,t,n){return Hr(r,e,1-Math.exp(-t*n))}function Uh(r,e=1){return e-Math.abs(yc(r,e*2)-e)}function Nh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Fh(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Oh(r,e){return r+Math.floor(Math.random()*(e-r+1))}function kh(r,e){return r+Math.random()*(e-r)}function Bh(r){return r*(.5-Math.random())}function zh(r){r!==void 0&&(cl=r);let e=cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gh(r){return r*Vr}function Vh(r){return r*mr}function Hh(r){return(r&r-1)===0&&r!==0}function Wh(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Xh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function jh(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*d,c*h,o*l);break;case"YZY":r.set(c*h,o*u,c*d,o*l);break;case"ZXZ":r.set(c*d,c*h,o*u,o*l);break;case"XZX":r.set(o*u,c*m,c*p,o*l);break;case"YXY":r.set(c*p,o*u,c*m,o*l);break;case"ZYZ":r.set(c*m,c*p,o*u,o*l);break;default:ye("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ne={DEG2RAD:Vr,RAD2DEG:mr,generateUUID:wn,clamp:Ye,euclideanModulo:yc,mapLinear:Lh,inverseLerp:Dh,lerp:Hr,damp:Ih,pingpong:Uh,smoothstep:Nh,smootherstep:Fh,randInt:Oh,randFloat:kh,randFloatSpread:Bh,seededRandom:zh,degToRad:Gh,radToDeg:Vh,isPowerOfTwo:Hh,ceilPowerOfTwo:Wh,floorPowerOfTwo:Xh,setQuaternionFromProperEuler:jh,normalize:st,denormalize:Sn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],p=s[a+1],m=s[a+2],x=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=m,e[t+3]=x;return}if(d!==x||c!==h||l!==p||u!==m){let g=c*h+l*p+u*m+d*x;g<0&&(h=-h,p=-p,m=-m,x=-x,g=-g);let f=1-o;if(g<.9995){const T=Math.acos(g),v=Math.sin(T);f=Math.sin(f*T)/v,o=Math.sin(o*T)/v,c=c*f+h*o,l=l*f+p*o,u=u*f+m*o,d=d*f+x*o}else{c=c*f+h*o,l=l*f+p*o,u=u*f+m*o,d=d*f+x*o;const T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[a],h=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+u*d+c*p-l*h,e[t+1]=c*m+u*h+l*d-o*p,e[t+2]=l*m+u*p+o*h-c*d,e[t+3]=u*m-o*d-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(s/2),h=c(n/2),p=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=h*u*d+l*p*m,this._y=l*p*d-h*u*m,this._z=l*u*m+h*p*d,this._w=l*u*d-h*p*m;break;case"YXZ":this._x=h*u*d+l*p*m,this._y=l*p*d-h*u*m,this._z=l*u*m-h*p*d,this._w=l*u*d+h*p*m;break;case"ZXY":this._x=h*u*d-l*p*m,this._y=l*p*d+h*u*m,this._z=l*u*m+h*p*d,this._w=l*u*d-h*p*m;break;case"ZYX":this._x=h*u*d-l*p*m,this._y=l*p*d+h*u*m,this._z=l*u*m-h*p*d,this._w=l*u*d+h*p*m;break;case"YZX":this._x=h*u*d+l*p*m,this._y=l*p*d+h*u*m,this._z=l*u*m-h*p*d,this._w=l*u*d-h*p*m;break;case"XZY":this._x=h*u*d-l*p*m,this._y=l*p*d-h*u*m,this._z=l*u*m+h*p*d,this._w=l*u*d+h*p*m;break;default:ye("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=i+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ma.copy(this).projectOnVector(e),this.sub(Ma)}reflect(e){return this.sub(Ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new P,ll=new zt;class Ve{constructor(e,t,n,i,s,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],p=n[5],m=n[8],x=i[0],g=i[3],f=i[6],T=i[1],v=i[4],b=i[7],A=i[2],y=i[5],w=i[8];return s[0]=a*x+o*T+c*A,s[3]=a*g+o*v+c*y,s[6]=a*f+o*b+c*w,s[1]=l*x+u*T+d*A,s[4]=l*g+u*v+d*y,s[7]=l*f+u*b+d*w,s[2]=h*x+p*T+m*A,s[5]=h*g+p*v+m*y,s[8]=h*f+p*b+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*s,p=l*s-a*c,m=t*d+n*h+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=d*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=h*x,e[4]=(u*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new Ve,dl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ul=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const r={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(i.r=oi(i.r),i.g=oi(i.g),i.b=oi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?Ys:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Yt]:{primaries:e,whitePoint:n,transfer:Ys,toXYZ:dl,fromXYZ:ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:dl,fromXYZ:ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),r}const et=qh();function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xi;class Yh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xi===void 0&&(Xi=$r("canvas")),Xi.width=e.width,Xi.height=e.height;const i=Xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$r("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=oi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kh=0;class Mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ta(i[a].image)):s.push(Ta(i[a]))}else s=Ta(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ta(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ye("Texture: Unable to serialize Texture."),{})}let Jh=0;const Ea=new P;class Lt extends Tr{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=kn,i=kn,s=Xt,a=ri,o=fn,c=Wn,l=Lt.DEFAULT_ANISOTROPY,u=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=wn(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ea).x}get height(){return this.source.getSize(Ea).y}get depth(){return this.source.getSize(Ea).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Nd;Lt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],p=c[5],m=c[9],x=c[2],g=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,b=(p+1)/2,A=(f+1)/2,y=(u+h)/4,w=(d+x)/4,D=(m+g)/4;return v>b&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=y/n,s=w/n):b>A?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=y/i,s=D/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=w/s,i=D/s),this.set(n,i,s,t),this}let T=Math.sqrt((g-m)*(g-m)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(d-x)/T,this.z=(h-u)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends Tr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Lt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Mc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends Qh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class jd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zh extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,_n):_n.fromBufferAttribute(s,a),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),us.subVectors(this.max,Pr),ji.subVectors(e.a,Pr),qi.subVectors(e.b,Pr),Yi.subVectors(e.c,Pr),ui.subVectors(qi,ji),hi.subVectors(Yi,qi),wi.subVectors(ji,Yi);let t=[0,-ui.z,ui.y,0,-hi.z,hi.y,0,-wi.z,wi.y,ui.z,0,-ui.x,hi.z,0,-hi.x,wi.z,0,-wi.x,-ui.y,ui.x,0,-hi.y,hi.x,0,-wi.y,wi.x,0];return!Aa(t,ji,qi,Yi,us)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,ji,qi,Yi,us))?!1:(hs.crossVectors(ui,hi),t=[hs.x,hs.y,hs.z],Aa(t,ji,qi,Yi,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,ds=new xn,ji=new P,qi=new P,Yi=new P,ui=new P,hi=new P,wi=new P,Pr=new P,us=new P,hs=new P,Ri=new P;function Aa(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ri.fromArray(r,s);const o=i.x*Math.abs(Ri.x)+i.y*Math.abs(Ri.y)+i.z*Math.abs(Ri.z),c=e.dot(Ri),l=t.dot(Ri),u=n.dot(Ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const $h=new xn,Lr=new P,wa=new P;class In{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$h.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(wa)),this.expandByPoint(Lr.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new P,Ra=new P,fs=new P,fi=new P,Ca=new P,ps=new P,Pa=new P;class rs{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(Ra);const s=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=fi.dot(this.direction),c=-fi.dot(fs),l=fi.lengthSq(),u=Math.abs(1-a*a);let d,h,p,m;if(u>0)if(d=a*c-o,h=a*o-c,m=s*u,d>=0)if(h>=-m)if(h<=m){const x=1/u;d*=x,h*=x,p=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;else h<=-m?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l):h<=m?(d=0,h=Math.min(Math.max(-s,-c),s),p=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ra).addScaledVector(fs,h),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,s){Ca.subVectors(t,e),ps.subVectors(n,e),Pa.crossVectors(Ca,ps);let a=this.direction.dot(Pa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(ps.crossVectors(fi,ps));if(c<0)return null;const l=o*this.direction.dot(Ca.cross(fi));if(l<0||c+l>a)return null;const u=-o*fi.dot(Pa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,i,s,a,o,c,l,u,d,h,p,m,x,g){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,d,h,p,m,x,g)}set(e,t,n,i,s,a,o,c,l,u,d,h,p,m,x,g){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=m,f[11]=x,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,m=o*u,x=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=p+m*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,p=c*d,m=l*u,x=l*d;t[0]=h+x*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,p=c*d,m=l*u,x=l*d;t[0]=h-x*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,p=a*d,m=o*u,x=o*d;t[0]=c*u,t[4]=m*l-p,t[8]=h*l+x,t[1]=c*d,t[5]=x*l+h,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,p=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=x-h*d,t[8]=m*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*d+m,t[10]=h-x*d}else if(e.order==="XZY"){const h=a*c,p=a*l,m=o*c,x=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+x,t[5]=a*u,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ef,e,tf)}lookAt(e,t,n){const i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),pi.crossVectors(n,nn),pi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),pi.crossVectors(n,nn)),pi.normalize(),ms.crossVectors(nn,pi),i[0]=pi.x,i[4]=ms.x,i[8]=nn.x,i[1]=pi.y,i[5]=ms.y,i[9]=nn.y,i[2]=pi.z,i[6]=ms.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],p=n[13],m=n[2],x=n[6],g=n[10],f=n[14],T=n[3],v=n[7],b=n[11],A=n[15],y=i[0],w=i[4],D=i[8],_=i[12],S=i[1],C=i[5],U=i[9],F=i[13],z=i[2],H=i[6],G=i[10],J=i[14],W=i[3],ee=i[7],te=i[11],he=i[15];return s[0]=a*y+o*S+c*z+l*W,s[4]=a*w+o*C+c*H+l*ee,s[8]=a*D+o*U+c*G+l*te,s[12]=a*_+o*F+c*J+l*he,s[1]=u*y+d*S+h*z+p*W,s[5]=u*w+d*C+h*H+p*ee,s[9]=u*D+d*U+h*G+p*te,s[13]=u*_+d*F+h*J+p*he,s[2]=m*y+x*S+g*z+f*W,s[6]=m*w+x*C+g*H+f*ee,s[10]=m*D+x*U+g*G+f*te,s[14]=m*_+x*F+g*J+f*he,s[3]=T*y+v*S+b*z+A*W,s[7]=T*w+v*C+b*H+A*ee,s[11]=T*D+v*U+b*G+A*te,s[15]=T*_+v*F+b*J+A*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],p=e[14],m=e[3],x=e[7],g=e[11],f=e[15];return m*(+s*c*d-i*l*d-s*o*h+n*l*h+i*o*p-n*c*p)+x*(+t*c*p-t*l*h+s*a*h-i*a*p+i*l*u-s*c*u)+g*(+t*l*d-t*o*p-s*a*d+n*a*p+s*o*u-n*l*u)+f*(-i*o*u-t*c*d+t*o*h+i*a*d-n*a*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],p=e[11],m=e[12],x=e[13],g=e[14],f=e[15],T=d*g*l-x*h*l+x*c*p-o*g*p-d*c*f+o*h*f,v=m*h*l-u*g*l-m*c*p+a*g*p+u*c*f-a*h*f,b=u*x*l-m*d*l+m*o*p-a*x*p-u*o*f+a*d*f,A=m*d*c-u*x*c-m*o*h+a*x*h+u*o*g-a*d*g,y=t*T+n*v+i*b+s*A;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=T*w,e[1]=(x*h*s-d*g*s-x*i*p+n*g*p+d*i*f-n*h*f)*w,e[2]=(o*g*s-x*c*s+x*i*l-n*g*l-o*i*f+n*c*f)*w,e[3]=(d*c*s-o*h*s-d*i*l+n*h*l+o*i*p-n*c*p)*w,e[4]=v*w,e[5]=(u*g*s-m*h*s+m*i*p-t*g*p-u*i*f+t*h*f)*w,e[6]=(m*c*s-a*g*s-m*i*l+t*g*l+a*i*f-t*c*f)*w,e[7]=(a*h*s-u*c*s+u*i*l-t*h*l-a*i*p+t*c*p)*w,e[8]=b*w,e[9]=(m*d*s-u*x*s-m*n*p+t*x*p+u*n*f-t*d*f)*w,e[10]=(a*x*s-m*o*s+m*n*l-t*x*l-a*n*f+t*o*f)*w,e[11]=(u*o*s-a*d*s-u*n*l+t*d*l+a*n*p-t*o*p)*w,e[12]=A*w,e[13]=(u*x*i-m*d*i+m*n*h-t*x*h-u*n*g+t*d*g)*w,e[14]=(m*o*i-a*x*i-m*n*c+t*x*c+a*n*g-t*o*g)*w,e[15]=(a*d*i-u*o*i+u*n*c-t*d*c-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,d=o+o,h=s*l,p=s*u,m=s*d,x=a*u,g=a*d,f=o*d,T=c*l,v=c*u,b=c*d,A=n.x,y=n.y,w=n.z;return i[0]=(1-(x+f))*A,i[1]=(p+b)*A,i[2]=(m-v)*A,i[3]=0,i[4]=(p-b)*y,i[5]=(1-(h+f))*y,i[6]=(g+T)*y,i[7]=0,i[8]=(m+v)*w,i[9]=(g-T)*w,i[10]=(1-(h+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ki.set(i[0],i[1],i[2]).length();const a=Ki.set(i[4],i[5],i[6]).length(),o=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const l=1/s,u=1/a,d=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Bn,c=!1){const l=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),p=(n+i)/(n-i);let m,x;if(c)m=s/(a-s),x=a*s/(a-s);else if(o===Bn)m=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ks)m=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Bn,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),p=-(n+i)/(n-i);let m,x;if(c)m=1/(a-s),x=a/(a-s);else if(o===Bn)m=-2/(a-s),x=-(a+s)/(a-s);else if(o===Ks)m=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ki=new P,vn=new ze,ef=new P(0,0,0),tf=new P(1,1,1),pi=new P,ms=new P,nn=new P,hl=new ze,fl=new zt;class Dn{constructor(e=0,t=0,n=0,i=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class Sc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nf=0;const pl=new P,Ji=new zt,Qn=new ze,gs=new P,Dr=new P,rf=new P,sf=new zt,ml=new P(1,0,0),gl=new P(0,1,0),xl=new P(0,0,1),bl={type:"added"},af={type:"removed"},Qi={type:"childadded",child:null},La={type:"childremoved",child:null};class mt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new P,t=new Dn,n=new zt,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ve}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Dr,gs,this.up):Qn.lookAt(gs,Dr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bl),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}mt.DEFAULT_UP=new P(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new P,Zn=new P,Da=new P,$n=new P,Zi=new P,$i=new P,_l=new P,Ia=new P,Ua=new P,Na=new P,Fa=new tt,Oa=new tt,ka=new tt;class Tn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yn.subVectors(e,t),i.cross(yn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yn.subVectors(i,t),Zn.subVectors(n,t),Da.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(Zn),c=yn.dot(Da),l=Zn.dot(Zn),u=Zn.dot(Da),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(l*c-o*u)*h,m=(a*u-o*c)*h;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$n.x),c.addScaledVector(a,$n.y),c.addScaledVector(o,$n.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Fa.setScalar(0),Oa.setScalar(0),ka.setScalar(0),Fa.fromBufferAttribute(e,t),Oa.fromBufferAttribute(e,n),ka.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Fa,s.x),a.addScaledVector(Oa,s.y),a.addScaledVector(ka,s.z),a}static isFrontFacing(e,t,n,i){return yn.subVectors(n,t),Zn.subVectors(e,t),yn.cross(Zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),yn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Zi.subVectors(i,n),$i.subVectors(s,n),Ia.subVectors(e,n);const c=Zi.dot(Ia),l=$i.dot(Ia);if(c<=0&&l<=0)return t.copy(n);Ua.subVectors(e,i);const u=Zi.dot(Ua),d=$i.dot(Ua);if(u>=0&&d<=u)return t.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Zi,a);Na.subVectors(e,s);const p=Zi.dot(Na),m=$i.dot(Na);if(m>=0&&p<=m)return t.copy(s);const x=p*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector($i,o);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return _l.subVectors(s,i),o=(d-u)/(d-u+(p-m)),t.copy(i).addScaledVector(_l,o);const f=1/(g+x+h);return a=x*f,o=h*f,t.copy(n).addScaledVector(Zi,a).addScaledVector($i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Ba(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=yc(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ba(a,s,e+1/3),this.g=Ba(a,s,e),this.b=Ba(a,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=Tt){function n(s){s!==void 0&&parseFloat(s)<1&&ye("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ye("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return et.workingToColorSpace(kt.copy(this),e),Math.round(Ye(kt.r*255,0,255))*65536+Math.round(Ye(kt.g*255,0,255))*256+Math.round(Ye(kt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Tt){et.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(xs);const n=Hr(mi.h,xs.h,t),i=Hr(mi.s,xs.s,t),s=Hr(mi.l,xs.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Re;Re.NAMES=qd;let of=0;class Rn extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=lr,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lo,this.blendDst=uo,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ye(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lo&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class An extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new P,bs=new Oe;let cf=0;class yt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jo,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jo&&(e.usage=this.usage),e}}class Yd extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kd extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lf=0;const un=new ze,za=new mt,er=new P,rn=new xn,Ir=new xn,Ut=new P;class Pt extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?Kd:Yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return za.lookAt(e),za.updateMatrix(),this.applyMatrix4(za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(rn.min,Ir.min),rn.expandByPoint(Ut),Ut.addVectors(rn.max,Ir.max),rn.expandByPoint(Ut)):(rn.expandByPoint(Ir.min),rn.expandByPoint(Ir.max))}rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ut.fromBufferAttribute(o,l),c&&(er.fromBufferAttribute(e,l),Ut.add(er)),i=Math.max(i,n.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new P,c[D]=new P;const l=new P,u=new P,d=new P,h=new Oe,p=new Oe,m=new Oe,x=new P,g=new P;function f(D,_,S){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,_),d.fromBufferAttribute(n,S),h.fromBufferAttribute(s,D),p.fromBufferAttribute(s,_),m.fromBufferAttribute(s,S),u.sub(l),d.sub(l),p.sub(h),m.sub(h);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(C),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(C),o[D].add(x),o[_].add(x),o[S].add(x),c[D].add(g),c[_].add(g),c[S].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let D=0,_=T.length;D<_;++D){const S=T[D],C=S.start,U=S.count;for(let F=C,z=C+U;F<z;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new P,b=new P,A=new P,y=new P;function w(D){A.fromBufferAttribute(i,D),y.copy(A);const _=o[D];v.copy(_),v.sub(A.multiplyScalar(A.dot(_))).normalize(),b.crossVectors(y,_);const C=b.dot(c[D])<0?-1:1;a.setXYZW(D,v.x,v.y,v.z,C)}for(let D=0,_=T.length;D<_;++D){const S=T[D],C=S.start,U=S.count;for(let F=C,z=C+U;F<z;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new P,s=new P,a=new P,o=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const m=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let p=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let f=0;f<u;f++)h[m++]=l[p++]}return new yt(h,u,d)}if(this.index===null)return ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const p=l[d];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new ze,Ci=new rs,_s=new In,yl=new P,vs=new P,ys=new P,Ms=new P,Ga=new P,Ss=new P,Ml=new P,Ts=new P;class Je extends mt{constructor(e=new Pt,t=new An){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ss.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Ga.fromBufferAttribute(d,e),a?Ss.addScaledVector(Ga,u):Ss.addScaledVector(Ga.sub(t),u))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),!(_s.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(_s,yl)===null||Ci.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(vl.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(vl),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],f=a[g.materialIndex],T=Math.max(g.start,p.start),v=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let b=T,A=v;b<A;b+=3){const y=o.getX(b),w=o.getX(b+1),D=o.getX(b+2);i=Es(this,f,e,n,l,u,d,y,w,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const T=o.getX(g),v=o.getX(g+1),b=o.getX(g+2);i=Es(this,a,e,n,l,u,d,T,v,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=h.length;m<x;m++){const g=h[m],f=a[g.materialIndex],T=Math.max(g.start,p.start),v=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let b=T,A=v;b<A;b+=3){const y=b,w=b+1,D=b+2;i=Es(this,f,e,n,l,u,d,y,w,D),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=m,f=x;g<f;g+=3){const T=g,v=g+1,b=g+2;i=Es(this,a,e,n,l,u,d,T,v,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function df(r,e,t,n,i,s,a,o){let c;if(e.side===jt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Ln,o),c===null)return null;Ts.copy(o),Ts.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ts);return l<t.near||l>t.far?null:{distance:l,point:Ts.clone(),object:r}}function Es(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,vs),r.getVertexPosition(c,ys),r.getVertexPosition(l,Ms);const u=df(r,e,t,n,vs,ys,Ms,Ml);if(u){const d=new P;Tn.getBarycoord(Ml,vs,ys,Ms,d),i&&(u.uv=Tn.getInterpolatedAttribute(i,o,c,l,d,new Oe)),s&&(u.uv1=Tn.getInterpolatedAttribute(s,o,c,l,d,new Oe)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,c,l,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new P,materialIndex:0};Tn.getNormal(vs,ys,Ms,h.normal),u.face=h,u.barycoord=d}return u}class Si extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,p=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(d,2));function m(x,g,f,T,v,b,A,y,w,D,_){const S=b/w,C=A/D,U=b/2,F=A/2,z=y/2,H=w+1,G=D+1;let J=0,W=0;const ee=new P;for(let te=0;te<G;te++){const he=te*C-F;for(let Le=0;Le<H;Le++){const Ie=Le*S-U;ee[x]=Ie*T,ee[g]=he*v,ee[f]=z,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[g]=0,ee[f]=y>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Le/w),d.push(1-te/D),J+=1}}for(let te=0;te<D;te++)for(let he=0;he<w;he++){const Le=h+he+H*te,Ie=h+he+H*(te+1),We=h+(he+1)+H*(te+1),it=h+(he+1)+H*te;c.push(Le,Ie,it),c.push(Ie,We,it),W+=6}o.addGroup(p,W,_),p+=W,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Si(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){const e={};for(let t=0;t<r.length;t++){const n=gr(r[t]);for(const i in n)e[i]=n[i]}return e}function uf(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Jd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const hf={clone:gr,merge:Ht};var ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new P,Sl=new Oe,Tl=new Oe;class Wt extends Qd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mr*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,Tl),t.subVectors(Tl,Sl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class mf extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Wt(tr,nr,e,t);i.layers=this.layers,this.add(i);const s=new Wt(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new Wt(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new Wt(tr,nr,e,t);o.layers=this.layers,this.add(o);const c=new Wt(tr,nr,e,t);c.layers=this.layers,this.add(c);const l=new Wt(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Zd extends Lt{constructor(e=[],t=fr,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gf extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Zd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Si(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:gr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:ai});s.uniforms.tEquirect.value=t;const a=new Je(i,s),o=t.minFilter;return t.minFilter===ri&&(t.minFilter=Xt),new mf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Bt extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xf={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),f=this._getHandJoint(l,x);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,m=.005;l.inputState.pinching&&h>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Tc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $d extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jo,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vt=new P;class Ec{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ec(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const El=new P,Al=new tt,wl=new tt,_f=new P,Rl=new ze,As=new P,Ha=new In,Cl=new ze,Wa=new rs;class vf extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tl,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,As),this.boundingBox.expandByPoint(As)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,As),this.boundingSphere.expandByPoint(As)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(i),e.ray.intersectsSphere(Ha)!==!1&&(Cl.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(Cl),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mh?this.bindMatrixInverse.copy(this.bindMatrix).invert():ye("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Al.fromBufferAttribute(i.attributes.skinIndex,e),wl.fromBufferAttribute(i.attributes.skinWeight,e),El.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=wl.getComponent(s);if(a!==0){const o=Al.getComponent(s);Rl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(_f.copy(El).applyMatrix4(Rl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eu extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ac extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=qt,u=qt,d,h){super(null,a,o,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pl=new ze,yf=new ze;class wc{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ye("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:yf;Pl.multiplyMatrices(o,t[s]),Pl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ac(t,e,e,fn,En);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(ye("Skeleton: No bone found with UUID:",s),a=new eu),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Qs extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ir=new ze,Ll=new ze,ws=[],Dl=new xn,Mf=new ze,Ur=new Je,Nr=new In;class Rc extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Mf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Dl.copy(e.boundingBox).applyMatrix4(ir),this.boundingBox.union(Dl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ir),Nr.copy(e.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ir),Ll.multiplyMatrices(n,ir),Ur.matrixWorld=Ll,Ur.raycast(e,ws);for(let a=0,o=ws.length;a<o;a++){const c=ws[a];c.instanceId=s,c.object=this,t.push(c)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ac(new Float32Array(i*this.count),i,this.count,mc,En));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Xa=new P,Sf=new P,Tf=new Ve;class Ui{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xa.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tf.getNormalMatrix(e),i=this.coplanarPoint(Xa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new In,Ef=new Oe(.5,.5),Rs=new P;class Cc{constructor(e=new Ui,t=new Ui,n=new Ui,i=new Ui,s=new Ui,a=new Ui){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],p=s[7],m=s[8],x=s[9],g=s[10],f=s[11],T=s[12],v=s[13],b=s[14],A=s[15];if(i[0].setComponents(l-a,p-u,f-m,A-T).normalize(),i[1].setComponents(l+a,p+u,f+m,A+T).normalize(),i[2].setComponents(l+o,p+d,f+x,A+v).normalize(),i[3].setComponents(l-o,p-d,f-x,A-v).normalize(),n)i[4].setComponents(c,h,g,b).normalize(),i[5].setComponents(l-c,p-h,f-g,A-b).normalize();else if(i[4].setComponents(l-c,p-h,f-g,A-b).normalize(),t===Bn)i[5].setComponents(l+c,p+h,f+g,A+b).normalize();else if(t===Ks)i[5].setComponents(c,h,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=Ef.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Rs.x=i.normal.x>0?e.max.x:e.min.x,Rs.y=i.normal.y>0?e.max.y:e.min.y,Rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pc extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zs=new P,$s=new P,Il=new ze,Fr=new rs,Cs=new In,ja=new P,Ul=new P;class Lc extends mt{constructor(e=new Pt,t=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Zs.fromBufferAttribute(t,i-1),$s.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Zs.distanceTo($s);e.setAttribute("lineDistance",new Rt(n,1))}else ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;Il.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(Il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=l){const f=u.getX(x),T=u.getX(x+1),v=Ps(this,e,Fr,c,f,T,x);v&&t.push(v)}if(this.isLineLoop){const x=u.getX(m-1),g=u.getX(p),f=Ps(this,e,Fr,c,x,g,m-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=p,g=m-1;x<g;x+=l){const f=Ps(this,e,Fr,c,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=Ps(this,e,Fr,c,m-1,p,m-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ps(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Zs.fromBufferAttribute(o,i),$s.fromBufferAttribute(o,s),t.distanceSqToSegment(Zs,$s,ja,Ul)>n)return;ja.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(ja);if(!(l<e.near||l>e.far))return{distance:l,point:Ul.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Nl=new P,Fl=new P;class tu extends Lc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Nl.fromBufferAttribute(t,i),Fl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nl.distanceTo(Fl);e.setAttribute("lineDistance",new Rt(n,1))}else ye("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Af extends Lc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nu extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ol=new ze,Qo=new rs,Ls=new In,Ds=new P;class Dc extends mt{constructor(e=new Pt,t=new nu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(i),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;Ol.copy(i).invert(),Qo.copy(e.ray).applyMatrix4(Ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let m=h,x=p;m<x;m++){const g=l.getX(m);Ds.fromBufferAttribute(d,g),kl(Ds,g,c,i,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=h,x=p;m<x;m++)Ds.fromBufferAttribute(d,m),kl(Ds,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kl(r,e,t,n,i,s,a){const o=Qo.distanceSqToPoint(r);if(o<t){const c=new P;Qo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ua extends Lt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class iu extends Lt{constructor(e,t,n=zi,i,s,a,o=qt,c=qt,l,u=Kr,d=1){if(u!==Kr&&u!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ru extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ic extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new P,u=new Oe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const p=n+d/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Rt(a,3)),this.setAttribute("normal",new Rt(o,3)),this.setAttribute("uv",new Rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wr extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],p=[];let m=0;const x=[],g=n/2;let f=0;T(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function T(){const b=new P,A=new P;let y=0;const w=(t-e)/n;for(let D=0;D<=s;D++){const _=[],S=D/s,C=S*(t-e)+e;for(let U=0;U<=i;U++){const F=U/i,z=F*c+o,H=Math.sin(z),G=Math.cos(z);A.x=C*H,A.y=-S*n+g,A.z=C*G,d.push(A.x,A.y,A.z),b.set(H,w,G).normalize(),h.push(b.x,b.y,b.z),p.push(F,1-S),_.push(m++)}x.push(_)}for(let D=0;D<i;D++)for(let _=0;_<s;_++){const S=x[_][D],C=x[_+1][D],U=x[_+1][D+1],F=x[_][D+1];(e>0||_!==0)&&(u.push(S,C,F),y+=3),(t>0||_!==s-1)&&(u.push(C,U,F),y+=3)}l.addGroup(f,y,0),f+=y}function v(b){const A=m,y=new Oe,w=new P;let D=0;const _=b===!0?e:t,S=b===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,g*S,0),h.push(0,S,0),p.push(.5,.5),m++;const C=m;for(let U=0;U<=i;U++){const z=U/i*c+o,H=Math.cos(z),G=Math.sin(z);w.x=_*G,w.y=g*S,w.z=_*H,d.push(w.x,w.y,w.z),h.push(0,S,0),y.x=H*.5+.5,y.y=G*.5*S+.5,p.push(y.x,y.y),m++}for(let U=0;U<i;U++){const F=A+U,z=C+U;b===!0?u.push(z,z+1,F):u.push(z+1,z,F),D+=3}l.addGroup(f,D,b===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qn extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=e/o,h=t/c,p=[],m=[],x=[],g=[];for(let f=0;f<u;f++){const T=f*h-a;for(let v=0;v<l;v++){const b=v*d-s;m.push(b,-T,0),x.push(0,0,1),g.push(v/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const v=T+l*f,b=T+l*(f+1),A=T+1+l*(f+1),y=T+1+l*f;p.push(v,b,y),p.push(b,A,y)}this.setIndex(p),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ts extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new P,h=new P,p=[],m=[],x=[],g=[];for(let f=0;f<=n;f++){const T=[],v=f/n;let b=0;f===0&&a===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){const y=A/t;d.x=-e*Math.cos(i+y*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(i+y*s)*Math.sin(a+v*o),m.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),g.push(y+b,1-v),T.push(l++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const v=u[f][T+1],b=u[f][T],A=u[f+1][T],y=u[f+1][T+1];(f!==0||a>0)&&p.push(v,b,y),(f!==n-1||c<Math.PI)&&p.push(b,A,y)}this.setIndex(p),this.setAttribute("position",new Rt(m,3)),this.setAttribute("normal",new Rt(x,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zn extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends zn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class wf extends Rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Rf extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cf extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Is(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Pf(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Lf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function su(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class ss{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Df extends ss{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:s=e,o=2*t-n;break;case rl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case il:a=e,c=2*n-t;break;case rl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,f=-h*g+2*h*x-h*m,T=(1+h)*g+(-1.5-2*h)*x+(-.5+h)*m+1,v=(-1-p)*g+(1.5+p)*x+.5*m,b=p*g-p*x;for(let A=0;A!==o;++A)s[A]=f*a[u+A]+T*a[l+A]+v*a[c+A]+b*a[d+A];return s}}class If extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*d+a[c+h]*u;return s}}class Uf extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Is(t,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Is(e.times,Array),values:Is(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new If(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Df(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Zr:t=this.InterpolantFactoryMethodLinear;break;case ya:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ye("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Zr;case this.InterpolantFactoryMethodSmooth:return ya}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){qe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Pf(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ya,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,h=d-n,p=d+n;for(let m=0;m!==n;++m){const x=t[d+m];if(x!==t[h+m]||x!==t[p+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,h=a*n;for(let p=0;p!==n;++p)t[h+p]=t[d+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Zr;class Er extends Un{constructor(e,t,n){super(e,t,n)}}Er.prototype.ValueTypeName="bool";Er.prototype.ValueBufferType=Array;Er.prototype.DefaultInterpolation=Qr;Er.prototype.InterpolantFactoryMethodLinear=void 0;Er.prototype.InterpolantFactoryMethodSmooth=void 0;class au extends Un{constructor(e,t,n,i){super(e,t,n,i)}}au.prototype.ValueTypeName="color";class xr extends Un{constructor(e,t,n,i){super(e,t,n,i)}}xr.prototype.ValueTypeName="number";class Nf extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)zt.slerpFlat(s,0,a,l-o,a,l,c);return s}}class br extends Un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Nf(this.times,this.values,this.getValueSize(),e)}}br.prototype.ValueTypeName="quaternion";br.prototype.InterpolantFactoryMethodSmooth=void 0;class Ar extends Un{constructor(e,t,n){super(e,t,n)}}Ar.prototype.ValueTypeName="string";Ar.prototype.ValueBufferType=Array;Ar.prototype.DefaultInterpolation=Qr;Ar.prototype.InterpolantFactoryMethodLinear=void 0;Ar.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends Un{constructor(e,t,n,i){super(e,t,n,i)}}_r.prototype.ValueTypeName="vector";class Ff{constructor(e="",t=-1,n=[],i=gh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(kf(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Un.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Lf(c);c=Bl(c,1,u),l=Bl(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new xr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(ye("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return qe("AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,p,m,x){if(p.length!==0){const g=[],f=[];su(p,g,f,m),g.length!==0&&x.push(new d(h,g,f))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let x=0;x<h[m].morphTargets.length;x++)p[h[m].morphTargets[x]]=-1;for(const x in p){const g=[],f=[];for(let T=0;T!==h[m].morphTargets.length;++T){const v=h[m];g.push(v.time),f.push(v.morphTarget===x?1:0)}i.push(new xr(".morphTargetInfluence["+x+"]",g,f))}c=p.length*a}else{const p=".bones["+t[d].name+"]";n(_r,p+".position",h,"pos",i),n(br,p+".quaternion",h,"rot",i),n(_r,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Of(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return _r;case"color":return au;case"quaternion":return br;case"bool":case"boolean":return Er;case"string":return Ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function kf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Of(r.type);if(r.times===void 0){const t=[],n=[];su(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const si={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Bf{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const p=l[d],m=l[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zf=new Bf;class wr{constructor(e){this.manager=e!==void 0?e:zf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ei={};class Gf extends Error{constructor(e,t){super(e),this.response=t}}class ou extends wr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=si.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ye("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ei[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=h?parseInt(h):0,m=p!==0;let x=0;const g=new ReadableStream({start(f){T();function T(){d.read().then(({done:v,value:b})=>{if(v)f.close();else{x+=b.byteLength;const A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:p});for(let y=0,w=u.length;y<w;y++){const D=u[y];D.onProgress&&D.onProgress(A)}f.enqueue(b),T()}},v=>{f.error(v)})}}});return new Response(g)}else throw new Gf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(m=>p.decode(m))}}}).then(l=>{si.add(`file:${e}`,l);const u=ei[e];delete ei[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=ei[e];if(u===void 0)throw this.manager.itemError(e),l;delete ei[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const rr=new WeakMap;class Vf extends wr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=si.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=rr.get(a);d===void 0&&(d=[],rr.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=$r("img");function c(){u(),t&&t(this);const d=rr.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}rr.delete(this),s.manager.itemEnd(e)}function l(d){u(),i&&i(d),si.remove(`image:${e}`);const h=rr.get(this)||[];for(let p=0;p<h.length;p++){const m=h[p];m.onError&&m.onError(d)}rr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),si.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Uc extends wr{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new Vf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ha extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Hf extends ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qa=new ze,zl=new P,Gl=new P;class Nc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Gl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gl),t.updateMatrixWorld(),qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wf extends Nc{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=mr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xf extends ha{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Vl=new ze,Or=new P,Ya=new P;class jf extends Nc{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Or.setFromMatrixPosition(e.matrixWorld),n.position.copy(Or),Ya.copy(n.position),Ya.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ya),n.updateMatrixWorld(),i.makeTranslation(-Or.x,-Or.y,-Or.z),Vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl,n.coordinateSystem,n.reversedDepth)}}class fa extends ha{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fc extends Qd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qf extends Nc{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vr extends ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new qf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Yf extends Pt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const Ka=new WeakMap;class Kf extends wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ye("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ye("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=si.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(Ka.has(a)===!0)i&&i(Ka.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return si.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ka.set(c,l),si.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});si.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Jf extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Oc="\\[\\]\\.:\\/",Zf=new RegExp("["+Oc+"]","g"),kc="[^"+Oc+"]",$f="[^"+Oc.replace("\\.","")+"]",ep=/((?:WC+[\/:])*)/.source.replace("WC",kc),tp=/(WCOD+)?/.source.replace("WCOD",$f),np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kc),ip=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kc),rp=new RegExp("^"+ep+tp+np+ip+"$"),sp=["material","materials","bones","map"];class ap{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zf,"")}static parseTrackName(e){const t=rp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);sp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=ap;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hl=new ze;class op{constructor(e,t,n=0,i=1/0){this.ray=new rs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Sc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):qe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hl),this}intersectObject(e,t=!0,n=[]){return Zo(e,this,n,t),n.sort(Wl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Zo(e[i],this,n,t);return n.sort(Wl),n}}function Wl(r,e){return r.distance-e.distance}function Zo(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Zo(s[a],e,t,!0)}}function Xl(r,e,t,n){const i=cp(n);switch(t){case Gd:return r*e;case mc:return r*e/i.components*i.byteLength;case gc:return r*e/i.components*i.byteLength;case xc:return r*e*2/i.components*i.byteLength;case bc:return r*e*2/i.components*i.byteLength;case Vd:return r*e*3/i.components*i.byteLength;case fn:return r*e*4/i.components*i.byteLength;case _c:return r*e*4/i.components*i.byteLength;case Os:case ks:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bs:case zs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mo:case To:return Math.max(r,16)*Math.max(e,8)/4;case yo:case So:return Math.max(r,8)*Math.max(e,8)/2;case Eo:case Ao:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Io:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ko:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Vo:case Ho:case Wo:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xo:case jo:return Math.ceil(r/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cp(r){switch(r){case Wn:case Od:return{byteLength:1,components:1};case qr:case kd:case Sr:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case zi:case hc:case En:return{byteLength:4,components:1};case Bd:case zd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function lp(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,u);else{d.sort((p,m)=>p.start-m.start);let h=0;for(let p=1;p<d.length;p++){const m=d[h],x=d[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,m=d.length;p<m;p++){const x=d[p];r.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Np=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_m=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Om=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,b0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,F0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,G0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:dp,alphahash_pars_fragment:up,alphamap_fragment:hp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:xp,batching_pars_vertex:bp,batching_vertex:_p,begin_vertex:vp,beginnormal_vertex:yp,bsdfs:Mp,iridescence_fragment:Sp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:wp,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Pp,color_pars_vertex:Lp,color_vertex:Dp,common:Ip,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Fp,displacementmap_vertex:Op,emissivemap_fragment:kp,emissivemap_pars_fragment:Bp,colorspace_fragment:zp,colorspace_pars_fragment:Gp,envmap_fragment:Vp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:nm,envmap_vertex:jp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Kp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Qp,lightmap_pars_fragment:Zp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:em,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:rm,lights_phong_fragment:sm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:cm,lights_fragment_begin:lm,lights_fragment_maps:dm,lights_fragment_end:um,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:pm,logdepthbuf_vertex:mm,map_fragment:gm,map_pars_fragment:xm,map_particle_fragment:bm,map_particle_pars_fragment:_m,metalnessmap_fragment:vm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Mm,morphcolor_vertex:Sm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Em,morphtarget_vertex:Am,normal_fragment_begin:wm,normal_fragment_maps:Rm,normal_pars_fragment:Cm,normal_pars_vertex:Pm,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Fm,opaque_fragment:Om,packing:km,premultiplied_alpha_fragment:Bm,project_vertex:zm,dithering_fragment:Gm,dithering_pars_fragment:Vm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:Xm,shadowmap_pars_vertex:jm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:Km,skinning_pars_vertex:Jm,skinning_vertex:Qm,skinnormal_vertex:Zm,specularmap_fragment:$m,specularmap_pars_fragment:e0,tonemapping_fragment:t0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:r0,uv_pars_fragment:s0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:c0,background_vert:l0,background_frag:d0,backgroundCube_vert:u0,backgroundCube_frag:h0,cube_vert:f0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:x0,distanceRGBA_frag:b0,equirect_vert:_0,equirect_frag:v0,linedashed_vert:y0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:T0,meshlambert_vert:E0,meshlambert_frag:A0,meshmatcap_vert:w0,meshmatcap_frag:R0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:I0,meshphysical_frag:U0,meshtoon_vert:N0,meshtoon_frag:F0,points_vert:O0,points_frag:k0,shadow_vert:B0,shadow_frag:z0,sprite_vert:G0,sprite_frag:V0},oe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},On={basic:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Ht([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Ht([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Ht([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Ht([oe.points,oe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Ht([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Ht([oe.common,oe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Ht([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Ht([oe.sprite,oe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Ht([oe.common,oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Ht([oe.lights,oe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};On.physical={uniforms:Ht([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Us={r:0,b:0,g:0},Li=new Dn,H0=new ze;function W0(r,e,t,n,i,s,a){const o=new Re(0);let c=s===!0?0:1,l,u,d=null,h=0,p=null;function m(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function x(v){let b=!1;const A=m(v);A===null?f(o,c):A&&A.isColor&&(f(A,1),b=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(v,b){const A=m(b);A&&(A.isCubeTexture||A.mapping===da)?(u===void 0&&(u=new Je(new Si(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:gr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(y,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Li.copy(b.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(Li)),u.material.toneMapped=et.getTransfer(A.colorSpace)!==dt,(d!==A||h!==A.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,d=A,h=A.version,p=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Je(new qn(2,2),new Ct({name:"BackgroundMaterial",uniforms:gr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=et.getTransfer(A.colorSpace)!==dt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||h!==A.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,d=A,h=A.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function f(v,b){v.getRGB(Us,Jd(r)),n.buffers.color.setClear(Us.r,Us.g,Us.b,b,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(o,c)},render:x,addToRenderList:g,dispose:T}}function X0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(S,C,U,F,z){let H=!1;const G=d(F,U,C);s!==G&&(s=G,l(s.object)),H=p(S,F,U,z),H&&m(S,F,U,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,b(S,C,U,F),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function d(S,C,U){const F=U.wireframe===!0;let z=n[S.id];z===void 0&&(z={},n[S.id]=z);let H=z[C.id];H===void 0&&(H={},z[C.id]=H);let G=H[F];return G===void 0&&(G=h(c()),H[F]=G),G}function h(S){const C=[],U=[],F=[];for(let z=0;z<t;z++)C[z]=0,U[z]=0,F[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:F,object:S,attributes:{},index:null}}function p(S,C,U,F){const z=s.attributes,H=C.attributes;let G=0;const J=U.getAttributes();for(const W in J)if(J[W].location>=0){const te=z[W];let he=H[W];if(he===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),te===void 0||te.attribute!==he||he&&te.data!==he.data)return!0;G++}return s.attributesNum!==G||s.index!==F}function m(S,C,U,F){const z={},H=C.attributes;let G=0;const J=U.getAttributes();for(const W in J)if(J[W].location>=0){let te=H[W];te===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const he={};he.attribute=te,te&&te.data&&(he.data=te.data),z[W]=he,G++}s.attributes=z,s.attributesNum=G,s.index=F}function x(){const S=s.newAttributes;for(let C=0,U=S.length;C<U;C++)S[C]=0}function g(S){f(S,0)}function f(S,C){const U=s.newAttributes,F=s.enabledAttributes,z=s.attributeDivisors;U[S]=1,F[S]===0&&(r.enableVertexAttribArray(S),F[S]=1),z[S]!==C&&(r.vertexAttribDivisor(S,C),z[S]=C)}function T(){const S=s.newAttributes,C=s.enabledAttributes;for(let U=0,F=C.length;U<F;U++)C[U]!==S[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function v(S,C,U,F,z,H,G){G===!0?r.vertexAttribIPointer(S,C,U,z,H):r.vertexAttribPointer(S,C,U,F,z,H)}function b(S,C,U,F){x();const z=F.attributes,H=U.getAttributes(),G=C.defaultAttributeValues;for(const J in H){const W=H[J];if(W.location>=0){let ee=z[J];if(ee===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const te=ee.normalized,he=ee.itemSize,Le=e.get(ee);if(Le===void 0)continue;const Ie=Le.buffer,We=Le.type,it=Le.bytesPerElement,q=We===r.INT||We===r.UNSIGNED_INT||ee.gpuType===hc;if(ee.isInterleavedBufferAttribute){const B=ee.data,Z=B.stride,pe=ee.offset;if(B.isInstancedInterleavedBuffer){for(let fe=0;fe<W.locationSize;fe++)f(W.location+fe,B.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let fe=0;fe<W.locationSize;fe++)g(W.location+fe);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let fe=0;fe<W.locationSize;fe++)v(W.location+fe,he/W.locationSize,We,te,Z*it,(pe+he/W.locationSize*fe)*it,q)}else{if(ee.isInstancedBufferAttribute){for(let B=0;B<W.locationSize;B++)f(W.location+B,ee.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let B=0;B<W.locationSize;B++)g(W.location+B);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let B=0;B<W.locationSize;B++)v(W.location+B,he/W.locationSize,We,te,he*it,he/W.locationSize*B*it,q)}}else if(G!==void 0){const te=G[J];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(W.location,te);break;case 3:r.vertexAttrib3fv(W.location,te);break;case 4:r.vertexAttrib4fv(W.location,te);break;default:r.vertexAttrib1fv(W.location,te)}}}}T()}function A(){D();for(const S in n){const C=n[S];for(const U in C){const F=C[U];for(const z in F)u(F[z].object),delete F[z];delete C[U]}delete n[S]}}function y(S){if(n[S.id]===void 0)return;const C=n[S.id];for(const U in C){const F=C[U];for(const z in F)u(F[z].object),delete F[z];delete C[U]}delete n[S.id]}function w(S){for(const C in n){const U=n[C];if(U[S.id]===void 0)continue;const F=U[S.id];for(const z in F)u(F[z].object),delete F[z];delete U[S.id]}}function D(){_(),a=!0,s!==i&&(s=i,l(s.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:T}}function j0(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(r.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let p=0;for(let m=0;m<d;m++)p+=u[m];t.update(p,n,1)}function c(l,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],u[m],h[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let m=0;for(let x=0;x<d;x++)m+=u[x]*h[x];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function q0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==fn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const D=w===Sr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Wn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!D)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(ye("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=m>0,y=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:A,maxSamples:y}}function Y0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ui,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||i;return i=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const m=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,f=r.get(d);if(!i||m===null||m.length===0||s&&!g)s?u(null):l();else{const T=s?0:n,v=T*4;let b=f.clippingState||null;c.value=b,b=u(m,h,v,p);for(let A=0;A!==v;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,m){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=c.value,m!==!0||g===null){const f=p+x*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,b=p;v!==x;++v,b+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(g,b),g[b+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function K0(r){let e=new WeakMap;function t(a,o){return o===_o?a.mapping=fr:o===vo&&(a.mapping=pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===_o||o===vo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new gf(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const vi=4,jl=[.125,.215,.35,.446,.526,.582],Oi=20,J0=512,kr=new Fc,ql=new Re;let Ja=null,Qa=0,Za=0,$a=!1;const Q0=new P;class $o{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Q0}=s;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,Za),this._renderer.xr.enabled=$a,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Sr,format:fn,colorSpace:Yt,depthBuffer:!1},i=Yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Z0(s)),this._blurMaterial=eg(s,e,t)}return i}_compileMaterial(e){const t=new Je(new Pt,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,i,s){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(ql),d.toneMapping=yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new Si,new An({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let f=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,f=!0):(g.color.copy(ql),f=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[v],s.y,s.z)):b===1?(c.up.set(0,0,l[v]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[v],s.z)):(c.up.set(0,l[v],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[v]));const A=this._cubeSize;sr(i,b*A,v>2?A:0,A,A),d.setRenderTarget(i),f&&d.render(x,c),d.render(e,c)}d.toneMapping=p,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;sr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){const T=3*Math.max(this._cubeSize,16),v=4*this._cubeSize;this._ggxMaterial=$0(this._lodMax,T,v)}const a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=.05+l*.95,p=d*h,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-vi?n-m+vi:0),f=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,sr(s,g,f,3*x,2*x),i.setRenderTarget(s),i.render(o,kr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,sr(e,g,f,3*x,2*x),i.setRenderTarget(e),i.render(o,kr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[i];d.material=l;const h=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Oi-1),x=s/m,g=isFinite(s)?1+Math.floor(u*x):Oi;g>Oi&&ye(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Oi}`);const f=[];let T=0;for(let w=0;w<Oi;++w){const D=w/x,_=Math.exp(-D*D/2);f.push(_),w===0?T+=_:w<g&&(T+=2*_)}for(let w=0;w<f.length;w++)f[w]=f[w]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=m,h.mipInt.value=v-n;const b=this._sizeLods[i],A=3*b*(i>v-vi?i-v+vi:0),y=4*(this._cubeSize-b);sr(t,A,y,3*b,2*b),c.setRenderTarget(t),c.render(d,kr)}}function Z0(r){const e=[],t=[],n=[];let i=r;const s=r-vi+1+jl.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-vi?c=jl[a-r+vi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,m=6,x=3,g=2,f=1,T=new Float32Array(x*m*p),v=new Float32Array(g*m*p),b=new Float32Array(f*m*p);for(let y=0;y<p;y++){const w=y%3*2/3-1,D=y>2?0:-1,_=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];T.set(_,x*m*y),v.set(h,g*m*y);const S=[y,y,y,y,y,y];b.set(S,f*m*y)}const A=new Pt;A.setAttribute("position",new yt(T,x)),A.setAttribute("uv",new yt(v,g)),A.setAttribute("faceIndex",new yt(b,f)),n.push(new Je(A,null)),i>vi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yl(r,e,t){const n=new Gi(r,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function $0(r,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function eg(r,e,t){const n=new Float32Array(Oi),i=new P(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Kl(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Jl(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===_o||c===vo,u=c===fr||c===pr;if(l||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new $o(r)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new $o(r)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ng(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&es("WebGLRenderer: "+n+" extension not supported."),i}}}function ig(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const p in h)e.update(h[p],r.ARRAY_BUFFER)}function l(d){const h=[],p=d.index,m=d.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let v=0,b=T.length;v<b;v+=3){const A=T[v+0],y=T[v+1],w=T[v+2];h.push(A,y,y,w,w,A)}}else if(m!==void 0){const T=m.array;x=m.version;for(let v=0,b=T.length/3-1;v<b;v+=3){const A=v+0,y=v+1,w=v+2;h.push(A,y,y,w,w,A)}}else return;const g=new(Xd(h)?Kd:Yd)(h,1);g.version=x;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function rg(r,e,t){let n;function i(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,p){r.drawElements(n,p,s,h*a),t.update(p,n,1)}function l(h,p,m){m!==0&&(r.drawElementsInstanced(n,p,s,h*a,m),t.update(p,n,m))}function u(h,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,m);let g=0;for(let f=0;f<m;f++)g+=p[f];t.update(g,n,1)}function d(h,p,m,x){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<h.length;f++)l(h[f]/a,p[f],x[f]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,x,0,m);let f=0;for(let T=0;T<m;T++)f+=p[T]*x[T];t.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function sg(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ag(r,e,t){const n=new WeakMap,i=new tt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let _=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",_)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let b=o.attributes.position.count*v,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const y=new Float32Array(b*A*4*d),w=new jd(y,b,A,d);w.type=En,w.needsUpdate=!0;const D=v*4;for(let S=0;S<d;S++){const C=g[S],U=f[S],F=T[S],z=b*A*4*S;for(let H=0;H<C.count;H++){const G=H*D;p===!0&&(i.fromBufferAttribute(C,H),y[z+G+0]=i.x,y[z+G+1]=i.y,y[z+G+2]=i.z,y[z+G+3]=0),m===!0&&(i.fromBufferAttribute(U,H),y[z+G+4]=i.x,y[z+G+5]=i.y,y[z+G+6]=i.z,y[z+G+7]=0),x===!0&&(i.fromBufferAttribute(F,H),y[z+G+8]=i.x,y[z+G+9]=i.y,y[z+G+10]=i.z,y[z+G+11]=F.itemSize===4?i.w:1)}}h={count:d,texture:w,size:new Oe(b,A)},n.set(o,h),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<l.length;x++)p+=l[x];const m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function og(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=e.get(c,u);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const lu=new Lt,Ql=new iu(1,1),du=new jd,uu=new Zh,hu=new Zd,Zl=[],$l=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function Rr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Zl[i];if(s===void 0&&(s=new Float32Array(i),Zl[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ma(r,e){let t=$l[e];t===void 0&&(t=new Int32Array(e),$l[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function dg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function ug(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function hg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;nd.set(n),r.uniformMatrix2fv(this.addr,!1,nd),It(t,n)}}function fg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;td.set(n),r.uniformMatrix3fv(this.addr,!1,td),It(t,n)}}function pg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;ed.set(n),r.uniformMatrix4fv(this.addr,!1,ed),It(t,n)}}function mg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function gg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function _g(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function vg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function Mg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function Sg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ql.compareFunction=Wd,s=Ql):s=lu,t.setTexture2D(e||s,i)}function Tg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||uu,i)}function Eg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hu,i)}function Ag(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||du,i)}function wg(r){switch(r){case 5126:return cg;case 35664:return lg;case 35665:return dg;case 35666:return ug;case 35674:return hg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return xg;case 35669:case 35673:return bg;case 5125:return _g;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Ag}}function Rg(r,e){r.uniform1fv(this.addr,e)}function Cg(r,e){const t=Rr(e,this.size,2);r.uniform2fv(this.addr,t)}function Pg(r,e){const t=Rr(e,this.size,3);r.uniform3fv(this.addr,t)}function Lg(r,e){const t=Rr(e,this.size,4);r.uniform4fv(this.addr,t)}function Dg(r,e){const t=Rr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ig(r,e){const t=Rr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ug(r,e){const t=Rr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ng(r,e){r.uniform1iv(this.addr,e)}function Fg(r,e){r.uniform2iv(this.addr,e)}function Og(r,e){r.uniform3iv(this.addr,e)}function kg(r,e){r.uniform4iv(this.addr,e)}function Bg(r,e){r.uniform1uiv(this.addr,e)}function zg(r,e){r.uniform2uiv(this.addr,e)}function Gg(r,e){r.uniform3uiv(this.addr,e)}function Vg(r,e){r.uniform4uiv(this.addr,e)}function Hg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||lu,s[a])}function Wg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||uu,s[a])}function Xg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hu,s[a])}function jg(r,e,t){const n=this.cache,i=e.length,s=ma(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||du,s[a])}function qg(r){switch(r){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Lg;case 35674:return Dg;case 35675:return Ig;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return kg;case 5125:return Bg;case 36294:return zg;case 36295:return Gg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return jg}}class Yg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wg(t.type)}}class Kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qg(t.type)}}class Jg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const eo=/(\w+)(\])?(\[|\.)?/g;function id(r,e){r.seq.push(e),r.map[e.id]=e}function Qg(r,e,t){const n=r.name,i=n.length;for(eo.lastIndex=0;;){const s=eo.exec(n),a=eo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){id(t,l===void 0?new Yg(o,r,e):new Kg(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Jg(o),id(t,d)),t=d}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Qg(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function rd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Zg=37297;let $g=0;function ex(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const sd=new Ve;function tx(r){et._getMatrix(sd,et.workingColorSpace,r);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case Ys:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ye("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function ad(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ex(r.getShaderSource(e),o)}else return s}function nx(r,e){const t=tx(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ix(r,e){let t;switch(e){case lh:t="Linear";break;case dh:t="Reinhard";break;case uh:t="Cineon";break;case Ud:t="ACESFilmic";break;case fh:t="AgX";break;case ph:t="Neutral";break;case hh:t="Custom";break;default:ye("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ns=new P;function rx(){et.getLuminanceCoefficients(Ns);const r=Ns.x.toFixed(4),e=Ns.y.toFixed(4),t=Ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function ax(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ox(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Gr(r){return r!==""}function od(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(r){return r.replace(cx,dx)}const lx=new Map;function dx(r,e){let t=Xe[e];if(t===void 0){const n=lx.get(e);if(n!==void 0)t=Xe[n],ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ld(r){return r.replace(ux,hx)}function hx(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fx(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Vu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function px(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mx(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function gx(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case oh:e="ENVMAP_BLENDING_MIX";break;case ch:e="ENVMAP_BLENDING_ADD";break}return e}function xx(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function bx(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=fx(t),l=px(t),u=mx(t),d=gx(t),h=xx(t),p=sx(t),m=ax(s),x=i.createProgram();let g,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(g=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[dd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==yi?ix("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,nx("linearToOutputTexel",t.outputColorSpace),rx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),a=ec(a),a=od(a,t),a=cd(a,t),o=ec(o),o=od(o,t),o=cd(o,t),a=ld(a),o=ld(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=T+g+a,b=T+f+o,A=rd(i,i.VERTEX_SHADER,v),y=rd(i,i.FRAGMENT_SHADER,b);i.attachShader(x,A),i.attachShader(x,y),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(C){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(x)||"",F=i.getShaderInfoLog(A)||"",z=i.getShaderInfoLog(y)||"",H=U.trim(),G=F.trim(),J=z.trim();let W=!0,ee=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,A,y);else{const te=ad(i,A,"vertex"),he=ad(i,y,"fragment");qe("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+te+`
`+he)}else H!==""?ye("WebGLProgram: Program Info Log:",H):(G===""||J==="")&&(ee=!1);ee&&(C.diagnostics={runnable:W,programLog:H,vertexShader:{log:G,prefix:g},fragmentShader:{log:J,prefix:f}})}i.deleteShader(A),i.deleteShader(y),D=new Gs(i,x),_=ox(i,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let _;this.getAttributes=function(){return _===void 0&&w(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,Zg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$g++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=y,this}let _x=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yx(e),t.set(e,n)),n}}class yx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function Mx(r,e,t,n,i,s,a){const o=new Sc,c=new vx,l=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,C,U,F){const z=U.fog,H=F.geometry,G=_.isMeshStandardMaterial?U.environment:null,J=(_.isMeshStandardMaterial?t:e).get(_.envMap||G),W=J&&J.mapping===da?J.image.height:null,ee=m[_.type];_.precision!==null&&(p=i.getMaxPrecision(_.precision),p!==_.precision&&ye("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const te=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,he=te!==void 0?te.length:0;let Le=0;H.morphAttributes.position!==void 0&&(Le=1),H.morphAttributes.normal!==void 0&&(Le=2),H.morphAttributes.color!==void 0&&(Le=3);let Ie,We,it,q;if(ee){const ct=On[ee];Ie=ct.vertexShader,We=ct.fragmentShader}else Ie=_.vertexShader,We=_.fragmentShader,c.update(_),it=c.getVertexShaderID(_),q=c.getFragmentShaderID(_);const B=r.getRenderTarget(),Z=r.state.buffers.depth.getReversed(),pe=F.isInstancedMesh===!0,fe=F.isBatchedMesh===!0,Ge=!!_.map,gt=!!_.matcap,ke=!!J,ot=!!_.aoMap,L=!!_.lightMap,Qe=!!_.bumpMap,Ze=!!_.normalMap,ht=!!_.displacementMap,be=!!_.emissiveMap,bt=!!_.metalnessMap,Se=!!_.roughnessMap,Be=_.anisotropy>0,R=_.clearcoat>0,M=_.dispersion>0,k=_.iridescence>0,Y=_.sheen>0,Q=_.transmission>0,j=Be&&!!_.anisotropyMap,ve=R&&!!_.clearcoatMap,ce=R&&!!_.clearcoatNormalMap,Te=R&&!!_.clearcoatRoughnessMap,_e=k&&!!_.iridescenceMap,$=k&&!!_.iridescenceThicknessMap,re=Y&&!!_.sheenColorMap,Pe=Y&&!!_.sheenRoughnessMap,we=!!_.specularMap,ue=!!_.specularColorMap,Ue=!!_.specularIntensityMap,I=Q&&!!_.transmissionMap,le=Q&&!!_.thicknessMap,se=!!_.gradientMap,ae=!!_.alphaMap,ne=_.alphaTest>0,K=!!_.alphaHash,ge=!!_.extensions;let Fe=yi;_.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Fe=r.toneMapping);const pt={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:Ie,fragmentShader:We,defines:_.defines,customVertexShaderID:it,customFragmentShaderID:q,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:fe,batchingColor:fe&&F._colorsTexture!==null,instancing:pe,instancingColor:pe&&F.instanceColor!==null,instancingMorph:pe&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:B===null?r.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Yt,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:gt,envMap:ke,envMapMode:ke&&J.mapping,envMapCubeUVHeight:W,aoMap:ot,lightMap:L,bumpMap:Qe,normalMap:Ze,displacementMap:h&&ht,emissiveMap:be,normalMapObjectSpace:Ze&&_.normalMapType===vh,normalMapTangentSpace:Ze&&_.normalMapType===vc,metalnessMap:bt,roughnessMap:Se,anisotropy:Be,anisotropyMap:j,clearcoat:R,clearcoatMap:ve,clearcoatNormalMap:ce,clearcoatRoughnessMap:Te,dispersion:M,iridescence:k,iridescenceMap:_e,iridescenceThicknessMap:$,sheen:Y,sheenColorMap:re,sheenRoughnessMap:Pe,specularMap:we,specularColorMap:ue,specularIntensityMap:Ue,transmission:Q,transmissionMap:I,thicknessMap:le,gradientMap:se,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:ne,alphaHash:K,combine:_.combine,mapUv:Ge&&x(_.map.channel),aoMapUv:ot&&x(_.aoMap.channel),lightMapUv:L&&x(_.lightMap.channel),bumpMapUv:Qe&&x(_.bumpMap.channel),normalMapUv:Ze&&x(_.normalMap.channel),displacementMapUv:ht&&x(_.displacementMap.channel),emissiveMapUv:be&&x(_.emissiveMap.channel),metalnessMapUv:bt&&x(_.metalnessMap.channel),roughnessMapUv:Se&&x(_.roughnessMap.channel),anisotropyMapUv:j&&x(_.anisotropyMap.channel),clearcoatMapUv:ve&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(_.sheenRoughnessMap.channel),specularMapUv:we&&x(_.specularMap.channel),specularColorMapUv:ue&&x(_.specularColorMap.channel),specularIntensityMapUv:Ue&&x(_.specularIntensityMap.channel),transmissionMapUv:I&&x(_.transmissionMap.channel),thicknessMapUv:le&&x(_.thicknessMap.channel),alphaMapUv:ae&&x(_.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ze||Be),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(Ge||ae),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Z,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Le,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:be&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===on,flipSided:_.side===jt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function f(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)S.push(C),S.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(T(S,_),v(S,_),S.push(r.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function T(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function v(_,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),_.push(o.mask)}function b(_){const S=m[_.type];let C;if(S){const U=On[S];C=hf.clone(U.uniforms)}else C=_.uniforms;return C}function A(_,S){let C;for(let U=0,F=u.length;U<F;U++){const z=u[U];if(z.cacheKey===S){C=z,++C.usedTimes;break}}return C===void 0&&(C=new bx(r,S,_,s),u.push(C)),C}function y(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function w(_){c.remove(_)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:b,acquireProgram:A,releaseProgram:y,releaseShaderCache:w,programs:u,dispose:D}}function Sx(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Tx(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ud(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,h,p,m,x,g){let f=r[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:m,renderOrder:d.renderOrder,z:x,group:g},r[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=x,f.group=g),e++,f}function o(d,h,p,m,x,g){const f=a(d,h,p,m,x,g);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(d,h,p,m,x,g){const f=a(d,h,p,m,x,g);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||Tx),n.length>1&&n.sort(h||ud),i.length>1&&i.sort(h||ud)}function u(){for(let d=e,h=r.length;d<h;d++){const p=r[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function Ex(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new hd,r.set(n,[a])):i>=s.length?(a=new hd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ax(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Re};break;case"SpotLight":t={position:new P,direction:new P,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function wx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Rx=0;function Cx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Px(r){const e=new Ax,t=wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,s=new ze,a=new ze;function o(l){let u=0,d=0,h=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let p=0,m=0,x=0,g=0,f=0,T=0,v=0,b=0,A=0,y=0,w=0;l.sort(Cx);for(let _=0,S=l.length;_<S;_++){const C=l[_],U=C.color,F=C.intensity,z=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=U.r*F,d+=U.g*F,h+=U.b*F;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],F);w++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const J=C.shadow,W=t.get(C);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=H,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(F),G.distance=z,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[x]=G;const J=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,J.updateMatrices(C),C.castShadow&&y++),n.spotLightMatrix[x]=J.matrix,C.castShadow){const W=t.get(C);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=H,b++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(F),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=G,g++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const J=C.shadow,W=t.get(C);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=H,n.pointShadowMatrix[m]=C.shadow.matrix,v++}n.point[m]=G,m++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(F),G.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const D=n.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==T||D.numPointShadows!==v||D.numSpotShadows!==b||D.numSpotMaps!==A||D.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+A-y,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=w,D.directionalLength=p,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=T,D.numPointShadows=v,D.numSpotShadows=b,D.numSpotMaps=A,D.numLightProbes=w,n.version=Rx++)}function c(l,u){let d=0,h=0,p=0,m=0,x=0;const g=u.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const v=l[f];if(v.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),d++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const b=n.rectArea[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),h++}else if(v.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function fd(r){const e=new Px(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Lx(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new fd(r),e.set(i,[o])):s>=a.length?(o=new fd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ux(r,e,t){let n=new Cc;const i=new Oe,s=new Oe,a=new tt,o=new Rf({depthPacking:_h}),c=new Cf,l={},u=t.maxTextureSize,d={[Ln]:jt,[jt]:Ln,[on]:on},h=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Dx,fragmentShader:Ix}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const m=new Pt;m.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Je(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Id;let f=this.type;this.render=function(y,w,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const _=r.getRenderTarget(),S=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(ai),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=f!==ni&&this.type===ni,z=f===ni&&this.type!==ni;for(let H=0,G=y.length;H<G;H++){const J=y[H],W=J.shadow;if(W===void 0){ye("WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ee=W.getFrameExtents();if(i.multiply(ee),s.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ee.x),i.x=s.x*ee.x,W.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ee.y),i.y=s.y*ee.y,W.mapSize.y=s.y)),W.map===null||F===!0||z===!0){const he=this.type!==ni?{minFilter:qt,magFilter:qt}:{};W.map!==null&&W.map.dispose(),W.map=new Gi(i.x,i.y,he),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const te=W.getViewportCount();for(let he=0;he<te;he++){const Le=W.getViewport(he);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),U.viewport(a),W.updateMatrices(J,he),n=W.getFrustum(),b(w,D,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===ni&&T(W,D),W.needsUpdate=!1}f=this.type,g.needsUpdate=!1,r.setRenderTarget(_,S,C)};function T(y,w){const D=e.update(x);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Gi(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,D,h,x,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,D,p,x,null)}function v(y,w,D,_){let S=null;const C=D.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)S=C;else if(S=D.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const U=S.uuid,F=w.uuid;let z=l[U];z===void 0&&(z={},l[U]=z);let H=z[F];H===void 0&&(H=S.clone(),z[F]=H,w.addEventListener("dispose",A)),S=H}if(S.visible=w.visible,S.wireframe=w.wireframe,_===ni?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=r.properties.get(S);U.light=D}return S}function b(y,w,D,_,S){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,y.matrixWorld);const F=e.update(y),z=y.material;if(Array.isArray(z)){const H=F.groups;for(let G=0,J=H.length;G<J;G++){const W=H[G],ee=z[W.materialIndex];if(ee&&ee.visible){const te=v(y,ee,_,S);y.onBeforeShadow(r,y,w,D,F,te,W),r.renderBufferDirect(D,null,F,te,y,W),y.onAfterShadow(r,y,w,D,F,te,W)}}}else if(z.visible){const H=v(y,z,_,S);y.onBeforeShadow(r,y,w,D,F,H,null),r.renderBufferDirect(D,null,F,H,y,null),y.onAfterShadow(r,y,w,D,F,H,null)}}const U=y.children;for(let F=0,z=U.length;F<z;F++)b(U[F],w,D,_,S)}function A(y){y.target.removeEventListener("dispose",A);for(const D in l){const _=l[D],S=y.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const Nx={[ho]:fo,[po]:xo,[mo]:bo,[hr]:go,[fo]:ho,[xo]:po,[bo]:mo,[go]:hr};function Fx(r,e){function t(){let I=!1;const le=new tt;let se=null;const ae=new tt(0,0,0,0);return{setMask:function(ne){se!==ne&&!I&&(r.colorMask(ne,ne,ne,ne),se=ne)},setLocked:function(ne){I=ne},setClear:function(ne,K,ge,Fe,pt){pt===!0&&(ne*=Fe,K*=Fe,ge*=Fe),le.set(ne,K,ge,Fe),ae.equals(le)===!1&&(r.clearColor(ne,K,ge,Fe),ae.copy(le))},reset:function(){I=!1,se=null,ae.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,se=null,ae=null,ne=null;return{setReversed:function(K){if(le!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),le=K;const Fe=ne;ne=null,this.setClear(Fe)}},getReversed:function(){return le},setTest:function(K){K?B(r.DEPTH_TEST):Z(r.DEPTH_TEST)},setMask:function(K){se!==K&&!I&&(r.depthMask(K),se=K)},setFunc:function(K){if(le&&(K=Nx[K]),ae!==K){switch(K){case ho:r.depthFunc(r.NEVER);break;case fo:r.depthFunc(r.ALWAYS);break;case po:r.depthFunc(r.LESS);break;case hr:r.depthFunc(r.LEQUAL);break;case mo:r.depthFunc(r.EQUAL);break;case go:r.depthFunc(r.GEQUAL);break;case xo:r.depthFunc(r.GREATER);break;case bo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ae=K}},setLocked:function(K){I=K},setClear:function(K){ne!==K&&(le&&(K=1-K),r.clearDepth(K),ne=K)},reset:function(){I=!1,se=null,ae=null,ne=null,le=!1}}}function i(){let I=!1,le=null,se=null,ae=null,ne=null,K=null,ge=null,Fe=null,pt=null;return{setTest:function(ct){I||(ct?B(r.STENCIL_TEST):Z(r.STENCIL_TEST))},setMask:function(ct){le!==ct&&!I&&(r.stencilMask(ct),le=ct)},setFunc:function(ct,Nn,bn){(se!==ct||ae!==Nn||ne!==bn)&&(r.stencilFunc(ct,Nn,bn),se=ct,ae=Nn,ne=bn)},setOp:function(ct,Nn,bn){(K!==ct||ge!==Nn||Fe!==bn)&&(r.stencilOp(ct,Nn,bn),K=ct,ge=Nn,Fe=bn)},setLocked:function(ct){I=ct},setClear:function(ct){pt!==ct&&(r.clearStencil(ct),pt=ct)},reset:function(){I=!1,le=null,se=null,ae=null,ne=null,K=null,ge=null,Fe=null,pt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h=new WeakMap,p=[],m=null,x=!1,g=null,f=null,T=null,v=null,b=null,A=null,y=null,w=new Re(0,0,0),D=0,_=!1,S=null,C=null,U=null,F=null,z=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=J>=2);let ee=null,te={};const he=r.getParameter(r.SCISSOR_BOX),Le=r.getParameter(r.VIEWPORT),Ie=new tt().fromArray(he),We=new tt().fromArray(Le);function it(I,le,se,ae){const ne=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ge=0;ge<se;ge++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(le,0,r.RGBA,1,1,ae,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(le+ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return K}const q={};q[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),B(r.DEPTH_TEST),a.setFunc(hr),Qe(!1),Ze(Zc),B(r.CULL_FACE),ot(ai);function B(I){u[I]!==!0&&(r.enable(I),u[I]=!0)}function Z(I){u[I]!==!1&&(r.disable(I),u[I]=!1)}function pe(I,le){return d[I]!==le?(r.bindFramebuffer(I,le),d[I]=le,I===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=le),I===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=le),!0):!1}function fe(I,le){let se=p,ae=!1;if(I){se=h.get(le),se===void 0&&(se=[],h.set(le,se));const ne=I.textures;if(se.length!==ne.length||se[0]!==r.COLOR_ATTACHMENT0){for(let K=0,ge=ne.length;K<ge;K++)se[K]=r.COLOR_ATTACHMENT0+K;se.length=ne.length,ae=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,ae=!0);ae&&r.drawBuffers(se)}function Ge(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const gt={[Fi]:r.FUNC_ADD,[Wu]:r.FUNC_SUBTRACT,[Xu]:r.FUNC_REVERSE_SUBTRACT};gt[ju]=r.MIN,gt[qu]=r.MAX;const ke={[Yu]:r.ZERO,[Ku]:r.ONE,[Ju]:r.SRC_COLOR,[lo]:r.SRC_ALPHA,[nh]:r.SRC_ALPHA_SATURATE,[eh]:r.DST_COLOR,[Zu]:r.DST_ALPHA,[Qu]:r.ONE_MINUS_SRC_COLOR,[uo]:r.ONE_MINUS_SRC_ALPHA,[th]:r.ONE_MINUS_DST_COLOR,[$u]:r.ONE_MINUS_DST_ALPHA,[ih]:r.CONSTANT_COLOR,[rh]:r.ONE_MINUS_CONSTANT_COLOR,[sh]:r.CONSTANT_ALPHA,[ah]:r.ONE_MINUS_CONSTANT_ALPHA};function ot(I,le,se,ae,ne,K,ge,Fe,pt,ct){if(I===ai){x===!0&&(Z(r.BLEND),x=!1);return}if(x===!1&&(B(r.BLEND),x=!0),I!==Hu){if(I!==g||ct!==_){if((f!==Fi||b!==Fi)&&(r.blendEquation(r.FUNC_ADD),f=Fi,b=Fi),ct)switch(I){case lr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mi:r.blendFunc(r.ONE,r.ONE);break;case $c:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case el:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",I);break}else switch(I){case lr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Mi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $c:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",I);break}T=null,v=null,A=null,y=null,w.set(0,0,0),D=0,g=I,_=ct}return}ne=ne||le,K=K||se,ge=ge||ae,(le!==f||ne!==b)&&(r.blendEquationSeparate(gt[le],gt[ne]),f=le,b=ne),(se!==T||ae!==v||K!==A||ge!==y)&&(r.blendFuncSeparate(ke[se],ke[ae],ke[K],ke[ge]),T=se,v=ae,A=K,y=ge),(Fe.equals(w)===!1||pt!==D)&&(r.blendColor(Fe.r,Fe.g,Fe.b,pt),w.copy(Fe),D=pt),g=I,_=!1}function L(I,le){I.side===on?Z(r.CULL_FACE):B(r.CULL_FACE);let se=I.side===jt;le&&(se=!se),Qe(se),I.blending===lr&&I.transparent===!1?ot(ai):ot(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ae=I.stencilWrite;o.setTest(ae),ae&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?B(r.SAMPLE_ALPHA_TO_COVERAGE):Z(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(I){S!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),S=I)}function Ze(I){I!==zu?(B(r.CULL_FACE),I!==C&&(I===Zc?r.cullFace(r.BACK):I===Gu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Z(r.CULL_FACE),C=I}function ht(I){I!==U&&(G&&r.lineWidth(I),U=I)}function be(I,le,se){I?(B(r.POLYGON_OFFSET_FILL),(F!==le||z!==se)&&(r.polygonOffset(le,se),F=le,z=se)):Z(r.POLYGON_OFFSET_FILL)}function bt(I){I?B(r.SCISSOR_TEST):Z(r.SCISSOR_TEST)}function Se(I){I===void 0&&(I=r.TEXTURE0+H-1),ee!==I&&(r.activeTexture(I),ee=I)}function Be(I,le,se){se===void 0&&(ee===null?se=r.TEXTURE0+H-1:se=ee);let ae=te[se];ae===void 0&&(ae={type:void 0,texture:void 0},te[se]=ae),(ae.type!==I||ae.texture!==le)&&(ee!==se&&(r.activeTexture(se),ee=se),r.bindTexture(I,le||q[I]),ae.type=I,ae.texture=le)}function R(){const I=te[ee];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function Y(){try{r.texSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Q(){try{r.texSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function ve(){try{r.compressedTexSubImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function ce(){try{r.texStorage2D(...arguments)}catch(I){I("WebGLState:",I)}}function Te(){try{r.texStorage3D(...arguments)}catch(I){I("WebGLState:",I)}}function _e(){try{r.texImage2D(...arguments)}catch(I){I("WebGLState:",I)}}function $(){try{r.texImage3D(...arguments)}catch(I){I("WebGLState:",I)}}function re(I){Ie.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),Ie.copy(I))}function Pe(I){We.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function we(I,le){let se=l.get(le);se===void 0&&(se=new WeakMap,l.set(le,se));let ae=se.get(I);ae===void 0&&(ae=r.getUniformBlockIndex(le,I.name),se.set(I,ae))}function ue(I,le){const ae=l.get(le).get(I);c.get(le)!==ae&&(r.uniformBlockBinding(le,ae,I.__bindingPointIndex),c.set(le,ae))}function Ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,te={},d={},h=new WeakMap,p=[],m=null,x=!1,g=null,f=null,T=null,v=null,b=null,A=null,y=null,w=new Re(0,0,0),D=0,_=!1,S=null,C=null,U=null,F=null,z=null,Ie.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:B,disable:Z,bindFramebuffer:pe,drawBuffers:fe,useProgram:Ge,setBlending:ot,setMaterial:L,setFlipSided:Qe,setCullFace:Ze,setLineWidth:ht,setPolygonOffset:be,setScissorTest:bt,activeTexture:Se,bindTexture:Be,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:_e,texImage3D:$,updateUBOMapping:we,uniformBlockBinding:ue,texStorage2D:ce,texStorage3D:Te,texSubImage2D:Y,texSubImage3D:Q,compressedTexSubImage2D:j,compressedTexSubImage3D:ve,scissor:re,viewport:Pe,reset:Ue}}function Ox(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return p?new OffscreenCanvas(R,M):$r("canvas")}function x(R,M,k){let Y=1;const Q=Be(R);if((Q.width>k||Q.height>k)&&(Y=k/Math.max(Q.width,Q.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const j=Math.floor(Y*Q.width),ve=Math.floor(Y*Q.height);d===void 0&&(d=m(j,ve));const ce=M?m(j,ve):d;return ce.width=j,ce.height=ve,ce.getContext("2d").drawImage(R,0,0,j,ve),ye("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+j+"x"+ve+")."),ce}else return"data"in R&&ye("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function g(R){return R.generateMipmaps}function f(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,M,k,Y,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j=M;if(M===r.RED&&(k===r.FLOAT&&(j=r.R32F),k===r.HALF_FLOAT&&(j=r.R16F),k===r.UNSIGNED_BYTE&&(j=r.R8)),M===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.R8UI),k===r.UNSIGNED_SHORT&&(j=r.R16UI),k===r.UNSIGNED_INT&&(j=r.R32UI),k===r.BYTE&&(j=r.R8I),k===r.SHORT&&(j=r.R16I),k===r.INT&&(j=r.R32I)),M===r.RG&&(k===r.FLOAT&&(j=r.RG32F),k===r.HALF_FLOAT&&(j=r.RG16F),k===r.UNSIGNED_BYTE&&(j=r.RG8)),M===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RG8UI),k===r.UNSIGNED_SHORT&&(j=r.RG16UI),k===r.UNSIGNED_INT&&(j=r.RG32UI),k===r.BYTE&&(j=r.RG8I),k===r.SHORT&&(j=r.RG16I),k===r.INT&&(j=r.RG32I)),M===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGB8UI),k===r.UNSIGNED_SHORT&&(j=r.RGB16UI),k===r.UNSIGNED_INT&&(j=r.RGB32UI),k===r.BYTE&&(j=r.RGB8I),k===r.SHORT&&(j=r.RGB16I),k===r.INT&&(j=r.RGB32I)),M===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),k===r.UNSIGNED_INT&&(j=r.RGBA32UI),k===r.BYTE&&(j=r.RGBA8I),k===r.SHORT&&(j=r.RGBA16I),k===r.INT&&(j=r.RGBA32I)),M===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),M===r.RGBA){const ve=Q?Ys:et.getTransfer(Y);k===r.FLOAT&&(j=r.RGBA32F),k===r.HALF_FLOAT&&(j=r.RGBA16F),k===r.UNSIGNED_BYTE&&(j=ve===dt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(R,M){let k;return R?M===null||M===zi||M===Yr?k=r.DEPTH24_STENCIL8:M===En?k=r.DEPTH32F_STENCIL8:M===qr&&(k=r.DEPTH24_STENCIL8,ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===zi||M===Yr?k=r.DEPTH_COMPONENT24:M===En?k=r.DEPTH_COMPONENT32F:M===qr&&(k=r.DEPTH_COMPONENT16),k}function A(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==Xt?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function y(R){const M=R.target;M.removeEventListener("dispose",y),D(M),M.isVideoTexture&&u.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),S(M)}function D(R){const M=n.get(R);if(M.__webglInit===void 0)return;const k=R.source,Y=h.get(k);if(Y){const Q=Y[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&_(R),Object.keys(Y).length===0&&h.delete(k)}n.remove(R)}function _(R){const M=n.get(R);r.deleteTexture(M.__webglTexture);const k=R.source,Y=h.get(k);delete Y[M.__cacheKey],a.memory.textures--}function S(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let Q=0;Q<M.__webglFramebuffer[Y].length;Q++)r.deleteFramebuffer(M.__webglFramebuffer[Y][Q]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Y=0,Q=k.length;Y<Q;Y++){const j=n.get(k[Y]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[Y])}n.remove(R)}let C=0;function U(){C=0}function F(){const R=C;return R>=i.maxTextures&&ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),C+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function H(R,M){const k=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){const Y=R.image;if(Y===null)ye("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)ye("WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,R,M);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+M)}function G(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){q(k,R,M);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+M)}function J(R,M){const k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){q(k,R,M);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+M)}function W(R,M){const k=n.get(R);if(R.version>0&&k.__version!==R.version){B(k,R,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+M)}const ee={[Bi]:r.REPEAT,[kn]:r.CLAMP_TO_EDGE,[qs]:r.MIRRORED_REPEAT},te={[qt]:r.NEAREST,[Fd]:r.NEAREST_MIPMAP_NEAREST,[zr]:r.NEAREST_MIPMAP_LINEAR,[Xt]:r.LINEAR,[Fs]:r.LINEAR_MIPMAP_NEAREST,[ri]:r.LINEAR_MIPMAP_LINEAR},he={[yh]:r.NEVER,[wh]:r.ALWAYS,[Mh]:r.LESS,[Wd]:r.LEQUAL,[Sh]:r.EQUAL,[Ah]:r.GEQUAL,[Th]:r.GREATER,[Eh]:r.NOTEQUAL};function Le(R,M){if(M.type===En&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xt||M.magFilter===Fs||M.magFilter===zr||M.magFilter===ri||M.minFilter===Xt||M.minFilter===Fs||M.minFilter===zr||M.minFilter===ri)&&ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ee[M.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ee[M.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ee[M.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,te[M.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,te[M.minFilter]),M.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qt||M.minFilter!==zr&&M.minFilter!==ri||M.type===En&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",y));const Y=M.source;let Q=h.get(Y);Q===void 0&&(Q={},h.set(Y,Q));const j=z(M);if(j!==R.__cacheKey){Q[j]===void 0&&(Q[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[j].usedTimes++;const ve=Q[R.__cacheKey];ve!==void 0&&(Q[R.__cacheKey].usedTimes--,ve.usedTimes===0&&_(M)),R.__cacheKey=j,R.__webglTexture=Q[j].texture}return k}function We(R,M,k){return Math.floor(Math.floor(R/k)/M)}function it(R,M,k,Y){const j=R.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,k,Y,M.data);else{j.sort(($,re)=>$.start-re.start);let ve=0;for(let $=1;$<j.length;$++){const re=j[ve],Pe=j[$],we=re.start+re.count,ue=We(Pe.start,M.width,4),Ue=We(re.start,M.width,4);Pe.start<=we+1&&ue===Ue&&We(Pe.start+Pe.count-1,M.width,4)===ue?re.count=Math.max(re.count,Pe.start+Pe.count-re.start):(++ve,j[ve]=Pe)}j.length=ve+1;const ce=r.getParameter(r.UNPACK_ROW_LENGTH),Te=r.getParameter(r.UNPACK_SKIP_PIXELS),_e=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let $=0,re=j.length;$<re;$++){const Pe=j[$],we=Math.floor(Pe.start/4),ue=Math.ceil(Pe.count/4),Ue=we%M.width,I=Math.floor(we/M.width),le=ue,se=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ue),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),t.texSubImage2D(r.TEXTURE_2D,0,Ue,I,le,se,k,Y,M.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Te),r.pixelStorei(r.UNPACK_SKIP_ROWS,_e)}}function q(R,M,k){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const Q=Ie(R,M),j=M.source;t.bindTexture(Y,R.__webglTexture,r.TEXTURE0+k);const ve=n.get(j);if(j.version!==ve.__version||Q===!0){t.activeTexture(r.TEXTURE0+k);const ce=et.getPrimaries(et.workingColorSpace),Te=M.colorSpace===_i?null:et.getPrimaries(M.colorSpace),_e=M.colorSpace===_i||ce===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let $=x(M.image,!1,i.maxTextureSize);$=Se(M,$);const re=s.convert(M.format,M.colorSpace),Pe=s.convert(M.type);let we=v(M.internalFormat,re,Pe,M.colorSpace,M.isVideoTexture);Le(Y,M);let ue;const Ue=M.mipmaps,I=M.isVideoTexture!==!0,le=ve.__version===void 0||Q===!0,se=j.dataReady,ae=A(M,$);if(M.isDepthTexture)we=b(M.format===Jr,M.type),le&&(I?t.texStorage2D(r.TEXTURE_2D,1,we,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,we,$.width,$.height,0,re,Pe,null));else if(M.isDataTexture)if(Ue.length>0){I&&le&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ue[0].width,Ue[0].height);for(let ne=0,K=Ue.length;ne<K;ne++)ue=Ue[ne],I?se&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ue.width,ue.height,re,Pe,ue.data):t.texImage2D(r.TEXTURE_2D,ne,we,ue.width,ue.height,0,re,Pe,ue.data);M.generateMipmaps=!1}else I?(le&&t.texStorage2D(r.TEXTURE_2D,ae,we,$.width,$.height),se&&it(M,$,re,Pe)):t.texImage2D(r.TEXTURE_2D,0,we,$.width,$.height,0,re,Pe,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,we,Ue[0].width,Ue[0].height,$.depth);for(let ne=0,K=Ue.length;ne<K;ne++)if(ue=Ue[ne],M.format!==fn)if(re!==null)if(I){if(se)if(M.layerUpdates.size>0){const ge=Xl(ue.width,ue.height,M.format,M.type);for(const Fe of M.layerUpdates){const pt=ue.data.subarray(Fe*ge/ue.data.BYTES_PER_ELEMENT,(Fe+1)*ge/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,Fe,ue.width,ue.height,1,re,pt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,re,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,we,ue.width,ue.height,$.depth,0,ue.data,0,0);else ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,$.depth,re,Pe,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,we,ue.width,ue.height,$.depth,0,re,Pe,ue.data)}else{I&&le&&t.texStorage2D(r.TEXTURE_2D,ae,we,Ue[0].width,Ue[0].height);for(let ne=0,K=Ue.length;ne<K;ne++)ue=Ue[ne],M.format!==fn?re!==null?I?se&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ue.width,ue.height,re,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,we,ue.width,ue.height,0,ue.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ue.width,ue.height,re,Pe,ue.data):t.texImage2D(r.TEXTURE_2D,ne,we,ue.width,ue.height,0,re,Pe,ue.data)}else if(M.isDataArrayTexture)if(I){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ae,we,$.width,$.height,$.depth),se)if(M.layerUpdates.size>0){const ne=Xl($.width,$.height,M.format,M.type);for(const K of M.layerUpdates){const ge=$.data.subarray(K*ne/$.data.BYTES_PER_ELEMENT,(K+1)*ne/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,$.width,$.height,1,re,Pe,ge)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,re,Pe,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,$.width,$.height,$.depth,0,re,Pe,$.data);else if(M.isData3DTexture)I?(le&&t.texStorage3D(r.TEXTURE_3D,ae,we,$.width,$.height,$.depth),se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,re,Pe,$.data)):t.texImage3D(r.TEXTURE_3D,0,we,$.width,$.height,$.depth,0,re,Pe,$.data);else if(M.isFramebufferTexture){if(le)if(I)t.texStorage2D(r.TEXTURE_2D,ae,we,$.width,$.height);else{let ne=$.width,K=$.height;for(let ge=0;ge<ae;ge++)t.texImage2D(r.TEXTURE_2D,ge,we,ne,K,0,re,Pe,null),ne>>=1,K>>=1}}else if(Ue.length>0){if(I&&le){const ne=Be(Ue[0]);t.texStorage2D(r.TEXTURE_2D,ae,we,ne.width,ne.height)}for(let ne=0,K=Ue.length;ne<K;ne++)ue=Ue[ne],I?se&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,re,Pe,ue):t.texImage2D(r.TEXTURE_2D,ne,we,re,Pe,ue);M.generateMipmaps=!1}else if(I){if(le){const ne=Be($);t.texStorage2D(r.TEXTURE_2D,ae,we,ne.width,ne.height)}se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re,Pe,$)}else t.texImage2D(r.TEXTURE_2D,0,we,re,Pe,$);g(M)&&f(Y),ve.__version=j.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function B(R,M,k){if(M.image.length!==6)return;const Y=Ie(R,M),Q=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const j=n.get(Q);if(Q.version!==j.__version||Y===!0){t.activeTexture(r.TEXTURE0+k);const ve=et.getPrimaries(et.workingColorSpace),ce=M.colorSpace===_i?null:et.getPrimaries(M.colorSpace),Te=M.colorSpace===_i||ve===ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const _e=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,re=[];for(let K=0;K<6;K++)!_e&&!$?re[K]=x(M.image[K],!0,i.maxCubemapSize):re[K]=$?M.image[K].image:M.image[K],re[K]=Se(M,re[K]);const Pe=re[0],we=s.convert(M.format,M.colorSpace),ue=s.convert(M.type),Ue=v(M.internalFormat,we,ue,M.colorSpace),I=M.isVideoTexture!==!0,le=j.__version===void 0||Y===!0,se=Q.dataReady;let ae=A(M,Pe);Le(r.TEXTURE_CUBE_MAP,M);let ne;if(_e){I&&le&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ue,Pe.width,Pe.height);for(let K=0;K<6;K++){ne=re[K].mipmaps;for(let ge=0;ge<ne.length;ge++){const Fe=ne[ge];M.format!==fn?we!==null?I?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Fe.width,Fe.height,we,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ue,Fe.width,Fe.height,0,Fe.data):ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Fe.width,Fe.height,we,ue,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ue,Fe.width,Fe.height,0,we,ue,Fe.data)}}}else{if(ne=M.mipmaps,I&&le){ne.length>0&&ae++;const K=Be(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ae,Ue,K.width,K.height)}for(let K=0;K<6;K++)if($){I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,re[K].width,re[K].height,we,ue,re[K].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ue,re[K].width,re[K].height,0,we,ue,re[K].data);for(let ge=0;ge<ne.length;ge++){const pt=ne[ge].image[K].image;I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,pt.width,pt.height,we,ue,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ue,pt.width,pt.height,0,we,ue,pt.data)}}else{I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,we,ue,re[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ue,we,ue,re[K]);for(let ge=0;ge<ne.length;ge++){const Fe=ne[ge];I?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,we,ue,Fe.image[K]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ue,we,ue,Fe.image[K])}}}g(M)&&f(r.TEXTURE_CUBE_MAP),j.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Z(R,M,k,Y,Q,j){const ve=s.convert(k.format,k.colorSpace),ce=s.convert(k.type),Te=v(k.internalFormat,ve,ce,k.colorSpace),_e=n.get(M),$=n.get(k);if($.__renderTarget=M,!_e.__hasExternalTextures){const re=Math.max(1,M.width>>j),Pe=Math.max(1,M.height>>j);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,j,Te,re,Pe,M.depth,0,ve,ce,null):t.texImage2D(Q,j,Te,re,Pe,0,ve,ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,Q,$.__webglTexture,0,ht(M)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,Q,$.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function pe(R,M,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),M.depthBuffer){const Y=M.depthTexture,Q=Y&&Y.isDepthTexture?Y.type:null,j=b(M.stencilBuffer,Q),ve=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=ht(M);be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ce,j,M.width,M.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,j,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,j,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,R)}else{const Y=M.textures;for(let Q=0;Q<Y.length;Q++){const j=Y[Q],ve=s.convert(j.format,j.colorSpace),ce=s.convert(j.type),Te=v(j.internalFormat,ve,ce,j.colorSpace),_e=ht(M);k&&be(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Te,M.width,M.height):be(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_e,Te,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Te,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function fe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const Q=Y.__webglTexture,j=ht(M);if(M.depthTexture.format===Kr)be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(M.depthTexture.format===Jr)be(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const M=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",Q)};Y.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");const Y=R.texture.mipmaps;Y&&Y.length>0?fe(M.__webglFramebuffer[0],R):fe(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),pe(M.__webglDepthbuffer[Y],R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),pe(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(R,M,k){const Y=n.get(R);M!==void 0&&Z(Y.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Ge(R)}function ke(R){const M=R.texture,k=n.get(R),Y=n.get(M);R.addEventListener("dispose",w);const Q=R.textures,j=R.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ce]=[];for(let Te=0;Te<M.mipmaps.length;Te++)k.__webglFramebuffer[ce][Te]=r.createFramebuffer()}else k.__webglFramebuffer[ce]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ce]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ve)for(let ce=0,Te=Q.length;ce<Te;ce++){const _e=n.get(Q[ce]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&be(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){const Te=Q[ce];k.__webglColorRenderbuffer[ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ce]);const _e=s.convert(Te.format,Te.colorSpace),$=s.convert(Te.type),re=v(Te.internalFormat,_e,$,Te.colorSpace,R.isXRRenderTarget===!0),Pe=ht(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,re,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ce,r.RENDERBUFFER,k.__webglColorRenderbuffer[ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),pe(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Le(r.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Z(k.__webglFramebuffer[ce][Te],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te);else Z(k.__webglFramebuffer[ce],R,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(M)&&f(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ce=0,Te=Q.length;ce<Te;ce++){const _e=Q[ce],$=n.get(_e);let re=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,$.__webglTexture),Le(re,_e),Z(k.__webglFramebuffer,R,_e,r.COLOR_ATTACHMENT0+ce,re,0),g(_e)&&f(re)}t.unbindTexture()}else{let ce=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ce,Y.__webglTexture),Le(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)Z(k.__webglFramebuffer[Te],R,M,r.COLOR_ATTACHMENT0,ce,Te);else Z(k.__webglFramebuffer,R,M,r.COLOR_ATTACHMENT0,ce,0);g(M)&&f(ce),t.unbindTexture()}R.depthBuffer&&Ge(R)}function ot(R){const M=R.textures;for(let k=0,Y=M.length;k<Y;k++){const Q=M[k];if(g(Q)){const j=T(R),ve=n.get(Q).__webglTexture;t.bindTexture(j,ve),f(j),t.unbindTexture()}}}const L=[],Qe=[];function Ze(R){if(R.samples>0){if(be(R)===!1){const M=R.textures,k=R.width,Y=R.height;let Q=r.COLOR_BUFFER_BIT;const j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=n.get(R),ce=M.length>1;if(ce)for(let _e=0;_e<M.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let _e=0;_e<M.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const $=n.get(M[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$,0)}r.blitFramebuffer(0,0,k,Y,0,0,k,Y,Q,r.NEAREST),c===!0&&(L.length=0,Qe.length=0,L.push(r.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(L.push(j),Qe.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ce)for(let _e=0;_e<M.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const $=n.get(M[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ve.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,$,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ht(R){return Math.min(i.maxSamples,R.samples)}function be(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function bt(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Se(R,M){const k=R.colorSpace,Y=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Yt&&k!==_i&&(et.getTransfer(k)===dt?(Y!==fn||Q!==Wn)&&ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",k)),M}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=H,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=gt,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=be}function kx(r,e){function t(n,i=_i){let s;const a=et.getTransfer(i);if(n===Wn)return r.UNSIGNED_BYTE;if(n===fc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Od)return r.BYTE;if(n===kd)return r.SHORT;if(n===qr)return r.UNSIGNED_SHORT;if(n===hc)return r.INT;if(n===zi)return r.UNSIGNED_INT;if(n===En)return r.FLOAT;if(n===Sr)return r.HALF_FLOAT;if(n===Gd)return r.ALPHA;if(n===Vd)return r.RGB;if(n===fn)return r.RGBA;if(n===Kr)return r.DEPTH_COMPONENT;if(n===Jr)return r.DEPTH_STENCIL;if(n===mc)return r.RED;if(n===gc)return r.RED_INTEGER;if(n===xc)return r.RG;if(n===bc)return r.RG_INTEGER;if(n===_c)return r.RGBA_INTEGER;if(n===Os||n===ks||n===Bs||n===zs)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Os)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Mo||n===So||n===To)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===Ao||n===wo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Eo||n===Ao)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===Uo||n===No||n===Fo||n===Oo||n===ko||n===Bo||n===zo||n===Go)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ro)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Co)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Po)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Io)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vo||n===Ho||n===Wo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Vo)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ho)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xo||n===jo||n===qo||n===Yo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ru(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:Bx,fragmentShader:zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends Tr{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new Gx,f={},T=t.getContextAttributes();let v=null,b=null;const A=[],y=[],w=new Oe;let D=null;const _=new Wt;_.viewport=new tt;const S=new Wt;S.viewport=new tt;const C=[_,S],U=new Jf;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let B=A[q];return B===void 0&&(B=new Va,A[q]=B),B.getTargetRaySpace()},this.getControllerGrip=function(q){let B=A[q];return B===void 0&&(B=new Va,A[q]=B),B.getGripSpace()},this.getHand=function(q){let B=A[q];return B===void 0&&(B=new Va,A[q]=B),B.getHandSpace()};function H(q){const B=y.indexOf(q.inputSource);if(B===-1)return;const Z=A[B];Z!==void 0&&(Z.update(q.inputSource,q.frame,l||a),Z.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",J);for(let q=0;q<A.length;q++){const B=y[q];B!==null&&(y[q]=null,A[q].disconnect(B))}F=null,z=null,g.reset();for(const q in f)delete f[q];e.setRenderTarget(v),p=null,h=null,d=null,i=null,b=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",G),i.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,pe=null,fe=null;T.depth&&(fe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=T.stencil?Jr:Kr,pe=T.stencil?Yr:zi);const Ge={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ge),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new Gi(h.textureWidth,h.textureHeight,{format:fn,type:Wn,depthTexture:new iu(h.textureWidth,h.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Z={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Gi(p.framebufferWidth,p.framebufferHeight,{format:fn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(q){for(let B=0;B<q.removed.length;B++){const Z=q.removed[B],pe=y.indexOf(Z);pe>=0&&(y[pe]=null,A[pe].disconnect(Z))}for(let B=0;B<q.added.length;B++){const Z=q.added[B];let pe=y.indexOf(Z);if(pe===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=y.length){y.push(Z),pe=Ge;break}else if(y[Ge]===null){y[Ge]=Z,pe=Ge;break}if(pe===-1)break}const fe=A[pe];fe&&fe.connect(Z)}}const W=new P,ee=new P;function te(q,B,Z){W.setFromMatrixPosition(B.matrixWorld),ee.setFromMatrixPosition(Z.matrixWorld);const pe=W.distanceTo(ee),fe=B.projectionMatrix.elements,Ge=Z.projectionMatrix.elements,gt=fe[14]/(fe[10]-1),ke=fe[14]/(fe[10]+1),ot=(fe[9]+1)/fe[5],L=(fe[9]-1)/fe[5],Qe=(fe[8]-1)/fe[0],Ze=(Ge[8]+1)/Ge[0],ht=gt*Qe,be=gt*Ze,bt=pe/(-Qe+Ze),Se=bt*-Qe;if(B.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Se),q.translateZ(bt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),fe[10]===-1)q.projectionMatrix.copy(B.projectionMatrix),q.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const Be=gt+bt,R=ke+bt,M=ht-Se,k=be+(pe-Se),Y=ot*ke/R*Be,Q=L*ke/R*Be;q.projectionMatrix.makePerspective(M,k,Y,Q,Be,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function he(q,B){B===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(B.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let B=q.near,Z=q.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(Z=g.depthFar)),U.near=S.near=_.near=B,U.far=S.far=_.far=Z,(F!==U.near||z!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),F=U.near,z=U.far),U.layers.mask=q.layers.mask|6,_.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const pe=q.parent,fe=U.cameras;he(U,pe);for(let Ge=0;Ge<fe.length;Ge++)he(fe[Ge],pe);fe.length===2?te(U,_,S):U.projectionMatrix.copy(_.projectionMatrix),Le(q,U,pe)};function Le(q,B,Z){Z===null?q.matrix.copy(B.matrixWorld):(q.matrix.copy(Z.matrixWorld),q.matrix.invert(),q.matrix.multiply(B.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(B.projectionMatrix),q.projectionMatrixInverse.copy(B.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=mr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(q){return f[q]};let Ie=null;function We(q,B){if(u=B.getViewerPose(l||a),m=B,u!==null){const Z=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let pe=!1;Z.length!==U.cameras.length&&(U.cameras.length=0,pe=!0);for(let ke=0;ke<Z.length;ke++){const ot=Z[ke];let L=null;if(p!==null)L=p.getViewport(ot);else{const Ze=d.getViewSubImage(h,ot);L=Ze.viewport,ke===0&&(e.setRenderTargetTextures(b,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(b))}let Qe=C[ke];Qe===void 0&&(Qe=new Wt,Qe.layers.enable(ke),Qe.viewport=new tt,C[ke]=Qe),Qe.matrix.fromArray(ot.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(ot.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(L.x,L.y,L.width,L.height),ke===0&&(U.matrix.copy(Qe.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),pe===!0&&U.cameras.push(Qe)}const fe=i.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const ke=d.getDepthInformation(Z[0]);ke&&ke.isValid&&ke.texture&&g.init(ke,i.renderState)}if(fe&&fe.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ke=0;ke<Z.length;ke++){const ot=Z[ke].camera;if(ot){let L=f[ot];L||(L=new ru,f[ot]=L);const Qe=d.getCameraImage(ot);L.sourceTexture=Qe}}}}for(let Z=0;Z<A.length;Z++){const pe=y[Z],fe=A[Z];pe!==null&&fe!==void 0&&fe.update(pe,B,l||a)}Ie&&Ie(q,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),m=null}const it=new cu;it.setAnimationLoop(We),this.setAnimationLoop=function(q){Ie=q},this.dispose=function(){}}}const Di=new Dn,Hx=new ze;function Wx(r,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Jd(r)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function i(g,f,T,v,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&p(g,f,b)):f.isMeshMatcapMaterial?(s(g,f),m(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),x(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,T,v):f.isSpriteMaterial?l(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===jt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===jt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const T=e.get(f),v=T.envMap,b=T.envMapRotation;v&&(g.envMap.value=v,Di.copy(b),Di.x*=-1,Di.y*=-1,Di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),g.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Di)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,T,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*T,g.scale.value=v*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function l(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function p(g,f,T){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===jt&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,f){f.matcap&&(g.matcap.value=f.matcap)}function x(g,f){const T=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Xx(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,v){const b=v.program;n.uniformBlockBinding(T,b)}function l(T,v){let b=i[T.id];b===void 0&&(m(T),b=u(T),i[T.id]=b,T.addEventListener("dispose",g));const A=v.program;n.updateUBOMapping(T,A);const y=e.render.frame;s[T.id]!==y&&(h(T),s[T.id]=y)}function u(T){const v=d();T.__bindingPointIndex=v;const b=r.createBuffer(),A=T.__size,y=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,b),b}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const v=i[T.id],b=T.uniforms,A=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let y=0,w=b.length;y<w;y++){const D=Array.isArray(b[y])?b[y]:[b[y]];for(let _=0,S=D.length;_<S;_++){const C=D[_];if(p(C,y,_,A)===!0){const U=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let H=0;H<F.length;H++){const G=F[H],J=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+z,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(T,v,b,A){const y=T.value,w=v+"_"+b;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:A[w]=y.clone(),!0;{const D=A[w];if(typeof y=="number"||typeof y=="boolean"){if(D!==y)return A[w]=y,!0}else if(D.equals(y)===!1)return D.copy(y),!0}return!1}function m(T){const v=T.uniforms;let b=0;const A=16;for(let w=0,D=v.length;w<D;w++){const _=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,C=_.length;S<C;S++){const U=_[S],F=Array.isArray(U.value)?U.value:[U.value];for(let z=0,H=F.length;z<H;z++){const G=F[z],J=x(G),W=b%A,ee=W%J.boundary,te=W+ee;b+=ee,te!==0&&A-te<J.storage&&(b+=A-te),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=J.storage}}}const y=b%A;return y>0&&(b+=A-y),T.__size=b,T.__cache={},this}function x(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ye("WebGLRenderer: Unsupported uniform value type.",T),v}function g(T){const v=T.target;v.removeEventListener("dispose",g);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function f(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:c,update:l,dispose:f}}const jx=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ti=null;function qx(){return ti===null&&(ti=new Ac(jx,32,32,xc,Sr),ti.minFilter=Xt,ti.magFilter=Xt,ti.wrapS=kn,ti.wrapT=kn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class Yx{constructor(e={}){const{canvas:t=Ch(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Set([_c,bc,gc]),x=new Set([Wn,zi,qr,Yr,fc,pc]),g=new Uint32Array(4),f=new Int32Array(4);let T=null,v=null;const b=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let w=!1;this._outputColorSpace=Tt;let D=0,_=0,S=null,C=-1,U=null;const F=new tt,z=new tt;let H=null;const G=new Re(0);let J=0,W=t.width,ee=t.height,te=1,he=null,Le=null;const Ie=new tt(0,0,W,ee),We=new tt(0,0,W,ee);let it=!1;const q=new Cc;let B=!1,Z=!1;const pe=new ze,fe=new P,Ge=new tt,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ot(){return S===null?te:1}let L=n;function Qe(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){const N="webgl2";if(L=Qe(N,E),L===null)throw Qe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let Ze,ht,be,bt,Se,Be,R,M,k,Y,Q,j,ve,ce,Te,_e,$,re,Pe,we,ue,Ue,I,le;function se(){Ze=new ng(L),Ze.init(),Ue=new kx(L,Ze),ht=new q0(L,Ze,e,Ue),be=new Fx(L,Ze),ht.reversedDepthBuffer&&h&&be.buffers.depth.setReversed(!0),bt=new sg(L),Se=new Sx,Be=new Ox(L,Ze,be,Se,ht,Ue,bt),R=new K0(y),M=new tg(y),k=new lp(L),I=new X0(L,k),Y=new ig(L,k,bt,I),Q=new og(L,Y,k,bt),Pe=new ag(L,ht,Be),_e=new Y0(Se),j=new Mx(y,R,M,Ze,ht,I,_e),ve=new Wx(y,Se),ce=new Ex,Te=new Lx(Ze),re=new W0(y,R,M,be,Q,p,c),$=new Ux(y,Q,ht),le=new Xx(L,bt,ht,be),we=new j0(L,Ze,bt),ue=new rg(L,Ze,bt),bt.programs=j.programs,y.capabilities=ht,y.extensions=Ze,y.properties=Se,y.renderLists=ce,y.shadowMap=$,y.state=be,y.info=bt}se();const ae=new Vx(y,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(W,ee,!1))},this.getSize=function(E){return E.set(W,ee)},this.setSize=function(E,N,V=!0){if(ae.isPresenting){ye("WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,ee=N,t.width=Math.floor(E*te),t.height=Math.floor(N*te),V===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(W*te,ee*te).floor()},this.setDrawingBufferSize=function(E,N,V){W=E,ee=N,te=V,t.width=Math.floor(E*V),t.height=Math.floor(N*V),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(F)},this.getViewport=function(E){return E.copy(Ie)},this.setViewport=function(E,N,V,X){E.isVector4?Ie.set(E.x,E.y,E.z,E.w):Ie.set(E,N,V,X),be.viewport(F.copy(Ie).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(We)},this.setScissor=function(E,N,V,X){E.isVector4?We.set(E.x,E.y,E.z,E.w):We.set(E,N,V,X),be.scissor(z.copy(We).multiplyScalar(te).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(E){be.setScissorTest(it=E)},this.setOpaqueSort=function(E){he=E},this.setTransparentSort=function(E){Le=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,V=!0){let X=0;if(E){let O=!1;if(S!==null){const ie=S.texture.format;O=m.has(ie)}if(O){const ie=S.texture.type,de=x.has(ie),xe=re.getClearColor(),me=re.getClearAlpha(),Ce=xe.r,De=xe.g,Me=xe.b;de?(g[0]=Ce,g[1]=De,g[2]=Me,g[3]=me,L.clearBufferuiv(L.COLOR,0,g)):(f[0]=Ce,f[1]=De,f[2]=Me,f[3]=me,L.clearBufferiv(L.COLOR,0,f))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),V&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),re.dispose(),ce.dispose(),Te.dispose(),Se.dispose(),R.dispose(),M.dispose(),Q.dispose(),I.dispose(),le.dispose(),j.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Xc),ae.removeEventListener("sessionend",jc),Ei.stop()};function ne(E){E.preventDefault(),Js("WebGLRenderer: Context Lost."),w=!0}function K(){Js("WebGLRenderer: Context Restored."),w=!1;const E=bt.autoReset,N=$.enabled,V=$.autoUpdate,X=$.needsUpdate,O=$.type;se(),bt.autoReset=E,$.enabled=N,$.autoUpdate=V,$.needsUpdate=X,$.type=O}function ge(E){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Fe(E){const N=E.target;N.removeEventListener("dispose",Fe),pt(N)}function pt(E){ct(E),Se.remove(E)}function ct(E){const N=Se.get(E).programs;N!==void 0&&(N.forEach(function(V){j.releaseProgram(V)}),E.isShaderMaterial&&j.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,V,X,O,ie){N===null&&(N=gt);const de=O.isMesh&&O.matrixWorld.determinant()<0,xe=Uu(E,N,V,X,O);be.setMaterial(X,de);let me=V.index,Ce=1;if(X.wireframe===!0){if(me=Y.getWireframeAttribute(V),me===void 0)return;Ce=2}const De=V.drawRange,Me=V.attributes.position;let $e=De.start*Ce,lt=(De.start+De.count)*Ce;ie!==null&&($e=Math.max($e,ie.start*Ce),lt=Math.min(lt,(ie.start+ie.count)*Ce)),me!==null?($e=Math.max($e,0),lt=Math.min(lt,me.count)):Me!=null&&($e=Math.max($e,0),lt=Math.min(lt,Me.count));const Mt=lt-$e;if(Mt<0||Mt===1/0)return;I.setup(O,X,xe,V,me);let St,ut=we;if(me!==null&&(St=k.get(me),ut=ue,ut.setIndex(St)),O.isMesh)X.wireframe===!0?(be.setLineWidth(X.wireframeLinewidth*ot()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(O.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),be.setLineWidth(Ee*ot()),O.isLineSegments?ut.setMode(L.LINES):O.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else O.isPoints?ut.setMode(L.POINTS):O.isSprite&&ut.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)es("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ee=O._multiDrawStarts,_t=O._multiDrawCounts,nt=O._multiDrawCount,en=me?k.get(me).bytesPerElement:1,Hi=Se.get(X).currentProgram.getUniforms();for(let tn=0;tn<nt;tn++)Hi.setValue(L,"_gl_DrawID",tn),ut.render(Ee[tn]/en,_t[tn])}else if(O.isInstancedMesh)ut.renderInstances($e,Mt,O.count);else if(V.isInstancedBufferGeometry){const Ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_t=Math.min(V.instanceCount,Ee);ut.renderInstances($e,Mt,_t)}else ut.render($e,Mt)};function Nn(E,N,V){E.transparent===!0&&E.side===on&&E.forceSinglePass===!1?(E.side=jt,E.needsUpdate=!0,ls(E,N,V),E.side=Ln,E.needsUpdate=!0,ls(E,N,V),E.side=on):ls(E,N,V)}this.compile=function(E,N,V=null){V===null&&(V=E),v=Te.get(V),v.init(N),A.push(v),V.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),E!==V&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(v.pushLight(O),O.castShadow&&v.pushShadow(O))}),v.setupLights();const X=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ie=O.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const xe=ie[de];Nn(xe,V,O),X.add(xe)}else Nn(ie,V,O),X.add(ie)}),v=A.pop(),X},this.compileAsync=function(E,N,V=null){const X=this.compile(E,N,V);return new Promise(O=>{function ie(){if(X.forEach(function(de){Se.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){O(E);return}setTimeout(ie,10)}Ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let bn=null;function Iu(E){bn&&bn(E)}function Xc(){Ei.stop()}function jc(){Ei.start()}const Ei=new cu;Ei.setAnimationLoop(Iu),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){bn=E,ae.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},ae.addEventListener("sessionstart",Xc),ae.addEventListener("sessionend",jc),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(N),N=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,N,S),v=Te.get(E,A.length),v.init(N),A.push(v),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),q.setFromProjectionMatrix(pe,Bn,N.reversedDepth),Z=this.localClippingEnabled,B=_e.init(this.clippingPlanes,Z),T=ce.get(E,b.length),T.init(),b.push(T),ae.enabled===!0&&ae.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&_a(ie,N,-1/0,y.sortObjects)}_a(E,N,0,y.sortObjects),T.finish(),y.sortObjects===!0&&T.sort(he,Le),ke=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ke&&re.addToRenderList(T,E),this.info.render.frame++,B===!0&&_e.beginShadows();const V=v.state.shadowsArray;$.render(V,E,N),B===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=T.opaque,O=T.transmissive;if(v.setupLights(),N.isArrayCamera){const ie=N.cameras;if(O.length>0)for(let de=0,xe=ie.length;de<xe;de++){const me=ie[de];Yc(X,O,E,me)}ke&&re.render(E);for(let de=0,xe=ie.length;de<xe;de++){const me=ie[de];qc(T,E,me,me.viewport)}}else O.length>0&&Yc(X,O,E,N),ke&&re.render(E),qc(T,E,N);S!==null&&_===0&&(Be.updateMultisampleRenderTarget(S),Be.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(y,E,N),I.resetDefaultState(),C=-1,U=null,A.pop(),A.length>0?(v=A[A.length-1],B===!0&&_e.setGlobalState(y.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?T=b[b.length-1]:T=null};function _a(E,N,V,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){X&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const de=Q.update(E),xe=E.material;xe.visible&&T.push(E,de,xe,V,Ge.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const de=Q.update(E),xe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ge.copy(de.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const me=de.groups;for(let Ce=0,De=me.length;Ce<De;Ce++){const Me=me[Ce],$e=xe[Me.materialIndex];$e&&$e.visible&&T.push(E,de,$e,V,Ge.z,Me)}}else xe.visible&&T.push(E,de,xe,V,Ge.z,null)}}const ie=E.children;for(let de=0,xe=ie.length;de<xe;de++)_a(ie[de],N,V,X)}function qc(E,N,V,X){const{opaque:O,transmissive:ie,transparent:de}=E;v.setupLightsView(V),B===!0&&_e.setGlobalState(y.clippingPlanes,V),X&&be.viewport(F.copy(X)),O.length>0&&cs(O,N,V),ie.length>0&&cs(ie,N,V),de.length>0&&cs(de,N,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Yc(E,N,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[X.id]===void 0&&(v.state.transmissionRenderTarget[X.id]=new Gi(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Sr:Wn,minFilter:ri,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=v.state.transmissionRenderTarget[X.id],de=X.viewport||F;ie.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const xe=y.getRenderTarget(),me=y.getActiveCubeFace(),Ce=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(G),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear(),ke&&re.render(V);const De=y.toneMapping;y.toneMapping=yi;const Me=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),v.setupLightsView(X),B===!0&&_e.setGlobalState(y.clippingPlanes,X),cs(E,V,X),Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let lt=0,Mt=N.length;lt<Mt;lt++){const St=N[lt],{object:ut,geometry:Ee,material:_t,group:nt}=St;if(_t.side===on&&ut.layers.test(X.layers)){const en=_t.side;_t.side=jt,_t.needsUpdate=!0,Kc(ut,V,X,Ee,_t,nt),_t.side=en,_t.needsUpdate=!0,$e=!0}}$e===!0&&(Be.updateMultisampleRenderTarget(ie),Be.updateRenderTargetMipmap(ie))}y.setRenderTarget(xe,me,Ce),y.setClearColor(G,J),Me!==void 0&&(X.viewport=Me),y.toneMapping=De}function cs(E,N,V){const X=N.isScene===!0?N.overrideMaterial:null;for(let O=0,ie=E.length;O<ie;O++){const de=E[O],{object:xe,geometry:me,group:Ce}=de;let De=de.material;De.allowOverride===!0&&X!==null&&(De=X),xe.layers.test(V.layers)&&Kc(xe,N,V,me,De,Ce)}}function Kc(E,N,V,X,O,ie){E.onBeforeRender(y,N,V,X,O,ie),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,N,V,X,E,ie),O.transparent===!0&&O.side===on&&O.forceSinglePass===!1?(O.side=jt,O.needsUpdate=!0,y.renderBufferDirect(V,N,X,O,E,ie),O.side=Ln,O.needsUpdate=!0,y.renderBufferDirect(V,N,X,O,E,ie),O.side=on):y.renderBufferDirect(V,N,X,O,E,ie),E.onAfterRender(y,N,V,X,O,ie)}function ls(E,N,V){N.isScene!==!0&&(N=gt);const X=Se.get(E),O=v.state.lights,ie=v.state.shadowsArray,de=O.state.version,xe=j.getParameters(E,O.state,ie,N,V),me=j.getProgramCacheKey(xe);let Ce=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?M:R).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Fe),Ce=new Map,X.programs=Ce);let De=Ce.get(me);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===de)return Qc(E,xe),De}else xe.uniforms=j.getUniforms(E),E.onBeforeCompile(xe,y),De=j.acquireProgram(xe,me),Ce.set(me,De),X.uniforms=xe.uniforms;const Me=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=_e.uniform),Qc(E,xe),X.needsLights=Fu(E),X.lightsStateVersion=de,X.needsLights&&(Me.ambientLightColor.value=O.state.ambient,Me.lightProbe.value=O.state.probe,Me.directionalLights.value=O.state.directional,Me.directionalLightShadows.value=O.state.directionalShadow,Me.spotLights.value=O.state.spot,Me.spotLightShadows.value=O.state.spotShadow,Me.rectAreaLights.value=O.state.rectArea,Me.ltc_1.value=O.state.rectAreaLTC1,Me.ltc_2.value=O.state.rectAreaLTC2,Me.pointLights.value=O.state.point,Me.pointLightShadows.value=O.state.pointShadow,Me.hemisphereLights.value=O.state.hemi,Me.directionalShadowMap.value=O.state.directionalShadowMap,Me.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Me.spotShadowMap.value=O.state.spotShadowMap,Me.spotLightMatrix.value=O.state.spotLightMatrix,Me.spotLightMap.value=O.state.spotLightMap,Me.pointShadowMap.value=O.state.pointShadowMap,Me.pointShadowMatrix.value=O.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function Jc(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Gs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Qc(E,N){const V=Se.get(E);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Uu(E,N,V,X,O){N.isScene!==!0&&(N=gt),Be.resetTextureUnits();const ie=N.fog,de=X.isMeshStandardMaterial?N.environment:null,xe=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Yt,me=(X.isMeshStandardMaterial?M:R).get(X.envMap||de),Ce=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,De=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Me=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,lt=!!V.morphAttributes.color;let Mt=yi;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Mt=y.toneMapping);const St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=St!==void 0?St.length:0,Ee=Se.get(X),_t=v.state.lights;if(B===!0&&(Z===!0||E!==U)){const Gt=E===U&&X.id===C;_e.setState(X,E,Gt)}let nt=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==_t.state.version||Ee.outputColorSpace!==xe||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isBatchedMesh&&Ee.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ee.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==me||X.fog===!0&&Ee.fog!==ie||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==_e.numPlanes||Ee.numIntersection!==_e.numIntersection)||Ee.vertexAlphas!==Ce||Ee.vertexTangents!==De||Ee.morphTargets!==Me||Ee.morphNormals!==$e||Ee.morphColors!==lt||Ee.toneMapping!==Mt||Ee.morphTargetsCount!==ut)&&(nt=!0):(nt=!0,Ee.__version=X.version);let en=Ee.currentProgram;nt===!0&&(en=ls(X,N,O));let Hi=!1,tn=!1,Cr=!1;const vt=en.getUniforms(),Kt=Ee.uniforms;if(be.useProgram(en.program)&&(Hi=!0,tn=!0,Cr=!0),X.id!==C&&(C=X.id,tn=!0),Hi||U!==E){be.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),vt.setValue(L,"projectionMatrix",E.projectionMatrix),vt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Jt=vt.map.cameraPosition;Jt!==void 0&&Jt.setValue(L,fe.setFromMatrixPosition(E.matrixWorld)),ht.logarithmicDepthBuffer&&vt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&vt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),U!==E&&(U=E,tn=!0,Cr=!0)}if(O.isSkinnedMesh){vt.setOptional(L,O,"bindMatrix"),vt.setOptional(L,O,"bindMatrixInverse");const Gt=O.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),vt.setValue(L,"boneTexture",Gt.boneTexture,Be))}O.isBatchedMesh&&(vt.setOptional(L,O,"batchingTexture"),vt.setValue(L,"batchingTexture",O._matricesTexture,Be),vt.setOptional(L,O,"batchingIdTexture"),vt.setValue(L,"batchingIdTexture",O._indirectTexture,Be),vt.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&vt.setValue(L,"batchingColorTexture",O._colorsTexture,Be));const dn=V.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Pe.update(O,V,en),(tn||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,vt.setValue(L,"receiveShadow",O.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Kt.envMap.value=me,Kt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Kt.envMapIntensity.value=N.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=qx()),tn&&(vt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ee.needsLights&&Nu(Kt,Cr),ie&&X.fog===!0&&ve.refreshFogUniforms(Kt,ie),ve.refreshMaterialUniforms(Kt,X,te,ee,v.state.transmissionRenderTarget[E.id]),Gs.upload(L,Jc(Ee),Kt,Be)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Gs.upload(L,Jc(Ee),Kt,Be),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&vt.setValue(L,"center",O.center),vt.setValue(L,"modelViewMatrix",O.modelViewMatrix),vt.setValue(L,"normalMatrix",O.normalMatrix),vt.setValue(L,"modelMatrix",O.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gt=X.uniformsGroups;for(let Jt=0,va=Gt.length;Jt<va;Jt++){const Ai=Gt[Jt];le.update(Ai,en),le.bind(Ai,en)}}return en}function Nu(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Fu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,N,V){const X=Se.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Se.get(E.texture).__webglTexture=N,Se.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:V,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const V=Se.get(E);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const Ou=L.createFramebuffer();this.setRenderTarget=function(E,N=0,V=0){S=E,D=N,_=V;let X=!0,O=null,ie=!1,de=!1;if(E){const me=Se.get(E);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)Be.setupRenderTarget(E);else if(me.__hasExternalTextures)Be.rebindTextures(E,Se.get(E.texture).__webglTexture,Se.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(me.__boundDepthTexture!==Me){if(Me!==null&&Se.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const De=Se.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[N])?O=De[N][V]:O=De[N],ie=!0):E.samples>0&&Be.useMultisampledRTT(E)===!1?O=Se.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?O=De[V]:O=De,F.copy(E.viewport),z.copy(E.scissor),H=E.scissorTest}else F.copy(Ie).multiplyScalar(te).floor(),z.copy(We).multiplyScalar(te).floor(),H=it;if(V!==0&&(O=Ou),be.bindFramebuffer(L.FRAMEBUFFER,O)&&X&&be.drawBuffers(E,O),be.viewport(F),be.scissor(z),be.setScissorTest(H),ie){const me=Se.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,me.__webglTexture,V)}else if(de){const me=N;for(let Ce=0;Ce<E.textures.length;Ce++){const De=Se.get(E.textures[Ce]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ce,De.__webglTexture,V,me)}}else if(E!==null&&V!==0){const me=Se.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,V)}C=-1},this.readRenderTargetPixels=function(E,N,V,X,O,ie,de,xe=0){if(!(E&&E.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){be.bindFramebuffer(L.FRAMEBUFFER,me);try{const Ce=E.textures[xe],De=Ce.format,Me=Ce.type;if(!ht.textureFormatReadable(De)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Me)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&V>=0&&V<=E.height-O&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),L.readPixels(N,V,X,O,Ue.convert(De),Ue.convert(Me),ie))}finally{const Ce=S!==null?Se.get(S).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,N,V,X,O,ie,de,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(N>=0&&N<=E.width-X&&V>=0&&V<=E.height-O){be.bindFramebuffer(L.FRAMEBUFFER,me);const Ce=E.textures[xe],De=Ce.format,Me=Ce.type;if(!ht.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.bufferData(L.PIXEL_PACK_BUFFER,ie.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),L.readPixels(N,V,X,O,Ue.convert(De),Ue.convert(Me),0);const lt=S!==null?Se.get(S).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,lt);const Mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ph(L,Mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,$e),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ie),L.deleteBuffer($e),L.deleteSync(Mt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,V=0){const X=Math.pow(2,-V),O=Math.floor(E.image.width*X),ie=Math.floor(E.image.height*X),de=N!==null?N.x:0,xe=N!==null?N.y:0;Be.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,de,xe,O,ie),be.unbindTexture()};const ku=L.createFramebuffer(),Bu=L.createFramebuffer();this.copyTextureToTexture=function(E,N,V=null,X=null,O=0,ie=null){ie===null&&(O!==0?(es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=O,O=0):ie=0);let de,xe,me,Ce,De,Me,$e,lt,Mt;const St=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(V!==null)de=V.max.x-V.min.x,xe=V.max.y-V.min.y,me=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,De=V.min.y,Me=V.isBox3?V.min.z:0;else{const dn=Math.pow(2,-O);de=Math.floor(St.width*dn),xe=Math.floor(St.height*dn),E.isDataArrayTexture?me=St.depth:E.isData3DTexture?me=Math.floor(St.depth*dn):me=1,Ce=0,De=0,Me=0}X!==null?($e=X.x,lt=X.y,Mt=X.z):($e=0,lt=0,Mt=0);const ut=Ue.convert(N.format),Ee=Ue.convert(N.type);let _t;N.isData3DTexture?(Be.setTexture3D(N,0),_t=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Be.setTexture2DArray(N,0),_t=L.TEXTURE_2D_ARRAY):(Be.setTexture2D(N,0),_t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const nt=L.getParameter(L.UNPACK_ROW_LENGTH),en=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Hi=L.getParameter(L.UNPACK_SKIP_PIXELS),tn=L.getParameter(L.UNPACK_SKIP_ROWS),Cr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,De),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me);const vt=E.isDataArrayTexture||E.isData3DTexture,Kt=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const dn=Se.get(E),Gt=Se.get(N),Jt=Se.get(dn.__renderTarget),va=Se.get(Gt.__renderTarget);be.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let Ai=0;Ai<me;Ai++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(E).__webglTexture,O,Me+Ai),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Se.get(N).__webglTexture,ie,Mt+Ai)),L.blitFramebuffer(Ce,De,de,xe,$e,lt,de,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||Se.has(E)){const dn=Se.get(E),Gt=Se.get(N);be.bindFramebuffer(L.READ_FRAMEBUFFER,ku),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bu);for(let Jt=0;Jt<me;Jt++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,O,Me+Jt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,O),Kt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gt.__webglTexture,ie,Mt+Jt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gt.__webglTexture,ie),O!==0?L.blitFramebuffer(Ce,De,de,xe,$e,lt,de,xe,L.COLOR_BUFFER_BIT,L.NEAREST):Kt?L.copyTexSubImage3D(_t,ie,$e,lt,Mt+Jt,Ce,De,de,xe):L.copyTexSubImage2D(_t,ie,$e,lt,Ce,De,de,xe);be.bindFramebuffer(L.READ_FRAMEBUFFER,null),be.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Kt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(_t,ie,$e,lt,Mt,de,xe,me,ut,Ee,St.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,ie,$e,lt,Mt,de,xe,me,ut,St.data):L.texSubImage3D(_t,ie,$e,lt,Mt,de,xe,me,ut,Ee,St):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ie,$e,lt,de,xe,ut,Ee,St.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ie,$e,lt,St.width,St.height,ut,St.data):L.texSubImage2D(L.TEXTURE_2D,ie,$e,lt,de,xe,ut,Ee,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,nt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,en),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Hi),L.pixelStorei(L.UNPACK_SKIP_ROWS,tn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Cr),ie===0&&N.generateMipmaps&&L.generateMipmap(_t),be.unbindTexture()},this.initRenderTarget=function(E){Se.get(E).__webglFramebuffer===void 0&&Be.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Be.setTextureCube(E,0):E.isData3DTexture?Be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Be.setTexture2DArray(E,0):Be.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){D=0,_=0,S=null,be.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function pd(r,e){if(e===xh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Ko||e===Hd){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Ko)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Kx extends wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new eb(t)}),this.register(function(t){return new tb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new ib(t)}),this.register(function(t){return new rb(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new ab(t)}),this.register(function(t){return new $x(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new nb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new Qx(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new pb(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Xr.extractUrlBase(e);a=Xr.resolveURL(l,this.path)}else a=Xr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ou(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===fu){try{a[Ke.KHR_BINARY_GLTF]=new mb(e)}catch(d){i&&i(d);return}s=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Rb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(d){case Ke.KHR_MATERIALS_UNLIT:a[d]=new Zx;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[d]=new gb(s,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[d]=new xb;break;case Ke.KHR_MESH_QUANTIZATION:a[d]=new bb;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Jx(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Qx{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Re(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Yt);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new vr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fa(u),l.distance=d;break;case"spot":l=new Xf(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Zx{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return An}extendParams(e,t,n){const i=[];e.color=new Re(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Tt))}return Promise.all(i)}}class $x{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class eb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}}class tb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class nb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class ib{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class rb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class sb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],Yt),Promise.all(s)}}class ab{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class ob{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(s)}}class cb{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class lb{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class db{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class ub{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class hb{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class fb{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(p),u,d,h,i.mode,i.filter),p})})}else return null}}class pb{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==hn.TRIANGLES&&l.mode!==hn.TRIANGLE_STRIP&&l.mode!==hn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,p=[];for(const m of d){const x=new ze,g=new P,f=new zt,T=new P(1,1,1),v=new Rc(m.geometry,m.material,h);for(let b=0;b<h;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,b),c.SCALE&&T.fromBufferAttribute(c.SCALE,b),v.setMatrixAt(b,x.compose(g,f,T));for(const b in c)if(b==="_COLOR_0"){const A=c[b];v.instanceColor=new Qs(A.array,A.itemSize,A.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,c[b]);mt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const fu="glTF",Br=12,md={JSON:1313821514,BIN:5130562};class mb{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==fu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Br,s=new DataView(e,Br);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===md.JSON){const l=new Uint8Array(e,Br+a,o);this.content=n.decode(l)}else if(c===md.BIN){const l=Br+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class gb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const d=tc[u]||u.toLowerCase();o[d]=a[u]}for(const u in e.attributes){const d=tc[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],p=ur[h.componentType];l[d]=p.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(p){for(const m in p.attributes){const x=p.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}d(p)},o,l,Yt,h)})})}}class xb{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class bb{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class pu extends ss{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,d=(n-t)/u,h=d*d,p=h*d,m=e*l,x=m-l,g=-2*p+3*h,f=p-h,T=1-g,v=f-h+d;for(let b=0;b!==o;b++){const A=a[x+b+o],y=a[x+b+c]*u,w=a[m+b+o],D=a[m+b]*u;s[b]=T*A+v*y+g*w+f*D}return s}}const _b=new zt;class vb extends pu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return _b.fromArray(s).normalize().toArray(s),s}}const hn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ur={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gd={9728:qt,9729:Xt,9984:Fd,9985:Fs,9986:zr,9987:ri},xd={33071:kn,33648:qs,10497:Bi},to={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},tc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yb={CUBICSPLINE:void 0,LINEAR:Zr,STEP:Qr},no={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mb(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new zn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),r.DefaultMaterial}function Ii(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sb(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function Tb(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Eb(r){let e;const t=r.extensions&&r.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+io(t.attributes):e=r.indices+":"+io(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+io(r.targets[n]);return e}function io(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function nc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ab(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const wb=new ze;class Rb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Uc(this.options.manager):this.textureLoader=new Kf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ou(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ii(s,o,i),Fn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Xr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=to[i.type],o=ur[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new yt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=to[i.type],l=ur[i.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let x,g;if(p&&p!==d){const f=Math.floor(h/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let v=t.cache.get(T);v||(x=new l(o,f*p,i.count*p/u),v=new bf(x,p/u),t.cache.add(T,v)),g=new Ec(v,c,h%p/u,m)}else o===null?x=new l(i.count*c):x=new l(o,h,i.count*c),g=new yt(x,c,m);if(i.sparse!==void 0){const f=to.SCALAR,T=ur[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,A=new T(a[1],v,i.sparse.count*f),y=new l(a[2],b,i.sparse.count*c);o!==null&&(g=new yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,D=A.length;w<D;w++){const _=A[w];if(g.setX(_,y[w*c]),c>=2&&g.setY(_,y[w*c+1]),c>=3&&g.setZ(_,y[w*c+2]),c>=4&&g.setW(_,y[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=gd[h.magFilter]||Xt,u.minFilter=gd[h.minFilter]||ri,u.wrapS=xd[h.wrapS]||Bi,u.wrapT=xd[h.wrapT]||Bi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==Xt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,p){let m=h;t.isImageBitmapLoader===!0&&(m=function(x){const g=new Lt(x);g.needsUpdate=!0,h(g)}),t.load(Xr.resolveURL(d,s.path),m,void 0,p)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Fn(d,a),d.userData.mimeType=a.mimeType||Ab(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new nu,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Pc,Rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return zn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ke.KHR_MATERIALS_UNLIT]){const d=i[Ke.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Yt),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Tt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=on);const u=s.alphaMode||no.OPAQUE;if(u===no.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===no.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==An&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==An&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==An){const d=s.emissiveFactor;o.emissive=new Re().setRGB(d[0],d[1],d[2],Yt)}return s.emissiveTexture!==void 0&&a!==An&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Tt)),Promise.all(l).then(function(){const d=new a(o);return s.name&&(d.name=s.name),Fn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ii(i,d,s),d})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return bd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Eb(l),d=i[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=bd(new Pt,l,t),i[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Mb(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let p=0,m=u.length;p<m;p++){const x=u[p],g=a[p];let f;const T=l[p];if(g.mode===hn.TRIANGLES||g.mode===hn.TRIANGLE_STRIP||g.mode===hn.TRIANGLE_FAN||g.mode===void 0)f=s.isSkinnedMesh===!0?new vf(x,T):new Je(x,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),g.mode===hn.TRIANGLE_STRIP?f.geometry=pd(f.geometry,Hd):g.mode===hn.TRIANGLE_FAN&&(f.geometry=pd(f.geometry,Ko));else if(g.mode===hn.LINES)f=new tu(x,T);else if(g.mode===hn.LINE_STRIP)f=new Lc(x,T);else if(g.mode===hn.LINE_LOOP)f=new Af(x,T);else if(g.mode===hn.POINTS)f=new Dc(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(f.geometry.morphAttributes).length>0&&Tb(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),Fn(f,s),g.extensions&&Ii(i,f,g),t.assignFinalMaterial(f),d.push(f)}for(let p=0,m=d.length;p<m;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Ii(i,d[0],s),d[0];const h=new Bt;s.extensions&&Ii(i,h,s),t.associations.set(h,{meshes:e});for(let p=0,m=d.length;p<m;p++)h.add(d[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Ne.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const d=a[l];if(d){o.push(d);const h=new ze;s!==null&&h.fromArray(s.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const p=i.channels[d],m=i.samplers[p.sampler],x=p.target,g=x.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,T=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",T)),l.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],p=d[1],m=d[2],x=d[3],g=d[4],f=[];for(let v=0,b=h.length;v<b;v++){const A=h[v],y=p[v],w=m[v],D=x[v],_=g[v];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const S=n._createAnimationTracks(A,y,w,D,_);if(S)for(let C=0;C<S.length;C++)f.push(S[C])}const T=new Ff(s,void 0,f);return Fn(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,wb)});for(let p=0,m=d.length;p<m;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new eu:l.length>1?u=new Bt:l.length===1?u=l[0]:u=new mt,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=a),Fn(u,s),s.extensions&&Ii(n,u,s),s.matrix!==void 0){const d=new ze;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Bt;n.name&&(s.name=i.createUniqueName(n.name)),Fn(s,n),n.extensions&&Ii(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++)s.add(c[u]);const l=u=>{const d=new Map;for(const[h,p]of i.associations)(h instanceof Rn||h instanceof Lt)&&d.set(h,p);return u.traverse(h=>{const p=i.associations.get(h);p!=null&&d.set(h,p)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];xi[s.path]===xi.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let l;switch(xi[s.path]){case xi.weights:l=xr;break;case xi.rotation:l=br;break;case xi.translation:case xi.scale:l=_r;break;default:switch(n.itemSize){case 1:l=xr;break;case 2:case 3:default:l=_r;break}break}const u=i.interpolation!==void 0?yb[i.interpolation]:Zr,d=this._getArrayFromAccessor(n);for(let h=0,p=c.length;h<p;h++){const m=new l(c[h]+"."+xi[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=nc(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof br?vb:pu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Cb(r,e,t){const n=e.attributes,i=new xn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const u=nc(ur[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new P,c=new P;for(let l=0,u=s.length;l<u;l++){const d=s[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],p=h.min,m=h.max;if(p!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),h.normalized){const x=nc(ur[h.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new In;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function bd(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=tc[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return et.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Fn(r,e),Cb(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sb(r,e.targets,t):r})}var Pb=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(f){s=f.instance,s.exports.__wasm_call_ctors()});function o(f){for(var T=new Uint8Array(f.length),v=0;v<f.length;++v){var b=f.charCodeAt(v);T[v]=b>96?b-97:b>64?b-39:b+4}for(var A=0,v=0;v<f.length;++v)T[A++]=T[v]<60?n[T[v]]:(T[v]-60)*64+T[++v];return T.buffer.slice(0,A)}function c(f,T,v,b,A,y,w){var D=f.exports.sbrk,_=b+3&-4,S=D(_*A),C=D(y.length),U=new Uint8Array(f.exports.memory.buffer);U.set(y,C);var F=T(S,b,A,C,y.length);if(F==0&&w&&w(S,_,A),v.set(U.subarray(S,S+b*A)),D(S-D(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],h=0;function p(f){var T={object:new Worker(f),pending:0,requests:{}};return T.object.onmessage=function(v){var b=v.data;T.pending-=b.count,T.requests[b.id][b.action](b.value),delete T.requests[b.id]},T}function m(f){for(var T="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),v=new Blob([T],{type:"text/javascript"}),b=URL.createObjectURL(v),A=d.length;A<f;++A)d[A]=p(b);for(var A=f;A<d.length;++A)d[A].object.postMessage({});d.length=f,URL.revokeObjectURL(b)}function x(f,T,v,b,A){for(var y=d[0],w=1;w<d.length;++w)d[w].pending<y.pending&&(y=d[w]);return new Promise(function(D,_){var S=new Uint8Array(v),C=++h;y.pending+=f,y.requests[C]={resolve:D,reject:_},y.object.postMessage({id:C,count:f,size:T,source:S,mode:b,filter:A},[S.buffer])})}function g(f){var T=f.data;if(!T.id)return self.close();self.ready.then(function(v){try{var b=new Uint8Array(T.count*T.size);c(v,v.exports[T.mode],b,T.count,T.size,T.source,v.exports[T.filter]),self.postMessage({id:T.id,count:T.count,action:"resolve",value:b},[b.buffer])}catch(A){self.postMessage({id:T.id,count:T.count,action:"reject",value:A})}})}return{ready:a,supported:!0,useWorkers:function(f){m(f)},decodeVertexBuffer:function(f,T,v,b,A){c(s,s.exports.meshopt_decodeVertexBuffer,f,T,v,b,s.exports[l[A]])},decodeIndexBuffer:function(f,T,v,b){c(s,s.exports.meshopt_decodeIndexBuffer,f,T,v,b)},decodeIndexSequence:function(f,T,v,b){c(s,s.exports.meshopt_decodeIndexSequence,f,T,v,b)},decodeGltfBuffer:function(f,T,v,b,A,y){c(s,s.exports[u[A]],f,T,v,b,s.exports[l[y]])},decodeGltfBufferAsync:function(f,T,v,b,A){return d.length>0?x(f,T,v,u[b],l[A]):a.then(function(){var y=new Uint8Array(f*T);return c(s,s.exports[u[b]],y,f,T,v,s.exports[l[A]]),y})}}})();class Lb extends $d{constructor(){super();const e=new Si;e.deleteAttribute("uv");const t=new zn({side:jt}),n=new zn,i=new fa(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new Je(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Rc(e,n,6),o=new mt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new Je(e,ar(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new Je(e,ar(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new Je(e,ar(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new Je(e,ar(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const h=new Je(e,ar(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);const p=new Je(e,ar(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ar(r){return new wf({color:0,emissive:16777215,emissiveIntensity:r})}function Db(){const r=document.createElement("canvas");r.width=r.height=128;const e=r.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);t.addColorStop(0,"#fff"),t.addColorStop(.16,"#fff8df"),t.addColorStop(.42,"rgba(255,162,55,.92)"),t.addColorStop(.72,"rgba(255,54,2,.38)"),t.addColorStop(1,"rgba(50,4,0,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const n=new ua(r);return n.colorSpace=Tt,n}function Ib(r,e){const t=Db(),n=navigator.deviceMemory||4,i=innerWidth<600||n<=2?.55:n<=4||devicePixelRatio>1.75?.76:1;let s=0,a=.28,o=.28;function c(p,m,x){p=Math.round(p*i);const g=new Float32Array(p*3),f=new Float32Array(p),T=new Float32Array(p),v=new Float32Array(p);for(let y=0;y<p;y++)f[y]=Math.abs(Math.sin((y+1)*(17.31+x*4.7+m.length))*43758.5453%1),T[y]=(m==="core"?1.7:m==="body"?2.25:2.8)*(.62+f[y]*.72);const b=new Pt;b.setAttribute("position",new yt(g,3)),b.setAttribute("aSeed",new yt(f,1)),b.setAttribute("aSize",new yt(T,1)),b.setAttribute("aAge",new yt(v,1));const A=new Ct({transparent:!0,depthWrite:!1,blending:Mi,toneMapped:!1,uniforms:{map:{value:t},power:{value:1},layer:{value:m==="core"?0:m==="body"?1:2}},vertexShader:"attribute float aSeed,aSize,aAge;varying float vSeed,vAge,vLayer;uniform float layer;void main(){vSeed=aSeed;vAge=aAge;vLayer=layer;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=aSize*(300./max(3.,-mv.z))*(1.-aAge*.28);gl_Position=projectionMatrix*mv;}",fragmentShader:"uniform sampler2D map;uniform float power;varying float vSeed,vAge,vLayer;void main(){vec2 q=gl_PointCoord-.5;float r=length(q);float torn=.84+.12*sin(atan(q.y,q.x)*7.+vSeed*41.)+.04*sin(vAge*45.+vSeed*90.);if(r>.5*torn)discard;vec4 t=texture2D(map,gl_PointCoord);float center=smoothstep(.5,.02,r);vec3 hot=vec3(1.,.98,.82),amber=vec3(1.,.34,.018),deep=vec3(.92,.055,.002);vec3 col=mix(hot,amber,smoothstep(.02,.38,vAge));col=mix(col,deep,smoothstep(.45,1.,vAge));if(vLayer>1.5)col=mix(col,deep,.7);float alpha=t.a*power*(vLayer<.5?.7:vLayer<1.5?.42:.15)*(1.-vAge*.64);gl_FragColor=vec4(col*alpha*(2.1+center*1.6),alpha);}"});return{points:new Dc(b,A),seed:f,kind:m,index:x}}function l(p,m){const x=new Bt;x.position.copy(p);const g=[c(105,"core",m),c(260,"body",m),c(95,"haze",m)];g.forEach(T=>x.add(T.points));const f=new Je(new ts(1,20,14),new An({color:16756791,transparent:!0,opacity:.8,blending:Mi,depthWrite:!1,toneMapped:!1}));return x.add(f),{group:x,layers:g,throat:f}}function u(p,m){const x=p.points.geometry.attributes.position,g=p.points.geometry.attributes.aAge,f=p.kind==="core",T=p.kind==="haze";for(let v=0;v<x.count;v++){const b=p.seed[v],A=m.speed*(f?1.28:T?.72:1),y=(b+s*A*(.19+b*.07)+p.index*.13)%1,w=-.04-y*m.length*(f?.72:T?1.08:1),D=m.radius*(f?.22:T?1.18:.72),_=D*(.07+Math.pow(y,.68)),S=.62+.38*Math.sin(s*(4.5+b*2)+y*22+b*81),C=b*75.4+y*18+s*(1.15+b*.8),U=Math.sin(s*7+b*93+y*31)*_*.34;x.array[v*3]=Math.cos(C)*_*S+U,x.array[v*3+1]=Math.sin(C)*_*(.76+.25*Math.sin(s*5+b*40)),x.array[v*3+2]=w,g.array[v]=y}x.needsUpdate=!0,g.needsUpdate=!0,p.points.material.uniforms.power.value=m.power}function d(p,m){p.layers.forEach(x=>u(x,m)),p.throat.visible=m.power>.01,p.throat.position.z=-.12,p.throat.scale.set(.21+m.radius*.13,.21+m.radius*.13,.28+m.power*.34),p.throat.material.opacity=.32+m.power*.55}const h=e.map((p,m)=>{const x=l(p,m);return r.add(x.group),x});return{sockets:h.map(p=>p.group),get thrust(){return a},get targetThrust(){return o},get time(){return s},setThrust(p=0,m=!1){o=Ne.clamp(p,0,1),m&&(a=o)},setVisible(p){h.forEach(m=>m.group.visible=p)},update(p,m=!0){m?(s+=p,a=Ne.damp(a,o,3.6,p)):a=o;const x=Ne.smoothstep(a,.72,1),g={power:a,length:1.15+Math.max(0,a-.28)/.44*4.05+x*.65,radius:.2+a*.47+x*.25,speed:.3+a+x*.55};h.forEach(f=>d(f,g))},dispose(){h.forEach(p=>{p.group.removeFromParent(),p.layers.forEach(m=>{m.points.geometry.dispose(),m.points.material.dispose()}),p.throat.geometry.dispose(),p.throat.material.dispose()}),t.dispose()}}}const ro=r=>{const e=new P;for(const t of r)e.add(t);return e.multiplyScalar(1/Math.max(1,r.length))},_d=new WeakSet;function Ub(r){const e=[];r.updateMatrixWorld(!0),r.traverse(m=>{if(!m.isMesh)return;const x=m.geometry.attributes.position,g=new P;for(let f=0;f<x.count;f++)e.push(g.fromBufferAttribute(x,f).applyMatrix4(m.matrixWorld).clone())});const t=ro(e),n=[0,0,0,0,0,0,0,0,0];for(const m of e){const x=m.x-t.x,g=m.y-t.y,f=m.z-t.z;n[0]+=x*x,n[1]+=x*g,n[2]+=x*f,n[3]+=x*g,n[4]+=g*g,n[5]+=g*f,n[6]+=x*f,n[7]+=g*f,n[8]+=f*f}const i=(m,x)=>new P(m[0]*x.x+m[1]*x.y+m[2]*x.z,m[3]*x.x+m[4]*x.y+m[5]*x.z,m[6]*x.x+m[7]*x.y+m[8]*x.z),s=(m,x)=>{const g=x.clone().normalize();for(let f=0;f<60;f++)g.copy(i(m,g)).normalize();return g};let a=s(n,new P(0,0,1));a.z<0&&a.negate();const o=a.dot(i(n,a)),c=n.map((m,x)=>m-o*[a.x,a.y,a.z][Math.floor(x/3)]*[a.x,a.y,a.z][x%3]);let l=s(c,new P(1,0,0));l.x<0&&l.negate(),l.addScaledVector(a,-l.dot(a)).normalize();const u=a.clone().cross(l).normalize();l.copy(u).cross(a).normalize();let d=1/0;for(const m of e)d=Math.min(d,m.dot(a));const h=e.filter(m=>m.dot(a)<d+.28&&Math.abs(m.dot(l))>.3),p=new ze().makeBasis(l,u,a);return{left:ro(h.filter(m=>m.dot(l)<0)),right:ro(h.filter(m=>m.dot(l)>0)),correction:new zt().setFromRotationMatrix(p).invert()}}function Nb(r){const e=new Bt;e.name="APPROVED_V7_1_SPACECRAFT",e.add(r);let t=new xn().setFromObject(e),n=t.getSize(new P);n.x>n.z&&n.x>n.y?e.rotation.y=-Math.PI/2:n.y>n.z&&(e.rotation.x=Math.PI/2),e.rotation.y+=Math.PI,t.setFromObject(e),r.position.sub(t.getCenter(new P)),e.scale.setScalar(17/Math.max(...t.getSize(new P).toArray())),t.setFromObject(e),e.position.sub(t.getCenter(new P)),e.updateMatrixWorld(!0);const i=Ub(e),s=new Bt;s.name="V7_1_CANONICAL_FRAME",s.quaternion.copy(i.correction),s.add(e),s.updateMatrixWorld(!0);const a=new Bt;return a.name="APPROVED_V7_1_JOURNEY_ADAPTER",a.rotation.y=Math.PI,a.add(s),a.scale.setScalar(.32),r.traverse(o=>{var c,l;if(o.isMesh){o.castShadow=!0,o.receiveShadow=!0;for(const u of Array.isArray(o.material)?o.material:[o.material]){if(!u||_d.has(u))continue;_d.add(u);const d=((c=o.name)==null?void 0:c.startsWith("LP_"))||((l=u.name)==null?void 0:l.startsWith("LP_"));if(d||u.color.multiply(new Re(8161168)),u.metalness=d?Math.max(u.metalness||0,.62):.74,u.roughness=d?.36:.44,u.envMapIntensity=d?.95:1.12,"emissiveIntensity"in u&&(u.emissiveIntensity=d?0:.18),!d){const h=u.onBeforeCompile;u.onBeforeCompile=p=>{h==null||h(p),p.fragmentShader=p.fragmentShader.replace("#include <opaque_fragment>",`float lpCool=max(outgoingLight.b,outgoingLight.g);
float lpWarm=outgoingLight.r;
float lpChroma=max(max(outgoingLight.r,outgoingLight.g),outgoingLight.b)-min(min(outgoingLight.r,outgoingLight.g),outgoingLight.b);
float lpCoolDominance=lpCool-lpWarm*.88;
float lpBlueMask=smoothstep(.006,.075,lpCoolDominance)*smoothstep(.012,.13,lpChroma);
float lpNeutral=dot(outgoingLight,vec3(.24,.52,.24));
vec3 lpWarmMetal=vec3(lpNeutral*.64,lpNeutral*.59,lpNeutral*.55);
outgoingLight=mix(outgoingLight,lpWarmMetal,lpBlueMask*.998);
#include <opaque_fragment>`)},u.customProgramCacheKey=()=>`lp-v71-no-cyan-artifact-${u.uuid}`}}}}),{root:a,canonical:s,nozzles:[i.left.clone(),i.right.clone()]}}const mu="float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}";function Fb(r){const e=new qn(1,1),t=new Yf;t.index=e.index.clone(),t.setAttribute("position",e.attributes.position.clone()),t.setAttribute("uv",e.attributes.uv.clone()),e.dispose();const n=64,i=new Float32Array(n*3);for(let l=0;l<n;l++)i.set([l/n,l*.61803398875%1,(l*.38196601125+.17)%1],l*3);t.setAttribute("seed",new Qs(i,3)),t.instanceCount=n;const s={time:{value:0},strength:{value:0}},a=new Ct({uniforms:s,transparent:!0,depthWrite:!1,vertexShader:"attribute vec3 seed;uniform float time,strength;varying vec2 vUv;varying float age;varying float variation;void main(){age=fract(seed.x+time*.32);float angle=seed.y*6.283185+time*.045;float radius=1.5+age*9.;vec3 p=vec3(cos(angle)*radius,.7+sin(age*3.14)*(1.+seed.z),sin(angle)*radius);vec4 mv=modelViewMatrix*vec4(p,1.);mv.xy+=position.xy*(1.2+age*4.5)*vec2(1.5,.6);gl_Position=projectionMatrix*mv;vUv=uv;variation=seed.z;}",fragmentShader:`uniform float time,strength;varying vec2 vUv;varying float age;varying float variation;${mu}void main(){vec2 p=vUv*2.-1.;float n=noise(p*4.+variation*30.-vec2(time*.4,time*.18));float alpha=exp(-dot(p,p)*3.2)*(1.-smoothstep(.6,1.,length(p)))*smoothstep(0.,.15,age)*(1.-smoothstep(.55,1.,age));alpha*=strength*.5*smoothstep(.17,.75,n);gl_FragColor=vec4(mix(vec3(.18,.15,.12),vec3(.62,.43,.26),n),alpha);}`}),o=new Je(t,a);o.name="LandingTakeoffDust",o.frustumCulled=!1,r.add(o);let c=0;return{update(l,u,d){u&&(s.time.value+=l),c=u?Ne.damp(c,d,d>c?4:1.25,l):0,s.strength.value=c,o.visible=c>.002},get strength(){return c}}}function Ob(r){const e={time:{value:0},strength:{value:0}},t=new Je(new qn(2,2),new Ct({uniforms:e,transparent:!0,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 p;void main(){p=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`varying vec2 p;uniform float time,strength;${mu}void main(){float cloud=noise(vec2(p.x*6.-time*.025,p.y*8.))+noise(vec2(p.x*12.+time*.04,p.y*14.))*.35;float band=exp(-pow((p.y-.39)*11.,2.));float alpha=smoothstep(.4,.95,cloud)*band*.16*strength;gl_FragColor=vec4(vec3(.43,.32,.22),alpha);}`}));return t.frustumCulled=!1,t.renderOrder=8,r.add(t),{update(n,i,s){i&&(e.time.value+=n),e.strength.value=s},get time(){return e.time.value}}}const bi=.16,kb=4.45;function Bb(r){const e=document.createElement("canvas");e.width=e.height=1024;const t=e.getContext("2d");t.fillStyle="#42484b",t.fillRect(0,0,1024,1024);let n=1947+r;const i=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296;for(let o=0;o<38e3;o++){const c=70+Math.floor(i()*40);t.fillStyle=`rgba(${c},${c+3},${c+5},${i()*.32})`,t.fillRect(i()*1024,i()*1024,1+i()*3,1+i()*2)}const s=t.createRadialGradient(512,490,70,512,490,400);s.addColorStop(0,"#161c21a8"),s.addColorStop(.7,"#242b3030"),s.addColorStop(1,"#242b3000"),t.fillStyle=s,t.fillRect(0,0,1024,1024),t.strokeStyle="#161c22",t.lineWidth=3;for(const o of[200,400,624,824])t.beginPath(),t.moveTo(o,0),t.lineTo(o,1024),t.stroke();for(const o of[205,410,615,820])t.beginPath(),t.moveTo(0,o),t.lineTo(1024,o),t.stroke();t.strokeStyle="#7b7e7b55",t.lineWidth=1;for(const o of[204,404,628,828])t.beginPath(),t.moveTo(o,0),t.lineTo(o,1024),t.stroke();t.strokeStyle="#b4b9af",t.lineWidth=8;for(const[o,c,l,u]of[[320,300,1,1],[704,300,-1,1],[320,724,1,-1],[704,724,-1,-1]])t.beginPath(),t.moveTo(o+l*70,c),t.lineTo(o,c),t.lineTo(o,c+u*70),t.stroke();t.strokeStyle="#c5934b",t.lineWidth=10;for(let o=0;o<32;o++){const c=o*Math.PI/16;o%4!==0&&(t.beginPath(),t.moveTo(512+Math.cos(c)*441,512+Math.sin(c)*441),t.lineTo(512+Math.cos(c+.025)*464,512+Math.sin(c+.025)*464),t.stroke())}t.textAlign="center",t.fillStyle="#aeb6b5",t.font="500 23px monospace",t.fillText(`LP / ${String(r+1).padStart(2,"0")}`,512,865),t.fillStyle="#9c7844",t.font="16px monospace",t.fillText("APPROACH",512,180);for(let o=0;o<1200;o++)t.fillStyle=`rgba(36,42,45,${.15+i()*.5})`,t.fillRect(i()*1024,i()*1024,1+i()*12,1+i()*2);const a=new ua(e);return a.colorSpace=Tt,a.anisotropy=4,a}function zb(r,e,t,n){const i=Bb(t),s=new zn({color:3488576,bumpMap:e,bumpScale:.04,roughness:.98,metalness:.08}),a=new zn({color:3423556,roughness:.64,metalness:.65}),o=new Je(new Wr(4.52,4.9,.43,8),s);o.rotation.y=Math.PI/8,o.position.y=-.185,r.add(o);const c=[],l=[],u=[];for(let y=0;y<2;y++)for(let w=0;w<=96;w++){const D=w/96*Math.PI*2,_=y?6.8+.17*Math.sin(D*13):4.8;c.push(Math.cos(D)*_,y?Math.sqrt(4225-_*_)-65+.024:-.08,Math.sin(D)*_),l.push(.5+Math.cos(D)*_*.045,.5+Math.sin(D)*_*.045),y&&w&&u.push(w-1,w,w+97,w-1,w+97,w+96)}const d=new Pt;d.setAttribute("position",new Rt(c,3)),d.setAttribute("uv",new Rt(l,2)),d.setIndex(u),d.computeVertexNormals(),r.add(new Je(d,new Ct({uniforms:n.uniforms,vertexShader:n.vertexShader.replace("vNormal=normal","vNormal=normalize(mat3(modelMatrix)*vec3(position.x,65.+position.y,position.z))"),fragmentShader:n.fragmentShader,side:on})));const h=new Je(new Wr(4.45,4.53,.12,8),a);h.rotation.y=Math.PI/8,h.position.y=bi-.065,r.add(h);const p=new Je(new Ic(kb,8),new zn({map:i,bumpMap:i,bumpScale:.014,roughness:.86,metalness:.28}));p.rotation.set(-Math.PI/2,0,Math.PI/8),p.position.y=bi,p.name="WEATHERED_LANDING_DECK",r.add(p);const m=new Rc(new Wr(.035,.035,.014,6),new zn({color:6845050,roughness:.48,metalness:.8}),32),x=new ze;for(let y=0;y<32;y++){const w=y/32*Math.PI*2,D=3.92;x.makeTranslation(Math.cos(w)*D,bi+.007,Math.sin(w)*D),m.setMatrixAt(y,x)}r.add(m);const g=document.createElement("canvas");g.width=g.height=64;const f=g.getContext("2d"),T=f.createRadialGradient(32,32,1,32,32,30);T.addColorStop(0,"#ffcb82a0"),T.addColorStop(.3,"#e7974550"),T.addColorStop(1,"#e7974500"),f.fillStyle=T,f.fillRect(0,0,64,64);const v=new ua(g);v.colorSpace=Tt;const b=[],A=[];for(let y=0;y<8;y++){const w=y*Math.PI/4,D=Math.cos(w)*3.98,_=Math.sin(w)*3.98,S=new Je(new Si(.62,.055,.16),a);S.position.set(D,bi+.018,_),S.rotation.y=-w+Math.PI/2,r.add(S);const C=new Je(new Si(.4,.012,.065),new An({color:16765335,toneMapped:!1}));C.position.set(D,bi+.05,_),C.rotation.y=S.rotation.y,r.add(C),b.push(C);const U=new Je(new qn(1.6,.85),new An({map:v,transparent:!0,opacity:.4,depthWrite:!1,blending:Mi,toneMapped:!1}));U.rotation.x=-Math.PI/2,U.position.set(D*.94,bi+.003,_*.94),r.add(U),A.push(U)}return{update(y){const w=.72+y*.28;for(const D of b)D.material.color.setRGB(1.1*w,.71*w,.35*w);for(const D of A)D.material.opacity=.32+y*.16}}}const gu=`vec2 warpUV(vec2 p){return vec2(fract(p.x+.034*sin(p.y*PI*6.)+.012*sin(p.x*PI*10.)),clamp(p.y+.017*sin(p.x*PI*6.)*sin(p.y*PI),.002,.998));}
float rock(vec2 p){return dot(texture2D(atlas,warpUV(p)).rgb,vec3(.299,.587,.114));}
// Source photography provides geological texture; height is artistically inferred, not measured topography.
float heightAt(vec2 p){return rock(p)*.78+rock(vec2(p.x*2.+.17,p.y*.81+.08))*.22;}
vec2 geologyUV(vec3 n,float turn){vec3 a=vec3(n.x*.990+n.y*.14,-n.x*.14+n.y*.990,n.z);return vec2(fract(atan(a.x,a.z)/(2.*PI)+.5-turn),acos(clamp(a.y,-1.,1.))/PI);}
vec3 aces(vec3 c){return clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),0.,1.);}
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
vec3 terrainNormal(vec3 n,vec2 m,float grazing,out float slope){
 vec2 d=texel*1.4;
 vec2 fine=vec2(heightAt(m+vec2(d.x,0.))-heightAt(m-vec2(d.x,0.)),heightAt(m+vec2(0.,d.y))-heightAt(m-vec2(0.,d.y)));
 vec2 broad=vec2(rock(m+vec2(d.x*6.,0.))-rock(m-vec2(d.x*6.,0.)),rock(m+vec2(0.,d.y*6.))-rock(m-vec2(0.,d.y*6.)));
 vec2 g=(fine*.80+broad*.20)*relief*(.55+.7*grazing);slope=length(g);
 vec3 t=normalize(vec3(n.z,.0001,-n.x)),b=normalize(cross(n,t));return normalize(n-t*g.x+b*g.y);
}
vec3 stonePalette(vec2 m,float elevation,float slope){
 float region=rock(vec2(m.x+.31,m.y*.57+.11));
 vec3 basalt=vec3(.065,.072,.079),slate=vec3(.24,.255,.269),sediment=vec3(.205,.16,.12),oxide=vec3(.25,.105,.065),copper=vec3(.35,.25,.15);
 vec3 c=mix(basalt,slate,smoothstep(.20,.52,elevation));
 float deposits=smoothstep(.38,.51,region)*(1.-smoothstep(.36,.46,elevation));
 c=mix(c,sediment,deposits*.75);
 c=mix(c,oxide,smoothstep(.49,.62,region)*smoothstep(.39,.51,elevation)*.6);
 c=mix(c,copper,smoothstep(.57,.70,elevation)*smoothstep(.38,.5,region)*.65);
 return c*mix(1.,.48,smoothstep(.10,.4,slope));
}
float specularBRDF(vec3 n,vec3 l,float rough){
 vec3 v=vec3(0.,0.,1.),h=normalize(l+v);float nl=max(dot(n,l),0.),nv=max(n.z,.001),nh=max(dot(n,h),0.),vh=max(dot(v,h),0.);
 float a2=pow(rough,4.),den=nh*nh*(a2-1.)+1.;float D=a2/(PI*den*den+.0001);
 float k=pow(rough+1.,2.)/8.;float G=(nl/(nl*(1.-k)+k+.0001))*(nv/(nv*(1.-k)+k));
 float F=.035+.965*pow(1.-vh,5.);return min(.06,D*G*F/(4.*nl*nv+.0001));
}
`,pn=Object.freeze([{id:"origins",name:"Origins",years:["1984","1992"],title:"Where curiosity begins.",story:"Born in 1984, I began preschool in 1988. My first introduction to computing came in 1992, with a 486 PC, DOS and WordStar—the beginning of my curiosity about technology.",highlights:[["1984","Born"],["1988","Started preschool"],["1992","First computing experience · 486 PC, DOS & WordStar"]],tint:"#b99a7c"},{id:"computing",name:"Computing foundation",years:["1994",""],title:"Learning the logic.",story:"In 1994, I explored Windows, FoxPro, COBOL and GW-BASIC, building on my early computing experience and beginning to understand how software works.",highlights:[["Desktop computing","Windows"],["Data & programming","FoxPro & COBOL"],["Programming fundamentals","GW-BASIC"]],tint:"#839caf"},{id:"discovery",name:"Design discovery",years:["1998",""],title:"Creativity meets technology.",story:"In 1998, desktop publishing became my bridge between creativity and technology. I explored CorelDRAW, Photoshop and PageMaker, began learning Turbo C and C++, and created small projects for schools and colleges.",highlights:[["Graphic design","CorelDRAW & Photoshop"],["Layout & publishing","PageMaker"],["Programming","Turbo C & C++"],["Early projects","Small projects for schools & colleges"]],tint:"#9c9c80"},{id:"education",name:"Education & clients",years:["2001",""],title:"Learning through real work.",story:"In 2001, after completing school, I began an M.Sc. in Software Engineering. Alongside my studies, I created marketing materials and brand collateral for corporate clients.",highlights:[["Education","Began M.Sc. in Software Engineering"],["Marketing design","Marketing materials"],["Brand identity","Brand collateral for corporate clients"]],tint:"#bd8e70"},{id:"launch",name:"Professional launch",years:["2006",""],title:"Design goes digital.",story:"In 2006, I completed my M.Sc. in Software Engineering and joined Olympic Media, an advertising agency. My work expanded from graphic design into web experiences, laying the foundation for my move into UX and UI design.",highlights:[["Education","Completed M.Sc. in Software Engineering"],["Organization","Joined Olympic Media"],["Digital design","Graphic design & web experiences"],["Career direction","Transition toward UX/UI design"]],tint:"#7dabad"},{id:"enterprise",name:"Enterprise UX",years:["2014",""],title:"Designing larger systems.",story:"In 2014, I joined Zensar as a Senior UX/UI Designer, expanding my work into enterprise experiences and complex digital systems.",highlights:[["Organization","Joined Zensar"],["Role","Senior UX/UI Designer"],["Design focus","Enterprise experiences"],["Product complexity","Complex digital systems"]],tint:"#9d91b2"},{id:"leadership",name:"Leadership & BFSI",years:["2018",""],title:"Leading at greater scale.",story:"In 2018, I moved on-site to lead a larger design team for a banking, financial services and insurance (BFSI) client. My work brought together team leadership, complex financial systems and stakeholder needs.",highlights:[["Team leadership","Led a larger on-site design team"],["Domain","Banking, financial services & insurance"],["Design focus","Complex financial systems"],["Collaboration","Stakeholder alignment"]],tint:"#c2a67b"},{id:"future",name:"AI & the future",years:["2026",""],title:"Building what’s next.",story:"In 2026, I returned to India and joined Accurate Background as Product Design Lead. Alongside this new role, I began an MBA focused on AI, continuing my growth in product design leadership and emerging technology.",highlights:[["Location","Returned to India"],["Organization","Accurate Background"],["Role","Product Design Lead"],["Learning","MBA focused on AI"]],closing:"The journey continues—with new challenges, continued learning and the next chapter in product design.",tint:"#8ea5bc"}]),vd=65,ea=8,ns=Object.freeze([{x:0,z:0,heading:24},{x:215,z:-155,heading:-68},{x:-195,z:-210,heading:138},{x:125,z:235,heading:76},{x:-245,z:145,heading:-142},{x:390,z:90,heading:-18},{x:15,z:-395,heading:174},{x:-425,z:-70,heading:-102}].map((r,e)=>Object.freeze({...r,index:e,heading:r.heading*Math.PI/180}))),Gb=Object.freeze([-150,58,90]),cn=8,ic=4;function xu(r,e){return e===ic&&r>=.93&&r<1?Math.sin(Math.PI*(r-.93)/.07)**2:0}let rc=9.6;function Vb(r){rc=r}const sn=r=>Ne.smootherstep(r,0,1),sc=new P(0,1,0),yd=r=>new P(ns[r].x,ea,ns[r].z),ta=(r,e)=>r+Math.atan2(Math.sin(e-r),Math.cos(e-r)),Hb=(r,e,t)=>Ne.lerp(r,ta(r,e),t),so=[-35,42,-58,28,-44,54,-26,38],Md=r=>14.4+r%3*.6,Sd=r=>4.1+r%3*.3;function Vs(r,e=null,t=0){const n=Ne.clamp(r/cn,0,1),i=yd(t).setY(rc),s=e===null?new P().fromArray(Gb):yd(e).setY(rc),a=s.clone();a.y+=24;const o=i.clone().add(new P(0,24,0));let c;if(e===null&&n<.12)c=s.clone();else if(n<.3)c=s.clone().lerp(a,sn((n-(e===null?.12:.06))/(e===null?.18:.24)));else if(n<.7){const v=sn((n-.3)/.4);c=a.clone().lerp(o,v),c.y+=Math.sin(Math.PI*v)**2*26}else t===ic?(c=o.clone().lerp(i,sn((n-.7)/.23)),n>=.93&&(c.y+=.12*Math.sin(Math.PI*(n-.93)/.07)**2)):c=o.clone().lerp(i,sn((n-.7)/.3));const l=o.clone().sub(a);l.y=0,l.normalize();const u=Math.atan2(-l.x,-l.z),d=e===null?0:ns[e].heading,h=ta(d,u),p=Hb(Ne.lerp(d,h,sn((n-.08)/.22)),ns[t].heading,sn((n-.58)/.32)),m=e===null?Ne.degToRad(28)*(1-sn((n-.12)/.28)):0,x=new zt().setFromAxisAngle(sc,p+m),g=Math.sign(ta(d,u)-d)*-.06*Math.sin(Math.PI*sn((n-.22)/.5))**2;x.multiply(new zt().setFromAxisAngle(new P(0,0,1),g));const f=n===1?"LANDED":n>=.93&&t===ic?"FIRM TOUCHDOWN":e===null&&n<.12?"ENGINE PREPARATION":e===null&&n<.3?"DEPARTURE":e===null&&n<.52?"ACCELERATION":n<.08?"IGNITION":n<.3?"LIFT OFF":n<.62?"TRAVEL":n<.7?"APPROACH":n<.96?"DESCENT":"TOUCHDOWN",T=n===1?0:e===null&&n<.14?Ne.lerp(.28,1,sn(n/.14)):n<.64?.9:.9*(1-sn((n-.64)/.36));return{elapsed:n*cn,duration:cn,progress:n,pathProgress:n,position:c,quaternion:x,heading:p,tangent:l,phase:f,thrust:T,speed:n===1?0:1-n,landingState:n===1?"landed":n>.7?"descending":"in-flight"}}function Wb(r,e,t=!1,n=null,i=0,s=1.5){const a=Ne.clamp(r,0,1),o=Vs(a*cn,n,i),c=sn(a/.3),l=sn((a-.58)/.42),u=Math.sin(Math.PI*a)**2,d=Ne.lerp(n===null?t?12.5:9.2:Md(n),21,c)*(1-l)+Md(i)*l,h=Ne.lerp(n===null?2.4:Sd(n),7.5,c)*(1-l)+Sd(i)*l,p=Vs((a+.018*u)*cn,n,i),m=p.position.clone().sub(e).clampLength(0,2.3),x=ta(o.heading,Vs((a-.028*u)*cn,n,i).heading)-o.heading,g=n===null?-35:so[n],f=Math.sign(so[i])*57,T=Ne.lerp(Ne.lerp(g,f,c),so[i],l),v=-o.heading+Ne.degToRad(T)-Ne.clamp(x,-.15,.15),b=t?1.12*Math.max(1,.39/s):1,A=new P(Math.sin(v)*d,h,-Math.cos(v)*d).multiplyScalar(b),y=e.clone().add(A).addScaledVector(m,.8),w=e.clone().addScaledVector(m,.15),D=t?50:38,_=new P().crossVectors(w.clone().sub(y).normalize(),sc).normalize(),S=n===null?c:1,C=t?.015*Math.sin(2*Math.PI*a):(.44+.045*u)*S;w.addScaledVector(_,-A.length()*Math.tan(Ne.degToRad(D/2))*s*C),w.y+=(t?1.2:.9)*S;const U=xu(a,i),F=Math.sin((a-.93)*cn*35)*U;if(y.y+=F*.045,y.addScaledVector(_,F*.022),n===null){const z=sn((a-.2)/.34),H=e.clone().add(new P(t?9.6:12.8,t?3.2:3.8,t?-6.4:-7.4)),G=e.clone().add(new P(0,t?-.15:-.35,0)),J=new P().crossVectors(G.clone().sub(H).normalize(),sc).normalize();G.addScaledVector(J,t?-.65:-1.25),y.lerp(H,1-z),w.lerp(G,1-z)}return{position:y,target:w,fov:D}}const ac=Object.freeze(Object.fromEntries(pn.map((r,e)=>{const t=ns[e];return[r.id,Object.freeze({id:r.id,name:r.name,radius:vd,position:[t.x,ea-vd,t.z],landingAnchor:[t.x,ea,t.z],landingHeading:t.heading,tint:r.tint})]}))),ao="varying vec3 vNormal;varying vec3 vWorld;void main(){vNormal=normal;vec4 p=modelMatrix*vec4(position,1.);vWorld=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",Xb=`precision highp float;varying vec3 vNormal;varying vec3 vWorld;uniform sampler2D atlas;uniform vec2 texel;uniform float relief,turn,reveal;uniform vec3 tint,sunDirection;const float PI=3.14159265359;${gu}
void main(){vec3 n=normalize(vNormal),v=normalize(cameraPosition-vWorld);vec2 globeUV=geologyUV(n,turn);vec2 capUV=n.xz*2.8+vec2(.44+turn*.08,.55);float capMix=smoothstep(.84,.97,n.y)*(1.-smoothstep(28.,55.,distance(cameraPosition,vWorld)));vec2 m=mix(globeUV,capUV,capMix);float ld=dot(n,sunDirection),slope;float day=smoothstep(-.045,.065,ld),grazing=exp(-pow((ld-.09)/.25,2.));vec3 detailed=terrainNormal(n,m,grazing,slope);vec2 d=texel*1.4;vec2 capGradient=vec2(heightAt(m+vec2(d.x,0.))-heightAt(m-vec2(d.x,0.)),heightAt(m+vec2(0.,d.y))-heightAt(m-vec2(0.,d.y)));detailed=mix(detailed,normalize(n-vec3(capGradient.x,0.,capGradient.y)*relief*.38),capMix);detailed=normalize(mix(n,detailed,smoothstep(.025,.20,dot(n,v))));float elevation=heightAt(m);float lit=max(dot(detailed,sunDirection),0.)*day;float horizon=heightAt(m+vec2(-texel.x*7.,texel.y*5.));float shadows=1.-smoothstep(.018,.075,horizon-elevation)*grazing*.72;float cavity=clamp(.56+elevation*.85,.56,1.)*shadows;vec3 albedo=stonePalette(m,elevation,slope);float reflected=.008+exp(-pow(ld/.19,2.))*.15;vec3 energy=pow(albedo,vec3(2.2))*((lit*3.25+reflected)*cavity)*vec3(1.13,1.,.88);energy+=pow(albedo,vec3(2.2))*vec3(.54,.19,.028)*lit*grazing*smoothstep(.035,.18,slope);float ridgeCatch=max(dot(detailed,sunDirection)-max(ld,0.),0.);energy+=vec3(.21,.132,.055)*ridgeCatch*grazing*day;float contrast=clamp(.85+(elevation-rock(m+texel*12.))*2.5,.38,1.18);energy*=contrast;float grain=rock(vWorld.xz*.025);energy*=mix(1.,.8+grain*.5,1.-smoothstep(25.,75.,distance(cameraPosition,vWorld)));float rim=pow(1.-max(dot(n,v),0.),5.);energy+=vec3(.82,.29,.055)*rim*day*.3;gl_FragColor=vec4(pow(aces(max(energy,vec3(0.))),vec3(1./2.2)),reveal);}`;function jb(r){const e=new Bt;e.name="ResumeJourneyWorldSystem",r.add(e);let t=0,n=[],i;const s=Ob(r),a=[-1,1].map(h=>{const p=new fa(16758637,.8,7,2);return p.userData.side=h,e.add(p),p}),o=new ts(65,160,112);async function c(h){i=await new Uc().loadAsync(new URL("/assets/resume-journey/geology-4k-DoMYFqK5.webp",import.meta.url).href),i.wrapS=i.wrapT=Bi,i.anisotropy=Math.min(8,h.capabilities.getMaxAnisotropy());for(const[p,m]of pn.entries()){const x=ac[m.id],g=new Bt;g.name=`WORLD_${m.id}`,g.position.fromArray(x.position);const f={atlas:{value:i},texel:{value:new Oe(1/i.image.width,1/i.image.height)},relief:{value:4.2},turn:{value:p*.127},atmosphere:{value:1},reveal:{value:0},cloudTurn:{value:p*.127},tint:{value:new Re(m.tint)},sunDirection:{value:new P(.65,.18,-.74).normalize()}},T=new Je(o,new Ct({uniforms:f,vertexShader:ao,fragmentShader:Xb,transparent:!0}));T.userData.planetIndex=p,g.add(T);const v=new Je(o,new Ct({uniforms:{color:{value:new Re(m.tint)},atmosphere:f.atmosphere},vertexShader:ao,fragmentShader:"varying vec3 vNormal;varying vec3 vWorld;uniform vec3 color;uniform float atmosphere;void main(){vec3 n=normalize(vNormal),v=normalize(cameraPosition-vWorld);float rim=pow(1.-max(dot(n,v),0.),4.);float day=max(dot(n,normalize(vec3(.65,.18,-.74))),0.);gl_FragColor=vec4(mix(color,vec3(1.,.65,.32),day),atmosphere*rim*(.10+day*.24));}",transparent:!0,depthWrite:!1,blending:Mi,side:Ln}));v.scale.setScalar(1.008),g.add(v);const b=v.clone();b.material=v.material.clone(),b.material.uniforms.atmosphere=f.atmosphere,b.scale.setScalar(1.035),g.add(b);const A=new Je(o,new Ct({uniforms:f,vertexShader:ao,fragmentShader:`precision highp float;varying vec3 vNormal;varying vec3 vWorld;uniform sampler2D atlas;uniform vec2 texel;uniform float relief,turn,cloudTurn,atmosphere;uniform vec3 tint,sunDirection;const float PI=3.14159265359;${gu}
      void main(){vec3 n=normalize(vNormal);vec2 uv=geologyUV(n,cloudTurn+.08);vec3 sampleColor=texture2D(atlas,uv).rgb;float mask=smoothstep(.39,.62,dot(sampleColor,vec3(.333)))*(1.-smoothstep(.38,.64,texture2D(atlas,uv*1.7+.2).r));float day=max(dot(n,sunDirection),0.);gl_FragColor=vec4(mix(vec3(.10,.13,.16),vec3(.39,.33,.25),day),atmosphere*mask*.22*(.2+day*.8));}`,transparent:!0,depthWrite:!1,side:Ln}));A.scale.setScalar(1.012),g.add(A),e.add(g);const y=new Bt;y.name=`LANDING_${m.id}`,y.position.fromArray(x.landingAnchor),y.rotation.y=x.landingHeading,e.add(y);const w=zb(y,i,p,T.material),D=new zn({map:i,color:3422786,roughness:1});for(let H=0;H<14;H++){const G=H*2.399,J=8+H%5*2.5,W=Math.cos(G)*J,ee=Math.sin(G)*J,te=.35+H%4*.18,he=new ts(1,28,20),Le=he.attributes.position;for(let We=0;We<Le.count;We++){const it=Le.getX(We),q=Le.getY(We),B=Le.getZ(We),Z=.85+.17*Math.sin(it*11+q*9+B*7);Le.setXYZ(We,it*Z,q*Z,B*Z)}he.computeVertexNormals();const Ie=new Je(he,D);Ie.position.set(W,Math.sqrt(4225-J*J)-65+te*.28,ee),Ie.scale.set(.5+H%3*.3,te,.5+H%2*.3),Ie.rotation.set(H*.3,H*.7,H*.2),y.add(Ie)}const _=document.createElement("canvas");_.width=_.height=128;const S=_.getContext("2d"),C=S.createRadialGradient(64,64,8,64,64,60);C.addColorStop(0,"rgba(0,0,0,.75)"),C.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=C,S.fillRect(0,0,128,128);const U=new ua(_),F=new Je(new qn(5,6),new An({map:U,transparent:!0,depthWrite:!1}));F.rotation.x=-Math.PI/2,F.position.y=bi+.004,F.name="SHIP_CONTACT_SHADOW",y.add(F);const z=Fb(y);n.push({group:g,planet:T,site:y,shadow:F,uniforms:f,dust:z,platform:w,contactY:ea+bi,index:p,def:x})}}function l(h){if(t=pn.findIndex(p=>p.id===h),t<0)throw new Error(`Unknown world: ${h}`);return n[t].group}function u(h,p,m=0,x=null,g=t,f="idle"){const T=x===null?Ne.smootherstep(m,.14,.29):1;for(const b of n){b.uniforms.reveal.value=b.index===g?T:1,b.group.visible=b.index===g&&T>.001||b.index===x&&m<.9,b.uniforms.atmosphere.value=b.index===g?T*(1-Ne.smootherstep(m,.6,.93)):b.index===x?Ne.smootherstep(m,0,.26):1,p&&(b.uniforms.cloudTurn.value+=h*.004),b.site.visible=b.index===g&&T>.995||b.index===x&&m<.9,b.shadow.material.opacity=b.index===g?Ne.smootherstep(m,.78,1):1-Ne.smootherstep(m,.06,.26);const A=b.index===g&&f==="playing"?Ne.smootherstep(m,.76,.94):0,y=b.index===x&&f==="playing"?Ne.smootherstep(m,0,.09)*(1-Ne.smootherstep(m,.16,.31)):0,w=b.index===g&&f==="playing"?xu(m,g)*2.4:0;b.dust.update(h,p,Math.max(A,y,w)),b.platform.update(Math.max(A,y))}const v=n[x!==null&&m<.48?x:g];if(v)for(const b of a)b.position.copy(v.site.position).add(new P(b.userData.side*3.6,.55,-.6).applyQuaternion(v.site.quaternion)),b.intensity=T===0?0:f==="playing"?1.8:.8;s.update(h,p,f==="landed"?1:Ne.smootherstep(m,.65,.94))}function d(){const h=new Set,p=new Set;e.traverse(m=>{m.geometry&&m.geometry!==o&&m.geometry.dispose(),m.material&&h.add(m.material)}),h.forEach(m=>{m.map&&p.add(m.map),m.dispose()}),p.forEach(m=>m.dispose()),i==null||i.dispose(),o.dispose(),e.removeFromParent()}return{root:e,load:c,activate:l,update:u,get effects(){return{visiblePlanets:n.filter(h=>h.group.visible).length,cloudTime:s.time,dust:n.map(h=>h.dust.strength)}},setLandingMode(){},dispose:d,get active(){var h;return((h=n[t])==null?void 0:h.group)??null},get planet(){var h;return((h=n[t])==null?void 0:h.planet)??null},get planets(){return n.map(h=>h.planet)},get landingSite(){const h=n[t];return h?{group:h.site,contactY:h.contactY}:null}}}const Et=Object.freeze({firstDelay:.25,interval:[.75,1.65],quietInterval:[3.8,5.5],quietEvery:6,desktopLimit:4,mobileLimit:3,mobileBreakpoint:600,layerThresholds:[.45,.88],depth:[.55,.85,1.15],opacity:[.28,.6,.76],angle:[.18,.55],impactDirection:[.7,-.36,-.62],skimDirection:[.9,-.28],speed:[[.18,.3],[.35,.62],[.75,1.1]],speedThresholds:[.3,.8],headSize:[.65,1.5],impactSize:[1.4,2.2],tailSeconds:[.18,.32],tailPixels:[40,220],standOff:[.38,.65],life:5});function qb(r,e){return e(...r%6===0?Et.quietInterval:Et.interval)}function Yb(r,e,t){const n=(b,A)=>b+Math.random()*(A-b),i=[],s=new Bt;s.name="LP_MeteorFlybys",r.add(s);const a={value:new Oe(1,1)},o={value:Array.from({length:24},()=>new tt(-2,-2,-1,-1))},c=()=>({fade:{value:0},resolution:a,protectedRects:o}),l="uniform vec2 resolution;uniform vec4 protectedRects[24];void protectCopy(){vec2 p=gl_FragCoord.xy/resolution;for(int i=0;i<24;i++){vec4 r=protectedRects[i];if(p.x>=r.x&&p.x<=r.z&&p.y>=r.y&&p.y<=r.w)discard;}}",u="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",d=`varying vec2 vUv;uniform float fade;${l}void main(){protectCopy();float t=vUv.x,w=abs(vUv.y*2.-1.);float broad=exp(-w*w*2.)*.12,mid=exp(-w*w*18.)*.65,core=exp(-w*w*170.)*.95;float wake=(1.-smoothstep(.08,1.,t))*mix(.12,.95,pow(1.-t,2.));gl_FragColor=vec4(mix(vec3(.95,.35,.14),vec3(1.,.99,.92),pow(1.-t,4.)),fade*wake*(broad+mid+core));}`;for(let b=0;b<Et.desktopLimit;b++){const A=new Float32Array(222),y=new Float32Array(148),w=[];for(let C=0;C<=36;C++)if(y.set([C/36,0,C/36,1],C*4),C<36){const U=C*2;w.push(U,U+1,U+2,U+1,U+3,U+2)}const D=new Pt;D.setAttribute("position",new yt(A,3).setUsage(Rh)),D.setAttribute("uv",new yt(y,2)),D.setIndex(w);const _=new Je(D,new Ct({uniforms:c(),vertexShader:u,fragmentShader:d,transparent:!0,depthWrite:!1,side:on,blending:Mi})),S=new Je(new qn(1,1),new Ct({uniforms:c(),vertexShader:u,fragmentShader:`varying vec2 vUv;uniform float fade;${l}void main(){protectCopy();float r=length((vUv-.5)*2.);float core=exp(-r*r*30.),halo=exp(-r*r*5.);gl_FragColor=vec4(mix(vec3(1.,.47,.18),vec3(1.,.99,.92),core),fade*(core+halo*.2)*(1.-smoothstep(.8,1.,r)));}`,transparent:!0,depthWrite:!1,side:on,blending:Mi}));_.frustumCulled=S.frustumCulled=!1,s.add(_,S),i.push({active:!1,tail:_,head:S,positions:A,age:0,position:new P,start:new P,direction:new P,side:new P})}let h=0,p=Et.firstDelay,m=0,x=-1,g=0;function f(){const b=t.getBoundingClientRect(),A=document.querySelectorAll(".site-header-shell,.journey-brand,.planet-waypoints,.journey-status,.planet-trigger,.chapter-panel"),y=[];for(const w of A){const D=w.getBoundingClientRect();!D.width||!D.height||w.hidden||y.push(new tt((D.left-b.left-8)/b.width,1-(D.bottom-b.top+8)/b.height,(D.right-b.left+8)/b.width,1-(D.top-b.top-8)/b.height))}o.value.forEach((w,D)=>w.copy(y[D]??new tt(-2,-2,-1,-1)))}function T(b,A,y){const w=i.find(Ie=>!Ie.active);if(!w)return;const D=Math.random(),_=D<Et.layerThresholds[0]?0:D<Et.layerThresholds[1]?1:2,S=Et.depth[_],C=[180,115,75][_],U=Math.tan(Ne.degToRad(b.fov/2))*C,F=U*2/y,z=new P;b.getWorldDirection(z);const H=new P(1,0,0).applyQuaternion(b.quaternion),G=new P(0,1,0).applyQuaternion(b.quaternion),J=A<600?n(-.9,-.2):n(-.05,.25),W=A<600?n(.25,.55):n(.22,.46);w.start.copy(b.position).addScaledVector(z,C).addScaledVector(H,J*U*b.aspect).addScaledVector(G,W*U);const ee=n(...Et.angle);w.direction.copy(H).multiplyScalar(Math.cos(ee)).addScaledVector(G,-Math.sin(ee)),w.side.copy(H).multiplyScalar(Math.sin(ee)).addScaledVector(G,Math.cos(ee));const te=Math.random(),he=te<Et.speedThresholds[0]?0:te<Et.speedThresholds[1]?1:2,Le=Math.max(A,600)*n(...Et.speed[he])*S;w.speed=Le*F,w.size=n(...Et.headSize)*S*F,w.length=Ne.clamp(Le*n(...Et.tailSeconds),...Et.tailPixels)*F,w.opacity=Et.opacity[_],w.age=0,w.seed=n(0,50),w.active=!0,w.head.visible=w.tail.visible=!0,m++}function v(b,A,y){if(e.getDrawingBufferSize(a.value),!y){i.forEach(_=>{_.active=!1,_.head.visible=_.tail.visible=!1}),g=0,p=h+Et.firstDelay;return}h+=b;const w=t.clientWidth,D=t.clientHeight;h-x>.2&&(f(),x=h),h>=p&&(i.filter(_=>_.active).length<(w<Et.mobileBreakpoint?Et.mobileLimit:Et.desktopLimit)&&T(A,w,D),p=h+qb(m,n)),g=0;for(const _ of i){if(!_.active){_.head.visible=_.tail.visible=!1;continue}_.age+=b,_.position.copy(_.start).addScaledVector(_.direction,_.speed*_.age);const S=_.position.clone().project(A);if(_.age>Et.life||S.x>1.3||S.y<-1.2){_.active=!1,_.head.visible=_.tail.visible=!1;continue}const C=Math.max(0,Math.min(_.age/.08,(Et.life-_.age)/.16,1))*_.opacity;_.head.position.copy(_.position),_.head.quaternion.copy(A.quaternion),_.head.scale.setScalar(_.size*5),_.head.material.uniforms.fade.value=C,_.tail.material.uniforms.fade.value=C;const U=Math.min(_.length,_.speed*_.age);for(let F=0;F<=36;F++){const z=F/36,H=_.position.clone().addScaledVector(_.direction,-U*z),G=Math.sin(z*26+_.seed+_.age*16)*_.size*.16*z,J=_.size*3.8*Math.pow(1-z,.85);for(let W=0;W<2;W++)_.positions.set(H.clone().addScaledVector(_.side,G+(W?1:-1)*J).toArray(),(F*2+W)*3)}_.tail.geometry.attributes.position.needsUpdate=!0,Math.abs(S.x)<1&&Math.abs(S.y)<1&&g++}}return{update:v,get stats(){return{time:h,spawned:m,active:i.filter(b=>b.active).length,inFrame:g,nextIn:Math.max(0,p-h),positions:i.filter(b=>b.active).map(b=>b.position.toArray()),ages:i.filter(b=>b.active).map(b=>b.age)}}}}const Td=new P(.6,.32,1).normalize();async function Kb(r,e,t){const n=await new Uc().loadAsync(new URL("/assets/resume-journey/space-4k-CcfGZUV9.webp",import.meta.url).href);n.colorSpace=Tt,n.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy());const i={atlas:{value:n},imageAspect:{value:n.image.width/n.image.height},viewportAspect:{value:1},offset:{value:new Oe},cover:{value:.82},sunPosition:{value:new Oe},sunVisibility:{value:0},time:{value:0}},s=new Je(new qn(2,2),new Ct({uniforms:i,depthWrite:!1,depthTest:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,.999999,1.);}",fragmentShader:`
   varying vec2 vUv;
   uniform sampler2D atlas;
   uniform float imageAspect,viewportAspect,cover,sunVisibility;
   uniform vec2 offset,sunPosition;
   void main(){
    vec2 crop=viewportAspect>imageAspect?vec2(1.,imageAspect/viewportAspect):vec2(viewportAspect/imageAspect,1.);
    vec2 uv=(vUv-.5)*crop*cover+.5+offset;
    vec3 sky=texture2D(atlas,uv).rgb*.18;

    // Compact sun halo and lens glare only; no atmospheric ray pass.
    vec2 p=(vUv-sunPosition)*vec2(viewportAspect,1.);
    float r=length(p);
    float core=(1.-smoothstep(.0028,.0042,r))*4.;
    float innerGlow=exp(-r*95.)*.16;
    float scatter=exp(-r*r*42.)*.026+exp(-r*8.)*.008;
    float glare=exp(-p.y*p.y*65000.)*exp(-abs(p.x)*17.)*.012;
    vec3 sunlight=vec3(1.,.91,.74)*(core+innerGlow)+vec3(1.,.82,.61)*(scatter+glare);
    gl_FragColor=vec4(sky+sunlight*sunVisibility,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}));s.name="TravelParallax4KNebulaAndSun",s.frustumCulled=!1,s.renderOrder=-10,r.add(s);const a=new vr(16768429,.55);a.name="JourneySunRim",a.position.copy(Td).multiplyScalar(1e3),r.add(a);const o=Yb(r,e,t);let c=19784;const l=()=>(c=Math.imul(c,1664525)+1013904223>>>0,c/4294967296),u=[];for(const[U,F,z,H]of[[1e3,700,2,.62],[420,180,2.7,.66],[220,70,2.1,.38]]){const G=new Float32Array(U*3);for(let he=0;he<G.length;he++)G[he]=(l()-.5)*F;const J=new Pt;J.setAttribute("position",new yt(G,3));const W={span:{value:F},pixelRatio:{value:1},alpha:{value:H},size:{value:z}},ee=new Ct({uniforms:W,transparent:!0,depthWrite:!1,vertexShader:"uniform float span,size,pixelRatio;varying float fade;void main(){vec3 relative=mod(position-cameraPosition+span*.5,span)-span*.5;vec3 p=cameraPosition+relative;float distanceToEye=length(relative);fade=smoothstep(8.,18.,distanceToEye)*(1.-smoothstep(span*.35,span*.49,distanceToEye));vec4 mv=viewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=pixelRatio*clamp(size*65./max(15.,-mv.z),1.,3.);}",fragmentShader:"uniform float alpha;varying float fade;void main(){float r=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(.66,.78,.87,alpha*fade*(1.-smoothstep(.05,1.,r)));}"}),te=new Dc(J,ee);te.frustumCulled=!1,te.name=`ParallaxStars_${F}`,r.add(te),u.push(te)}const d=new Float32Array(720),h=[];for(let U=0;U<120;U++)h.push(new P((l()-.5)*100,(l()-.5)*100,(l()-.5)*100));const p=new Pt;p.setAttribute("position",new yt(d,3));const m=new tu(p,new Pc({color:12638436,transparent:!0,opacity:0,depthWrite:!1}));m.frustumCulled=!1,m.name="FlightDepthStreaks",r.add(m);let x=0,g=!0;const f=new P,T=new P,v=new P,b=new P,A=new P,y=new P,w=new P,D=new P,_=new zt;let S=!1;function C(U,F,z,H,G,J=1){U.getWorldDirection(b),i.viewportAspect.value=U.aspect,i.offset.value.set(b.x*.052+Math.sin(F.x*.004)*.032,b.y*.026+Math.sin(F.z*.004)*.035+Math.sin(F.y*.01)*.018),i.cover.value=.82-Math.min(.025,Math.max(0,F.y-10)*45e-5),G&&(i.time.value+=z),_.copy(U.quaternion).invert(),D.copy(Td).applyQuaternion(_);const W=!S||!G||!H&&f.distanceToSquared(F)>4,ee=W?1:1-Math.exp(-z*7);w.lerp(D,ee).normalize(),S=!0;const te=-w.z,he=Ne.smoothstep(te,.18,.55);i.sunVisibility.value=W?he:Ne.damp(i.sunVisibility.value,he,8,z),te>.14&&(A.copy(w).multiplyScalar(1e4).applyMatrix4(U.projectionMatrix),i.sunPosition.value.set(A.x*.5+.5,A.y*.5+.5)),u.forEach(Ie=>Ie.material.uniforms.pixelRatio.value=J),o.update(z,U,G),T.copy(F).sub(f).divideScalar(Math.max(z,.001)),(g||!H||!G)&&T.set(0,0,0),f.copy(F),g=!1;const Le=Math.min(1,T.length()/130);x=G?Ne.damp(x,Le,5,z):0,m.material.opacity=x*.3,v.copy(T).normalize().multiplyScalar(-Math.min(1.6,x*1.6));for(let Ie=0;Ie<h.length;Ie++){y.copy(h[Ie]);for(const We of["x","y","z"])y[We]=U.position[We]+Ne.euclideanModulo(y[We]-U.position[We]+50,100)-50;d.set(y.toArray(),Ie*6),d.set(y.add(v).toArray(),Ie*6+3)}p.attributes.position.needsUpdate=!0,m.visible=x>.01}return{update:C,dispose(){n.dispose()},get parallax(){return{layers:4,streakStrength:x,backgroundResolution:[n.image.width,n.image.height],backgroundMapping:"bounded-travel-parallax",skyOffset:i.offset.value.toArray(),skyCover:i.cover.value,sun:{style:"soft-sun-glare",cameraResponseSeconds:1/7,position:i.sunPosition.value.toArray(),visibility:i.sunVisibility.value,time:i.time.value,occlusion:"behind-scene-geometry"},meteors:o.stats}}}}const Jb={ignition:new URL("/assets/resume-journey/01-engine-ignition-Dsy4EtpD.mp3",import.meta.url).href,engine:new URL("/assets/resume-journey/02-flight-engine-loop-BOKf0lji.mp3",import.meta.url).href,touchdown:new URL("/assets/resume-journey/04-touchdown-ELtzeiPW.mp3",import.meta.url).href},Ed=.4,oo={ignition:.45,engine:.28,touchdown:.4},co=r=>Math.min(1,Math.max(0,r));function Qb(r=()=>{}){let e=null,t=null,n=null,i=null,s=!1,a=!1,o=0,c="idle",l=0,u=0,d=!1,h=!1,p=!1,m=null,x=null,g=null,f=!1,T=!1,v=!1,b=null,A=0;const y=new Set;function w(){if(e)return;const B=window.AudioContext;if(!B)throw new Error("Web Audio is not supported in this browser.");e=new B,t=e.createGain(),t.gain.value=0,t.connect(e.destination)}async function D(){n||(n=Promise.all(Object.entries(Jb).map(async([B,Z])=>{const pe=await fetch(Z);if(!pe.ok)throw new Error(`Audio request failed (${pe.status}): ${Z}`);return[B,await e.decodeAudioData(await pe.arrayBuffer())]})).then(B=>Object.fromEntries(B))),i=await n}function _(B,Z,pe){const fe=e.currentTime;B.cancelScheduledValues(fe),B.setValueAtTime(B.value,fe),B.linearRampToValueAtTime(Z,fe+pe)}function S(B,Z){try{Z===void 0?B.stop():B.stop(Z)}catch(pe){if(pe.name!=="InvalidStateError")throw pe}}function C(B){y.delete(B),B.source.disconnect(),B.gain.disconnect(),m===B.source&&(m=null)}function U(B=.08){for(const Z of y)_(Z.gain.gain,0,B),S(Z.source,e.currentTime+B)}function F(B,Z,{delay:pe=0,fade:fe=.08,onended:Ge}={}){const gt=e.createBufferSource(),ke=e.createGain(),ot={source:gt,gain:ke};gt.buffer=i[B],gt.connect(ke),ke.connect(t);const L=e.currentTime+pe;return ke.gain.setValueAtTime(0,L),ke.gain.linearRampToValueAtTime(Z,L+fe),gt.onended=()=>{C(ot),Ge==null||Ge()},y.add(ot),B==="ignition"&&(m=gt),gt.start(L),ot}function z(){return oo.engine*co(u)}function H(B=.2){if(!g||f)return;const Z=s&&c==="playing"?z():0,pe=e.currentTime;b!==null&&Math.abs(Z-b)<.015&&pe-A<.15||(b=Z,A=pe,_(g.gain,Z,B))}function G(B=.35){if(!s||a||c!=="playing"||!i)return;if(x){f&&d&&(T=!0);return}const Z=e.createBufferSource(),pe=e.createGain();Z.buffer=i.engine,Z.loop=!0,pe.gain.value=0,Z.connect(pe),pe.connect(t),Z.onended=()=>{if(x!==Z)return;x=null,g=null,f=!1,b=null,Z.disconnect(),pe.disconnect();const fe=T;T=!1,fe&&s&&c==="playing"&&d&&G(.3)},x=Z,g=pe,f=!1,T=!1,b=z(),A=e.currentTime,Z.start(),_(pe.gain,z(),B)}function J(B=.18){x&&(f||(f=!0,T=!1,_(g.gain,0,B),S(x,e.currentTime+B+.02)))}function W(){!s||h||c!=="playing"||(h=!0,F("ignition",oo.ignition,{fade:.16,onended:()=>{s&&c==="playing"&&d&&G(.45)}}))}function ee(){!s||p||(p=!0,F("touchdown",oo.touchdown,{delay:.2,fade:.12}))}function te(B,Z,pe){if(a)return;const fe=c;if(c=B,l=co(Z),u=co(pe),c==="playing"){d||(d=!0,T=!1,p=!1,s&&i?W():s?v=!0:h=!0),s&&(x?f&&d&&!m?T=!0:H(.22):!m&&!v&&G(.35));return}if(c==="landed"){if(fe==="landed")return;const Ge=fe==="playing"||fe==="idle"&&l===1;J(.2),U(.08),Ge&&!p&&ee(),d=!1,h=!1,v=!1;return}c==="paused"&&fe!=="paused"&&(J(.1),U(.08))}async function he(){if(a)return!1;s=!0;const B=++o;try{w();const Z=e.state==="suspended"?e.resume():Promise.resolve();return await Promise.all([Z,D()]),!s||a||o!==B?!1:(_(t.gain,Ed,.18),c==="playing"&&(v&&!h?(v=!1,W()):x?f&&d&&!m?T=!0:H(.25):m||G(.35)),!0)}catch(Z){return s=!1,i||(n=null),t&&_(t.gain,0,.05),J(.05),U(.05),r(Z),!1}}function Le(){s=!1,o++,e&&(_(t.gain,0,.08),J(.08),U(.08))}function Ie(){if(d=!1,h=!1,p=!1,v=!1,c="idle",l=0,u=0,!!e){t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(0,e.currentTime),x&&(x.onended=null,S(x),x.disconnect(),g.disconnect(),x=null,g=null,f=!1,T=!1,b=null);for(const B of y)B.source.onended=null,S(B.source),B.source.disconnect(),B.gain.disconnect();y.clear(),m=null}}async function We(){if(!(!e||e.state==="closed")){t.gain.cancelScheduledValues(e.currentTime),t.gain.setValueAtTime(0,e.currentTime),x&&(x.onended=null,S(x),x.disconnect(),g.disconnect(),x=null,g=null,f=!1,T=!1,b=null);for(const B of y)B.source.onended=null,S(B.source),B.source.disconnect(),B.gain.disconnect();y.clear(),m=null,await e.suspend()}}async function it(){if(!(!s||!e||e.state==="closed"))try{if(await e.resume(),!s||a)return;_(t.gain,Ed,.18),c==="playing"&&d&&(v&&!h&&i?(v=!1,W()):x&&f&&!m?T=!0:m||G(.3))}catch(B){s=!1,_(t.gain,0,.05),J(.05),U(.05),r(B)}}async function q(){a||(Ie(),a=!0,e&&e.state!=="closed"&&await e.close(),e=null,t=null)}return{enable:he,disable:Le,sync:te,reset:Ie,suspend:We,resume:it,dispose:q,snapshot:()=>({enabled:s,contextState:(e==null?void 0:e.state)??"uninitialized",buffersLoaded:!!i,playback:c,progress:l,thrust:u,ignitionActive:!!m,loopActive:!!x,loopStopping:f,oneShots:y.size}),get enabled(){return s}}}const Ad=new URL("/assets/resume-journey/candidate-a-v7-1-delivery-P3XNQLvb.glb",import.meta.url).href,He=r=>document.querySelector(r),ln=He("#journey-canvas"),mn=He(".journey-viewport"),Ft=matchMedia("(prefers-reduced-motion: reduce)"),Hs=He("#journey-sound"),oc=He("#journey-sound-status"),Vn=Qb(r=>{console.warn("[LP Resume Journey audio]",r),js(!1),oc.textContent="Sound unavailable; the journey continues silently."}),an=new $d,xt=new Wt(42,1,.1,2e3),At=new Bt,Zt=jb(an),ki=new Qf(!1),bu=new AbortController,wd=new op,Rd=new Oe,na=new vr(14017535,2.15),ia=new vr(10471935,1.75),cc=new fa(16741424,0,18,2);an.add(na,na.target,ia,ia.target,cc);an.background=null;an.fog=new Tc(329225,7e-4);At.name="ResumeJourneyLandingTransform";an.add(At);let ft,ii,Qt,Ws,Hn,jr,Cn=null,Ni=null,Zb=null,_u=null,Nt=!1,is=!1,ga=!1,yr=null,ci=0,Ae="idle",as=0,vu=0,yu=0,ra=0,Xs=!1,os=!1;const Mu=[];let rt=0,$t=null,Bc=0,Cd=0,cr=null,Mr=null;const je={yaw:0,pitch:0,dragging:!1,pointerId:null,lastX:0,lastY:0,lastInteraction:-1/0,moved:!1},Pd=new zt,Ld=new zt,Su=new zt,$b=new zt().setFromAxisAngle(new P(0,1,0),Ne.degToRad(28));let zc=!1,Gn=null,Mn=null,lc=3.2;function e_(){const r=mn.getBoundingClientRect(),e=He(".journey-brand").getBoundingClientRect(),t=He("#planet-trigger").getBoundingClientRect(),n=Math.max(e.bottom-r.top+24,96),i=Math.max(n+80,t.top-r.top-28),s=24,a=r.width-24,o=38,c=Math.tan(Ne.degToRad(o/2)),l=Math.min((a-s)/r.width*xt.aspect,(i-n)/r.height),u=lc/(Math.max(.15,l)*c*.78)+lc*.3;Gn={safe:{left:s,right:a,top:n,bottom:i},distance:u,fov:o,offsetX:r.width/2-(s+a)/2,offsetY:r.height/2-(n+i)/2,width:r.width,height:r.height}}function t_(){if(!ii)return null;const r=Eu(),e=[1/0,1/0],t=[-1/0,-1/0];for(const n of[r.min.x,r.max.x])for(const i of[r.min.y,r.max.y])for(const s of[r.min.z,r.max.z]){const a=new P(n,i,s).project(xt),o=(a.x+1)*mn.clientWidth/2,c=(1-a.y)*mn.clientHeight/2;e[0]=Math.min(e[0],o),e[1]=Math.min(e[1],c),t[0]=Math.max(t[0],o),t[1]=Math.max(t[1],c)}return{min:e,max:t,center:[(e[0]+t[0])/2,(e[1]+t[1])/2],safe:Gn==null?void 0:Gn.safe}}function li(){return Vs(ci,$t,rt)}function gn(){return $t===null&&Ae==="idle"}function Gc(r){return Ne.smootherstep(r,.12,.4)}function Vc(){return Ft.matches?0:Math.sin(as*Math.PI/8)}function n_(){return .28+(Ft.matches?0:.016*Vc())}function Vi(){return Ae==="playing"||Ae==="paused"}function sa(){const r=li();At.position.copy(r.position),At.quaternion.copy(r.quaternion),gn()?(At.quaternion.copy($b),Pd.setFromAxisAngle(new P(0,1,0),je.yaw),Ld.setFromAxisAngle(new P(1,0,0),je.pitch),At.quaternion.premultiply(Pd).multiply(Ld),Ft.matches||(At.rotateX(Ne.degToRad(1.25)*Vc()),At.rotateZ(Ne.degToRad(.18)*Math.sin(as*.29)))):$t===null&&Vi()&&zc&&r.progress<.4&&At.quaternion.slerpQuaternions(Su,r.quaternion,Gc(r.progress)),At.updateMatrixWorld(!0)}function Tu(){const r=li(),e=Wb(r.progress,r.position,os,$t,rt,xt.aspect);if(xt.clearViewOffset(),gn()&&Gn){const t=Gn;e.position.copy(r.position).add(new P(.72,.2,-.66).normalize().multiplyScalar(t.distance)),e.target.copy(r.position),e.fov=t.fov,xt.setViewOffset(t.width,t.height,t.offsetX,t.offsetY,t.width,t.height)}else if($t===null&&Vi()&&Mn&&r.progress<.4){const t=Gc(r.progress),n=r.position.clone().sub(Mn.ship);e.position.lerp(Mn.position.clone().add(n),1-t),e.target.lerp(Mn.target.clone().add(n),1-t),e.fov=Ne.lerp(Mn.fov,e.fov,t);const i=Mn.frame;i&&xt.setViewOffset(i.width,i.height,i.offsetX*(1-t),i.offsetY*(1-t),i.width,i.height)}xt.position.copy(e.position),xt.fov=e.fov,xt.lookAt(e.target),xt.updateProjectionMatrix(),na.position.copy(xt.position).add(new P(0,8,0)),na.target.position.copy(r.position),ia.position.copy(r.position).add(new P(-10,7,12)),ia.target.position.copy(r.position),cc.position.copy(r.position).add(new P(0,1.5,2.5)),cc.intensity=Ae==="playing"?1.15:gn()?.85:.28}function i_(){return String(rt+1).padStart(2,"0"),Ae==="landed"?`Touchdown complete · ${pn[rt].name}`:Ae==="playing"?`${li().phase.toLowerCase()} · ${Math.round(li().progress*100)}%`:Ae==="paused"?"Flight paused · continue when ready":Ft.matches?"Reduced motion · Ignite to reveal the first chapter":"Drag to inspect. Ignite to begin."}function Eu(){const r=new xn;return At.updateMatrixWorld(!0),At.traverse(e=>{if(!e.isMesh)return;let t=e;for(;t&&t!==At;){if(!t.visible||t.name.startsWith("EngineExhaust_"))return;t=t.parent}e.geometry.boundingBox||e.geometry.computeBoundingBox(),r.union(e.geometry.boundingBox.clone().applyMatrix4(e.matrixWorld))}),r}function Hc(){var i,s;const r=li(),e=ft==null?void 0:ft.getDrawingBufferSize(new Oe),t=ii?Eu():null,n=(i=Zt.landingSite)==null?void 0:i.contactY;return{ready:Nt,error:yr,contextLost:ga,prototype:"Resume Journey · Eight Worlds",playback:Ae,chapter:rt+1,from:$t===null?null:$t+1,flight:{...r,position:r.position.toArray(),quaternion:r.quaternion.toArray(),tangent:r.tangent.toArray(),visibleDuration:cn,actualDuration:Mr===null?null:(Mr-Bc)/1e3},opening:{displayQuaternion:At.quaternion.toArray(),launchBlend:Gc(r.progress),configuration:"assembled",assemblySequence:!1,brandingDecals:(Ws==null?void 0:Ws.decals)??0,platformVisible:!1,inspectionEnabled:gn(),inspectionYaw:je.yaw,inspectionPitch:je.pitch,idleAttitudeDegrees:1.25*Vc(),idlePosition:At.position.toArray(),screenBounds:t_()},effects:{...Hn==null?void 0:Hn.parallax,flameTime:(Qt==null?void 0:Qt.time)??0,flameThrust:(Qt==null?void 0:Qt.thrust)??0,...Zt.effects},landing:{gearType:"hull-contact",gearDeployment:0,bayDoors:0,heading:ac[pn[rt].id].landingHeading,anchor:ac[pn[rt].id].landingAnchor,platformTop:n,shipBounds:t?{min:t.min.toArray(),max:t.max.toArray()}:null,clearance:t?t.min.y-n:null},camera:{position:xt.position.toArray(),quaternion:xt.quaternion.toArray(),fov:xt.fov,aspect:xt.aspect},world:{id:pn[rt].id,actual3DGeometry:!0,activeDestinations:Zt.planets.length,horizonVisible:!!((s=Zt.active)!=null&&s.visible)},renderer:ft?{count:1,dpr:ft.getPixelRatio(),drawingBuffer:{width:e.x,height:e.y},calls:(Ni==null?void 0:Ni.calls)??null,triangles:(Ni==null?void 0:Ni.triangles)??null,frames:vu}:null,delivery:{asset:"candidate-a-v7-1-delivery.glb",bytes:yu,timings:_u},audio:Vn.snapshot(),lifecycle:{visible:!document.hidden,reducedMotion:Ft.matches,compact:os},errors:[...Mu]}}function xa(){const r=pn[rt],e=String(rt+1).padStart(2,"0");He(".chapter-kicker").textContent=`PLANET ${e} / ${r.name.toUpperCase()}`;const t=He(".chapter-year");t.replaceChildren(document.createTextNode(r.years[0])),r.years[1]&&t.append(document.createTextNode(`–${r.years[1]}`)),He("#chapter-title").textContent=r.title,He(".chapter-story").textContent=r.story;const n=He("#chapter-closing");n.textContent=r.closing||"",n.hidden=!r.closing;const i=He(".chapter-highlights ul");i.replaceChildren();for(const[s,a]of r.highlights){const o=document.createElement("li"),c=document.createElement("span");c.textContent=s,o.append(c,document.createTextNode(a)),i.append(o)}He("#chapter-select").value=String(rt),ln.setAttribute("aria-label",`Spacecraft journey to ${r.name}`),mn.setAttribute("aria-label",`Planet ${e}: ${r.name}`)}function di(){const r=li();Vn.sync(Ae,r.progress,r.thrust),He("#journey-status").textContent=i_();const e=Vi(),t=gn(),n=He("#begin-journey");document.body.classList.toggle("journey-opening",t),document.body.classList.toggle("journey-first-flight",$t===null&&e),document.body.style.setProperty("--flight-framing",String(Ne.smootherstep(li().progress,0,.3))),He(".chapter-panel").inert=t,He(".chapter-panel").setAttribute("aria-hidden",String(t)),n.disabled=!Nt||Ae==="playing"||Ae==="landed"&&rt===7,n.textContent=Ae==="landed"?rt===7?"Journey complete":"Continue journey":Ae==="paused"?"Continue flight":Ft.matches?"Reveal chapter":Ae==="playing"?"In flight":"Ignite";const i=He("#planet-trigger");i.disabled=!Nt||Ae==="playing"||Ae==="landed",i.hidden=!t,i.textContent="IGNITE",He("#reset-journey").disabled=!Nt||Ae==="idle",He("#previous-chapter").disabled=!Nt||e||rt===0,He("#next-chapter").disabled=!Nt||e||rt===7,He("#chapter-select").disabled=!Nt||e;for(const s of document.querySelectorAll(".planet-waypoint")){const a=Number(s.dataset.index);s.disabled=!Nt||e||Ae==="landed"&&a===rt,s.setAttribute("aria-current",a===rt?"step":"false")}document.body.dataset.journeyState=Ae,document.body.classList.toggle("chapter-revealed",Ae==="landed"||!!yr),document.body.classList.toggle("is-flight",Ae==="playing");for(const s of[He(".chapter-panel header"),He(".chapter-highlights")]){const a=Ae!=="landed"&&!yr;s.inert=a,s.setAttribute("aria-hidden",String(a))}(Ft.matches||performance.now()-Cd>160)&&(Cd=performance.now(),He("#journey-telemetry").textContent=JSON.stringify(Hc()))}function aa(r,e=!1){if(!Qt)return;const t=li(),n=gn()||Ae==="playing",i=gn()?n_():Ae==="playing"?$t===null&&t.progress<.14?Ne.lerp(.28,1,Ne.smootherstep(t.progress,0,.14)):t.progress<.62?.72:.72*(1-Ne.smootherstep(t.progress,.62,1)):0;Qt.setVisible(n),Qt.setThrust(i,e),Qt.update(r,!Ft.matches&&n)}function Xn(){!Nt||!ft||is||ga||document.hidden||Cn!==null||(ki.running||ki.start(),Cn=requestAnimationFrame(r_))}function r_(){if(Cn=null,!Nt||is||ga||document.hidden||!ft){ki.stop();return}const r=Math.min(ki.getDelta(),.05),e=Ae;as+=r,gn()&&!Ft.matches&&!je.dragging&&performance.now()-je.lastInteraction>2600&&(je.yaw+=r*.075),Ae==="playing"&&!Ft.matches&&(ci=Math.min(cn,(performance.now()-Bc)/1e3),ci===cn&&(Ae="landed",Mr=performance.now()));const t=li();sa(),Tu(),Hn==null||Hn.update(xt,t.position,r,Ae==="playing",!Ft.matches,ft.getPixelRatio()),Zt.update(r,!Ft.matches,t.progress,$t,rt,Ae),aa(r),ft.info.reset(),ft.render(an,xt),Ni={...ft.info.render},vu++,di(),!Ft.matches||e!==Ae?Xn():ki.stop()}function Ti(){if(!(!Nt||yr||Ae==="playing")){if(Ae==="landed"){rt<7&&jn(rt+1);return}gn()&&(Su.copy(At.quaternion),Mn={position:xt.position.clone(),target:xt.position.clone().add(xt.getWorldDirection(new P).multiplyScalar((Gn==null?void 0:Gn.distance)||12)),fov:xt.fov,ship:At.position.clone(),frame:{...Gn}},zc=!0,je.dragging=!1,je.pointerId=null,ln.classList.remove("is-inspecting")),Ft.matches?(ci=cn,Ae="landed"):(Ae="playing",Mr=null,Bc=performance.now()-ci*1e3),Vn.enabled&&Vn.resume(),os&&!Ft.matches&&mn.scrollIntoView({block:"start",behavior:"instant"}),di(),Xn()}}function jn(r){if(!(!Nt||Vi()||r<0||r>=pn.length)){if(r===rt){Ti();return}$t=Ae==="landed"?rt:null,rt=r,ci=0,Mr=null,Ae="idle",as=0,Zt.activate(pn[r].id),xa(),Ti()}}function Wc(){Nt&&(Vn.reset(),rt=0,$t=null,ci=0,Mr=null,Ae="idle",as=0,ra=0,Xs=!1,je.yaw=0,je.pitch=0,je.dragging=!1,je.pointerId=null,je.lastInteraction=-1/0,zc=!1,Zt.activate(pn[0].id),xa(),aa(0,!0),sa(),di(),oa(),Xn())}function oa(){if(!ft||is)return;const{width:r,height:e}=mn.getBoundingClientRect();if(os=matchMedia("(max-width: 820px)").matches,ft.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),ft.setSize(Math.max(1,r),Math.max(1,e),!1),xt.aspect=Math.max(1,r)/Math.max(1,e),gn()&&e_(),Mn!=null&&Mn.frame&&Vi()){const t=Mn.frame;t.offsetX*=r/t.width,t.offsetY*=e/t.height,t.width=r,t.height=e}Tu(),Xn()}function Au(r){yr=r instanceof Error?r.message:String(r),Mu.push(yr),$t=0,rt=0,ci=cn,Ae="landed",xa(),He("#journey-load").hidden=!1,He("#journey-load").classList.add("error"),He("#load-title").textContent="The 3D journey is unavailable",He("#load-detail").textContent="The 3D journey could not start. You can still read the Origins chapter below.",di(),console.error("[LP Resume Journey Phase A2]",r)}function s_(r){const e=new Set,t=new Set,n=new Set;r==null||r.traverse(i=>{if(i.geometry&&e.add(i.geometry),i.material)for(const s of Array.isArray(i.material)?i.material:[i.material])t.add(s)}),t.forEach(i=>{Object.values(i).forEach(s=>{s!=null&&s.isTexture&&n.add(s)}),i.dispose()}),e.forEach(i=>i.dispose()),n.forEach(i=>i.dispose())}function or(r){He("#load-detail").textContent=r}async function a_(){try{const r=performance.now();if(new URLSearchParams(location.search).has("force-no-webgl"))throw new Error("WebGL is unavailable in this test environment.");ft=new Yx({canvas:ln,alpha:!0,antialias:!0,powerPreference:"high-performance"}),ft.outputColorSpace=Tt,ft.toneMapping=Ud,ft.toneMappingExposure=1.08,ft.info.autoReset=!1;const e=new $o(ft),t=new Lb;jr=e.fromScene(t,.04),an.environment=jr.texture,an.environmentIntensity=.42,t.dispose(),e.dispose(),an.add(new Hf(6845067,1575686,.34));const n=new vr(16753498,4.8);n.position.set(28,35,-45);const i=new vr(6387621,1.1);i.position.set(-35,18,-8),an.add(n,i),or("Preparing your journey through eight planets."),Hn=await Kb(an,ft,mn),or("Preparing your journey through eight planets."),await Zt.load(ft),Zt.activate("origins"),Zt.update(0,!1,0,null,0,"idle"),oa(),or("Preparing your journey through eight planets.");const s=performance.now(),a=await fetch(Ad,{signal:bu.signal,cache:"no-cache"});if(!a.ok)throw new Error(`Spacecraft request returned HTTP ${a.status}.`);const o=await a.arrayBuffer(),c=performance.now();if(yu=o.byteLength,o.byteLength<12||new DataView(o).getUint32(0,!0)!==1179937895)throw new Error("The approved spacecraft is not a valid binary GLB.");or("Preparing your journey through eight planets.");const l=performance.now(),u=new Kx().setMeshoptDecoder(Pb),d=await u.parseAsync(o,new URL(".",Ad).href),h=performance.now();d.scene.updateMatrixWorld(!0);const p=Nb(d.scene);ii=p.root;let m=0,x=0;const g=new Set;ii.traverse(A=>{var y;if(A.isMesh){x++,m+=(((y=A.geometry.index)==null?void 0:y.count)??A.geometry.attributes.position.count)/3;for(const w of Array.isArray(A.material)?A.material:[A.material])g.add(w)}}),Zb={root:ii.name,meshes:x,triangles:m,materials:g.size,approved:"Candidate A V7.1"},At.add(ii),At.position.set(0,0,0),At.quaternion.identity(),At.updateMatrixWorld(!0),ii.updateMatrixWorld(!0);const f=new xn().setFromObject(ii),T=f.min.y;lc=f.getBoundingSphere(new In).radius,Vb(Zt.landingSite.contactY-T+.012),or("Preparing your journey through eight planets."),Ws={decals:ii.getObjectByName("LP_HULL_INTEGRATED_LIVERY_PLATE")?1:0},Qt=Ib(p.canonical,p.nozzles),aa(0,!0),sa(),or("Preparing your journey through eight planets."),Zt.update(0,!1,0,null,rt,"idle"),sa(),aa(0,!0);const v=performance.now();ft.render(an,xt);const b=performance.now();_u={downloadMs:c-s,parseMs:h-l,textureInitializationMs:b-v,sceneReadyMs:b-r},Nt=!0,xa(),He("#journey-load").hidden=!0,di(),oa(),Xn(),dispatchEvent(new CustomEvent("lp-resume-phase-a2-ready",{detail:Hc()}))}catch(r){r.name!=="AbortError"&&Au(r)}}for(const[r,e]of pn.entries()){const t=document.createElement("option");t.value=String(r),t.textContent=`${String(r+1).padStart(2,"0")} — ${e.name}`,He("#chapter-select").append(t);const n=document.createElement("button");n.type="button",n.className="planet-waypoint",n.dataset.index=String(r),n.textContent=String(r+1).padStart(2,"0"),n.title=e.name,n.setAttribute("aria-label",`Planet ${r+1}: ${e.name}`),n.addEventListener("click",()=>jn(r)),He("#planet-waypoints").append(n)}He("#begin-journey").addEventListener("click",Ti);He("#planet-trigger").addEventListener("click",Ti);He("#reset-journey").addEventListener("click",Wc);He("#previous-chapter").addEventListener("click",()=>jn(rt-1));He("#next-chapter").addEventListener("click",()=>jn(rt+1));He("#chapter-select").addEventListener("change",r=>jn(Number(r.target.value)));ln.addEventListener("click",r=>{if(je.moved){je.moved=!1;return}if(!Nt||Vi())return;const e=ln.getBoundingClientRect();Rd.set((r.clientX-e.left)/e.width*2-1,-((r.clientY-e.top)/e.height)*2+1),wd.setFromCamera(Rd,xt);const t=wd.intersectObjects(Zt.planets.filter(n=>n.parent.visible))[0];t&&jn(t.object.userData.planetIndex)});ln.addEventListener("pointerdown",r=>{!Nt||!gn()||r.button!==0||(je.dragging=!0,je.pointerId=r.pointerId,je.lastX=r.clientX,je.lastY=r.clientY,je.moved=!1,je.lastInteraction=performance.now(),cr=null,ln.setPointerCapture(r.pointerId),ln.classList.add("is-inspecting"))});ln.addEventListener("pointermove",r=>{if(!je.dragging||r.pointerId!==je.pointerId||!gn())return;const e=r.clientX-je.lastX,t=r.clientY-je.lastY;je.lastX=r.clientX,je.lastY=r.clientY,Math.abs(e)+Math.abs(t)>1&&(je.moved=!0),je.yaw+=e*.007,je.pitch=Ne.clamp(je.pitch+t*.0035,-.32,.32),je.lastInteraction=performance.now(),Xn()});function wu(r){!je.dragging||r.pointerId!==je.pointerId||(je.dragging=!1,je.pointerId=null,je.lastInteraction=performance.now(),ln.classList.remove("is-inspecting"))}ln.addEventListener("pointerup",wu);ln.addEventListener("pointercancel",wu);function Ru(r,e=1){return Ae==="idle"&&e>0&&mn.contains(r)||Ae==="landed"&&(os?e>0?window.scrollY+innerHeight>=document.documentElement.scrollHeight-24:window.scrollY<=0&&mn.contains(r):mn.contains(r))}function Cu(r){Xs||!Nt||(Xs=!0,Ae==="idle"?Ti():Ae==="landed"&&jn(rt+r),setTimeout(()=>{Xs=!1,ra=0},800))}document.addEventListener("wheel",r=>{if(Ae==="playing"){mn.contains(r.target)&&r.preventDefault();return}const e=Math.sign(r.deltaY);!e||!Ru(r.target,e)||r.target.closest("select,button")||(ra+=Math.abs(r.deltaY),ra>=90&&(r.preventDefault(),Cu(e)))},{passive:!1});document.addEventListener("touchstart",r=>{cr={y:r.touches[0].clientY,target:r.target}},{passive:!0});document.addEventListener("touchmove",r=>{if(Ae==="playing")r.preventDefault();else if(cr){const e=cr.y-r.touches[0].clientY,t=Math.sign(e);Math.abs(e)>65&&Ru(cr.target,t)&&(r.preventDefault(),cr=null,Cu(t))}},{passive:!1});document.addEventListener("keydown",r=>{r.target.closest("button,select,a,dialog,input,textarea")||((r.code==="Space"||r.key==="Enter")&&(r.preventDefault(),Ti()),!(Ae==="idle"&&$t===null)&&(r.key==="ArrowRight"&&(r.preventDefault(),jn(rt+1)),r.key==="ArrowLeft"&&(r.preventDefault(),jn(rt-1)),r.key.toLowerCase()==="r"&&Wc()))});document.addEventListener("visibilitychange",()=>{document.hidden?(Vn.suspend(),Cn!==null&&cancelAnimationFrame(Cn),Cn=null,ki.stop(),Ae==="playing"&&(Ae="paused",di())):(di(),Xn())});Ft.addEventListener("change",()=>{Ft.matches&&Vi()&&(ci=cn,Ae="landed",di()),Xn()});ln.addEventListener("webglcontextlost",r=>{r.preventDefault(),ga=!0,Au(new Error("WebGL context was lost. Reload to restore the journey."))});const Pu=new ResizeObserver(oa);Pu.observe(mn);window.addEventListener("pagehide",r=>{r.persisted||is||(is=!0,bu.abort(),Cn!==null&&cancelAnimationFrame(Cn),Pu.disconnect(),Vn.dispose(),Qt==null||Qt.dispose(),Hn==null||Hn.dispose(),Zt.dispose(),s_(an),jr==null||jr.dispose(),ft==null||ft.dispose())});Object.defineProperty(window,"__LP_RESUME_PHASE_A2__",{value:Object.freeze({snapshot:Hc,begin:Ti,reset:Wc,navigate:jn}),writable:!1});a_();const Pn=He("#site-menu"),o_=Pn.querySelector(".lp-menu-panel"),Lu=Pn.querySelector(".lp-menu-close"),ca=He("#open-site-menu");let la=!1,Du=null,Dd=0;function js(r){Hs.textContent=r?"Sound on":"Sound off",Hs.setAttribute("aria-pressed",String(r)),Hs.setAttribute("aria-label",r?"Turn sound off":"Turn sound on")}Hs.addEventListener("click",async()=>{const r=++Dd;if(oc.textContent="",Vn.enabled){Vn.disable(),js(!1);return}js(!0);const e=await Vn.enable();r===Dd&&(e||(js(!1),oc.textContent="Sound unavailable; the journey continues silently."))});function ba(r){r&&(r.preventDefault(),r.stopPropagation()),Pn.classList.remove("is-open"),Pn.setAttribute("aria-hidden","true"),document.body.classList.remove("lp-menu-lock"),document.documentElement.classList.remove("lp-menu-open"),ca.setAttribute("aria-expanded","false"),la&&Ae==="paused"?Ti():Xn(),la=!1,(Du??ca).focus({preventScroll:!0})}ca.addEventListener("click",r=>{r.preventDefault(),Du=document.activeElement,la=Ae==="playing",la&&(Ae="paused"),Cn!==null&&cancelAnimationFrame(Cn),Cn=null,ki.stop(),Pn.classList.add("is-open"),Pn.setAttribute("aria-hidden","false"),document.body.classList.add("lp-menu-lock"),document.documentElement.classList.add("lp-menu-open"),ca.setAttribute("aria-expanded","true"),di(),Lu.focus({preventScroll:!0})});Lu.addEventListener("click",ba);Pn.querySelector(".lp-menu-backdrop").addEventListener("click",ba);Pn.querySelectorAll("a").forEach(r=>r.addEventListener("click",()=>ba()));document.addEventListener("keydown",r=>{if(!Pn.classList.contains("is-open"))return;if(r.key==="Escape"){ba(r);return}if(r.key!=="Tab")return;const e=[...o_.querySelectorAll('a[href],button:not(:disabled),[tabindex]:not([tabindex="-1"])')].filter(i=>i.getClientRects().length),t=e[0],n=e[e.length-1];r.shiftKey&&(document.activeElement===t||!Pn.contains(document.activeElement))?(r.preventDefault(),n==null||n.focus()):!r.shiftKey&&(document.activeElement===n||!Pn.contains(document.activeElement))&&(r.preventDefault(),t==null||t.focus())});
