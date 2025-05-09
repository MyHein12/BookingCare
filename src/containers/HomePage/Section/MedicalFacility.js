import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


import Img1 from '../../../assets/medical_facility/phoi.png'
import Img2 from '../../../assets/medical_facility/thucuc.png'
import Img3 from '../../../assets/medical_facility/nam-hoc-hn.jpg'
import Img4 from '../../../assets/medical_facility/y-duoc-1.jpg'
import Img6 from '../../../assets/medical_facility/hong-phat.png'

class MedicalFacility extends Component {

    render() {
        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'> 
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <img src={Img1} alt='Quốc tế Phổi'></img>
                                <div className='text-center'>Phòng khám Chuyên khoa Quốc tế Phổi Sài Gòn</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img2} alt='Thu Cúc'></img>
                                <div className='text-center'>Hệ thống Y tế Thu Cúc TCI</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img6} alt='Hồng Phát'></img>
                                <div className='text-center'>Bệnh viện Đa khoa Hồng Phát</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img3} alt='Nam học'></img>
                                <div className='text-center'>Bệnh viện Nam học và Hiếm muộn Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img4} alt='Y Dược 1'></img>
                                <div className='text-center'>Phòng khám Bệnh viện Đại học Y Dược 1</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img6} alt='Hồng Phát'></img>
                                <div className='text-center'>Bệnh viện Đa khoa Hồng Phát</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
