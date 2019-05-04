import React, { Component } from 'react';
import backgroundImage from './login-background.jpg';
import { Button } from 'reactstrap';

const inputStyle = {
    padding: '5px',
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        return (
            <div className='full-size' style={{ paddingTop: '10%', backgroundImage: `url(${backgroundImage})` }}>
                <center>
                    <div className="webflow-style-input">
                        <input
                            autoFocus={true}
                            autoComplete="email"
                            className=""
                            onChange={(e) => {
                                this.setState({ email: e.target.value });
                            }}
                            placeholder="Email"
                            style={inputStyle}
                            type="email"
                            value={this.state.email}
                        ></input>
                    </div>
                    <div className="webflow-style-input">
                        <input
                            autoComplete="current-password"
                            className=""
                            onChange={(e) => {
                                this.setState({ password: e.target.value });
                            }}
                            placeholder="Password"
                            style={inputStyle}
                            type="password"
                            value={this.state.password}
                            onKeyDown={this._handleKeyDown}
                        ></input>
                    </div>
                    <Button
                        className="btn btn-white"
                        onClick={this.login}
                        size="lg"
                    >
                        LOGIN <span className="fa fa-arrow-right"></span>
                    </Button>
                </center>
            </div>
        );
    }

    login = () => {
        let credentials = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.handleUserLogin(credentials);
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.login();
        }
    }
}

export default Login;
