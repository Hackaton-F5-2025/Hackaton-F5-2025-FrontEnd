import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.navButton}>
          <FaHome className={styles.icon} />
        </Link>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.navButton}>Alquiler</button>
        <Link to="/repuestos" className={styles.navButton}>Repuestos</Link>
        <button className={styles.navButton}>Residuos Creativos</button>
        <button className={styles.loginButton}>Inicio de sesión</button>
        <button className={styles.navButton}>
          <FaShoppingCart className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;