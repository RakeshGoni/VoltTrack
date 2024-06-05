import React from "react";
import styles from "./Footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.address}>
          <h3>KLE Technological University</h3>
          <p>Hubballi, Karnataka, India</p>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Email: shivakumargudasalamani@gmail.com</p>
        </div>
        <div className={styles.socialMedia}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <a href="https://www.instagram.com/">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/">
              <FaFacebook className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 VoltTrack: EV Charging Station Navigator.</p>
        <p> Developed by <i>S,V,R,C (EEE)</i></p>
      </div>
    </footer>
  );
};

export default Footer;
