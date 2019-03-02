import React, { Component } from 'react';
import Login from './login/login';
import { serverStatus, login } from './actions/loginActions';
import './styles/App.css';
import './styles/snackbar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  render() {
    return (
      <div className='App'>
        <Login login={login} handleError={this.handleError} />
        <div
          id='snackbar'
          className={this.state.errorMessage ? 'show' : ''}
          onClick={() => {
            this.setState({ errorMessage: null });
          }}>
          {this.state.errorMessage}
        </div>
      </div>
    );
  }

  handleError = (error) => {
    if (error) {
      this.setState({ errorMessage: error }, () => setTimeout(() => {
        this.setState({ errorMessage: null });
      }, 10000));
    } else {
      this.setState({ errorMessage: null });
    }
  }
}

export default App;
