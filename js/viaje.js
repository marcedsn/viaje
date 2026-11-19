import londres from "./ciudades/londres.js";
import oxford from "./ciudades/oxford.js";
import york from "./ciudades/york.js";
import edimburgo from "./ciudades/edimburgo.js";
import inverness from "./ciudades/inverness.js";
import highlands from "./ciudades/highlands.js";
import liverpool from "./ciudades/liverpool.js";
import chester from "./ciudades/chester.js";
import manchester from "./ciudades/manchester.js";
import madrid from "./ciudades/madrid.js";

/* Itinerario. Para cambiar los días, editá este archivo. Cada ciudad está en js/ciudades/. */
export const VIAJE = {
  resumen:
    "Sale de Montevideo, cruza por Madrid y el día 2 ya está en Londres. La base va del día 2 al 8: cinco días en la ciudad, con la tarde de llegada y la tarde de vuelta de Oxford. Después el rumbo es norte: York, Edimburgo, Inverness y las Highlands. Se vuelve por Liverpool y Manchester, y el viaje cierra en Madrid.",
  ruta: [
    "Montevideo",
    "Madrid",
    "Londres",
    "York",
    "Edimburgo",
    "Inverness",
    "Highlands",
    "Liverpool",
    "Manchester",
    "Madrid",
    "Montevideo",
  ],
  dias: [
    { n: "1", titulo: "Montevideo", detalle: "Salida." },
    {
      n: "2",
      links: [
        { id: "madrid", nombre: "Madrid" },
        { id: "londres", nombre: "Londres" },
      ],
      detalle: "Se llega a la tarde. Media jornada en Londres.",
    },
    { n: "3–5", links: [{ id: "londres", nombre: "Londres" }], detalle: "Cuatro días enteros en la ciudad." },
    { n: "6", links: [{ id: "oxford", nombre: "Oxford" }], detalle: "Se vuelve a la tarde. La otra media jornada queda en Londres." },
    { n: "7", links: [{ id: "londres", nombre: "Londres" }], detalle: "Día entero en la ciudad." },
    {
      n: "8",
      links: [
        { id: "londres", nombre: "Londres" },
        { id: "york", nombre: "York" },
      ],
      detalle: "Se deja la base del sur.",
    },
    {
      n: "9",
      links: [
        { id: "york", nombre: "York" },
        { id: "edimburgo", nombre: "Edimburgo" },
      ],
      detalle: "Tren hacia Escocia.",
    },
    { n: "10–11", links: [{ id: "edimburgo", nombre: "Edimburgo" }], detalle: "Dos días enteros." },
    {
      n: "12",
      links: [
        { id: "edimburgo", nombre: "Edimburgo" },
        { id: "inverness", nombre: "Inverness" },
      ],
      detalle: "Tren al norte de Escocia.",
    },
    {
      n: "13",
      links: [
        { id: "inverness", nombre: "Inverness" },
        { id: "highlands", nombre: "Highlands" },
      ],
      detalle: "Empieza el tramo en auto.",
    },
    { n: "14", links: [{ id: "highlands", nombre: "Highlands" }], detalle: "El día de paisaje." },
    {
      n: "15",
      links: [
        { id: "highlands", nombre: "Highlands" },
        { id: "liverpool", nombre: "Liverpool" },
      ],
      detalle: "El traslado largo de vuelta a Inglaterra.",
    },
    { n: "16", links: [{ id: "chester", nombre: "Chester" }], detalle: "Ida y vuelta desde Liverpool." },
    {
      n: "17",
      links: [
        { id: "liverpool", nombre: "Liverpool" },
        { id: "manchester", nombre: "Manchester" },
      ],
      detalle: "Salto corto.",
    },
    { n: "18", links: [{ id: "manchester", nombre: "Manchester" }], detalle: "Día entero." },
    {
      n: "19",
      links: [
        { id: "manchester", nombre: "Manchester" },
        { id: "madrid", nombre: "Madrid" },
      ],
      detalle: "Vuelo de regreso.",
    },
    { n: "20–21", links: [{ id: "madrid", nombre: "Madrid" }], detalle: "Dos días antes del vuelo a casa." },
    { n: "22", titulo: "Montevideo", detalle: "Llegada." },
  ],
  ciudades: [
    londres,
    oxford,
    york,
    edimburgo,
    inverness,
    highlands,
    liverpool,
    chester,
    manchester,
    madrid,
  ],
};
