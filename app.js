// All official schools and schedules for Deportes Jódar
const sportsData = [
  {
    id: "tenis",
    name: "Tenis",
    icon: "🎾",
    facility: "Pistas Oficiales de Tenis, Polideportivo Palomares",
    schedule: "Martes y Jueves: 16:30 - 18:00 (Infantil) | 18:00 - 19:30 (Adultos)",
    ageGroups: ["Infantil (8-14 años)", "Juvenil (15-17 años)", "Adultos (+18 años)"],
    price: "15€/trimestre (Menores de 16 años gratis)",
    description: "Mejora tu juego de pies, técnica de saque e intercambios en nuestras pistas renovadas.",
    extendedDescription: "La Escuela de Tenis de Jódar ofrece entrenamientos estructurados dirigidos por instructores con titulación nacional. Nos enfocamos tanto en el dominio técnico (drive, revés, volea) como en la preparación táctica de partidos y el acondicionamiento cardiovascular específico de deportes de raqueta.",
    requirements: ["Raqueta propia (ofrecemos material de préstamo inicial)", "Zapatillas de deporte cómodas", "Ropa ligera transpirable", "Botella de agua"],
    features: ["Clases dirigidas para iniciación y avanzados", "Participación en torneos intercomunales", "Pistas de superficie reglamentaria", "Soporte técnico individual"]
  },
  {
    id: "padel",
    name: "Pádel",
    icon: "🏸",
    facility: "Pistas de Pádel de Cristal, Complejo San José",
    schedule: "Lunes y Miércoles: 17:00 - 18:30 (Iniciación) | 18:30 - 20:00 (Avanzado)",
    ageGroups: ["Menores (10-14 años)", "Juvenil / Senior (+15 años)"],
    price: "18€/trimestre (Socios jóvenes descuento del 20%)",
    description: "Practica el deporte de moda. Mejora tu agilidad y estrategia en equipo en nuestras canchas de cristal.",
    extendedDescription: "El pádel destaca por ser un deporte de equipo dinámico, social y muy divertido. En las clases profesionales entrenamos el juego de pared, posicionamiento estratégico y golpeos avanzados (bajada de pared, bandeja, remate). Contamos con ligas locales incluidas.",
    requirements: ["Pala de pádel reglamentaria de nivel inicial", "Calzado con suela de espiga/pádel", "Ropa deportiva cómoda"],
    features: ["Aprende jugadas de rebote y táctica de parejas", "Liga interna de Jódar incluida", "Pistas de césped artificial excelentes", "Entrenador dedicado para cada nivel"]
  },
  {
    id: "deportes-adaptados",
    name: "Deportes Adaptados",
    icon: "♿",
    facility: "Pabellón Polideportivo Cubierto de Jódar",
    schedule: "Viernes: 16:30 - 18:30 | Sábados: 10:30 - 12:30",
    ageGroups: ["Infantil Adaptado (6-15 años)", "Adulto Inclusivo (+16 años)"],
    price: "Totalmente subvencionado (100% Gratuito en Jódar)",
    description: "Espacio de juego 100% inclusivo para personas con movilidad reducida o diversidad funcional.",
    extendedDescription: "Garantizar el acceso total al deporte es nuestra prioridad. Ofrecemos adaptaciones en disciplinas como baloncesto en silla de ruedas, atletismo inclusivo, boccia y juegos de equipo asistidos. Nuestro equipo está especializado en la integración, fomentando la sociabilidad y el bienestar físico adaptado.",
    requirements: ["Ganas de aprender y socializar", "Ficha técnica de adaptaciones físicas (facilitada por el centro)", "Acompañante permitido si requiere ayuda extrema"],
    features: ["Monitores titulados en educación física especial", "Material deportivo adaptado e inclusivo", "Instalaciones 100% accesibles y climatizadas", "Inscripción completamente gratuita"]
  },
  {
    id: "atletismo",
    name: "Atletismo",
    icon: "🏃",
    facility: "Pista de Atletismo de Jódar, Crtra. de Úbeda",
    schedule: "Lunes, Miércoles y Viernes: 18:00 - 19:30 (Velocidad y saltos) | 19:30 - 21:00 (Fondo)",
    ageGroups: ["Iniciación (6-11 años)", "Promesa (12-16 años)", "Senior / Adultos (+17 años)"],
    price: "12€/trimestre (Menores de 18 años subvencionados)",
    description: "Descubre la disciplina base del deporte. Entrena velocidad, saltos, lanzamientos y resistencia.",
    extendedDescription: "Domina el arte de la zancada, la respiración y el control aeróbico. Preparamos a nuestros atletas para pruebas de pista de velocidad, carreras populares locales e iniciación a los lanzamientos de peso y salto de longitud.",
    requirements: ["Zapatillas de running con buena amortiguación", "Ropa cómoda muy ligera", "Pulsómetro básico (opcional)"],
    features: ["Pista de atletismo reglamentaria homologada", "Mejora extrema del fondo cardiovascular", "Preparación directa para carreras de Jaén", "Estudio y depuración individual de la zancada"]
  },
  {
    id: "baloncesto",
    name: "Baloncesto",
    icon: "🏀",
    facility: "Pabellón Polideportivo Cubierto de Jódar",
    schedule: "Martes y Jueves: 17:30 - 19:00 (Iniciación) | 19:00 - 21:00 (Junior y Senior)",
    ageGroups: ["Minibasket (6-11 años)", "Infantil/Cadete (12-15 años)", "Junior y Senior (+16 años)"],
    price: "15€/trimestre (Incluye equipación de entrenamiento oficial)",
    description: "Disfruta del juego colectivo, canastas, dribling y competiciones oficiales de Jódar.",
    extendedDescription: "Forma parte del Club de Baloncesto Oficial de Jódar. Enfoque dinámico que enseña pase táctico, tiro en suspensión, defensa de zona e individual, juego de pivots y sobre todo un ambiente de equipo único.",
    requirements: ["Zapatillas de baloncesto de caña media/alta", "Ropa deportiva cómoda", "Ganas de competir y divertirte"],
    features: ["Entrenadores con amplia experiencia autonómica", "Equipación oficial de regalo con tu matrícula", "Partidos oficiales de fin de semana", "Grupos de fomento de valores colectivos"]
  },
  {
    id: "futbol",
    name: "Fútbol",
    icon: "⚽",
    facility: "Campo de Fútbol Francisco Herrera Cueva (Césped Artificial)",
    schedule: "Lunes a Jueves (según grupo): Sesiones entre las 16:30 y las 21:00",
    ageGroups: ["Querubín a Benjamín (4-9 años)", "Alevín a Cadete (10-15 años)", "Juvenil y Senior (+16 años)"],
    price: "20€/trimestre (Descuento familiar para hermanos inscritos)",
    description: "Pásatelo en grande en nuestra prestigiosa escuela oficial de fútbol base.",
    extendedDescription: "La cantera deportiva de Jódar destaca a nivel autonómico. Entrenamos tácticas de ataque, desmarques coordinados, técnica de control de balón, golpeo con empeine, pases largos y escuelas de guardametas dedicadas.",
    requirements: ["Botas de fútbol específicas para césped artificial", "Espinilleras homologadas rígidas", "Ropa deportiva cómoda"],
    features: ["Campo de césped de última generación renovado", "Fisioterapeuta deportivo del club disponible", "Participación directa en liga oficial andaluza", "Compañerismo, esfuerzo y disciplina saludable"]
  }
];

