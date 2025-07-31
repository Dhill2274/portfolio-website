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
    { name: 'TensorFlow', level: 'Advanced' },
    { name: 'OpenCV', level: 'Advanced' },
    { name: 'Linux', level: 'Advanced' },
    { name: 'Docker', level: 'Advanced' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'Numpy', level: 'Advanced' },
    { name: 'Pandas', level: 'Advanced' },
    { name: 'Dash', level: 'Advanced' },
    { name: 'Algorithms & Data Structures', level: 'Advanced' },
    { name: 'Git/Github', level: 'Advanced' },
]

export const SkillsSection = () => {
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My<span className="text-primary"> Skills</span>
            </h2>

        <ul className="flex flex-wrap justify-center gap-2 text-base">
            {skills.map((skill, index) => (
                <li key={index} className="bg-card border border-black/10 rounded-xl px-5 py-3 shadow-xs card-hover hover:text-primary transition-colors duration-200">
                    {skill.name}
                </li>
            ))}
        </ul>
        </div>
    </section>
    );
}