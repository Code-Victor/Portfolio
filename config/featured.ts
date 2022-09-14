import GRD from "@public/images/projects/GRD-thumbnail.png";
import KeyBr from "@public/images/projects/keyboadr-thumbnail.png";
import Jadoo from "@public/images/projects/Jadoo-thumbnail.png";
import Pluralsight from "@public/images/projects/Pluralsight-thumbnail.png";
import SMD from "@public/images/projects/SMD-thumbnail.png";
import Crowdfund from "@public/images/projects/Crowdfunding-thumbnail.png";

const featured = [
  {
    title: "Github Repo Details",
    cover: GRD,
    github: "https://github.com/Code-Victor/github-repodetails",
    external: "https://github-repodetails.vercel.app/",
    showCase: "grd",
    descriptionHtml:
      "A simple app with excellent ui that allows you to log into your github account and get your repository details at a glance. It also supports complex search and theming ",
    techs: ["React", "Redux", "Firebase", "Tailwind"],
  },

  {
    title: "Keyboadr",
    cover: KeyBr,
    github: "https://github.com/Code-Victor/keyboarder",
    external: "https://code-victor.github.io/keyboarder/",
    showCase: "keyboadr",
    descriptionHtml:
      "I built a app that allows anyone to learn touch typing easily. It is built in a custom dark theme. With an onscreen keyboard, user`s can type in the text area and see the result in real time and also make improvements.",
    techs: ["React", "Javascript", "Css", "github"],
  },
  {
    title: "Jadoo Landing Page",
    cover: Jadoo,
    github: "https://github.com/Code-Victor/Jadoo-landing-page",
    external: "https://jadoo-landing-page.vercel.app/",
    showCase: "jadoo",
    descriptionHtml:
      "A Beautiful and pixel perfect implementation of a design for Jadoo, a travel agency.This was done with accessibility in mind and gentle animations to make the site more user friendly and lively.",
    techs: ["React", "Next.js", "framer-motion", "tailwind"],
  },
  {
    title: "Pluralsight clone",
    cover: Pluralsight,
    external: "https://code-victor.github.io/Pluralsight-Clone-v2/",
    github: "https://github.com/Code-Victor/Pluralsight-Clone-v2",
    descriptionHtml:
      "a pixel perfect replication of the outstanding landing page of <a target='_blank' href='https://pluralsight.com'>pluralsight</a> implemented with react and scss",
    techs: ["React.js", "SCSS", "vite"],
  },
  {
    title: "Social Media Dashboard",
    cover: SMD,
    external: "https://code-victor.github.io/dashboard-frontend-mentor/",
    github: "https://github.com/Code-Victor/dashboard-frontend-mentor",
    descriptionHtml:
      "A static social Media Dashboard with light and dark Mode and nice user interface",
    techs: ["React.js", "tailwindCSS", "headless ui"],
  },
  {
    title: "Crowdfunding  Page",
    cover: Crowdfund,
    external: "https://code-victor.github.io/crowdfunding-product-page/",
    github: "https://github.com/Code-Victor/crowdfunding-product-page",
    descriptionHtml:
      "a crowfunding application to allow donations and gives rewards based on various donations.it stores the state of donations until the total pull of money is reached",
    techs: ["HTML", "CSS", "Javascript"],
  },
];
export default featured;
