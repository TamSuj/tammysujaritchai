import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import {MdOutlineEmail} from "react-icons/md";

function Contact() {
    const iconSize=28;
    return (
        // center the text and icons
        <div className="w-screen flex flex-col justify-center items-center p-8">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p>Let's grab a coffee and talk ;)</p>

            <div className="flex gap-4 mt-4">
                <a href="https://linkedin.com" className="text-gray-700 hover:text-blue-500"><FaLinkedin
                    size={iconSize}/></a>
                <a href="https://github.com" className="text-gray-700 hover:text-gray-900"><FaGithub
                    size={iconSize}/></a>
                <a href="mailto:gtsujaritchai@g.ucla.edu" className="text-gray-700 hover:text-red-500"><MdOutlineEmail
                    size={iconSize}/></a>
            </div>
        </div>
    );
}

export default Contact;

