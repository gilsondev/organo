import React, { ChangeEvent, FormEvent } from "react";
import Button from "../Button";
import FormInput from "../FormInput";

import style from "./style.module.scss";
import { GlobalContext } from "../../GlobalContext";
import { nanoid } from "nanoid";
import { GlobalContextValue } from "../../types";

const Form: React.FC = () => {
  const global = React.useContext(GlobalContext);

  const addTask = () => {
    const taskId = nanoid();
    const task = global.data.task;
    const time = global.data.time;

    const newTask = {
      id: taskId,
      task,
      time,
      selected: false,
      completed: false,
    };
    global.setTasks([...global.tasks, newTask]);
  };

  const updateTask = () => {
    global.setTasks(
      global.tasks.map((task) => {
        if (task.id === global.data.id) {
          return {
            ...task,
            task: global.data.task,
            time: global.data.time,
            selected: false,
          };
        }

        return task;
      })
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const taskExists = global.tasks.find((task) => task.id === global.data.id);

    taskExists ? updateTask() : addTask();
    clearForm(global);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    global.setData({ ...global.data, [id]: value });
  };

  const clearForm = (global: GlobalContextValue) => {
    global.setData({
      id: "",
      task: "",
      time: "",
      selected: false,
      completed: false,
    });
  };

  return (
    <form className={style.novaTarefa} onSubmit={handleSubmit}>
      <FormInput
        id="task"
        label="Task"
        value={global.data.task}
        onChange={handleChange}
        required
      />
      <FormInput
        id="time"
        label="Tempo"
        type="time"
        step="1"
        min="00:00:00"
        max="01:30:00"
        value={global.data.time}
        onChange={handleChange}
        required
      />
      <Button type="submit">
        {global.data.id ? "Atualizar" : "Adicionar"}
      </Button>
    </form>
  );
};

export default Form;
