import "./Rodape.css";

export const Rodape = () => {
  return (
    <footer>
      <section>
        <ul>
          <li>
            <img src="/images/fb.png" alt="Facebook" />
          </li>
          <li>
            <img src="/images/tw.png" alt="Twitter" />
          </li>
          <li>
            <img src="/images/ig.png" alt="Instagram" />
          </li>
        </ul>
      </section>
      <section className="footer__logo">
        <img src="/images/logo.png" alt="Organo" />
      </section>
      <section>
        <p>Desenvolvido por Alura</p>
      </section>
    </footer>
  );
};
