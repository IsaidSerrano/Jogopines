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
  "mostrarMedidas": true,
  "broche": {
    "activo": true,
    "precio": 0.5,
    "cantidad": 20,
    "texto": "Broche trasero de mayor seguridad para evitar robos y/o pérdidas."
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

const CATEGORIAS = [{"nombre":"Música","emoji":"🎵"},{"nombre":"Anime","emoji":"⛩️"},{"nombre":"Juegos","emoji":"🎮"},{"nombre":"Series","emoji":"📺"},{"nombre":"Películas","emoji":"🍿"},{"nombre":"Otros","emoji":"🌈"}];

const ARTICULOS = [
  {"nombre":"Marceline","categoria":"Series","precio":2,"cantidad":1,"broche":true,"medidas":"3.05 × 2.79 cm","imagen":"fotos/d5f75f3c-e1e2-4590-ada0-2d7563e34752.jpg","emoji":"","descripcion":"Chill y flotante junto a su bajo/hacha."},
  {"nombre":"Pin Vinilo","categoria":"Música","precio":1.75,"cantidad":2,"broche":true,"medidas":"3 cm (redondo)","imagen":"","emoji":"","descripcion":"Disco de vinilo con detalles dorados."},
  {"nombre":"Pin Onigiri","categoria":"Anime","precio":1.5,"cantidad":6,"broche":true,"medidas":"2.5 × 2.5 cm","imagen":"","emoji":"","descripcion":"Bolita de arroz kawaii en esmalte."},
  {"nombre":"Llavero Katana","categoria":"Anime","precio":3,"cantidad":3,"broche":false,"medidas":"8 cm de largo","imagen":"","emoji":"","descripcion":"Llavero metálico con forma de espada."},
  {"nombre":"Pin Control","categoria":"Juegos","precio":2,"cantidad":4,"broche":true,"medidas":"3.5 × 2 cm","imagen":"","emoji":"","descripcion":"Control de videojuegos, esmalte duro."},
  {"nombre":"Pin Dado","categoria":"Juegos","precio":1.25,"cantidad":0,"broche":true,"medidas":"2 × 2 cm","imagen":"","emoji":"","descripcion":"Dado de juego de mesa."},
  {"nombre":"Pin Televisión","categoria":"Series","precio":2,"cantidad":3,"broche":true,"medidas":"3 × 3 cm","imagen":"","emoji":"","descripcion":"Televisión retro para maratonear."},
  {"nombre":"Pin Palomitas","categoria":"Películas","precio":0.75,"cantidad":7,"broche":true,"medidas":"3 × 2.5 cm","imagen":"","emoji":"","descripcion":"Cubeta de palomitas con cierre de mariposa."},
  {"nombre":"Pin Luna","categoria":"Otros","precio":1.5,"cantidad":8,"broche":true,"medidas":"3 × 2 cm","imagen":"","emoji":"","descripcion":"Luna creciente con detalles dorados."},
  {"nombre":"Figura Hongo","categoria":"Otros","precio":4.5,"cantidad":3,"broche":false,"medidas":"5 cm de alto","imagen":"","emoji":"","descripcion":"Figura pequeña para decorar tu escritorio."}
];
