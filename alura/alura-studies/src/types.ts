export type TaskItem = {
  id: string;
  task: string;
  time: string;
  selected: boolean;
  completed: boolean;
};
export type Data = TaskItem[];

export type GlobalContextValue = {
  tasks: Data;
  setTasks: React.Dispatch<React.SetStateAction<Data>>;
  selectedTask: TaskItem | null;
  setSelectedTask: React.Dispatch<React.SetStateAction<TaskItem | null>>;
  clearSelectedTask: () => void;
  completeTask: () => void;
  data: TaskItem;
  setData: React.Dispatch<React.SetStateAction<TaskItem>>;
};
