import React from "react";

import style from "./style.module.scss";

export interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  [key: string]: any;
}

const FormInput = (props: FormInputProps) => {
  const { id, label } = props;

  return (
    <div className={style.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input {...props} />
    </div>
  );
};

export default FormInput;
