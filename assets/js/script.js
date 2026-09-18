
const cardData = [
  {
    icon: "fa-light fa-pen-ruler",
    title: "Strategic Thinking",
    description: "Aligning design decisions with business goals to drive long-term product success."
  },
  {
    icon: "fa-light fa-users",
    title: "User-Centered Design",
    description: "Championing user needs through research, empathy, and iterative testing."
  },
  {
    icon: "fa-light fa-people-arrows",
    title: "Cross-Functional Leadership",
    description: "Collaborating with engineering, product, and marketing to deliver cohesive solutions."
  }
];

function createElectricCard({ icon, title, description }, index) {
  const idSuffix = `eb-${index}`;

  const colDiv = document.createElement("div");
  colDiv.className = "col-lg-4 col-md-4 col-sm-6";

  const root = document.createElement("div");
  root.id = `electric-border-${idSuffix}`;
  root.className = "electric-border";
  root.style.setProperty("--electric-border-color", "#FF9800");
  root.style.setProperty("--eb-border-width", "2px");

  // Create SVG
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.id = `eb-svg-${idSuffix}`;
  svg.classList.add("eb-svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");

  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
  const filterId = `turbulent-displace-${idSuffix}`;
  filter.id = filterId;
  filter.setAttribute("color-interpolation-filters", "sRGB");
  filter.setAttribute("x", "-20%");
  filter.setAttribute("y", "-20%");
  filter.setAttribute("width", "140%");
  filter.setAttribute("height", "140%");

  // Helper for turbulence and animation
  function addAnim(seed, attr, values) {
    const ns = "http://www.w3.org/2000/svg";
    const turbulence = document.createElementNS(ns, "feTurbulence");
    turbulence.setAttribute("type", "turbulence");
    turbulence.setAttribute("baseFrequency", "0.02");
    turbulence.setAttribute("numOctaves", "10");
    turbulence.setAttribute("result", "noise");
    turbulence.setAttribute("seed", seed);

    const offset = document.createElementNS(ns, "feOffset");
    offset.setAttribute("in", "noise");
    offset.setAttribute("dx", "0");
    offset.setAttribute("dy", "0");

    const animate = document.createElementNS(ns, "animate");
    animate.setAttribute("attributeName", attr);
    animate.setAttribute("values", values);
    animate.setAttribute("dur", "6s");
    animate.setAttribute("repeatCount", "indefinite");
    animate.setAttribute("calcMode", "linear");
    offset.appendChild(animate);

    filter.appendChild(turbulence);
    filter.appendChild(offset);
  }

  // Four turbulence layers
  addAnim(1, "dy", "700; 0");
  addAnim(1, "dy", "0; -700");
  addAnim(2, "dx", "490; 0");
  addAnim(2, "dx", "0; -490");

  // Combine and displace
  const feDisplacement = document.createElementNS("http://www.w3.org/2000/svg", "feDisplacementMap");
  feDisplacement.setAttribute("in", "SourceGraphic");
  feDisplacement.setAttribute("in2", "noise");
  feDisplacement.setAttribute("scale", "30");
  feDisplacement.setAttribute("xChannelSelector", "R");
  feDisplacement.setAttribute("yChannelSelector", "B");
  filter.appendChild(feDisplacement);

  defs.appendChild(filter);
  svg.appendChild(defs);

  // Border layers
  const layers = document.createElement("div");
  layers.className = "eb-layers";
  layers.innerHTML = `
    <div id="eb-stroke-${idSuffix}" class="eb-stroke"></div>
    <div class="eb-glow-1"></div>
    <div class="eb-glow-2"></div>
    <div class="eb-background-glow"></div>
  `;

  // Content
  const card = document.createElement("div");
  card.className = "service-card-v1 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation";
  card.innerHTML = `
    <div class="service-card-icon"><i class="${icon}"></i></div>
    <h4 class="service-title">${title}</h4>
    <p class="service-para">${description}</p>
  `;

  root.append(svg, layers, card);
  colDiv.appendChild(root);

  // Append to DOM before initializing effect
  document.querySelector("#servicesContainer").appendChild(colDiv);

  // Initialize the electric border animation for this card
  initElectricBorder(root, svg, document.getElementById(`eb-stroke-${idSuffix}`), filterId);
}

// Initialize animation for each
function initElectricBorder(root, svg, stroke, filterId) {
  function updateAnim({ speed = 1, chaos = 0.3 } = {}) {
    if (!svg || !root) return;

    stroke.style.filter = `url(#${filterId})`;

    const width = Math.max(1, root.clientWidth);
    const height = Math.max(1, root.clientHeight);

    const dyAnims = [...svg.querySelectorAll('feOffset > animate[attributeName="dy"]')];
    const dxAnims = [...svg.querySelectorAll('feOffset > animate[attributeName="dx"]')];

    if (dyAnims.length >= 2) {
      dyAnims[0].setAttribute("values", `${height}; 0`);
      dyAnims[1].setAttribute("values", `0; -${height}`);
    }
    if (dxAnims.length >= 2) {
      dxAnims[0].setAttribute("values", `${width}; 0`);
      dxAnims[1].setAttribute("values", `0; -${width}`);
    }

    const dur = 6 / speed;
    [...dyAnims, ...dxAnims].forEach(a => a.setAttribute("dur", `${dur}s`));

    const disp = svg.querySelector("feDisplacementMap");
    if (disp) disp.setAttribute("scale", String(30 * chaos));

    const filterEl = svg.querySelector(`#${filterId}`);
    if (filterEl) {
      filterEl.setAttribute("x", "-100%");
      filterEl.setAttribute("y", "-100%");
      filterEl.setAttribute("width", "500%");
      filterEl.setAttribute("height", "500%");
    }

    requestAnimationFrame(() => {
      [...dyAnims, ...dxAnims].forEach(a => {
        if (typeof a.beginElement === "function") a.beginElement();
      });
    });
  }

  updateAnim({ speed: 1, chaos: 0.3 });
  new ResizeObserver(() => updateAnim({ speed: 1, chaos: 0.3 })).observe(root);
}

// Create all cards dynamically
cardData.forEach((data, i) => createElectricCard(data, i));
