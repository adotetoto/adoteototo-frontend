import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <h1>LOGO</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Adotar</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/register">Cadastrar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
