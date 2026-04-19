/* DATA */
const SKILLS = {
  aiml: [
    {name:'Python',level:95},{name:'TensorFlow',level:85},{name:'PyTorch',level:80},
    {name:'Scikit-learn',level:90},{name:'LangChain',level:75},{name:'OpenCV',level:85},
    {name:'Machine Learning',level:90},{name:'Deep Learning',level:85},{name:'NLP & GenAI',level:88}
  ],
  frontend: [
    {name:'HTML',level:95},{name:'CSS',level:90},{name:'JavaScript',level:85},
    {name:'React',level:90},{name:'TypeScript',level:80}
  ],
  backend: [
    {name:'Node.js',level:90},{name:'Flask',level:85},{name:'FastAPI',level:80},
    {name:'REST APIs',level:88}
  ],
  tools: [
    {name:'Git & GitHub',level:95},{name:'Docker',level:70},{name:'MongoDB',level:85},
    {name:'SQL',level:80},{name:'Data Structures & Algorithms',level:85},
    {name:'System Design',level:75},{name:'Statistics & Probability',level:80}
  ]
};

const PROJECTS = [
  {title:'Smart AI Assistant',category:'ai',desc:'A context-aware AI assistant capable of answering queries, summarizing content, and generating intelligent responses with real-time chat, memory, voice input, and streaming capabilities.',stack:['React','Node.js','OpenAI API','MongoDB'],grad:'grad-1'},
  {title:'ML Emotion Detector',category:'ai',desc:'Real-time facial emotion detection system using CNN trained on FER2013 dataset with live webcam emotion detection, face tracking using OpenCV, and 94% accuracy.',stack:['Python','TensorFlow','OpenCV'],grad:'grad-2'},
  {title:'DevCollab Hub',category:'web',desc:'A real-time collaborative coding platform for developers with multi-user interaction, live code sharing, room-based sessions, syntax highlighting, and real-time cursor tracking.',stack:['React','Node.js','Socket.io'],grad:'grad-3'},
  {title:'AI Quiz Generator',category:'web',desc:'A dynamic quiz application that generates questions and evaluates performance with topic-based quiz generation, score tracking, difficulty levels, and instant feedback.',stack:['HTML','CSS','JavaScript'],grad:'grad-4'},
  {title:'E-Commerce Website',category:'web',desc:'A responsive e-commerce interface with smooth UI and product browsing experience featuring product listing & filtering, add to cart functionality, responsive design, and smooth animations.',stack:['HTML','CSS','JavaScript'],grad:'grad-5'},
  {title:'AI Data Analyzer',category:'ai',desc:'A smart data analysis tool that provides insights, visualizations, and predictions from datasets with CSV upload, automated visualization, ML-based predictions, and insight generation.',stack:['Python','Pandas','Matplotlib','Flask'],grad:'grad-6'},
  {title:'Resume Analyzer (ATS + GenAI)',category:'ai',desc:'An AI-powered system that evaluates resumes and provides optimization suggestions with resume parsing, ATS scoring, skill gap detection, and AI-based recommendations.',stack:['Python','NLP','OpenAI API'],grad:'grad-1'}
];

