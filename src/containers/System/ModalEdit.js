import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./UserManage.scss";
import { emitter } from '../../utils/emitter';
import _ from 'lodash';
import { use } from "react";

class ModalEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: "",
            firstName: "",
            lastName: "",
            address: ""
        };
    }
    componentDidMount() {
        let user = this.props.currentUser;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent();
    };

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState,
        });
    };

    handleUpdateUser = () => {
        let isValid = this.checkValidInput();
        if (isValid) {
            this.props.handleEditUser(this.state);
        }
    };

    checkValidInput = () => {
        let isValid = true;
        let arrInput = [
            "email",
            "firstName",
            "lastName",
            "address",
        ];
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert("Missing parameter " + arrInput[i]);
                break;
            }
        }
        return isValid;
    };
    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => {
                    this.toggle();
                }}
                className={"modal-user-container"}
                centered
            >
                <ModalHeader
                    toggle={() => {
                        this.toggle();
                    }}
                >
                    Edit User
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container" style={{ width: "100%" }}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "address");
                                }}
                                value={this.state.email}
                                disabled
                            ></input>
                        </div>
                    </div>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter first name"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "firstName");
                                }}
                                value={this.state.firstName}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter last name"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "lastName");
                                }}
                                value={this.state.lastName}
                            ></input>
                        </div>
                    </div>
                    <div className="modal-user-body">
                        <div className="input-container" style={{ width: "100%" }}>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your address"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "address");
                                }}
                                value={this.state.address}
                            ></input>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="px-3"
                        color="success"
                        onClick={() => {
                            this.handleUpdateUser();
                        }}
                    >
                        Save changes
                    </Button>{" "}
                    <Button
                        className="px-3"
                        color="secondary"
                        onClick={() => {
                            this.toggle();
                        }}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
