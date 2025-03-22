import Experience from "./Experience.jsx";
import Skill from "./Skill.jsx";
import Education from "./Education.jsx";
function Resume() {
    return (
        <div className="gap-12 px-14 md:flex h-screen">
            <div className="flex-1 pt-5 rounded-2xl">
                <h1 className="text-2xl font-bold pb-5">Skills</h1>
                <Skill/>
                <h1 className="text-2xl font-bold py-5 pt-10">Involvements</h1>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                    <li>She.Codes President</li>
                    <li>STEM Competition Society Vice President</li>
                    <li>UCLA ACM-W Board Member</li>
                    <li>Google CS Research Fellow</li>
                    <li>LA.Tech x Microsoft IT Academy Scholar</li>
                </ul>

            </div>
            <div className="flex-1 pt-5 rounded-2xl">
                <h1 className="text-2xl font-bold pb-5">Experience</h1>
                <Experience/>
                <h1 className="text-2xl font-bold py-5">Education</h1>
                <Education/>
            </div>
        </div>
    )
}

export default Resume