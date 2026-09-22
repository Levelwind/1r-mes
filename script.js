/**
 * 21 TARJETAS PANTALLA COMPLETA
 * Fuente 8-bit descargada localmente para máxima nitidez.
 * Cada tarjeta tiene su texto en el centro para modificar personalmente.
 */

// =============================================================================
// LISTA DE COLORES VIVOS Y CLAROS (EL PRIMERO ROJO)
// =============================================================================
const COLORS = [
  "#d32f2f", // 01. Rojo carmesí vivo (Primera tarjeta)
  "#ff6f00", // 02. Naranja cálido radiante
  "#ffa000", // 03. Ámbar vibrante
  "#fbc02d", // 04. Amarillo sol dorado
  "#689f38", // 05. Verde oliva fresco
  "#388e3c", // 06. Verde esmeralda rico
  "#00897b", // 07. Turquesa profundo
  "#00acc1", // 08. Cian brillante
  "#039be5", // 09. Azul vivo radiante
  "#1976d2", // 10. Azul cobalto
  "#3f51b5", // 11. Índigo eléctrico
  "#5e35b1", // 12. Púrpura profundo
  "#8e24aa", // 13. Violeta intenso
  "#d81b60", // 14. Fucsia / Magenta
  "#e91e63", // 15. Rosa intenso
  "#f4511e", // 16. Coral bermellón
  "#fb8c00", // 17. Naranja mandarina
  "#7cb342", // 18. Verde manzana
  "#00b0ff", // 19. Azul cielo brillante
  "#d500f9", // 20. Magenta neón
  "#aa00ff", // 21. Violeta neón
  "#ff3d00", // 22. Rojo anaranjado neón
  "#00e676"  // 23. Verde menta fluorescente
];

// =============================================================================
// TEXTOS DE CADA CARTA (MODIFICA AQUÍ TUS MENSAJES PERSONALMENTE):
// =============================================================================
const CARD_TEXTS = [
  "1r mes de novios",    // Tarjeta 1 (debajo del corazón)
  "Amo sus labios ", // Tarjeta 2
  "Amo su pelo ", // Tarjeta 3
  "Amo su voz", // Tarjeta 4
  "Amo su forma de hablar", // Tarjeta 5
  "Amo su forma de insultar", // Tarjeta 6
  "Amo su risa de pavo", // Tarjeta 7
  "Amo sus chistes rancios", // Tarjeta 8
  "Amo su forma de pensar", // Tarjeta 9
  "Amo su forma de debatir", // Tarjeta 10
  "Amo su nariz", // Tarjeta 11
  "Amo su cachetes", // Tarjeta 12 
  "Amo cuando se preocupa por mi", // Tarjeta 13
  "Amo como compartimos media neurona", // Tarjeta 14
  "Amo como me haces sentir", // Tarjeta 15
  "Amo como se rie de mis chiste rancios", // Tarjeta 16
  "Amo cuando me dice te quiero me encanta", // Tarjeta 17
  "Amo cuando me dice te amo", // Tarjeta 18
  "Amo todo de usted", // Tarjeta 19
  "Amo lo inteligente que es", // Tarjeta 20
  "Amo lo bien que baila JAJJAJAJAJ", // Tarjeta 21
  "Amo sus pies ", // Tarjeta 22
  "te amare para siempre y si no es para siempre quemo el mundo te amo mucho jeca"  // Tarjeta 23
];

// =============================================================================
// CATÁLOGO DE FLORES DE MINECRAFT
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
  { name: "Flor del Chorus", file: "flores/21_flor_del_chorus_chorus_flower.png" },
  { name: "Pétalos Rosa", file: "flores/21_petalos_rosa_pink_petals.png" },
  { name: "Amapola Silvestre", file: "flores/01_amapola_poppy.png" }
];

// =============================================================================
// SELECCIÓN DE LAS PRIMERAS 18 FLORES PARA EL CONTORNO PERIMETRAL
// =============================================================================
const AVAILABLE_FLOWERS = CARD_FLOWERS.slice(0, 18);

