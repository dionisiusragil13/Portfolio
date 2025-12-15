import React from "react";
import ProjectCard from "./ProjectCard";

function Experience() {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-white text-[30px] font-sans font-bold">Experience</h1>
      <div className="w-45 h-1 bg-blue-500"></div>
      <p className="text-gray-400 mb-15">Looking For An Opportunity</p>
      <ProjectCard />
      <div className="max-w-4xl text-white my-5">Coming Soon</div>
    </div>
  );
}

export default Experience;
