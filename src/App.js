import React from 'react';
import './App.css';
import Time from './Components/Time/index.js';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{
        marginTop: 96,
      }}>
         Click to update current time: <Time />
      </div>
    );
    }
}

export default App;
