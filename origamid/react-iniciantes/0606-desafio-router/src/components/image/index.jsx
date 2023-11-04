import styles from "./image.module.css";

const Image = ({ src, width, height, alt }) => {
  return (
    <>
      <img
        className={styles.image}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    </>
  );
};

export default Image;
