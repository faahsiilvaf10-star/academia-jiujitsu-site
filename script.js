/**
 * ACADEMIA JIU-JITSU — SISTEMA COMPLETO INTERATIVO
 * Matrículas, Assinatura Digital no Celular, Presença Facial,
 * Pagamentos PIX/Cartão, Cobranças WhatsApp e Agendamentos
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAgendamentos();
  initMatriculaWizard();
  initSignaturePad();
  initPaymentModule();
  initPresencaFacial();
  initCobrancasWhatsApp();
});

/* ==========================================================================
   1. NAVEGAÇÃO & ANO ATUAL
   ========================================================================== */
function initNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Bottom Navigation no celular
  document.querySelectorAll('.bottom-nav-item').forEach(item => {
    item.addEventListener('click', function () {
      document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });
}

/* ==========================================================================
   2. AGENDAMENTOS INTELIGENTES EM TEMPO REAL
   ========================================================================== */
const SCHEDULE_DATA = {
  seg: [
    { id: 1, hora: '07:00 - 08:00', turma: 'Adulto — Iniciante', prof: 'Prof. Marcos Souza', vagas: 8, total: 15, tag: 'iniciante' },
    { id: 2, hora: '12:00 - 13:00', turma: 'Treino Tático (No-Gi)', prof: 'Prof. Carlos Silva', vagas: 4, total: 12, tag: 'avancado' },
    { id: 3, hora: '18:00 - 19:00', turma: 'Infantil (5 a 12 anos)', prof: 'Profª. Amanda Lima', vagas: 6, total: 16, tag: 'infantil' },
    { id: 4, hora: '19:30 - 21:00', turma: 'Adulto — Avançado', prof: 'Mestre Rogério', vagas: 3, total: 20, tag: 'avancado' }
  ],
  ter: [
    { id: 5, hora: '07:30 - 08:30', turma: 'Adulto — Todos os Níveis', prof: 'Prof. Carlos Silva', vagas: 10, total: 18, tag: 'iniciante' },
    { id: 6, hora: '17:00 - 18:00', turma: 'Infantil (5 a 12 anos)', prof: 'Profª. Amanda Lima', vagas: 5, total: 16, tag: 'infantil' },
    { id: 7, hora: '18:30 - 19:30', turma: 'Feminino — Defesa Pessoal', prof: 'Profª. Beatriz Santos', vagas: 7, total: 14, tag: 'feminino' },
    { id: 8, hora: '20:00 - 21:30', turma: 'Competição & Sparring', prof: 'Mestre Rogério', vagas: 2, total: 15, tag: 'avancado' }
  ],
  qua: [
    { id: 9, hora: '07:00 - 08:00', turma: 'Adulto — Iniciante', prof: 'Prof. Marcos Souza', vagas: 7, total: 15, tag: 'iniciante' },
    { id: 10, hora: '12:00 - 13:00', turma: 'Treino Tático', prof: 'Prof. Carlos Silva', vagas: 6, total: 12, tag: 'avancado' },
    { id: 11, hora: '18:00 - 19:00', turma: 'Infantil (5 a 12 anos)', prof: 'Profª. Amanda Lima', vagas: 4, total: 16, tag: 'infantil' },
    { id: 12, hora: '19:30 - 21:00', turma: 'Adulto — Avançado', prof: 'Mestre Rogério', vagas: 5, total: 20, tag: 'avancado' }
  ],
  qui: [
    { id: 13, hora: '07:30 - 08:30', turma: 'Adulto — Todos os Níveis', prof: 'Prof. Carlos Silva', vagas: 9, total: 18, tag: 'iniciante' },
    { id: 14, hora: '17:00 - 18:00', turma: 'Infantil — Coordenação', prof: 'Profª. Amanda Lima', vagas: 5, total: 16, tag: 'infantil' },
    { id: 15, hora: '18:30 - 19:30', turma: 'Feminino — Jiu-Jitsu & Fitness', prof: 'Profª. Beatriz Santos', vagas: 6, total: 14, tag: 'feminino' },
    { id: 16, hora: '20:00 - 21:30', turma: 'Adulto — Defesa Pessoal', prof: 'Prof. Marcos Souza', vagas: 4, total: 18, tag: 'iniciante' }
  ],
  sex: [
    { id: 17, hora: '07:00 - 08:00', turma: 'Adulto — Iniciante', prof: 'Prof. Marcos Souza', vagas: 8, total: 15, tag: 'iniciante' },
    { id: 18, hora: '17:00 - 18:00', turma: 'Infantil — Graduação & Jogos', prof: 'Profª. Amanda Lima', vagas: 3, total: 16, tag: 'infantil' },
    { id: 19, hora: '18:30 - 20:00', turma: 'Open Mat (Rola Livre)', prof: 'Equipe Técnica', vagas: 12, total: 25, tag: 'avancado' }
  ],
  sab: [
    { id: 20, hora: '09:00 - 10:30', turma: 'Aulão Geral & Família', prof: 'Mestre Rogério & Equipe', vagas: 14, total: 30, tag: 'iniciante' },
    { id: 21, hora: '11:00 - 12:30', turma: 'Treino de Competição', prof: 'Mestre Rogério', vagas: 6, total: 16, tag: 'avancado' }
  ]
};

function initAgendamentos() {
  const dayButtons = document.querySelectorAll('.day-btn');
  const classContainer = document.querySelector('#classListContainer');
  const filterSelect = document.querySelector('#classFilterSelect');

  let currentDay = 'seg';
  let currentFilter = 'all';

  function renderClasses() {
    if (!classContainer) return;
    const classes = SCHEDULE_DATA[currentDay] || [];
    const filtered = classes.filter(c => currentFilter === 'all' || c.tag === currentFilter);

    if (filtered.length === 0) {
      classContainer.innerHTML = `
        <div class="empty-classes">
          <p>Nenhuma aula encontrada para este filtro no dia selecionado.</p>
        </div>
      `;
      return;
    }

    classContainer.innerHTML = filtered.map(c => {
      const percent = Math.round(((c.total - c.vagas) / c.total) * 100);
      const isFew = c.vagas <= 4;
      return `
        <div class="schedule-card" data-id="${c.id}">
          <div class="sc-header">
            <span class="sc-time">${c.hora}</span>
            <span class="sc-badge ${isFew ? 'badge-urgent' : 'badge-normal'}">
              ${c.vagas > 0 ? `${c.vagas} vagas restantes` : 'Turma Lotada'}
            </span>
          </div>
          <h4 class="sc-title">${c.turma}</h4>
          <p class="sc-prof">🥋 ${c.prof}</p>
          <div class="sc-progress-wrap">
            <div class="sc-progress-bar" style="width: ${percent}%;"></div>
          </div>
          <div class="sc-footer">
            <span class="sc-occ">${c.total - c.vagas}/${c.total} ocupadas</span>
            <button class="btn btn-yellow sc-btn" onclick="openAgendamentoModal('${c.turma}', '${c.hora}', '${c.prof}', ${c.id})">
              Reservar Vaga →
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  dayButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      dayButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDay = btn.dataset.day;
      renderClasses();
    });
  });

  if (filterSelect) {
    filterSelect.addEventListener('change', (e) => {
      currentFilter = e.target.value;
      renderClasses();
    });
  }

  renderClasses();
}

window.openAgendamentoModal = function (turma, hora, prof, id) {
  const modal = document.querySelector('#modalAgendamento');
  if (!modal) return;
  document.querySelector('#modalTurmaNome').textContent = turma;
  document.querySelector('#modalTurmaHorario').textContent = hora;
  document.querySelector('#modalTurmaProf').textContent = prof;
  document.querySelector('#modalClassId').value = id;
  modal.classList.add('active');
};

window.closeAgendamentoModal = function () {
  const modal = document.querySelector('#modalAgendamento');
  if (modal) modal.classList.remove('active');
};

window.handleConfirmAgendamento = function (e) {
  e.preventDefault();
  const form = e.target;
  const nome = form.nome.value.trim();
  const zap = form.whatsapp.value.trim();
  const tipo = form.tipo.value;
  const turma = document.querySelector('#modalTurmaNome').textContent;
  const horario = document.querySelector('#modalTurmaHorario').textContent;
  const prof = document.querySelector('#modalTurmaProf').textContent;

  // Reduz 1 vaga
  const classId = parseInt(document.querySelector('#modalClassId').value);
  for (let day in SCHEDULE_DATA) {
    const found = SCHEDULE_DATA[day].find(c => c.id === classId);
    if (found && found.vagas > 0) {
      found.vagas--;
      break;
    }
  }

  const successBox = document.querySelector('#agendamentoSuccess');
  const formBox = document.querySelector('#agendamentoFormBody');
  if (successBox && formBox) {
    formBox.style.display = 'none';
    successBox.style.display = 'block';
    document.querySelector('#agendamentoConfNome').textContent = nome;
    document.querySelector('#agendamentoConfTurma').textContent = turma;
    document.querySelector('#agendamentoConfHorario').textContent = horario;

    // Link WhatsApp
    const msg = `🥋 *CONFIRMAÇÃO DE AGENDAMENTO — ACADEMIA JIU-JITSU*\n\n` +
      `Olá! Gostaria de confirmar meu agendamento:\n` +
      `• *Aluno(a):* ${nome}\n` +
      `• *Turma:* ${turma}\n` +
      `• *Horário:* ${horario}\n` +
      `• *Professor:* ${prof}\n` +
      `• *Tipo:* ${tipo === 'experimental' ? 'Aula Experimental Gratuita' : 'Aluno Regular'}\n\n` +
      `Agradeço e nos vemos no tatame!`;
    const zapUrl = `https://wa.me/5591999999999?text=${encodeURIComponent(msg)}`;
    document.querySelector('#btnZapAgendamento').href = zapUrl;
  }
};

window.resetAgendamentoForm = function () {
  closeAgendamentoModal();
  setTimeout(() => {
    const successBox = document.querySelector('#agendamentoSuccess');
    const formBox = document.querySelector('#agendamentoFormBody');
    if (successBox && formBox) {
      formBox.style.display = 'block';
      successBox.style.display = 'none';
    }
    const form = document.querySelector('#formModalAgendar');
    if (form) form.reset();
  }, 300);
};

/* ==========================================================================
   3. MATRÍCULAS 100% ONLINE — STEPPER MULTI-ETAPAS
   ========================================================================== */
const PLANOS = {
  infantil: { nome: 'Infantil (5 a 12 anos)', mensal: 99, anual: 84 },
  iniciante: { nome: 'Adulto — Iniciante', mensal: 129, anual: 109 },
  avancado: { nome: 'Adulto — Avançado', mensal: 149, anual: 126 },
  feminino: { nome: 'Feminino', mensal: 119, anual: 99 }
};

let matriculaState = {
  planoKey: 'iniciante',
  periodo: 'mensal', // 'mensal' ou 'anual'
  valor: 129,
  aluno: {
    nome: '',
    cpf: '',
    nascimento: '',
    whatsapp: '',
    email: '',
    emergencia: '',
    faixa: 'Branca'
  },
  assinaturaUrl: null,
  contratoHash: null,
  pagamentoMetodo: 'pix',
  pagamentoStatus: 'pendente'
};

function initMatriculaWizard() {
  const planCards = document.querySelectorAll('.plano-select-card');
  const periodoRadios = document.querySelectorAll('input[name="periodoPlano"]');

  function updatePlanSelection() {
    const info = PLANOS[matriculaState.planoKey];
    matriculaState.valor = matriculaState.periodo === 'anual' ? info.anual : info.mensal;

    document.querySelectorAll('.valor-plano-dinamico').forEach(el => {
      el.textContent = `R$ ${matriculaState.valor}/mês`;
    });
    document.querySelectorAll('.nome-plano-dinamico').forEach(el => {
      el.textContent = `${info.nome} (${matriculaState.periodo.toUpperCase()})`;
    });

    // Atualiza resumo
    const resPlano = document.querySelector('#resumoPlanoNome');
    const resValor = document.querySelector('#resumoPlanoValor');
    if (resPlano) resPlano.textContent = info.nome;
    if (resValor) resValor.textContent = `R$ ${matriculaState.valor},00 / mês`;

    // Atualiza valor no PIX
    const pixVal = document.querySelector('#pixValorDisplay');
    if (pixVal) pixVal.textContent = `R$ ${matriculaState.valor},00`;

    // Atualiza parcelas cartão
    updateCardInstallments(matriculaState.valor);
  }

  planCards.forEach(card => {
    card.addEventListener('click', () => {
      planCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      matriculaState.planoKey = card.dataset.plano;
      updatePlanSelection();
    });
  });

  periodoRadios.forEach(r => {
    r.addEventListener('change', (e) => {
      matriculaState.periodo = e.target.value;
      updatePlanSelection();
    });
  });

  updatePlanSelection();
}

window.goToWizardStep = function (stepNumber) {
  // Validações prévias
  if (stepNumber === 3) {
    const f = document.querySelector('#formDadosAluno');
    if (f && !f.checkValidity()) {
      f.reportValidity();
      return;
    }
    // Salva dados
    matriculaState.aluno.nome = document.querySelector('#matNome').value.trim();
    matriculaState.aluno.cpf = document.querySelector('#matCpf').value.trim();
    matriculaState.aluno.whatsapp = document.querySelector('#matZap').value.trim();
    matriculaState.aluno.email = document.querySelector('#matEmail').value.trim();
    matriculaState.aluno.nascimento = document.querySelector('#matNasc').value;
    matriculaState.aluno.faixa = document.querySelector('#matFaixa').value;

    // Atualiza dados no contrato
    document.querySelectorAll('.contrato-nome-aluno').forEach(el => el.textContent = matriculaState.aluno.nome);
    document.querySelectorAll('.contrato-cpf-aluno').forEach(el => el.textContent = matriculaState.aluno.cpf);
    document.querySelectorAll('.contrato-data-hoje').forEach(el => el.textContent = new Date().toLocaleDateString('pt-BR'));
  }

  if (stepNumber === 4) {
    if (!matriculaState.assinaturaUrl) {
      alert('Por favor, faça sua assinatura na tela antes de continuar.');
      return;
    }
  }

  // Troca de passo visual
  document.querySelectorAll('.wizard-step-content').forEach(s => s.classList.remove('active'));
  const target = document.querySelector(`#wizardStep${stepNumber}`);
  if (target) target.classList.add('active');

  // Atualiza indicadores do stepper
  document.querySelectorAll('.step-indicator').forEach(ind => {
    const step = parseInt(ind.dataset.step);
    ind.classList.remove('active', 'completed');
    if (step === stepNumber) ind.classList.add('active');
    else if (step < stepNumber) ind.classList.add('completed');
  });

  // Scroll suave para o início da matrícula
  const section = document.querySelector('#matricula-fluxo');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/* ==========================================================================
   4. ASSINATURA DIGITAL NO CELULAR (CANVAS TOUCH/STYLUS/MOUSE)
   ========================================================================== */
let sigCanvas, sigCtx, isDrawing = false;

function initSignaturePad() {
  sigCanvas = document.querySelector('#signatureCanvas');
  if (!sigCanvas) return;
  sigCtx = sigCanvas.getContext('2d');

  function resizeCanvas() {
    const rect = sigCanvas.parentElement.getBoundingClientRect();
    const width = Math.min(rect.width - 20, 600);
    const height = 180;
    const dpr = window.devicePixelRatio || 1;

    sigCanvas.width = width * dpr;
    sigCanvas.height = height * dpr;
    sigCanvas.style.width = width + 'px';
    sigCanvas.style.height = height + 'px';

    sigCtx.scale(dpr, dpr);
    sigCtx.strokeStyle = '#ffc400';
    sigCtx.lineWidth = 2.8;
    sigCtx.lineCap = 'round';
    sigCtx.lineJoin = 'round';
  }

  window.addEventListener('resize', resizeCanvas);
  setTimeout(resizeCanvas, 300);

  // Posição no canvas
  function getPos(e) {
    const rect = sigCanvas.getBoundingClientRect();
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  // Eventos Mouse
  sigCanvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const p = getPos(e);
    sigCtx.beginPath();
    sigCtx.moveTo(p.x, p.y);
  });

  sigCanvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    const p = getPos(e);
    sigCtx.lineTo(p.x, p.y);
    sigCtx.stroke();
  });

  window.addEventListener('mouseup', () => {
    if (isDrawing) {
      isDrawing = false;
      matriculaState.assinaturaUrl = sigCanvas.toDataURL('image/png');
      updateSignatureStamp();
    }
  });

  // Eventos Touch no Celular (previne scroll da página durante a assinatura)
  sigCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    isDrawing = true;
    const p = getPos(e);
    sigCtx.beginPath();
    sigCtx.moveTo(p.x, p.y);
  }, { passive: false });

  sigCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const p = getPos(e);
    sigCtx.lineTo(p.x, p.y);
    sigCtx.stroke();
  }, { passive: false });

  sigCanvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    if (isDrawing) {
      isDrawing = false;
      matriculaState.assinaturaUrl = sigCanvas.toDataURL('image/png');
      updateSignatureStamp();
    }
  }, { passive: false });
}

