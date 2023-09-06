import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x25bnco",
        "template_f2f205a",
        e.target,
        "user_soF1ktupuUmh91OJ0gGPy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <form className="col-lg-4 offset-lg-4" onSubmit={sendEmail}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Contact <strong className="purple">Me</strong>
      </h1>
      <div className="from-group">
        <label>Name</label>
        <input type="hidden" name="contact_number" />
      </div>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default Contact;
