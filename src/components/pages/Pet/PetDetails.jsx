import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage";
import api from "../../../utils/api";
import styles from "./PetDetails.module.css";
import { FaWhatsapp } from "react-icons/fa";

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]);
  return (
    <>
      {pet.name && (
        <section>
          <div className={styles.description_pet}>
            <h3>Descrição do Pet </h3>
            <p>{pet.description}</p>
          </div>
          <div className={styles.grid_pet_info}>
            <div className={styles.img_container}>
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
              />
            </div>

            <div className={styles.info_container}>
              <ul>
                <li>
                  <span>Nome:</span> {pet.name}
                </li>
                <li>
                  <span>Idade do pet:</span> {pet.age} anos
                </li>
                <li>
                  <span>Sexo:</span> {pet.sex}
                </li>
                <li>
                  <span>Falar com:</span> {pet.user.name}
                </li>
                <li>
                  <span>Telefone: </span> {pet.user.phone}
                </li>
                <li>
                  <span>Endereço: </span>
                  {pet.user.address}
                </li>
                <li>
                  <span>Cidade: </span>
                  {pet.user.city}
                </li>
                <li>
                  <Link to={`/pet/gallery/${pet._id}`}>Galeria</Link>
                  <a
                    className={styles.phone_wpp}
                    target="_blank"
                    href={` https://api.whatsapp.com/send?phone=55${pet.user.phone}&text=Olá,gostaria de ver mais informações sobre o dog ${pet.name}.`}
                  >
                    <FaWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PetDetails;
