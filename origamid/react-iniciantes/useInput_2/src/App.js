import React from "react";
import InputForm from "./components/InputForm";
import SubmitForm from "./components/SubmitForm";

import "./style.css";

const App = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    zipcode: "",
    street: "",
    number: "",
    district: "",
    city: "",
  });

  const sendData = async (data) => {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/usuario",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    console.log(response);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendData(form);
  };

  const handleChange = ({ id, value }) => {
    setForm({ ...form, [id]: value });
  };

  return (
    <>
      <h1>Cadastro de Usuário</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <InputForm
              id="name"
              label="Nome"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <InputForm
              id="email"
              label="E-mail"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputForm
              id="password"
              label="Senha"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <InputForm
              id="zipcode"
              label="CEP"
              name="zipcode"
              value={form.zipcode}
              onChange={handleChange}
            />
            <InputForm
              id="street"
              label="Rua"
              name="street"
              value={form.street}
              onChange={handleChange}
            />
            <InputForm
              id="number"
              label="Número"
              name="number"
              type="number"
              value={form.number}
              onChange={handleChange}
            />
            <InputForm
              id="district"
              label="Bairro"
              name="district"
              value={form.district}
              onChange={handleChange}
            />
            <InputForm
              id="city"
              label="Cidade"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
            <InputForm
              id="state"
              label="Estado"
              name="state"
              value={form.state}
              maxlength="2"
              onChange={handleChange}
            />
          </div>
          <SubmitForm label="Cadastrar" handleSubmit={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default App;
