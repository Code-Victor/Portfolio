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
      position: "Frontend Developer ",
      company: "Halphatek",
      role: [
        "I helped clients to build and deploy User Interfaces for MVP(Minimum Viable Product) for startups and business.",
        "I helped to maintain codebases of already started projects.",
        "Increase sites SEO(Search Engine Optimization), which in turn increased sales in multiple.",
      ],
      duration: "Mar 2021 - Aug 2022",
    },
    {
      position: "Web Developer",
      company: "Personal",
      role: [
        "A mix of solo and group projects to build technical and soft skills needed for real life projects.",
        "Focused on writing clean, maintainable and testable code.",
        "Developing semantically-correct, accessible and responsive web applications, as well as local software communities contributions.",
        "Building familiarity with Git workflow, Testing/TDD, Performance Optimization and CI/CD.",
      ],
      duration: "Dec 2019 - Present",
    },
  ],
  navLinks: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Experience",
      url: "/#experience",
    },
    {
      name: "Projects",
      url: "/projects",
    },
  ],
  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },
};

export default config;