// Genera flores variadas y bien repartidas alrededor de todo el perímetro (sin invadir el centro)
function createCardFlowersLayer(cardIndex) {
  const layer = document.createElement("div");
  layer.className = "card-flowers-layer";

  // 18 sectores perimetrales distribuidos en bordes superior, inferior y esquinas altas/bajas
  // manteniendo la franja media (top 24% a 67%) totalmente libre para que las flores no toquen el texto
  const perimeterZones = [
    // Borde Superior (6 sectores)
    { minTop: 2, maxTop: 8, minLeft: 12, maxLeft: 22 },
    { minTop: 2, maxTop: 8, minLeft: 24, maxLeft: 34 },
    { minTop: 2, maxTop: 8, minLeft: 36, maxLeft: 46 },
    { minTop: 2, maxTop: 8, minLeft: 48, maxLeft: 58 },
    { minTop: 2, maxTop: 8, minLeft: 60, maxLeft: 70 },
    { minTop: 2, maxTop: 8, minLeft: 72, maxLeft: 81 },

    // Borde Izquierdo - Zona Alta (hombro superior)
    { minTop: 11, maxTop: 16, minLeft: 2, maxLeft: 6 },
    { minTop: 17, maxTop: 23, minLeft: 2, maxLeft: 6 },

    // Borde Izquierdo - Zona Baja (cadera inferior)
    { minTop: 67, maxTop: 75, minLeft: 2, maxLeft: 6 },

    // Borde Derecho - Zona Alta (hombro superior)
    { minTop: 11, maxTop: 16, minLeft: 76, maxLeft: 81 },
    { minTop: 17, maxTop: 23, minLeft: 76, maxLeft: 81 },

    // Borde Derecho - Zona Baja (cadera inferior)
    { minTop: 67, maxTop: 75, minLeft: 76, maxLeft: 81 },

    // Borde Inferior (6 sectores)
    { minTop: 78, maxTop: 84, minLeft: 4, maxLeft: 16 },
    { minTop: 78, maxTop: 84, minLeft: 18, maxLeft: 29 },
    { minTop: 78, maxTop: 84, minLeft: 31, maxLeft: 42 },
    { minTop: 78, maxTop: 84, minLeft: 44, maxLeft: 55 },
    { minTop: 78, maxTop: 84, minLeft: 57, maxLeft: 68 },
    { minTop: 78, maxTop: 84, minLeft: 70, maxLeft: 81 }
  ];

  // Barajar las 18 flores para que cada tarjeta tenga un orden completamente variado y aleatorio
  const shuffledFlowers = [...AVAILABLE_FLOWERS].sort(() => Math.random() - 0.5);

  perimeterZones.forEach((zone, idx) => {
    // Tomar flor variada del mazo barajado
    const flower = shuffledFlowers[idx % shuffledFlowers.length];

    // Posición dispersa al azar dentro de su sector
    const top = zone.minTop + Math.random() * (zone.maxTop - zone.minTop);
    const left = zone.minLeft + Math.random() * (zone.maxLeft - zone.minLeft);

    // Rotación orgánica y variada (-30deg a +30deg)
    const rot = -30 + Math.random() * 60;
    // Escala variada para efecto natural
    const scale = 0.82 + Math.random() * 0.35;
    // Parámetros de balanceo y viento aleatorios y sutiles
    const swayX = -2 + Math.random() * 4;
    const swayY = -1.5 + Math.random() * 3;
    const animDelay = Math.random() * 5;
    const animDuration = 3.2 + Math.random() * 2.6;

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

      // 2. Número en la esquina superior izquierda (del 1 al 21, a partir de la 2da tarjeta)
      if (index >= 1 && index <= 21) {
        const cornerNum = document.createElement("span");
        cornerNum.className = "card-corner-number";
        cornerNum.textContent = index;
        card.appendChild(cornerNum);
      }

      // 3. Contenido central según corresponda
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
