import Image from "next/image";
import silentscreamtag from "../../../public/assets/silentscreamfav.png";


const Team = () => {
    return (
        <div>
            {/*Heading */}
            <div className="flex justify-center items-center w-full h-[120px] md:h-[180px]">
                <Image
                    src={silentscreamtag}
                    width={769}
                    height={764}
                    alt="Silent Scream Ta"
                    className="w-[100px] md:w-[150px] h-[100px] md:h-[150px]"
                />
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-2 mb-6">
                <h1 className="text-[30px] md:text-[40px] font-bold text-silent_pink2">TEAM MEMBERS</h1>
            </div>

            {/* Names Section */}
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center mt-5 md:mt-16 mx-4 md:mx-20">
                <div>
                    {/* Game Director */}
                    <div className="h-[100px] md:h-[150px] flex flex-col justify-start items-center">
                        <h1 className="text-[32px] font-bold text-silent_pink1">
                            Game Director
                        </h1>
                        <p className="text-[24px] text-white">Mushfiq Iqbal</p>
                    </div>

                    {/* Project Manager & Art Director */}
                    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-20">
                        <div className="h-[80px] md:h-[120px] flex flex-col md:col-start-2 justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Project Manager
                            </h1>
                            <p className="text-[20px] text-white">Ziad Mohib</p>
                        </div>
                        <div className="h-[80px] md:h-[120px] flex flex-col md:col-start-3 justify-start items-center">
                            <h1 className="text-[22px] text-silent_pink1 font-bold">
                                Art Director
                            </h1>
                            <p className="text-[20px] text-white">Mushfiq Iqbal</p>
                        </div>
                    </div>

                    {/* Audio Programmer - Artist - Level Designer */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
                         <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Level Designers
                            </h1>
                            <p className="text-[20px] text-white">Mushfiq Iqbal</p>
                        </div>
                        <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Lead Artist
                            </h1>
                            <p className="text-[20px] text-white">Mushfiq Iqbal</p>
                        </div>
                        <div className="h-[80px] md:h-[120px] flex flex-col justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Audio Programmer
                            </h1>
                            <p className="text-[20px] text-white">MD Rasheeq Ishraq Kamal</p>
                        </div>
                    </div>

                    {/* Art Team - Game Programmer - QA */}
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20">
                        <div className="h-[150px] md:h-[270px] flex flex-col justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Art Team
                            </h1>
                            <p className="text-[20px] text-white">Mahmoda Ferdous</p>
                            <p className="text-[20px] text-white">Sanim Ahmed Niloy</p>
                            <p className="text-[20px] text-white">Shushanto Chowdhury</p>
                        </div>
                        <div className="h-[250px] md:h-[270px] flex flex-col justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Game Programmers
                            </h1>
                            <p className="text-[20px] text-white">Dipok Sarker Dipu</p>
                            <p className="text-[20px] text-white">Zubair Islam</p>
                            <p className="text-[20px] text-white">Maruf Ahmed Opu</p>
                            <p className="text-[20px] text-white">Nurusshafi Evan</p>
                            <p className="text-[20px] text-white">Ezazul Haque</p>
                            <p className="text-[20px] text-white">Tanimul Haque Khan</p>
                        </div>
                        <div className="h-[150px] md:h-[270px] flex flex-col justify-start items-center">
                            <h1 className="text-[22px] font-bold text-silent_pink1">
                                Quality Assurance
                            </h1>
                            <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
                            <p className="text-[20px] text-white">Sazid Ahmed Nassir</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;