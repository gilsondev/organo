import React from "react";

const Example2 = () => {
  const [ativo, setAtivo] = React.useState(true);

  function handleClick() {
    // Usando o callback para recuperar o valor anterior
    setAtivo((anterior) => !anterior);
  }

  return (
    <button onClick={handleClick}>
      {ativo ? "Esta ativo" : "Esta inativo"}
    </button>
  );
};

export default Example2;
