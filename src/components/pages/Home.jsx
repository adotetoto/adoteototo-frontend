import api from "../../utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaInfo } from "react-icons/fa";

import styles from "./Home.module.css";

function Home() {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  useEffect(() => {
    if (filter) {
      api.get(`/pets/filters/${filter}`).then((response) => {
        setPets(response.data.pets);
      });
    } else {
      api.get("/pets").then((response) => {
        setPets(response.data.pets);
      });
    }
  }, [filter]);

  return (
    <section>
      <div>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um conheça o tutor deles</p>
      </div>

      <div>
        <h3>Filtro de sexo</h3>
        <div>
          <button onClick={() => setFilter("all")}>Todos</button>
          <button onClick={() => setFilter("macho")}>Macho</button>
          <button onClick={() => setFilter("femea")}>Femea</button>
          <button onClick={() => setFilter("portoalegre")}>Porto Alegre</button>
          <button onClick={() => setFilter("viamao")}>Viamão</button>
          <button onClick={() => setFilter("canoas")}>Canoas</button>
          <button onClick={() => setFilter("gravatai")}>Gravatai</button>
          <button onClick={() => setFilter("cachoeirinha")}>
            Cachoeirinha
          </button>
          <button onClick={() => setFilter("esteio")}>Esteio</button>
          <button onClick={() => setFilter("viamao")}>Viamão</button>
          <button onClick={() => setFilter("small")}>Pequeno</button>
          <button onClick={() => setFilter("medium")}>Médio</button>
          <button onClick={() => setFilter("great")}>Grande</button>
        </div>
      </div>

      <div>
        <div className={styles.pet_container}>
          {pets.length > 0 &&
            pets.map((pet) => (
              <div className={styles.pet_card} key={pet._id}>
                <div
                  style={{
                    backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                  }}
                  className={styles.pet_card_image}
                ></div>
                <h3>{pet.name}</h3>

                <Link to={`/pet/${pet._id}`}>
                  <FaInfo />
                  Mais detalhes
                </Link>
              </div>
            ))}
          {pets.length === 0 && (
            <p>
              Não há pets cadastrados ou disponíveis para adoção no momento!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
