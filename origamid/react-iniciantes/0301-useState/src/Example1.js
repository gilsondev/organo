import React from 'react';

const Example1 = () => {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <button onClick={() => setAtivo(!ativo)}>
      {ativo ? "Ativo" : "Inativo"}
    </button>
  )
}

export default Example1;