// Persistent states
let currentUser = null;
let enrollments = [];

// Initialize DOM events and states
document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  renderSportsGrid();
  updateUIState();
  setupClickEvents();
  setupSearchAndFilters();
  setupInteractiveMap();
  setupFormSubmissions();
  setupAccordion();
  setupRippleEffects();
  initScrollAnimations();
});

// Setup dynamic high fidelity Apple-inspired ripple touch effects on all interactive elements
function setupRippleEffects() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("button, .category-filter-btn, .ripple-button, a");
    if (!target) return;

    // Don't add to disabled views
    if (target.disabled) return;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "ripple-span";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    // Fast inline styles to prevent position overlaps
    const originalPosition = target.style.position;
    const originalOverflow = target.style.overflow;
    
    if (!target.style.position || target.style.position === 'static') {
      target.style.position = "relative";
    }
    target.style.overflow = "hidden";

    target.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
      // restore if clean-up needed
      if (!originalPosition) target.style.position = "";
      target.style.overflow = originalOverflow || "";
    }, 650);
  });
}

// Normalize strings by converting to lowercase and stripping accents/diacritics
function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Register high-fidelity scroll reveal animations (scrolling down and scrolling up)
function initScrollAnimations() {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.classList.add("scroll-reveal");
  });

  const observerOptions = {
    root: null,
    threshold: 0.05,
    rootMargin: "0px 0px -40px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible");
      } else {
        entry.target.classList.remove("section-visible");
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// Load persistent data from localStorage
function loadLocalStorage() {
  const savedUser = localStorage.getItem('jodar_sport_user');
  const savedEnrollments = localStorage.getItem('jodar_sport_enrollments');

  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      // Pre-fill profile forms
      fillInputsFromUser(currentUser);
    } catch (e) {
      console.error(e);
    }
  }

  if (savedEnrollments) {
    try {
      enrollments = JSON.parse(savedEnrollments);
    } catch (e) {
      console.error(e);
    }
  }
}

// Helper to check DNI or NIE
function validateDocument(docType, docValue) {
  if (docType === 'No_Dispone') return true;
  if (docType === 'Pasaporte') return docValue.trim().length > 3;
  
  const validChars = 'TRWAGMYFPDXBNJZSQVHLCKET';
  const nifRexp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  const nieRexp = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;
  let str = docValue.toString().toUpperCase().trim();

  if (docType === 'DNI' && !nifRexp.test(str)) return false;
  if (docType === 'NIE' && !nieRexp.test(str)) return false;

  const nie = str
      .replace(/^[X]/i, '0')
      .replace(/^[Y]/i, '1')
      .replace(/^[Z]/i, '2');

  const letter = str.substr(-1);
  const charIndex = parseInt(nie.substr(0, 8)) % 23;

  return validChars.charAt(charIndex) === letter;
}

// Pre-fill user inputs helper
function fillInputsFromUser(user) {
  if (!user) return;
  const inputs = {
    "reg-doc-type": user.docType,
    "reg-doc-number": user.documentNumber,
    "reg-name": user.firstName,
    "reg-lastname": user.lastName,
    "reg-email": user.email,
    "reg-phone": user.phone,
    "reg-birthdate": user.birthdate,
    "reg-gender": user.gender,
    "reg-conditions": user.medicalConditions,
    
    // Clothing
    "reg-cloth-shirt": user.clothing?.shirt,
    "reg-cloth-pants": user.clothing?.pants,
    "reg-cloth-tracksuit-top": user.clothing?.tracksuitTop,
    "reg-cloth-tracksuit-bottom": user.clothing?.tracksuitBottom,
  };

  Object.entries(inputs).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val || "";
  });

  // Minor checkbox
  const isMinorCheckbox = document.getElementById("reg-is-minor");
  if (isMinorCheckbox) {
    isMinorCheckbox.checked = !!user.isMinorOrOtherPayer;
    document.getElementById("parent-section").classList.toggle("hidden", !user.isMinorOrOtherPayer);
  }

  // Parent inputs
  if (user.parentData) {
    const parentInputs = {
      "reg-parent-doc-type": user.parentData.docType,
      "reg-parent-doc-number": user.parentData.documentNumber,
      "reg-parent-name": user.parentData.name,
      "reg-parent-email": user.parentData.email,
      "reg-parent-phone": user.parentData.phone
    };
    Object.entries(parentInputs).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el) el.value = val || "";
    });
  }
}

