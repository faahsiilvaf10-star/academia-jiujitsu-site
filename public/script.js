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

const enrollForm = document.querySelector('#enrollForm');
if (enrollForm) {
  enrollForm.addEventListener('submit', e => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const msg = `Olá! Quero agendar uma aula experimental na Academia Jiu-Jitsu.\n\nNome: ${d.get('nome')}\nWhatsApp: ${d.get('telefone')}\nTurma: ${d.get('turma')}`;
    const formNote = document.querySelector('#formNote');
    if (formNote) {
      formNote.textContent = 'Abrindo o WhatsApp para enviar sua solicitação…';
    }
    window.open('https://wa.me/5591999999999?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });
}
