import { NavLink } from "react-router-dom";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.menu}>
        <NavLink to="/">Produtos</NavLink>
        <NavLink to="contact">Contato</NavLink>
      </nav>
    </header>
  );
};

export default Header;
