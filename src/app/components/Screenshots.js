"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import ScreenshotModal from "./ScreenshotsModal";
import { default as Screenshot1, default as Screenshot12 } from "/public/assets/screenshots/ss-ss-01.jpg";
import Screenshot2 from "/public/assets/screenshots/ss-ss-02.jpg";
import Screenshot3 from "/public/assets/screenshots/ss-ss-03.jpg";
import Screenshot4 from "/public/assets/screenshots/ss-ss-04.jpg";
import Screenshot5 from "/public/assets/screenshots/ss-ss-05.jpg";
import Screenshot6 from "/public/assets/screenshots/ss-ss-06.jpg";
import Screenshot7 from "/public/assets/screenshots/ss-ss-07.jpg";
import Screenshot8 from "/public/assets/screenshots/ss-ss-08.jpg";
import Screenshot9 from "/public/assets/screenshots/ss-ss-09.jpg";
import Screenshot10 from "/public/assets/screenshots/ss-ss-10.jpg";
import Screenshot11 from "/public/assets/screenshots/ss-ss-11.jpg";

const screenshots = [
    { src: Screenshot1, alt: "Silent Scream Screenshot 1" },
    { src: Screenshot2, alt: "Silent Scream Screenshot 2" },
    { src: Screenshot3, alt: "Silent Scream Screenshot 3" },
    { src: Screenshot4, alt: "Silent Scream Screenshot 4" },
    { src: Screenshot5, alt: "Silent Scream Screenshot 5" },
    { src: Screenshot6, alt: "Silent Scream Screenshot 6" },
    { src: Screenshot7, alt: "Silent Scream Screenshot 7" },
    { src: Screenshot8, alt: "Silent Scream Screenshot 8" },
    { src: Screenshot9, alt: "Silent Scream Screenshot 9" },
    { src: Screenshot10, alt: "Silent Scream Screenshot 10" },
    { src: Screenshot11, alt: "Silent Scream Screenshot 11" },
    { src: Screenshot12, alt: "Silent Scream Screenshot 12" },
  ];

const Screenshots = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(null);

  const openModal = (index) => {
    setCurrentScreenshotIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentScreenshotIndex(null);
  };

  const goToNext = () => {
    setCurrentScreenshotIndex(
      (prevIndex) => (prevIndex + 1) % screenshots.length
    );
  };

  const goToPrevious = () => {
    setCurrentScreenshotIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

    return (
        <div className="mb-10 md:mb-20">
            <div className="w-full flex flex-col justify-center items-center mt-2 mb-6">
                <h1 className="text-[30px] md:text-[40px] font-bold text-silent_pink2">SCREENSHOTS</h1>
            </div>
            {/*Screenshot Section 
            <div className="flex justify-center items-center">
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/KRMYjMlp89A?si=PMAq0sU19YfskBSI" 
                title="Silent Scream Trailer" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
                </iframe>
            </div>
            */}
        <Fragment>
        <div className="w-full h-auto flex justify-center items-center mt-6 md:mt-12 mb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-10 justify-center">
            {screenshots.map((screenshot, index) => (
              <div
              key={index}
              className="w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16 bg-silent_bg1 
                         transform transition-transform duration-300 hover:scale-105 hover:brightness-110"
              onClick={() => openModal(index)}
            >
              <Image
                src={screenshot.src}
                width={1771}
                height={985}
                alt={screenshot.alt}
                className="h-full object-cover"
              />
            </div>
            ))}
          </div>
          {showModal && (
            <ScreenshotModal
              isVisible={showModal}
              onClose={closeModal}
              screenshot={screenshots[currentScreenshotIndex]}
              onNext={goToNext}
              onPrevious={goToPrevious}
            />
          )}
        </div>
      </Fragment>
        </div>
    );
};

export default Screenshots;