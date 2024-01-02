import { ProjectTypes } from "@/types/Project-types";

export const projectDetailDatas: ProjectTypes[] = [
  {
    title: "my.pokedex",
    description:
      "My.pokedex is an app built using Nextjs on top of React and Tailwindcss. It fetches all known pokemon depends on what generation they belong with.",
    imagesSrc: [
      "/projects/my.pokedex/snapshot.png",
      "/projects/my.pokedex/about.png",
      "/projects/my.pokedex/stats.png",
      "/projects/my.pokedex/evolution.png",
      "/projects/my.pokedex/choose_gen.png",
    ],
    stacks: ["Nextjs", "Tailwindscss", "React Query", "Zustand"],
    githubRepo: "https://github.com/Rr-sobusy/pokedex-v2",
  },
  {
    title: "NFIC Warehouse Management System",
    description:
      "NFIC Warehouse Management System is a Fullstack Web Application built using Nextjs in client-side and NestJs on server side with Postgresql as data storage. It is used as an in-house monitoring app to keep track of datas from a Feed processing plant such as the inbounding and outbounding of products in the warehouse.",
    imagesSrc: [
      "/projects/nfic/dashboard.png",
      "/projects/nfic/dashboard_2.png",
      "/projects/nfic/stocks.png",
      "/projects/nfic/sales.png",
      "/projects/nfic/add_sales.png",
      "/projects/nfic/production.png",
      "/projects/nfic/erd.png",
    ],
    stacks: ["Nextjs", "Material Ui", "Nestjs", "Postgresql", "Typeorm"],
    githubRepo: "https://github.com/Rr-sobusy/pokedex-v2",
  },
  {
    title: "React Todo App",
    description: "React Todo App is a to-do list application. I built this practice project to explore about the use of custom hook and implementation of it with local-storage. ",
    imagesSrc: [
      "/projects/todo/dark.png",
      "/projects/todo/light.png",
      "/projects/todo/add.png",
      "/projects/todo/update.png",
    ],
    stacks: ["React T.S", "Tailwindcss", "Headless Ui"],
  },
  {
    title: "Coursespace Landing Page",
    description: "Coursespace ",
    imagesSrc: [
      "/projects/coursespace/home.png",
      "/projects/coursespace/courses.png",
      "/projects/coursespace/learning.png",
      "/projects/coursespace/mentors.png",
      "/projects/coursespace/footer.png",
    ],
    stacks: ["NextJs", "Tailwindcss", "Headless Ui"],
  },
];
