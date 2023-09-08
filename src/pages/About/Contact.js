import React, { useState } from "react";
import { db } from '../../Firebase'; // Make sure this import path is correct
import { collection, addDoc } from "../../Firebase/firestore";
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

  async function sendEmail(e) {
    e.preventDefault();

    // Reference to Firestore collection
    const submissionsRef = collection(db, "submissions");

    // Add data to Firestore
    try {
      const docRef = await addDoc(submissionsRef, formData);
      console.log("Form data submitted successfully with ID: ", docRef.id);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }

    // Reset the form
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
