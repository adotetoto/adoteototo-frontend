import React, { useContext, useState } from "react";
import Input from "../../form/Input";
import styles from "../../form/form.module.css";
import { Link } from "react-router-dom";
import { Context } from "../../../context/UserContext";
import Select from "../../form/Select";

const Register = () => {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);
  const citys = [
    "Porto Alegre",
    "Viamão",
    "Canoas",
    "Gravatai",
    "Cachoeirinha",
    "Esteio",
  ];

  function handleChange(e) {
    // vai formar um objeto definindo cada campo uma chave e valor formando o objeto user
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleCity(e) {
    setUser({ ...user, city: e.target.options[e.target.selectedIndex].text });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }
  return (
    <section className={styles.form_container}>
      <h1>Registrar</h1>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          handleOnChange={handleChange}
        />

        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Por exemplo 051985013355"
          handleOnChange={handleChange}
        />
        <Select
          name="city"
          text="Selecione a sua cidade"
          options={citys}
          handleOnChange={handleCity}
          value={user.city || ""}
        />
        <Input
          text="Endereço"
          type="text"
          name="address"
          placeholder="Digite o seu Endereço"
          handleOnChange={handleChange}
        />

        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite o seu e-mail"
          handleOnChange={handleChange}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite a sua senha"
          handleOnChange={handleChange}
        />
        <Input
          text="Confirmação de senha"
          type="password"
          name="confirmpassword"
          placeholder="Digite a sua confirmação de senha"
          handleOnChange={handleChange}
        />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>
        Já tem conta ? <Link to="/login">Clique aqui</Link>
      </p>
    </section>
  );
};

export default Register;
