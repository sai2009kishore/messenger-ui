import React, { Component } from 'react';

class Dashboard extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return <div>
            <button
                className="btn btn-black"
                onClick={this.props.userLogout}
            >
                LOGOUT <span className="fa fa-arrow-right"></span>
            </button>
        </div>;
    }
}

export default Dashboard;