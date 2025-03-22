import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import profile from "./assets/profilePic.png";
function LandingPage() {
    const iconSize = 28;
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-b from-slate-100 to-white p-8">
            <div className="bg-white shadow-lg rounded-2xl flex w-3/4 max-w-4xl">
                {/* Left Profile Section */}
                <div className="flex flex-col items-center bg-gray-100 w-1/3 p-6 rounded-l-2xl">
                    <img src={profile} alt="Profile" className="max-w-40 rounded-full shadow-md mb-4" />
                    <h1 className="text-3xl font-semibold">Tammy Sujaritchai</h1>
                    {/*<h2 className="text-xl text-gray-600">CS & Ling @ UCLA</h2>*/}
                    <div className="flex gap-4 mt-4">
                        <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-500"><FaLinkedin size={iconSize} /></a>
                        <a href="https://github.com" className="text-gray-700 hover:text-gray-900"><FaGithub size={iconSize} /></a>
                        <a href="mailto:gtsujaritchai@g.ucla.edu" className="text-gray-700 hover:text-red-500"><MdOutlineEmail size={iconSize} /></a>
                    </div>
                </div>

                {/* Right README Section */}
                <div className="flex flex-col justify-center p-8 w-2/3">
                    <h3 className="text-2xl font-bold mb-2">Hi! 👋</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        I’m Tammy and I study Computer Science + Linguistics at UCLA.</p>
                    <div className=" text-gray-700 mt-4">
                        <p className="p-1">🎓 CS & Ling @UCLA</p>
                        <p className="p-1">❤️ Tech + social impact</p>
                        <p className="p-1">✏️ I write code that doesn’t just run, but makes a difference</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
