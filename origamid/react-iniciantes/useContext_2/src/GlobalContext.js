import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [product, setProduct] = React.useState(null);

  const clearProduct = () => {
    setProduct(null);
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto/notebook"
    );
    const json = await response.json();
    setProduct(json);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ product, clearProduct }}>
      {children}
    </GlobalContext.Provider>
  );
};
