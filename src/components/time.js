import { data } from "../data.js";
import { dom } from "../data.js";

const createTimeComponent = () => {
  // const time = document.createElement("div");
  // time.className = "time";

  // const minutes = document.createElement("span");
  // minutes.className = "minutes";
  if (data.minutes < 10) {
    dom.minutes.innerText = "0" + data.minutes + " : ";
  } else if (data.minutes >= 10) {
    dom.minutes.innerText = data.minutes + ":";
  }

  // const seconds = document.createElement("span");
  // seconds.className = "seconds";
  if (data.seconds < 10) {
    dom.seconds.innerText = "0" + data.seconds + " : ";
  } else if (data.seconds >= 10) {
    dom.seconds.innerText = data.seconds + ":";
  }

  // const milliseconds = document.createElement("span");
  // milliseconds.className = "milliseconds";
  if (data.milliseconds < 10) {
    dom.milliseconds.innerText = "00" + data.milliseconds;
  } else if (data.milliseconds < 100) {
    dom.milliseconds.innerText = "0" + data.milliseconds;
  } else {
    dom.milliseconds.innerText = data.milliseconds;
  }

  dom.time.append(dom.minutes, dom.seconds, dom.milliseconds);

  return dom.time;
};

export default createTimeComponent;