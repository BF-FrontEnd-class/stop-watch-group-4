import {data, dom} from './data.js';
import createTimeComponent from './components/time.js';
import timeGenerator from './utils/timeGenerator.js';

const startHandler = () => {
if (data.watchInterval !== null){
  data.watchInterval = clearInterval(data.watchInterval);
}

data.watchInterval = setInterval(()=>{
  const updateTime = timeGenerator();
  const timeComponent = createTimeComponent(updateTime);

  dom.time = timeComponent;

}, 10);
};
const resetHandler = () => {
  if (data.watchInterval){
    data.watchInterval = clearInterval(data.watchInterval);
    data.watchInterval = null;
    
  }
  data.minutes = 0;
  data.seconds = 0;
  data.milliseconds = 0;
  const resetTime = createTimeComponent(data);
  dom.time = resetTime;
  
};
const stopHandler = () => {
  if(data.watchInterval)
  {
      clearInterval(data.watchInterval);
      data.watchInterval = null;
  }
};

dom.startButton.addEventListener('click', startHandler);
dom.resetButton.addEventListener('click', resetHandler);
dom.stopButton.addEventListener('click', stopHandler);