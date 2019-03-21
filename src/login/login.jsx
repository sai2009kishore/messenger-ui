import React, { Component } from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
    componentDidMount() {
    }

    render() {
        return (
            <div style={{ paddingTop: '10%' }}>
                <center>
                    <div className="webflow-style-input">
                        <input
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
                        ></input>
                    </div>
                    <button
                        className="btn btn-white"
                        onClick={this.login}
                    >
                        LOGIN <span class="fa fa-arrow-right"></span>
                    </button>
                </center>
            </div>
        );
    }

    login = () => {
        this.props.handleError(null);
        this.props.login(
            {
                email: this.state.email,
                password: this.state.password,
            },
            (response) => {
                console.log(response);
            },
            (error) => {
                if (error.response && error.response.data) {
                    this.props.handleError(error.response.data);
                }
            }
        );
    }
}

export default Login;
