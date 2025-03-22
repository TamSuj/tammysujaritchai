function Skill() {
    const skillList = ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS", "ASP.Net", "Scala", "React", "GraphQL", "Node.js", "TailwindCSS", "Scikit-learn", "Biopython", "Sphinx", "Git", "AWS", "Azure", "DBeaver", "Apache Hadoop", "PyTorch", "Playwright", "PyTest", "pandas", "NumPy", "Matplotlib", "Seaborn"];

    return (
        <div className="flex flex-wrap gap-2">
            {skillList.map((skill) => {
                return (
                    <div key={skill} className="bg-white border-gray-300 border rounded-full px-4 py-2 my-0.5 shadow-sm text-gray-700 text-sm font-medium hover:simple-transition hover:shadow-md hover:transition-transform hover:transform hover:scale-105">
                        {skill}
                    </div>
                );
            })}
        </div>
    );
}

export default Skill;
