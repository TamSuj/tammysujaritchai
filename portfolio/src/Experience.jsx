import LinkedIn from "./assets/linkedin-logo.png";
import Uber from "./assets/uber-logo.png";
import Agoda from "./assets/agoda-logo.png";
import Caltech from "./assets/caltech-logo.png";

function ExperienceBar({title, date, company, logo, description}) {
    // Date: Jun 2021 - Sep 2021
    return (
        <div className="flex mb-4">
            <img src={logo} alt="company logo" className="w-12 h-12 rounded-xl shadow-md mb-4"/>
            <div className="block ml-4">
                <h4 className="text-lg font-semibold">{title} at {company}</h4>
                <p className="text-sm text-gray-600">{date}</p>
            </div>

        </div>
    );
}

function Experience() {
    return (
        <div>
            <div>
            <ExperienceBar title={"(Incoming) Software Engineering Intern"} date={"Jun 2025 - Sep 2025"}
                               company={"LinkedIn"} logo={LinkedIn}/>
                <ExperienceBar title={"(Incoming) Software Engineering Intern"} date={"Sept 2025 - Dec 2025"}
                               company={"Uber"} logo={Uber}/>
                <ExperienceBar title={"Software Engineering Intern"} date={"Jan 2024 - June 2024"} company={"Agoda"}
                               logo={Agoda} description={"Fintech"}/>
                <ExperienceBar title={"Software Engineering Intern"} date={"Jun 2023 - Sep 2023"} company={"Caltech"}
                               logo={Caltech}/>
            </div>
        </div>
    );
}
export default Experience;

