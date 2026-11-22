// Toutes les infos personnelles à un seul endroit.
export const profile = {
  firstName: 'Chaima',
  lastName: 'Labbouz',
  handle: 'chaima.labbouz',
  photo: '/moi.png', // dépose ta photo dans /public/photo.jpg
  tagline: [
    'Computer engineer building ',
    { em: 'generative AI' },
    ' systems: ',
    { em: 'LLM apps' },
    ', ',
    { em: 'agents' },
    ' and the ',
    { em: 'vision & ML models' },
    ' behind them.',
  ],
  role: 'Computer engineer',
  school: 'ENIT, University of Tunis El Manar',
  location: 'Tunis, Tunisia',
  focus: 'GenAI · LLMs · Agents',
  status: 'open to work',
  email: 'chaima.labbouz@etudiant-enit.utm.tn',
  linkedin: 'https://www.linkedin.com/in/chaima-labbouz-82a279386',
  github: 'https://github.com/chaimalabbouz',
  stack: ['Python', 'PyTorch', 'LangGraph', 'LangChain', 'RAG', 'FastAPI', 'Docker', 'MLflow'],
}

export const about = {
  title: 'I build AI that works beyond the notebook.',
  paragraphs: [
    'I graduated from ENIT as a computer engineer, specialized in Data Science for Intelligent Communications. I work on generative AI, LLM-powered agents, computer vision and machine learning.',
    'What I care about most is the part that comes after the experiment: models that run reliably, are tested, and that people can actually use.',
  ],
  lookingFor: 'Looking for my first role in GenAI, Computer Vision or ML & MLOps.',
  domains: [
    { name: 'GenAI, LLMs & Agents', text: 'LLM applications, RAG and agents that use tools to get things done.', color: 'var(--accent)' },
    { name: 'Computer Vision', text: 'Models that read images and video, from training to deployment.', color: 'var(--accent-2)' },
    { name: 'ML & MLOps', text: 'Pipelines, tracking and deployment to keep models working in production.', color: 'var(--violet)' },
  ],
}

// Les sections de la page, dans l'ordre. Le menu se construit à partir de cette liste.
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'contact', label: 'Contact' },
]

export const experiences = [
  {
    project: 'AI Assistant for the Automated Generation of Web Applications',
    role: 'AI Engineer Intern · Final-Year Internship',
    company: 'Moonside',
    logo: '/logos/moonside.png', // dépose le logo dans public/logos/
    location: 'Tunisia',
    period: 'Feb 2026 – Jul 2026',
    summary:
      'Makes it fast to go from a design to a live web app. You provide a Figma design and a text description of the backend, and the system generates the complete application: frontend, backend and database. It targets standard web apps such as online stores and portfolios.',
    bullets: [
      'Built a multi-agent system that turns Figma designs and natural-language requirements into working web applications using LLMs.',
      'Designed closed-loop agents (coder, tester, fixer) that generate code, test it and fix failures automatically.',
      'Designed an Orchestrator–Worker microservices architecture: FastAPI coordinates asynchronous tasks through Celery and Redis to generate CRUD backends and frontend code.',
      'Automated code testing and validation, email notifications and workflow management with n8n.',
      'Implemented prompt injection defenses to protect agents from malicious instructions embedded in user-provided designs and natural-language requirements, ensuring secure code generation and application integrity.',
    ],
    metrics: [
      { value: '~10 min', label: 'per generated app' },
      { value: '0.85', label: 'average SSIM' },
      { value: '0.30', label: 'average LPIPS' },
      { value: 'A', label: 'SonarQube security & maintainability' },
    ],
    stack: ['LLMs', 'LangGraph', 'LangChain', 'Multi-agent', 'FastAPI', 'Celery', 'Redis', 'n8n', 'React', 'Docker', 'Kubernetes', 'SonarQube', 'Figma'],
  },
  {
    project: 'MedSynapse: Explainable AI for Pneumonia Detection from Chest X-rays',
    role: 'AI Engineer Intern · Summer Internship',
    company: 'NeoLedge',
    logo: '/logos/neoledge.png',
    location: 'Tunisia',
    period: 'Jul 2025 – Aug 2025',
    summary:
      'Deep learning can detect pneumonia from chest X-rays, but it gives a verdict with no reason, which limits clinicians\u2019 trust. MedSynapse classifies the X-ray and explains its reasoning in a clear medical narrative, backed by similar cases.',
    bullets: [
      'Fine-tuned a ResNet-50 with transfer learning for pneumonia classification, reaching around 96% accuracy.',
      'Evaluated the model with accuracy, precision and recall (sensitivity), not accuracy alone.',
      'Investigated a generalization failure with histogram and t-SNE analysis, found a distribution mismatch between the data splits and fixed it by reshuffling the dataset.',
      'Built the explainability layer: a convolutional autoencoder encodes each X-ray, FAISS retrieves similar cases, and a local LLM (Ollama) writes the medical narrative.',
      'Delivered the system as a Streamlit web app for practitioners.',
    ],
    metrics: [{ value: '~96%', label: 'classification accuracy' }],
    stack: ['ResNet-50', 'Autoencoder', 'FAISS', 'RAG', 'Ollama', 'Streamlit'],
  },
  {
    project: 'Clinify – AI-Powered Clinic Management Platform',
    role: 'Software Engineer Intern · Summer Internship',
    company: 'Oriv Group',
    logo: '/logos/oriv.png',
    location: 'Tunisia',
    period: 'Jun 2024 – Jul 2024',
    summary:
      'A healthcare management platform, on web and mobile, that helps clinics handle their daily work: appointments, medical records and patients, with AI-driven health recommendations.',
    bullets: [
      'Developed a healthcare management platform (web & mobile) for appointment scheduling, medical records and patient management.',
      'Integrated personalized AI-driven health recommendations and medication reminders.',
    ],
    metrics: [],
    stack: [],
  },
]

