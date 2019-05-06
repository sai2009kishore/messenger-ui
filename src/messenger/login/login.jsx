import React, { Component } from 'react';
import backgroundImage from './login-background.jpg';
import { Button } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const inputStyle = {
    padding: '5px',
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
        };
    }

    render() {
        return (
            <div className='full-size' style={{ paddingTop: '10%', backgroundImage: `url(${backgroundImage})` }}>
                <center>
                    <div style={{ width: "20%" }}>
                        <InputGroup>
                            <Input
                                autoFocus
                                autoComplete="email"
                                onChange={(e) => {
                                    this.setState({ email: e.target.value });
                                }}
                                placeholder="Email"
                                type="email"
                                value={this.state.email}
                            />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <Input
                                autoComplete="current-password"
                                className=""
                                onChange={(e) => {
                                    this.setState({ password: e.target.value });
                                }}
                                placeholder="Password"
                                style={inputStyle}
                                type={this.state.showPassword ? "text" : "password"}
                                value={this.state.password}
                                onKeyDown={this._handleKeyDown}
                            />
                            <InputGroupAddon addonType="prepend">
                                <Button
                                    onClick={() => {
                                        this.setState({ showPassword: !this.state.showPassword });
                                    }}
                                >
                                    <i className={this.state.showPassword ? "fa fa-eye-slash" : "fa fa-eye"}></i>
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <br />
                        <Button
                            color="success"
                            onClick={this.login}
                            size="md"
                        >
                            LOGIN <span className="fa fa-arrow-right"></span>
                        </Button>
                    </div>
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
