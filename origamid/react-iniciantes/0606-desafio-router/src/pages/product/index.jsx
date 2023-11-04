import React from "react";
import Image from "../../components/image";
import Text from "../../components/text";
import { useParams } from "react-router-dom";
import styles from "./product.module.css";
import Loading from "../../img/loading.svg";
import Head from "../../components/head";

const Product = () => {
  const params = useParams();
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <Image src={Loading} width={64} height={64} alt="Carregando..." />
        <Text as="p">Carregando...</Text>
      </div>
    );
  }

  return (
    !loading &&
    product && (
      <>
        <Head
          title={`Detalhes do Produto | ${product.nome}`}
          description={product.descricao}
        />
        <div className={`${styles.productContainer} animeLeft`}>
          <Image
            src={product.fotos[0].src}
            width={500}
            height={600}
            alt={product.fotos[0].titulo}
          />
          <div>
            <Text as="h1">{product.nome}</Text>
            <span className={styles.productPrice}>
              R${" "}
              {new Intl.NumberFormat("pt-BR", { currency: "BRL" }).format(
                product.preco
              )}
            </span>
            <Text as="p" className={styles.productDescription}>
              {product.descricao}
            </Text>
          </div>
        </div>
      </>
    )
  );
};

export default Product;
