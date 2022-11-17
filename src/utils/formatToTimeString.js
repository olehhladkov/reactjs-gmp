export const formatToTimeString = runtime => {
  const MINS_IN_HOUR = 60;
  const HOUR_SIGN = 'h';
  const MINUTES_SIGN = 'min';

  if (runtime < MINS_IN_HOUR) {
    return `${runtime}${MINUTES_SIGN}`;
  }

  const hoursInRuntime = Math.trunc(runtime / MINS_IN_HOUR);
  const minutesWithoutHours = runtime - hoursInRuntime * MINS_IN_HOUR;

  if (minutesWithoutHours > 0) {
    return `${hoursInRuntime}${HOUR_SIGN} ${minutesWithoutHours}${MINUTES_SIGN}`;
  }

  return `${hoursInRuntime}${HOUR_SIGN}`;
};
