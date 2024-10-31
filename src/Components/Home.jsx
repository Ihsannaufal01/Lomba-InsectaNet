import React from "react";
import background from "./Hero.jpg";

function HomePage() {
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})` // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to InsectaNet
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-6">
          The largest Insect Library
        </p>
        <a
          href="#explore"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}


export default HomePage;