export const education = [
  {
    school: 'National Engineering School of Tunis (ENIT)',
    logo: '/logos/enit.png', // dépose le logo dans public/logos/
    degree: 'Engineering Degree – Data Science for Intelligent Communications (DSIC)',
    location: 'Tunis, Tunisia',
    period: 'Sep 2023 – Sep 2026',
    badge: { value: 'With Distinction', label: 'awarded for the final-year project (PFE)' },
  },
  {
    school: 'Preparatory Institute for Engineering Studies (IPEIEM)',
    logo: '/logos/ipeiem.png',
    degree: 'Preparatory cycle for engineering studies',
    location: 'Tunisia',
    period: 'Sep 2021 – May 2023',
    badge: { value: '140th / 1,000', label: 'National Competitive Exam ranking' },
  },
]

// Compétences : uniquement ce qui apparaît dans tes projets et stages.
export const skills = [
  {
    title: 'GenAI, LLMs & Agents',
    text: 'Building LLM applications and agents that retrieve, reason and act.',
    color: 'var(--accent)',
    items: ['LLMs', 'LangChain', 'LangGraph', 'Multi-agent systems', 'ReAct', 'RAG', 'Hybrid search & reranking', 'MCP', 'FAISS', 'Ollama', 'Groq API', 'Ragas', 'Prompt-injection defense'],
  },
  {
    title: 'Computer Vision & Deep Learning',
    text: 'Training and adapting deep models on images, volumes and signals.',
    color: 'var(--accent-2)',
    items: ['PyTorch', 'CNNs', 'ResNet-50 (transfer learning)', '2D/3D U-Net', 'YOLO', 'Autoencoders', 'Bi-LSTM', 'Medical image processing', 'EEG signal processing', 'NiBabel'],
  },
  {
    title: 'ML & MLOps',
    text: 'From reproducible experiments to monitored, quality-gated releases.',
    color: 'var(--violet)',
    items: ['LightGBM', 'Learning-to-Rank', 'MLForecast', 'Scikit-learn', 'Reinforcement Learning', 'DVC', 'MLflow', 'GitHub Actions (CI/CD)', 'Evidently', 'Prometheus', 'Grafana', 'SonarQube'],
  },
  {
    title: 'Databases',
    text: 'Relational, document and vector stores for data and retrieval.',
    color: '#f2d16b',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Qdrant (vector DB)'],
  },
  {
    title: 'Backend & Deployment',
    text: 'Serving models and agents through robust, containerized services.',
    color: '#c4a8ff',
    items: ['Python', 'FastAPI', 'Pydantic', 'Celery', 'Redis', 'Docker', 'Kubernetes', 'n8n', 'React', 'Streamlit', 'Render', 'Neon'],
  },
]

// Bénévolat. Dépose les photos dans public/volunteering/ (voir les chemins ci-dessous).
export const volunteering = [
  {
    title: 'Tunisian Engineering Day',
    role: 'Organizing Community Member',
    image: '/volunteering/tunisian-engineering-day.jpg',
    description:
      'Member of the organizing community of Tunisian Engineering Day, working with the team to prepare and run the event.',
    skills: ['Teamwork', 'Organization', 'Communication'],
  },
  {
    title: 'IEEE WIE ENIT',
    role: 'Media Manager · Executive Board Member',
    image: '/volunteering/ieee-wie-enit.jpg',
    description:
      "Media manager of IEEE WIE ENIT. I created the club's posts and led content creation and visibility initiatives.",
    skills: ['Content creation', 'Social media', 'Creativity', 'Communication'],
  },
  {
    title: 'WIE ACT 3.0 · Best IEEE WIE in Tunisia',
    role: 'Executive Board Member, IEEE WIE ENIT',
    image: '/volunteering/wie-act-3.jpg',
    description:
      'As an executive board member of IEEE WIE ENIT, I was part of the team that won the title of Best IEEE WIE in Tunisia at WIE ACT 3.0.',
    skills: ['Teamwork', 'Leadership', 'Commitment'],
  },
]

// Certificats en ligne. Ajoute une entrée pour en ajouter un.
export const certifications = [
  
  {
    title: 'Containerization and Virtualization Concepts',
    image: '/certificates/datacamp-containerization.png',
    issuer: 'DataCamp',
    color: 'var(--accent-2)',
    href: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/56baa8d96b496a2a6512ce685445576f0843176e?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa',
  },
  {
    title: 'Building Scalable Agentic Systems',
    image: '/certificates/datacamp-agentic.png',
    issuer: 'DataCamp',
    color: 'var(--accent-2)',
    href: 'https://www.datacamp.com/completed/statement-of-accomplishment/course/20a6111bad1413aa059670bb47cda1ad2a86ab73',
  },
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    image: '/certificates/datacamp-az900.png',
    issuer: 'DataCamp',
    color: 'var(--accent-2)',
    href: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/9f33c824753aa31bb605edb0c29458583271a530',
  },
  {
    title: 'CWL Certified AI Security Fundamentals',
    image: '/certificates/cwl-ai-security.png',
    issuer: 'Cyber Infinity Learning Platform (CWL)',
    color: 'var(--accent)',
    href: 'https://infinity.cyberwarfare.live/certification/achievement/41524f34-0958-4033-9257-f45bd740f08b',
  },
]