/**
 * ACADEMIA JIU-JITSU — SISTEMA INTEGRADO
 * Site Público Limpo + Área do Aluno (Login CPF/Senha) + Painel do Administrador (Senha 1234)
 */

/* ==========================================================================
   1. BANCO DE DADOS LOCAL (STORAGE) & SEED INICIAL
   ========================================================================== */
const STORAGE_KEY = 'academia_jiujitsu_db_v3';

const INITIAL_DB = {
  config: {
    adminPassword: '1234',
    adminUser: 'admin',
    pixKey: 'pix@academiajiujitsu.com.br',
    telefoneAcademia: '(91) 98123-4567',
    precos: {
      infantil: 99,
      iniciante: 129,
      avancado: 149,
      feminino: 119
    }
  },
  alunos: [
    {
      id: 'ALU-2026-081',
      nome: 'Lucas Mendes',
      cpf: '123.456.789-00',
      senha: '1234',
      telefone: '(91) 98111-2233',
      plano: 'Adulto — Avançado',
      faixa: 'Azul',
      graus: 2,
      presencas: 18,
      statusPagamento: 'atrasado',
      vencimento: '28/10/2026',
      valor: 149,
      contratoAssinado: true,
      hashContrato: 'SHA256: 8a7c9f0e1d4b6c3a2f5e8d9c0a1b2c3d4e5f6a7b8c9d0e1f'
    },
    {
      id: 'ALU-2026-082',
      nome: 'Beatriz Almeida',
      cpf: '234.567.890-11',
      senha: '1234',
      telefone: '(91) 98222-3344',
      plano: 'Feminino',
      faixa: 'Branca',
      graus: 3,
      presencas: 14,
      statusPagamento: 'vence_hoje',
      vencimento: 'Hoje',
      valor: 119,
      contratoAssinado: true,
      hashContrato: 'SHA256: 7b6a5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f'
    },
    {
      id: 'ALU-2026-083',
      nome: 'Rafael Nogueira',
      cpf: '345.678.901-22',
      senha: '1234',
      telefone: '(91) 98333-4455',
      plano: 'Adulto — Iniciante',
      faixa: 'Branca',
      graus: 1,
      presencas: 8,
      statusPagamento: 'pago',
      vencimento: '15/11/2026',
      valor: 129,
      contratoAssinado: true,
      hashContrato: 'SHA256: 3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b'
    },
    {
      id: 'ALU-2026-084',
      nome: 'Mariana Costa',
      cpf: '456.789.012-33',
      senha: '1234',
      telefone: '(91) 98444-5566',
      plano: 'Feminino',
      faixa: 'Azul',
      graus: 1,
      presencas: 22,
      statusPagamento: 'pago',
      vencimento: '20/11/2026',
      valor: 119,
      contratoAssinado: true,
      hashContrato: 'SHA256: 9e8d7c6b5a4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f'
    },
    {
      id: 'ALU-2026-085',
      nome: 'Rodrigo Faro',
      cpf: '567.890.123-44',
      senha: '1234',
      telefone: '(91) 98555-6677',
      plano: 'Adulto — Iniciante',
      faixa: 'Branca',
      graus: 0,
      presencas: 5,
      statusPagamento: 'atrasado',
      vencimento: '24/10/2026',
      valor: 129,
      contratoAssinado: true,
      hashContrato: 'SHA256: 4f3e2d1c0b9a8f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a'
    },
    {
      id: 'ALU-2026-086',
      nome: 'Léo Clara (Mãe: Ana)',
      cpf: '678.901.234-55',
      senha: '1234',
      telefone: '(91) 98666-7788',
      plano: 'Infantil',
      faixa: 'Cinza',
      graus: 2,
      presencas: 19,
      statusPagamento: 'pago',
      vencimento: '12/11/2026',
      valor: 99,
      contratoAssinado: true,
      hashContrato: 'SHA256: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f'
    }
  ],
  horarios: [
    { id: 1, dia: 'seg', hora: '07:00 - 08:00', turma: 'Adulto — Iniciante', prof: 'Prof. Marcos Souza', total: 15, ocupadas: 7, tag: 'iniciante' },
    { id: 2, dia: 'seg', hora: '12:00 - 13:00', turma: 'Treino Tático (No-Gi)', prof: 'Prof. Carlos Silva', total: 12, ocupadas: 8, tag: 'avancado' },
    { id: 3, dia: 'seg', hora: '18:00 - 19:00', turma: 'Infantil (5 a 12 anos)', prof: 'Profª. Amanda Lima', total: 16, ocupadas: 10, tag: 'infantil' },
    { id: 4, dia: 'seg', hora: '19:30 - 21:00', turma: 'Adulto — Avançado', prof: 'Mestre Rogério', total: 20, ocupadas: 17, tag: 'avancado' },
    { id: 5, dia: 'ter', hora: '07:30 - 08:30', turma: 'Adulto — Todos os Níveis', prof: 'Prof. Carlos Silva', total: 18, ocupadas: 8, tag: 'iniciante' },
    { id: 6, dia: 'ter', hora: '17:00 - 18:00', turma: 'Infantil (5 a 12 anos)', prof: 'Profª. Amanda Lima', total: 16, ocupadas: 11, tag: 'infantil' },
    { id: 7, dia: 'ter', hora: '18:30 - 19:30', turma: 'Feminino — Defesa Pessoal', prof: 'Profª. Beatriz Santos', total: 14, ocupadas: 7, tag: 'feminino' },
    { id: 8, dia: 'ter', hora: '20:00 - 21:30', turma: 'Competição & Sparring', prof: 'Mestre Rogério', total: 15, ocupadas: 13, tag: 'avancado' },
    { id: 9, dia: 'qua', hora: '07:00 - 08:00', turma: 'Adulto — Iniciante', prof: 'Prof. Marcos Souza', total: 15, ocupadas: 8, tag: 'iniciante' },
    { id: 10, dia: 'qua', hora: '12:00 - 13:00', turma: 'Treino Tático', prof: 'Prof. Carlos Silva', total: 12, ocupadas: 6, tag: 'avancado' },
    { id: 11, dia: 'qua', hora: '18:00 - 19:00', turma: 'Infantil (5 a 12 anos)', prof: 'Profª. Amanda Lima', total: 16, ocupadas: 12, tag: 'infantil' },
    { id: 12, dia: 'qua', hora: '19:30 - 21:00', turma: 'Adulto — Avançado', prof: 'Mestre Rogério', total: 20, ocupadas: 15, tag: 'avancado' },
    { id: 13, dia: 'qui', hora: '07:30 - 08:30', turma: 'Adulto — Todos os Níveis', prof: 'Prof. Carlos Silva', total: 18, ocupadas: 9, tag: 'iniciante' },
    { id: 14, dia: 'qui', hora: '17:00 - 18:00', turma: 'Infantil — Coordenação', prof: 'Profª. Amanda Lima', total: 16, ocupadas: 11, tag: 'infantil' },
    { id: 15, dia: 'qui', hora: '18:30 - 19:30', turma: 'Feminino — Jiu-Jitsu & Fitness', prof: 'Profª. Beatriz Santos', total: 14, ocupadas: 8, tag: 'feminino' },
    { id: 16, dia: 'qui', hora: '20:00 - 21:30', turma: 'Adulto — Defesa Pessoal', prof: 'Prof. Marcos Souza', total: 18, ocupadas: 14, tag: 'iniciante' },
    { id: 17, dia: 'sex', hora: '07:00 - 08:00', turma: 'Adulto — Iniciante', prof: 'Prof. Marcos Souza', total: 15, ocupadas: 7, tag: 'iniciante' },
    { id: 18, dia: 'sex', hora: '18:00 - 19:00', turma: 'Infantil — Graduação', prof: 'Profª. Amanda Lima', total: 16, ocupadas: 14, tag: 'infantil' },
    { id: 19, dia: 'sex', hora: '19:30 - 21:00', turma: 'Roda de Sparring Aberto', prof: 'Mestre Rogério', total: 22, ocupadas: 18, tag: 'avancado' },
    { id: 20, dia: 'sab', hora: '09:00 - 10:30', turma: 'Treino Geral em Família', prof: 'Mestre Rogério & Amanda', total: 25, ocupadas: 19, tag: 'iniciante' },
    { id: 21, dia: 'sab', hora: '11:00 - 12:30', turma: 'Treino Aberto (Open Mat)', prof: 'Todos os Mestres', total: 30, ocupadas: 24, tag: 'avancado' }
  ],
  presencasHoje: [
    { nome: 'Carlos Silva', faixa: 'Faixa Azul (2º Grau)', turma: 'Adulto Iniciante', hora: '07:42' },
    { nome: 'Mariana Costa', faixa: 'Faixa Azul (1º Grau)', turma: 'Feminino', hora: '08:15' },
    { nome: 'Rafael Nogueira', faixa: 'Faixa Branca (1º Grau)', turma: 'Adulto Iniciante', hora: '12:04' }
  ]
};

