import React from "react";

import "./style.css";

const SubmitForm = ({ label, handleSubmit }) => {
  return (
    <input
      type="submit"
      value={label}
      onClick={handleSubmit}
      id="submitButton"
    />
  );
};

export default SubmitForm;