window.clearSignature = function () {
  if (!sigCanvas || !sigCtx) return;
  const dpr = window.devicePixelRatio || 1;
  sigCtx.clearRect(0, 0, sigCanvas.width / dpr, sigCanvas.height / dpr);
  matriculaState.assinaturaUrl = null;
  matriculaState.contratoHash = null;
  const stamp = document.querySelector('#signatureStampBox');
  if (stamp) stamp.style.display = 'none';
};

function updateSignatureStamp() {
  const stamp = document.querySelector('#signatureStampBox');
  if (!stamp) return;

  // Gera hash e data/hora do certificado digital
  const now = new Date();
  const rawHash = Math.random().toString(36).substring(2) + Date.now().toString(36) + 'jiujitsu-sign';
  matriculaState.contratoHash = 'SHA256:' + rawHash.toUpperCase().padEnd(32, 'X');

  document.querySelector('#stampDataHora').textContent = now.toLocaleString('pt-BR');
  document.querySelector('#stampHash').textContent = matriculaState.contratoHash;
  stamp.style.display = 'flex';
}

/* ==========================================================================
   5. PAGAMENTO AUTOMÁTICO (PIX COM QR CODE + CARTÃO DÉBITO/CRÉDITO 3D)
   ========================================================================== */
function initPaymentModule() {
  // Tabs PIX vs Cartão
  const tabBtns = document.querySelectorAll('.pay-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.tab;
      document.querySelectorAll('.pay-tab-content').forEach(c => c.classList.remove('active'));
      const activeContent = document.querySelector(`#payContent${target}`);
      if (activeContent) activeContent.classList.add('active');
      matriculaState.pagamentoMetodo = target.toLowerCase();
    });
  });

  // Contador regressivo do PIX (15 minutos)
  startPixCountdown(15 * 60);

  // Cartão 3D Interativo
  initCreditCardVisuals();
}

