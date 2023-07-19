import { data, dom } from '../data.js';

const createTimeComponent = () => {
    if (data.minutes !== data.oldMinutes) {
        dom.minutes.innerText =
            data.minutes < 10 ? '0' + data.minutes : data.minutes;
    }

    if (data.seconds !== data.oldSeconds) {
        dom.seconds.innerText =
            data.seconds < 10 ? '0' + data.seconds : data.seconds;
    }

    dom.milliseconds.innerText =
        data.milliseconds < 10
            ? '00' + data.milliseconds
            : data.milliseconds < 100
            ? '0' + data.milliseconds
            : data.milliseconds;

    data.oldMinutes = data.minutes;
    data.oldSeconds = data.seconds;
};

export default createTimeComponent;
