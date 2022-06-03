import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Context } from "../../context/UserContext";
const Navbar = () => {
  const { authenticated, logout } = useContext(Context);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <h1>LOGO</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Adotar</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <Link to="/users/profile">Perfil</Link>
            </li>
            <li onClick={logout}>Sair</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Cadastrar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
