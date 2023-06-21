import {
  reactp,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  CU,
  workshop,
  threejs,
  fiver,
  sumz,
  fitness,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactp,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Bachelor's in Engineering(CSE)",
    company_name: "Chandigarh University",
    icon: CU,
    iconBg: "#383E56",
    date: "August 2017 - June 2021",
  },
  {
    title: "JavaScript Workshop",
    company_name: "Web Dev Army",
    icon: workshop,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - March 2023",
  }
];

const projects = [
  {
    name: "Fiverr UI Clone",
    description:
      "Fiverr UI clone using React.js and SCSS. Designed using functional React components, hooks, and React Router Dom.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: fiver,
    source_code_link: "https://github.com/Hatishk/fiverr",
    live: "https://stately-elf-3f4af3.netlify.app",
  },
  {
    name: "Sumz",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link: "https://github.com/Hatishk/AI_Summerizer",
    live: "https://stunning-pony-9208e6.netlify.app",
  },
  {
    name: "Fitness App",
    description:
      "This is fitness exercise website in which you can find 500+ exericises of diffrent body parts.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialUI",
        color: "green-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/Hatishk/fitness_app",
    live: "https://comforting-sprinkles-a73db6.netlify.app",
  },
];

export { services, technologies, experiences, projects };