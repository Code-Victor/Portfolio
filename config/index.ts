/* eslint-disable max-len */
import featuredProjects from './featured';
import projects from './projects';
import * as tools from './tools'

const config = {
  email: "oluwaborihamzat@gmail.com",
  featuredProjects,
  projects,
  tools,
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "React",
    "Next.js",
    "Python",
  ],
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/Code-Victor",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hamzatoluwabori",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/VictorFiery",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/code-victor/",
    },
    {
      name: "Codepen",
      url: "https://codepen.io/code-victor-the-typescripter",
    },
  ],
  experience: [
    {
      position: "Frontend Developer (In Office)",
      company: "FreeBeings",
      role: [
        "Working on web applications and occasionally leading the development team.",
        "Using React and integrating external APIs with the HIVE blockchain.",
      ],
      duration: "Mar 2021 - Aug 2021",
    },
    {
      position: "Frontend Developer (Contractor)",
      company: "TDF",
      role: [
        "Made landing pages and web applications collaborating with the back-end engineers of the team.",
        "Convert designs into real world applications and pages using multiple front-end technologies.",
        "Frequently working on e-commerce projects.",
      ],
      duration: "Feb 2021 - Mar 2021",
    },
  ],
  navLinks: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Work",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],
  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },
};

export default config;
