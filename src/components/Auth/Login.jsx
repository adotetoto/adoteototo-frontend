import React, { useEffect, useState } from "react";
import { Context } from "../../context/UserContext";
import Input from "../form/Input";
import styles from "../form/form.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  function handleChange() {}
  return (
    <section className={styles.form_container}>
      <h1>Login</h1>
      <form>
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
