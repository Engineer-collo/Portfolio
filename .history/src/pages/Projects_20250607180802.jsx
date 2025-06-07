
import Navbar from "../components/Navbar";

const Project = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-100">
                <Navbar />
                <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-8">My Projects</h1>

                    <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full text-center">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                            Pixify - Mini Social Media App
                        </h3>
                        <a 
                            href="https://pixi-fy-hrmt.vercel.app/" 
                            className="inline-block hover:scale-105 transition-transform duration-200"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img 
                                className="h-48 mx-auto rounded-lg shadow-sm hover:shadow-lg" 
                                src="/pixify.png" 
                                alt="Pixify Project Screenshot" 
                            />
                        </a>
                    </div>

                    <div className=" bg-white rounded-2xl shadow-md p-6 max-w-md w-full text-center">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                            Ecommerce Application
                        </h3>
                        <a 
                            href="https://pixi-fy-hrmt.vercel.app/" 
                            className="inline-block hover:scale-105 transition-transform duration-200"
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img 
                                className="h-48 mx-auto rounded-lg shadow-sm hover:shadow-lg" 
                                src="/pixify.png" 
                                alt="Pixify Project Screenshot" 
                            />
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Project;
