import "./Campo.css";

export const Campo = ({
  label,
  type = "text",
  value,
  placeholder,
  required,
  onChange,
}) => {
  const placeholderInput = placeholder || "Digite aqui";

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        required={required}
        placeholder={placeholderInput}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
