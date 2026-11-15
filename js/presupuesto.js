/* Presupuesto para 4. Para cambiar un precio, editá las líneas de abajo. */
const PRESUPUESTO = {
  personas: 4,
  dias: 22,
  noches: 20,
  gbp: 1.33,
  eur: 1.11,
  uyu: 41,
  colchon: 0.08,
  categorias: [
    {
      id: "vuelos",
      nombre: "Vuelos",
      intro: "Montevideo–Madrid ida y vuelta, más Madrid–Londres y Manchester–Madrid. El número no es la tarifa de £28 sin equipaje: incluye margen para una maleta.",
      lineas: [
        {
          concepto: "Montevideo–Madrid, ida y vuelta",
          detalle: "Por persona, con una maleta. En noviembre de 2026 se vio desde unos US$ 760. Lo habitual anda entre 860 y 1.300.",
          cantidad: 1,
          precio: 1050,
          moneda: "USD",
          alcance: "persona",
        },
        {
          concepto: "Madrid–Londres",
          detalle: "Por persona. Hay vuelos desde £28 sin nada incluido. Acá entra asiento y equipaje de mano, con margen.",
          cantidad: 1,
          precio: 120,
          moneda: "USD",
          alcance: "persona",
        },
        {
          concepto: "Manchester–Madrid",
          detalle: "Por persona, misma lógica. El piso publicado andaba en £25.",
          cantidad: 1,
          precio: 105,
          moneda: "USD",
          alcance: "persona",
        },
      ],
    },
    {
      id: "alojamiento",
      nombre: "Alojamiento",
      intro: "20 noches. Un departamento para los cuatro, o dos habitaciones simples. En Londres £200 la noche es ajustado y supone reservar fuera del centro.",
      lineas: [
        { concepto: "Londres", detalle: "5 noches. Días 3 al 7.", cantidad: 5, precio: 200, moneda: "GBP", alcance: "grupo" },
        { concepto: "York", detalle: "1 noche. Se llega el día 8 y se sale el 9.", cantidad: 1, precio: 140, moneda: "GBP", alcance: "grupo" },
        { concepto: "Edimburgo", detalle: "3 noches. Días 9, 10 y 11.", cantidad: 3, precio: 180, moneda: "GBP", alcance: "grupo" },
        { concepto: "Inverness", detalle: "1 noche, la del día 12.", cantidad: 1, precio: 130, moneda: "GBP", alcance: "grupo" },
        { concepto: "Highlands", detalle: "2 noches. Posada o dos habitaciones, no un hotel de ciudad.", cantidad: 2, precio: 150, moneda: "GBP", alcance: "grupo" },
        { concepto: "Liverpool", detalle: "2 noches. Días 15 y 16.", cantidad: 2, precio: 130, moneda: "GBP", alcance: "grupo" },
        { concepto: "Manchester", detalle: "2 noches. Días 17 y 18.", cantidad: 2, precio: 140, moneda: "GBP", alcance: "grupo" },
        { concepto: "Madrid", detalle: "4 noches: la escala del día 2 y los días 19, 20 y 21.", cantidad: 4, precio: 120, moneda: "EUR", alcance: "grupo" },
      ],
    },
    {
      id: "comida",
      nombre: "Comida",
      intro: "Desayuno de supermercado, meal deal o comida rápida, y 13 comidas sentadas en todo el viaje: una o dos por ciudad. Los museos gratis no cambian esta cuenta.",
      lineas: [
        { concepto: "Desayuno en el Reino Unido", detalle: "16 días × £3,50. Café, yogur o algo del súper. No es el desayuno del hotel.", cantidad: 16, precio: 3.5, moneda: "GBP", alcance: "persona" },
        { concepto: "Meal deal", detalle: "12 por persona. Tesco £4,25 sin Clubcard, noviembre 2026. Sándwich, snack y bebida.", cantidad: 12, precio: 4.25, moneda: "GBP", alcance: "persona" },
        { concepto: "Comida rápida", detalle: "7 cenas por persona: fish and chips para llevar, Greggs, súper o un Nando's.", cantidad: 7, precio: 9, moneda: "GBP", alcance: "persona" },
        { concepto: "Comidas típicas en el Reino Unido", detalle: "11 por persona, a £18 el plato sin la cerveza. El detalle está más abajo.", cantidad: 11, precio: 18, moneda: "GBP", alcance: "persona" },
        { concepto: "Desayuno en Madrid", detalle: "4 días × €4. Café y algo de barra.", cantidad: 4, precio: 4, moneda: "EUR", alcance: "persona" },
        { concepto: "Comida rápida en Madrid", detalle: "6 comidas: bocadillo, súper o un menú corto. La escala del día 2 entra acá.", cantidad: 6, precio: 7, moneda: "EUR", alcance: "persona" },
        { concepto: "Comidas típicas en Madrid", detalle: "2 por persona en la vuelta. Tapas de verdad o un cocido, no el menú de €12.", cantidad: 2, precio: 25, moneda: "EUR", alcance: "persona" },
      ],
    },
    {
      id: "cerveza",
      nombre: "Cerveza",
      intro: "Dos pintas por persona casi todas las noches, en el pub. En Madrid, dos cañas. Si una noche compran latas en el súper, esta línea baja.",
      lineas: [
        { concepto: "Londres", detalle: "5 noches × 2 pintas. La pinta de lager andaba en £6,51.", cantidad: 10, precio: 6.5, moneda: "GBP", alcance: "persona" },
        { concepto: "El resto del Reino Unido", detalle: "11 noches × 2 pintas, a £5,80. El promedio del país estaba en £5,72.", cantidad: 22, precio: 5.8, moneda: "GBP", alcance: "persona" },
        { concepto: "Madrid", detalle: "3 noches × 2 cañas. La noche del vuelo de vuelta no cuenta.", cantidad: 6, precio: 3.5, moneda: "EUR", alcance: "persona" },
      ],
    },
    {
      id: "trenes",
      nombre: "Trenes",
      intro: "Tarifa anticipada, reservada con semanas. No es el boleto Anytime, que en varias de estas rutas pasa de £100.",
      lineas: [
        { concepto: "Londres–Oxford", detalle: "Ida y vuelta, día 6.", cantidad: 1, precio: 28, moneda: "GBP", alcance: "persona" },
        { concepto: "Londres–York", detalle: "Día 8. LNER publica desde £28,80.", cantidad: 1, precio: 32, moneda: "GBP", alcance: "persona" },
        { concepto: "York–Edimburgo", detalle: "Día 9. Se vieron anticipadas desde £22,90.", cantidad: 1, precio: 36, moneda: "GBP", alcance: "persona" },
        { concepto: "Edimburgo–Inverness", detalle: "Día 12. Un ida y vuelta directo se vio desde £50.", cantidad: 1, precio: 32, moneda: "GBP", alcance: "persona" },
        { concepto: "Liverpool–Chester", detalle: "Ida y vuelta, día 16.", cantidad: 1, precio: 14, moneda: "GBP", alcance: "persona" },
        { concepto: "Liverpool–Manchester", detalle: "Día 17.", cantidad: 1, precio: 12, moneda: "GBP", alcance: "persona" },
      ],
    },
    {
      id: "auto",
      nombre: "Auto en las Highlands",
      intro: "Se retira en Inverness el día 13 y se deja en Liverpool el día 15. El costo grande no es el alquiler: es dejarlo en otra ciudad.",
      lineas: [
        { concepto: "Alquiler, 3 días", detalle: "Auto chico, cuatro adultos, conductores mayores de 25.", cantidad: 3, precio: 40, moneda: "GBP", alcance: "grupo" },
        { concepto: "Dejarlo en Liverpool", detalle: "Cargo por one-way. Hay que cotizarlo: a veces conviene devolverlo en Glasgow y seguir en tren.", cantidad: 1, precio: 180, moneda: "GBP", alcance: "grupo" },
        { concepto: "Nafta", detalle: "La ruta del sur: Loch Ness, Glenfinnan, Glencoe y la bajada a Liverpool. Unas 550 millas.", cantidad: 1, precio: 130, moneda: "GBP", alcance: "grupo" },
      ],
    },
    {
      id: "local",
      nombre: "Transporte local",
      intro: "Metro, aeropuerto y algún bus. El tope diario de las zonas 1 y 2 de Londres estaba en £8,90.",
      lineas: [
        { concepto: "Metro de Londres", detalle: "Cuatro días al tope de £8,90, la ida a Paddington y el barco a Greenwich.", cantidad: 1, precio: 48, moneda: "GBP", alcance: "persona" },
        { concepto: "Aeropuerto al centro, al llegar", detalle: "Elizabeth line, Thameslink o tren de Stansted. Stansted no entra en el tope de Oyster.", cantidad: 1, precio: 18, moneda: "GBP", alcance: "persona" },
        { concepto: "Buses en el resto del Reino Unido", detalle: "Edimburgo, York y el aeropuerto de Manchester el día 19.", cantidad: 1, precio: 18, moneda: "GBP", alcance: "persona" },
        { concepto: "Metro de Madrid", detalle: "Las cuatro noches, sin abono turístico.", cantidad: 1, precio: 12, moneda: "EUR", alcance: "persona" },
      ],
    },
    {
      id: "entradas",
      nombre: "Entradas",
      intro: "Lo que se paga. El Museo Británico, la National Gallery, la Tate, el de Escocia y el del ferrocarril de York quedan afuera: son gratis.",
      lineas: [
        { concepto: "Torre de Londres", detalle: "Adulto £38, precio publicado sin donación.", cantidad: 1, precio: 38, moneda: "GBP", alcance: "persona" },
        { concepto: "Abadía de Westminster", detalle: "Unos £30. Conviene confirmar al reservar.", cantidad: 1, precio: 30, moneda: "GBP", alcance: "persona" },
        { concepto: "Un college en Oxford", detalle: "Uno solo. Christ Church sale más caro que este promedio.", cantidad: 1, precio: 16, moneda: "GBP", alcance: "persona" },
        { concepto: "York Minster", detalle: "£20. La torre se paga aparte y no está acá.", cantidad: 1, precio: 20, moneda: "GBP", alcance: "persona" },
        { concepto: "Castillo de Edimburgo", detalle: "£23,50 online. En la puerta son £26.", cantidad: 1, precio: 24, moneda: "GBP", alcance: "persona" },
        { concepto: "Castillo de Urquhart", detalle: "La parada del Loch Ness.", cantidad: 1, precio: 13, moneda: "GBP", alcance: "persona" },
        { concepto: "Prado", detalle: "Entrada general.", cantidad: 1, precio: 15, moneda: "EUR", alcance: "persona" },
        { concepto: "Palacio Real de Madrid", detalle: "Si entran. Por fuera no cuesta.", cantidad: 1, precio: 14, moneda: "EUR", alcance: "persona" },
      ],
    },
    {
      id: "otros",
      nombre: "Seguro, chip y lavadero",
      intro: "Lo que no es el viaje en sí y igual hay que pagarlo.",
      lineas: [
        { concepto: "Seguro de viaje", detalle: "22 días, cobertura básica con salud.", cantidad: 1, precio: 55, moneda: "USD", alcance: "persona" },
        { concepto: "eSIM", detalle: "Datos para el Reino Unido y unos días en España.", cantidad: 1, precio: 25, moneda: "USD", alcance: "persona" },
        { concepto: "Lavadero", detalle: "Dos tandas para los cuatro.", cantidad: 1, precio: 30, moneda: "GBP", alcance: "grupo" },
      ],
    },
  ],
  tipicas: [
    { ciudad: "Madrid", texto: "Dos en la vuelta: tapas en una taberna y un cocido o un asado de restaurante. El día 2, si la escala es corta, es un bocadillo." },
    { ciudad: "Londres", texto: "Fish and chips sentados, y un curry o un pie. El resto de las comidas es meal deal o para llevar." },
    { ciudad: "Oxford", texto: "Un almuerzo de pub. El Covered Market cubre el resto sin sentarse." },
    { ciudad: "York", texto: "Una cena de pub. Betty's es el té, y entra en la comida rápida si la cola lo permite." },
    { ciudad: "Edimburgo", texto: "Dos: una cena de pub y otra, con haggis o un pie si quieren lo de ahí." },
    { ciudad: "Inverness", texto: "Una cena de pub. El día es corto." },
    { ciudad: "Highlands", texto: "Una cena de pub en el camino. La otra noche, comida rápida o el mismo pub si no hay otra cosa." },
    { ciudad: "Liverpool", texto: "Una: scouse o fish and chips sentados." },
    { ciudad: "Chester", texto: "Un almuerzo de pub entre la muralla y el tren de vuelta." },
    { ciudad: "Manchester", texto: "Una: pie o un curry del Curry Mile, que suele salir menos que las £18 de esta cuenta." },
  ],
};

