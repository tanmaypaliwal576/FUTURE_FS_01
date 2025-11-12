import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    textarea: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", textarea: "" });
      } else {
        setStatus(`❌ ${data.message || "Something went wrong."}`);
      }
    } catch (err) {
      setStatus("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-header">Get In Touch</h2>
      <p className="contact-desc">
        Have a project in mind or just want to say hello? Feel free to reach
        out!
      </p>

      <div className="contact-grid">
        {/* Left Info Section */}
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope className="info-icon" />
            <h3>Email</h3>
            <p>tanmaypaliwal12345@gmail.com</p>
          </div>

          <div className="info-card">
            <FaPhone className="info-icon" />
            <h3>Phone</h3>
            <p>6260153962</p>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h3>Location</h3>
            <p>Indore, India</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="contact-form-wrapper">
          <h3>Send Me a Message</h3>
          <p>
            Fill out the form below and I’ll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="textarea"
              placeholder="Message *"
              value={formData.textarea}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && <p className="status">{status}</p>}
        </div>
      </div>
    </section>
  );
}
