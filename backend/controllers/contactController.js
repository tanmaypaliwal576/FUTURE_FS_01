import Contact from "../models/Contact.js";
import { resend } from "../lib/resend.js";
import UserContacted from "../emails/UserContacted.js";

export const contactController = async (req, res) => {
  try {
    const { name, email, textarea, subject } = req.body;

    if (!name || !email || !textarea || !subject) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check for duplicates
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res.status(400).json({
        success: false,
        message: "You have already contacted once. Please wait for a reply.",
      });
    }

    // Save message to DB
    const newContact = await Contact.create({ name, email, textarea, subject });

    // ✅ Send email via Resend
    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Must be same as your Resend verified email
      to: "tanmay050706@gmail.com", // You receive it here
      subject: `New Contact from ${name}`,
      html: UserContacted(name, email, textarea, subject),
    });
    res.status(201).json({
      success: true,
      message: "Thanks for contacting me! I’ll get back to you soon.",
      contact: newContact,
    });
  } catch (error) {
    console.error("❌ Error in contactController:", error);
    res.status(500).json({
      success: false,
      message: "Server error while processing your message.",
      error: error.message,
    });
  }
};
