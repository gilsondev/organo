const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const ativaStyle = {
  color: "green",
};

const inativaStyle = {
  color: "red",
};

const fetchPrices = (order) => order.preco;
const removePrefix = (price) => price.replace("R$ ", "");
const convertToNumber = (price) => Number(price);
const sumPrices = (priceA, priceB) => priceA + priceB;

function App() {
  const luanaPricesTotal = luana.compras
    .map(fetchPrices)
    .map(removePrefix)
    .map(convertToNumber)
    .reduce(sumPrices);

  const marioPricesTotal = mario.compras
    .map(fetchPrices)
    .map(removePrefix)
    .map(convertToNumber)
    .reduce(sumPrices);

  return (
    <div>
      <div>
        <p>Cliente: {luana.cliente}</p>
        <p>Idade: {luana.idade}</p>
        <p>Compras:</p>
        <ul>
          {luana.compras.map((compra) => (
            <li>
              {compra.nome} - {compra.preco}
            </li>
          ))}
        </ul>
        {luanaPricesTotal >= 10000 ? (
          <span>Ganhou a promoção</span>
        ) : (
          <span>Não foi dessa vez</span>
        )}
        <p>
          Status:{" "}
          {luana.ativa ? (
            <span style={ativaStyle}>Ativa</span>
          ) : (
            <span style={inativaStyle}>Inativa</span>
          )}
        </p>
      </div>
      <hr />
      <div>
        <p>Cliente: {mario.cliente}</p>
        <p>Idade: {mario.idade}</p>
        <p>Compras:</p>
        <ul>
          {mario.compras.map((compra) => (
            <li>
              {compra.nome} - {compra.preco}
            </li>
          ))}
        </ul>
        {marioPricesTotal >= 10000 ? (
          <span>Ganhou a promoção</span>
        ) : (
          <span>Não foi dessa vez</span>
        )}
        <p>
          Status:{" "}
          {mario.ativa ? (
            <span style={ativaStyle}>Ativa</span>
          ) : (
            <span style={inativaStyle}>Inativa</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