// Update core dynamic UI statuses
function updateUIState() {
  const profileHeaderArea = document.getElementById("profile-header-area");
  const heroRegisterBtn = document.getElementById("hero-register-btn");
  const activeExpedientSection = document.getElementById("active-expedient-section");

  // Update header profile or register button
  if (currentUser) {
    if (heroRegisterBtn) heroRegisterBtn.classList.add("hidden");
    if (profileHeaderArea) {
      const nameStr = currentUser.firstName || currentUser.fullName || "";
      const lastStr = currentUser.lastName ? currentUser.lastName.charAt(0) : (currentUser.fullName ? currentUser.fullName.split(' ')[1]?.charAt(0) || "" : "");
      let initials = (nameStr.charAt(0) + lastStr).toUpperCase().substring(0, 2);
      const docLabel = currentUser.docType === 'No_Dispone' ? 'Menor sin DNI' : `${currentUser.docType || 'DNI'}: ${currentUser.documentNumber || currentUser.dni}`;

      profileHeaderArea.innerHTML = `
        <div class="flex items-center gap-2.5 bg-slate-50 p-1.5 pl-3 rounded-full border border-slate-100">
          <div class="hidden sm:block text-right pr-1">
            <p class="text-xs font-semibold text-slate-800 leading-none">${currentUser.firstName || currentUser.fullName}</p>
            <span class="text-[10px] text-slate-400 font-mono">${docLabel}</span>
          </div>
          <a href="./profile.html" title="Mi Perfil" class="w-8 h-8 rounded-full bg-[#0052cc] hover:bg-opacity-90 transition-opacity text-white font-bold text-xs flex items-center justify-center shadow-xs cursor-pointer">
            ${initials}
          </a>
          <button id="logout-btn" title="Cerrar sesión" class="p-1 px-2.5 hover:bg-rose-50 hover:text-rose-600 rounded-full text-xs font-semibold text-slate-400 transition-all cursor-pointer">
            Salir
          </button>
        </div>
      `;
      // Re-attach log out event
      const logoutBtn = document.getElementById("logout-btn");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
          if (confirm("¿Deseas cerrar la sesión de deportista de Jódar en este navegador? Tus registros guardados e inscripciones seguirán estando disponibles de forma segura en tu historial.")) {
            currentUser = null;
            localStorage.removeItem('jodar_sport_user');
            // reset form values
            resetFormInputs();
            updateUIState();
            showToast("Sesión del atleta cerrada.", "info");
          }
        });
      }
    }
  } else {
    if (heroRegisterBtn) heroRegisterBtn.classList.remove("hidden");
    if (profileHeaderArea) {
      profileHeaderArea.innerHTML = `
        <button id="header-register-btn" class="bg-[#0052cc] text-white hover:opacity-95 px-6 py-2.5 rounded-full text-xs font-bold shadow-xs transition-opacity cursor-pointer">
          Registrarte
        </button>
      `;
      const btn = document.getElementById("header-register-btn");
      if (btn) btn.addEventListener("click", () => openModal("register-modal"));
    }
  }

  // Render physical active enrollments list
  const enrollmentsGrid = document.getElementById("enrollments-list-grid");
  if (enrollments && enrollments.length > 0) {
    activeExpedientSection.classList.remove("hidden");
    if (enrollmentsGrid) {
      enrollmentsGrid.innerHTML = enrollments.map(enroll => {
        const sportObj = sportsData.find(s => s.id === enroll.sportId);
        if (!sportObj) return "";

        return `
          <div class="border border-slate-150 rounded-2xl p-5 bg-white shadow-xs flex flex-col md:flex-row gap-4 justify-between items-start animate-fade-in-scale">
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-[10px] bg-[#f0f7ff] text-[#0052cc] flex items-center justify-center font-display text-2xl shrink-0">
                ${sportObj.icon}
              </div>
              <div>
                <span class="text-[9px] font-mono text-slate-400 font-bold block mb-0.5">${enroll.id}</span>
                <h4 class="font-display font-extrabold text-base text-slate-900 leading-none mb-1">${sportObj.name}</h4>
                <p class="text-xs text-slate-500 mb-2">${sportObj.facility.split(',')[0]}</p>
                
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span class="text-[10px] bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md text-slate-600 font-medium">
                    Cat: ${enroll.category}
                  </span>
                  <span class="text-[10px] bg-blue-50 px-2 py-0.5 rounded-md text-[#0052cc] font-medium">
                    Nivel: ${enroll.skillLevel}
                  </span>
                  <span class="text-[10px] bg-amber-50 px-2 py-0.5 rounded-md text-amber-700 font-medium">
                    Horario: ${enroll.schedulePreference.split('|')[0]}
                  </span>
                </div>
              </div>
            </div>

            <div class="flex md:flex-col justify-between items-end gap-3 pt-3 md:pt-0 w-full md:w-auto border-t md:border-t-0 border-slate-100/60 pl-2">
              <div class="text-left md:text-right">
                <span class="text-[10px] text-slate-400 block">Fecha Registro:</span>
                <span class="text-xs font-mono font-medium text-slate-600">${enroll.enrollmentDate}</span>
              </div>

              <button onclick="window.cancelEnrollment('${enroll.id}')" class="px-3 py-1.5 text-xs text-rose-600 hover:text-white hover:bg-rose-600 border border-rose-100 hover:border-transparent rounded-lg transition-all cursor-pointer">
                Anular Plaza
              </button>
            </div>
          </div>
        `;
      }).join("");
    }
  } else {
    activeExpedientSection.classList.add("hidden");
  }
}

