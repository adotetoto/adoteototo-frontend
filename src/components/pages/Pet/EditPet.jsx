import React from "react";
import api from "../../../utils/api";
import { useState, useEffect } from "react";

import styles from "./AddPet.module.css";

import useFlashMessage from "../../../hooks/useFlashMessage";

import PetForm from "../../form/PetForm";
const EditPet = () => {
  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet: 'pet.name'</h1>
        <p>Depois da edição os dados serão atualizados do sistema</p>
      </div>
    </section>
  );
};

export default EditPet;
