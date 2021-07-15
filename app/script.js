import React, {useState} from 'react';
import { render } from 'react-dom';


const App = () => {
  const [status, setStatus] = useState('off');
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  
  const formatTime = (seconds) => {
    //let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.round(seconds % 60);
    //if (h < 10) {h = "0"+h;}
    if (m < 10) {m = "0"+ m;}
    if (s < 10) {s = "0"+ s;}
    let t = m+":"+s;
    return t;
  }
  const step = () => {
    if(time === 0) {
      if(status === 'work') {
        playBell();
        setStatus('rest');
        setTime(20);
      } else if(status === 'rest') {
        playBell();
        setStatus('work');
        setTime(1200);
      }
    } else {
      setTime(time - 1);
    }
  }
  const startTimer = () => {
    setStatus('work');
    setTime(20);
    setTimer(setInterval(step, 1000))
  } 
  const stopTimer = () => {
    clearInterval(timer);
    setTime(0);
    setStatus('off')
  }
  const closeApp = () => {
    window.close()
  }
  const playBell = () =>  {
    let audio = new Audio('./sounds/bell.wav');
    audio.play();
  }
  return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <div>
          <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
          <p>This app will help you track your time and inform you when it's time to rest.</p>
        </div>}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">
          {formatTime(time)}
        </div>}
        {(status === 'off') && <button onClick={startTimer} className="btn">Start</button>}
        {(status !== 'off') && <button className="btn" onClick={stopTimer}>Stop</button>}
        <button className="btn btn-close" onClick={closeApp}>X</button>
      </div>
    )
};

render(<App />, document.querySelector('#app'));
