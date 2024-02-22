import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="w-[200px] h-[200px] mx-auto flex flex-col gap-2 shadow-md border-2 p-4 rounded-md">
        <h1 className="text-2xl font-bold text-center">Aditya Bayu</h1>
        <p className="text-lg font-medium">Kroco Geming</p>
        <p className="text-md">Gua ganteng kata coach</p>
        <Link href="/" className="text-blue-700 hover:underline">
          ⬅️Home
        </Link>
      </div>
    </div>
  );
};

export default About;
