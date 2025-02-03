import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mdrva0f",
        "template_ixsgkjx",
        form.current,
        "mNn0OqkJvOYhrl3gX"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setMessageSent(true); // Show the thank-you message
          form.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="main-container">
      <Header />
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Child's Name</label>
          <input type="text" name="child_name" required />
          <label>Parent's Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Phone Number</label>
          <input type="tel" name="phone_number" required />
          <label>Message</label>
          <textarea name="message" required />

          <input type="submit" value="Send" />

          {messageSent && (
            <div className="thank-you-message">
              Thank you! We will contact you as soon as possible.
            </div>
          )}

          <div className="contact-info">
            <span>Email: kindergarten@ymca.org.il</span>
            <span>Phone: 02-5692681</span>
            <span>Address: King David Street 26, Jerusalem</span>
          </div>
        </form>
        <Footer />
      </StyledContactForm>
    </div>
  );
};

const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    font-size: 16px;
    margin-left: 20%;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    .thank-you-message {
      margin-top: 1rem;
      color: green;
      font-weight: bold;
      font-size: 18px;
    }

    .contact-info {
      margin-top: 2rem;
      margin-bottom: 25rem;
      font-size: 20px;
      font-weight: bold;

      span {
        display: block;
        margin-bottom: 0.5rem;
      }
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(184, 66, 66);
      color: white;
      border: none;
    }
  }
`;

export default Contact;
