import { Project, SkillCategory, Certification, EducationItem, LeadershipItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Riduan Aziz',
  title: 'Computer Science & Engineering Student | AI/ML Enthusiast | Software Developer',
  tagline: 'Passionate about building practical software, exploring artificial intelligence and machine learning, and developing technology-driven solutions to real-world problems.',
  email: 'riduan.aziz@example.com', // Replace with your email
  github: 'https://github.com/riduanaziz', // Replace with your GitHub username
  linkedin: 'https://linkedin.com/in/riduanaziz', // Replace with your LinkedIn profile
  resumePath: '/resume.pdf',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming',
    skills: ['Python', 'Java', 'C', 'C++', 'C#', 'PHP', 'SQL'],
  },
  {
    category: 'AI / Machine Learning',
    skills: [
      'PyTorch',
      'Hugging Face Transformers',
      'PEFT / LoRA',
      'OpenCV',
      'YOLO',
      'NLP',
      'Automatic Speech Recognition',
      'Deep Learning',
    ],
  },
  {
    category: 'Web Development',
    skills: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Android Development',
    skills: ['Java', 'XML', 'Firebase', 'Android Studio'],
  },
  {
    category: 'Data & Visualization',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Tableau'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab', 'Arduino', 'ESP32'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'regspeech12',
    title: 'RegSpeech12 — Bengali Dialect Speech Dataset',
    description: 'A large-scale spontaneous Bengali speech corpus designed for benchmarking Automatic Speech Recognition under regional dialectal variation across Bangladesh.',
    technologies: ['Python', 'PyTorch', 'Hugging Face Transformers', 'Whisper', 'PEFT/LoRA'],
    githubUrl: 'https://github.com/riduanaziz/RegSpeech12',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'voice-dialect-advisor',
    title: 'Voice-Based Local Dialect Disaster & Health Advisor',
    description: 'An AI/NLP-based system designed to provide useful disaster and health information through Bengali/local dialect speech interaction.',
    technologies: ['Python', 'NLP', 'Speech Recognition', 'Deep Learning'],
    githubUrl: 'https://github.com/riduanaziz/voice-dialect-advisor',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'smart-attendance',
    title: 'Smart Classroom Automated Attendance System',
    description: 'An automated attendance system using computer vision and face recognition.',
    technologies: ['Python', 'OpenCV', 'face_recognition', 'PHP', 'MySQL'],
    githubUrl: 'https://github.com/riduanaziz/smart-classroom-attendance',
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 'coastal-energy-map',
    title: 'Coastal Renewable Energy Map & Feasibility Tool',
    description: 'An interactive tool for exploring renewable energy potential using geographical and environmental data.',
    technologies: ['Python', 'Streamlit', 'Folium', 'Plotly', 'REST API'],
    githubUrl: 'https://github.com/riduanaziz/coastal-renewable-energy-tool',
    liveDemoUrl: 'https://coastal-energy-tool.example.com',
    category: 'Data',
    featured: false,
  },
  {
    id: 'wind-turbine-logger',
    title: 'Benchtop Wind Turbine Logger',
    description: 'An IoT-based system for monitoring and logging wind turbine measurements.',
    technologies: ['ESP32', 'C/C++', 'ThingSpeak'],
    githubUrl: 'https://github.com/riduanaziz/benchtop-wind-turbine-logger',
    category: 'IoT',
    featured: false,
  },
  {
    id: 'aircraft-detection',
    title: 'Aircraft Detection System',
    description: 'A computer vision project for detecting aircraft using YOLO.',
    technologies: ['Python', 'YOLOv8', 'OpenCV'],
    githubUrl: 'https://github.com/riduanaziz/aircraft-detection-system',
    category: 'AI/ML',
    featured: false,
  },
  {
    id: 'spendwise',
    title: 'SpendWise — Smart Expense Tracker',
    description: 'An Android application for managing personal expenses and tracking spending.',
    technologies: ['Java', 'XML', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/riduanaziz/SpendWise',
    category: 'Android',
    featured: false,
  },
  {
    id: 'aziz-mansion',
    title: 'Aziz Mansion — Rent Management System',
    description: 'An Android-based rental management application for managing tenants, rent records, and related information.',
    technologies: ['Java', 'XML', 'Firebase', 'Android Studio'],
    githubUrl: 'https://github.com/riduanaziz/aziz-mansion-rent-manager',
    category: 'Android',
    featured: false,
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'BSc in Computer Science and Engineering',
    institution: '[University Name Placeholder]',
    period: '2022 — Present',
    cgpa: '[CGPA Placeholder]',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Networks',
    ],
    achievements: [
      'Participated in ICPC Asia Dhaka Regional Contest',
      'Active contributor to student technical projects and research initiatives',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'CS50x: Introduction to Computer Science',
    issuer: 'HarvardX / edX',
    year: '2024',
    credentialUrl: 'https://cs50.harvard.edu/certificates/placeholder',
  },
  {
    id: '2',
    name: 'AWS Academy Graduate – Machine Learning Foundations',
    issuer: 'AWS Academy',
    year: '2024',
    credentialUrl: 'https://www.credly.com/org/amazon-web-services/placeholder',
  },
  {
    id: '3',
    name: 'Microsoft Office Specialist: Excel Certification — Intermediate Level',
    issuer: 'Microsoft',
    year: '2023',
  },
  {
    id: '4',
    name: 'Microsoft Office Specialist: Excel Certification — Beginner Level',
    issuer: 'Microsoft',
    year: '2023',
  },
  {
    id: '5',
    name: 'Professional Outsourcing Training',
    issuer: '[Issuing Authority Placeholder]',
    year: '2023',
  },
  {
    id: '6',
    name: 'Disaster Management Training',
    issuer: '[Issuing Authority Placeholder]',
    year: '2023',
  },
  {
    id: '7',
    name: 'ICPC Asia Dhaka Regional Contest Participation',
    issuer: 'ICPC Committee',
    year: '2024',
  },
];

export const RESEARCH_INTERESTS: string[] = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Bengali NLP',
  'Automatic Speech Recognition',
  'Computer Vision',
  'AI for Disaster Management',
  'Regional & Dialectal Language Technology',
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    title: 'Rover Scout / Youth Leader',
    organization: 'Bangladesh Scouts',
    period: '2022 — Present',
    description: 'Active involvement in community service, disaster response training, and youth leadership activities.',
    bullets: [
      'Organized local community relief drives and public safety awareness sessions.',
      'Demonstrated leadership in managing team logistics and volunteer coordination during campus and regional events.',
    ],
  },
  {
    title: 'Student Member / Organizer',
    organization: 'AWS Student Builder Group & Campus Tech Club',
    period: '2023 — Present',
    description: 'Promoted cloud technologies, organized peer study groups, and facilitated technical workshops.',
    bullets: [
      'Assisted in conducting student workshops on machine learning and software development basics.',
      'Engaged with tech communities to mentor junior students in programming.',
    ],
  },
];
