// Datos del catálogo. Se genera solo desde editor.html: no hace falta editarlo a mano.
const AJUSTES = {
  "negocio": "Jogopines",
  "logo": "fotos/logo.png",
  "lineas": [
    "Pines, llaveros, figuras y más!!",
    "¿Quieres algo para ti? Pídelo con nosotros!!",
    "Pedidos a través de Temu 🟧"
  ],
  "instagram": "https://www.instagram.com/jogopines/",
  "whatsapp": "50766057804",
  "moneda": "$",
  "mostrarMedidas": false,
  "hojaUrl": "",
  "encargo": {
    "activo": true,
    "cargo": 1,
    "modo": "pieza",
    "maximo": 10,
    "tiempo": "20 días",
    "texto": "Este pin está agotado por ahora, pero lo podemos conseguir para ti con un pedido especial."
  },
  "broche": {
    "activo": true,
    "precio": 0.5,
    "cantidad": 20,
    "texto": "Broche trasero de mayor seguridad para evitar robos o pérdidas."
  },
  "colores": {
    "fondo": "#FBF6EE",
    "cabecera": "#FBE9D0",
    "acento": "#8A3B4E",
    "p1": "#FFD9E2",
    "p2": "#D5F0E3",
    "p3": "#FFE9C7",
    "p4": "#D4E6FA",
    "p5": "#E6DCF7"
  }
};

const CATEGORIAS = [{"nombre":"Música","emoji":"🎵"},{"nombre":"Anime","emoji":"🌸"},{"nombre":"Juegos","emoji":"🎮"},{"nombre":"Series","emoji":"📺"},{"nombre":"Películas","emoji":"🎬"},{"nombre":"Otros","emoji":"✨"}];

const ARTICULOS = [
  {"nombre":"Pin Auriculares","categoria":"Música","precio":2,"cantidad":0,"broche":true,"medidas":"3 × 2.5 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Pin esmaltado de auriculares."},
  {"nombre":"Pin Vinilo","categoria":"Música","precio":1.75,"cantidad":2,"broche":true,"medidas":"3 cm (redondo)","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Disco de vinilo con detalles dorados."},
  {"nombre":"Pin Onigiri","categoria":"Anime","precio":1.5,"cantidad":6,"broche":true,"medidas":"2.5 × 2.5 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Bolita de arroz kawaii en esmalte."},
  {"nombre":"Llavero Katana","categoria":"Anime","precio":3,"cantidad":3,"broche":false,"medidas":"8 cm de largo","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Llavero metálico con forma de espada."},
  {"nombre":"Pin Control","categoria":"Juegos","precio":2,"cantidad":4,"broche":true,"medidas":"3.5 × 2 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Control de videojuegos, esmalte duro."},
  {"nombre":"Pin Dado","categoria":"Juegos","precio":1.25,"cantidad":0,"broche":true,"medidas":"2 × 2 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Dado de juego de mesa."},
  {"nombre":"Pin Televisión","categoria":"Series","precio":2,"cantidad":3,"broche":true,"medidas":"3 × 3 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Televisión retro para maratonear."},
  {"nombre":"Pin Palomitas","categoria":"Películas","precio":0.75,"cantidad":7,"broche":true,"medidas":"3 × 2.5 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Cubeta de palomitas con cierre de mariposa."},
  {"nombre":"Pin Luna","categoria":"Otros","precio":1.5,"cantidad":8,"broche":true,"medidas":"3 × 2 cm","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Luna creciente con detalles dorados."},
  {"nombre":"Figura Hongo","categoria":"Otros","precio":4.5,"cantidad":3,"broche":false,"medidas":"5 cm de alto","verMedidas":true,"encargo":true,"imagen":"","descripcion":"Figura pequeña para decorar tu escritorio."}
];
