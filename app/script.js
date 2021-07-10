import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'off',
      time: 0,
      timer: null,
    }
    this.formatTime = this.formatTime.bind(this);
    this.step = this.step.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.closeApp = this.closeApp.bind(this);
  }
  formatTime(seconds) {
    //let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.round(seconds % 60);
    //if (h < 10) {h = "0"+h;}
    if (m < 10) {m = "0"+ m;}
    if (s < 10) {s = "0"+ s;}
    let t = m+":"+s;
    return t;
  }
  step() {
    if(this.state.time === 0) {
      if(this.state.status === 'work') {
        this.setState({
          status: 'rest',
          time: 20,
        })
      } else if(this.state.status === 'rest') {
        this.setState({
          status: 'work',
          time: 1200,
        })
      }
    } else {
      this.setState({
        time: this.state.time-1
      })
    }
  }
  startTimer() {
    this.setState({
      status: 'work',
      time: 1200,
      timer: setInterval(this.step, 1000)
    })
  } 
  stopTimer() {
    clearInterval(this.state.timer);
    this.setState({
      time: 0,
      status: 'off'
    })
  }
  closeApp() {
    window.close()
  }
  render() {  
    const { time, status } = this.state;
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
          {this.formatTime(time)}
        </div>}
        {(status === 'off') && <button onClick={this.startTimer} className="btn">Start</button>}
        {(status !== 'off') && <button className="btn" onClick={this.stopTimer}>Stop</button>}
        <button className="btn btn-close" onClick={this.closeApp}>X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
