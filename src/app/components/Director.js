import Image from "next/image";
import silentscreamtag from "../../../public/assets/silentscreamfav.png";

const Director = () => {
    return (
        <div>
            <div className="hidden md:flex md:flex-col w-full md:h-[600px] bg-bg-web-m bg-center bg-no-repeat justify-center items-center">
                <h1 className="mx-8 md:mb-8 mb-4 text-[30px] font-black text-center">WORDS FROM THE GAME DIRECTOR</h1>
                    <p className="md:px-28 2xl:px-[360px] md:text-[24px] 2xl:text-[28px] text-justify">
                        Silent Scream is a stealth cooking game where a fast-food restaurant worker sacrifices his customers for an 
                        otherworldly entity. The entity speaks a language that is made by myself. I am a big fan of H.P. Lovecraft and
                        Junji Ito and Silent Scream is inspired by their works. The Game is now available on Steam and Windows Store. 
                        Hope you enjoy it. Looking forward to hearing form you.
                    </p>
                    <a className="mx-8 mt-4 md:mt-6 text-[26px] font-black text-center">Mushfiq Iqbal</a>
            </div>
            <div className="md:hidden flex flex-col w-full h-[800px] bg-bg-mob-l bg-center bg-no-repeat justify-center items-center">
                <h1 className="mx-8 mb-4 text-[24px] font-black text-center">WORDS FROM THE GAME DIRECTOR</h1>
                <p className="mx-12 text-[20px] text-justify leading-9">
                    Silent Scream is a stealth cooking game where a fast-food restaurant worker sacrifices his customers for an 
                    otherworldly entity. The entity speaks a language that is made by myself. I am a big fan of H.P. Lovecraft and
                    Junji Ito and Silent Scream is inspired by their works. The Game is now available on Steam and Windows Store. 
                     Hope you enjoy it. Looking forward to hearing form you.
                </p>
                <a className="mx-8 mt-4 text-[22px] font-black text-center">Mushfiq Iqbal</a>
            </div>
            <div className="flex justify-center items-center w-full h-[120px] md:h-[180px]">
                <Image
                    src={silentscreamtag}
                    width={769}
                    height={764}
                    alt="Silent Scream Ta"
                    className="w-[100px] md:w-[150px] h-[100px] md:h-[150px]"
                />
            </div>
        </div>
    );
};

export default Director;