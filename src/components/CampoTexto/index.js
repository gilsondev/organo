import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const placeholder = props.placeholder || "Digite aqui";

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
