import React from "react";
import { ArrowDownToLine } from "lucide-react";

function ProfileSummary() {
  return (
    <div className=" min-h-screen flex items-center justify-center p-8 mb-5">
      <div className="max-w-4xl w-full">
        <div data-aos="fade-up" className="space-y-6">
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
            I'm a self-taught developer passionate about building software that
            is intuitive, user-centered, and reliable. I enjoy creating
            solutions that are performant and maintainable, with a strong focus
            on clean code and long-term usability. I also value working in agile
            teams, where collaboration and continuous learning are key to
            developing software that truly serves its users.
          </p>

          {/* Education & Experience */}
          <p className="text-white leading-relaxed">
            Instead of traditional corporate experience, I have honed my skills
            through rigorous personal projects and academic coursework. From
            designing database structures to crafting responsive website with
            MERN stack, I treat every project as an opportunity to simulate
            professional workflows and deliver high-quality code.
          </p>

          {/* Work Experience */}
          <p className="text-white leading-relaxed">
            I am currently seeking an internship or entry-level opportunity
            where I can apply my technical skills and contribute to meaningful
            projects. I am eager to bring my enthusiasm and dedication to a
            dynamic team. If you’re interested in collaborating or have a
            position in mind, I’d love to connect!
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
                href="https://www.instagram.com/ragildinho_?igsh=Yzh5c3pjaWJ4bW0y"
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
            <div className="pt-2 bg-white flex flex-row p-2 rounded-lg gap-2 hover:bg-gray-50 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <ArrowDownToLine
                strokeWidth={1.5}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />

              <a
                href="cv-RagilGigihUtomo.pdf"
                download
                className="text-sm font-medium"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;
