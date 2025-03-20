import React from "react";
import styles from './navbar.module.css';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <FaHome className={styles.icon} />
        <input type="text" placeholder="Hinted search text" className={styles.searchBar} />
      </div>
      <div className={styles.links}>
        <span>Compra</span>
        <span>Venta</span>
        <span>Componentes</span>
        <span>Reparación</span>
      </div>
      <div className={styles.rightSection}>
        <button className={styles.loginButton}>Inicio sesión</button>
        <FaShoppingCart className={styles.icon} />
      </div>
    </nav>
  );
}

export default Navbar;
