import React from "react";

const Product = ({ product }) => {
  const [data, setData] = React.useState(null);

  const fetchData = async (name) => {
    const resp = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${name.toLowerCase()}`
    );
    const data = await resp.json();
    setData(data);
  };

  React.useEffect(() => {
    console.log(product);
    if (product !== null) {
      fetchData(product);
    }
  }, [product]);

  if (data === null) {
    return null;
  }

  return (
    <div>
      <h4>{data.nome}</h4>
      <p>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(data.preco)}
      </p>
    </div>
  );
};

export default Product;
