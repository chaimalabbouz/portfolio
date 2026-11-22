// Pour ajouter un projet : copie une entrée ci-dessous et modifie-la.
// github / demo : mets l'URL, ou laisse null (le bouton est alors masqué).

export const domains = [
  { id: 'genai', label: 'GenAI, LLMs & Agents', color: 'var(--accent)' },
  { id: 'vision', label: 'Computer Vision', color: 'var(--accent-2)' },
  { id: 'ml', label: 'ML & MLOps', color: 'var(--violet)' },
]

export const projects = [
  {
    id: 'hr-assistant',
    domain: 'genai',
    title: 'AI-Powered HR Assistant',
    context: 'Self-initiated · Aug 2026',
    description:
      'An AI-powered assistant that lets employees interact with HR services and get accurate, context-aware answers to their HR questions. It grounds its answers in the company\'s policy documents and the employee\'s own data, and knows when to hand the conversation to a human instead of guessing.',
    highlights: [
      'Designed an agentic architecture with LangGraph and a ReAct-based workflow, combining hybrid RAG with reranking to retrieve the right passages from HR policy documents.',
      'Integrated an MCP server for secure, authenticated database access to employee-specific data: profiles, leave balances, manager details and support tickets.',
      'Implemented a human-in-the-loop escalation that routes out-of-scope or unanswerable requests to an HR representative, preventing unreliable answers.',
      'Evaluated with Ragas and deployed the complete solution on Render, Neon and Qdrant Cloud.',
    ],
    results: [
      { value: '80%', label: 'Context Precision' },
      { value: '83%', label: 'Faithfulness' },
    ],
    stack: ['Python', 'Pydantic', 'FastAPI', 'LangChain', 'LangGraph', 'Ragas', 'PostgreSQL', 'Qdrant', 'Docker', 'Render'],
    github: null,
    demo: null,
  },
  {
    id: 'stock-trading-assistant',
    domain: 'genai',
    title: 'AI-Powered Stock Trading Assistant',
    context: 'Academic project',
    description:
      'An AI-powered trading assistant for the Tunisian Stock Exchange that brings together price forecasting, sentiment analysis and anomaly detection, with a RAG-based news assistant on top.',
    highlights: [
      'Combined stock price forecasting with LightGBM, sentiment analysis and anomaly detection.',
      'Implemented a RAG-based financial news assistant using Llama to analyze market sentiment and provide source-grounded insights.',
      'Built an interactive Streamlit dashboard for stock analysis, portfolio tracking and market alerts.',
    ],
    results: [],
    stack: ['Python', 'LightGBM', 'MLForecast (Nixtla)', 'LangChain', 'RAG', 'FAISS', 'Groq API', 'Streamlit'],
    github: null,
    demo: null,
  },
  {
    id: 'expedia-ranking',
    domain: 'ml',
    title: 'Expedia Hotel Ranking: Learning-to-Rank MLOps Pipeline',
    context: 'Self-initiated · Nov 2026',
    description:
      'A learning-to-rank project that goes beyond the model: a LightGBM LambdaRank model trained on 5.7M Expedia searches to rank hotels, delivered as a containerized API inside a reproducible, monitored MLOps pipeline.',
    highlights: [
      'Built and deployed a FastAPI REST API serving a LightGBM LambdaRank model trained on 5.7M Expedia searches, containerized with Docker.',
      'Implemented a reproducible MLOps pipeline with DVC and MLflow for experiment tracking, model versioning and quality-gated releases.',
      'Automated build and delivery with a CI/CD pipeline and added production monitoring.',
    ],
    results: [
      { value: '0.55', label: 'NDCG@5' },
      { value: '5.7M', label: 'searches used for training' },
    ],
    stack: ['Python', 'LightGBM', 'DVC', 'MLflow', 'FastAPI', 'Docker', 'GitHub Actions', 'Evidently', 'Prometheus', 'Grafana'],
    github: null,
    demo: null,
  },
  {
    id: 'hippocampus',
    domain: 'vision',
    title: 'Hippocampus Subregions Segmentation from 3D MRI',
    context: 'Comparative deep learning study · ENIT',
    description:
      'A comparative deep learning study to segment the anterior and posterior hippocampal subregions from 3D MRI scans, a task made difficult by very small anatomical structures and severe class imbalance. Three architectures were compared to understand what really drives segmentation quality.',
    highlights: [
      'Designed a preprocessing pipeline with intensity normalization, foreground-based cropping, padding and targeted data augmentation.',
      'Implemented and compared three architectures: a 2D U-Net with custom multi-kernel convolutions, a baseline 3D U-Net and a Residual 3D U-Net.',
      'Evaluated performance with Dice scores, training curves and visual comparisons against ground-truth masks.',
    ],
    results: [
      { value: '0.79', label: 'test Dice, Residual 3D U-Net' },
      { value: '~0.22', label: 'validation Dice, 2D approach' },
    ],
    resultNote: 'The gap shows how much volumetric spatial information matters for this task.',
    stack: ['Python', 'PyTorch', 'NumPy', 'NiBabel', 'Scikit-learn', '2D/3D U-Net', 'Medical Image Processing'],
    github: null,
    demo: null,
  },
  {
    id: 'eeg-seizure',
    domain: 'ml',
    title: 'Epileptic Seizure Detection from EEG Signals',
    context: 'Deep learning · Medical AI · TUH EEG dataset',
    description:
      'A deep learning pipeline for automated epileptic seizure detection from multichannel EEG signals of the TUH EEG dataset, based on a published hybrid architecture.',
    highlights: [
      'Reproduced and adapted a 3D Deep Convolutional Autoencoder (3D-DCAE) for automatic feature extraction, with a Bidirectional LSTM (Bi-LSTM) to capture temporal dependencies and classify EEG segments.',
      'Built an end-to-end preprocessing pipeline: EEG signal extraction, temporal segmentation, annotation alignment, class balancing through data augmentation, and normalization.',
    ],
    results: [{ value: '97.37%', label: 'test accuracy' }],
    resultNote: 'Shows the potential of hybrid deep learning architectures for automated seizure detection.',
    stack: ['Python', 'Deep Learning', '3D Conv. Autoencoders', 'Bi-LSTM', 'EEG Signal Processing', 'TUH EEG'],
    github: null,
    demo: null,
  },
  {
    id: 'tennis-tracking',
    domain: 'vision',
    title: 'Intelligent Tennis Match Tracking & Analysis System',
    context: 'Self-initiated · In progress',
    description:
      'A computer vision system for real-time tennis match analysis, laying the foundation for automated match tracking and intelligent sports analytics.',
    highlights: [
      'Combining YOLO-based object detection and CNN models to detect and track players and the tennis ball across video frames.',
      'Goals: estimate ball speed, analyze player movements and improve spatial scene understanding.',
    ],
    results: [{ value: 'In progress', label: '' }],
    stack: ['Python', 'YOLO', 'CNNs', 'Computer Vision', 'Object Detection & Tracking', 'Video Analysis'],
    github: null,
    demo: null,
  },
  {
    id: 'credit-line-agent',
    domain: 'ml',
    title: 'Intelligent Credit Line Adjustment Agent Using Reinforcement Learning',
    context: 'Academic project · UTM',
    description:
      'An intelligent reinforcement learning agent that optimizes customer credit limits by balancing financial risk, customer satisfaction and profitability.',
    highlights: [
      'Designed a customer state representation based on credit utilization, payment history, usage trends and customer tenure.',
      'Defined an action space where the agent can increase, decrease, maintain or suspend a credit limit.',
      'Defined a reward function guiding the agent toward risk-aware decisions.',
      'Explored Q-Learning, SARSA and Deep Q-Networks (DQN) to learn optimal credit adjustment policies.',
    ],
    results: [{ value: '3', label: 'RL algorithms compared' }],
    stack: ['Python', 'Reinforcement Learning', 'Q-Learning', 'SARSA', 'DQN', 'Financial Decision Systems'],
    github: null,
    demo: null,
  },
]