// Funções de Acesso ao Banco Local
function getDB() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DB));
      return INITIAL_DB;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_DB;
  }
}

function saveDB(db) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  } catch (e) {
    console.error('Erro ao salvar DB local:', e);
  }
}

/* ==========================================================================
   2. ESTADO GLOBAL DA APLICAÇÃO
   ========================================================================== */
let appState = {
  db: getDB(),
  loggedAluno: null,
  isAdminLogged: false,
  activeScheduleDay: 'seg',
  activeScheduleFilter: 'all',
  wizardStep: 1,
  wizardPlano: 'iniciante',
  cameraStream: null
};

/* ==========================================================================
   3. INICIALIZAÇÃO GERAL (DOM LOADED)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initUI();
  renderPublicSchedule();
  atualizarPrecosPublicos();
  initSignaturePad();
});

function initUI() {
  // Menu mobile toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Ano no rodapé
  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Tabs de dias de horários públicos
  const dayTabs = document.querySelectorAll('#dayTabs .day-tab');
  dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dayTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      appState.activeScheduleDay = tab.dataset.day;
      renderPublicSchedule();
    });
  });

  // Filtros de turmas de horários públicos
  const filterPills = document.querySelectorAll('.category-filters .filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      appState.activeScheduleFilter = pill.dataset.filter;
      renderPublicSchedule();
    });
  });
}

function atualizarPrecosPublicos() {
  const p = appState.db.config.precos;
  const chipInf = document.querySelector('#chip-preco-infantil');
  const chipIni = document.querySelector('#chip-preco-iniciante');
  const chipAva = document.querySelector('#chip-preco-avancado');
  const chipFem = document.querySelector('#chip-preco-feminino');
  if (chipInf) chipInf.textContent = `R$ ${p.infantil}/mês`;
  if (chipIni) chipIni.textContent = `R$ ${p.iniciante}/mês`;
  if (chipAva) chipAva.textContent = `R$ ${p.avancado}/mês`;
  if (chipFem) chipFem.textContent = `R$ ${p.feminino}/mês`;

  const wizInf = document.querySelector('#wizPrecoInfantil');
  const wizIni = document.querySelector('#wizPrecoIniciante');
  const wizAva = document.querySelector('#wizPrecoAvancado');
  const wizFem = document.querySelector('#wizPrecoFeminino');
  if (wizInf) wizInf.textContent = `R$ ${p.infantil}/mês`;
  if (wizIni) wizIni.textContent = `R$ ${p.iniciante}/mês`;
  if (wizAva) wizAva.textContent = `R$ ${p.avancado}/mês`;
  if (wizFem) wizFem.textContent = `R$ ${p.feminino}/mês`;

  const footZap = document.querySelector('#footerAcademiaTelefone');
  if (footZap) footZap.textContent = `WhatsApp: ${appState.db.config.telefoneAcademia}`;
}

/* ==========================================================================
   4. GRADE DE HORÁRIOS PÚBLICA (TABELA OFICIAL)
   ========================================================================== */
