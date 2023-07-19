import resetHandler from "../handlers/resetHandler.js";
import { dom } from "../data.js";

const resetButtonListener = dom.resetButton.addEventListener(
  "click",
  resetHandler
);

export default resetButtonListener;
