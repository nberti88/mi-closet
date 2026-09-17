// ── Configura tus datos de contacto aquí ──
const CONFIG = {
  nombre_tienda: "Mi Closet",
  tagline: "Piezas úsadas con estilo",
  whatsapp: "573173508460",
  instagram: "tu_usuario",
  email: "tu@email.com",
  simbolo_moneda: "$",
};

// ── Íconos SVG ──
const ICON_WA = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.882l6.211-1.63A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.376l-.36-.214-3.688.968.986-3.594-.235-.369A9.82 9.82 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/></svg>`;
const ICON_IG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;
const ICON_EMAIL = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>`;
const ICON_WA_SMALL = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.528 5.845L.057 23.882l6.211-1.63A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.376l-.36-.214-3.688.968.986-3.594-.235-.369A9.82 9.82 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/></svg>`;

const condicionMap = {
  nuevo_con_etiqueta: { cls: "nuevo-etiqueta", label: "Nuevo con etiqueta" },
  como_nuevo:         { cls: "como-nuevo",     label: "Como nuevo" },
  buen_estado:        { cls: "buen-estado",    label: "Buen estado" },
};

// ── Lightbox ──
let lb = { fotos: [], idx: 0, startX: 0 };

function lbOpen(fotos, idx) {
  lb.fotos = fotos;
  lb.idx = idx;
  lbRender();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function lbClose() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function lbGo(delta) {
  lb.idx = (lb.idx + delta + lb.fotos.length) % lb.fotos.length;
  const track = document.getElementById("lb-track");
  track.style.transition = "transform 0.3s ease";
  track.style.transform = `translateX(-${lb.idx * 100}vw)`;
  // actualizar dots
  document.querySelectorAll("#lb-dots .dot").forEach((d, i) =>
    d.classList.toggle("active", i === lb.idx)
  );
}

function lbRender() {
  const track = document.getElementById("lb-track");
  const dots  = document.getElementById("lb-dots");

  // siempre recrear slides para mostrar las fotos correctas del producto
  track.innerHTML = lb.fotos.map((src, i) =>
    `<div class="lightbox-slide">
      <img src="${src}" alt="Foto ${i+1}" draggable="false"
        onerror="this.style.display='none'"
        onclick="this.classList.toggle('zoomed')">
     </div>`
  ).join("");

  track.style.transition = "none";
  track.style.transform = `translateX(-${lb.idx * 100}vw)`;
  track.offsetHeight; // forzar reflow para que la transición no anime el salto inicial
  track.style.transition = "";

  // dots
  dots.innerHTML = lb.fotos.map((_, i) =>
    `<span class="dot${i === lb.idx ? " active" : ""}"></span>`
  ).join("");

  // show/hide arrows
  const showArrows = lb.fotos.length > 1;
  document.querySelectorAll(".lightbox-btn").forEach(b => {
    b.style.display = showArrows ? "" : "none";
  });
}

function initLightbox() {
  const el = document.getElementById("lightbox");

  document.getElementById("lb-close").addEventListener("click", lbClose);
  document.getElementById("lb-prev").addEventListener("click", () => lbGo(-1));
  document.getElementById("lb-next").addEventListener("click", () => lbGo(1));

  el.addEventListener("click", e => {
    if (e.target === el || e.target.closest(".lightbox-inner") === null) lbClose();
  });

  // touch swipe
  el.addEventListener("touchstart", e => { lb.startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - lb.startX;
    if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1);
  });

  // keyboard
  document.addEventListener("keydown", e => {
    if (!el.classList.contains("open")) return;
    if (e.key === "Escape")      lbClose();
    if (e.key === "ArrowRight")  lbGo(1);
    if (e.key === "ArrowLeft")   lbGo(-1);
  });
}

// ── Carrusel en tarjeta ──
function initCarousel(wrap) {
  const track  = wrap.querySelector(".carousel-track");
  const dots   = wrap.querySelectorAll(".dot");
  const slides = wrap.querySelectorAll(".carousel-slide");
  let idx = 0;
  let startX = 0;

  // fijar el ancho de cada slide al tamaño real del contenedor
  const slideW = wrap.offsetWidth;
  slides.forEach(s => s.style.width = slideW + "px");

  function go(delta) {
    idx = (idx + delta + slides.length) % slides.length;
    const slideW = wrap.offsetWidth;
    track.style.transform = `translateX(-${idx * slideW}px)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
  }

  wrap.querySelector(".carousel-btn.prev")?.addEventListener("click", e => {
    e.stopPropagation(); go(-1);
  });
  wrap.querySelector(".carousel-btn.next")?.addEventListener("click", e => {
    e.stopPropagation(); go(1);
  });

  wrap.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  wrap.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { e.preventDefault(); go(dx < 0 ? 1 : -1); }
  });

  // click abre lightbox con las fotos de este producto
  wrap.addEventListener("click", e => {
    if (e.target.closest(".carousel-btn")) return;
    const fotos = JSON.parse(wrap.dataset.fotos || "[]");
    lbOpen(fotos, idx);
  });
}

