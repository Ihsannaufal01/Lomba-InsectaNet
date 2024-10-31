// AboutPage.jsx
import React from "react";

function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Ungu text-gray-800 p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">About InsectaNet</h1>
      <p className="text-lg md:text-xl max-w-3xl text-center mb-6">
        InsectaNet is an immersive digital platform dedicated to the amazing world of insects.
        We strive to provide detailed insights and resources to help people understand and
        appreciate the incredible diversity of insect life. From educational content to high-quality
        images, InsectaNet aims to inspire a deeper connection with nature and foster
        awareness about the importance of insect conservation.
      </p>
      <p className="text-lg md:text-xl max-w-3xl text-center">
        Our mission is to bridge the gap between science and curiosity, making it easy for everyone
        to explore the intricate lives of insects. Whether you're a student, researcher, or nature
        enthusiast, InsectaNet is your gateway to discovering the tiny creatures that play a big
        role in our ecosystems.
      </p>
    </div>
  );
}

export default AboutPage;
