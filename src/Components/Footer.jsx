import React from "react";
import styles from './footer.module.css';
import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <span>Use cases</span>
        <span>Explore</span>
      </div>
      <div className={styles.copyright}>© Ecopart 2025</div>
      <div className={styles.socialIcons}>
        <FaXTwitter className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaYoutube className={styles.icon} />
        <FaLinkedin className={styles.icon} />
      </div>
    </footer>
  );
}

export default Footer;