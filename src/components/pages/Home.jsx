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
    api.get(`/pets/filters/${filter}`).then((response) => {
      setPets(response.data.pets);
    });
  }, [filter]);

  return (
    <section>
      <div>
        <h1>Adote um Pet</h1>
        {filter === "all" && (
          <p>
            <span>Todos</span> pets cadastrados no sistema.
          </p>
        )}
        {filter === "macho" && (
          <p>
            Pets que são do sexo <span>macho</span>.
          </p>
        )}
        {filter === "femea" && (
          <p>
            Pets que são do sexo <span>fêmea</span>.
          </p>
        )}
        {filter === "portoalegre" && (
          <p>
            Pets que seus doadores estão em <span>Porto Alegre</span>.
          </p>
        )}
        {filter === "viamao" && (
          <p>
            Pets que seus doadores estão em <span>Viamão</span>.
          </p>
        )}
        {filter === "canoas" && (
          <p>
            Pets que seus doadores estão em <span>Canoas</span>.
          </p>
        )}
        {filter === "gravatai" && (
          <p>
            Pets que seus doadores estão em <span>Gravatai</span>.
          </p>
        )}
        {filter === "cachoeirinha" && (
          <p>
            Pets que seus doadores estão em <span>Cachoeirinha</span>.
          </p>
        )}
        {filter === "esteio" && (
          <p>
            Pets que seus doadores estão em <span>Esteio</span>.
          </p>
        )}
        {filter === "small" && (
          <p>
            Pets com o porte <span>pequeno</span>.
          </p>
        )}
        {filter === "medium" && (
          <p>
            Pets com porte <span>médio</span>.
          </p>
        )}
        {filter === "great" && (
          <p>
            Pets com porte <span>pequeno</span>.
          </p>
        )}
      </div>

      <div>
        <div className={styles.pet_filter_container}>
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
              Não há pets cadastrados ou com o filtro selecionado
              {filter === "all" && <span> Todos.</span>}
              {filter === "macho" && <span> macho.</span>}
              {filter === "femea" && <span> fêmea.</span>}
              {filter === "portoalegre" && <span> Porto Alegre.</span>}
              {filter === "viamao" && <span> Viamão.</span>}
              {filter === "canoas" && <span> Canoas.</span>}
              {filter === "esteio" && <span> Esteio.</span>}
              {filter === "gravatai" && <span> Gravatai.</span>}
              {filter === "cachoeirinha" && <span> Cachoeirinha.</span>}
              {filter === "small" && <span> Pequeno.</span>}
              {filter === "medium" && <span> Médio.</span>}
              {filter === "great" && <span> Grande.</span>}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
