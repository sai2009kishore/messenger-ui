import React, { Component } from 'react';

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
            <div>
                <form>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        autoComplete="email"
                                        value={this.state.email}
                                        onChange={(e) => {
                                            this.setState({ email: e.target.value });
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password</label>
                                </td>
                                <td>
                                    <input
                                        type="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={(e) => {
                                            this.setState({ password: e.target.value });
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" align="center">
                                    <input
                                        type="button"
                                        onClick={this.login}
                                        value={"Login"}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
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
