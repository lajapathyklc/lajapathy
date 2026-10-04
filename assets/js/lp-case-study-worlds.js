// One atlas and warm LP star; every formation is deterministic in rotating local UV space.
export const GEOLOGY_PROFILES={
 FINTECH_SMOOTH:{terrainScale:.94,craterDensity:.24,ridgeStrength:.38,relief:2.42,normalStrength:.90,roughness:.91,dustAmount:.10,cloudDensity:.14},
 ENTERPRISE_STRUCTURED:{terrainScale:1.12,craterDensity:.12,ridgeStrength:.65,relief:2.5,normalStrength:.88,roughness:.94,dustAmount:.08,cloudDensity:.08},
 COMMERCE_DUSTY:{terrainScale:.82,craterDensity:.28,ridgeStrength:.35,relief:2.25,normalStrength:.82,roughness:.92,dustAmount:.19,cloudDensity:.16},
 HEALTHCARE_CALM:{terrainScale:.74,craterDensity:.05,ridgeStrength:.18,relief:1.65,normalStrength:.63,roughness:.87,dustAmount:.05,cloudDensity:.08},
 TECH_SECURITY_FRACTURED:{terrainScale:1.28,craterDensity:.32,ridgeStrength:.88,relief:2.8,normalStrength:.96,roughness:.95,dustAmount:.06,cloudDensity:.05},
 OUTDOOR_RUGGED:{terrainScale:.78,craterDensity:.36,ridgeStrength:.92,relief:3.1,normalStrength:.98,roughness:.97,dustAmount:.22,cloudDensity:.18},
 CONSUMER_ORGANIC:{terrainScale:.88,craterDensity:.15,ridgeStrength:.27,relief:2.05,normalStrength:.76,roughness:.89,dustAmount:.12,cloudDensity:.15}
};
export const ATMOSPHERE_PROFILES={
 THIN_CLEAN:{atmosphereDensity:.34,atmosphereThickness:1.010,outerAtmosphereIntensity:.028},
 STANDARD_COOL:{atmosphereDensity:.515,atmosphereThickness:1.014,outerAtmosphereIntensity:.045},
 VIOLET_SOFT:{atmosphereDensity:.46,atmosphereThickness:1.018,outerAtmosphereIntensity:.042},
 EMERALD_THIN:{atmosphereDensity:.38,atmosphereThickness:1.012,outerAtmosphereIntensity:.032},
 DUSTY_WARM:{atmosphereDensity:.49,atmosphereThickness:1.021,outerAtmosphereIntensity:.048},
 DENSE_HAZE:{atmosphereDensity:.56,atmosphereThickness:1.024,outerAtmosphereIntensity:.055}
};
export function seedHash(value){let h=2166136261;for(const c of value)h=Math.imul(h^c.charCodeAt(0),16777619);return h>>>0;}
const defaults={baseColor:'#10151c',planetBaseColor:'#10151c',sunColor:'#ffe4b3',sunPosition:[-.20,.82],planetPosition:[.950,.43],planetScale:.4042,meteorIntensity:.65,heroVisualMode:'product',safeArea:'.ewallet-kicker,.ewallet-hero h1,.ewallet-hero-lede,.ewallet-hero-meta span,.ewallet-hero-illustration',craterScale:.83,ridgeDensity:.70};
const rows=[["ewallet", "FINTECH_SMOOTH", "STANDARD_COOL", "#183a60", "#314961", "#4bc5ff", 100, -4], ["zappay", "FINTECH_SMOOTH", "THIN_CLEAN", "#153f49", "#214859", "#40d4d9", 95, 4], ["unipay", "FINTECH_SMOOTH", "VIOLET_SOFT", "#302448", "#343357", "#9886db", 100, -6], ["smartfin", "ENTERPRISE_STRUCTURED", "THIN_CLEAN", "#202f46", "#384753", "#739fcd", 105, 2], ["coverride", "ENTERPRISE_STRUCTURED", "EMERALD_THIN", "#293529", "#384635", "#829d68", 100, -5], ["norton", "TECH_SECURITY_FRACTURED", "THIN_CLEAN", "#152b3b", "#1c4653", "#43b8df", 95, 6], ["zmeet", "CONSUMER_ORGANIC", "VIOLET_SOFT", "#29223f", "#302e50", "#967acb", 100, -3], ["fluxcrm", "ENTERPRISE_STRUCTURED", "THIN_CLEAN", "#25343f", "#34515a", "#7fa5b9", 105, 3], ["taskee", "ENTERPRISE_STRUCTURED", "EMERALD_THIN", "#183a30", "#22463e", "#65ab91", 95, -4], ["staffee", "ENTERPRISE_STRUCTURED", "DENSE_HAZE", "#403323", "#51452c", "#ba9c6b", 105, 5], ["amazon", "COMMERCE_DUSTY", "DUSTY_WARM", "#382a20", "#513828", "#c78b51", 95, -4], ["eddiebauer", "OUTDOOR_RUGGED", "DUSTY_WARM", "#352f27", "#4a392d", "#a78d69", 110, 7], ["lider", "COMMERCE_DUSTY", "DUSTY_WARM", "#3b2228", "#51342b", "#bb7861", 100, -5], ["slurrpfarm", "CONSUMER_ORGANIC", "DENSE_HAZE", "#372439", "#4c3346", "#b38aa6", 100, 4], ["eater", "CONSUMER_ORGANIC", "DUSTY_WARM", "#3c2521", "#513129", "#c27d55", 95, -3], ["gocart", "COMMERCE_DUSTY", "EMERALD_THIN", "#1e3730", "#264b43", "#61a78d", 95, 3], ["dailymart", "COMMERCE_DUSTY", "DUSTY_WARM", "#383024", "#51432f", "#b6a070", 100, -5], ["quickcart", "CONSUMER_ORGANIC", "THIN_CLEAN", "#1b363d", "#23515a", "#6cb8c1", 90, 5], ["mydoc", "HEALTHCARE_CALM", "THIN_CLEAN", "#1c323b", "#2b4151", "#76b9c7", 105, -2], ["dronline", "HEALTHCARE_CALM", "STANDARD_COOL", "#1d2d42", "#244351", "#73b7dc", 100, 3], ["homenest", "CONSUMER_ORGANIC", "EMERALD_THIN", "#26362e", "#314d43", "#93b29e", 100, -3]];
export const CASE_STUDY_WORLDS=Object.fromEntries(rows.map(([id,geologyProfile,atmosphereProfile,mineralPrimary,mineralSecondary,atmosphereColor,rotationSeconds,axialTilt])=>{
 const worldSeed=seedHash('lp-world-v1:'+id), variation=(worldSeed%997)/997;
 return [id,{...defaults,...GEOLOGY_PROFILES[geologyProfile],...ATMOSPHERE_PROFILES[atmosphereProfile],id,worldSeed,geologyProfile,atmosphereProfile,mineralPrimary,mineralSecondary,geologyColor:mineralPrimary,planetSecondaryColor:mineralSecondary,atmosphereColor,rimColor:atmosphereColor,nebulaTint:mineralPrimary,nebulaColor:mineralPrimary,cloudColor:mineralPrimary,rotationSeconds,axialTilt,cloudSpeed:1.015+variation*.014,hazeSpeed:1.025+variation*.02}];
}));
// E-Wallet retains its approved mineral sampling, scale, tilt and atmosphere.
Object.assign(CASE_STUDY_WORLDS.ewallet,{cloudSpeed:1.015,hazeSpeed:1.025});
for(const [id,parent] of [['ewallet_leadership','ewallet'],['eddiebauer_leadership','eddiebauer']])CASE_STUDY_WORLDS[id]={...CASE_STUDY_WORLDS[parent],id,worldSeed:seedHash('lp-world-v1:'+id),heroVisualMode:'editorial',safeArea:'.project-case-study-kicker,.project-case-study-title,.project-case-study-lede,.project-case-study-tags span'};
export const CASE_STUDY_SLUGS=Object.freeze([...rows.map(r=>r[0]),'ewallet_leadership','eddiebauer_leadership']);
export function validateCaseStudyWorlds(slugs=CASE_STUDY_SLUGS){
 const errors=[];for(const slug of slugs){const w=CASE_STUDY_WORLDS[slug];if(!w){errors.push(slug+': missing config');continue;}
 if(!Number.isInteger(w.worldSeed))errors.push(slug+': invalid seed');
 if(!GEOLOGY_PROFILES[w.geologyProfile]||!ATMOSPHERE_PROFILES[w.atmosphereProfile])errors.push(slug+': invalid profile');
 if(w.rotationSeconds<85||w.rotationSeconds>115)errors.push(slug+': invalid rotation');
 for(const key of ['baseColor','mineralPrimary','mineralSecondary','atmosphereColor','nebulaTint'])if(!/^#[0-9a-f]{6}$/i.test(w[key]))errors.push(slug+': invalid '+key);
 }return {valid:!errors.length,count:slugs.length,errors};
}
// Artwork stays in each page DOM; this inventory validates its identity.
CASE_STUDY_WORLDS.amazon.heroArtwork='assets/images/bg/amazon%20hero.png';
CASE_STUDY_WORLDS.coverride.heroArtwork='assets/images/bg/coverride%20hero.png';
CASE_STUDY_WORLDS.dailymart.heroArtwork='assets/images/bg/dailymart%20hero.png';
CASE_STUDY_WORLDS.dronline.heroArtwork='assets/images/bg/dronline%20hero.png';
CASE_STUDY_WORLDS.eater.heroArtwork='assets/images/bg/eater%20hero.png';
CASE_STUDY_WORLDS.eddiebauer.heroArtwork='assets/images/bg/eddiebauer%20hero.png';
CASE_STUDY_WORLDS.ewallet.heroArtwork='assets/images/bg/ewallet%20hero.png';
CASE_STUDY_WORLDS.fluxcrm.heroArtwork='assets/images/bg/fluxcrm%20hero.png';
CASE_STUDY_WORLDS.gocart.heroArtwork='assets/images/bg/gocart%20hero.png';
CASE_STUDY_WORLDS.homenest.heroArtwork='assets/images/bg/homenest%20hero.png';
CASE_STUDY_WORLDS.lider.heroArtwork='assets/images/bg/lider%20hero.png';
CASE_STUDY_WORLDS.mydoc.heroArtwork='assets/images/bg/mydoc%20hero.png';
CASE_STUDY_WORLDS.norton.heroArtwork='assets/images/bg/norton%20hero.png';
CASE_STUDY_WORLDS.quickcart.heroArtwork='assets/images/bg/quickcart%20herp.png';
CASE_STUDY_WORLDS.slurrpfarm.heroArtwork='assets/images/bg/slurrpfarm%20hero.png';
CASE_STUDY_WORLDS.smartfin.heroArtwork='assets/images/bg/smartfin.png';
CASE_STUDY_WORLDS.staffee.heroArtwork='assets/images/bg/staffee%20hero.png';
CASE_STUDY_WORLDS.taskee.heroArtwork='assets/images/bg/taskee%20hero.png';
CASE_STUDY_WORLDS.unipay.heroArtwork='assets/images/bg/unipay%20hero.png';
CASE_STUDY_WORLDS.zappay.heroArtwork='assets/images/bg/zappay%20hero.png';
CASE_STUDY_WORLDS.zmeet.heroArtwork='assets/images/bg/zmeet%20hero.png';
