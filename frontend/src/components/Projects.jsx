import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  const projectList = [
    {
      id: 1,
      name: "LeafSense (Personal Project)",
      preview: "leafsense.png",
      description:
        "A modern plant disease detection platform built with Flask as the backend and react as the frontend, offering AI-powered image recognition and comprehensive plant care guidance.",
      tech: ["Flask", "React", "TensorFlow", "Tailwind CSS", "Python"],
      link: "https://github.com/dionisiusragil13/herbal-leaf-classifier/tree/main",
    },
    {
      id: 2,
      name: "Space War (Personal Project)",
      preview:
        "SpaceWar.png",
      description:
        "A shooting 2D game with space theme.",
      tech: ["Figma", "C#", "Unity"],
      link: "https://github.com/yourusername/askfinancee",
    },
    {
      id: 3,
      name: "BioFace (Team Project)",
      preview: "BioFace.png",
      description:
        "Mobile application with Deep Learning-based facial analysis that uses TensorFlow to detect skin conditions and provide personalized health solutions.",
      tech: ["Colab", "Tensorflow", "Figma", "Python"],
      link: "https://github.com/Project-BioFace",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-5">
      <h1 className="text-white text-[30px] font-sans font-bold">Projects</h1>
      <div className="w-35 h-1 bg-blue-500"></div>
      <p className="text-gray-400 mb-15">Open For Collaboration</p>
      <div className="max-w-4xl gap-10 flex flex-wrap justify-center">
        <div className="max-w-4xl gap-12 flex flex-wrap justify-center">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="w-100 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800"
               data-aos="fade-up" 
            >
              {/* Image Container with overflow hidden */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.preview}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Title */}
                <h1 className="text-white text-xl font-bold mb-2">
                  {project.name}
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-zinc-800 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Source Code Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
