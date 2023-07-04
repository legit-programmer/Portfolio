interface props {
    title:string,
    url:string,
    desc:string
}

const ProjectCard = ({title, url, desc}:props) => {
    
    return (
        <a  href={url}>
            <div className="mx-[15%] card my-7 bg-white text-white  font-modern font-light p-10 rounded-lg bg-opacity-5 drop-shadow-xl transition-all hover:bg-opacity-25 ">
                <h2
                    className=" text-3xl  font-semibold text-transparent bg-clip-text
                    bg-gradient-to-r from-[#fc8a8a] to-[#ffffff] "
                >
                    {title}
                </h2>
                <p className=" ">
                    {desc}
                </p>
            </div>
        </a>
    );
};

export default ProjectCard;
