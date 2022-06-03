import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/UserContext";
import Input from "../../form/Input";
import styles from "../../form/form.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    // vai formar um objeto definindo cada campo uma chave e valor formando o objeto user
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    login(user);
  }
  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          handleOnChange={handleChange}
        />
        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
        />

        <input type="submit" value="entrar" />

        <p>
          Não tem conta ? <Link to="/register">Clique aqui.</Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
