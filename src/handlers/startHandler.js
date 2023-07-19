import { data, dom } from "../data.js";

import timeGenerator from "../utils/timeGenerator.js";
import createTimeComponent from "../components/time.js";

const startHandler = () => {
  if (data.watchInterval !== null) {
    data.watchInterval = clearInterval(data.watchInterval);
  }

  data.watchInterval = setInterval(() => {
    const updateTime = timeGenerator();
    const timeComponent = createTimeComponent(updateTime);

    dom.time = timeComponent;
  }, 10);
};

export default startHandler;
