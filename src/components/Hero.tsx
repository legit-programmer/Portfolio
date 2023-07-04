const Hero = () => {
    return (
        <div className="mainPage font-modern flex justify-center my-[18%] items-center">
            <div className="hero text-white flex justify-center">
                <div>
                    <h1 className="mainhero text-8xl drop-shadow-xl">
                        Hi,
                        <br />I am{" "}
                        <span
                            className=" font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-[#73ff9f] to-[#4ab8c4] animate-pulse"
                        >
                            Siddique
                        </span>
                    </h1>
                    <p className=" text-2xl">
                        Fullstack developer & Web3 Enthusiast
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
