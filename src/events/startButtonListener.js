import startHandler from "../handlers/startHandler.js";
import { dom } from "../data.js";

const startButtonListener = dom.startButton.addEventListener(
  "click",
  startHandler
);

export default startButtonListener;