let pixTimerInterval = null;
function startPixCountdown(durationSeconds) {
  let timer = durationSeconds;
  const display = document.querySelector('#pixTimerText');
  if (!display) return;

  if (pixTimerInterval) clearInterval(pixTimerInterval);

  pixTimerInterval = setInterval(() => {
    const minutes = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);

    const mStr = minutes < 10 ? '0' + minutes : minutes;
    const sStr = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = `${mStr}:${sStr}`;

    if (--timer < 0) {
      clearInterval(pixTimerInterval);
      display.textContent = 'Expirado';
    }
  }, 1000);
}

window.copyPixCode = function () {
  const code = document.querySelector('#pixCopiaColaInput').value;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector('#btnCopyPix');
    const origText = btn.innerHTML;
    btn.innerHTML = '✔ Código Copiado!';
    btn.style.backgroundColor = '#25d366';
    setTimeout(() => {
      btn.innerHTML = origText;
      btn.style.backgroundColor = '';
    }, 2500);
  });
};

function initCreditCardVisuals() {
  const numInput = document.querySelector('#ccNumber');
  const nameInput = document.querySelector('#ccName');
  const expInput = document.querySelector('#ccExp');
  const cvvInput = document.querySelector('#ccCvv');
  const cardElement = document.querySelector('#visualCreditCard');

  if (!cardElement) return;

  if (numInput) {
    numInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 16);
      v = v.replace(/(\d{4})/g, '$1 ').trim();
      e.target.value = v;
      document.querySelector('#cardDisplayNumber').textContent = v || '•••• •••• •••• ••••';

      // Detecta bandeira
      const brandLogo = document.querySelector('#cardBrandLogo');
      if (v.startsWith('4')) {
        brandLogo.textContent = 'VISA';
      } else if (v.startsWith('5')) {
        brandLogo.textContent = 'MC';
      } else {
        brandLogo.textContent = 'ELO';
      }
    });
  }

  if (nameInput) {
    nameInput.addEventListener('input', (e) => {
      const v = e.target.value.toUpperCase();
      document.querySelector('#cardDisplayName').textContent = v || 'NOME DO ALUNO';
    });
  }

  if (expInput) {
    expInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (v.length >= 2) {
        v = v.substring(0, 2) + '/' + v.substring(2);
      }
      e.target.value = v;
      document.querySelector('#cardDisplayExp').textContent = v || 'MM/AA';
    });
  }

  if (cvvInput) {
    // Efeito flip 3D quando foca no CVV
    cvvInput.addEventListener('focus', () => {
      cardElement.classList.add('flipped');
    });
    cvvInput.addEventListener('blur', () => {
      cardElement.classList.remove('flipped');
    });
    cvvInput.addEventListener('input', (e) => {
      const v = e.target.value.replace(/\D/g, '').substring(0, 4);
      e.target.value = v;
      document.querySelector('#cardDisplayCvv').textContent = v || '•••';
    });
  }
}

