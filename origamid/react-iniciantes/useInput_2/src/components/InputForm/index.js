import React from "react";

import "./style.css";

const InputForm = ({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  ...props
}) => {
  return (
    <div className="input-container">
      <label htmlFor="{id}">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={({ target }) => onChange(target)}
        {...props}
      />
    </div>
  );
};

export default InputForm;
