"use client";

const About = () => {
    return (
        <div>
            <div className="hidden w-full md:h-[500px] bg-bg-web-s bg-center bg-no-repeat md:flex justify-center items-center">
                <p className="md:px-28 2xl:px-[360px] md:text-[24px] 2xl:text-[28px] text-justify">
                Silent Scream is a stealth cooking game set in a creepy restaurant
                where you must serve customers while secretly feeding some of them
                to an alien entity in your basement.
                </p>
            </div>
            <div className="md:hidden w-full h-[400px] bg-bg-mob-s bg-center bg-no-repeat flex justify-center items-center">
                <p className="px-12 text-[20px] text-justify leading-10">
                Silent Scream is a stealth cooking game set in a creepy restaurant
                where you must serve customers while secretly feeding some of them
                to an alien entity in your basement.
                </p>
            </div>
            <div className="flex justify-center mt-8 md:mt-0 mb-8">
                <button
                className="w-[320px] md:w-[400px] 2xl:w-[380px] h-[50px] md:h-[80px] 2xl:h-[100px] bg-button-bg1 bg-cover bg-center bg-no-repeat text-silent_pink1
                 text-[24px] 2xl:text-[30px] font-black hover:text-black transform transition-transform duration-300 hover:scale-105"
                onClick={() => {
                window.open(
                "https://youtu.be/KRMYjMlp89A?si=2yz4pVL5OeL7deV3",
                "_blank"
                 );
                }}
                >
                    TRAILER
                </button>
            </div>
          
        </div>
    );
};

export default About;