import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {CASE_STUDY_WORLDS,CASE_STUDY_SLUGS,validateCaseStudyWorlds} from '../assets/js/lp-case-study-worlds.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const found=[];const errors=[];
for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){
 const html=fs.readFileSync(path.join(root,file),'utf8');
 const match=html.match(/data-case-study="([^"]+)"/);if(!match){if(/<main[^>]+class="(?:ewallet-case-study|project-case-study)(?:\s|")/.test(html))errors.push(`${file}: case-study page lacks initializer ID`);continue;}
 const slug=match[1];found.push(slug);
 if(!CASE_STUDY_WORLDS[slug])errors.push(`${file}: unknown initializer slug`);
 if(!html.includes('class="ewallet-hero case-study-cinematic-hero"')&&!html.includes('case-study-cinematic-hero'))errors.push(`${file}: missing hero class`);
 if((html.match(/src="assets\/js\/lp-case-study-cinematic-hero.js/g)||[]).length!==1)errors.push(`${file}: expected one shared initializer`);
 if(!html.includes('assets/css/lp-case-study-cinematic-hero.css'))errors.push(`${file}: missing loading stylesheet`);
 if(/ewallet%20background|ewallet background\.png|ewallet-hero-world-polish/.test(html))errors.push(`${file}: obsolete environment`);
}
for(const slug of CASE_STUDY_SLUGS)if(!found.includes(slug))errors.push(`${slug}: missing production page`);
const result=validateCaseStudyWorlds(found);errors.push(...result.errors);
console.log(JSON.stringify({valid:!errors.length,pages:found.length,errors},null,2));
if(errors.length)process.exitCode=1;
