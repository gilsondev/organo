import React from "react";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  const global = React.useContext(GlobalContext);
  return (
    global?.product && (
      <>
        <div>
          <h1>{global.product.nome}</h1>
          <p>{global.product.descricao}</p>
          <p>{global.product.valor}</p>
        </div>
        <button onClick={() => global.clearProduct()}>Limpar dados</button>
      </>
    )
  );
};

export default Product;
