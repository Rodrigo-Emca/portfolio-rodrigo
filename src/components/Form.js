import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";

const Form = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false); // Nuevo estado para controlar el modal

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.stringify(formData);

    fetch("https://formspree.io/f/xrbpaegg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        setShowModal(true); // Mostrar el modal de éxito

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Ocultar el modal después de 3 segundos
        setTimeout(() => {
          setShowModal(false);
        }, 5000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.form
      action="https://formspree.io/f/xrbpaegg"
      method="POST"
      ref={ref}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={handleSubmit}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.name}
          id="contactName"
          name="name"
          placeholder="Name"
          required
        />
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.email}
          id="contactEmail"
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
      </div>

      {/* Modal de éxito */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Message Sent</h4>
            <p>Your message has been successfully sent!</p>
          </div>
        </div>
      )}
    </motion.form>
  );
};

export default Form;
