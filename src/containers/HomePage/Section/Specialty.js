import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

import specialtyImg1 from '../../../assets/specialty/co-xuong-khop.png'
import specialtyImg2 from '../../../assets/specialty/y-hoc-co-truyen.png'
import specialtyImg3 from '../../../assets/specialty/tai-mui-hong.png'
import specialtyImg4 from '../../../assets/specialty/than-kinh.png'
import specialtyImg5 from '../../../assets/specialty/tieu-hoa.png'
import specialtyImg6 from '../../../assets/specialty/tim-mach.png'

class Specialty extends Component {

    render() {

        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <img src={specialtyImg1} alt='co-xuong-khop'></img>
                                <div className='text-center'>Cơ xương khớp</div>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg2} alt='y-hoc-co-truyen'></img>
                                <div className='text-center'>Y học cổ truyển</div>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg3} alt='tai-mui-hong'></img>
                                <div className='text-center'>Tai mũi họng</div>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg4} alt='than-kinh'></img>
                                <div className='text-center'>Thần kinh</div>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg5} alt='tieu-hoa'></img>
                                <div className='text-center'>Tiêu hóa</div>
                            </div>
                            <div className='img-customize'>
                                <img src={specialtyImg6} alt='tim-mach'></img>
                                <div className='text-center'>Tim mạch</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
