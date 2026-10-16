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
  {"nombre":"Escuela Xavier de X-Men","categoria":"Películas","precio":2.5,"cantidad":1,"broche":true,"medidas":"4 × 2.3 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/f4207880-85ae-462b-b3a2-b510449181a9.avif","descripcion":"Listo para tu primer día de clases entre mutantes. 🧬"},
  {"nombre":"Hora de Aventura: la pandilla de Ooo","categoria":"Series","precio":2,"cantidad":10,"broche":true,"medidas":"Marceline con bajo: 2.9 × 3.5 cm Pandilla reunida: 3.7 × 3.1 cm Marceline y Dulce Princesa: 3.2 × 2.9 cm Finn y Jake sentados: 3.6 × 3.2 cm Finn, Jake y BMO apilados: 1.8 × 3.3 cm BMO con sombrero café: 2.7 × 3.6 cm BMO con sombrero blanco: 2.4 × 3.3 cm Finn y Jake de aventuras: 3.1 × 3.7 cm BMO con flores: 3.1 × 3.4 cm Finn de pie: 2.8 × 3.6 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/8aa160e8478847978b56cdf7b15ebf79-goods.avif","descripcion":"Con esta pandilla, cualquier día se vuelve una aventura. 🗡️💛"},
  {"nombre":"Hello Kitty y sus cinco encantos","categoria":"Series","precio":8,"cantidad":5,"broche":true,"medidas":"","verMedidas":true,"encargo":true,"imagen":"Fotos/0053833e-1a2c-46de-87bc-795baa9b1c09.avif","descripcion":"Entre lacitos y flores, derrochando ternura a donde vaya. 🎀"},
  {"nombre":"Snoopy en modo Navidad","categoria":"Series","precio":2.5,"cantidad":6,"broche":true,"medidas":"Corona: 3.1 × 3 cm Trineo: 3.2 × 3 cm Saco de regalos: 2.5 × 3 cm Árbol y regalos: 2.9 × 3 cm Árbol con adornos colgantes: 2.9 × 3.3 cm Con pajaritos: 2.3 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/1676d58939114fe7a4e640036d295326-goods.avif","descripcion":"Entre regalos y gorritos, Snoopy ya anda en modo navideño. 🎄🐾"},
  {"nombre":"Cuarteto de Rápidos y Furiosos","categoria":"Películas","precio":2,"cantidad":4,"broche":true,"medidas":"Mazda RX-7: 3.3 × 1.9 cm Toyota Supra: 3.5 × 1.8 cm Mitsubishi Eclipse: 3.7 × 2 cm Nissan Skyline GT-R R34: 3.8 × 1.8 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/fc720990-0c81-4968-90d0-6cb6f46b1e06.avif","descripcion":"Del 1/4 de milla al drift, puro estilo sobre ruedas. 🏎️🔥"},
  {"nombre":"Pack de 3 pines de Spider-Man","categoria":"Películas","precio":2,"cantidad":3,"broche":true,"medidas":"Peter 1: 2.8 × 3.6 cm Peter 2: 4.1 × 3 cm Peter 3: 3.2 × 2.7 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/5bf81a60d411442cb720f9568baddfc6-goods.avif","descripcion":"Tu vecino arácnido de confianza, por triplicado. 🕷️"},
  {"nombre":"Pack de 6 pines de JoJo’s Bizarre Adventure","categoria":"Series","precio":2.25,"cantidad":6,"broche":true,"medidas":"","verMedidas":true,"encargo":true,"imagen":"Fotos/a80eae66a39d47009039242b928632e8-goods.avif","descripcion":"Seis formas de decir: ¿eso es una referencia a JoJo’s? ⭐"},
  {"nombre":"Diario 3 de Gravity Falls","categoria":"Series","precio":2,"cantidad":1,"broche":true,"medidas":"2.3 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/7470710d7deb468db6e5f75384828d81-goods.avif","descripcion":"Los secretos de Gravity Falls al alcance de tu mano. 📖"},
  {"nombre":"Pato","categoria":"Series","precio":2,"cantidad":1,"broche":true,"medidas":"2.3 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/a9eff318fb304dcf8425dd911da3f74a-goods.avif","descripcion":"El cerdito de Mabel, listo para acompañarte a todas partes. 🐷"},
  {"nombre":"Dúo de ajolotes devorahamburguesas","categoria":"Otros","precio":3.5,"cantidad":1,"broche":true,"medidas":"Ajolote izquierdo: 3 × 3.2 cm Ajolote derecho: 3.2 × 3 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/79ddbf43-dcda-4110-a007-0165a7450c38.avif","descripcion":"Compañeros de antojos, devorando hamburguesas. 🍔"},
  {"nombre":"Marceline","categoria":"Series","precio":2,"cantidad":1,"broche":true,"medidas":"3.05 × 2.79 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/sts3awk3n2hnuhtllczo.avif","descripcion":"Flotando chill con su bajo/hacha. 🎸"},
  {"nombre":"Fireboy & Watergirl","categoria":"Juegos","precio":3,"cantidad":1,"broche":true,"medidas":"2.2 × 3.3 cm y 1.9 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/7acd180e60a3485198feaff12e3eee47-goods.avif","descripcion":"Compañeros de aventuras entre trampas y templos. 🔥💧"},
  {"nombre":"Triángulo Rectangulo","categoria":"Otros","precio":2,"cantidad":1,"broche":true,"medidas":"2.8 × 3 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/uxqze3s8bz6f4ijam196.avif","descripcion":"Un triangulito con la fórmula de Pitágoras. 📐"},
  {"nombre":"Vic Vaporub","categoria":"Otros","precio":2.25,"cantidad":1,"broche":true,"medidas":"2.4 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/ed3de3f7b64c4c68a15e0093bd07efe8-goods.avif","descripcion":"Si no sana hoy, sana mañana. ❤️‍🩹"},
  {"nombre":"Frutas del Diablo","categoria":"Anime","precio":5,"cantidad":1,"broche":true,"medidas":"Mera Mera no Mi: 3 × 4.2 cm Gomu Gomu no Mi: 3.1 × 3.8 cm Ope Ope no Mi: 3.1 × 3.9 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/e2814113eec54cb3a102fc22053137ab-goods.avif","descripcion":"Control de videojuegos, esmalte duro."},
  {"nombre":"Going Merry & Thousand Sunny","categoria":"Anime","precio":3.5,"cantidad":1,"broche":true,"medidas":"Going Merry: 3.4 × 3.1 cm Thousand Sunny: 3.4 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/81131f68adfe4a0d95966f52f60c06d9-goods.avif","descripcion":"Navegando juntos hacia la próxima aventura. ⛵🏴‍☠️"},
  {"nombre":"Medusas","categoria":"Series","precio":3,"cantidad":1,"broche":true,"medidas":"2.5 × 2.8 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/499796e2-064d-44e5-8e17-5ac777a9a993.avif","descripcion":"Flotando por los campos de medusas de Fondo de Bikini. 🪼"},
  {"nombre":"Kuromi con Baku","categoria":"Series","precio":2.25,"cantidad":1,"broche":true,"medidas":"2.8 × 3.2 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/4a32d404b27a491da8a3bed923237ad3-goods.avif","descripcion":"Con su lazo negro y Baku entre brazos. 💜"},
  {"nombre":"Chimuelo y Furia Luminosa","categoria":"Películas","precio":2.5,"cantidad":1,"broche":true,"medidas":"4.57 × 3.56 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/21a349ea-6a60-4ca1-b7b5-0de8bb5a754e.avif","descripcion":"Dos dragones, un vuelo juntos. 🐉🖤"},
  {"nombre":"Oasis UK","categoria":"Música","precio":2,"cantidad":1,"broche":true,"medidas":"3.56 × 2.03 cm","verMedidas":true,"encargo":true,"imagen":"Fotos/6562a222-3451-4fcd-a21f-4387c43e2cfa.avif","descripcion":"Oasis con todo el estilo británico. 🇬🇧🎸"}
];
