import style from "./style.module.scss";
import Item from "./Item";
import { TaskItem } from "../../types";

const List = (props: { data: TaskItem[] | undefined }) => {
  const { data } = props;

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {data?.map((task) => (
          <Item key={task.id} {...task} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
