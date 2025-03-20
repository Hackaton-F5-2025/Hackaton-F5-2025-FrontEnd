import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { FaHome, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to="/" className={styles.iconLink}>
          <FaHome className={styles.icon} />
        </Link>
        <input type="text" placeholder="Buscar..." className={styles.searchBar} />
      </div>
      <div className={styles.links}>
        <span>Compra</span>
        <span>Venta</span>
        <Link to="/repuestos" className={styles.link}>Repuestos</Link>
        <span>Residuos Creativos</span>
      </div>
      <div className={styles.loginButton}>
        <span>Inicio de sesión</span>
        <FaShoppingCart className={styles.icon} />
      </div>
    </nav>
  );
}

export default Navbar;
