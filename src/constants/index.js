import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import moongladeProject from "../assets/moonglade-project.png";
import chitchatProject from "../assets/chitchat-project.png";
import newnetProject from "../assets/newnet-project.png";
import renewhouseProject from "../assets/renewhouse-project.svg";

export const HERO_CONTENT = `Hi, I'm Abhishek - a passionate Full-Stack and WordPress Developer, Data Analytics Enthusiast, and Machine Learning Learner focused on building efficient, scalable, and innovative digital solutions for the web and beyond.`;

export const ABOUT_TEXT = `I'm a passionate Full-Stack and WordPress Developer, Data Analytics Enthusiast, and Machine Learning Learner dedicated to building efficient, scalable, and innovative solutions. I enjoy working across the full development process, from crafting responsive user interfaces to building reliable backend systems and database-driven applications.

I have hands-on experience with React.js, Node.js, Express.js, MongoDB, MySQL, and WordPress, which enables me to develop dynamic web applications, custom websites, and practical digital products. I focus on writing clean, maintainable code and creating user-friendly experiences that solve real problems.

Alongside web development, I'm building strong skills in Data Analytics and Machine Learning. I use data to understand patterns, support better decisions, and explore intelligent systems that combine analytics with modern web technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "NewNet Secure Transactions - WordPress Website (Freelance Project)",
    image: newnetProject,
    status: "On Going",
    description:
      "Migrated NewNet Secure Transactions' client website from Duda to WordPress, redesigned the UI/UX with a modern responsive layout, rebuilt pages with Elementor, and optimized performance through image compression, asset handling, and cross-browser testing.",
    technologies: ["WordPress", "Elementor", "UI/UX", "Responsive Design", "Performance Optimization"],
    github: "https://",
    website: "https://newnet.com",
  },
  {
    title: "Moonglade - Creative Agency Website (Freelance Project)",
    image: moongladeProject,
    description:
      "Built Moonglade, a responsive agency-style website with animated page transitions, reusable UI components, modern routing, and an interactive visual experience optimized for a polished brand presence.",
    technologies: ["TypeScript", "React.js", "Vite", "Tailwind CSS", "Three.js", "Framer Motion"],
    github: "https://github.com/Abhishekch20/moonglade",
    website: "https://moongladeatelier.com",
  },
  {
    title: "RenewHouse - Home Renovation WordPress Website",
    image: renewhouseProject,
    description:
      "Designed and developed a full home renovation business website from scratch using WordPress and Elementor, with multi-section pages for hero, about, services, process, portfolio, testimonials, FAQs, and CTA-focused service pages.",
    technologies: ["WordPress", "Elementor", "Responsive Design", "UI/UX", "Service Pages"],
    github: "https://",
    website: "https://",
  },
  {
    title: "Urban Psychotic - Shopify eCommerce Store (Freelance Project)",
    image: project2,
    description:
      "Developed Urban Psychotic, a fully functional Shopify eCommerce store with complete store setup, custom theme customization, product management, payment gateway integration, automated shipping setup, discount systems, and third-party app integrations. Ensured high-performance UI, smooth checkout flow, and conversion-optimized design tailored to the brand's aesthetic.",
    technologies: ["Shopify", "Liquid", "JavaScript", "Shopify Admin", "Shopify App."],
    github: "https://",
    website: "https://urbanpsychotic.com",
  },
  {
    title: "NexGen - Platform Connecting Developers & Customers",
    image: project1,
    description:
      "Developed NexGen, a Next.js-based platform enabling custom website development services with user authentication, database integration, and a scalable content management workflow for clients and developers.",
    technologies: ["Next.j", "Tailwind CSS", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/Abhishekch20/NexGen-Connects-Developers-Customers ",
    website: "https://nexxgenn.netlify.app/",
  },
  {
    title: "Machine Learning-Based Sign Language Recognition",
    image: project3,
    description:
      "Developed a real-time ASL fingerspelling recognition system using a CNN-based model, achieving 95.79% accuracy. The system converts hand gestures into text, enabling communication assistance for deaf and speech-impaired individuals.",
    technologies: ["Python", "TensorFlow", "CNN", "NumPy", "OpenCV", "Google Colab", "Scikit-Learn"],
    github: "https://github.com/Abhishekch20/SIGN-LANGUAGE-RECOGNITION",
    website: "https://",
  },
  {
    title: "Fuel Type Classification",
    image: project4,
    description:
      "Created a machine learning model to classify vehicle fuel types using Telangana Vehicle Sales 2023 dataset. Achieved 99% accuracy with Random Forest, outperforming traditional models such as KNN.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Random Forest", "Data Preprocessing"],
    github: " https://github.com/Abhishekch20/FUEL-TYPE-CLASSIFICATION ",
    website: "https://",
  },
  {
    title: "Chit-Chat - Real-Time Chat Application",
    image: chitchatProject,
    description:
      "Developed Chit-Chat, a real-time chat application using Socket.io with instant messaging, group rooms through unique room IDs, and a simple responsive interface for session-based conversations.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Socket.io"],
    github: "https://github.com/Abhishekch20/CHIT-CHAT-Chat-Application-",
    website: "https://chit-chat-5e9g.onrender.com/",
  },
];

export const CONTACT = {
  phoneNo: "+91 9398379060",
  email: "abhishekchiluveru2004@gmail.com",
};
