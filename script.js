/**
 * 21 TARJETAS PANTALLA COMPLETA
 * Fuente 8-bit descargada localmente para máxima nitidez.
 * Cada tarjeta tiene su texto en el centro para modificar personalmente.
 */

// =============================================================================
// LISTA DE COLORES VIVOS Y CLAROS (EL PRIMERO ROJO)
// =============================================================================
const COLORS = [
  "#bb0000", // 01. Rojo vivo (Primera tarjeta)
  "#FF6D00", // 02. Naranja eléctrico
  "#FFAB00", // 03. Ámbar dorado luminoso
  "#FFD600", // 04. Amarillo sol radiante
  "#76FF03", // 05. Verde lima fluorescente
  "#00E676", // 06. Verde esmeralda vivo
  "#00E5FF", // 07. Turquesa eléctrico
  "#00B0FF", // 08. Azul cielo brillante
  "#2979FF", // 09. Azul cobalto vibrante
  "#536DFE", // 10. Índigo eléctrico
  "#651FFF", // 11. Púrpura ultravioleta
  "#7C4DFF", // 12. Violeta luminoso
  "#D500F9", // 13. Magenta / Fucsia neón
  "#FF4081", // 14. Rosa chicle brillante
  "#FF5252", // 15. Coral vivo intenso
  "#FF9100", // 16. Mandarina brillante
  "#AEEA00", // 17. Lima cítrico claro
  "#1DE9B6", // 18. Aguamarina menta
  "#0091EA", // 19. Azul cian vivo
  "#FF1744", // 20. Rosa carmín brillante
  "#AA00FF"  // 21. Orquídea púrpura viva
];

// =============================================================================
// TEXTOS DE CADA CARTA (MODIFICA AQUÍ TUS MENSAJES PERSONALMENTE):
// =============================================================================
const CARD_TEXTS = [
  "1r mes de novio",    // Tarjeta 1 (debajo del corazón)
  "(texto para poner)", // Tarjeta 2
  "(texto para poner)", // Tarjeta 3
  "(texto para poner)", // Tarjeta 4
  "(texto para poner)", // Tarjeta 5
  "(texto para poner)", // Tarjeta 6
  "(texto para poner)", // Tarjeta 7
  "(texto para poner)", // Tarjeta 8
  "(texto para poner)", // Tarjeta 9
  "(texto para poner)", // Tarjeta 10
  "(texto para poner)", // Tarjeta 11
  "(texto para poner)", // Tarjeta 12
  "(texto para poner)", // Tarjeta 13
  "(texto para poner)", // Tarjeta 14
  "(texto para poner)", // Tarjeta 15
  "(texto para poner)", // Tarjeta 16
  "(texto para poner)", // Tarjeta 17
  "(texto para poner)", // Tarjeta 18
  "(texto para poner)", // Tarjeta 19
  "(texto para poner)", // Tarjeta 20
  "(texto para poner)"  // Tarjeta 21
];

// =============================================================================
// CATÁLOGO DE 21 FLORES DE MINECRAFT (DESCARGADAS EN LA CARPETA 'flores/')
// =============================================================================
const CARD_FLOWERS = [
  { name: "Amapola", file: "flores/01_amapola_poppy.png" },
  { name: "Diente de León", file: "flores/02_diente_de_leon_dandelion.png" },
  { name: "Orquídea Azul", file: "flores/03_orquidea_azul_blue_orchid.png" },
  { name: "Allium", file: "flores/04_allium.png" },
  { name: "Houstonia", file: "flores/05_houstonia_azure_bluet.png" },
  { name: "Tulipán Rojo", file: "flores/06_tulipan_rojo_red_tulip.png" },
  { name: "Tulipán Naranja", file: "flores/07_tulipan_naranja_orange_tulip.png" },
  { name: "Tulipán Blanco", file: "flores/08_tulipan_blanco_white_tulip.png" },
  { name: "Tulipán Rosa", file: "flores/09_tulipan_rosa_pink_tulip.png" },
  { name: "Margarita", file: "flores/10_margarita_oxeye_daisy.png" },
  { name: "Aciano", file: "flores/11_aciano_cornflower.png" },
  { name: "Lirio del Valle", file: "flores/12_lirio_del_valle_lily_of_the_valley.png" },
  { name: "Rosa del Wither", file: "flores/13_rosa_del_wither_wither_rose.png" },
  { name: "Girasol", file: "flores/14_girasol_sunflower.png" },
  { name: "Lila", file: "flores/15_lila_lilac.png" },
  { name: "Rosal", file: "flores/16_rosal_rose_bush.png" },
  { name: "Peonía", file: "flores/17_peonia_peony.png" },
  { name: "Flor de Antorcha", file: "flores/18_flor_de_antorcha_torchflower.png" },
  { name: "Planta Odre", file: "flores/19_planta_odre_pitcher_plant.png" },
  { name: "Flor de Esporas", file: "flores/20_flor_de_esporas_spore_blossom.png" },
  { name: "Flor del Chorus", file: "flores/21_flor_del_chorus_chorus_flower.png" }
];

