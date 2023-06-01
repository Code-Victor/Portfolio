/* eslint-disable max-len */
import {
  SiGithub,
  SiInstagram,
  SiTwitter,
  SiLinkedin,
  SiCodepen,
} from "react-icons/si";
import featuredProjects from "./featured";
import projects from "./projects";
import journey from "./journey";
import * as tools from "./tools";

const config = {
  email: "oluwaborihamzat@gmail.com",
  featuredProjects,
  projects,
  tools,
  journey,
  skills: [
    "JavaScript",
    "TypeScript",
    "React Native",
    "React",
    "Next.js",
    "Python",
  ],
  coreValues: [
    { name: "Impact", color: "$gradient2" },
    { name: "Competence", color: "$gradient3" },
    { name: "Relationships", color: "$gradient1" },
  ],
  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/Code-Victor",
      icon: SiGithub,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/hamzatoluwabori",
      icon: SiInstagram,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/TheFireAndCode",
      icon: SiTwitter,
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/code-victor/",
      icon: SiLinkedin,
    },
    {
      name: "Codepen",
      url: "https://codepen.io/code-victor-the-typescripter",
      icon: SiCodepen,
    },
  ],
  experience: [
    {
      position: "Frontend Developer ",
      company: "InitZero",
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
      name: "About",
      url: "/about",
      color: "$gradient3",
    },
    {
      name: "Projects",
      url: "/projects",
      color: "$gradient1",
    },
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1nVBunYrITGUyWCOLdlauk9ziJezhUQjB/view?usp=sharing",
      color: "$gradient2",
    },
  ],
  colors: {
    green: "#64ffda",
    navy: "#0a192f",
    darkNavy: "#020c1b",
  },
};

export default config;
