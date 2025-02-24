import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import ball2 from "../images/ball2.png";
import ball3 from "../images/ball1.png";

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
        <h1>Contact Us</h1>
        <BallImageLeft src={ball2} alt="Ball Left" />
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="child_name"
            placeholder="Child's name"
            required
          />
          <input
            type="text"
            name="from_name"
            placeholder="Parent's name"
            required
          />
          <input type="email" name="user_email" placeholder="Email" required />
          <input
            type="tel"
            name="phone_number"
            placeholder="Phone number"
            required
          />
          <textarea name="message" placeholder="Message" required />
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
        <BallImageRight src={ball3} alt="Ball Right" />
        
      </StyledContactForm>
    </div>
  );
};

const BallImageLeft = styled.img`
  position: absolute;
  left: 5%;
  top: 30%;
  transform: rotate(-20deg);
  width: 350px;
  height: 450px;

  @media (max-width: 768px) {
    width: 100px;
    height: 120px;
    left: 2%;
    top: 85%;
    transform: rotate(-15deg);
  }
`;

const BallImageRight = styled.img`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: rotate(25deg);
  width: 350px;
  height: 450px;

  @media (max-width: 768px) {
    width: 100px;
    height: 120px;
    right: 2%;
    top: 84%;
    transform: rotate(20deg);
  }
`;

const StyledContactForm = styled.div`
  background-color: #ed596b;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 56px;
    text-align: center;
    background-color: #ed596b;
    color: #ffe3e3;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }

  form {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 150px;
  }

  label {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    border-radius: 5px;
    border: 2px solid #ed596b;
    background-color: #f9f9f9;
    font-size: 16px;
    color: #333;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  input:focus,
  textarea:focus {
    border-color: rgb(160, 0, 19);
    outline: none;
    background-color: white;
  }

  input:focus::placeholder,
  textarea:focus::placeholder {
    color: transparent;
  }

  input::placeholder,
  textarea::placeholder {
    color: #000;
    padding-left: 20px;
    padding: 0px 10px;
  }

  input[type="submit"] {
    background-color: #ed596b;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    margin-top: 10px;
    transition: background-color 0.3s;
  }

  input[type="submit"]:hover {
    background-color: rgb(232, 29, 52);
  }

  .thank-you-message {
    color: green;
    font-weight: bold;
    margin-top: 20px;
  }

  .contact-info {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: 20px;
  }

  .contact-info span {
    display: block;
    margin: 5px 0;
  }

  /* Small screens styles */
  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
      padding: 0 20px;
    }

    form {
      padding: 20px;
      margin-bottom: 100px;
      
    }

    input,
    textarea {
      font-size: 14px;
      padding: 8px;
      
    }

    input[type="submit"] {
      font-size: 16px;
      padding: 10px;
    }

    .contact-info {
      font-size: 12px;
      margin:10px;
    }
  }
`;

export default Contact;
