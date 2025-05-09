import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers, createNewUser, deleteUser, editUser } from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEdit from "./ModalEdit";
import { emitter } from '../../utils/emitter'
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
            isOpenModalEdit: false,
            userEdit: {}
        };
    }

    //ham gan gia tri (set sate)
    async componentDidMount() {
        this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers("ALL");
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users,
            });
        }
    }

    handleAddNewUser = () => {
        this.setState({
            isOpenModal: true,
        });
    };

    toggleUserModal = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal,
        });
    };

    toggleEditModal = () => {
        this.setState({
            isOpenModalEdit: !this.state.isOpenModalEdit,
        });
    }

    handleCreateNewUser = async (data) => {
        try {
            let response = await createNewUser(data);
            if (response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModal: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (e) {
            console.log(e);
        }
    }

    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUser(user.id);
            (res && res.errCode === 0) ? await this.getAllUsersFromReact() : alert(res.errMessage)
        } catch (e) {
            console.log(e);
        }
    }

    handleEditButton = async (user) => {
        this.setState({
            isOpenModalEdit: true,
            userEdit: user
        })
    }

    handleEditUser = async (user) => {
        try {
            let res = await editUser(user);
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEdit: false
                })
                await this.getAllUsersFromReact()
            } else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <ModalUser
                    isOpen={this.state.isOpenModal}
                    toggleFromParent={this.toggleUserModal}
                    handleCreateNewUser={this.handleCreateNewUser}
                />

                {
                    this.state.isOpenModalEdit &&
                    <ModalEdit
                        isOpen={this.state.isOpenModalEdit}
                        toggleFromParent={this.toggleEditModal}
                        currentUser={this.state.userEdit}
                        handleEditUser={this.handleEditUser}
                    />
                }

                <div className="title text-center">Manager Users</div>
                <div className="mx-1">
                    <button
                        className="btn btn-success mx-3 px-3"
                        onClick={() => this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus p-1"></i>
                        New User
                    </button>
                </div>
                <div className="user-table mt-3 mx-3">
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers &&
                                arrUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.email}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button className="btn-edit" onClick={() => this.handleEditButton(item)}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>
                                                <button className="btn-delete" onClick={() => this.handleDeleteUser(item)}>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
