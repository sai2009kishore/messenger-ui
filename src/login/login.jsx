import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
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
                                    <label>Username</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        autoComplete="userName"
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
        this.props.login((response) => {
            console.log(response);
        });
    }
}

export default Login;
