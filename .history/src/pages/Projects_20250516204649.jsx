import Navbar from "../components/Navbar"

const Project = () => {
    return (
        <>
            <div>
                <Navbar />
                <div className="bg-gflex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-center text-2xl font-bold mb-4">My projects</h1>
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
        </>
    )
}

export default Project
