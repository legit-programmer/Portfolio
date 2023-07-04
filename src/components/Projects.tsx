import ProjectCard from "./ProjectCard";

interface props {
    projects:any;
}

const Projects = ({projects}:props) => {
    const projectArray = ()=>{
        let arr:any = [];
        for(let i=0;i<projects.length;i++){
            arr = [projects[i]['fields'], ...arr]
        }
        return arr;
    }
    return (
        <>
            <div
                className="projects font-modern mx-[15%] flex justify-center"
                id="projects"
            >
                <div>
                    <h1
                        className=" text-5xl font-extrabold text-transparent bg-clip-text
                                            bg-gradient-to-r from-[#a2ff73] to-[#cebe13] text-center"
                    >
                        Projects
                    </h1>
                </div>
            </div>
            {
                projectArray().map((i:any)=>{
                    
                return <ProjectCard key={i['url']} title={i['title']} url={i['url']} desc={i['description']}/>    
                })
            }
        </>
    );
};

export default Projects;
