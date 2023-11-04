import React from "react";
import Card from "../../components/card";
import styles from "./products.module.css";
import { Link } from "react-router-dom";
import Head from "../../components/head";

const Products = () => {
  const [data, setData] = React.useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto"
    );
    setData(await response.json());
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Head title="Produtos" description="Lista de produtos" />
      <div className={`${styles.products} animeLeft`}>
        {data.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className={styles.product}
          >
            <Card key={item.id} title={item.nome} image={item.fotos[0].src} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
