import Header from "./Header";
import Home from "./Home";
import ProductList from "./ProductList";

const App = () => {
  let Component = () => "";
  let { pathname } = window.location;

  if (pathname === "/") {
    Component = Home;
  } else if (pathname === "/produtos") {
    Component = ProductList;
  }

  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default App;