const TIMELINE = [
  {year:'2023 - Present',title:'B.Tech in CSE (Data Science)',company:'JSS Academy of Technical Education, Noida',desc:'Currently pursuing B.Tech in Computer Science with specialization in Data Science. Gaining strong foundation in programming, data structures, algorithms, and machine learning concepts. Actively working on academic and personal projects to apply theoretical knowledge in real-world scenarios and continuously improving problem-solving and development skills.',icon:'<i class="fas fa-graduation-cap"></i>'},
  {year:'2024 - Present',title:'Aspiring AI/ML & Full Stack Developer',company:'Self-Driven Journey',desc:'Started coding journey in 2024 with a focus on AI/ML and web development. Built multiple real-world projects integrating machine learning and full stack technologies. Developed strong problem-solving skills through consistent practice. Actively exploring modern technologies like GenAI, LLMs, and scalable architectures. Continuously improving development and system design skills.',icon:'<i class="fas fa-briefcase"></i>'},
  {year:'2025 - Present',title:'Data Structures & Algorithms Practice',company:'Problem Solving',desc:'Solved 200+ DSA problems across platforms (LeetCode, GFG, etc.). Strengthened understanding of time and space complexity. Practiced key topics including arrays, linked lists, trees, graphs, and dynamic programming. Improved logical thinking and coding efficiency.',icon:'<i class="fas fa-code"></i>'},
  {year:'2026 - Present',title:'Self-Driven Learning & Project Development',company:'Continuous Growth',desc:'Built multiple AI/ML and full stack projects to apply theoretical knowledge. Learned and implemented machine learning, deep learning, and backend systems. Gained hands-on experience with APIs, model integration, and frontend development. Maintaining consistency in learning and building projects.',icon:'<i class="fas fa-star"></i>'}
];

/* INIT */
document.getElementById('year').textContent = new Date().getFullYear();

// Greeting
const hr = new Date().getHours();
document.getElementById('greeting').textContent =
  hr < 12 ? 'Good morning' : hr < 18 ? 'Good afternoon' : 'Good evening';

/* NAVBAR */
let scrollThrottle = false;
window.addEventListener('scroll', () => {
  if(scrollThrottle) return;
  scrollThrottle = true;
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  setTimeout(()=>scrollThrottle=false, 16);
});

function smoothScroll(e, id) { e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
function smoothScrollTo(id) { document.querySelector(id)?.scrollIntoView({behavior:'smooth'}); }
function toggleMobile() { document.getElementById('mobileMenu').classList.toggle('open'); }
function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }

/* PARTICLE CANVAS */
(function(){
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [], mouse = {x:-9999,y:-9999}, animId;
  let isVisible = true;

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  }
  function init(){
    particles = [];
    const count = Math.floor(canvas.width * canvas.height / 10000);
    for(let i=0;i<count;i++){
      particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        vx: (Math.random()-0.5)*0.3,
        vy: (Math.random()-0.5)*0.3,
        size: Math.random()*2+1,
        glow: Math.random()>0.8
      });
    }
  }
  
  let mouseThrottle = false;
  window.addEventListener('mousemove',e=>{
    if(mouseThrottle) return;
    mouseThrottle = true;
    mouse.x=e.clientX; mouse.y=e.clientY;
    setTimeout(()=>mouseThrottle=false, 16);
  });
  
  const visibilityObserver = new IntersectionObserver((entries)=>{
    isVisible = entries[0].isIntersecting;
    if (isVisible && !animId) draw();
    else if (!isVisible && animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }
  });
  visibilityObserver.observe(document.getElementById('home'));
  
  function draw(){
    if (!isVisible) return;
      
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<particles.length;i++){
      const p=particles[i];
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0;
      if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=canvas.height;
      
      if(p.glow){
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size+1,0,Math.PI*2);
        ctx.fillStyle='rgba(0,230,255,0.9)';
        ctx.shadowBlur=15; ctx.shadowColor='rgba(0,230,255,0.8)';
        ctx.fill(); ctx.shadowBlur=0;
      } else {
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2);
        ctx.fillStyle='rgba(255,120,20,0.8)';
        ctx.shadowBlur=8; ctx.shadowColor='rgba(255,100,0,0.6)';
        ctx.fill(); ctx.shadowBlur=0;
      }
      
      for(let j=i+1;j<Math.min(i+5,particles.length);j++){
        const q=particles[j];
        const dx=p.x-q.x,dy=p.y-q.y,dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<140){
          const a=(1-dist/140)*0.5;
          ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
          ctx.strokeStyle=`rgba(255,100,10,${a})`; ctx.lineWidth=0.8;
          ctx.shadowBlur=4; ctx.shadowColor='rgba(255,80,0,0.5)';
          ctx.stroke(); ctx.shadowBlur=0;
        }
      }
      const mdx=p.x-mouse.x,mdy=p.y-mouse.y,md=Math.sqrt(mdx*mdx+mdy*mdy);
      if(md<150){
        const a=(1-md/150)*0.6;
        ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mouse.x,mouse.y);
        ctx.strokeStyle=`rgba(0,230,255,${a})`; ctx.lineWidth=0.8;
        ctx.shadowBlur=6; ctx.shadowColor='rgba(0,230,255,0.4)';
        ctx.stroke(); ctx.shadowBlur=0;
      }
      }
      animId=requestAnimationFrame(draw);
    }
  window.addEventListener('resize',resize);
  resize(); draw();
})();

