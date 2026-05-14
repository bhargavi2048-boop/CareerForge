// ---- RESULTS PAGE ----
const scores = JSON.parse(sessionStorage.getItem('assessmentScores') || 'null');

// Default scores if accessed directly
const s = scores || { techScore: 74, resumeScore: 61, commScore: 82, portfolioScore: 55, overall: 71, level: 'Intermediate', name: 'Candidate' };

// Render name
const nameEl = document.getElementById('candidateName');
if (nameEl) nameEl.textContent = s.name;

// Animate big score ring
function animateBigRing() {
  const ring = document.getElementById('bigRingFill');
  const numEl = document.getElementById('bigScoreNum');
  const levelEl = document.getElementById('bigScoreLevel');
  
  if (!ring || !numEl) return;
  
  const circumference = 565;
  const offset = circumference - (s.overall / 100) * circumference;
  
  // Animate number
  let start = 0;
  const duration = 1500;
  const startTime = performance.now();
  
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * s.overall);
    numEl.textContent = current;
    ring.style.strokeDashoffset = circumference - (current / 100) * circumference;
    if (progress < 1) requestAnimationFrame(tick);
  }
  
  requestAnimationFrame(tick);
  if (levelEl) levelEl.textContent = s.level;
}

// Dimension cards
function renderDimensions() {
  const dims = [
    { label: 'Technical Skills', score: s.techScore, color: '#3b82f6' },
    { label: 'Resume Quality', score: s.resumeScore, color: '#6ee7b7' },
    { label: 'Communication', score: s.commScore, color: '#f59e0b' },
    { label: 'Portfolio', score: s.portfolioScore, color: '#a78bfa' },
  ];
  
  dims.forEach((d, i) => {
    const scoreEl = document.getElementById(`dim${i}Score`);
    const barEl = document.getElementById(`dim${i}Bar`);
    if (scoreEl) {
      scoreEl.textContent = d.score;
      scoreEl.style.color = d.color;
    }
    if (barEl) {
      barEl.style.background = d.color;
      setTimeout(() => { barEl.style.width = d.score + '%'; }, 400 + i * 150);
    }
  });
}

// Generate recommendations
function generateRecommendations() {
  const recs = [];
  
  if (s.techScore < 70) {
    recs.push({ priority: 'high', icon: '🔧', title: 'Strengthen Core Technical Skills', desc: 'Practice 2-3 LeetCode problems daily. Focus on arrays, strings, and trees. Aim for 50+ solved problems before interviews.' });
  }
  if (s.resumeScore < 70) {
    recs.push({ priority: 'high', icon: '📄', title: 'Revamp Your Resume', desc: 'Use the STAR format for bullet points. Add quantifiable metrics (e.g., "reduced load time by 40%"). Get it reviewed on r/resumes.' });
  }
  if (s.commScore < 60) {
    recs.push({ priority: 'high', icon: '🎤', title: 'Practice Mock Interviews', desc: 'Do at least 5 mock interviews on Pramp or Interviewing.io. Record yourself to identify filler words and hesitation patterns.' });
  }
  if (s.portfolioScore < 65) {
    recs.push({ priority: 'med', icon: '💼', title: 'Build Your Online Portfolio', desc: 'Create a GitHub profile README, pin 3-5 best projects with clear READMEs, and deploy at least 2 live projects.' });
  }
  if (s.techScore >= 70 && s.techScore < 85) {
    recs.push({ priority: 'med', icon: '🧩', title: 'Level Up System Design', desc: 'Study system design concepts: load balancing, caching, databases. Practice explaining trade-offs out loud.' });
  }
  if (s.resumeScore >= 70) {
    recs.push({ priority: 'low', icon: '✨', title: 'Tailor Resume Per Application', desc: 'Customize keywords for each job description. Use tools like Jobscan to optimize ATS compatibility.' });
  }
  if (s.commScore >= 70) {
    recs.push({ priority: 'low', icon: '🤝', title: 'Expand Your Network', desc: 'Connect with 5 professionals per week on LinkedIn. Attend virtual meetups and tech conferences.' });
  }
  
  // Ensure at least 3 recs
  if (recs.length < 3) {
    recs.push({ priority: 'low', icon: '🎯', title: 'Research Target Companies', desc: 'Deep-dive into your top 10 target companies. Understand their tech stack, culture, and interview format.' });
  }
  
  const container = document.getElementById('recommendationsList');
  if (!container) return;
  
  recs.forEach(r => {
    const el = document.createElement('div');
    el.className = 'rec-item';
    el.innerHTML = `
      <div class="rec-priority ${r.priority}">${r.icon}</div>
      <div class="rec-content">
        <h4>${r.title}</h4>
        <p>${r.desc}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

// Init
window.addEventListener('load', () => {
  setTimeout(animateBigRing, 300);
  setTimeout(renderDimensions, 200);
  setTimeout(generateRecommendations, 100);
});

// Download report
document.getElementById('downloadReport')?.addEventListener('click', () => {
  const report = `
AI CareerForge - Interview Readiness Report
============================================
Candidate: ${s.name}
Date: ${new Date().toLocaleDateString()}

OVERALL READINESS SCORE: ${s.overall}/100
Level: ${s.level}

DIMENSION BREAKDOWN:
--------------------
Technical Skills:  ${s.techScore}/100
Resume Quality:    ${s.resumeScore}/100
Communication:     ${s.commScore}/100
Portfolio:         ${s.portfolioScore}/100

Visit careerforge.ai to take your assessment again!
`;
  const blob = new Blob([report], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'CareerForge_Report.txt';
  a.click(); URL.revokeObjectURL(url);
});

// Retake
document.getElementById('retakeBtn')?.addEventListener('click', () => {
  sessionStorage.clear();
  window.location.href = 'assessment.html';
});
