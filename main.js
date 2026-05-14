// ---- NAV ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}

// ---- ACTIVE NAV LINK ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});

// ---- INTERSECTION OBSERVER ANIMATIONS ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .how-step, .team-card, .dim-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Override with visibility class
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

// ---- SCORE RING ANIMATION (home page demo) ----
function animateScoreRing() {
  const ring = document.querySelector('.ring-fill');
  if (!ring) return;
  const score = 78;
  const circumference = 502;
  const offset = circumference - (score / 100) * circumference;
  ring.style.strokeDashoffset = offset;

  const bars = document.querySelectorAll('.score-bar-fill');
  const widths = [82, 65, 91, 73];
  bars.forEach((bar, i) => {
    setTimeout(() => { bar.style.width = widths[i] + '%'; }, 300 + i * 100);
  });
}

const scoreObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateScoreRing();
      scoreObserver.disconnect();
    }
  });
});

const scoreDemo = document.querySelector('.score-demo');
if (scoreDemo) scoreObserver.observe(scoreDemo);
