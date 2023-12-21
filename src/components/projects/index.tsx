import React from 'react'
import Project from "./Projects";


type Props = {};

const Projects = (props: Props) => {
  return (
    <section id="projects" className="min-h-screen text-white">
      <h1 className="text-slate-100  tracking-wider font-poppins text-4xl font-bold">
        Projects
      </h1>
      <div className="mt-7 lg:max-w-[850px] mx-auto flex flex-col gap-3">
        <Project
          title="Create react app"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
        />
         <Project
          title="Create react app"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
        />
      </div>
    </section>
  );
};

export default Projects;