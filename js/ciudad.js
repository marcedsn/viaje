(function () {
  const root = document.querySelector("#contenido");
  if (!root || typeof VIAJE === "undefined") return;

  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const id = new URLSearchParams(location.search).get("c");
  const ciudades = VIAJE.ciudades;
  const city = ciudades.find((c) => c.id === id);

  if (!city) {
    document.title = "El viaje";
    root.innerHTML = `<div class="wrap missing"><h1>No está esa ciudad</h1><p><a href="index.html">Volver al viaje</a></p></div>`;
    return;
  }

  document.title = `${city.nombre} · El viaje`;
  const index = ciudades.indexOf(city);
  const prev = ciudades[index - 1];
  const next = ciudades[index + 1];

  const colorDe = (p) => (p.dia && city.colores ? city.colores[p.dia - 1] || "" : "");
  const marca = (i) => {
    const dia = city.lugares[i].dia;
    if (!dia) return i + 1;
    let n = 1;
    for (let k = 0; k < i; k++) if (city.lugares[k].dia === dia) n++;
    return n;
  };

  let lastGrupo = null;
  const lista = city.lugares
    .map((p, i) => {
      const color = colorDe(p);
      const tinta = color ? ` style="background:${color}"` : "";
      let head = "";
      if (p.grupo && p.grupo !== lastGrupo) {
        lastGrupo = p.grupo;
        const punto = color ? `<span class="swatch" style="background:${color}"></span>` : "";
        head = `<h3 class="grupo">${punto}${esc(p.grupo)}</h3>`;
      }
      return `${head}<button type="button" class="place" data-i="${i}">
        <span class="num"${tinta}>${marca(i)}</span>
        <span>
          <span class="place-name">${esc(p.nombre)}</span>
          <span class="place-tipo">${esc(p.tipo)}</span>
          <span class="place-text">${esc(p.texto)}</span>
        </span>
      </button>`;
    })
    .join("");

  const prosa = city.texto.map((p) => `<p>${esc(p)}</p>`).join("");

  const pager = [
    prev
      ? `<a class="pager-link" href="ciudad.html?c=${prev.id}"><span>Anterior</span><strong>${esc(prev.nombre)}</strong></a>`
      : "",
    next
      ? `<a class="pager-link next" href="ciudad.html?c=${next.id}"><span>Siguiente</span><strong>${esc(next.nombre)}</strong></a>`
      : "",
  ].join("");

  root.innerHTML = `
    <header class="city-hero">
      <img src="${esc(city.imagen)}" alt="${esc(city.nombre)}" style="object-position:${esc(city.encuadre)}">
      <div class="veil"></div>
      <div class="wrap hero-copy">
        <p class="eyebrow">${esc(city.region)}</p>
        <h1>${esc(city.nombre)}</h1>
        <p class="hero-meta">${esc(city.cuando)} · ${esc(city.rol)}</p>
      </div>
      <p class="credit">Foto · Wikimedia Commons</p>
    </header>
    <div class="wrap">
      <div class="intro">
        <div class="prose">${prosa}</div>
        <p class="nota">${esc(city.nota)}</p>
      </div>
      <section class="que">
        <div class="que-head">
          <h2>Qué hacer</h2>
          <p>Al elegir un lugar, el mapa se acerca. Los números coinciden con las marcas.</p>
        </div>
        <div class="split">
          <div class="list" id="lista">${lista}</div>
          <div class="map-col">
            <div id="mapa" role="region" aria-label="Mapa de ${esc(city.nombre)}"></div>
          </div>
        </div>
      </section>
      <nav class="pager">${pager}</nav>
    </div>
  `;

  const buttons = [...root.querySelectorAll(".place")];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrow = window.matchMedia("(max-width: 900px)");
  let markers = [];
  let map = null;
  let selected = -1;

  function pinIcon(n, on, color) {
    const tinta = color ? ` style="background:${color}"` : "";
    return L.divIcon({
      className: "pin-wrap",
      html: `<span class="pin${on ? " on" : ""}"${tinta}>${n}</span>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  }

  function select(i, source) {
    if (!map || i < 0 || i >= city.lugares.length) return;
    selected = i;
    buttons.forEach((b, idx) => b.classList.toggle("on", idx === i));
    markers.forEach((m, idx) => {
      m.setIcon(pinIcon(marca(idx), idx === i, colorDe(city.lugares[idx])));
      m.setZIndexOffset(idx === i ? 600 : 0);
    });
    const p = city.lugares[i];
    const zoom = city.id === "highlands" ? 12 : 15;
    map.flyTo([p.lat, p.lng], zoom, { duration: reduce ? 0 : 0.55 });
    markers[i].openPopup();
    if (source === "mapa") {
      buttons[i].scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
    } else if (narrow.matches) {
      document.getElementById("mapa").scrollIntoView({
        block: "center",
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }

  buttons.forEach((b) => {
    b.addEventListener("click", () => select(Number(b.dataset.i), "lista"));
  });

  const mapa = document.getElementById("mapa");
  if (!window.L) {
    mapa.innerHTML =
      '<p class="map-fallback">El mapa necesita conexión para cargar el callejero. Los lugares quedan en la lista.</p>';
    return;
  }

  map = L.map(mapa, { scrollWheelZoom: false, maxZoom: 16 });
  const tiles = {
    attribution: "Mapas &copy; Esri",
    maxZoom: 16,
  };
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    tiles
  ).addTo(map);
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 16 }
  ).addTo(map);

  if (city.colores) {
    const dias = [...new Set(city.lugares.map((p) => p.dia).filter(Boolean))];
    dias.forEach((d) => {
      const pts = city.lugares.filter((p) => p.dia === d).map((p) => [p.lat, p.lng]);
      L.polyline(pts, { color: city.colores[d - 1], weight: 3, opacity: 0.8 }).addTo(map);
    });
  }

  markers = city.lugares.map((p, i) => {
    const q = encodeURIComponent(p.local);
    const marker = L.marker([p.lat, p.lng], { icon: pinIcon(marca(i), false, colorDe(p)) });
    marker.bindPopup(
      `<strong>${esc(p.nombre)}</strong><span class="popup-tipo">${esc(p.tipo)}</span><a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener">Abrir en Google Maps</a>`
    );
    marker.on("click", () => select(i, "mapa"));
    marker.addTo(map);
    return marker;
  });

  const bounds = L.latLngBounds(city.lugares.map((p) => [p.lat, p.lng]));
  map.fitBounds(bounds.pad(0.12), { padding: [28, 28], maxZoom: 14 });
  requestAnimationFrame(() => map.invalidateSize());
})();
