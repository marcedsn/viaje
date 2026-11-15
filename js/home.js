(function () {
  const root = document.querySelector("#contenido");
  if (!root || typeof VIAJE === "undefined") return;

  const esc = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const dayTitle = (d) => {
    if (d.links) {
      return d.links
        .map((l) => `<a href="ciudad.html?c=${l.id}">${esc(l.nombre)}</a>`)
        .join('<span class="to"> → </span>');
    }
    return esc(d.titulo);
  };

  const cards = VIAJE.ciudades
    .map(
      (c) => `<a class="card" href="ciudad.html?c=${c.id}">
        <img src="${esc(c.imagen)}" alt="" style="object-position:${esc(c.encuadre)}">
        <span class="card-copy">
          <span class="card-kicker">${esc(c.region)} · ${esc(c.cuando)}</span>
          <span class="card-name">${esc(c.nombre)}</span>
          <span class="card-rol">${esc(c.rol)}</span>
        </span>
      </a>`
    )
    .join("");

  const days = VIAJE.dias
    .map(
      (d) => `<article class="day">
        <p class="day-n">${esc(d.n)}</p>
        <div>
          <h3>${dayTitle(d)}</h3>
          <p>${esc(d.detalle)}</p>
        </div>
      </article>`
    )
    .join("");

  const route = VIAJE.ruta.map((n) => `<li>${esc(n)}</li>`).join("");

  root.innerHTML = `
    <section class="hero">
      <div class="wrap">
        <p class="eyebrow">Montevideo · 22 días</p>
        <h1>Reino Unido</h1>
        <p class="lede">${esc(VIAJE.resumen)}</p>
        <ol class="route">${route}</ol>
      </div>
    </section>
    <section class="block" id="ciudades">
      <div class="wrap">
        <h2>Las ciudades</h2>
        <p class="quiet">Diez paradas. El mapa es Inglaterra y Escocia. Madrid abre y cierra el viaje, y está con las fotos.</p>
        <div id="mapa-reino" role="region" aria-label="Mapa de las ciudades del Reino Unido"></div>
        <div class="grid">${cards}</div>
      </div>
    </section>
    <section class="block" id="dias">
      <div class="wrap">
        <h2>Día por día</h2>
        <p class="quiet">Cuando un día tiene dos ciudades, es jornada de viaje: se sale de una y se llega a la otra.</p>
        <div class="days">${days}</div>
      </div>
    </section>
  `;

  const mapa = document.getElementById("mapa-reino");
  if (!window.L) {
    mapa.innerHTML = '<p class="map-fallback">El mapa necesita conexión para cargar el callejero.</p>';
    return;
  }

  const uk = VIAJE.ciudades.filter((c) => c.punto);
  const porId = Object.fromEntries(uk.map((c) => [c.id, c]));
  const linea = (ids) => ids.map((id) => [porId[id].punto.lat, porId[id].punto.lng]);

  const map = L.map(mapa, { scrollWheelZoom: false, maxZoom: 10 });
  const tiles = { attribution: "Mapas &copy; Esri", maxZoom: 16 };
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    tiles
  ).addTo(map);
  L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 16 }
  ).addTo(map);

  L.polyline(linea(["londres", "york", "edimburgo", "inverness", "highlands", "liverpool", "manchester"]), {
    color: "#7c2f32",
    weight: 2,
    opacity: 0.7,
  }).addTo(map);
  L.polyline(linea(["londres", "oxford"]), {
    color: "#7c2f32",
    weight: 1.5,
    opacity: 0.45,
    dashArray: "4 6",
  }).addTo(map);
  L.polyline(linea(["liverpool", "chester"]), {
    color: "#7c2f32",
    weight: 1.5,
    opacity: 0.45,
    dashArray: "4 6",
  }).addTo(map);

  uk.forEach((c) => {
    const icon = L.divIcon({
      className: "city-pin",
      html: `<span class="city-dot"></span><a class="city-name" href="ciudad.html?c=${c.id}" onclick="location.href=this.href;return false" style="left:${c.punto.dx}px;top:${c.punto.dy}px">${esc(c.nombre)}</a>`,
      iconSize: [12, 12],
      iconAnchor: [6, 6],
    });
    const marker = L.marker([c.punto.lat, c.punto.lng], { icon });
    marker.on("click", () => {
      location.href = `ciudad.html?c=${c.id}`;
    });
    marker.addTo(map);
  });

  map.fitBounds(L.latLngBounds(uk.map((c) => [c.punto.lat, c.punto.lng])).pad(0.18), {
    padding: [28, 28],
    maxZoom: 7,
  });
  requestAnimationFrame(() => map.invalidateSize());
})();