// Global scope enrollment cancellation
window.cancelEnrollment = function(id) {
  const targetEnroll = enrollments.find(item => item.id === id);
  if (!targetEnroll) return;
  const sportObj = sportsData.find(s => s.id === targetEnroll.sportId);
  const sportName = sportObj ? sportObj.name : "el deporte";

  if (confirm(`¿Estás seguro/a de que deseas anular tu inscripción en la escuela de ${sportName}? Liberarás tu plaza para otros vecinos.`)) {
    enrollments = enrollments.filter(item => item.id !== id);
    localStorage.setItem('jodar_sport_enrollments', JSON.stringify(enrollments));
    updateUIState();
    showToast(`Inscripción en ${sportName} anulada correctamente`, "info");
  }
};

function resetFormInputs() {
  const toReset = [
    "reg-dni", "reg-name", "reg-email", "reg-phone", "reg-birthdate", "reg-gender", "reg-conditions",
    "wiz-dni", "wiz-name", "wiz-email", "wiz-phone", "wiz-birthdate", "wiz-gender", "wiz-conditions"
  ];
  toReset.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
}

// Render the primary grid of sports with high-fidelity filtering and formatting
function renderSportsGrid(searchQuery = "", categoryFilter = "all") {
  const container = document.getElementById("sports-cards-container");
  if (!container) return;

  const normQuery = normalizeText(searchQuery);

  const filtered = sportsData.filter(sport => {
    const normName = normalizeText(sport.name);
    const normDesc = normalizeText(sport.description);
    const matchesSearch = normName.includes(normQuery) || normDesc.includes(normQuery);
    
    if (categoryFilter === "young") {
      return matchesSearch && sport.id !== "deportes-adaptados";
    }
    if (categoryFilter === "adapted") {
      return matchesSearch && sport.id === "deportes-adaptados";
    }
    return matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-white rounded-3xl border border-slate-100">
        <svg class="w-12 h-12 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h3 class="font-display font-bold text-lg text-slate-800">No encontramos ningún deporte</h3>
        <p class="text-sm text-slate-500 mt-1 max-w-md mx-auto">Trata de cambiar la búsqueda o el filtro superior para encontrar las opciones deportivas oficiales.</p>
        <button id="reset-filters-btn" class="mt-4 px-4 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all cursor-pointer">
          Restablecer Filtros
        </button>
      </div>
    `;
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        const searchInput = document.getElementById("search-sport-input");
        if (searchInput) searchInput.value = "";
        
        const filterBtns = document.querySelectorAll(".category-filter-btn");
        filterBtns.forEach(btn => {
          if (btn.dataset.category === "all") {
            btn.classList.add("bg-white", "text-slate-900", "shadow-xs");
          } else {
            btn.classList.remove("bg-white", "text-slate-900", "shadow-xs");
          }
        });

        renderSportsGrid("", "all");
      });
    }
    return;
  }

  container.innerHTML = filtered.map((sport, index) => {
    // Beautiful price formatting: extract clean value (e.g. 15€, 18€, Gratis)
    const formattedPrice = sport.id === 'deportes-adaptados' ? 'Gratis' : sport.price.split('(')[0].trim().split('/')[0];

    return `
      <div id="sport-card-${sport.id}" class="apple-card sport-bg-${sport.id} group flex flex-col justify-between overflow-hidden animate-fade-in-up" style="animation-delay: ${index * 80}ms">
        <div class="p-6">
          <div class="flex items-center justify-between mb-5">
            <div class="w-12 h-12 rounded-[10px] bg-[#f0f7ff] text-[#0052cc] flex items-center justify-center font-display text-2xl transition-transform group-hover:scale-105 duration-300">
              ${sport.icon}
            </div>
            <span class="text-[11px] font-mono bg-[#f0f7ff]/90 text-[#0052cc] px-3 py-1 rounded-full font-bold border border-blue-100/30">
              Precio: ${formattedPrice}
            </span>
          </div>

          <h3 class="font-display font-bold text-lg text-slate-900 group-hover:text-[#0052cc] transition-colors mb-2">
            ${sport.name}
          </h3>

          <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-6">
            ${sport.description}
          </p>

          <div class="space-y-2 mb-4 border-t border-slate-50 pt-4">
            <div class="flex items-center gap-2 text-xs text-slate-600">
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span class="truncate text-[11px]" title="${sport.facility}">${sport.facility.split(',')[0]}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-600">
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="truncate text-[11px]">${sport.schedule.split('|')[0]}</span>
            </div>
            <div class="flex items-center gap-2 text-xs text-slate-600">
              <svg class="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <span class="truncate text-[11px]">${sport.ageGroups.join(', ')}</span>
            </div>
          </div>
        </div>

        <div class="px-6 pb-6 pt-2 flex items-center justify-between gap-3">
          <button onclick="window.showSportDetail('${sport.id}')" class="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-950 bg-white hover:bg-slate-50 border border-[#eef0f2] rounded-xl transition-all cursor-pointer">
            Ver Detalle
          </button>
          <button onclick="window.startInscribe('${sport.id}')" class="flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#0052cc] text-white hover:opacity-95 shadow-sm transition-opacity flex items-center justify-center gap-1.5 cursor-pointer">
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
            Inscribirme ahora
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Attach setup map locations and facility image carousel
function setupInteractiveMap() {
  const mapDescBox = document.getElementById("map-description-box");
  const facilityPinsAndButtons = [
    { id: "sanjose", name: "Complejo Deportivo San José", desc: "Complejo Deportivo San José: Situado en Calle Pintor Romero de Torres S/N. Dispone de conserje presencial para reserva de pistas de 16:00 a 22:30." },
    { id: "pabellon", name: "Pabellón Polideportivo Cubierto", desc: "Pabellón Polideportivo Cubierto: Ubicado en Av. de San José S/N. Cuenta con rampa de vestuarios adaptados y climatización parcial de grada." },
    { id: "pistaatletismo", name: "Pista de Atletismo", desc: "Pistas de Atletismo: Ubicada en la zona norte junto a la piscina pública de Jódar. Iluminación nocturna de focos LED activable bajo solicitud local." },
    { id: "herrera", name: "Estadio Francisco Herrera Cueva", desc: "Campo de Fútbol Francisco Herrera Cueva: Remodelado en 2024 con césped artificial premium monofilamento. Aforo de 800 espectadores sentados y vestuarios oficiales de árbitros y jugadores." }
  ];

  // Map of 3 representative premium images for each facility
  const facilityPhotos = {
    sanjose: [
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=1200&q=85", // Padel fields
      "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=1200&q=85", // Tennis courts
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1200&q=85"  // Sports complex general
    ],
    pabellon: [
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&w=1200&q=85", // Indoor basketball & multisports
      "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&w=1200&q=85", // Basketball target hoop
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=85"  // Gym and arena halls
    ],
    pistaatletismo: [
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=85", // Running track lanes
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?auto=format&fit=crop&w=1200&q=85", // Runners start Blocks
      "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=1200&q=85"  // Running tracks in sunset
    ],
    herrera: [
      "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1200&q=85", // Soccer stadium lights
      "https://images.unsplash.com/photo-1518063319789-7217e6706b04?auto=format&fit=crop&w=1200&q=85", // Soccer training fields
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&w=1200&q=85"  // Official stadium grass and ball
    ]
  };

  let activeFacility = "sanjose";
  let activePhotoIndex = 0;

  function updateCarouselUI() {
    const photos = facilityPhotos[activeFacility];
    const currentPhoto = photos[activePhotoIndex];
    
    // Smooth image source replacement with custom keyframe fading
    const imgEl = document.getElementById("carousel-img-element");
    if (imgEl) {
      imgEl.style.opacity = "0.2";
      setTimeout(() => {
        imgEl.src = currentPhoto;
        imgEl.style.opacity = "1";
      }, 120);
    }
    
    // Update Photo Badge metadata tracking text
    const badgeEl = document.getElementById("carousel-photo-badge");
    if (badgeEl) {
      badgeEl.innerText = `Foto ${activePhotoIndex + 1} / 3`;
    }
    
    // Update slide bubble dot indicator classes
    for (let i = 0; i < 3; i++) {
      const dot = document.getElementById(`dot-${i}`);
      if (dot) {
        if (i === activePhotoIndex) {
          dot.className = "carousel-dot w-4 h-2 rounded-full bg-white cursor-pointer transition-all duration-300 shadow-xs";
        } else {
          dot.className = "carousel-dot w-2 h-2 rounded-full bg-white/40 cursor-pointer transition-all duration-300";
        }
      }
    }
  }

  // Bind Carousel Arrow Controls
  const nextBtn = document.getElementById("carousel-next");
  const prevBtn = document.getElementById("carousel-prev");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      activePhotoIndex = (activePhotoIndex + 1) % 3;
      updateCarouselUI();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      activePhotoIndex = (activePhotoIndex - 1 + 3) % 3;
      updateCarouselUI();
    });
  }

  // Bind Carousel dots directly
  for (let i = 0; i < 3; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      dot.addEventListener("click", () => {
        activePhotoIndex = i;
        updateCarouselUI();
      });
    }
  }

  facilityPinsAndButtons.forEach(fac => {
    const listBtn = document.getElementById(`fac-btn-${fac.id}`);

    const handleFacSelect = () => {
      activeFacility = fac.id;
      activePhotoIndex = 0;

      // clear previous highlights
      facilityPinsAndButtons.forEach(f => {
        const item = document.getElementById(`fac-btn-${f.id}`);
        if (item) item.className = "p-4.5 rounded-2xl border transition-all cursor-pointer border-slate-100 bg-white hover:border-slate-200";
      });

      // highlight active selected card in sidebar
      if (listBtn) listBtn.className = "p-4.5 rounded-2xl border transition-all cursor-pointer border-[#0052cc] bg-blue-50/10 shadow-xs";

      // update text description box
      if (mapDescBox) {
        mapDescBox.innerHTML = `
          <svg class="w-5 h-5 text-[#0052cc] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          <span>${fac.desc}</span>
        `;
      }

      // Synchronize image views and active dots
      updateCarouselUI();
    };

    if (listBtn) listBtn.addEventListener("click", handleFacSelect);
  });

  // Pre-select "Complejo Deportivo San José" dynamically on load
  setTimeout(() => {
    const sjBtn = document.getElementById("fac-btn-sanjose");
    if (sjBtn) {
      sjBtn.click();
    }
  }, 100);
}

