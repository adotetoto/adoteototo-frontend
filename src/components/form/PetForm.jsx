import React, { useState } from "react";

import formStyles from "./form.module.css";
import Input from "./Input";
import Select from "./Select";
const PetForm = ({ handleSubmit, petData, btnText }) => {
  const [pet, setPet] = useState(petData || {});
  const [preview, setPreview] = useState([]);
  const colors = ["Branco", "Preto", "Cinza", "Caramelo", "Mesclado"];
  const sizes = ["Pequeno", "Médio", "Grande"];
  const sexs = ["Macho", "Fêmea"];
  function onFileChange(e) {
    setPreview(Array.from(e.target.files));
    setPet({ ...pet, images: [...e.target.files] });
  }
  function handleChange(e) {
    setPet({ ...pet, [e.target.name]: e.target.value });
  }
  function handleColor(e) {
    setPet({
      ...pet,
      color: e.target.options[e.target.selectedIndex].text,
    });
  }
  function handleSize(e) {
    setPet({
      ...pet,
      size: e.target.options[e.target.selectedIndex].text,
    });
  }
  function handleSex(e) {
    setPet({
      ...pet,
      sex: e.target.options[e.target.selectedIndex].text,
    });
  }
  function submit(e) {
    e.preventDefault();

    handleSubmit(pet);
  }
  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div className={formStyles.preview_pet_images}>
        {preview.length > 0
          ? preview.map((image, index) => (
              <img
                src={URL.createObjectURL(image)}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))
          : pet.images &&
            pet.images.map((image, index) => (
              <img
                src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                alt={pet.name}
                key={`${pet.name}+${index}`}
              />
            ))}
      </div>
      <Input
        text="Imagens do Pet"
        type="file"
        name="images"
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Input
        text="Nome do Pet"
        type="text"
        name="name"
        placeholder="Digite seu nome"
        handleOnChange={handleChange}
        value={pet.name || ""}
      />
      <Input
        text="Idade do Pet"
        type="number"
        name="age"
        placeholder="Digite a idade"
        handleOnChange={handleChange}
        value={pet.age || ""}
      />

      <Input
        text="Peso do Pet"
        type="number"
        name="weight"
        placeholder="Digite o peso do pet"
        handleOnChange={handleChange}
        value={pet.weight || ""}
      />
      <Select
        name="color"
        text="Selecione a cor"
        options={colors}
        handleOnChange={handleColor}
        value={pet.color || ""}
      />
      <Select
        name="size"
        text="Selecione o porte do pet"
        options={sizes}
        handleOnChange={handleSize}
        value={pet.size || ""}
      />
      <Select
        name="sex"
        text="Selecione o sexo do pet"
        options={sexs}
        handleOnChange={handleSex}
        value={pet.sex || ""}
      />
      <Input
        text="Descrição do pet"
        type="text"
        name="description"
        placeholder="Digite o peso do pet"
        handleOnChange={handleChange}
        value={pet.description || ""}
      />

      <input type="submit" value={btnText} />
    </form>
  );
};

export default PetForm;
