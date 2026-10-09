import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PORTFOLIO_CATEGORIES } from '../assets/js/lp-portfolio-data.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const expected = {
    fintech: ['ewallet', 'zappay', 'unipay', 'smartfin', 'coverride'],
    enterprise: ['norton', 'homenest', 'zmeet', 'eater'],
    saas: ['fluxcrm', 'taskee', 'staffee'],
    ecommerce: ['amazon', 'eddiebauer', 'lider', 'slurrpfarm', 'gocart', 'dailymart', 'quickcart'],
    healthcare: ['mydoc', 'dronline']
};
const errors = [];
const slugs = new Set();
for (const [key, expectedSlugs] of Object.entries(expected)) {
    const projects = PORTFOLIO_CATEGORIES[key] || [];
    if (JSON.stringify(projects.map(project => project.slug)) !== JSON.stringify(expectedSlugs)) errors.push(`${key}: taxonomy/order mismatch`);
    for (const project of projects) {
        if (slugs.has(project.slug)) errors.push(`${project.slug}: duplicate project`);
        slugs.add(project.slug);
        for (const resource of [project.url, decodeURIComponent(project.image), `assets/images/hero-cinematic/case-${project.slug}.webp`]) {
            if (!fs.existsSync(path.join(root, resource))) errors.push(`${project.slug}: missing ${resource}`);
        }
        if (project.url !== `${project.slug}.html`) errors.push(`${project.slug}: unexpected route`);
        if (!project.alt || !project.outcome) errors.push(`${project.slug}: missing accessible image text or outcome`);
    }
}
for (const file of ['index.html', 'Casestudies.html']) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    if (!html.includes('assets/css/lp-selected-work.css') || !html.includes('assets/js/lp-selected-work.js')) errors.push(`${file}: shared system missing`);
    const fallback = html.match(/<div class="selected-work-grid"[^>]*>([\s\S]*?)\n            <\/div>/)?.[1] || '';
    for (const project of PORTFOLIO_CATEGORIES.fintech) {
        if (!fallback.includes(`href="${project.url}"`) || !fallback.includes(project.image) || !fallback.includes(project.metric)) errors.push(`${file}: ${project.slug} fallback drift`);
    }
}
console.log(JSON.stringify({ valid: !errors.length, projects: slugs.size, counts: Object.fromEntries(Object.entries(PORTFOLIO_CATEGORIES).map(([key, projects]) => [key, projects.length])), errors }, null, 2));
if (errors.length) process.exitCode = 1;
