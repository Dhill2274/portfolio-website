const skills = [
    { name: 'Python', level: 'Advanced' },
    { name: 'Java', level: 'Advanced' },
    { name: 'C', level: 'Intermediate' },
    { name: 'C#', level: 'Advanced' },
    { name: 'C++', level: 'Advanced' },
    { name: 'Haskell', level: 'Advanced' },
    { name: 'Go', level: 'Advanced' },
    { name: 'AWS', level: 'Advanced' },
    { name: 'Firebase', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'JSON', level: 'Advanced' },
    { name: 'SQL', level: 'Advanced' },
    { name: 'Linux', level: 'Advanced' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'Numpy', level: 'Advanced' },
    { name: 'Pandas', level: 'Advanced' },
    { name: 'Dash', level: 'Advanced' },
    { name: 'Algorithms', level: 'Advanced' },
    { name: 'AI', level: 'Advanced' },
    { name: 'Git/Github', level: 'Advanced' },
]

export const SkillsSection = () => {
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My<span className="text-primary"> Skills</span>
            </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-xs card-hover hover:scale-107">
                    <div className="text-center mb-4">
                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>
    );
}