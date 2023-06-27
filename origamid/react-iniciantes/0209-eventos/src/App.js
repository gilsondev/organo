const App = () => {
  const handleClick = (event) => {
    alert("Comprou: " + event.target.innerText);
  };
  return (
    <div>
      <button onClick={handleClick}>Camisa</button>
      <button onClick={handleClick}>Bermuda</button>
      <button onClick={({ target }) => target.classList.toggle("ativa")}>
        Ativar
      </button>
    </div>
  );
};

export default App;
