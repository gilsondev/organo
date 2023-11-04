import styles from "./card.module.css";
import Image from "../image";
import Text from "../text";

const Card = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} width={300} height={400} alt={title} />
      <Text as="h1">{title}</Text>
    </div>
  );
};

export default Card;
