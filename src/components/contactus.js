import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
// npm i @emailjs/browser
import image from "../images/background2.jpg";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lw6k5im",
        "template_02hbll8",
        form.current,
        "UW8UJDeodFGKb9pRF"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
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
        </form>
        <Footer />
      </StyledContactForm>
    </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Align items vertically between Header and Footer */
  height: 100vh; /* 100% of the viewport height */

  /*background-image: url(${image});
  background-size: cover; 
  background-repeat: no-repeat;
  background-position: center center;
*/
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

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(51, 51, 51);
      color: white;
      border: none;
    }
  }
`;
