import React, { Component } from 'react';
import Login from './login/login';
import { serverStatus, login } from './actions/loginActions';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login serverStatus={serverStatus} login={login} />
      </div>
    );
  }
}

export default App;
