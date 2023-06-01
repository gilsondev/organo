import React from "react";
import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulario";
import { Time } from "./components/Time";
import { Rodape } from "./components/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = React.useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#D9F7E9",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#E8F8FF",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#F0F8E2",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#FDE7E8",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#FAE9F5",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFF5D9",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FFEEDF",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[0].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[0].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[0].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[0].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[1].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[1].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[1].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[1].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[2].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[2].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[2].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[2].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[3].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[3].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[3].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[3].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[4].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[4].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[4].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[4].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "JULIANA AMOASEI",
      role: "Desenvolvedora de software e instrutora",
      image:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      team: teams[5].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "DANIEL ARTINE",
      role: "Engenheiro de Software na Stone Age",
      image:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      team: teams[5].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "GUILHERME LIMA",
      role: "Desenvolvedor Python e JavaScript na Alura",
      image:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      team: teams[5].name,
      favorite: false,
    },
    {
      id: uuidv4(),
      name: "PAULO SILVEIRA",
      role: "Hipster e CEO da Alura",
      image:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      team: teams[5].name,
      favorite: false,
    },
  ];

  const [colaborators, setColaborators] = React.useState(inicial);

  const createColaborator = (colaborator) => {
    setColaborators([...colaborators, colaborator]);
  };

  const createTeam = (team) => {
    setTeams([...teams, { id: uuidv4(), ...team }]);
  };

  const changeTeamColor = (teamId, color) => {
    setTeams(
      teams.map((team) => {
        if (team.id === teamId) {
          return { ...team, color: color };
        }
        return team;
      })
    );
  };

  const favoriteColaborator = (colaboratorId) => {
    setColaborators(
      colaborators.map((colaborator) => {
        if (colaborator.id === colaboratorId) {
          return { ...colaborator, favorite: !colaborator.favorite };
        }
        return colaborator;
      })
    );
  };

  const deleteColaborator = (colaboratorId) => {
    setColaborators(
      colaborators.filter((colaborator) => colaborator.id !== colaboratorId)
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        teams={teams.map((team) => team.name)}
        onSave={(colaborator) => createColaborator(colaborator)}
        onSaveTeam={(team) => createTeam(team)}
      />

      {teams.map((team) => (
        <Time
          onChangeColor={changeTeamColor}
          team={team}
          key={team.name}
          colaborators={colaborators.filter(
            (colaborator) => colaborator.team === team.name
          )}
          onDelete={deleteColaborator}
          onClickFavorite={favoriteColaborator}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