// Setup basic global modal behaviors
function setupClickEvents() {
  // Modal closers
  const modalClosers = document.querySelectorAll(".close-modal-trigger");
  modalClosers.forEach(closer => {
    closer.addEventListener("click", () => {
      closeAllModals();
    });
  });

  // Background clicking to exit modal
  const modals = document.querySelectorAll(".modal-backdrop-element");
  modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Hero inscription button (smooth scrolls to catalogue)
  const heroInscribeNow = document.getElementById("hero-inscribe-now");
  if (heroInscribeNow) {
    heroInscribeNow.addEventListener("click", (e) => {
      e.preventDefault();
      const catalogue = document.getElementById("sports-catalogue");
      if (catalogue) {
        catalogue.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Register Profile buttons
  const registerTriggers = [
    document.getElementById("btn-hero-crear-perfil"),
    document.getElementById("btn-register-empty-state")
  ];

  registerTriggers.forEach(btn => {
    if (btn) {
      btn.addEventListener("click", () => {
        openModal("register-modal");
      });
    }
  });
}

function openModal(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove("hidden");
    el.classList.add("flex");
    document.body.style.overflow = "hidden";
  }
}

function closeAllModals() {
  const modals = ["register-modal", "enroll-modal", "sport-detail-modal"];
  modals.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add("hidden");
      el.classList.remove("flex");
    }
  });
  document.body.style.overflow = "auto";
}