function renderPublicSchedule() {
  const tbody = document.querySelector('#publicScheduleTableBody');
  if (!tbody) return;

  const diasNomes = {
    seg: 'Segunda-feira',
    ter: 'Terça-feira',
    qua: 'Quarta-feira',
    qui: 'Quinta-feira',
    sex: 'Sexta-feira',
    sab: 'Sábado'
  };

  const aulas = appState.db.horarios;
  tbody.innerHTML = aulas.map(aula => {
    const vagasLivres = Math.max(0, aula.total - aula.ocupadas);
    return `
      <tr>
        <td><strong>${diasNomes[aula.dia] || aula.dia.toUpperCase()}</strong></td>
        <td>${aula.hora}</td>
        <td><strong>${aula.turma}</strong></td>
        <td>${aula.prof}</td>
        <td><span style="color: #ffc400; font-weight: 700;">${vagasLivres} de ${aula.total} vagas</span></td>
        <td>
          <button type="button" class="btn btn-yellow btn-sm" onclick="reservarVagaPublica(${aula.id})">
            Reservar Aula
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function reservarVagaPublica(aulaId) {
  const aula = appState.db.horarios.find(h => h.id === aulaId);
  if (!aula) return;

  const msg = encodeURIComponent(`Olá! Gostaria de agendar uma aula experimental de Jiu-Jitsu para a turma: *${aula.turma}* às *${aula.hora}* (${aula.prof}).`);
  const zap = appState.db.config.telefoneAcademia.replace(/\D/g, '');
  window.open(`https://wa.me/55${zap || '91981234567'}?text=${msg}`, '_blank');
}

/* ==========================================================================
   5. MÁSCARA E VALIDAÇÃO DE CPF
   ========================================================================== */
function maskCPF(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 11) v = v.substring(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  input.value = v;
}

function cleanCPF(cpf) {
  return (cpf || '').replace(/\D/g, '');
}

/* ==========================================================================
   6. MODAL & LOGIN UNIFICADO (ÁREA DO ALUNO & ACESSO ADMIN)
   ========================================================================== */
function openModalLoginAluno() {
  const modal = document.querySelector('#modalLoginAluno');
  const err = document.querySelector('#loginAlunoErro');
  if (err) err.style.display = 'none';
  if (modal) modal.classList.add('active');
}

function closeModalLoginAluno() {
  const modal = document.querySelector('#modalLoginAluno');
  if (modal) modal.classList.remove('active');
}

function handleLoginIdentificadorInput(input) {
  const val = input.value;
  // Se começar com letras (ex: 'admin'), permite texto livre sem máscara de CPF
  if (/^[a-zA-Z]/.test(val)) {
    return;
  }
  maskCPF(input);
}

function preencherAlunoDemo() {
  const cpfInput = document.querySelector('#loginAlunoCpf');
  const senhaInput = document.querySelector('#loginAlunoSenha');
  if (cpfInput) cpfInput.value = '123.456.789-00';
  if (senhaInput) senhaInput.value = '1234';
}

function preencherAdminDemo() {
  const cpfInput = document.querySelector('#loginAlunoCpf');
  const senhaInput = document.querySelector('#loginAlunoSenha');
  if (cpfInput) cpfInput.value = 'admin';
  if (senhaInput) senhaInput.value = '1234';
}

function handleLoginAluno(event) {
  event.preventDefault();
  const ident = document.querySelector('#loginAlunoCpf').value.trim();
  const senhaDigitada = document.querySelector('#loginAlunoSenha').value.trim();
  const erroBox = document.querySelector('#loginAlunoErro');

  const adminPass = appState.db.config.adminPassword || '1234';
  const adminUser = (appState.db.config.adminUser || 'admin').toLowerCase();
  const identLower = ident.toLowerCase();

  // 1. Acesso do Administrador pelo mesmo formulário
  if ((identLower === adminUser || identLower === 'admin' || identLower === 'mestre') && senhaDigitada === adminPass) {
    erroBox.style.display = 'none';
    closeModalLoginAluno();
    entrarNoPainelAdmin();
    return;
  }

  // 2. Acesso do Aluno por CPF
  const cpfLimpo = cleanCPF(ident);
  const aluno = appState.db.alunos.find(a => cleanCPF(a.cpf) === cpfLimpo);

  if (aluno) {
    if (aluno.senha && aluno.senha !== senhaDigitada) {
      erroBox.textContent = 'Senha incorreta para este CPF. Tente 1234 se for seu primeiro acesso.';
      erroBox.style.display = 'block';
      return;
    }
    // Sucesso Aluno
    erroBox.style.display = 'none';
    closeModalLoginAluno();
    entrarNoPortalAluno(aluno);
    return;
  }

  // 3. Se for usuário 'admin' mas errou a senha
  if (identLower === 'admin' || identLower === adminUser) {
    erroBox.textContent = 'Senha de Administrador incorreta. A senha padrão é 1234.';
    erroBox.style.display = 'block';
    return;
  }

  // 4. CPF não encontrado
  erroBox.textContent = 'Cadastro não localizado. Verifique os dígitos do CPF ou faça sua matrícula online.';
  erroBox.style.display = 'block';
}

function entrarNoPortalAluno(aluno) {
  appState.loggedAluno = aluno;
  const portal = document.querySelector('#portalAlunoView');
  if (!portal) return;

  // Atualiza Dados do Header do Portal
  document.querySelector('#paAlunoNome').textContent = aluno.nome;
  document.querySelector('#paAlunoFaixa').textContent = `Faixa ${aluno.faixa} (${aluno.graus}º Grau)`;
  document.querySelector('#paAlunoPlano').textContent = aluno.plano;
  document.querySelector('#paAlunoMatricula').textContent = aluno.id;

  // Atualiza Carteirinha
  document.querySelector('#cvNomeDisplay').textContent = aluno.nome;
  document.querySelector('#cvFaixaDisplay').textContent = `Faixa ${aluno.faixa} (${aluno.graus}º Grau)`;
  document.querySelector('#cvPlanoDisplay').textContent = aluno.plano;
  document.querySelector('#cvCpfDisplay').textContent = aluno.cpf;
  document.querySelector('#cvHashDisplay').textContent = aluno.hashContrato || 'AUTENTICADO-TATAME-2026';

  // Atualiza Financeiro
  document.querySelector('#pAlunoPlanoNome').textContent = aluno.plano;
  document.querySelector('#pAlunoPlanoValor').textContent = `R$ ${aluno.valor},00`;
  document.querySelector('#pAlunoPlanoVenc').textContent = aluno.vencimento;

  const fBadge = document.querySelector('#pAlunoFinanceStatusBadge');
  if (aluno.statusPagamento === 'pago') {
    fBadge.className = 'finance-badge-pago';
    fBadge.textContent = 'EM DIA (PAGO)';
  } else if (aluno.statusPagamento === 'vence_hoje') {
    fBadge.className = 'finance-badge-pendente';
    fBadge.textContent = 'VENCE HOJE';
  } else {
    fBadge.className = 'finance-badge-pendente';
    fBadge.textContent = 'EM ATRASO';
  }

  // Atualiza Treinos
  document.querySelector('#pAlunoTotalTreinos').textContent = aluno.presencas;
  const metaGrau = 24;
  const perc = Math.min(100, Math.round((aluno.presencas % metaGrau) / metaGrau * 100));
  document.querySelector('#pAlunoProgressBar').style.width = `${perc}%`;
  document.querySelector('#pAlunoProgressTexto').textContent = `${aluno.presencas % metaGrau} de ${metaGrau} treinos para o próximo grau (${perc}%)`;

  renderAlunoListaPresencas(aluno);
  renderAlunoGradeTreinos();

  // Atualiza Contrato
  const hashBox = document.querySelector('#pAlunoHashContrato');
  if (hashBox) hashBox.textContent = aluno.hashContrato || 'SHA256: 8a7c9f0e1d4b6c3a2f5e8d9c0a1b2c3d4e5f6a7b8c9d0e1f';

  const assBox = document.querySelector('#pAlunoAssinaturaImg');
  if (assBox) {
    assBox.innerHTML = `
      <div style="font-family: 'Brush Script MT', cursive, sans-serif; font-size: 28px; color: #111;">
        ${aluno.nome}
      </div>`;
  }

  switchPortalTab('carteirinha');
  portal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function renderAlunoListaPresencas(aluno) {
  const container = document.querySelector('#pAlunoListaPresencas');
  if (!container) return;

  container.innerHTML = `
    <div class="p-presenca-item">
      <div><strong>Presença no Tatame</strong> • Treino Técnico</div>
      <span class="text-yellow">Hoje às 18:32 • Validado Facial</span>
    </div>
    <div class="p-presenca-item">
      <div><strong>Presença no Tatame</strong> • Sparring</div>
      <span class="sub-muted">Anteontem às 19:35 • Validado Facial</span>
    </div>
    <div class="p-presenca-item">
      <div><strong>Presença no Tatame</strong> • Defesa Pessoal</div>
      <span class="sub-muted">Há 4 dias às 18:05 • Validado Facial</span>
    </div>
  `;
}

function renderAlunoGradeTreinos() {
  const container = document.querySelector('#pAlunoGradeAgendamento');
  if (!container) return;

  const aulas = appState.db.horarios.slice(0, 6);
  container.innerHTML = aulas.map(a => `
    <div class="schedule-card-item mb-2">
      <div class="sci-time">
        <strong>${a.dia.toUpperCase()} • ${a.hora}</strong>
        <small>${a.prof}</small>
      </div>
      <div class="sci-info">
        <h4>${a.turma}</h4>
        <span class="badge-vagas">${a.total - a.ocupadas} vagas</span>
      </div>
      <div class="sci-action">
        <button type="button" class="btn btn-yellow btn-sm" onclick="alunoConfirmarPresenca(${a.id})">
          Confirmar Vaga
        </button>
      </div>
    </div>
  `).join('');
}

function alunoConfirmarPresenca(aulaId) {
  const aula = appState.db.horarios.find(h => h.id === aulaId);
  if (!aula) return;
  alert(`✅ Vaga confirmada com sucesso para a aula:\n${aula.turma} (${aula.dia.toUpperCase()} às ${aula.hora})!\nNos vemos no tatame!`);
}

function switchPortalTab(tabName) {
  document.querySelectorAll('.portal-nav-tabs .p-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.portal-content .p-tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tabPane-${tabName}`);
  });
}

function logoutAluno() {
  appState.loggedAluno = null;
  const portal = document.querySelector('#portalAlunoView');
  if (portal) portal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function compartilharCarteirinhaZap() {
  if (!appState.loggedAluno) return;
  const a = appState.loggedAluno;
  const msg = encodeURIComponent(`🥋 *Minha Carteira Digital — Academia Jiu-Jitsu*\nAtleta: *${a.nome}*\nGraduação: *${a.faixa} (${a.graus}º Grau)*\nPlano: *${a.plano}*\nStatus: *ATIVO*\nID: ${a.id}`);
  window.open(`https://api.whatsapp.com/send?text=${msg}`, '_blank');
}

/* ==========================================================================
   7. PAGAMENTO DO ALUNO (PIX & CARTÃO 3D)
   ========================================================================== */
function switchAlunoPayMethod(method) {
  document.querySelector('#btnPayTabPix').classList.toggle('active', method === 'pix');
  document.querySelector('#btnPayTabCard').classList.toggle('active', method === 'card');
  document.querySelector('#panelPayPix').style.display = method === 'pix' ? 'block' : 'none';
  document.querySelector('#panelPayCard').style.display = method === 'card' ? 'block' : 'none';
}

function copiarPixAluno() {
  const input = document.querySelector('#pixCopiaColaAluno');
  if (!input) return;
  input.select();
  navigator.clipboard.writeText(input.value);
  alert('Chave PIX copiada para a área de transferência!');
}

function simularConfirmacaoPixAluno() {
  if (!appState.loggedAluno) return;
  appState.loggedAluno.statusPagamento = 'pago';
  saveDB(appState.db);

  const fBadge = document.querySelector('#pAlunoFinanceStatusBadge');
  if (fBadge) {
    fBadge.className = 'finance-badge-pago';
    fBadge.textContent = 'EM DIA (PAGO)';
  }
  alert('⚡ Pagamento PIX identificado e confirmado com sucesso!\nSua mensalidade está 100% em dia.');
}

function flipCardAluno(isBack) {
  const card = document.querySelector('#creditCard3dAluno');
  if (card) {
    if (isBack) card.classList.add('flipped');
    else card.classList.remove('flipped');
  }
}

function formatCardNumberAluno(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 16) v = v.substring(0, 16);
  v = v.replace(/(\d{4})(?=\d)/g, '$1 ');
  input.value = v;

  const display = document.querySelector('#cardNumberDisplayAluno');
  if (display) display.textContent = v || '•••• •••• •••• ••••';

  const brand = document.querySelector('#cardBrandLogoAluno');
  if (brand) {
    if (v.startsWith('4')) brand.textContent = 'VISA';
    else if (v.startsWith('5')) brand.textContent = 'MASTERCARD';
    else if (v.startsWith('3')) brand.textContent = 'AMEX';
    else brand.textContent = 'CARTÃO';
  }
}

function formatCardHolderAluno(input) {
  const display = document.querySelector('#cardHolderDisplayAluno');
  if (display) display.textContent = input.value.toUpperCase() || 'SEU NOME';
}

function formatCardExpAluno(input) {
  let v = input.value.replace(/\D/g, '');
  if (v.length > 4) v = v.substring(0, 4);
  if (v.length >= 2) v = v.substring(0, 2) + '/' + v.substring(2);
  input.value = v;

  const display = document.querySelector('#cardExpDisplayAluno');
  if (display) display.textContent = v || 'MM/AA';
}

function formatCardCvvAluno(input) {
  let v = input.value.replace(/\D/g, '');
  input.value = v;
  const display = document.querySelector('#cardCvvDisplayAluno');
  if (display) display.textContent = v || '•••';
}

function processarPagamentoCartaoAluno(e) {
  e.preventDefault();
  if (!appState.loggedAluno) return;
  appState.loggedAluno.statusPagamento = 'pago';
  saveDB(appState.db);

  const fBadge = document.querySelector('#pAlunoFinanceStatusBadge');
  if (fBadge) {
    fBadge.className = 'finance-badge-pago';
    fBadge.textContent = 'EM DIA (PAGO)';
  }
  alert('💳 Pagamento no cartão processado com sucesso!\nMensalidade quitada.');
}

/* ==========================================================================
   8. MODAL & LOGIN DO ADMINISTRADOR (SENHA 1234)
   ========================================================================== */
function openModalLoginAdmin() {
  const modal = document.querySelector('#modalLoginAdmin');
  const err = document.querySelector('#loginAdminErro');
  if (err) err.style.display = 'none';
  if (modal) modal.classList.add('active');
}

function closeModalLoginAdmin() {
  const modal = document.querySelector('#modalLoginAdmin');
  if (modal) modal.classList.remove('active');
}

function preencherAdminDemo() {
  const userInput = document.querySelector('#loginAdminUsuario');
  const passInput = document.querySelector('#loginAdminSenha');
  if (userInput) userInput.value = 'admin';
  if (passInput) passInput.value = '1234';
}

function handleLoginAdmin(event) {
  event.preventDefault();
  const senhaDigitada = document.querySelector('#loginAdminSenha').value.trim();
  const erroBox = document.querySelector('#loginAdminErro');

  const adminPass = appState.db.config.adminPassword || '1234';

  if (senhaDigitada !== adminPass) {
    erroBox.textContent = 'Senha administrativa incorreta. A senha padrão do sistema é 1234.';
    erroBox.style.display = 'block';
    return;
  }

  erroBox.style.display = 'none';
  closeModalLoginAdmin();
  entrarNoPainelAdmin();
}

function entrarNoPainelAdmin() {
  appState.isAdminLogged = true;
  const painel = document.querySelector('#painelAdminView');
  if (!painel) return;

  renderAdminTabelaAlunos();
  renderAdminAttendanceHistory();
  renderAdminCobrancas();
  renderAdminTabelaHorarios();
  carregarConfiguracoesAdmin();

  switchAdminTab('alunos');
  painel.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-nav-tabs .p-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.atab === tabName);
  });
  document.querySelectorAll('#painelAdminView .p-tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `adminPane-${tabName}`);
  });
}

