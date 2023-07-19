export const data = {
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    oldMinutes: 0,
    oldSeconds: 0,
    watchInterval: null,
};

export const dom = {
    startButton: document.getElementById('start'),
    stopButton: document.getElementById('stop'),
    resetButton: document.getElementById('reset'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
    milliseconds: document.querySelector('.milliseconds'),
};