/* SCROLL REVEAL */
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.1});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>observer.observe(el));

/* SKILLS */
function renderSkills(key){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  SKILLS[key].forEach((s,i)=>{
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.style.animationDelay = i*0.05+'s';
    card.innerHTML = `
      <div class="skill-card-header">
        <h4>${s.name}</h4>
        <span>${s.level}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar" data-level="${s.level}"></div>
      </div>`;
    grid.appendChild(card);
  });
  setTimeout(()=>{
    grid.querySelectorAll('.skill-bar').forEach(bar=>{
      bar.style.width = bar.dataset.level + '%';
    });
  },100);
}
function switchSkill(btn, key){
  document.querySelectorAll('.skill-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderSkills(key);
}
renderSkills('aiml');
document.querySelector('.skill-tab.active').click = null;
document.querySelectorAll('.skill-tab').forEach((t,i)=>{ if(i===2) t.classList.add('active'); else t.classList.remove('active'); });
renderSkills('aiml');

/* PROJECTS */
function renderProjects(filter){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML='';
  const list = filter==='all' ? PROJECTS : PROJECTS.filter(p=>p.category===filter);
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-thumb ${p.grad}">
        <div class="project-actions">
          <a href="#" class="project-action-btn github" title="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
          </a>
          <a href="#" class="project-action-btn demo" title="Live Demo">?</a>
        </div>
      </div>
      <div class="project-body">
        <div class="project-cat">${p.category}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-stack">${p.stack.map(t=>`<span class="project-tech">${t}</span>`).join('')}</div>
      </div>`;
    grid.appendChild(card);
    card.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>observer.observe(el));
  });
}
function filterProjects(btn, key){
  document.querySelectorAll('.filter-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  renderProjects(key);
}
renderProjects('all');

/* TIMELINE */
(function(){
  const container = document.getElementById('timelineItems');
  TIMELINE.forEach((item,i)=>{
    const div = document.createElement('div');
    div.className = 'timeline-item reveal';
    const titleWithAccent = item.title.includes('Data Science') 
      ? item.title.replace('Data Science', '<span style="color:var(--cyan)">Data Science</span>')
      : item.title;
    
    div.innerHTML = `
      <div class="timeline-node">${item.icon}</div>
      <div class="timeline-content">
        <div class="timeline-card">
          <span class="timeline-year">${item.year}</span>
          <h3>${titleWithAccent}</h3>
          <h4>${item.company}</h4>
          <p>${item.desc}</p>
        </div>
      </div>`;
    container.appendChild(div);
    observer.observe(div);
  });
})();

/* CONTACT FORM */
(function() {
  console.log('Starting EmailJS initialization...');
  
  if (!window.EMAILJS_CONFIG) {
    console.error('EmailJS configuration not found.');
    return;
  }
  
  if (!window.EMAILJS_CONFIG.PUBLIC_KEY) {
    console.error('EmailJS Public Key is missing.');
    return;
  }
  
  try {
    console.log('Attempting to initialize EmailJS...');
    emailjs.init(window.EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('EmailJS initialization failed:', error);
  }
})();

function sendEmail(e) {
  e.preventDefault();
  
  const btn = document.getElementById('sendBtn');
  const txt = document.getElementById('sendText');
  const spinner = document.getElementById('sendSpinner');
  const form = e.target;
  
  btn.disabled = true;
  txt.style.display = 'none';
  spinner.style.display = 'block';
  
  if (!window.EMAILJS_CONFIG || 
      !window.EMAILJS_CONFIG.SERVICE_ID || 
      !window.EMAILJS_CONFIG.TEMPLATE_ID) {
    console.error('EmailJS credentials are missing.');
    
    btn.disabled = false;
    spinner.style.display = 'none';
    txt.textContent = '? Contact form not configured.';
    txt.style.display = 'block';
    txt.style.color = '#f59e0b';
    
    setTimeout(function() {
      txt.textContent = 'Send Message ?';
      txt.style.color = '';
    }, 5000);
    return;
  }
  
  emailjs.sendForm(
    window.EMAILJS_CONFIG.SERVICE_ID,
    window.EMAILJS_CONFIG.TEMPLATE_ID,
    form
  )
    .then(function(result) {
      console.log('SUCCESS!', result.status, result.text);
      
      btn.disabled = false;
      spinner.style.display = 'none';
      txt.textContent = '? Message Sent!';
      txt.style.display = 'block';
      txt.style.color = '#4ade80';
      
      form.reset();
      
      setTimeout(function() {
        txt.textContent = 'Send Message ?';
        txt.style.color = '';
      }, 3000);
      
    }, function(error) {
      console.log('FAILED...', error);
      
      btn.disabled = false;
      spinner.style.display = 'none';
      txt.textContent = '? Failed to send. Try again.';
      txt.style.display = 'block';
      txt.style.color = '#ef4444';
      
      setTimeout(function() {
        txt.textContent = 'Send Message ?';
        txt.style.color = '';
      }, 3000);
    });
}

/* CHATBOT */
let chatOpen = false;
function toggleChat(){
  chatOpen = !chatOpen;
  const win = document.getElementById('chatWindow');
  win.classList.toggle('hidden', !chatOpen);
}
function getAIResponse(input){
  const q = input.toLowerCase();
  if(q.includes('skill')||q.includes('tech')) return "Shobhit is a powerhouse in AI/ML (Python, TensorFlow, PyTorch) and Full Stack (React, Node.js, TypeScript). Check out the Skills section for the full breakdown!";
  if(q.includes('project')||q.includes('build')) return "He has built a Smart AI Assistant, ML Emotion Detector, and DevCollab Hub. See the Projects section for all details!";
  if(q.includes('experience')||q.includes('work')) return "Currently an AI/ML Research Intern. Previously a Full Stack Developer Intern building features used by 50k+ daily users.";
  if(q.includes('contact')||q.includes('hire')||q.includes('email')) return "Reach out via the Contact form on this page, or connect on LinkedIn and GitHub. Always open to new opportunities!";
  if(q.includes('resume')||q.includes('cv')) return "You can download his resume using the Download Resume button in the Hero section at the top!";
  return "That's a great question! I recommend scrolling through the portfolio sections or contacting Shobhit directly to learn more.";
}
function appendChatMsg(text, sender){
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${sender}`;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function sendChatMsg(text){
  const input = document.getElementById('chatInput');
  const msg = text || input.value.trim();
  if(!msg) return;
  appendChatMsg(msg, 'user');
  input.value='';
  document.getElementById('chatSuggestions').style.display='none';
  const typing = document.getElementById('chatTyping');
  typing.classList.add('show');
  document.getElementById('chatMessages').scrollTop = 99999;
  setTimeout(()=>{
    typing.classList.remove('show');
    appendChatMsg(getAIResponse(msg),'ai');
  }, 1000+Math.random()*800);
}

/* SKILL BAR INTERSECTION */
const skillObserver = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.querySelectorAll('.skill-bar[data-level]').forEach(bar=>{
        bar.style.width = bar.dataset.level+'%';
      });
      skillObserver.unobserve(e.target);
    }
  });
},{threshold:0.2});
skillObserver.observe(document.getElementById('skills'));
