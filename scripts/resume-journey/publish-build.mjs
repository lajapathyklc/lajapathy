import {cp} from 'node:fs/promises';
await cp(new URL('./dist/resume-journey.html',import.meta.url),new URL('../../resume-journey.html',import.meta.url));
await cp(new URL('./dist/assets/resume-journey/',import.meta.url),new URL('../../assets/resume-journey/',import.meta.url),{recursive:true});
