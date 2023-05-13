import React, { useState } from "react";

const FeedbackSection = () => {
  const images = [
    {
      avatar: "/Feedback/avatar1.svg",
      content:
        "I love this product, I can't say anything more than amazing.You need to use this platform, my life has been changed since using them.",
      name: "Phan Chi Tho",
      uni: "VGU student",
    },
    {
      avatar: "/Feedback/avatar2.svg",
      content:
        "I couldn't be happier with my new home. The design is modern and elegant, and the quality of construction is outstanding.",
      name: "Nguyen Le Anh Quan",
      uni: "VGU student",
    },
    {
      avatar: "/Feedback/avatar3.svg",
      content:
        "My new home exceeds all my expectations. The layout is well-thought-out, and the craftsmanship is remarkable. I'm truly in love with my new home.",
      name: "Le Hoang Kim Thanh",
      uni: "VGU student",
    },
  ];
  const [active, setActive] = useState(0);

  const handlePrev = () => {
    setActive((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActive((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const Card = ({ image }) => {
    return (
      <div className="relative pt-10 pb-4 bg-orange-400">
        <div className="absolute w-14 h-14 top-2 left-4">
          <img src="/Feedback/quote.svg"></img>
        </div>

        <div className="flex flex-col items-center">
          <p className="mx-16 text-4xl">{image.content}</p>
          <div>
            <img
              src={image.avatar}
              alt="feedback"
              loading="lazy"
              className="w-20 h-20 mt-4 rounded-full"
            />
          </div>
          <p className="text-3xl font-bold">{image.name}</p>
          <p className="text-3xl">{image.uni}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="py-48">
      <div className="pb-16 text-center text-8xl">
        What our customers say about us?
      </div>
      <div className="flex place-content-center">
        <div className="flex flex-row justify-center w-2/3">
          <div
            className="flex flex-row items-center px-16"
            onClick={handlePrev}
          >
            <img src="/login/down.svg" className="w-20 h-20 rotate-90"></img>
          </div>
          <div>
            <Card image={images[active]} />
          </div>
          <div
            className="flex flex-row items-center px-16"
            onClick={handleNext}
          >
            <img src="/login/down.svg" className="w-20 h-20 -rotate-90"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