function updateCardInstallments(valorMensal) {
  const sel = document.querySelector('#ccInstallments');
  if (!sel) return;
  sel.innerHTML = `
    <option value="1">1x de R$ ${valorMensal},00 à vista (sem juros)</option>
    <option value="2">2x de R$ ${(valorMensal / 2).toFixed(2)} sem juros</option>
    <option value="3">3x de R$ ${(valorMensal / 3).toFixed(2)} sem juros</option>
    <option value="6">6x de R$ ${(valorMensal / 6).toFixed(2)} sem juros</option>
    <option value="12">12x de R$ ${(valorMensal / 12).toFixed(2)} sem juros</option>
  `;
}

// Simulação de confirmação de pagamento
window.simularConfirmacaoPagamento = function (metodo) {
  matriculaState.pagamentoStatus = 'pago';

  // Toca som de vitória
  playChimeTone(659.25, 0.25); // E5

  goToWizardStep(5);

  // Preenche carteirinha
  document.querySelector('#carteirinhaNome').textContent = matriculaState.aluno.nome || 'Aluno Cadastrado';
  document.querySelector('#carteirinhaFaixa').textContent = `Faixa ${matriculaState.aluno.faixa || 'Branca'}`;
  document.querySelector('#carteirinhaTurma').textContent = PLANOS[matriculaState.planoKey].nome;
  document.querySelector('#carteirinhaStatus').textContent = 'MATRÍCULA ATIVA';
  document.querySelector('#carteirinhaHash').textContent = matriculaState.contratoHash || 'AUTENTICADO VIA PIX';

  // Envia confirmação via WhatsApp
  const zapMsg = `🥋 *MATRÍCULA CONFIRMADA — ACADEMIA JIU-JITSU*\n\n` +
    `Parabéns, *${matriculaState.aluno.nome}*!\n` +
    `Sua matrícula na turma *${PLANOS[matriculaState.planoKey].nome}* foi confirmada com sucesso!\n\n` +
    `• *Assinatura Digital:* Concluída e autenticada\n` +
    `• *Forma de Pagamento:* ${metodo.toUpperCase()}\n` +
    `• *Próximo passo:* Venha fazer seu primeiro treino!\n\n` +
    `Oss! Seja bem-vindo à nossa família!`;

  const btnZap = document.querySelector('#btnZapMatriculaConf');
  if (btnZap) {
    btnZap.href = `https://wa.me/5591999999999?text=${encodeURIComponent(zapMsg)}`;
  }
};

