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
    if (m < 10) {m = "0"+m;}
    if (s < 10) {s = "0"+s;}
    let t = m+":"+s;
    return t;
  }
  const step = () => {};
  const startTimer = () => {
    setTimer(setInterval(step, 1000));
    setTime(1200);
    setStatus('work');
  };  
  
    return (
      <div>
        <h1>Protect your eyes</h1>
        {status === 'off' && <div>
          <p>According to optometrists in order to save your eyes, you should follow the 20/20/20. It means you should to rest your eyes every 20 minutes for 20 seconds by looking more than 20 feet away.</p>
          <p>This app will help you track your time and inform you when it's time to rest.</p>
        </div>}
        {status === 'work' && <img src="./images/work.png" />}
        {status === 'rest' && <img src="./images/rest.png" />}
        {status !== 'off' && <div className="timer">
          {formatTime(time)}
        </div>}
        {status === 'off' && <button onClick={startTimer} className="btn">Start</button>}
        {status !== 'off' && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
};

render(<App />, document.querySelector('#app'));
