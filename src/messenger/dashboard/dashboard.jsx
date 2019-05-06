import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';
import axios from '../../actions/axios';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        axios.get();
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Messenger</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <i className="fa fa-user"></i>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Settings
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem
                                        onClick={this.props.userLogout}
                                    >
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Dashboard;