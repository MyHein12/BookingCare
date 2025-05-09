import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./UserManage.scss";
import { emitter } from '../../utils/emitter';

class ModalUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            address: "",
            phoneNumber: "",
            gender: "1",
            roleId: "1",
        };
        this.listenToEmitter();
    }
    componentDidMount() {

    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                address: "",
                phoneNumber: "",
                gender: "1",
                roleId: "1"
            })
        })
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

    handleAddNewUser = () => {
        let isValid = this.checkValidInput();
        if (isValid) {
            this.props.handleCreateNewUser(this.state);
        }
    };

    checkValidInput = () => {
        let isValid = true;
        let arrInput = [
            "email",
            "password",
            "firstName",
            "lastName",
            "address",
            "phoneNumber",
            "gender",
            "roleId",
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
            >
                <ModalHeader
                    toggle={() => {
                        this.toggle();
                    }}
                >
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "email");
                                }}
                                value={this.state.email}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "password");
                                }}
                                value={this.state.password}
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
                    <div className="modal-user-body">
                        <div className="input-container">
                            <label htmlFor="phoneNumber">Phone number</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="123456789"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "phoneNumber");
                                }}
                                value={this.state.phoneNumber}
                            ></input>
                        </div>
                        <div className="input-container">
                            <label htmlFor="gender">Gender</label>
                            <select
                                className="form-control"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "gender");
                                }}
                                value={this.state.gender}
                            >
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div className="input-container">
                            <label htmlFor="roleId">Role</label>
                            <select
                                className="form-control"
                                onChange={(event) => {
                                    this.handleOnChangeInput(event, "roleId");
                                }}
                                value={this.state.roleId}
                            >
                                <option value="1">Admin</option>
                                <option value="2">Doctor</option>
                                <option value="3">Patient</option>
                            </select>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button
                        className="px-3"
                        color="success"
                        onClick={() => {
                            this.handleAddNewUser();
                        }}
                    >
                        Add New
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
