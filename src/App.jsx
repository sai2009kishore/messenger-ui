import React, { Component } from 'react';
import Login from './messenger/login/login';
import Dashboard from './messenger/dashboard/dashboard';
import { userLogin } from './actions/loginActions';
import { getJwtToken, setJwtToken, clearJwtToken } from './utils/utilities';
import { connect } from "react-redux";
import './styles/styles.css';
import './styles/snackbar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    if (getJwtToken()) {
      this.setLogin(true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.jwtToken && nextProps.jwtToken) {
      this.setLogin(true);
    }
  }

  render() {
    return (
      <div className='full-size'>
        {this.state.isLoggedIn ?
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
          setJwtToken(response.token);
          this.setLogin(true);
        }
      },
      (error) => {
        if (error.response && error.response.data) {
          this.handleError(error.response.data);
        }
      });
  }

  setLogin = (isLoggedIn) => {
    this.setState({ isLoggedIn: isLoggedIn });
  }
  userLogout = () => {
    clearJwtToken();
    this.setLogin(false);
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
