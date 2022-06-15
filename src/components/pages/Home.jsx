import api from "../../utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Home.module.css";

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
      console.log(pets);
    });
  }, []);

  return (
    <section>
      <div>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um conheça o tutor deles</p>
      </div>

      <div>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div>
              <p>Imagem do Pet</p>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
                <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
              </p>
            </div>
          ))}

        {pets.length === 0 && <p>Não há pets cadastrados</p>}
      </div>
    </section>
  );
}

export default Home;
