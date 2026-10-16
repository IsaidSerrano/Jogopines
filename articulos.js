// Datos del catálogo. Se genera solo desde editor.html: no hace falta editarlo a mano.
const AJUSTES = {
  "negocio": "Jogopines",
  "logo": "Fotos/logo.png",
  "lineas": [
    "Pines, llaveros, figuras y más!!",
    "¿Quieres algo para ti? Pídelo con nosotros!!",
    "Pedidos a través de Temu 🟧"
  ],
  "instagram": "https://www.instagram.com/jogopines/",
  "whatsapp": "50766057804",
  "moneda": "$",
  "mostrarMedidas": true,
  "hojaUrl": "",
  "encargo": {
    "activo": true,
    "cargo": 1,
    "modo": "pieza",
    "maximo": 5,
    "tiempo": "20 días",
    "texto": "Este pin está agotado por ahora, pero lo podemos conseguir para ti con un pedido especial."
  },
  "broche": {
    "activo": true,
    "precio": 0.25,
    "cantidad": 150,
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
  {"nombre":"Marceline","categoria":"Series","precio":2,"cantidad":1,"broche":true,"medidas":"3.05 × 2.79 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/d5f75f3c-e1e2-4590-ada0-2d7563e34752.jpg","descripcion":"Flotando chill con su bajo/hacha. 🎸"},
  {"nombre":"Fireboy & Watergirl","categoria":"Juegos","precio":3,"cantidad":1,"broche":true,"medidas":"2.2 × 3.3 cm y 1.9 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/7acd180e60a3485198feaff12e3eee47-goods.jpg","descripcion":"Compañeros de aventuras entre trampas y templos. 🔥💧"},
  {"nombre":"Triángulo Rectangulo","categoria":"Otros","precio":2,"cantidad":1,"broche":true,"medidas":"2.8 × 3 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/039f76c4-95d0-45f4-abed-345893d2f6f9.jpg","descripcion":"Un triangulito con la fórmula de Pitágoras. 📐"},
  {"nombre":"Vic Vaporub","categoria":"Otros","precio":2.25,"cantidad":1,"broche":true,"medidas":"2.4 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/ed3de3f7b64c4c68a15e0093bd07efe8-goods.jpg","descripcion":"Si no sana hoy, sana mañana. ❤️‍🩹"},
  {"nombre":"Frutas del Diablo","categoria":"Anime","precio":5,"cantidad":1,"broche":true,"medidas":"Mera Mera no Mi: 3 × 4.2 cm Gomu Gomu no Mi: 3.1 × 3.8 cm Ope Ope no Mi: 3.1 × 3.9 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/e2814113eec54cb3a102fc22053137ab-goods.jpg","descripcion":"Control de videojuegos, esmalte duro."},
  {"nombre":"Going Merry & Thousand Sunny","categoria":"Anime","precio":3.5,"cantidad":1,"broche":true,"medidas":"Going Merry: 3.4 × 3.1 cm Thousand Sunny: 3.4 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/81131f68adfe4a0d95966f52f60c06d9-goods.jpg","descripcion":"Navegando juntos hacia la próxima aventura. ⛵🏴‍☠️"},
  {"nombre":"Medusas","categoria":"Series","precio":3,"cantidad":1,"broche":true,"medidas":"2.5 × 2.8 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/499796e2-064d-44e5-8e17-5ac777a9a993.jpg","descripcion":"Flotando por los campos de medusas de Fondo de Bikini. 🪼"},
  {"nombre":"Kuromi con Baku","categoria":"Series","precio":2.25,"cantidad":1,"broche":true,"medidas":"2.8 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/4a32d404b27a491da8a3bed923237ad3-goods.jpg","descripcion":"Con su lazo negro y Baku entre brazos. 💜"},
  {"nombre":"Chimuelo y Furia Luminosa","categoria":"Películas","precio":2.5,"cantidad":1,"broche":true,"medidas":"4.57 × 3.56 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/21a349ea-6a60-4ca1-b7b5-0de8bb5a754e.jpg","descripcion":"Dos dragones, un vuelo juntos. 🐉🖤"},
  {"nombre":"Oasis UK","categoria":"Música","precio":2,"cantidad":1,"broche":true,"medidas":"3.56 × 2.03 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/6562a222-3451-4fcd-a21f-4387c43e2cfa.jpg","descripcion":"Oasis con todo el estilo británico. 🇬🇧🎸"}
];
