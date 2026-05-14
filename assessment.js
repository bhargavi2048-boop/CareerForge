// ---- ASSESSMENT FORM LOGIC ----
let currentStep = 0;
const totalSteps = 5;
let timerInterval;
let secondsElapsed = 0;
const maxSeconds = 120; // 2 min

const steps = document.querySelectorAll('.form-step');
const dots = document.querySelectorAll('.progress-dots .dot');
const timerEl = document.getElementById('timerCount');
const timerBar = document.getElementById('timerProgress');

function updateStep(idx) {
  steps.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
  });
  dots.forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i < idx) d.classList.add('done');
    if (i === idx) d.classList.add('active');
  });
  currentStep = idx;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.btn-next').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) updateStep(currentStep + 1);
  });
});

document.querySelectorAll('.btn-back').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) updateStep(currentStep - 1);
  });
});

// Timer
function startTimer() {
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const remaining = maxSeconds - secondsElapsed;
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    if (timerEl) timerEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
    if (timerBar) timerBar.style.width = ((secondsElapsed / maxSeconds) * 100) + '%';
    if (remaining <= 0) {
      clearInterval(timerInterval);
      submitAssessment();
    }
  }, 1000);
}

if (document.querySelector('.assessment-form')) {
  startTimer();
}

// Submit
const submitBtn = document.getElementById('submitAssessment');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    submitAssessment();
  });
}

function submitAssessment() {
  clearInterval(timerInterval);
  
  // Collect data
  const formData = collectFormData();
  
  // Calculate scores
  const scores = calculateScores(formData);
  
  // Save to sessionStorage
  sessionStorage.setItem('assessmentScores', JSON.stringify(scores));
  sessionStorage.setItem('assessmentData', JSON.stringify(formData));
  
  // Redirect to results
  window.location.href = 'results.html';
}

function collectFormData() {
  const data = {};
  
  // Step 1: basics
  data.name = document.getElementById('fullName')?.value || 'Candidate';
  data.role = document.getElementById('targetRole')?.value || '';
  data.experience = document.getElementById('experience')?.value || '';
  
  // Step 2: technical
  const techSkills = [];
  document.querySelectorAll('input[name="techSkills"]:checked').forEach(cb => techSkills.push(cb.value));
  data.techSkills = techSkills;
  data.dsaLevel = document.getElementById('dsaLevel')?.value || 3;
  data.projectsCount = document.querySelector('input[name="projects"]:checked')?.value || '1-2';
  
  // Step 3: resume
  data.resumeHas = [];
  document.querySelectorAll('input[name="resumeHas"]:checked').forEach(cb => data.resumeHas.push(cb.value));
  data.resumeUpdated = document.querySelector('input[name="resumeUpdated"]:checked')?.value || 'yes';
  data.resumeReviewed = document.querySelector('input[name="resumeReviewed"]:checked')?.value || 'no';
  
  // Step 4: communication
  data.mockInterviews = document.getElementById('mockInterviews')?.value || 0;
  data.communicationConf = document.getElementById('communicationConf')?.value || 3;
  data.starMethod = document.querySelector('input[name="starMethod"]:checked')?.value || 'no';
  
  // Step 5: portfolio
  data.hasGithub = document.querySelector('input[name="hasGithub"]:checked')?.value || 'no';
  data.portfolioProjects = document.querySelector('input[name="portfolioProjects"]:checked')?.value || '1-2';
  data.certifications = document.querySelector('input[name="certs"]:checked')?.value || 'none';
  
  return data;
}

function calculateScores(data) {
  // TECHNICAL SCORE
  let techScore = 0;
  techScore += Math.min(data.techSkills.length * 12, 40);
  techScore += (parseInt(data.dsaLevel) / 5) * 30;
  const projMap = { '0': 0, '1-2': 15, '3-5': 25, '6+': 30 };
  techScore += projMap[data.projectsCount] || 15;

  // RESUME SCORE
  let resumeScore = 0;
  resumeScore += Math.min(data.resumeHas.length * 14, 60);
  resumeScore += data.resumeUpdated === 'yes' ? 20 : 0;
  resumeScore += data.resumeReviewed === 'yes' ? 20 : 0;

  // COMMUNICATION SCORE
  let commScore = 0;
  commScore += Math.min(parseInt(data.mockInterviews) * 10, 40);
  commScore += (parseInt(data.communicationConf) / 5) * 35;
  commScore += data.starMethod === 'yes' ? 25 : 0;

  // PORTFOLIO SCORE
  let portfolioScore = 0;
  portfolioScore += data.hasGithub === 'yes' ? 35 : 0;
  const portMap = { '0': 0, '1-2': 20, '3-5': 35, '6+': 45 };
  portfolioScore += portMap[data.portfolioProjects] || 20;
  const certMap = { 'none': 0, '1': 15, '2-3': 20, '4+': 20 };
  portfolioScore += certMap[data.certifications] || 0;

  // Normalize to 100
  techScore = Math.min(Math.round(techScore), 100);
  resumeScore = Math.min(Math.round(resumeScore), 100);
  commScore = Math.min(Math.round(commScore), 100);
  portfolioScore = Math.min(Math.round(portfolioScore), 100);

  const overall = Math.round((techScore * 0.3 + resumeScore * 0.25 + commScore * 0.25 + portfolioScore * 0.2));
  
  let level = 'Beginner';
  if (overall >= 75) level = 'Interview Ready';
  else if (overall >= 55) level = 'Intermediate';
  else if (overall >= 35) level = 'Developing';
  
  return { techScore, resumeScore, commScore, portfolioScore, overall, level, name: data.name };
}
