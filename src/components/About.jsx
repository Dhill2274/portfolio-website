import { ArrowDownToLine, BrainCircuit, Code, SendHorizonal } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>

                        <p className="text-muted-foreground">
                            With over 3 years of experience in web development, I specialise in creating
                            responsive, accessible, and user-friendly web applications.
                        </p>

                        <p className="text-muted-foreground">
                            I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning
                            new technologies to enhance my skills and deliver the best results for my clients.
                        </p>

                        <p className="text-muted-foreground">
                            Please contact me below if you have any queries or find out more about me on my LinkedIn!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button flex items-center gap-2">
                                Get In Touch <SendHorizonal />
                            </a>
                            <a href="src/assets/Dhillon Thurairatnam CV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-colors duration-300 flex items-center gap-2"
                                target="_blank" rel="noopener noreferrer"
                            >
                                Download CV <ArrowDownToLine />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Software Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating scalable applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Building and integrating MLP models into software.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Building and integrating MLP models into software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}