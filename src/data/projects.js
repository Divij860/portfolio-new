export const projects = [
  {
    id: 1,
    title: "Sign Language Animation Generation System",
    description: "A system that converts text input to its respective sign language animation, making communication more accessible.",
    techStack: ["Python", "Flask", "Computer Vision"],
    category: "technical",
    featured: true,
    image: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Divij860",
    demo: null,
    award: "2nd Prize at PRAKALPANA 1.0 (AIML branch)"
  },
  {
    id: 2,
    title: "Virtual Painter Software",
    description: "An innovative software that detects hand gestures and allows users to draw on a virtual canvas using computer vision.",
    techStack: ["Python", "OpenCV", "PyCharm"],
    category: "technical",
    featured: true,
    image: "https://images.pexels.com/photos/5474038/pexels-photo-5474038.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Divij860",
    demo: null
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with payment gateway integration, admin dashboard, and secure authentication.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    category: "client",
    featured: true,
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: null,
    demo: null
  },
  {
    id: 4,
    title: "Online Book Store",
    description: "A dynamic web application for browsing and purchasing books online with user authentication and cart functionality.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    category: "client",
    featured: false,
    image: "https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/Divij860",
    demo: null
  },
  {
    id: 5,
    title: "Admin Dashboard System",
    description: "Comprehensive admin dashboard with data visualization, user management, and real-time analytics.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "client",
    featured: false,
    image: "https://images.pexels.com/photos/7887821/pexels-photo-7887821.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: null,
    demo: null
  },
  {
    id: 6,
    title: "Business Portfolio Websites",
    description: "Multiple static and dynamic websites built for various clients with modern design and responsive layouts.",
    techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    category: "client",
    featured: false,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: null,
    demo: null
  }
];

export const skills = [
  { name: "MongoDB", icon: "database", category: "backend" },
  { name: "React", icon: "react", category: "frontend" },
  { name: "Node.js", icon: "nodejs", category: "backend" },
  { name: "Tailwind CSS", icon: "palette", category: "frontend" },
  { name: "GSAP", icon: "zap", category: "frontend" },
  { name: "SQL", icon: "database", category: "backend" },
  { name: "Framer Motion", icon: "move", category: "frontend" },
  { name: "JavaScript", icon: "code", category: "language" },
  { name: "Axios", icon: "arrow-right-left", category: "tools" },
  { name: "JWT", icon: "shield-check", category: "security" },
  { name: "Firebase", icon: "flame", category: "backend" },
  { name: "Postman", icon: "send", category: "tools" },
  { name: "Figma", icon: "figma", category: "design" },
  { name: "Git", icon: "git-branch", category: "tools" },
  { name: "Cloudinary", icon: "cloud", category: "tools" },
  { name: "Vercel", icon: "triangle", category: "deployment" }
];

export const experience = [
  {
    id: 1,
    title: "MERN Fullstack Developer",
    company: "Pendagon Technologies",
    location: "Kasaragod, Kerala",
    period: "Sep 2024 - Present",
    description: [
      "Developed and deployed static and dynamic websites, including e-commerce platforms",
      "Implemented payment gateways, admin dashboards, and secure authentication systems",
      "Built scalable applications using the MERN stack with Tailwind CSS and Next.js"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Next.js", "JWT"],
    logo: "💼"
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "Swizosoft",
    location: "Mangalore, Karnataka",
    period: "Mar 2024",
    description: [
      "Participated in the entire software development lifecycle, including requirement analysis, design, development, testing, and deployment",
      "Developed a webpage for an Online Book Store",
      "Collaborated with senior developers on client projects"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    logo: "🚀"
  }
];

export const achievements = [
  {
    id: 1,
    title: "PRAKALPANA 1.0 - 2nd Prize",
    description: "Secured 2nd prize for Sign Language Generating System at PRAKALPANA 1.0 (AIML branch)",
    date: "2024",
    icon: "trophy",
    category: "award"
  },
  {
    id: 2,
    title: "TECHVISION 2024 - Selected",
    description: "Project selected for TECHVISION 2024 project exhibition",
    date: "2024",
    icon: "award",
    category: "recognition"
  },
  {
    id: 3,
    title: "Full-Stack Web Development Certification",
    description: "Completed Full-Stack Web Development course, earning certification in modern MERN practices",
    date: "2024",
    icon: "graduation-cap",
    category: "certification"
  },
  {
    id: 4,
    title: "Bachelor of Engineering",
    description: "Graduated with 7.7 CGPA from Sahyadri College of Engineering and Management specializing in AI & ML",
    date: "2020-2024",
    icon: "book-open",
    category: "education"
  }
];