// Setup searching and category filters
function setupSearchAndFilters() {
  const searchInput = document.getElementById("search-sport-input");
  let activeFilter = "all";

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderSportsGrid(e.target.value, activeFilter);
    });
  }

  const categoryBtns = document.querySelectorAll(".category-filter-btn");
  categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryBtns.forEach(b => b.classList.remove("bg-white", "text-slate-900", "shadow-xs"));
      btn.classList.add("bg-white", "text-slate-900", "shadow-xs");

      activeFilter = btn.dataset.category;
      const searchVal = searchInput ? searchInput.value : "";
      renderSportsGrid(searchVal, activeFilter);
    });
  });
}

// Step logic & dynamic category calculation for Wizard
let wizardActiveSportId = null;
let currentWizardStep = 1;

window.startInscribe = function(sportId) {
  const sport = sportsData.find(s => s.id === sportId);
  if (!sport) return;

  if (!currentUser) {
    showToast("Debes registrar tu ficha primero antes de inscribirte.", "info");
    openModal("register-modal");
    return;
  }

  wizardActiveSportId = sportId;
  const logoHeader = document.getElementById("wizard-sport-logo-header");
  const nameHeader = document.getElementById("wizard-sport-name-header");
  const scheduleSelect = document.getElementById("wiz-enroll-schedule");

  if (logoHeader) logoHeader.innerHTML = sport.icon;
  if (nameHeader) nameHeader.textContent = sport.name;

  // populate schedule dropdown based on sport choices
  if (scheduleSelect) {
    const options = sport.schedule.split('|');
    scheduleSelect.innerHTML = options.map(opt => `<option value="${opt.trim()}">${opt.trim()}</option>`).join("");
  }

  openModal("enroll-modal");
};

function goToWizardStep(step) {
  const step1Block = document.getElementById("wizard-step-1-block");
  const step2Block = document.getElementById("wizard-step-2-block");
  const indicator1 = document.getElementById("wizard-indicator-1");
  const indicator2 = document.getElementById("wizard-indicator-2");

  if (step === 1) {
    step1Block.classList.remove("hidden");
    step2Block.classList.add("hidden");
    indicator1.className = "w-8 h-8 rounded-full bg-[#0052cc] text-white flex items-center justify-center font-bold text-xs";
    indicator2.className = "w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-xs";
  } else {
    step1Block.classList.add("hidden");
    step2Block.classList.remove("hidden");
    indicator1.className = "w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold text-xs";
    indicator2.className = "w-8 h-8 rounded-full bg-[#0052cc] text-white flex items-center justify-center font-bold text-xs";
    
    // Auto estimate category if birthdate is ready
    const birthdateVal = document.getElementById("wiz-birthdate").value;
    const categorySelect = document.getElementById("wiz-enroll-category");
    if (birthdateVal && categorySelect) {
      const year = new Date(birthdateVal).getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - year;

      let estimatedCategory = "Senior";
      if (age < 8) estimatedCategory = "Pre-benjamín / Benjamín";
      else if (age >= 8 && age <= 11) estimatedCategory = "Benjamín / Alevín";
      else if (age >= 12 && age <= 15) estimatedCategory = "Infantil / Cadete";
      else if (age >= 16 && age <= 17) estimatedCategory = "Juvenil (Sub-18)";
      else if (age >= 18 && age <= 39) estimatedCategory = "Senior / Absoluto";
      else estimatedCategory = "Veterano / Master";

      categorySelect.value = estimatedCategory;
    }
  }
}

