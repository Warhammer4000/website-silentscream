"use client";
import Image from "next/image";
import silentscreamlogo from "../../../public/assets/herobanner/silentscream_logo.png";
import steamlogo from "../../../public/assets/herobanner/steam-icon.png";
import windowslogo from "../../../public/assets/herobanner/windows-icon.png";

const Hero = () => {
    return (
        <div>
          <div className="w-full h-[500px] md:min-h-screen bg-hero-bg bg-cover bg-center flex items-center">
            <div className="flex flex-col gap-4 md:gap-8 w-[250px] md:w-[500px] 2xl:w-[700px] ml-6 md:ml-20 2xl:ml-32 mb-16">
              <Image
                src={silentscreamlogo}
                width={574}
                height={276}
                alt="Silent Scream Logo"
                className="w-[250px] md:w-full"
              />
              {/* Store Button */}
              <div className="flex justify-end gap-3 md:gap-5 mb-6 md:mb-10">
              <button
              className="text-start w-[80px] md:w-[120px] h-[30px] md:h-[50px] bg-white font-bold text-[12px] md:text-[16px] text-black 
                        flex items-center gap-2 rounded-3xl hover:cursor-pointer hover:bg-silent_pink1 justify-center"
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
                className="w-[20px] md:w-[25px] h-[20px] md:h-[25px]"
              />
            </button>
            <button
              className="text-start w-[100px] md:w-[140px] h-[30px] md:h-[50px] bg-white font-bold text-[12px] md:text-[16px] text-black 
              flex justify-center items-center gap-2 rounded-3xl hover:bg-silent_pink1 hover:bg-studio_blue hover:cursor-pointer"
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
                className="w-[20px] md:w-[25px] h-[20px] md:h-[25px]"
              />
            </button>
              </div>
            </div> 
           </div>
        </div>
    );
};

export default Hero;