import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/latest.json";
function About() {
  return (
    <div className="about">
      <div className="about-head">
        <h1 className="about-heading">
          <span className="highlight">NYZWhatsApp</span> Mod App
        </h1>
      </div>
      <div className="about-content">
        <p className="about-details">
          NYZ mod WhatsApp is a free to download app that was built with
          advanced features and mods.one of the Most trustuble and secure mod
          whatsapp you can find ever, . Connect with your friends and family
          easily by using tools to automate, sort and quickly respond to
          messages. nyz mod WhatsApp can also help u to feel most advanced
          features and provide user support and deliver important notifications
          to users. and we are happy to provide our best to you hope you enjoy
          our app. <br /> <span className="highlight">~ team nyzwa</span>
        </p>
      </div>
      <div className="explore-connect">
        <a href={data.community} className="button">
          Join our Community
        </a>
        <Link to="/privacy-policy" className="button">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default About;
