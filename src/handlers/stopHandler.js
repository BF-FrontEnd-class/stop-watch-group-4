import { data } from "../data.js";

const stopHandler = () => {
  if (data.watchInterval) {
    clearInterval(data.watchInterval);
    data.watchInterval = null;
  }
};

export default stopHandler;
