import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


import Img1 from '../../../assets/outstanding_doctor/doctor.jpg'

class OutStandingDoctor extends Component {

    render() {
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Bác sĩ nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <div className='border-customize'>
                                    <div className='outer-bg'>
                                        <img src={Img1} alt='Quốc tế Phổi'></img>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ Nguyễn Khang 0</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-customize'>
                                <div className='border-customize'>
                                    <div className='outer-bg'>
                                        <img src={Img1} alt='Quốc tế Phổi'></img>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ Nguyễn Khang 1</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-customize'>
                                <div className='border-customize'>
                                    <div className='outer-bg'>
                                        <img src={Img1} alt='Quốc tế Phổi'></img>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ Nguyễn Khang 2</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className='img-customize'>
                                <div className='border-customize'>
                                    <div className='outer-bg'>
                                        <img src={Img1} alt='Quốc tế Phổi'></img>
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ Nguyễn Khang 3</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
