import React, { Component } from 'react';
import Login from './messenger/login/login';
import Dashboard from './messenger/dashboard/dashboard';
import { userLogin } from './actions/loginActions';
import { getJwtToken, setJwtToken, clearJwtToken, decodeJsx } from './utils/utilities';
import { connect } from "react-redux";
import './styles/styles.css';
import './styles/snackbar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='full-size'>
        {getJwtToken() ?
          <Dashboard {...this.props} userLogout={this.userLogout} />
          : <Login handleUserLogin={this.handleUserLogin} />}
        <div
          className={this.state.errorMessage ? 'show' : ''}
          id='snackbar'
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
      // this.setState({
      //   jwtToken: token,
      //   userData: decodedData.data,
      // });
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

  handleUserLogin = (credentials) => {
    this.handleError(null);
    this.props.userLogin(
      credentials,
      (response) => {
        if (response.token) {
          let token = response.token;
          this.handleToken(token);
          setJwtToken(token);
        }
      },
      (error) => {
        if (error.response && error.response.data) {
          this.handleError(error.response.data);
        }
      });
  }

  userLogout = () => {
    this.setState({
      jwtToken: null,
    });
    clearJwtToken();
  }
}

const mapStateToProps = state => {
  return {
    jwtToken: state.jwtToken,
    userData: state.userData,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    userLogin: (credentials, callback, errorCallback) => dispatch(userLogin(credentials))
      .then(res => {
        callback(res.payload.data);
      })
      .catch(error => {
        errorCallback(error);
      })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
