import api from "../../utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaInfo } from "react-icons/fa";

import styles from "./Home.module.css";

function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <section>
      <div>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um conheça o tutor deles</p>
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
