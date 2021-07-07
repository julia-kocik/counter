import React, {useState} from 'react';
import { render } from 'react-dom';

const App = () => {
  const [status, setStatus] = useState('off');
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const formatTime = (time) => {
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    let seconds = seconds - (hours * 3600) - (minutes * 60);

    if (minutes != 0 || time !== "") {
      minutes = (minutes < 10 && time !== "") ? "0"+minutes : String(minutes);
      time += minutes+":";
    }
    if (time === "") {
      time = seconds+"s";
    }
    else {
      time += (seconds < 10) ? "0"+seconds : String(seconds);
    }
    return time;
}
  }
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
        <button className="btn">Start</button>
        {status === 'off' && <button className="btn">Stop</button>}
        {status !== 'off' && <button className="btn btn-close">X</button>}
      </div>
    )
};

render(<App />, document.querySelector('#app'));
