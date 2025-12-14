import React from "react";
import {
  AppWindow,
  Smartphone,
  Gamepad2,
  Server,
  BrainCircuit,
} from "lucide-react";

function Expertise() {
  return (
    <div className="flex  flex-col">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-white text-[40px] font-sans font-bold">
          Areas of Expertise
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-70 gap-y-10 max-w-4xl mx-auto">
        {/* Item 1 - Web */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors duration-300">
            <AppWindow size={50} color="#000000" />
          </div>
          <div className="text-white">
            <h1 className="text-lg font-semibold">Web Development</h1>
            <p className="text-sm">
              Javascripts, React, Node.js, Flask, MongoDB, Express etc.
            </p>
          </div>
        </div>

        {/* Item 2 - Mobile */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors duration-300">
            <Smartphone size={50} color="#000000" />
          </div>
          <div className="text-white">
            <h1 className="text-lg font-semibold">Mobile Development</h1>
            <p className="text-sm">Flutter</p>
          </div>
        </div>

        {/* Item 3 - Backend */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors duration-300">
            <BrainCircuit size={50} color="#000000" />
          </div>
          <div className="text-white">
            <h1 className="text-lg font-semibold">AI/ML Development</h1>
            <p className="text-sm">Python, Pandas, Tensorflow</p>
          </div>
        </div>

        {/* Item 4 - Game */}
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shrink-0 hover:bg-blue-600 transition-colors duration-300">
            <Gamepad2 size={50} color="#000000" />
          </div>
          <div className="text-white">
            <h1 className="text-lg font-semibold">Game Development</h1>
            <p className="text-sm">Unity, C#</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
