"use client"
import React from "react";
import Image from "next/image";
import style from "./page.module.css";
import map from "/public/map.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import Footer from "@/components/footer/Footer";

const Contact = () => {
  const [state, handleSubmit] = useForm("xayrezor");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    // components/ContactForm.js
    <div className={style.container}>
      <h1>Contact Us</h1>
      <div className={style.contact_info}>
        <div className={style.left}>
          <h2>Contact Our Agent</h2>
          <form onSubmit={handleSubmit} method="POST">
            <input type="text" name="name" placeholder="Your Name" />
            <input
              type="number"
              name="phone_number"
              placeholder="Your PhoneNumber"
            />
            <input type="email" name="emaii" placeholder="Your Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              cols="20"
              placeholder="Drop a Comment here"
              rows="10"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              Send Message
            </button>
            <ValidationError errors={state.errors} />
          </form>
        </div>
        <div className={style.right}>
          <Image src={map} width={800} height={450} alt="map" />
          <div className={style.social}>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <IoLogoWhatsapp />
            </Link>
            <Link href="#">
              <AiFillInstagram />
            </Link>
            <Link href="#">
              <ImLinkedin />
            </Link>
            <Link href="#">
              <FaSquareXTwitter />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
