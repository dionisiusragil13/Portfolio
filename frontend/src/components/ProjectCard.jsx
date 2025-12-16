import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Calendar,
  MapPin,
  Zap,
  Code,
} from "lucide-react";

const ProjectCard = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const projectData = [
    {
      id: 1,
      title: "Independent Study",
      company: "Bangkit Academy",
      duration: "Aug 2024 – Des 2024",
      location: "Indonesia",
      logo: "Bangkit.jpg",
      description:
        "I participated in the Bangkit Academy Independent Study Program under the Machine Learning learning path, where I completed various machine learning courses through Coursera covering data preprocessing, classical machine learning, and deep learning using TensorFlow. In addition to technical training, I joined online classes focused on both soft skills and hard skills, including communication, teamwork, and industry readiness. As the final project, I collaborated with students from the Mobile Development and Cloud Computing learning paths to develop an AI-powered application, contributing to the design, development, and integration of machine learning models within a cross-functional team environment.",
      achievements: [
        "Completing various course in coursera related to machine learning and deep learning",
        "Building model deep learning for final project",
        "Colaborate with other student accross university and learning path for final project",
      ],
      technologies: ["Figma", "Python", "TensorFlow"],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {projectData.map((project, index) => {
        const isExpanded = expandedIndex === index;

        return (
          <div
            key={project.id}
            className="bg-white/5 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden"
            data-aos="fade-up" 
          >
            {/* Header Section */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  {/* Company Logo */}
                  <div className="bg-white rounded-xl p-3 w-20 h-20 flex items-center justify-center shrink-0">
                    <img
                      src={project.logo}
                      alt={project.company}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Title and Company Info */}
                  <div className="flex-1">
                    <h2 className="text-white text-2xl font-bold mb-1">
                      {project.title}
                    </h2>
                    <h3 className="text-blue-500 text-xl font-semibold mb-3">
                      {project.company}
                    </h3>

                    {/* Duration and Location */}
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
                  aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                  {isExpanded ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
              </div>

              {/* Description */}
              <p className="text-slate-300 mt-4 leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* Expandable Section */}
            <div
              className="grid overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                gridTemplateRows: isExpanded ? "1fr" : "0fr",
              }}
            >
              <div className="min-h-0">
                <div className="px-6 pb-6 space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="text-white font-semibold text-lg">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <span className="text-blue-500 shrink-0">●</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className="text-white font-semibold text-lg">
                        Technologies Used
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-zinc-800 text-white rounded-full text-sm font-medium  transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
