export const timeToSeconds = (time: string): number => {
  const [hours, minutes, seconds] = time.split(":");
  return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
};

export const secondsToMinutesAndSecondsDigits = (
  time: number
): [string[], string[]] => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesStr = String(minutes).padStart(2, "0");
  const secondsStr = String(seconds).padStart(2, "0");

  return [minutesStr.split(""), secondsStr.split("")];
};
