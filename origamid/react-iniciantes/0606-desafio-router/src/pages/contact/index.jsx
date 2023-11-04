import Image from "../../components/image";
import Text from "../../components/text";

import styles from "./contact.module.css";
import ContactImage from "../../img/contato.jpg";
import Head from "../../components/head";

const Contact = () => {
  return (
    <>
      <Head title="Contato" description="Página de contato" />
      <section className={`${styles.contact} animeLeft`}>
        <Image src={ContactImage} width={500} height={600} alt={"Contato"} />
        <div>
          <Text as="h1">Entre em contato</Text>
          <ul className={styles.contactData}>
            <li>andre@origamid.com</li>
            <li>99999-9999</li>
            <li>Rua Ali perto, 999</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contact;