function logoutAdmin() {
  appState.isAdminLogged = false;
  if (appState.cameraStream) {
    appState.cameraStream.getTracks().forEach(t => t.stop());
    appState.cameraStream = null;
  }
  const painel = document.querySelector('#painelAdminView');
  if (painel) painel.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/* ==========================================================================
   9. ADMIN: GESTÃO DE ALUNOS & MATRÍCULAS
   ========================================================================== */
function renderAdminTabelaAlunos() {
  const tbody = document.querySelector('#tabelaAdminAlunosBody');
  if (!tbody) return;

  tbody.innerHTML = appState.db.alunos.map(aluno => {
    let statusClass = 'finance-badge-pago';
    let statusLabel = 'Em Dia';
    if (aluno.statusPagamento === 'vence_hoje') {
      statusClass = 'finance-badge-pendente';
      statusLabel = 'Vence Hoje';
    } else if (aluno.statusPagamento === 'atrasado') {
      statusClass = 'finance-badge-pendente';
      statusLabel = 'Atrasado';
    }

    return `
      <tr>
        <td><strong>${aluno.nome}</strong><br><small class="sub-muted">${aluno.id}</small></td>
        <td>${aluno.cpf}</td>
        <td>${aluno.plano}</td>
        <td><span class="text-yellow">Faixa ${aluno.faixa} (${aluno.graus}º Grau)</span></td>
        <td><strong>${aluno.presencas}</strong> aulas</td>
        <td><span class="${statusClass}">${statusLabel}</span></td>
        <td>
          <button class="btn btn-outline btn-sm" onclick="abrirModalEditarAluno('${aluno.id}')">Editar</button>
          <button class="btn btn-dark-subtle btn-sm text-danger" onclick="excluirAlunoAdmin('${aluno.id}')">Excluir</button>
        </td>
      </tr>
    `;
  }).join('');
}

function abrirModalEditarAluno(alunoId) {
  const aluno = appState.db.alunos.find(a => a.id === alunoId);
  if (!aluno) return;

  document.querySelector('#editAlunoId').value = aluno.id;
  document.querySelector('#editAlunoNome').value = aluno.nome;
  document.querySelector('#editAlunoFaixa').value = aluno.faixa;
  document.querySelector('#editAlunoGraus').value = aluno.graus;
  document.querySelector('#editAlunoPlano').value = aluno.plano;
  document.querySelector('#editAlunoStatusPag').value = aluno.statusPagamento;
  document.querySelector('#editAlunoPresencas').value = aluno.presencas;

  document.querySelector('#modalEditarAlunoAdmin').classList.add('active');
}

function fecharModalEditarAlunoAdmin() {
  document.querySelector('#modalEditarAlunoAdmin').classList.remove('active');
}

function salvarEdicaoAlunoAdmin(e) {
  e.preventDefault();
  const id = document.querySelector('#editAlunoId').value;
  const aluno = appState.db.alunos.find(a => a.id === id);
  if (!aluno) return;

  aluno.nome = document.querySelector('#editAlunoNome').value;
  aluno.faixa = document.querySelector('#editAlunoFaixa').value;
  aluno.graus = parseInt(document.querySelector('#editAlunoGraus').value);
  aluno.plano = document.querySelector('#editAlunoPlano').value;
  aluno.statusPagamento = document.querySelector('#editAlunoStatusPag').value;
  aluno.presencas = parseInt(document.querySelector('#editAlunoPresencas').value);

  saveDB(appState.db);
  fecharModalEditarAlunoAdmin();
  renderAdminTabelaAlunos();
  renderAdminCobrancas();
  alert('Aluno atualizado com sucesso!');
}

function excluirAlunoAdmin(id) {
  if (!confirm('Deseja realmente remover este aluno?')) return;
  appState.db.alunos = appState.db.alunos.filter(a => a.id !== id);
  saveDB(appState.db);
  renderAdminTabelaAlunos();
  renderAdminCobrancas();
}

function openModalNovoAlunoAdmin() {
  const nome = prompt('Nome completo do novo aluno:');
  if (!nome) return;
  const cpf = prompt('CPF do aluno (com pontos ou números):') || '000.000.000-00';
  const novo = {
    id: `ALU-2026-${Math.floor(100 + Math.random() * 900)}`,
    nome,
    cpf,
    senha: '1234',
    telefone: '(91) 98888-0000',
    plano: 'Adulto — Iniciante',
    faixa: 'Branca',
    graus: 0,
    presencas: 1,
    statusPagamento: 'pago',
    vencimento: '10/11/2026',
    valor: 129,
    contratoAssinado: true,
    hashContrato: 'SHA256: NOVO-CADASTRO-ADMIN'
  };
  appState.db.alunos.unshift(novo);
  saveDB(appState.db);
  renderAdminTabelaAlunos();
  renderAdminCobrancas();
  alert(`Aluno ${nome} cadastrado com sucesso!`);
}

/* ==========================================================================
   10. ADMIN: TOTEM DE PRESENÇA FACIAL NO TATAME
   ========================================================================== */
async function startFacialCamera() {
  const video = document.querySelector('#facialVideo');
  const btnStart = document.querySelector('#btnStartCamera');
  const btnScan = document.querySelector('#btnScanFace');
  const statusMsg = document.querySelector('#facialStatusMsg');

  try {
    statusMsg.textContent = 'Solicitando acesso à câmera do tatame...';
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } },
      audio: false
    });

    appState.cameraStream = stream;
    video.srcObject = stream;
    btnStart.style.display = 'none';
    btnScan.style.display = 'inline-flex';
    statusMsg.innerHTML = '<span class="text-yellow">● Totem Ativo</span> • Posicione o rosto no retículo';
  } catch (err) {
    statusMsg.innerHTML = '<span class="text-danger">Aviso:</span> Câmera não detectada. Modo de simulação biométrica ativado.';
    btnStart.style.display = 'none';
    btnScan.style.display = 'inline-flex';
  }
}

