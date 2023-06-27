import React from "react";

// O modo estrito invoca duas vezes a renderização do componente, quando o estado
// é atualizado. Assim é possível identificarmos funções com efeitos coláterais
// (side effects) e eliminarmos as mesmas. Funções com efeitos coláterais
// são aquelas que modificam estados que estão fora das mesmas.
const Example4 = () => {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(["Item 1"]);

  function handleClick() {
    setContar((contar) => {
      // setContar possui efeito colateral, caso a linha abaixo execute
      // setItems((items) => [...items, 'Item ' + (contar + 1)])
      return contar + 1;
    });
    // Tirar o efeito coletal acima irá concertar o erro
    setItems((items) => [...items, "Item " + (contar + 1)]);
  }

  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </>
  );
};

export default Example4;