function calcular(p) {
  const factor = { USD: 1, GBP: p.gbp, EUR: p.eur };
  const categorias = p.categorias.map((cat) => {
    const lineas = cat.lineas.map((l) => {
      const local = l.cantidad * l.precio * (l.alcance === "persona" ? p.personas : 1);
      return { ...l, local, usd: local * factor[l.moneda] };
    });
    return { ...cat, lineas, usd: lineas.reduce((s, l) => s + l.usd, 0) };
  });
  const subtotal = categorias.reduce((s, c) => s + c.usd, 0);
  const colchon = subtotal * p.colchon;
  const total = subtotal + colchon;
  return {
    categorias,
    subtotal,
    colchon,
    total,
    porPersona: total / p.personas,
    porDia: total / p.personas / p.dias,
    max: Math.max(...categorias.map((c) => c.usd)),
  };
}

function usd(n) {
  return "US$\u00a0" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function local(n, moneda) {
  const rounded = Math.round(n);
  const texto = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (moneda === "GBP") return "£\u00a0" + texto;
  if (moneda === "EUR") return "€\u00a0" + texto;
  return "US$\u00a0" + texto;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render() {
  const root = document.querySelector("#contenido");
  if (!root) return;
  const c = calcular(PRESUPUESTO);
  const p = PRESUPUESTO;
  const pesos = Math.round(c.total * p.uyu);
  const cerveza = c.categorias.find((cat) => cat.id === "cerveza").usd;

  const bloques = c.categorias
    .map((cat) => {
      const filas = cat.lineas
        .map(
          (l) => `<article class="budget-row">
            <div>
              <h3>${esc(l.concepto)}</h3>
              <p>${esc(l.detalle)}</p>
            </div>
            <p class="row-amt">${local(l.local, l.moneda)}<span>${local(l.local / p.personas, l.moneda)} por persona</span></p>
          </article>`
        )
        .join("");
      const ancho = Math.max(8, Math.round((cat.usd / c.max) * 100));
      return `<section class="cat">
        <div class="cat-head">
          <h2>${esc(cat.nombre)}</h2>
          <p class="row-amt">${usd(cat.usd)}<span>${usd(cat.usd / p.personas)} por persona</span></p>
        </div>
        <div class="bar" aria-hidden="true"><span style="width:${ancho}%"></span></div>
        <p class="quiet" style="margin-top:14px">${esc(cat.intro)}</p>
        ${filas}
      </section>`;
    })
    .join("");

  const tipicas = p.tipicas
    .map(
      (t) => `<article class="tipica">
        <h3>${esc(t.ciudad)}</h3>
        <p>${esc(t.texto)}</p>
      </article>`
    )
    .join("");

  root.innerHTML = `
    <section class="hero">
      <div class="wrap">
        <p class="eyebrow">4 adultos · 22 días · 20 noches</p>
        <h1>Presupuesto</h1>
        <p class="total-num">${usd(c.total)}</p>
        <p class="total-sub">Unos $&nbsp;${pesos.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} uruguayos, a 41 pesos por dólar. ${usd(c.porPersona)} por persona.</p>
        <ul class="facts-row">
          <li><span>Por persona</span><strong>${usd(c.porPersona)}</strong></li>
          <li><span>Por persona y día</span><strong>${usd(c.porDia)}</strong></li>
          <li><span>Sin el colchón del 8%</span><strong>${usd(c.subtotal)}</strong></li>
        </ul>
      </div>
    </section>
    <section class="block" style="padding-top:12px">
      <div class="wrap">
        <h2>Cómo está armado</h2>
        <div class="two">
          <p class="quiet">La comida de todos los días es meal deal o algo rápido. Hay 13 comidas sentadas en todo el viaje, una o dos por ciudad. La cerveza son dos pintas por persona, 16 noches en el Reino Unido y 3 en Madrid.</p>
          <p class="quiet">Los trenes están en tarifa anticipada. El alojamiento es un departamento o dos habitaciones simples para los cuatro. El cambio usado es £1 = US$ 1,33 y €1 = US$ 1,11.</p>
        </div>
        ${bloques}
        <section class="cat">
          <div class="cat-head">
            <h2>Colchón</h2>
            <p class="row-amt">${usd(c.colchon)}<span>${usd(c.colchon / p.personas)} por persona</span></p>
          </div>
          <div class="bar" aria-hidden="true"><span style="width:${Math.max(8, Math.round((c.colchon / c.max) * 100))}%"></span></div>
          <p class="quiet" style="margin-top:14px">8% encima de todo. Cubre un tren que no era el barato, un café de más y una entrada que haya subido.</p>
        </section>
        <section class="cat">
          <h2>Las comidas sentadas</h2>
          <p class="quiet">Trece en total, contadas en la sección de comida. Esto es cuáles son.</p>
          <div class="two">${tipicas}</div>
        </section>
        <section class="cat">
          <h2>Si se mueve</h2>
          <article class="budget-row">
            <div>
              <h3>Tres pintas en vez de dos</h3>
              <p>La cerveza sube la mitad.</p>
            </div>
            <p class="row-amt">+ ${usd(cerveza / 2)}<span>+ ${usd(cerveza / 2 / p.personas)} por persona</span></p>
          </article>
          <article class="budget-row">
            <div>
              <h3>Londres a £300 la noche</h3>
              <p>Cinco noches, si no aparece el departamento de £200.</p>
            </div>
            <p class="row-amt">+ ${usd(100 * 5 * p.gbp)}<span>+ ${usd((100 * 5 * p.gbp) / p.personas)} por persona</span></p>
          </article>
          <article class="budget-row">
            <div>
              <h3>Vuelos en la franja baja</h3>
              <p>Unos US$ 950 por persona en vez de 1.275, si la maleta entra en una tarifa barata.</p>
            </div>
            <p class="row-amt">− ${usd((1275 - 950) * p.personas)}<span>− ${usd(1275 - 950)} por persona</span></p>
          </article>
        </section>
      </div>
    </section>
  `;
}

if (typeof document !== "undefined") render();

if (typeof module !== "undefined" && module.exports) {
  module.exports = { PRESUPUESTO, calcular };
}