// ── Renderizar header ──
function initHeader() {
  document.getElementById("brand-name").textContent    = CONFIG.nombre_tienda;
  document.getElementById("brand-tagline").textContent = CONFIG.tagline;

  document.getElementById("header-contacts").innerHTML = `
    <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" class="contact-link">
      ${ICON_WA} WhatsApp
    </a>
    <a href="https://instagram.com/${CONFIG.instagram}" target="_blank" class="contact-link">
      ${ICON_IG} Instagram
    </a>
    <a href="mailto:${CONFIG.email}" class="contact-link">
      ${ICON_EMAIL} Email
    </a>
  `;

  document.getElementById("footer-text").textContent =
    `© ${new Date().getFullYear()} ${CONFIG.nombre_tienda} · De Mi Clóset al Tuyo`;
}

// ── Renderizar tarjetas ──
function renderCards(productos) {
  const grid  = document.getElementById("grid");
  const empty = document.getElementById("empty-state");

  if (!productos.length) {
    grid.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  grid.innerHTML = productos.map(p => {
    const fotos = p.fotos?.length ? p.fotos : [];
    const hasMany = fotos.length > 1;

    const slides = fotos.length
      ? fotos.map(src =>
          `<div class="carousel-slide">
             <img src="${src}" alt="${p.nombre}" loading="lazy"
               onerror="this.style.display='none'">
           </div>`
        ).join("")
      : `<div class="carousel-slide"><div class="placeholder">👗</div></div>`;

    const dots = hasMany
      ? `<div class="carousel-dots">${fotos.map((_, i) =>
          `<span class="dot${i === 0 ? " active" : ""}"></span>`).join("")}</div>`
      : "";

    const arrows = hasMany
      ? `<button class="carousel-btn prev">‹</button>
         <button class="carousel-btn next">›</button>`
      : "";

    const cond = condicionMap[p.condicion];
    const badgeCond = cond
      ? `<span class="badge-condicion ${cond.cls}">${cond.label}</span>`
      : "";

    const badgeSold = !p.disponible
      ? `<span class="badge-sold">Vendido</span>`
      : "";

    const waMsg  = encodeURIComponent(`Hola! Me interesa: ${p.nombre} (${CONFIG.simbolo_moneda}${p.precio})`);
    const btnWa  = p.disponible
      ? `<a href="https://wa.me/${CONFIG.whatsapp}?text=${waMsg}" target="_blank" class="btn-wa">${ICON_WA_SMALL} Preguntar</a>`
      : `<span class="btn-wa disabled">${ICON_WA_SMALL} Vendido</span>`;

    return `
      <article class="card${!p.disponible ? " sold" : ""}">
        <div class="card-img-wrap" data-fotos='${JSON.stringify(fotos)}'>
          <div class="carousel-track">${slides}</div>
          ${arrows}
          ${dots}
          ${badgeCond}
          ${badgeSold}
        </div>
        <div class="card-body">
          <p class="card-name">${p.nombre}</p>
          <p class="card-desc">${p.descripcion}</p>
          <div class="card-meta">
            ${p.talla ? `<span class="meta-chip">Talla ${p.talla}</span>` : ""}
            ${cond ? `<span class="meta-chip meta-cond ${cond.cls}">${cond.label}</span>` : ""}
          </div>
          <div class="card-footer">
            <span class="card-price">${CONFIG.simbolo_moneda}${p.precio.toLocaleString("es-CO")}</span>
            ${btnWa}
          </div>
        </div>
      </article>
    `;
  }).join("");

  // inicializar carruseles
  grid.querySelectorAll(".card-img-wrap").forEach(initCarousel);
}

// ── Filtros ──
function initFilters(productos) {
  let filtroActivo = "todo";
  const btns = document.querySelectorAll(".filter-btn");

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      filtroActivo = btn.dataset.filter;
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filtrados = filtroActivo === "todo"
        ? productos
        : productos.filter(p => p.categoria === filtroActivo);
      renderCards(filtrados);
    });
  });
}

// ── Init ──
async function init() {
  initHeader();
  initLightbox();

  try {
    const res      = await fetch("productos.json");
    const productos = await res.json();
    renderCards(productos);
    initFilters(productos);
  } catch {
    const empty = document.getElementById("empty-state");
    empty.style.display = "block";
    empty.textContent   = "No se pudo cargar el catálogo.";
  }
}

init();
