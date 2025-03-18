import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-button">
        <FaHome className="icon" />
      </Link>
      {/* Barra de búsqueda (crear)
      <SearchBar /> */}

      <button className="nav-button">Alquiler</button>
      <Link to="/repuestos" className="nav-button">Repuestos</Link>
      <button className="nav-button">Residuos Creativos</button>
      <button className="nav-button">Inicio de sesión</button>

      <button className="nav-button">
        <FaShoppingCart className="icon" />
      </button>
    </nav>
  );
};

export default Navbar;
