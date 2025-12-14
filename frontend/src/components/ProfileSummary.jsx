import React from "react";

function ProfileSummary() {
  return (
    <div className=" min-h-screen flex items-center justify-center p-8 mb-5">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Ragil Gigih Utomo
            </h1>
            <p className="text-xl text-gray-400">
              Software Developer & AI Enthusiast
            </p>
          </div>

          {/* Introduction */}
          <p className="text-white leading-relaxed">
            I'm a developer passionate about building software that is
            intuitive, user-centered, and reliable. I enjoy creating solutions
            that are performant and maintainable, with a strong focus on clean
            code and long-term usability. I also value working in agile teams,
            where collaboration and continuous learning are key to developing
            software that truly serves its users.
          </p>

          {/* Education & Experience */}
          <p className="text-white leading-relaxed">
            My journey began with a Bachelor's degree in Media Design
            Informatics, where I combined my interests in technology and design.
            Along the way, I gained hands-on experience as a working student in
            software development, contributing to real-world projects in agile
            environments. Now, I'm pursuing a Master's in Software Engineering
            in Vienna, where I continue to deepen my expertise and focus on
            building complex, scalable systems.
          </p>

          {/* Work Experience */}
          <p className="text-white leading-relaxed">
            In the past, I've had the opportunity to develop software across
            diverse settings — from projects for a large logistics corporation
            and an advertising agency to personal experiments and academic work
            at university.
          </p>

          {/* Social Links */}
          <div className="flex flex-row gap-10">
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/dionisiusragil13"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <img
                  src="github_light.svg"
                  alt="GitHub"
                  className="w-6 h-6 invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ragil-gigih-utomo"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <img src="linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <img
                  src="instagram-icon.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="mailto:dionisiusragil48@gmail.com?subject=Halo%20Ragil%2C%20Saya%20Tertarik%20Kerjasama"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <img src="gmail.svg" alt="Gmail" className="w-6 h-6" />
              </a>
            </div>
            <div className="pt-2">
              <button className="bg-white">download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;