function captureAndScanFace() {
  const laser = document.querySelector('#scannerLaser');
  const statusMsg = document.querySelector('#facialStatusMsg');

  if (laser) laser.style.display = 'block';
  if (statusMsg) statusMsg.textContent = 'Escaneando biometria facial...';

  playMartialChime();

  setTimeout(() => {
    if (laser) laser.style.display = 'none';

    // Seleciona um aluno cadastrado da base para validar
    const alunos = appState.db.alunos;
    const aluno = alunos[Math.floor(Math.random() * alunos.length)] || {
      nome: 'Carlos Silva',
      faixa: 'Azul',
      graus: 2,
      plano: 'Adulto Iniciante'
    };

    aluno.presencas = (aluno.presencas || 0) + 1;
    saveDB(appState.db);

    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    appState.db.presencasHoje.unshift({
      nome: aluno.nome,
      faixa: `Faixa ${aluno.faixa} (${aluno.graus}º Grau)`,
      turma: aluno.plano,
      hora: horaAtual
    });

    renderAdminAttendanceHistory();

    // Modal de Sucesso Facial
    document.querySelector('#frAlunoNome').textContent = aluno.nome;
    document.querySelector('#frAlunoFaixa').textContent = `Faixa ${aluno.faixa} (${aluno.graus}º Grau)`;
    document.querySelector('#frAlunoTurma').textContent = aluno.plano;
    document.querySelector('#frAlunoDataHora').textContent = horaAtual;

    document.querySelector('#facialResultModal').classList.add('active');
    if (statusMsg) statusMsg.innerHTML = '<span class="text-yellow">Presença confirmada!</span> Totem pronto para o próximo aluno.';
  }, 1200);
}

