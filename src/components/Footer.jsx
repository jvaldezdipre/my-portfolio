import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
      <ul className="footer">
        <li>
          <a href="https://github.com/jvaldezdipre"></a>Github
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeffreyvaldezdipre/"></a>LinkedIn
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
