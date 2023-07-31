import React from "react";
import "../styles/Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechKura</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/" target={"blank"}>
            Youtube
          </a>
          <a href="instagram.com/sushildwd/" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/SushilDawadi" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
