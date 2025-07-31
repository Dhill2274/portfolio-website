import { Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
export const ContactSection = () => {

    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",});

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                toast({
                    title: "Message Sent",
                    description: "Thank you for your message! I'll get back to you soon.",
                    duration: 5000,
                    variant: "success",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error(result.error || "Unknown error");
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "There was an error sending your message. Please try again later.",
                variant: "destructive",
            });
            console.error("Error sending email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact"
            className="pt-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-7 max-w-2xl mx-auto">
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
                                value={formData.name}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Your Name"
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                        </div>

                        <div>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                value={formData.email}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Your Email"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                        </div>

                        <div>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                value={formData.message}
                                maxLength={1000}
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none h-38"
                                placeholder="Your Message"
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                        </div>

                        <button
                            type="submit"
                            className={cn(
                                ":w-1/3 flex items-center justify-center gap-2",
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