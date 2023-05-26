import React from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = (props) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [image, setImage] = React.useState("");
  const [team, setTeam] = React.useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onSave({ name, role, image, team });

    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite o nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite o cargo"
          onChange={(event) => setRole(event.target.value)}
          value={role}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite a URL da imagem"
          onChange={(event) => setImage(event.target.value)}
          value={image}
        />
        <ListaSuspensa
          required
          label="Time"
          items={props.teams}
          onChange={(event) => setTeam(event.target.value)}
          value={team}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
