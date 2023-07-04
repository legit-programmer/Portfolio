export const Nav = () => {
    return (
        <nav
            id="nav"
            className=" flex items-center font-modern  text-white text-xl font-light w-full"
        >
            <div className=" w-[50%] ">
                <ul className=" flex my-4">
                    <li className="transition-all mx-4 hover:text-white hover:text-2xl">
                        <a href="#nav">Home</a>
                    </li>
                    <li className=" transition-all mx-4 hover:text-white hover:text-2xl">
                        <a href="#about">About</a>
                    </li>
                    <li className=" transition-all mx-4 hover:text-white hover:text-2xl">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className=" transition-all mx-4 hover:text-white hover:text-2xl">
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfnbWlmrszXtNWvSVmvPmztZJRTMtxHGhCrLCwSfQKFDDDbBCQjjQRpgzJGmZTfccjPRgB">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="w-[50%] flex justify-end">
                <a
                    href="https://github.com/legit-programmer/"
                    className=" mx-1 rounded-full float-right"
                >
                    <img
                        className=" rounded-full w-6"
                        src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
                        alt=""
                    />
                </a>
                <a
                    href="https://twitter.com/legitisadev/"
                    className=" mx-1 rounded-full justify-end"
                >
                    <img
                        className=" rounded-full w-6"
                        src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
                        alt=""
                    />
                </a>
                <a
                    href="https://instagram.com/siddiqueig_/"
                    className=" mx-1 rounded-full justify-end"
                >
                    <img
                        className=" rounded-full w-6"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                        alt=""
                    />
                </a>
            </div>
        </nav>
    );
};
