import api from "../../../utils/api";
import React, { useState, useEffect } from "react";
import formStyles from "../../form/form.module.css";
import Input from "../../form/Input";
import styles from "./Profile.module.css";
import useFlashMessage from "../../../hooks/useFlashMessage";
import RoundedImage from "../../layout/RoundedImage";
import Select from "../../form/Select";

const Profile = () => {
  const [user, setUser] = useState({});
  const [preview, setPreview] = useState();
  const [token] = useState(localStorage.getItem("token") || "");
  const citys = [
    "Porto Alegre",
    "Viamão",
    "Canoas",
    "Gravatai",
    "Cachoeirinha",
    "Esteio",
  ];
  const { setFlashMessage } = useFlashMessage();
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

  function onFileChange(e) {
    setPreview(e.target.files[0]);
    setUser({ ...user, [e.target.name]: e.target.files[0] });
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleCity(e) {
    setUser({ ...user, city: e.target.options[e.target.selectedIndex].text });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let msgType = "sucess";

    const formData = new FormData();

    await Object.keys(user).forEach((key) => formData.append(key, user[key]));

    const data = await api
      .patch(`/users/edit/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  };

  return (
    <section>
      <div className={styles.profile_header}>
        <h1>Perfil</h1>
        {(user.image || preview) && (
          <RoundedImage
            src={
              preview
                ? URL.createObjectURL(preview)
                : `${process.env.REACT_APP_API}/images/users/${user.image}`
            }
            alt={user.name}
          />
        )}
      </div>

      <form onSubmit={handleSubmit} className={formStyles.form_container}>
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
          value={user.address || ""}
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
          name="confirmpassword"
          placeholder="Confirmação da senha"
          handleOnChange={handleChange}
        />

        <input type="submit" value="Editar" />
      </form>
    </section>
  );
};

export default Profile;
