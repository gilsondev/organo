import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { ListaSuspensa } from "../ListaSuspensa";
import "./Formulario.css";

export const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    alert("Salvo com sucesso!");
  };

  return (
    <section className="formulario">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome" />
        <CampoTexto label="Cargo" placeholder="Digite o cargo" />
        <CampoTexto label="Imagem" placeholder="Digite a URL da imagem" />
        <ListaSuspensa required label="Time" items={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
