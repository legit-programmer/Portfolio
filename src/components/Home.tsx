
import ProjectCard from "./ProjectCard";
import About from "./About";

const Home = () => {
    return (
        <>
            <nav className=" flex items-center font-modern justify-center text-white text-xl font-light">
                <ul className=" flex my-4">
                    <li className=" mx-4 hover:text-pink-200">
                        <a href="#">Home</a>
                    </li>
                    <li className=" mx-4 hover:text-pink-200">
                        <a href="#">About</a>
                    </li>
                    <li className=" mx-4 hover:text-pink-200">
                        <a href="#">Projects</a>
                    </li>
                    <li className=" mx-4 hover:text-pink-200">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
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
                    <img src="./src/assets/hero.png" alt="" />
                </div>
            </div>

            <About />

            <div className="projects">
                <h1>Projects</h1>
                <ProjectCard />
            </div>
        </>
    );
};

export default Home;
