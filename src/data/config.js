export const hero = {
  name: "Your Name",
  tagline: "Full-Stack Developer & Designer",
  ctaText: "Contact Me",
  ctaLink: "#contact",
  avatar: "/assets/images/avatar.jpg",
};

export const about = {
  name: "John Doe",
  title: "Full-Stack Developer",
  bio: "I’m a passionate full-stack developer with expertise in React, Node.js, and modern web technologies. I love building scalable web applications and creating seamless user experiences. Always eager to learn new technologies and improve my craft.",
  avatar: "/assets/images/avatar.jpg",
  resume: "/assets/files/resume.pdf",
  location: "San Francisco, CA, USA",
  email: "john.doe@example.com",
  phone: "+1 (123) 456-7890",
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  },
  interests: [
    "Open-source contribution",
    "UI/UX design",
    "Tech blogging",
    "AI & Machine Learning",
    "Traveling"
  ],
};

export const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React and custom CSS.",
    tech: ["React", "CSS", "Framer Motion"],
    github: "https://github.com/johndoe/portfolio",
    demo: "https://johndoe.dev",
    image: "/assets/images/project1.png",
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce platform using Node.js and React.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce.johndoe.dev",
    image: "/assets/images/project2.png",
  },
];

export const skills = [
  { name: "React", type: "frontend", level: "Advanced", icon: "SiReact" },
  { name: "Node.js", type: "backend", level: "Intermediate", icon: "SiNodedotjs" },
  { name: "CSS", type: "frontend", level: "Advanced", icon: "SiCss3" },
  { name: "Figma", type: "tool", level: "Intermediate", icon: "SiFigma" },
  { name: "JavaScript", type: "frontend", level: "Advanced", icon: "SiJavascript" },
  { name: "TypeScript", type: "frontend", level: "Intermediate", icon: "SiTypescript" },
  { name: "HTML5", type: "frontend", level: "Advanced", icon: "SiHtml5" },
  { name: "Next.js", type: "frontend", level: "Intermediate", icon: "SiNextdotjs" },
  { name: "Express.js", type: "backend", level: "Intermediate", icon: "SiExpress" },
  { name: "MongoDB", type: "backend", level: "Intermediate", icon: "SiMongodb" },
  { name: "PostgreSQL", type: "backend", level: "Intermediate", icon: "SiPostgresql" },
  { name: "Tailwind CSS", type: "frontend", level: "Intermediate", icon: "SiTailwindcss" },
  { name: "Sass", type: "frontend", level: "Intermediate", icon: "SiSass" },
  { name: "Git", type: "tool", level: "Advanced", icon: "SiGit" },
  { name: "GitHub", type: "tool", level: "Advanced", icon: "SiGithub" },
  { name: "Docker", type: "tool", level: "Intermediate", icon: "SiDocker" },
  { name: "Redux", type: "frontend", level: "Intermediate", icon: "SiRedux" },
  { name: "GraphQL", type: "backend", level: "Intermediate", icon: "SiGraphql" },
  { name: "Python", type: "backend", level: "Intermediate", icon: "SiPython" },
  { name: "VS Code", type: "tool", level: "Advanced", icon: "SiVisualstudiocode" }
];


export const contact = {
  email: "john@example.com",
  phone: "+123456789",
  socials: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  },
};

export const emailConfig = {
  serviceID: "<YOUR_SERVICE_ID>",
  templateID: "<YOUR_TEMPLATE_ID>",
  userID: "<YOUR_PUBLIC_KEY>", // also called Public Key in EmailJS
};
