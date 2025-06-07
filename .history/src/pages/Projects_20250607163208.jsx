import Navbar from "../components/Navbar"

const Project = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className="bg-gray-300 flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-center text-2xl font-bold mb-4">Here are My projects</h1>
                    <div>
                    <h3>Pixify mini social media</h3>
                    <img className="h-1" src="/picture.png" alt="" />
                    <a 
                        href="https://pixi-fy-hrmt.vercel.app/" 
                        className="text-blue-500 underline hover:text-blue-700"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Pixiffy application
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
