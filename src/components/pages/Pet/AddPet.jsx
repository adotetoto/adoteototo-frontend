import React from "react";
import styles from "./AddPet.module.css";
import api from "../../../utils/api";

import { useState } from "react";
import { navigate } from "react-router-dom";

import useFlashMessage from "../../../hooks/useFlashMessage";
const AddPet = () => {
  return (
    <section className={styles.addpet_header}>
      <div>
        <h1>Cadastre um pet</h1>
        <p>Depois ele ficará disponivel para adoção</p>
      </div>
      <p>formulário</p>
    </section>
  );
};

export default AddPet;