// =============================================================================
// SELECCIÓN DE LAS PRIMERAS 18 FLORES PARA EL CONTORNO PERIMETRAL
// =============================================================================
const AVAILABLE_FLOWERS = CARD_FLOWERS.slice(0, 18);

// Genera una capa balanceada de flores alrededor de la tarjeta, manteniendo el centro limpio
function createCardFlowersLayer(cardIndex) {
  const layer = document.createElement("div");
  layer.className = "card-flowers-layer";

  // Zonas perimetrales exteriores (bordes y esquinas) para nunca invadir el centro
  const perimeterZones = [
    // Borde Superior
    { minTop: 2, maxTop: 11, minLeft: 4, maxLeft: 24 },
    { minTop: 2, maxTop: 11, minLeft: 28, maxLeft: 48 },
    { minTop: 2, maxTop: 11, minLeft: 52, maxLeft: 72 },
    { minTop: 2, maxTop: 11, minLeft: 76, maxLeft: 92 },

    // Borde Izquierdo
    { minTop: 16, maxTop: 45, minLeft: 2, maxLeft: 12 },
    { minTop: 52, maxTop: 80, minLeft: 2, maxLeft: 12 },

    // Borde Derecho
    { minTop: 16, maxTop: 45, minLeft: 84, maxLeft: 92 },
    { minTop: 52, maxTop: 80, minLeft: 84, maxLeft: 92 },

    // Borde Inferior
    { minTop: 85, maxTop: 94, minLeft: 4, maxLeft: 24 },
    { minTop: 85, maxTop: 94, minLeft: 28, maxLeft: 48 },
    { minTop: 85, maxTop: 94, minLeft: 52, maxLeft: 72 },
    { minTop: 85, maxTop: 94, minLeft: 76, maxLeft: 92 }
  ];

  // Distribuir entre 10 y 12 flores por tarjeta de forma balanceada
  const count = 10 + (cardIndex % 3); // 10 a 12 flores variadas por carta
  const shuffledZones = [...perimeterZones].sort(() => Math.random() - 0.5);
  const selectedZones = shuffledZones.slice(0, count);

  selectedZones.forEach((zone, flowerIdx) => {
    // Escoger flor al azar dentro de las 18 disponibles
    const flower = AVAILABLE_FLOWERS[(cardIndex * 3 + flowerIdx + Math.floor(Math.random() * 5)) % AVAILABLE_FLOWERS.length];

    const top = zone.minTop + Math.random() * (zone.maxTop - zone.minTop);
    const left = zone.minLeft + Math.random() * (zone.maxLeft - zone.minLeft);

    // Rotación orgánica entre -26deg y +26deg
    const rot = -26 + Math.random() * 52;
    // Escala natural entre 0.85 y 1.15
    const scale = 0.85 + Math.random() * 0.3;
    // Desfase de animación suave de viento
    const swayX = -4 + Math.random() * 8;
    const swayY = -3 + Math.random() * 6;
    const animDelay = Math.random() * 4.5;
    const animDuration = 3.6 + Math.random() * 2;

    const img = document.createElement("img");
    img.className = "scattered-flower";
    img.src = flower.file;
    img.alt = flower.name;
    img.style.top = `${top.toFixed(1)}%`;
    img.style.left = `${left.toFixed(1)}%`;
    img.style.setProperty("--rot", `${rot.toFixed(1)}deg`);
    img.style.setProperty("--scale", scale.toFixed(2));
    img.style.setProperty("--sway-x", `${swayX.toFixed(1)}px`);
    img.style.setProperty("--sway-y", `${swayY.toFixed(1)}px`);
    img.style.animationDelay = `-${animDelay.toFixed(1)}s`;
    img.style.animationDuration = `${animDuration.toFixed(1)}s`;

    layer.appendChild(img);
  });

  return layer;
}

