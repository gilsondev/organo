import React from "react";
import { Botao } from "../Botao";
import { Campo } from "../Campo";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = (props) => {
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [image, setImage] = React.useState("");
  const [team, setTeam] = React.useState("");
  const [teamName, setTeamName] = React.useState("");
  const [teamColor, setTeamColor] = React.useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.onSave({ name, role, image, team });

    setName("");
    setRole("");
    setImage("");
    setTeam("");
  };

  const onSaveTeam = (event) => {
    event.preventDefault();
    props.onSaveTeam({ name: teamName, color: teamColor });

    setTeamName("");
    setTeamColor("");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          type="text"
          label="Nome"
          required
          placeholder="Digite o nome"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <Campo
          type="text"
          label="Cargo"
          required
          placeholder="Digite o cargo"
          onChange={(event) => setRole(event.target.value)}
          value={role}
        />
        <Campo
          type="text"
          label="Imagem"
          required
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
      <form className="formulario" onSubmit={onSaveTeam}>
        <h2>Preencha os dados para criar o time</h2>
        <Campo
          type="text"
          label="Nome"
          placeholder="Digite o nome do time"
          onChange={(event) => setTeamName(event.target.value)}
          value={teamName}
        />
        <Campo
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          onChange={(event) => setTeamColor(event.target.value)}
          value={teamColor}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};
