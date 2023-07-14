import React from "react";
import { Data, GlobalContextValue, TaskItem } from "./types";

type GlobalStorageProps = {
  children: React.ReactNode;
};

const initialContextValue: GlobalContextValue = {
  tasks: [],
  setTasks: () => {},
  selectedTask: null,
  setSelectedTask: () => {},
  clearSelectedTask: () => {},
  completeTask: () => {},
  data: {
    id: "",
    task: "",
    time: "",
    selected: false,
    completed: false,
  },
  setData: () => {},
};

export const GlobalContext: React.Context<GlobalContextValue> =
  React.createContext(initialContextValue);

export const GlobalStorage = (props: GlobalStorageProps) => {
  const initialData: Data = [
    {
      id: "xHOnZtkhHD4k5QJEDpufQ",
      task: "React",
      time: "01:00:00",
      selected: false,
      completed: false,
    },
    {
      id: "lv_CnVZ0pC0LmLtihXqgL",
      task: "Javascript",
      time: "01:00:00",
      selected: false,
      completed: false,
    },
    {
      id: "vps8ki2dTeX_K9lqZrYKm",
      task: "Typescript",
      time: "01:00:00",
      selected: false,
      completed: false,
    },
  ];

  const { children } = props;
  const [tasks, setTasks] = React.useState<Data>(initialData);
  const [selectedTask, setSelectedTask] = React.useState<TaskItem | null>(null);
  const [data, setData] = React.useState<TaskItem>({
    id: "",
    task: "",
    time: "",
    selected: false,
    completed: false,
  });

  const clearSelectedTask = () => {
    setSelectedTask(null);
  };

  const completeTask = () => {
    if (selectedTask) {
      setTasks(
        tasks.map((item) => {
          if (item.id === selectedTask?.id) {
            return {
              ...selectedTask,
              completed: true,
            };
          }
          return item;
        })
      );

      setSelectedTask(null);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        clearSelectedTask,
        completeTask,
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