/* ==========================================================================
   6. PRESENÇA FACIAL NO TATAME (WEBCAM + BIOMETRIA + AUDIO)
   ========================================================================== */
let videoStream = null;
const ATTENDANCE_LOG_KEY = 'jiujitsu_attendance_log';

function initPresencaFacial() {
  loadAttendanceLog();
}

window.startFacialCamera = async function () {
  const video = document.querySelector('#facialVideo');
  const overlay = document.querySelector('#facialOverlay');
  const btnStart = document.querySelector('#btnStartCamera');
  const btnScan = document.querySelector('#btnScanFace');

  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user',
        width: { ideal: 640 },
        height: { ideal: 480 }
      },
      audio: false
    });
    video.srcObject = videoStream;
    video.style.display = 'block';
    if (overlay) overlay.classList.add('scanning');
    if (btnStart) btnStart.style.display = 'none';
    if (btnScan) btnScan.style.display = 'inline-flex';

    document.querySelector('#facialStatusMsg').textContent = 'Câmera ativa. Posicione o rosto no círculo central...';
  } catch (err) {
    console.warn('Erro ao acessar webcam:', err);
    alert('Não foi possível abrir a câmera diretamente. Você pode simular o escaneamento facial com a simulação biométrica interativa!');
    simularCameraFallback();
  }
};