function closeFacialResult() {
  document.querySelector('#facialResultModal').classList.remove('active');
}

function renderAdminAttendanceHistory() {
  const list = document.querySelector('#attendanceHistoryList');
  if (!list) return;

  const pres = appState.db.presencasHoje || [];
  list.innerHTML = pres.map(p => `
    <div class="attendance-item">
      <div class="ai-avatar">🥋</div>
      <div class="ai-info">
        <strong>${p.nome}</strong>
        <small>${p.faixa} • ${p.turma}</small>
      </div>
      <div class="ai-time">${p.hora}</div>
    </div>
  `).join('');
}

function playMartialChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.15);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(783.99, ctx.currentTime);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 0.85);
    osc2.stop(ctx.currentTime + 0.85);
  } catch (e) {}
}

/* ==========================================================================
   11. ADMIN: COBRANÇAS WHATSAPP
   ========================================================================== */
function renderAdminCobrancas(filtro = 'all') {
  const tbody = document.querySelector('#tabelaCobrancasBody');
  if (!tbody) return;

  const alunos = appState.db.alunos;
  const atrasados = alunos.filter(a => a.statusPagamento === 'atrasado');
  const vencemHoje = alunos.filter(a => a.statusPagamento === 'vence_hoje');
  const pagos = alunos.filter(a => a.statusPagamento === 'pago');

  // Atualiza métricas
  const mTotal = document.querySelector('#metricAlunosTotal');
  const mPerc = document.querySelector('#metricPercEmDia');
  const mVenc = document.querySelector('#metricVencemHoje');
  const mAtr = document.querySelector('#metricEmAtraso');

  if (mTotal) mTotal.textContent = alunos.length;
  if (mVenc) mVenc.textContent = vencemHoje.length;
  if (mAtr) mAtr.textContent = atrasados.length;
  if (mPerc && alunos.length > 0) {
    mPerc.textContent = `${Math.round((pagos.length / alunos.length) * 100)}%`;
  }

  const filtrados = alunos.filter(a => {
    if (filtro === 'all') return true;
    return a.statusPagamento === filtro;
  });

  tbody.innerHTML = filtrados.map(a => {
    let statusClass = 'finance-badge-pago';
    let statusLabel = 'Em Dia';
    if (a.statusPagamento === 'vence_hoje') {
      statusClass = 'finance-badge-pendente';
      statusLabel = 'Vence Hoje';
    } else if (a.statusPagamento === 'atrasado') {
      statusClass = 'finance-badge-pendente';
      statusLabel = 'Atrasado';
    }

    return `
      <tr>
        <td><strong>${a.nome}</strong></td>
        <td>${a.telefone}</td>
        <td>${a.plano}</td>
        <td><strong>R$ ${a.valor},00</strong></td>
        <td><span class="${statusClass}">${statusLabel}</span></td>
        <td>
          <button type="button" class="btn btn-zap btn-sm" onclick="enviarCobrancaWhatsApp('${a.id}')">
            💬 Cobrar via WhatsApp
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function filtrarCobrancas(tipo) {
  document.querySelectorAll('.cob-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === tipo);
  });
  renderAdminCobrancas(tipo);
}

function enviarCobrancaWhatsApp(alunoId) {
  const aluno = appState.db.alunos.find(a => a.id === alunoId);
  if (!aluno) return;

  const pix = appState.db.config.pixKey;
  const msg = encodeURIComponent(`Olá ${aluno.nome}! Tudo bem?🥋\nPassando para lembrar da mensalidade do seu plano *${aluno.plano}* (R$ ${aluno.valor},00).\nVocê pode pagar com a chave PIX: *${pix}* ou diretamente pelo seu Portal do Aluno com seu CPF.\nQualquer dúvida, estamos à disposição!`);
  const tel = aluno.telefone.replace(/\D/g, '');
  window.open(`https://wa.me/55${tel}?text=${msg}`, '_blank');
}

function dispararCobrancaLote() {
  const pendentes = appState.db.alunos.filter(a => a.statusPagamento === 'atrasado' || a.statusPagamento === 'vence_hoje');
  if (pendentes.length === 0) {
    alert('Nenhum aluno com pendência financeira no momento!');
    return;
  }
  alert(`⚡ Disparadas mensagens de cobrança automáticas via WhatsApp para ${pendentes.length} alunos pendentes com QR Code e Chave PIX.`);
}

/* ==========================================================================
   12. ADMIN: HORÁRIOS & CONFIGURAÇÕES GLOBAIS
   ========================================================================== */
function renderAdminTabelaHorarios() {
  const tbody = document.querySelector('#tabelaAdminHorariosBody');
  if (!tbody) return;

  tbody.innerHTML = appState.db.horarios.map(h => `
    <tr>
      <td><strong>${h.dia.toUpperCase()}</strong></td>
      <td>${h.hora}</td>
      <td>${h.turma}</td>
      <td>${h.prof}</td>
      <td>
        <input type="number" value="${h.total}" style="width: 60px;" class="input-field" onchange="alterarCapacidadeHorario(${h.id}, this.value)">
      </td>
      <td><strong>${Math.max(0, h.total - h.ocupadas)}</strong> livres</td>
      <td>
        <button class="btn btn-outline btn-sm text-danger" onclick="removerHorarioAdmin(${h.id})">Remover</button>
      </td>
    </tr>
  `).join('');
}

function alterarCapacidadeHorario(id, novoTotal) {
  const h = appState.db.horarios.find(item => item.id === id);
  if (h) {
    h.total = parseInt(novoTotal) || h.total;
    saveDB(appState.db);
    renderPublicSchedule();
  }
}

function removerHorarioAdmin(id) {
  if (!confirm('Remover este horário da grade?')) return;
  appState.db.horarios = appState.db.horarios.filter(h => h.id !== id);
  saveDB(appState.db);
  renderAdminTabelaHorarios();
  renderPublicSchedule();
}

function abrirModalNovaAula() {
  const dia = prompt('Dia da semana (seg, ter, qua, qui, sex, sab):', 'seg');
  const hora = prompt('Horário (ex: 19:00 - 20:00):', '19:00 - 20:00');
  const turma = prompt('Nome da turma:', 'Treino Especial');
  const prof = prompt('Professor:', 'Mestre Rogério');
  if (!dia || !hora || !turma) return;

  appState.db.horarios.push({
    id: Date.now(),
    dia: dia.toLowerCase(),
    hora,
    turma,
    prof: prof || 'Mestre da Casa',
    total: 20,
    ocupadas: 0,
    tag: 'iniciante'
  });
  saveDB(appState.db);
  renderAdminTabelaHorarios();
  renderPublicSchedule();
  alert('Nova aula adicionada com sucesso!');
}

function carregarConfiguracoesAdmin() {
  const cfg = appState.db.config;
  document.querySelector('#cfgPrecoInfantil').value = cfg.precos.infantil;
  document.querySelector('#cfgPrecoIniciante').value = cfg.precos.iniciante;
  document.querySelector('#cfgPrecoAvancado').value = cfg.precos.avancado;
  document.querySelector('#cfgPrecoFeminino').value = cfg.precos.feminino;
  document.querySelector('#cfgChavePix').value = cfg.pixKey;
  document.querySelector('#cfgTelefoneAcademia').value = cfg.telefoneAcademia;
}

function salvarConfiguracoesAdmin(e) {
  e.preventDefault();
  const cfg = appState.db.config;
  cfg.precos.infantil = parseFloat(document.querySelector('#cfgPrecoInfantil').value);
  cfg.precos.iniciante = parseFloat(document.querySelector('#cfgPrecoIniciante').value);
  cfg.precos.avancado = parseFloat(document.querySelector('#cfgPrecoAvancado').value);
  cfg.precos.feminino = parseFloat(document.querySelector('#cfgPrecoFeminino').value);
  cfg.pixKey = document.querySelector('#cfgChavePix').value.trim();
  cfg.telefoneAcademia = document.querySelector('#cfgTelefoneAcademia').value.trim();

  const novaSenha = document.querySelector('#cfgNovaSenhaAdmin').value.trim();
  if (novaSenha) cfg.adminPassword = novaSenha;

  saveDB(appState.db);
  atualizarPrecosPublicos();
  alert('Configurações salvas e aplicadas em todo o site!');
}

/* ==========================================================================
   13. WIZARD DE MATRÍCULA ONLINE (PÚBLICO)
   ========================================================================== */
function openModalMatricula() {
  document.querySelector('#modalMatriculaWizard').classList.add('active');
  goToWizardStep(1);
}

function openModalMatriculaComPlano(planoKey) {
  selectPlanOpt(planoKey);
  openModalMatricula();
  goToWizardStep(2);
}

function closeModalMatricula() {
  document.querySelector('#modalMatriculaWizard').classList.remove('active');
}

function selectPlanOpt(plano) {
  appState.wizardPlano = plano;
  document.querySelectorAll('.plan-opt-card').forEach(c => {
    c.classList.toggle('selected', c.dataset.plano === plano);
  });
}

function goToWizardStep(stepNum) {
  appState.wizardStep = stepNum;

  document.querySelectorAll('.wizard-stepper .step-item').forEach(item => {
    const s = parseInt(item.dataset.step);
    item.classList.toggle('active', s === stepNum);
    item.classList.toggle('completed', s < stepNum);
  });

  document.querySelectorAll('.wizard-step-content').forEach(content => {
    content.classList.toggle('active', content.id === `wStep${stepNum}`);
  });

  if (stepNum === 3) resizeCanvas();
  if (stepNum === 4) {
    const precos = appState.db.config.precos;
    const valor = precos[appState.wizardPlano] || 129;
    document.querySelector('#wPixValorPlano').textContent = `Valor: R$ ${valor},00`;
  }
}

/* ==========================================================================
   14. ASSINATURA TOUCH NO CELULAR
   ========================================================================== */
let canvasState = {
  canvas: null,
  ctx: null,
  isDrawing: false,
  hasSigned: false
};

function initSignaturePad() {
  const canvas = document.querySelector('#signatureCanvas');
  if (!canvas) return;

  canvasState.canvas = canvas;
  canvasState.ctx = canvas.getContext('2d');

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  function start(e) {
    e.preventDefault();
    canvasState.isDrawing = true;
    const pos = getPos(e);
    canvasState.ctx.beginPath();
    canvasState.ctx.moveTo(pos.x, pos.y);
    const hint = document.querySelector('#canvasHint');
    if (hint) hint.style.opacity = '0';
  }

  function draw(e) {
    if (!canvasState.isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    canvasState.ctx.lineTo(pos.x, pos.y);
    canvasState.ctx.strokeStyle = '#050505';
    canvasState.ctx.lineWidth = 3;
    canvasState.ctx.lineCap = 'round';
    canvasState.ctx.lineJoin = 'round';
    canvasState.ctx.stroke();
    canvasState.hasSigned = true;
  }

  function stop() {
    canvasState.isDrawing = false;
  }

  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', draw);
  window.addEventListener('mouseup', stop);

  canvas.addEventListener('touchstart', start, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  window.addEventListener('touchend', stop);
}

function resizeCanvas() {
  const canvas = canvasState.canvas;
  if (!canvas) return;
  canvas.width = 500;
  canvas.height = 180;
  clearSignatureCanvas();
}

function clearSignatureCanvas() {
  if (!canvasState.ctx) return;
  canvasState.ctx.clearRect(0, 0, canvasState.canvas.width, canvasState.canvas.height);
  canvasState.hasSigned = false;
  const hint = document.querySelector('#canvasHint');
  if (hint) hint.style.opacity = '1';
}

function validarAssinaturaEAvançar() {
  if (!canvasState.hasSigned) {
    alert('Por favor, faça sua assinatura na tela com o dedo ou mouse antes de avançar.');
    return;
  }
  goToWizardStep(4);
}

function switchWizardPayMethod(m) {
  document.querySelector('#wBtnPayPix').classList.toggle('active', m === 'pix');
  document.querySelector('#wBtnPayCard').classList.toggle('active', m === 'card');
  document.querySelector('#wPanelPix').style.display = m === 'pix' ? 'block' : 'none';
  document.querySelector('#wPanelCard').style.display = m === 'card' ? 'block' : 'none';
}

function copiarPixWizard() {
  const input = document.querySelector('#pixCopiaColaWizard');
  if (input) {
    input.select();
    navigator.clipboard.writeText(input.value);
    alert('Código PIX copiado!');
  }
}

function concluirMatriculaComSucesso() {
  const nome = document.querySelector('#matNome').value || 'Novo Aluno';
  const cpf = document.querySelector('#matCpf').value || '000.000.000-00';
  const senha = document.querySelector('#matSenha').value || '1234';
  const zap = document.querySelector('#matZap').value || '(91) 98888-0000';

  const planosNomes = {
    infantil: 'Infantil',
    iniciante: 'Adulto — Iniciante',
    avancado: 'Adulto — Avançado',
    feminino: 'Feminino'
  };

  const valor = appState.db.config.precos[appState.wizardPlano] || 129;

  const novoAluno = {
    id: `ALU-2026-${Math.floor(100 + Math.random() * 900)}`,
    nome,
    cpf,
    senha,
    telefone: zap,
    plano: planosNomes[appState.wizardPlano] || 'Adulto — Iniciante',
    faixa: 'Branca',
    graus: 0,
    presencas: 1,
    statusPagamento: 'pago',
    vencimento: 'Hoje',
    valor,
    contratoAssinado: true,
    hashContrato: `SHA256: ${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`
  };

  appState.db.alunos.unshift(novoAluno);
  saveDB(appState.db);
  appState.loggedAluno = novoAluno;

  goToWizardStep(5);
}

function entrarNoPortalAposMatricula() {
  closeModalMatricula();
  if (appState.loggedAluno) {
    entrarNoPortalAluno(appState.loggedAluno);
  }
}
