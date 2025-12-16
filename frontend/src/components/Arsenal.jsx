import React from "react";

function Arsenal() {
  const skills = [
    {
      name: "Python",
      iconUrl: "python.svg",
    },
    {
      name: "Javascript",
      iconUrl: "javascript.svg",
    },
    {
      name: "Node.js",
      iconUrl:
        "nodejs.svg",
    },
    {
      name: "Express",
      iconUrl:
        "expressjs_dark.svg",
    },
    {
      name: "React",
      iconUrl:
        "react_light.svg",
    },
    {
      name: "TensorFlow",
      iconUrl:
        "tensorflow-icon-light.svg",
    },
    {
      name: "C#",
      iconUrl:
        "csharp.svg",
    },
    {
      name: "CSS",
      iconUrl:
        "css_old.svg",
    },
    {
      name: "Figma",
      iconUrl:
        "figma.svg",
    },
    {
      name: "Flask",
      iconUrl:
        "flask-dark.svg",
    },
    {
      name: "Flutter",
      iconUrl:
        "flutter.svg",
    },
    {
      name: "Colab",
      iconUrl:
        "Google_Colaboratory.svg",
    },
    {
      name: "HTML",
      iconUrl:
        "html5.svg",
    },
    {
      name: "MongoDB",
      iconUrl:
        "mongodb-icon-dark.svg",
    },
    {
      name: "MySQL",
      iconUrl:
        "mysql-icon-light.svg",
    },
    {
      name: "React-router",
      iconUrl:
        "reactrouter.svg",
    },
    {
      name: "Tailwind CSS",
      iconUrl:
        "tailwindcss.svg",
    },
    {
      name: "Unity",
      iconUrl:
        "unity_dark.svg",
    },
  ];
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-white text-[30px] font-sans font-bold">Skills</h1>
      <div className="w-25 h-1 bg-blue-500"></div>
      <p className="text-gray-400 mb-15">Always Willing To Learn New Skill</p>
      <div className="max-w-4xl">
        <div  className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <SkillBox key={index} name={skill.name} iconUrl={skill.iconUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

const SkillBox = ({ name, iconUrl }) => {
  return (
    <div data-aos="fade-up" className="bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-2 hover:border-zinc-600 transition-all duration-300 cursor-pointer hover:scale-110">
      <div className="flex flex-row items-center gap-3">
        <img src={iconUrl} alt={name} className="w-6 h-6 object-contain" />
        <span className="text-zinc-200 text-sm font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Arsenal;
