import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Context } from "../../context/UserContext";
import { MdPets } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";
import {
  FaLockOpen,
  FaUserAlt,
  FaLock,
  FaList,
  FaMarker,
} from "react-icons/fa";
const Navbar = () => {
  const { authenticated, logout } = useContext(Context);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <h1>
          <GiSittingDog />
        </h1>
      </div>
      <ul>
        <li>
          <MdPets /> <Link to="/">Adotar</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <FaUserAlt />
              <Link to="/user/profile">Perfil</Link>
            </li>
            <li>
              <FaList /> <Link to="/pet/mypets">Meus pets</Link>
            </li>

            <li onClick={logout}>
              <FaLock />
              <span> Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <FaLockOpen /> <Link to="/login">Entrar</Link>
            </li>
            <li>
              <FaMarker />
              <Link to="/register">Cadastrar</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
