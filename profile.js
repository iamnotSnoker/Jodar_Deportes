const CATEGORY_MAP = [
    { maxAge: 5, name: "Bebé" },
    { maxAge: 7, name: "Prebenjamín" },
    { maxAge: 9, name: "Benjamín" },
    { maxAge: 11, name: "Alevín" },
    { maxAge: 13, name: "Infantil" },
    { maxAge: 15, name: "Cadete" },
    { maxAge: 18, name: "Juvenil" },
    { maxAge: 999, name: "Senior/Absoluto" }
];

document.addEventListener("DOMContentLoaded", () => {
    const savedUser = localStorage.getItem('jodar_sport_user');
    if (!savedUser) {
        window.location.href = './index.html';
        return;
    }

    try {
        const user = JSON.parse(savedUser);
        renderProfile(user);
        setupInteractions();
    } catch (e) {
        console.error(e);
        window.location.href = './index.html';
    }
});

function calculateAge(birthdate) {
    if (!birthdate) return null;
    const birthDateObj = new Date(birthdate);
    const diff = Date.now() - birthDateObj.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function getCategory(age) {
    if (age === null) return "No definida";
    for (const cat of CATEGORY_MAP) {
        if (age <= cat.maxAge) return cat.name;
    }
    return "Desconocida";
}

function renderProfile(user) {
    const initials = user.firstName.charAt(0) + (user.lastName ? user.lastName.charAt(0) : "");
    document.getElementById("profile-initials").innerHTML = initials.toUpperCase();

    const age = calculateAge(user.birthdate);
    const category = getCategory(age);

    let html = `
    <!-- Sección de atleta -->
    <div>
      <h3 class="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4 uppercase tracking-widest">
        Información del Participante
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Nombre</span>
          <p class="text-sm font-semibold text-slate-900">${user.firstName} ${user.lastName || ''}</p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Documento Identidad</span>
          <p class="text-sm font-semibold text-slate-900">${user.docType !== 'No_Dispone' ? (user.documentNumber || 'N/A') : 'Menor / No dispone'}</p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Fecha de Nacimiento</span>
          <p class="text-sm font-semibold text-slate-900">${user.birthdate || 'No facilitada'} <span class="text-xs text-slate-400 font-normal">(${age !== null ? age + ' años' : ''})</span></p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Categoría Asignada</span>
          <div class="inline-block px-2.5 py-1 bg-blue-50 text-[#0052cc] rounded border border-blue-100 font-bold text-xs mt-1">
            ${category}
          </div>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Email</span>
          <p class="text-sm font-semibold text-slate-900">${user.email}</p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Teléfono</span>
          <p class="text-sm font-semibold text-slate-900">${user.phone}</p>
        </div>
        <div class="sm:col-span-2">
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Condiciones Médicas</span>
          <p class="text-sm font-semibold text-slate-900">${user.medicalConditions || 'Ninguna indicada'}</p>
        </div>
      </div>
    </div>
  `;

    html += `
    <!-- Sección de material recreativo -->
    <div>
      <h3 class="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4 uppercase tracking-widest mt-8">
        Material y Tallas de Juego
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6">
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Talla Camiseta</span>
          <p class="text-sm font-semibold text-slate-900">${user.clothing?.shirt || 'N/A'}</p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Talla Pantalón</span>
          <p class="text-sm font-semibold text-slate-900">${user.clothing?.pants || 'N/A'}</p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Chándal Arriba (Opc.)</span>
          <p class="text-sm font-semibold text-slate-900">${user.clothing?.tracksuitTop || 'N/A'}</p>
        </div>
        <div>
          <span class="block text-[10px] text-slate-400 font-mono uppercase mb-0.5">Chándal Abajo (Opc.)</span>
          <p class="text-sm font-semibold text-slate-900">${user.clothing?.tracksuitBottom || 'N/A'}</p>
        </div>
      </div>
    </div>
  `;

    if (user.isMinorOrOtherPayer && user.parentData) {
        html += `
      <!-- Sección datos responsable -->
      <div class="bg-slate-50 border border-slate-100 rounded-2xl p-5 mt-8 relative">
        <span class="absolute top-0 right-4 -translate-y-1/2 bg-amber-100 text-amber-800 text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-widest">Tutor / Pagador</span>
        <h3 class="text-sm font-bold text-slate-800 border-b border-slate-200 pb-2 mb-4 uppercase tracking-widest">
          Datos de la Persona Responsable
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
          <div>
            <span class="block text-[10px] text-slate-500 font-mono uppercase mb-0.5">Nombre Completo</span>
            <p class="text-sm font-semibold text-slate-900">${user.parentData.name}</p>
          </div>
          <div>
            <span class="block text-[10px] text-slate-500 font-mono uppercase mb-0.5">Documento Tutor</span>
            <p class="text-sm font-semibold text-slate-900">${user.parentData.docType} ${user.parentData.documentNumber}</p>
          </div>
          <div>
            <span class="block text-[10px] text-slate-500 font-mono uppercase mb-0.5">Email Contacto</span>
            <p class="text-sm font-semibold text-slate-900">${user.parentData.email}</p>
          </div>
          <div>
            <span class="block text-[10px] text-slate-500 font-mono uppercase mb-0.5">Teléfono Alerta</span>
            <p class="text-sm font-semibold text-slate-900">${user.parentData.phone}</p>
          </div>
        </div>
      </div>
    `;
    }

    document.getElementById("profile-content").innerHTML = html;
}

function setupInteractions() {
    const reqBtn = document.getElementById("btn-request-change");
    const modal = document.getElementById("request-modal");
    const closeBtn = document.getElementById("request-close");
    const subBtn = document.getElementById("request-submit");

    if (reqBtn && modal) {
        reqBtn.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        });
    }

    if (subBtn && modal) {
        subBtn.addEventListener("click", () => {
            const text = document.getElementById("request-text").value;
            if (text.trim().length === 0) {
                alert("Por favor, escribe lo que deseas solicitar.");
                return;
            }
            alert("Solicitud recibida. Secretaría procesará el cambio en unas horas.");
            document.getElementById("request-text").value = "";
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        });
    }
}
