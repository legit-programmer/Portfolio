const Hero = () => {
    return (
        <div className="mainPage font-modern flex justify-center my-[10%] items-center">
            <div className="hero text-white flex justify-center">
                <div>
                    <h1 className="mainhero text-7xl drop-shadow-xl">
                        Hi,
                        <br />I am{" "}
                        <span
                            className=" font-extrabold text-transparent bg-clip-text
                            bg-gradient-to-r from-[#FF73F1] to-[#FF8A91] animate-pulse"
                        >
                            Siddique
                        </span>
                    </h1>
                    <p className=" text-2xl">
                        Fullstack developer & Web3 Enthusiast
                    </p>
                </div>
            </div>
            <div className="img w-[50%]">
                <img src="https://i.ibb.co/r7jZbRS/hero.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;
