import React, { useState, useEffect } from "react";

const sections = [
  { id: 1, image: "/content/boat.png" },
  { id: 2, image: "/content/tank.png" },
  { id: 3, image: "/content/tank3.png" },
  // Add more images if needed
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageRotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sections.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(imageRotationInterval);
  }, []);

  return (
    <div className=" w-full h-[25vh] overflow-hidden absolute top-10 left-0">
      <img
        src={sections[currentImageIndex].image}
        alt={`Banner ${currentImageIndex + 1}`}
        className="w-full h-full object-cover [animation: fade-in-out 10s ease-in-out infinite]"
      />
    </div>
  );
};

export default Banner;
