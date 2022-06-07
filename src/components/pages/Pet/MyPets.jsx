import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyPets = () => {
  const [pets, setPets] = useState([]);

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
