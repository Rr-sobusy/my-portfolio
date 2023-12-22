import React from "react";
import Project from "./Projects";

import { projectDetailDatas } from "./project-datas";

type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="min-h-screen text-white">
      <h1 className="text-4xl font-bold tracking-wider text-slate-100 font-poppins">
        Projects
      </h1>
      <div className="mt-[57px] lg:max-w-[950px] mx-auto flex flex-col gap-6">
        {projectDetailDatas.map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
