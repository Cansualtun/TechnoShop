import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-content">
          <h3>Sandbox APP</h3>
          <p>The Best Online Shopping Site</p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            Coding By-<a href="https://github.com/Cansualtun">Cansu Altun</a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
