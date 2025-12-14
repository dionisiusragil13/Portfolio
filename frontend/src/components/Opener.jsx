import React from "react";
import Threads from "./Threads";

function Opener() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* <Threads
        amplitude={1.6}
        distance={0.4}
        className="absolute inset-0 -translate-y-32 scale-110"
      /> */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-[80px] font-bold font-[alfa-slab-one-regular]">
          An Insight Into My Journey
        </h1>
        <span className="-mt-5 text-center">Constantly evolving self-taught developer, passionate about building impactful applications,
            <br/> and always ready to embrace emerging technologies.</span>
      </div>
    </div>
  );
}

export default Opener;
