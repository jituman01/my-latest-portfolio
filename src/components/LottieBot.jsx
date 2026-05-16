'use client';
import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";

const LottieBot = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/hello-animation.json')
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie load error:", err));
  }, []);

  if (!animationData) {
    return (
      <div className="h-[300px] w-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <div className="w-30 max-w-[350px] md:max-w-[500px] transition-all duration-500 ease-in-out hover:scale-105">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        autoplay={true}
      />
    </div>
  );
};

export default LottieBot;