function simularCameraFallback() {
  const video = document.querySelector('#facialVideo');
  const overlay = document.querySelector('#facialOverlay');
  const btnStart = document.querySelector('#btnStartCamera');
  const btnScan = document.querySelector('#btnScanFace');

  if (video) video.style.display = 'none';
  if (overlay) overlay.classList.add('scanning');
  if (btnStart) btnStart.style.display = 'none';
  if (btnScan) btnScan.style.display = 'inline-flex';

  document.querySelector('#facialStatusMsg').textContent = 'Modo Biométrico Ativo. Clique em "Confirmar Presença Facial".';
}

window.captureAndScanFace = function () {
  const statusMsg = document.querySelector('#facialStatusMsg');
  const scannerLine = document.querySelector('#scannerLaser');
  if (scannerLine) scannerLine.classList.add('active-laser');

  statusMsg.innerHTML = '<span class="loading-spin">⏳</span> Mapeando pontos biométricos (3D Face Mesh)...';

  // Simula análise neural de 1.6 segundos
  setTimeout(() => {
    if (scannerLine) scannerLine.classList.remove('active-laser');

    // Toca som tradicional de sino de academia / gongo marcial via Web Audio API
    playMartialGong();

    // Sorteia aluno para o simulador ou usa aluno matriculado
    const mockAlunos = [
      { nome: matriculaState.aluno.nome || 'Carlos Silva', faixa: 'Azul (2º Grau)', turma: 'Adulto — Iniciante', presencas: 28, meta: 30 },
      { nome: 'Mariana Costa', faixa: 'Branca (3º Grau)', turma: 'Feminino', presencas: 19, meta: 20 },
      { nome: 'Pedro Henrique', faixa: 'Amarela', turma: 'Infantil', presencas: 14, meta: 15 },
      { nome: 'Lucas Mendes', faixa: 'Roxa', turma: 'Adulto — Avançado', presencas: 42, meta: 50 }
    ];
    const aluno = mockAlunos[Math.floor(Math.random() * mockAlunos.length)];
    aluno.presencas = Math.min(aluno.presencas + 1, aluno.meta);

    // Exibe card de sucesso
    const resultBox = document.querySelector('#facialResultModal');
    if (resultBox) {
      document.querySelector('#frAlunoNome').textContent = aluno.nome;
      document.querySelector('#frAlunoFaixa').textContent = aluno.faixa;
      document.querySelector('#frAlunoTurma').textContent = aluno.turma;
      document.querySelector('#frAlunoDataHora').textContent = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      const perc = Math.round((aluno.presencas / aluno.meta) * 100);
      document.querySelector('#frAlunoProgresso').style.width = perc + '%';
      document.querySelector('#frAlunoProgressoTexto').textContent = `${aluno.presencas}/${aluno.meta} treinos para o próximo grau (${perc}%)`;

      resultBox.classList.add('active');
    }

    // Salva no log
    saveAttendanceEntry({
      nome: aluno.nome,
      faixa: aluno.faixa,
      turma: aluno.turma,
      horario: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      tipo: 'Reconhecimento Facial'
    });

    statusMsg.innerHTML = '✔ <strong>Presença confirmada no Tatame!</strong> Bom treino!';
  }, 1600);
};