// Form submissions
function setupFormSubmissions() {
  const docTypeSelect = document.getElementById("reg-doc-type");
  const docNumberInput = document.getElementById("reg-doc-number");

  if (docTypeSelect && docNumberInput) {
    docTypeSelect.addEventListener("change", (e) => {
      if (e.target.value === "No_Dispone") {
        docNumberInput.value = "";
        docNumberInput.disabled = true;
        docNumberInput.classList.add("opacity-50", "cursor-not-allowed");
      } else {
        docNumberInput.disabled = false;
        docNumberInput.classList.remove("opacity-50", "cursor-not-allowed");
      }
    });
  }

  // Minor logic toggle
  const isMinorCheckbox = document.getElementById("reg-is-minor");
  const parentSection = document.getElementById("parent-section");
  const birthdateInput = document.getElementById("reg-birthdate");

  if (isMinorCheckbox && parentSection) {
    isMinorCheckbox.addEventListener("change", (e) => {
      parentSection.classList.toggle("hidden", !e.target.checked);
    });
  }

  if (birthdateInput && isMinorCheckbox) {
    birthdateInput.addEventListener("change", (e) => {
      if (!e.target.value) return;
      const bDate = new Date(e.target.value);
      const diff = Date.now() - bDate.getTime();
      const ageDate = new Date(diff); 
      const age = Math.abs(ageDate.getUTCFullYear() - 1970);
      if (age < 18) {
        isMinorCheckbox.checked = true;
        parentSection.classList.remove("hidden");
      }
    });
  }

  // Copy Self Parent btn
  const copyParentBtn = document.getElementById("btn-copy-self-parent");
  if (copyParentBtn) {
    copyParentBtn.addEventListener("click", () => {
      document.getElementById("reg-parent-doc-type").value = document.getElementById("reg-doc-type").value;
      document.getElementById("reg-parent-doc-number").value = document.getElementById("reg-doc-number").value;
      document.getElementById("reg-parent-name").value = document.getElementById("reg-name").value + " " + document.getElementById("reg-lastname").value;
      document.getElementById("reg-parent-email").value = document.getElementById("reg-email").value;
      document.getElementById("reg-parent-phone").value = document.getElementById("reg-phone").value;
    });
  }

  // Global profile register form
  const registerForm = document.getElementById("profile-register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      
      const docType = document.getElementById("reg-doc-type").value;
      const docNumber = document.getElementById("reg-doc-number").value.toUpperCase().trim();
      const name = document.getElementById("reg-name").value.trim();
      const lastname = document.getElementById("reg-lastname").value.trim();
      const email = document.getElementById("reg-email").value.trim();
      const phone = document.getElementById("reg-phone").value.trim();
      const birthdate = document.getElementById("reg-birthdate").value;
      const gender = document.getElementById("reg-gender").value;
      const conditions = document.getElementById("reg-conditions").value.trim();
      
      const clothShirt = document.getElementById("reg-cloth-shirt").value;
      const clothPants = document.getElementById("reg-cloth-pants").value;
      const tracksuitTop = document.getElementById("reg-cloth-tracksuit-top").value;
      const tracksuitBottom = document.getElementById("reg-cloth-tracksuit-bottom").value;

      if (!validateDocument(docType, docNumber)) {
        showToast("El número de documento no es válido. Compruebe la letra y formato.", "error");
        return;
      }

      if (!name || !lastname || !email || !phone || !birthdate || !gender || !clothShirt || !clothPants) {
        showToast("Por favor complete todos los datos obligatorios marcados con asterisco.", "error");
        return;
      }

      const isMinorOrOther = document.getElementById("reg-is-minor").checked;
      let parentData = null;

      if (isMinorOrOther) {
        const pDocType = document.getElementById("reg-parent-doc-type").value;
        const pDocNumber = document.getElementById("reg-parent-doc-number").value.toUpperCase().trim();
        const pName = document.getElementById("reg-parent-name").value.trim();
        const pEmail = document.getElementById("reg-parent-email").value.trim();
        const pPhone = document.getElementById("reg-parent-phone").value.trim();

        if (!validateDocument(pDocType, pDocNumber)) {
          showToast("El documento del responsable no es válido.", "error");
          return;
        }

        if (!pName || !pEmail || !pPhone) {
          showToast("Revisa los datos obligatorios del tutor / responsable.", "error");
          return;
        }

        parentData = {
          docType: pDocType,
          documentNumber: pDocNumber,
          name: pName,
          email: pEmail,
          phone: pPhone
        };
      }

      currentUser = { 
        docType,
        documentNumber: docNumber,
        dni: docNumber, // Fallback alias
        firstName: name, 
        lastName: lastname,
        fullName: `${name} ${lastname}`, // Fallback alias
        email, 
        phone, 
        birthdate, 
        gender, 
        medicalConditions: conditions,
        clothing: {
          shirt: clothShirt,
          pants: clothPants,
          tracksuitTop: tracksuitTop,
          tracksuitBottom: tracksuitBottom
        },
        isMinorOrOtherPayer: isMinorOrOther,
        parentData
      };

      const submitBtn = registerForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Guardando en el servidor...";
      submitBtn.disabled = true;
      submitBtn.classList.add("opacity-75", "cursor-wait");

      try {
        const urlBackend = "http://127.0.0.1:5001/deportesjodar-5e62f/us-central1/registrarAlta";
        const response = await fetch(urlBackend, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(currentUser)
        });

        let datos;
        try {
          datos = await response.json();
        } catch (err) {
          throw new Error("Error del servidor HTTP " + response.status);
        }

        if (!response.ok) {
          throw new Error(datos.error || "Error del servidor HTTP " + response.status);
        }
        
        if (datos.error) {
          throw new Error(datos.error);
        }

        // Si se guarda correctamente en backend, actualizamos frontend
        localStorage.setItem('jodar_sport_user', JSON.stringify(currentUser));
        // sync wizard fields
        fillInputsFromUser(currentUser);
        closeAllModals();
        updateUIState();
        showToast(datos.mensaje || `¡Perfil guardado! Bienvenido a Deportes Jódar, ${name}.`, "success");

      } catch (error) {
        console.error("Error guardando perfil:", error);
        showToast("Hubo un error al guardar el perfil en el servidor. Asegúrate de que el emulador esté activo.", "error");
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove("opacity-75", "cursor-wait");
      }
    });
  }

  // Final enrollment wizard form submit
  const finalWizardForm = document.getElementById("wizard-final-enroll-form");
  if (finalWizardForm) {
    finalWizardForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!wizardActiveSportId) return;

      const userDni = currentUser ? (currentUser.documentNumber || currentUser.dni) : "UNKNOWN";
      
      // doublecheck duplicate enrollments
      const isDuplicated = enrollments.some(item => item.sportId === wizardActiveSportId && item.userDni === userDni);
      if (isDuplicated) {
        const sportObj = sportsData.find(s => s.id === wizardActiveSportId);
        showToast(`Ya estás inscrito en la escuela de ${sportObj.name}.`, "error");
        closeAllModals();
        return;
      }

      const newEnroll = {
        id: "INS-" + Math.floor(Math.random() * 89999 + 10000),
        sportId: wizardActiveSportId,
        userDni: userDni,
        category: document.getElementById("wiz-enroll-category").value,
        schedulePreference: document.getElementById("wiz-enroll-schedule").value,
        skillLevel: document.getElementById("wiz-enroll-level").value,
        additionalNotes: document.getElementById("wiz-enroll-notes").value.trim(),
        enrollmentDate: new Date().toLocaleDateString('es-ES')
      };

      enrollments.unshift(newEnroll);
      localStorage.setItem('jodar_sport_enrollments', JSON.stringify(enrollments));
      
      closeAllModals();
      updateUIState();
      
      const sportObj = sportsData.find(s => s.id === wizardActiveSportId);
      showToast(`¡Inscripción rápida completada con éxito en ${sportObj.name}!`, "success");
    });
  }
}

