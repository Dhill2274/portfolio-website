import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { Resend } from 'resend';

dotenv.config();

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_KEY);

app.post("/api/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (
        typeof name !== "string" ||
        typeof message !== "string" ||
        typeof email !== "string" ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        message.length > 1000
    ) {
        return res.status(400).json({
            success: false,
            error: "Invalid input: name and message must be strings, email must be valid, and message must be under 1000 characters.",
        });
    }

    const { data, error } = await resend.emails.send({
        from: 'Onboarding <onboarding@resend.dev>',
        to: ['dhillon.thu@gmail.com'],
        subject: 'Personal Portfolio Message',
        html: `<p>Hi,</p>
               <p>You have received a message from your personal portfolio.</p>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> "${message}"</p>`,
    });

    if (error) {
        console.error("Error sending email:", error || error.message);
        res.status(500).json({ success: false, error: "Failed to send email" });
    } else {
        res.json({ success: true, result: data });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));