function SkillChip({highlighted, skill }) {
    return (
        <span className={

                highlighted ? "bg-[#121200] border border-[#3a3a1a] text-[#c8f135] px-4 py-2 rounded-lg text-sm"
                    : "bg-[#111] border border-[#2a2a2a] text-gray-400 px-4 py-2 rounded-lg text-sm"

        }>{skill}</span>
    )
}

export default SkillChip
