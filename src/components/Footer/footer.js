import React from "react";
import './footer.css';

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Copyright @amrybubb0 {currYear}</p>
    </footer>
  );
}

export default Footer;
