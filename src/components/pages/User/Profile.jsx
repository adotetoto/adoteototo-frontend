import api from "../../../utils/api";
import React, { useState, useEffect } from "react";
import formStyles from "../../form/form.module.css";
import Input from "../../form/Input";
import styles from "./Profile.module.css";
const Profile = () => {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");
  useEffect(() => {
    api
      .get("/users/checkuser", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, [token]);

  function onFileChange() {}
  function handleChange() {}

  return (
    <section>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        <p>Preview de imagem</p>
      </div>

      <form className={formStyles.form_container}>
        <Input
          text="Imagem"
          type="file"
          name="image"
          handleOnChange={onFileChange}
        />

        <Input
          text="E-mail"
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          handleOnChange={handleChange}
          value={user.email || ""}
        />
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
          value={user.name || ""}
        />
        <Input
          text="Telefone"
          type="text"
          name="phone"
          placeholder="Digite seu telefone"
          handleOnChange={handleChange}
          value={user.phone || ""}
        />

        <Input
          text="Senha"
          type="password"
          name="password"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
          value={user.password || ""}
        />

        <Input
          text="Confirmação da senha"
          type="password"
          name="password"
          placeholder="Confirmação da senha"
          handleOnChange={handleChange}
        />

        <input type="submit" value="Editar" />
      </form>
    </section>
  );
};

export default Profile;
