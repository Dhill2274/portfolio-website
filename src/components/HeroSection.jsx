import { ArrowDown } from "lucide-react"
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
                        I'm a postgraduate masters student studying AI at Kings College London with a passion for software development. 
                        I have a bachelors Computer Science degree from the University of Bristol with a ?? class degree.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
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