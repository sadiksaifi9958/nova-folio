import SkillChip from "../components/SkillChip.jsx"

function Skills() {
    const skillsGroups = [
        {
            label: 'Frontend',
            chips: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Design'],
            highlight: ['React', 'JavaScript', 'HTML5', 'CSS3']
        },
        {
            label: 'Tools & Workflow',
            chips: ['Git', 'GitHub', 'GitHub Actions', 'VS Code', 'EmailJS'],
            highlight: []
        },
        {
            label: 'Currently Learning',
            chips: ['React Router', 'Context API', 'Node.js'],
            highlight: []
        }
    ]
    return (
        <div className="max-w-4xl mx-auto px-8 py-24">
            <div className="text-xs text-[#c8f135] tracking-[3px] uppercase mb-4">Skills</div>
            <h1 className="text-5xl font-syne text-white mb-12 leading-tight">What I work with.</h1>
            <div className="flex flex-col gap-8">
                {
                    skillsGroups.map((group) => (
                        <div>
                            <div className="text-xs text-gray-500 tracking-[1.5px] uppercase mb-3">{group.label}</div>
                            <div className="flex flex-wrap gap-2">
                                {
                                    group.chips.map((chip)=>(
                                        <SkillChip
                                            key={chip}
                                            skill={chip}
                                            highlighted={group.highlight.includes(chip)}/>
                                    ))
                                }

                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Skills
