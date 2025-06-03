const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "This is the first project.",
        link: "https://example.com/project-one",
        image: "https://via.placeholder.com/150",
        tags: ["React", "TailwindCSS", "Supabase"]
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container"></div>
        </section>
    )
}