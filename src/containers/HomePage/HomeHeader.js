import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import {LANGUAGES} from '../../utils';
import {changeLanguageApp} from '../../store/actions';
import { lang } from 'moment';

class HomeHeader extends Component {
    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
    }

    render() {
        // lay tu mapStateToProps
        let language = this.props.language
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.specialty"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.search-doctor"/></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.health-facility"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.select-room"/></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.doctor"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.choose-doctor"/></div>
                            </div>

                            <div className='child-content'>
                                <div><b><FormattedMessage id="homeHeader.fee"/></b></div>
                                <div className='subs-title'><FormattedMessage id="homeHeader.check-health"/></div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeHeader.support"/>
                            </div>
                            <div className={language=== LANGUAGES.VI ? 'language-vi active' :'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language=== LANGUAGES.EN ? 'language-en active' :'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>

                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id="banner.title1"/></div>
                        <div className='title2'><FormattedMessage id="banner.title2"/></div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder="Tìm bệnh viện - phòng khám"></input>
                        </div>
                    </div>

                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child i1'></div>
                                <div className='text-child'><FormattedMessage id="banner.child1"/></div>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child i2'></div>
                                <div className='text-child'><FormattedMessage id="banner.child2"/></div>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child i3'></div>
                                <div className='text-child'><FormattedMessage id="banner.child3"/></div>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child i4'></div>
                                <div className='text-child'><FormattedMessage id="banner.child4"/></div>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child i5'></div>
                                <div className='text-child'><FormattedMessage id="banner.child5"/></div>
                            </div>
                        </div>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon-child i6'></div>
                                <div className='text-child'><FormattedMessage id="banner.child6"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
