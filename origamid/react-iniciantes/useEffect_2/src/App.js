import React from "react";
import Product from "./Product";
const App = () => {
  const [product, setProduct] = React.useState(null);

  const handleClick = ({ target }) => {
    setProduct(target.innerText);
  };

  React.useEffect(() => {
    if (product !== null) {
      localStorage.setItem("product", product);
    }
  }, [product]);

  React.useEffect(() => {
    if (localStorage.getItem("product")) {
      setProduct(localStorage.getItem("product"));
    }
  }, []);

  return (
    <div>
      <h1>Preferência: {product}</h1>
      <button onClick={handleClick} style={{ marginRight: "1rem" }}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>

      <br />
      <Product product={product} />
    </div>
  );
};

export default App;
