import { data, dom } from "../data.js";
import createTimeComponent from "../components/time.js";

const resetHandler = () => {
  if (data.watchInterval) {
    data.watchInterval = clearInterval(data.watchInterval);
    data.watchInterval = null;
  }
  data.minutes = 0;
  data.seconds = 0;
  data.milliseconds = 0;
  const resetTime = createTimeComponent(data);
  dom.time = resetTime;
};

export default resetHandler;
