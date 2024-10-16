import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Parthib",
          from_email: formData.email,
          to_email: "debparthib0040@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log("error: ", error);
    }
  };
  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-full "
        />
        <div className="contact-container py-20">
          <h3 className="head-text">Let's Talk!</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
          <form
            ref={formRef}
            className="mt-12 flex flex-col space-y-7"
            onSubmit={handleSubmit}
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="ex., John Doe"
                className="field-input"
                required
                onChange={handleChange}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="text"
                name="email"
                value={formData.email}
                placeholder="ex., johndoe@gmail.com"
                className="field-input"
                required
                onChange={handleChange}
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                placeholder="We want to work with you..."
                className="field-input"
                required
                onChange={handleChange}
              ></textarea>
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
