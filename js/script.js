const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

/*Navbar scroll*/
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/*Mobile menu*/
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  /*Fechar menu on link click*/
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /*Fechar menu on outside click*/
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}


function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
setActiveNavLink();

/*Animações scroll*/
const animateElements = document.querySelectorAll('.animate-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

animateElements.forEach((el, i) => {
  if (!el.dataset.delay) {
    el.dataset.delay = (i % 4) * 100;
  }
  observer.observe(el);
});

/*Tabs Missões*/
const missionsTabs = document.querySelectorAll('.missions-tab');
const missionsCards = document.querySelectorAll('.mission-card[data-level]');

missionsTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const level = tab.dataset.level;

    missionsTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    missionsCards.forEach(card => {
      if (level === 'all' || card.dataset.level === level) {
        card.style.display = 'block';
        card.style.animation = 'fadeSlideUp 0.4s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/*FAQ*/
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');

    faqItems.forEach(i => {
      i.classList.remove('open');
      const a = i.querySelector('.faq-answer');
      if (a) a.style.maxHeight = '0';
    });

    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

/*Validação formulário de contato*/
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const formSuccess = document.querySelector('.form-success');

  function showError(input, msg) {
    input.classList.add('error');
    const errorEl = input.parentElement.querySelector('.form-error-msg');
    if (errorEl) {
      errorEl.textContent = msg;
      errorEl.classList.add('show');
    }
  }

  function clearError(input) {
    input.classList.remove('error');
    const errorEl = input.parentElement.querySelector('.form-error-msg');
    if (errorEl) errorEl.classList.remove('show');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  contactForm.querySelectorAll('.form-input, .form-textarea').forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim()) clearError(field);
    });
    field.addEventListener('blur', () => {
      if (!field.value.trim() && field.required) {
        showError(field, 'Este campo é obrigatório.');
      } else if (field.type === 'email' && field.value && !validateEmail(field.value)) {
        showError(field, 'Digite um e-mail válido.');
      }
    });
  });

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');

    if (!nome.value.trim()) { showError(nome, 'Por favor, informe seu nome.'); valid = false; }
    if (!email.value.trim()) { showError(email, 'Por favor, informe seu e-mail.'); valid = false; }
    else if (!validateEmail(email.value)) { showError(email, 'Digite um e-mail válido.'); valid = false; }
    if (!assunto.value.trim()) { showError(assunto, 'Por favor, informe o assunto.'); valid = false; }
    if (!mensagem.value.trim()) { showError(mensagem, 'Por favor, escreva sua mensagem.'); valid = false; }
    else if (mensagem.value.trim().length < 10) { showError(mensagem, 'Mensagem muito curta (mín. 10 caracteres).'); valid = false; }

    if (valid) {
      const btn = contactForm.querySelector('.form-submit');
      btn.disabled = true;
      btn.textContent = 'Enviando...';


      setTimeout(() => {
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('show');
      }, 1500);
    }
  });
}

/*Animação contador de pontos*/
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('pt-BR') + (el.dataset.suffix || '');
  }, 16);
}

const counters = document.querySelectorAll('[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.counted) {
      entry.target.dataset.counted = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => counterObserver.observe(counter));

/*Animação barra de progresso*/
const progressBars = document.querySelectorAll('.mission-progress-bar');
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const width = bar.dataset.width || '0';
      bar.style.width = width + '%';
      progressObserver.unobserve(bar);
    }
  });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
  bar.style.width = '0%';
  progressObserver.observe(bar);
});

/*Tolltip*/
document.querySelectorAll('[data-tooltip]').forEach(el => {
  el.addEventListener('mouseenter', (e) => {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-popup';
    tooltip.textContent = el.dataset.tooltip;
    tooltip.style.cssText = `
      position: fixed;
      background: #1E1B4B;
      color: white;
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 0.78rem;
      font-weight: 600;
      z-index: 9999;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(tooltip);

    const rect = el.getBoundingClientRect();
    tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';
    tooltip.style.left = (rect.left + rect.width/2 - tooltip.offsetWidth/2) + 'px';
  });

  el.addEventListener('mouseleave', () => {
    document.querySelectorAll('.tooltip-popup').forEach(t => t.remove());
  });
});

console.log('🐾 SoulPet - JS Loaded');