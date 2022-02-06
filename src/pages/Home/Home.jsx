import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import homebg from "../../assets/homebg.png";
import About from "../../components/about/About";
import Download from "../../components/download/Download";
import { BsArrowRightShort } from "react-icons/bs";
import data from "../../assets/latest.json";
function Home() {
  return (
    <div className="home-spotlight">
      <div className="home-spotlight-content">
        <div className="spotlight-left">
          <h1 className="spotlight-heading">
            Simple. Secure. Reliable messaging.
            <span className="spotlight-highlight"> NYZ WA </span> !
          </h1>
          <p className="details">
            With nyz mod WhatsApp, you'll get fast, simple, secure messaging and
            calling for free* and most advanced mod features in market,
            available on all over the world.
          </p>
        </div>
        <div className="spotlight-right">
          <div className="image-container">
            <img src={homebg} alt="homebg" className="homebg" />
          </div>
        </div>
      </div>
      <div className="links">
        <a href={data.latestwa}>
          <FaDownload className="link-icon" /> Download Latest Version Here !
        </a>
        <a href={data.contactDev}>
          <MdConnectWithoutContact className="link-icon" /> Contact Developer !
        </a>
      </div>
      {/* about section */}
      <div className="about-section">
        <About />
      </div>
      {/* download section */}
      <div className="download-section">
        <Download />
      </div>
      <div className="more-btn">
        <Link to="/downloads" className="nav-btn">
          more <BsArrowRightShort />
        </Link>
      </div>
    </div>
  );
}

export default Home;
