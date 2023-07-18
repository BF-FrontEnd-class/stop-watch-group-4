import { data } from "../data.js";

const createTimeComponent = () => {
  const time = document.createElement("div");
  time.className = "time";

  const minutes = document.createElement("span");
  minutes.className = "minutes";
  if (data.minutes < 10) {
    minutes.innerText = "0" + data.minutes + " : ";
  } else if (data.minutes >= 10) {
    minutes.innerText = data.minutes + ":";
  }

  const seconds = document.createElement("span");
  seconds.className = "seconds";
  if (data.seconds < 10) {
    seconds.innerText = "0" + data.seconds + " : ";
  } else if (data.seconds >= 10) {
    seconds.innerText = data.seconds + ":";
  }

  const milliseconds = document.createElement("span");
  milliseconds.className = "milliseconds";
  if (data.milliseconds < 10) {
    milliseconds.innerText = "00" + data.milliseconds;
  } else if (data.milliseconds < 100) {
    milliseconds.innerText = "0" + data.milliseconds;
  } else {
    milliseconds.innerText = data.milliseconds;
  }

  time.append(minutes, seconds, milliseconds);

  return time;
};
