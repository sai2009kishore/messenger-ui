import React, { Component } from 'react';
import Login from './login/login';
import { login } from './actions/loginActions';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login login={login} />
      </div>
    );
  }
}

export default App;
