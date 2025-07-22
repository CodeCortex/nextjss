import React from "react";
import Gym from "public/gym.jpg";
import Image from "next/image";

const hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={Gym} fill alt="Gym man" style={{ objectFit: "cover" }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 "></div>

      <div className="flex items-center justify-center pt-62">
        <h1 className="font-bold text-6xl text-white">Professional Gym Trainer</h1>
      </div>
    </div>
  );
};

export default hero;
