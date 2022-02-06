import React from "react";
import { FiGlobe, FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="dev-name">
            <h3 className="name">
              Design & Built by <a href="https://musadhiq.ml">musadhiq</a>
            </h3>
            <div className="social">
              <a href="https://musadhiq.ml">
                <FiGlobe className="icon" />
              </a>
              <a href="https://github.com/musadhiq">
                <FiGithub className="icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
