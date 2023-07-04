const Contact = () => {
    return (
        <>
            <h1></h1>
            <div className="w-full flex justify-center my-14">
                <h2 className="text-white text-2xl font-modern">
                    Email -{" "}
                    <a
                        className="underline transition-all hover:text-gray-300"
                        href="mailto:siddiquekhan1845@gmail.com"
                    >
                        siddiquekhan1845@gmail.com
                    </a>{" "}
                    or DM me on{" "}
                    <a
                        className="underline transition-all hover:text-gray-300"
                        href="https://twitter.com/legit-programmer/"
                    >
                        Twitter
                    </a>
                    🚀
                </h2>
            </div>
        </>
    );
};

export default Contact;
