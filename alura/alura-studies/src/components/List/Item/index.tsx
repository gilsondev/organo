import React from "react";
import { GlobalContext } from "../../../GlobalContext";
import style from "./style.module.scss";
import { TaskItem } from "../../../types";
import classNames from "classnames";

const Item = (props: TaskItem) => {
  const global = React.useContext(GlobalContext);
  const { id, task, time, selected, completed } = props;

  const selectItem = () => {
    const taskItem = {
      id,
      task,
      time,
      selected: true,
      completed,
    };

    if (taskItem.completed) {
      return;
    }

    global.setTasks(
      global.tasks.map((task) => {
        if (task.selected) task.selected = false;
        if (task.id === taskItem.id) task.selected = true;
        return task;
      })
    );

    global.setSelectedTask(taskItem);
  };

  const editItem = () => {
    global.clearSelectedTask();

    global.setData({
      id,
      task,
      time,
      selected: false,
      completed,
    });
  };

  const itemClass = classNames(style.item, {
    [style.itemSelecionado]: selected,
    [style.itemCompletado]: completed,
  });

  return (
    <li className={itemClass}>
      <div className={style.options}>
        <button onClick={editItem}>Editar</button>
      </div>
      <h3 onClick={selectItem}>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Item;
