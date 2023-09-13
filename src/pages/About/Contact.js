import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send("service_x25bnco", "template_f2f205a", formData, "user_soF1ktupuUmh91OJ0gGPy")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({
      user_name: "",
      user_email: "",
      message: "",
    });
  }

  return (
    <form className="col-lg-4 offset-lg-4" onSubmit={sendEmail}>
      <input
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Message"
      />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