// Display full detailed page modal for single sport info
window.showSportDetail = function(sportId) {
  const sport = sportsData.find(s => s.id === sportId);
  if (!sport) return;

  const titleEl = document.getElementById("detail-sport-title");
  const logoEl = document.getElementById("detail-sport-logo");
  const priceEl = document.getElementById("detail-sport-price");
  const scheduleEl = document.getElementById("detail-sport-schedule");
  const ageGroupsEl = document.getElementById("detail-sport-ages");
  const facilityEl = document.getElementById("detail-sport-facility");
  const descEl = document.getElementById("detail-sport-desc");
  const requirementsList = document.getElementById("detail-sport-requirements");
  const featuresList = document.getElementById("detail-sport-features");
  const modalCta = document.getElementById("detail-sport-modal-cta");

  if (titleEl) titleEl.textContent = sport.name;
  if (logoEl) logoEl.textContent = sport.icon;
  if (priceEl) priceEl.textContent = sport.price;
  if (scheduleEl) scheduleEl.textContent = sport.schedule;
  if (ageGroupsEl) ageGroupsEl.textContent = sport.ageGroups.join(", ");
  if (facilityEl) facilityEl.textContent = sport.facility;
  if (descEl) descEl.textContent = sport.extendedDescription;

  if (requirementsList) {
    requirementsList.innerHTML = sport.requirements.map(req => `
      <li class="flex items-start gap-2 text-xs text-slate-600">
        <svg class="w-4 h-4 text-[#0052cc] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
        <span>${req}</span>
      </li>
    `).join("");
  }

  if (featuresList) {
    featuresList.innerHTML = sport.features.map(feat => `
      <li class="flex items-start gap-2 text-xs text-slate-600">
        <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>
        <span>${feat}</span>
      </li>
    `).join("");
  }

  if (modalCta) {
    modalCta.onclick = () => {
      closeAllModals();
      window.startInscribe(sport.id);
    };
  }

  openModal("sport-detail-modal");
};

// Accordion mechanics
function setupAccordion() {
  const headers = document.querySelectorAll(".faq-accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const idx = header.dataset.index;
      const content = document.getElementById(`faq-content-${idx}`);
      const icon = document.getElementById(`faq-icon-${idx}`);

      if (content) {
        if (content.classList.contains("open")) {
          content.classList.remove("open");
          if (icon) icon.style.transform = "rotate(0deg)";
        } else {
          // close others
          headers.forEach(h => {
            const otherIdx = h.dataset.index;
            const otherContent = document.getElementById(`faq-content-${otherIdx}`);
            const otherIcon = document.getElementById(`faq-icon-${otherIdx}`);
            if (otherContent) otherContent.classList.remove("open");
            if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
          });

          content.classList.add("open");
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      }
    });
  });
}

// Global visual toaster builder helper
function showToast(message, type = "success") {
  const existingToast = document.getElementById("toast-banner-frame");
  if (existingToast) existingToast.remove();

  const container = document.createElement("div");
  container.id = "toast-banner-frame";
  container.className = "fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 bg-white border border-slate-100 max-w-sm w-[90vw] animate-fade-in-scale";
  
  let iconHtml = "";
  if (type === 'success') {
    iconHtml = `
      <div class="rounded-full bg-emerald-50 p-2 text-emerald-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
    `;
  } else if (type === 'info') {
    iconHtml = `
      <div class="rounded-full bg-sky-50 p-2 text-sky-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
    `;
  } else {
    iconHtml = `
      <div class="rounded-full bg-rose-50 p-2 text-rose-600">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
      </div>
    `;
  }

  container.innerHTML = `
    ${iconHtml}
    <div class="flex-1">
      <p class="text-sm font-semibold text-slate-850 leading-relaxed">${message}</p>
    </div>
  `;

  document.body.appendChild(container);

  setTimeout(() => {
    container.style.opacity = "0";
    container.style.transform = "translate(-50%, -20px) scale(0.95)";
    container.style.transition = "all 0.3s ease";
    setTimeout(() => container.remove(), 300);
  }, 4000);
}

window.probarConexion = async function probarConexion() {
    const urlBackend = "http://127.0.0.1:4400/deportesjodar-5e62f/us-central1/registrarAlta"; 

    try {
        const respuesta = await fetch(urlBackend, {
            method: "POST"
        });

        const datos = await respuesta.json();
        
        // Muestra el alert con el texto que devuelve el backend ("¡Estoy vivo!")
        alert(datos.mensaje); 

    } catch (error) {
        console.error("Error al conectar al backend local:", error);
        alert("No se pudo conectar con el backend local. Asegúrate de que el emulador de Firebase está corriendo.");
    }
}
