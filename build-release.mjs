// Package the reviewed static release; generated Journey assets are already built.
// This performs no deployment, network request, dependency install or deletion.
import {readFile, mkdir, copyFile, readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const manifest=JSON.parse(await readFile(path.join(root,'release-files.json'),'utf8'));
const output=path.join(root,'output/stage7-release');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const allowed=new Set(manifest.static.map(file=>file.path));
for(const file of [...manifest.static,...manifest.functions]){
 if(path.isAbsolute(file.path)||file.path.split('/').includes('..')||file.path.startsWith('.')||file.path.startsWith('docs/')||file.path.startsWith('scripts/'))throw new Error(`Invalid release path: ${file.path}`);
 const bytes=await readFile(path.join(root,file.path));
 if(hash(bytes)!==file.sha256)throw new Error(`Release manifest must be reviewed and updated for changed file: ${file.path}`);
}
async function inspect(directory,prefix=''){
 let entries;try{entries=await readdir(directory,{withFileTypes:true})}catch(error){if(error.code==='ENOENT')return;throw error}
 for(const entry of entries){const name=prefix+entry.name;if(entry.isDirectory())await inspect(path.join(directory,entry.name),name+'/');else if(!allowed.has(name))throw new Error(`Unexpected existing output file (left untouched): ${name}`)}
}
await inspect(output);
for(const file of manifest.static){
 const destination=path.join(output,file.path);await mkdir(path.dirname(destination),{recursive:true});await copyFile(path.join(root,file.path),destination);
}
console.log(`Packaged ${manifest.static.length} reviewed static files (${manifest.static.reduce((sum,file)=>sum+file.bytes,0)} bytes).`);
console.log(`Verified ${manifest.functions.length} server source file(s), retained for the configured platform function builder.`);
console.log('Output: output/stage7-release. No deployment performed.');
