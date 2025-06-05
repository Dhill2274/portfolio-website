import { Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Message Sent",
                description: "Thank you for your message! I'll get back to you soon.",
                duration: 5000,
                variant: "success",
            });
            setIsSubmitting(false);
        }
        , 1670);
    };

    return (
        <section id="contact"
            className="pt-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Feel free to contact me directly at&nbsp;
                    <a href="mailto:dhillon.thu@icloud.com">
                        <u>dhillon.thu@icloud.com</u>
                    </a> 
                    &nbsp;or through this form.
                </p>

                <div className="bg-card p-8 rounded-lg shadow-xs max-w-2xl mx-auto" onSubmit={handleSubmit}>
                    <form className="space-y-6">
                        <div>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Your Email"
                            />
                        </div>

                        <div>
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-38"
                                placeholder="Your Message"
                            />
                        </div>

                        <button
                            type="submit"
                            className={cn(
                                "w-full flex items-center justify-center gap-2",
                                isSubmitting
                                    ? "cosmic-button bg-gray-400 text-gray-700 cursor-not-allowed border-gray-300 hover:scale-100"
                                    : "cosmic-button",
                            )}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Sending..." : <>Send Message <Send size={16}/> </>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}