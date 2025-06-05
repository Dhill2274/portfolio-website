import { Github } from "lucide-react"

const projects = [
    {
        id: 7,
        title: "Portfolio Website",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/portfolio-website",
        image: "/projects/website.png",
        tags: ["React", "TailwindCSS", "JavaScript"]
    },
    {
        id: 6,
        title: "Quantum Cross Chain Arbitrage",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/quantum-cross-chain-arbitrage",
        image: "/projects/website.png",
        tags: ["React", "Typescript", "Python", "Qiskit"]
    },
    {
        id: 5,
        title: "Zombie Apocalypse Game",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/Halloween-Gamejam-2024",
        image: "/projects/zombie_apocalypse.png",
        tags: ["C#", "Unity"]
    },
    {
        id: 4,
        title: "No-Entry Sign Detector",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/portfolio-website",
        image: "/projects/medicrecall.png",
        tags: ["Python", "openCV"]
    },
    {
        id: 3,
        title: "MedicRecall Revision App",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/portfolio-website",
        image: "/projects/medicrecall.png",
        tags: ["Flutter", "Dart", "Firebase"]
    },
    {
        id: 2,
        title: "Game of Life Simulation",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/portfolio-website",
        image: "/projects/gol.png",
        tags: ["Go", "AWS"]
    },
    {
        id: 1,
        title: "Scotland Yard",
        description: "Personal website for showcasing frontend skills and projects I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/portfolio-website",
        image: "/projects/scotland_yard.png",
        tags: ["React", "TailwindCSS", "JavaScript"]
    }
]

export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured<span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects which showcase my skills and experience in software development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flew-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a href={project.link}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <Github />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}