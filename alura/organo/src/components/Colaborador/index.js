import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";

export const Colaborator = ({
  id,
  name,
  image,
  role,
  favorite,
  onDelete,
  onClickFavorite,
  backgroundColor,
}) => {
  const changeFavorite = () => {
    onClickFavorite(id);
  };

  const favoriteProps = {
    size: 25,
    onClick: changeFavorite,
    color: favorite ? "red" : "black",
  };

  return (
    <div className="colaborator">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => onDelete(id)}
      />
      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <div className="favorite">
          {favorite ? (
            <AiFillHeart {...favoriteProps} />
          ) : (
            <AiOutlineHeart {...favoriteProps} />
          )}
        </div>
      </div>
    </div>
  );
};
