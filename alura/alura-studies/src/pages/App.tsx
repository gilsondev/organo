import React from "react";
import Form from "../components/Form";
import List from "../components/List";

import style from "./style.module.scss";
import Countdown from "../components/Countdown";
import { GlobalContext } from "../GlobalContext";

const App = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div className={style.AppStyle}>
      <Form />
      <List data={global.tasks} />
      <Countdown />
    </div>
  );
};

export default App;
