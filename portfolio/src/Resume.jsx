import Experience from "./Experience.jsx";
import Skill from "./Skill.jsx";
function Resume() {
    return (
        <div className="gap-12 px-5  md:flex">
            <div className="flex-1 pt-5 rounded-2xl">
                <h1 className="text-2xl font-bold pb-5">Skills</h1>
                <Skill/>
            </div>
            <div className="flex-1 pt-5 rounded-2xl">
                <h1 className="text-2xl font-bold pb-5">Experience</h1>
                <Experience/>
            </div>
        </div>
    )
}

export default Resume