window.closeFacialResult = function () {
  const resultBox = document.querySelector('#facialResultModal');
  if (resultBox) resultBox.classList.remove('active');
  document.querySelector('#facialStatusMsg').textContent = 'Pronto para o próximo aluno...';
};

function saveAttendanceEntry(entry) {
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem(ATTENDANCE_LOG_KEY)) || [];
  } catch (e) { list = []; }
  list.unshift(entry);
  if (list.length > 8) list.pop();
  localStorage.setItem(ATTENDANCE_LOG_KEY, JSON.stringify(list));
  loadAttendanceLog();
}

function loadAttendanceLog() {
  const container = document.querySelector('#attendanceHistoryList');
  if (!container) return;

  let list = [];
  try {
    list = JSON.parse(localStorage.getItem(ATTENDANCE_LOG_KEY)) || [];
  } catch (e) { list = []; }

  if (list.length === 0) {
    // Alunos padrão para demonstração inicial
    list = [
      { nome: 'Gabriel Oliveira', faixa: 'Faixa Azul', turma: 'Adulto — Iniciante', horario: '07:05', tipo: 'Facial' },
      { nome: 'Juliana Ferreira', faixa: 'Faixa Branca', turma: 'Feminino', horario: '07:02', tipo: 'Facial' }
    ];
  }

  container.innerHTML = list.map(item => `
    <div class="attendance-item">
      <div class="att-avatar">🥋</div>
      <div class="att-info">
        <strong>${item.nome}</strong>
        <span>${item.faixa} • ${item.turma}</span>
      </div>
      <div class="att-time">
        <span class="att-clock">🕒 ${item.horario}</span>
        <span class="att-badge">✔ Presente</span>
      </div>
    </div>
  `).join('');
}

// Síntese de som do sino marcial via Web Audio API (sem arquivos externos)
function playMartialGong() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Harmônico 1
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(440, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 1.2);
    gain1.gain.setValueAtTime(0.5, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 1.2);

    // Harmônico 2 (tom de sino agudo)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, ctx.currentTime);
    gain2.gain.setValueAtTime(0.3, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start();
    osc2.stop(ctx.currentTime + 0.8);
  } catch (e) {
    // AudioContext não disponível
  }
}

function playChimeTone(freq, dur) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.4, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch (e) { }
}

/* ==========================================================================
   7. COBRANÇAS AUTOMÁTICAS VIA WHATSAPP (GESTÃO FINANCEIRA)
   ========================================================================== */
const ALUNOS_COBRANCA = [
  { id: 101, nome: 'Lucas Mendes', fone: '5591981112233', plano: 'Adulto — Avançado', valor: 149, status: 'atrasado', dias: 4, venc: '28/10' },
  { id: 102, nome: 'Beatriz Almeida', fone: '5591982223344', plano: 'Feminino', valor: 119, status: 'vence_hoje', dias: 0, venc: 'Hoje' },
  { id: 103, nome: 'Rafael Nogueira', fone: '5591983334455', plano: 'Adulto — Iniciante', valor: 129, status: 'lembrete', dias: -3, venc: 'Em 3 dias' },
  { id: 104, nome: 'Mariana Costa', fone: '5591984445566', plano: 'Feminino', valor: 119, status: 'pago', dias: 0, venc: 'Pago' },
  { id: 105, nome: 'Rodrigo Faro', fone: '5591985556677', plano: 'Adulto — Iniciante', valor: 129, status: 'atrasado', dias: 8, venc: '24/10' },
  { id: 106, nome: 'Ana Clara (Mãe do Leo)', fone: '5591986667788', plano: 'Infantil', valor: 99, status: 'lembrete', dias: -2, venc: 'Em 2 dias' }
];

