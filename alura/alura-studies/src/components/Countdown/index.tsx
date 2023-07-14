import React from "react";
import Button from "../Button";
import Clock from "./Clock";

import style from "./style.module.scss";
import { GlobalContext } from "../../GlobalContext";
import { timeToSeconds } from "../../common/utils/time";

const Countdown = () => {
  const global = React.useContext(GlobalContext);
  const { selectedTask } = global;

  const [time, setTime] = React.useState<number>();
  const [started, setStarted] = React.useState<boolean>(false);
  const timeoutRef = React.useRef<any>();

  const startCountdown = (count: number = 0) => {
    setStarted(true);

    timeoutRef.current = setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        startCountdown(count - 1);
      }

      if (count <= 1) {
        setStarted(false);
        global.completeTask();
      }
    }, 1000);
  };

  const stopCountdown = () => {
    setStarted(false);
    clearTimeout(timeoutRef.current);
  };

  React.useEffect(() => {
    if (selectedTask) {
      stopCountdown();
      setTime(timeToSeconds(selectedTask.time));
    } else {
      setTime(0);
    }
  }, [selectedTask]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <div className={style.relogioOptions}>
        <Button disabled={started} onClick={() => startCountdown(time)}>
          Começar
        </Button>
        <Button disabled={!started} onClick={() => stopCountdown()}>
          Pausar
        </Button>
      </div>
    </div>
  );
};

export default Countdown;
