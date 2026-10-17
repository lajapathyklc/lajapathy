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
 if(w.rotationSeconds<85||w.rotationSeconds>360)errors.push(slug+': invalid rotation');
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

// Stage 4: structural identities, not hue variants. Frequencies use a continuous
// spherical field; cloud-free worlds deliberately retain no weather shells.
const identities = {
 ewallet:    ['copper archipelagos',.88, .36, .28, .10, .12,1.07,.94,242, .0030],
 zappay:     ['eroded nickel basins',1.28,.16, .55, .26, .04,1.12,.91,218, .0020],
 unipay:     ['layered violet shale',.72,.72, .22, .06, .19,1.04,.96,268, .0025],
 smartfin:   ['graphite escarpments',1.65,.25,.78,.12,0,1.,1.,284, .0040],
 coverride:  ['olivine fault valleys',1.14,.45,.87,.18,.07,1.09,.93,256,.0035],
 norton:     ['airless fractured basalt',1.85,.08,.96,.48,0,1.,1.,306,.0045],
 homenest:   ['weathered verdant highlands',.66,.21,.42,.05,.24,1.13,.91,292,.0024],
 zmeet:      ['lavender sediment fans',.94,.83,.31,.08,.16,1.16,.95,228,.0022],
 eater:      ['ochre volcanic plains',1.32,.13,.68,.16,.10,1.08,.92,246,.0035],
 fluxcrm:    ['stratified blue slate',.81,.91,.55,.07,.08,1.06,.96,278,.0030],
 taskee:     ['jade folded plateaus',1.06,.63,.74,.11,.05,1.11,.94,254,.0034],
 staffee:    ['sandstone atmospheric bands',.58,.95,.25,.02,.30,1.17,.91,318,.0018],
 amazon:     ['copper dune seas',.69,.38,.19,.14,.14,1.10,.95,238,.0021],
 eddiebauer: ['rugged umber ranges',1.43,.28,.93,.32,.17,1.08,.92,332,.0048],
 lider:      ['iron impact highlands',1.19,.12,.56,.68,.02,1.14,.96,266,.0040],
 slurrpfarm: ['rose clay deltas',.54,.52,.34,.03,.28,1.19,.90,294,.0020],
 gocart:     ['serpentine mineral ridges',1.53,.58,.81,.19,.06,1.12,.95,224,.0036],
 dailymart:  ['golden eroded badlands',.97,.76,.46,.22,.20,1.14,.93,310,.0028],
 quickcart:  ['blue-green rift fields',1.73,.32,.88,.10,.11,1.18,.91,212,.0038],
 mydoc:      ['pale limestone shelves',.61,.70,.17,.01,.18,1.09,.96,340,.0015],
 dronline:   ['chalk glacial basins',.78,.18,.29,.09,.26,1.15,.92,322,.0019]
};
for (const [id,[identity,formationScale,strata,ridge,craters,clouds,cloudSpeed,hazeSpeed,rotationSeconds,displacement]] of Object.entries(identities)) {
 Object.assign(CASE_STUDY_WORLDS[id],{cinematicV2:true,identity,formationScale,strata,ridge,craterDensity:craters,cloudDensity:clouds,cloudSpeed,hazeSpeed,rotationSeconds,displacement,
  sunPosition:[.62,.74],sunDepth:.46,meteorIntensity:.36+(seedHash(id)%7)*.025,meteorCadence:3.8+(seedHash(id)%11)*.15,
  starDensity:42+seedHash(id)%39,weatherAltitude:clouds>.2?1.007:1.004,atmosphereDensity:clouds===0?.035:clouds>.2?.40:.23,
  atmosphereThickness:clouds===0?1.002:1.006,outerAtmosphereIntensity:clouds===0?0:.012,normalStrength:clouds>.2?.62:.76});
}

const minerals={ewallet:['#675044','#958475'],zappay:['#526567','#9aada7'],unipay:['#5b5366','#a495ab'],smartfin:['#41454b','#92958b'],coverride:['#535d43','#a19572'],norton:['#343b40','#6c7478'],homenest:['#5e6850','#b0a58a'],zmeet:['#6b5c70','#b2a3b4'],eater:['#795542','#b59164'],fluxcrm:['#52616a','#9b9c8b'],taskee:['#4e665d','#91a591'],staffee:['#806c50','#b8a381'],amazon:['#806046','#b5a07c'],eddiebauer:['#5e584b','#9c9076'],lider:['#77524c','#b4917a'],slurrpfarm:['#77616a','#bfa8a2'],gocart:['#4c665a','#96ab92'],dailymart:['#7a704e','#b8aa7d'],quickcart:['#4e6970','#95b2ad'],mydoc:['#7c8582','#c5c4ae'],dronline:['#6b7f88','#b7c4c4']};
for(const [id,[mineralPrimary,mineralSecondary]] of Object.entries(minerals))Object.assign(CASE_STUDY_WORLDS[id],{mineralPrimary,mineralSecondary});
