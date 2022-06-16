import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage";
import api from "../../../utils/api";
import styles from "./PetDetails.module.css";

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
        <section className={styles.pet_details_container}>
          <div className={styles.petdetails_header}>
            <h1>Conhecendo o Pet: {pet.name}</h1>
          </div>
          <div>
            {pet.images.map((image, index) => (
              <div className={styles.pet_images}>
                <img
                  src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                  alt={pet.name}
                  key={index}
                />
              </div>
            ))}
          </div>
          <p>
            <span className="bold">Peso:</span> {pet.age} anos
            <span className="bold">Falar com:</span>
            {pet.user.name}
            <span className="bold">Para o número:</span>
            {pet.user.phone}
          </p>
        </section>
      )}
    </>
  );
};

export default PetDetails;
