import { AlignRight, ArrowBigRight, ArrowRight, ArrowRightIcon, ArrowRightLeft, ArrowRightToLine, ArrowUpLeft, ArrowUpRight, ChevronRight, CircleArrowRight, Github, MoveRight } from "lucide-react"

const projects = [
    {
        id: 8,
        title: "Personal Portfolio Website",
        description: "Personal website for showcasing my skills and the projects that I've worked on to serve as a digital portfolio.",
        link: "https://github.com/Dhill2274/portfolio-website",
        image: "/projects/website.png",
        tags: ["ReactJS", "TailwindCSS", "express.js"]
    },
    {
        id: 7,
        title: "RAWL-E AI Agents",
        description: "Developed ethical multi-agent reinforcement learning systems using DQN and Rawlsian principles. \
        Designed novel agent architectures to promote fairness in resource-sharing environments, acheiving emergent ethical norms and improved outcomes for disadvantaged agents.",
        link: "src/assets/Dhillon_Thurairatnam_Dissertation.pdf",
        image: "/projects/RAWL-E.png",
        tags: ["Python", "TensorFlow", "ABM"]
    },
    {
        id: 6,
        title: "Quantum Cross Chain Arbitrage Bot",
        description: "Designed a bot that uses Quantum Approximate Optimization Algorithm (QAOA) and Flare’s blockchain protocols to execute high-speed, secure and profitable \
        cross-chain arbitrage trades.",
        link: "https://github.com/Dhill2274/quantum-cross-chain-arbitrage",
        image: "/projects/qxab.png",
        tags: ["ReactTS", "Python", "Qiskit", "Docker"]
    },
    {
        id: 5,
        title: "Zombie Apocalypse Game",
        description: "Constructed a top-down zombie shooting game in 24 hours. Contributed to the core gameplay logic, clean code structure, and rapid bug fixing. \
        Gained hands-on experience with Unity and C# while collaborating on design and development under tight constraints.",
        link: "https://github.com/Dhill2274/Halloween-Gamejam-2024",
        image: "/projects/zombie_apocalypse.png",
        tags: ["C#", "Unity"]
    },
    {
        id: 4,
        title: "No-Entry Sign Detector",
        description: 'Built a system to detect "No-Entry" signs using classical computer vision. Trained a custom Viola-Jones detector with Haar features via AdaBoost on test images. \
         On top of this, I implemented my own Circle Hough Transform and colour thresholder to improve detection accuracy.',
        link: "https://github.com/Dhill2274/no-entry-detector",
        image: "/projects/no_entry_detector.png",
        tags: ["Python", "OpenCV"]
    },
    {
        id: 3,
        title: "MedicRecall Revision App",
        description: "As a client liasson, project manager and software developer, I developed \
        a cross-platform flashcard-based revision app for the NHS, implementing a spaced repetition algorithm and delivering user notifications via a Python server hosted on Google Cloud.",
        link: "https://medicrecall.com",
        image: "/projects/medicrecall.png",
        tags: ["Flutter", "Firebase", "Google Cloud"]
    },
    {
        id: 2,
        title: "Game of Life Simulation",
        description: "Leveraged Go's parallel and distributed computing to optimise Conway's Game of Life and identified performance bottlenecks via CPU profiling. \
        Improved network efficiency with a halo exchange system across AWS EC2 instances, ensuring fault tolerance and scalability.",
        link: "https://github.com/Dhill2274/CSA-GOL-Parallel",
        image: "/projects/gol.png",
        tags: ["Go", "AWS"]
    },
    {
        id: 1,
        title: "Scotland Yard",
        description: "Modelled the game mechanics and implemented an AI agent using Dijkstra's algorithm and \
        a Mini-Max game tree to optimise the winning potential with a custom scoring function.",
        link: "https://github.com/yh22668/java-cw",
        image: "/projects/scotland_yard.png",
        tags: ["Java", "OOP"]
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
                    Here are some of my projects which showcase my skills in software development.
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
                                            className="px-4 py-1 text-primary hover:text-primary hover:border-primary hover:underline transition-colors duration-300"
                                            target="_blank" rel="noopener noreferrer"
                                        >
                                            <span className="flex items-center">
                                                View Project ↗
                                            </span>
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