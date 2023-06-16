import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="projects font-modern mx-[15%] flex justify-center" id="projects">
            <div>
                <h1
                    className=" text-5xl font-extrabold text-transparent bg-clip-text
                                            bg-gradient-to-r from-[#a2ff73] to-[#cebe13] text-center"
                >
                    Projects
                </h1>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    );
};

export default Projects;
