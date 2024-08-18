"use client";
import Image from "next/image";
import silentscreamlogo from "../../../public/assets/herobanner/silentscream_logo.png";
import steamlogo from "../../../public/assets/herobanner/steam-icon.png";
import windowslogo from "../../../public/assets/herobanner/windows-icon.png";

const Hero = () => {
    return (
        <div>
          <div className="w-full h-[500px] md:min-h-screen bg-hero-bg bg-cover bg-center flex items-center">
            <div className="flex flex-col gap-5 md:gap-8 w-[280px] md:w-[500px] 2xl:w-[700px] ml-6 md:ml-20 2xl:ml-32 mb-16">
              {/* Logo */}
              <Image
                src={silentscreamlogo}
                width={574}
                height={276}
                alt="Silent Scream Logo"
                className=""
              />
              {/* Store Button */}
              <div className="flex justify-start gap-3 md:gap-5 mb-16 md:mb-10">
                <button
              className="text-start w-[100px] md:w-[180px] h-[40px] md:h-[60px] bg-white font-bold text-[18px] md:text-[24px] text-black 
                        flex items-center gap-2 rounded-2xl hover:cursor-pointer hover:bg-silent_pink1 justify-center"
              onClick={() => {
                window.open(
                  "https://store.steampowered.com/app/1955750/SILENT_SCREAM/",
                  "_blank"
                );
              }}
            >
              Steam
              <Image
                src={steamlogo}
                width={30}
                height={30}
                alt="silent-scream-logo"
                className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]"
              />
                </button>
                <button
              className="text-start w-[130px] md:w-[200px] h-[40px] md:h-[60px] bg-white font-bold text-[18px] md:text-[24px] text-black 
              flex justify-center items-center gap-2 rounded-2xl hover:bg-silent_pink1 hover:bg-studio_blue hover:cursor-pointer"
              onClick={() => {
                window.open(
                  "ms-windows-store://pdp/?productid=9PDJZK7HLHSD",
                  "_blank"
                );
              }}
            >
              Windows
              <Image
                src={windowslogo}
                width={30}
                height={30}
                alt="silent-scream-logo"
                className="w-[25px] md:w-[35px] h-[25px] md:h-[35px]"
              />
                </button>
              </div>
            </div> 
           </div>
        </div>
    );
};

export default Hero;