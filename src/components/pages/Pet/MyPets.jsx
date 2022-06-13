import React, { useState, useEffect } from "react";
import api from "../../../utils/api";
import { Link } from "react-router-dom";

import RoudedImage from "../../layout/RoundedImage";

import useFlashMessage from "../../../hooks/useFlashMessage";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [token] = useState(localStorage.getItem("token" || ""));
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get("/pet/mypets", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <section>
      <h1>Meus pets</h1>
      <Link to="/pet/add">Cadastrar Pet</Link>
      <div>
        {pets.length > 0 && <p>Meus Pets cadastrados</p>}
        {pets.length === 0 && <p>Não há pets cadastrados</p>}
      </div>
    </section>
  );
};

export default MyPets;
