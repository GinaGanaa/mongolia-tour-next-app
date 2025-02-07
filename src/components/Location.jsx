import React, { useState } from "react";

export const Location = () => {
  const [activeCard, setActiveCard] = useState(null); // Track active card

  const handleCardClick = (cardId) => {
    if (activeCard === cardId) {
      setActiveCard(null); // Toggle off if the same card is clicked again
    } else {
      setActiveCard(cardId); // Activate the clicked card
    }
  };

  return (
    <div className="relative">
      <img className="w-full" src="./LocationImage.png" alt="Location" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-[20px] justify-between w-[90%]">
        {/* First Card */}
        <div
          className={`relative min-w-[230px] w-[15vw] h-auto transition-all duration-300 transform cursor-pointer ${
            activeCard === 1 ? "scale-105 shadow-lg" : "scale-100"
          } rounded-[40px] overflow-hidden`}
          onClick={() => handleCardClick(1)}
        >
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./terkhiinNuur.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full">
            {/* Title */}
            <p
              className={`text-xl font-bold text-white text-center transition-all duration-500 ease-in-out ${
                activeCard === 1 ? "-translate-y-8" : "translate-y-0"
              }`}
            >
              {"TERKHIIN TSAGAAN LAKE"}
            </p>
            {/* Description */}
            <p
              className={`text-sm mt-2 text-white transition-opacity duration-500 ease-in-out pl-[20px] ${
                activeCard === 1 ? "opacity-100" : "opacity-0"
              }`}
            >
              A large, clean freshwater lake in Mongolia, perfect for nature
              lovers and explorers.
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div
          className={`relative min-w-[230px] w-[15vw] h-auto transition-all duration-300 transform cursor-pointer ${
            activeCard === 2 ? "scale-105 shadow-lg" : "scale-100"
          } rounded-[40px] overflow-hidden`}
          onClick={() => handleCardClick(2)}
        >
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./monastery.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full">
            {/* Title */}
            <p
              className={`text-xl font-bold text-white text-center transition-all duration-500 ease-in-out ${
                activeCard === 2 ? "-translate-y-8" : "translate-y-0"
              }`}
            >
              {"AMARBAYASGALANT MONASTERY"}
            </p>
            {/* Description */}
            <p
              className={`text-sm mt-2 text-white transition-opacity duration-500 ease-in-out pl-[20px] ${
                activeCard === 2 ? "opacity-100" : "opacity-0"
              }`}
            >
              A stunning Buddhist monastery in northern Mongolia, rich in
              history and culture.
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div
          className={`relative min-w-[230px] w-[15vw] h-auto transition-all duration-300 transform cursor-pointer ${
            activeCard === 3 ? "scale-105 shadow-lg" : "scale-100"
          } rounded-[40px] overflow-hidden`}
          onClick={() => handleCardClick(3)}
        >
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./khuwsgul.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full">
            {/* Title */}
            <p
              className={`text-xl font-bold text-white text-center transition-all duration-500 ease-in-out ${
                activeCard === 3 ? "-translate-y-8" : "translate-y-0"
              }`}
            >
              {"KHUVSGUL LAKE"}
            </p>
            {/* Description */}
            <p
              className={`text-sm mt-2 text-white transition-opacity duration-500 ease-in-out pl-[20px] ${
                activeCard === 3 ? "opacity-100" : "opacity-0"
              }`}
            >
              Known as the "Blue Pearl of Mongolia", it’s one of the cleanest
              and most beautiful lakes in the world.
            </p>
          </div>
        </div>

        {/* Fourth Card */}
        <div
          className={`relative min-w-[230px] w-[15vw] h-auto transition-all duration-300 transform cursor-pointer ${
            activeCard === 4 ? "scale-105 shadow-lg" : "scale-100"
          } rounded-[40px] overflow-hidden`}
          onClick={() => handleCardClick(4)}
        >
          <img
            className="w-full h-full object-contain rounded-[40px]"
            src="./horgiinTogoo.png"
            alt=""
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full">
            {/* Title */}
            <p
              className={`text-xl font-bold text-white text-center transition-all duration-500 ease-in-out ${
                activeCard === 4 ? "-translate-y-8" : "translate-y-0"
              }`}
            >
              {"KHORGIIN TOGOO"}
            </p>
            {/* Description */}
            <p
              className={`text-sm mt-2 text-white transition-opacity duration-500 ease-in-out pl-[20px] ${
                activeCard === 4 ? "opacity-100" : "opacity-0"
              }`}
            >
              A volcanic area with beautiful views, ideal for hiking and
              photography.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
