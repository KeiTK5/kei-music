import React from 'react';
import Slider from "react-slick";

function SliderComponent(props) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <Slider {...settings}>
            <div className="box-slider">
                <img src="https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg" alt="aasd" />
                <div className="box-subscribe">
                    <h3 className="subscribe">
                        Subscribe Today
                    </h3>
                    <p className="sub-subscribe">
                        Please schedule a podcast post, to make it visible here.
                    </p>
                    <div className="box-btn-sub">
                        <button className='btn btn-pink'>Subscribe with iTunes</button>
                        <button className='btn'>Subscribe with iTunes</button>
                    </div>
                </div>
            </div>
            <div className="box-slider">
                <img src="https://cdn.bongdaplus.vn/Assets/Media/2020/07/08/66/yasuo0.jpg" alt="aasd" />
                <div className="box-subscribe">
                    <h3 className="subscribe">
                        Subscribe Today
                    </h3>
                    <p className="sub-subscribe">
                        Please schedule a podcast post, to make it visible here.
                    </p>
                    <div className="box-btn-sub">
                        <button className='btn btn-pink'>Subscribe with iTunes</button>
                        <button className='btn'>Subscribe with iTunes</button>
                    </div>
                </div>
            </div>
        </Slider>
    );
}

export default SliderComponent;