import React, { Component } from 'react';
import Login from './login/login';
import Dashboard from './messenger/dashboard/dashboard';
import { login } from './actions/loginActions';
import { getJwtToken, setJwtToken, clearJwtToken, decodeJsx } from './utils/utilities';
import './styles/styles.css';
import './styles/snackbar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      userData: null,
      jwtToken: null,
    };
  }

  componentWillMount() {
    let token = getJwtToken();
    if (token !== null && token !== undefined && token.length > 0) {
      this.handleToken(token);
    }
  }

  render() {
    return (
      <div className='full-size'>
        {this.state.jwtToken ?
          <Dashboard userLogout={this.userLogout} />
          : <Login userLogin={this.userLogin} />}
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

  handleToken = (token) => {
    let decodedData = decodeJsx(token);
    if (decodedData.data) {
      this.setState({
        userData: decodedData.data,
        jwtToken: token,
      });
    } else {
      this.handleError({ errorMessage: 'Error validating login credentials. Logging out.' });
      this.userLogout();
    }
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

  userLogin = (credentials) => {
    this.handleError(null);
    login(
      credentials,
      (response) => {
        if (response.data && response.data.token) {
          let token = response.data.token;
          this.handleToken(token);
          setJwtToken(token);
        }
      },
      (error) => {
        if (error.response && error.response.data) {
          this.props.handleError(error.response.data);
        }
      }
    );
  }

  userLogout = () => {
    this.setState({
      jwtToken: null,
    });
    clearJwtToken();
  }
}

export default App;
