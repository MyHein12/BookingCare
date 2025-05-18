import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils';
import * as actions from '../../../store/actions';
import './UserRedux.scss';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
            isOpen: false
        }
    }
    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                imageUrl: objectUrl
            })
        }
    }

    openPreviewImage = () => {
        if(!this.state.imageUrl) return;
        this.setState({
            isOpen: true
        })
    }
    render() {
        let genders = this.props.genderRedux;
        let positions = this.props.positionRedux;
        let roles = this.props.roleRedux;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        return (
            <div className='user-redux-container'>
                <div className="title" >User Redux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='col-12 py-3'><FormattedMessage id="manage-user.add" /></div>
                        <div className='col-12'>{isLoadingGender === true ? 'Loading genders' : ''}</div>
                        <div className='row'>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='password' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input className='form-control' type='text' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input className='form-control' type='phone' />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className='form-control'>
                                    {genders && genders.length > 0 && genders.map((item, index) => {
                                        return (<option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>)
                                    })}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className='form-control'>
                                    {positions && positions.length > 0 && positions.map((item, index) => {
                                        return (<option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>)
                                    })}
                                </select>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className='form-control'>
                                    {roles && roles.length > 0 && roles.map((item, index) => {
                                        return (<option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>)
                                    })}
                                </select>
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <div className='previewImg-container'>
                                    <input id="previewImg" className='form-control' type='file' hidden
                                        onChange={(event) => {
                                            this.handleOnchangeImage(event)
                                        }}
                                    />
                                    <label className='label-upload text-center' htmlFor='previewImg'><FormattedMessage id="manage-user.upload" /> <i className='fas fa-upload'></i></label>
                                    <div className='preview-image'
                                        style={{ backgroundImage: `url(${this.state.imageUrl})` }}
                                        onClick={() => this.openPreviewImage()}></div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 mt-3'>
                            <button className='btn btn-success'><FormattedMessage id="manage-user.save" /></button>
                        </div>
                    </div>
                    <div className='container'></div>
                    <div className='container'></div>
                </div>

                {this.state.isOpen === true &&
                    <Lightbox
                        mainSrc={this.state.imageUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        isLoadingGender: state.admin.isLoadingGender,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
