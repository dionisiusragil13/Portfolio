import React from "react";
import { AppWindow, Smartphone, Brain, Gamepad2 } from "lucide-react";

const ExpertiseCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
    <div className="flex items-start gap-4">
      <div
        className={`w-12 h-12 rounded-lg bg-linear-to-br ${iconColor} flex items-center justify-center shrink-0 shadow-lg mt-2`}
      >
        <Icon size={24} color="#ffffff" strokeWidth={2} />
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default function Expertise() {
  const expertiseData = [
    {
      icon: AppWindow,
      title: "Web Development",
      description:
        "Building fast, responsive, and scalable websites using modern frameworks and best practices.",
      iconColor: "bg-white/5",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Crafting cross-platform mobile apps with smooth performance and elegant UI for both iOS and Android.",
      iconColor: "bg-white/5",
    },
    {
      icon: Brain,
      title: "AI/ML Development",
      description:
        "Implementing intelligent solutions using machine learning and or deep learning frameworks.",
      iconColor: "bg-white/5",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description:
        "Developing 2D engaging and immersive gaming experiences with modern game engines and technologies.",
      iconColor: "bg-white/5",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-white text-4xl font-bold mb-3">
            Areas of Expertise
          </h1>
          <div className="w-80 h-1 bg-blue-500"></div>
          <p className="text-gray-400 text-lg">I Constantly Try To Improve</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              iconColor={item.iconColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
