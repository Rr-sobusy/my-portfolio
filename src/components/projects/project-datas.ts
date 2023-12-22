import { ProjectTypes } from "@/types/Project-types";

export const projectDetailDatas: ProjectTypes[] = [
  {
    title: "my.pokedex",
    description:
      "My.pokedex is an app built using Nextjs on top of React and Tailwindcss. It fetches all known pokemons depends on what generation they belong with.",
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
      "My.pokedex is an app built using Nextjs on top of React and Tailwindcss. It fetches all known pokemons depends on what generation they belong with.",
    imagesSrc: [
      "/projects/nfic/dashboard.png",
      "/projects/nfic/dashboard_2.png",
      "/projects/nfic/stocks.png",
      "/projects/nfic/sales.png",
      "/projects/nfic/add_sales.png",
      "/projects/nfic/production.png",

    ],
    stacks: ["Nextjs", "Material U.I", "Nestjs", "Postgresql","Typeorm"],
    githubRepo: "https://github.com/Rr-sobusy/pokedex-v2",
  },
  {
    title : "React Todo App",
    description : 'Lorem Ispusjolanfasfojaif',
    imagesSrc : ["/projects/todo/dark.png","/projects/todo/light.png","/projects/todo/add.png","/projects/todo/update.png"],
    stacks : ["React T.S","Tailwindcss", "Headless U.I"]
  }
];
