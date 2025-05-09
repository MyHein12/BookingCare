import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


import Img1 from '../../../assets/handbook/handbook1.png'
import Img2 from '../../../assets/handbook/handbook2.png'
import Img3 from '../../../assets/handbook/handbook3.png'
import Img4 from '../../../assets/handbook/handbook4.png'
import Img5 from '../../../assets/handbook/handbook5.png'


class HandBook extends Component {

    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='img-customize'>
                                <img src={Img1} alt='Quốc tế Phổi'></img>
                                <div >Chi phí hút mỡ bắp tay tại các địa chỉ uy tín Hà Nội là bao nhiêu?</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img2} alt='Quốc tế Phổi'></img>
                                <div >Hút mỡ đùi tại bao nhiêu tiền? Bảng giá 6 địa chỉ uy tín tại Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img3} alt='Quốc tế Phổi'></img>
                                <div >Nâng mũi nam ở đâu đẹp Hà Nội? Top 6 địa chỉ nâng mũi nam uy tín</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img4} alt='Quốc tế Phổi'></img>
                                <div >Top Bệnh viện thẩm mỹ quốc tế uy tín tại Hà Nội</div>
                            </div>
                            <div className='img-customize'>
                                <img src={Img5} alt='Quốc tế Phổi'></img>
                                <div >Cập nhật chi phí mở góc mắt bao nhiêu tại 6 địa chỉ thẩm mỹ uy tín Hà Nội</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
