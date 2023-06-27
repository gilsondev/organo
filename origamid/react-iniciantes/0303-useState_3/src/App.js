import React from "react";

import "./App.css";

const URI = "https://ranekapi.origamid.dev/json/api/produto/";

const App = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const hasCompleted = !loading && Boolean(product);

  const fetchProduct = async (productName) => {
    setLoading(true);
    const response = await fetch(`${URI}${productName.toLowerCase()}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
  };

  return (
    <>
      <div className="buttons">
        <button onClick={() => fetchProduct("Tablet")}>Produto1</button>
        <button onClick={() => fetchProduct("Smartphone")}>Produto2</button>
        <button onClick={() => fetchProduct("Notebook")}>Produto3</button>
      </div>
      {loading && <p>Carregando...</p>}
      {hasCompleted && (
        <div className="card">
          <div className="card-cover">
            {product.fotos.map((image) => (
              <img key={image.titulo} src={image.src} alt="" />
            ))}
          </div>
          <h3>{product.nome}</h3>
          <p className="card-description">{product.descricao}</p>

          <span className="card-price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.preco)}
          </span>
        </div>
      )}
    </>
  );
};

export default App;