class FullscreenDeck {
  constructor() {
    this.deck = document.getElementById("deck");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");

    this.cards = [];
    this.currentIndex = 0;
    this.total = COLORS.length;
    this.isAnimating = false;

    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  init() {
    this.createCards();
    this.updateClasses();
    this.bindEvents();
  }

  createCards() {
    this.deck.innerHTML = "";
    COLORS.forEach((hex, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.id = `card-${index}`;
      card.style.backgroundColor = hex;

      const cardText = CARD_TEXTS[index] || "(texto para poner)";
      
      // 1. Capa de flores dispersas alrededor (primeras 18 flores, centro libre)
      const flowersLayer = createCardFlowersLayer(index);
      card.appendChild(flowersLayer);

      // 2. Contenido central según corresponda
      if (index === 0) {
        // Primera tarjeta: corazón con el 21 en 8-bit negro y texto debajo
        const firstContent = document.createElement("div");
        firstContent.className = "first-card-content";
        firstContent.innerHTML = `
          <div class="heart-container">
            <img src="image-removebg-preview (1).png" alt="Corazón" class="heart-img">
            <span class="heart-number">21</span>
          </div>
          <p class="first-card-caption">${cardText}</p>
        `;
        card.appendChild(firstContent);
      } else {
        // Tarjetas 2 a 21: texto en el puro centro en 8-bit
        const centerContent = document.createElement("div");
        centerContent.className = "card-center-content";
        centerContent.innerHTML = `<p class="card-center-text">${cardText}</p>`;
        card.appendChild(centerContent);
      }

      // Al hacer clic en la tarjeta asomada en el lateral derecho, avanza
      card.addEventListener("click", () => {
        if (card.classList.contains("is-next-1")) {
          this.next();
        }
      });

      this.deck.appendChild(card);
      this.cards.push(card);
    });
  }

  updateClasses() {
    const curr = this.currentIndex;

    this.cards.forEach((card, idx) => {
      card.className = "card";

      // Distancia circular respecto a la tarjeta activa
      let diff = idx - curr;
      if (diff < 0) {
        diff += this.total;
      }

      if (diff === 0) {
        // Tarjeta activa: cubre la pantalla completa
        card.classList.add("is-active");
      } else if (diff === 1) {
        // Primera tarjeta asomada en el lateral derecho
        card.classList.add("is-next-1");
      } else if (diff === 2) {
        // Segunda tarjeta asomada
        card.classList.add("is-next-2");
      } else if (diff === 3) {
        // Tercera tarjeta asomada
        card.classList.add("is-next-3");
      } else if (diff === this.total - 1) {
        // Tarjeta previa que salió por la izquierda
        card.classList.add("is-prev");
      } else {
        // Tarjetas restantes en cola
        card.classList.add("is-far-next");
      }
    });
  }

  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.currentIndex = (this.currentIndex + 1) % this.total;
    this.updateClasses();

    setTimeout(() => {
      this.isAnimating = false;
    }, 450);
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    this.currentIndex = (this.currentIndex - 1 + this.total) % this.total;
    this.updateClasses();

    setTimeout(() => {
      this.isAnimating = false;
    }, 450);
  }

  bindEvents() {
    // Botones laterales
    this.nextBtn.addEventListener("click", () => this.next());
    this.prevBtn.addEventListener("click", () => this.prev());

    // Teclas de flechas
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        this.next();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        this.prev();
      }
    });

    // Gestos táctiles (Swipe)
    window.addEventListener("touchstart", (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    window.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      const diff = this.touchEndX - this.touchStartX;
      if (diff < -50) {
        this.next();
      } else if (diff > 50) {
        this.prev();
      }
    }, { passive: true });
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new FullscreenDeck();
});
