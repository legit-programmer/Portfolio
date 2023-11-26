import leaf from "../assets/leaf.png";
const Hero = () => {
    return (
        <div>
            <div className="">
                <img
                    className="relative w-[75vw]  left-[-50vw] top-0"
                    src={leaf}
                    alt=""
                />
                <div className="mainPage font-modern flex justify-center mt-[-30%] items-center">
                    <div className="hero text-white flex justify-center">
                        <div>
                            <h1 className="mainhero font-bold text-8xl drop-shadow-xl">
                                Hi,
                                <br />I am{" "}
                                <span className=" font-extrabold text-[#235332]">
                                    Siddique.
                                </span>
                            </h1>
                            <p className=" text-2xl">
                                A programming enthusiast
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