function initCobrancasWhatsApp() {
  renderTabelaCobrancas('all');

  const filterBtns = document.querySelectorAll('.cob-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTabelaCobrancas(btn.dataset.filter);
    });
  });
}

function renderTabelaCobrancas(filter) {
  const container = document.querySelector('#tabelaCobrancasBody');
  if (!container) return;

  const filtered = ALUNOS_COBRANCA.filter(a => {
    if (filter === 'all') return true;
    return a.status === filter;
  });

  container.innerHTML = filtered.map(a => {
    let badgeClass = 'badge-ok';
    let statusLabel = 'Em dia';

    if (a.status === 'atrasado') {
      badgeClass = 'badge-danger';
      statusLabel = `Atrasado (${a.dias} dias)`;
    } else if (a.status === 'vence_hoje') {
      badgeClass = 'badge-warning';
      statusLabel = 'Vence Hoje';
    } else if (a.status === 'lembrete') {
      badgeClass = 'badge-info';
      statusLabel = `Vence ${a.venc}`;
    }

    return `
      <tr>
        <td>
          <strong>${a.nome}</strong>
          <small class="sub-muted">${a.plano}</small>
        </td>
        <td>R$ ${a.valor},00</td>
        <td><span class="table-badge ${badgeClass}">${statusLabel}</span></td>
        <td>
          <button class="btn btn-zap-sm" onclick="dispararCobrancaIndividual(${a.id})">
            📲 Cobrar WhatsApp
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

window.dispararCobrancaIndividual = function (id) {
  const aluno = ALUNOS_COBRANCA.find(a => a.id === id);
  if (!aluno) return;

  let msg = '';
  const chavePix = 'pix@academiajiujitsu.com.br';

  if (aluno.status === 'atrasado') {
    msg = `🥋 *ACADEMIA JIU-JITSU — REGULARIZAÇÃO DE MENSALIDADE*\n\n` +
      `Olá, *${aluno.nome}*! Tudo bem?\n\n` +
      `Constatamos que sua mensalidade referente ao plano *${aluno.plano}* (R$ ${aluno.valor},00) venceu em *${aluno.venc}*.\n\n` +
      `Para garantir seu acesso liberado no totem facial e no tatame, você pode regularizar via PIX instantâneo:\n\n` +
      `🔑 *Chave PIX:* \`${chavePix}\`\n` +
      `💰 *Valor:* R$ ${aluno.valor},00\n\n` +
      `Se já efetuou o pagamento, favor desconsiderar. Oss!`;
  } else if (aluno.status === 'vence_hoje') {
    msg = `🥋 *ACADEMIA JIU-JITSU — LEMBRETE DE VENCIMENTO*\n\n` +
      `Olá, *${aluno.nome}*! Passando para lembrar que sua mensalidade de Jiu-Jitsu vence hoje.\n\n` +
      `• *Plano:* ${aluno.plano}\n` +
      `• *Valor:* R$ ${aluno.valor},00\n` +
      `• *Chave PIX:* \`${chavePix}\`\n\n` +
      `Agradecemos pela parceria de sempre nos tatames! Oss!`;
  } else {
    msg = `🥋 *ACADEMIA JIU-JITSU — LEMBRETE PREVENTIVO*\n\n` +
      `Olá, *${aluno.nome}*! Sua mensalidade de Jiu-Jitsu vencerá em breve (${aluno.venc}).\n\n` +
      `• *Valor:* R$ ${aluno.valor},00\n` +
      `• *Chave PIX:* \`${chavePix}\`\n\n` +
      `Tenha uma excelente semana de treinos!`;
  }

  const url = `https://wa.me/${aluno.fone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener');
};

window.simularEnvioEmLote = function () {
  const pendentes = ALUNOS_COBRANCA.filter(a => a.status === 'atrasado' || a.status === 'vence_hoje');
  const alertBox = document.querySelector('#cobrancaLoteAlert');
  if (alertBox) {
    alertBox.innerHTML = `
      <div class="cobranca-lote-msg">
        🚀 <strong>Régua de Cobrança Automática Disparada!</strong><br>
        Foram enviados lembretes automatizados via WhatsApp para <strong>${pendentes.length} alunos</strong> pendentes com chave PIX e código copia-e-cola.
      </div>
    `;
    alertBox.style.display = 'block';
    setTimeout(() => {
      alertBox.style.display = 'none';
    }, 6000);
  }
};
