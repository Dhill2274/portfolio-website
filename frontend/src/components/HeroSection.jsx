import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export const HeroSection = () => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setFadeOut(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">

            <div className="container max-w-4xl mx-auto text-center z-10">

                <div className="space-y-6">

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Dhillon</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Thurairatnam</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"> 
                        I am currently pursuing a Master's degree in Artificial Intelligence at King's College London and 
                        hold a Bachelor's degree in Computer Science from the University of Bristol, where I graduated with a 1st class honours.
                    </p>

                    <div className="pt-0 opacity-0 animate-fade-in-delay-4 flex justify-center gap-x-4">
                        <a href="https://www.linkedin.com/in/dhillon-thurairatnam/" target="_blank" rel="noopener noreferrer"
                            className="relative px-4 py-4 rounded-full border border-primary text-primary bg-background transition-colors hover:scale-105 duration-300 flex items-center gap-2
                            overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-full
                            before:bg-primary/10 before:opacity-0 hover:before:opacity-100">
                            <Linkedin className="w-6 h-6"/>
                        </a>

                        <a href="https://github.com/Dhill2274" target="_blank" rel="noopener noreferrer" 
                            className="relative px-4 py-4 rounded-full border border-primary text-primary bg-background transition-colors hover:scale-105 duration-300 flex items-center gap-2
                            overflow-hidden before:content-[''] before:absolute before:inset-0 before:rounded-full
                            before:bg-primary/10 before:opacity-0 hover:before:opacity-100">
                            <Github className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
            </div>

            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce transition-opacity duration-700 ${
                    fadeOut ? "opacity-0" : "opacity-100"
                }`}
            >
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}