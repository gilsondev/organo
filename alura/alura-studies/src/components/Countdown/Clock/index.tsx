import React from "react";
import style from "./style.module.scss";
import { secondsToMinutesAndSecondsDigits } from "../../../common/utils/time";

interface ClockProps {
  time: number | undefined;
}

type ClockNumber = {
  digitOne: string;
  digitTwo: string;
};

const Clock = ({ time = 0 }: ClockProps) => {
  const [minutes, setMinutes] = React.useState<ClockNumber>({
    digitOne: "0",
    digitTwo: "0",
  });
  const [seconds, setSeconds] = React.useState<ClockNumber>({
    digitOne: "0",
    digitTwo: "0",
  });

  const clearTime = () => {
    setMinutes({ digitOne: "0", digitTwo: "0" });
    setSeconds({ digitOne: "0", digitTwo: "0" });
  };

  React.useEffect(() => {
    if (time === 0) {
      clearTime();
    }

    if (time) {
      const [minutes, seconds] = secondsToMinutesAndSecondsDigits(time);

      setMinutes({ digitOne: minutes[0], digitTwo: minutes[1] });
      setSeconds({ digitOne: seconds[0], digitTwo: seconds[1] });
    }
  }, [time]);

  return (
    <>
      <span className={style.relogioNumero}>{minutes.digitOne}</span>
      <span className={style.relogioNumero}>{minutes.digitTwo}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{seconds.digitOne}</span>
      <span className={style.relogioNumero}>{seconds.digitTwo}</span>
    </>
  );
};

export default Clock;
