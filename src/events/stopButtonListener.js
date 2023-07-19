import stopHandler from "../handlers/stopHandler.js";
import { dom } from "../data.js";

const stopButtonListener = dom.stopButton.addEventListener(
  "click",
  stopHandler
);

export default stopButtonListener;
