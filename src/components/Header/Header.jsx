import React from 'react';
import SliderComponent from '../Slider/Slider';
import './style.scss'

function Header(props) {
    return (
        <div className="box-banner">
            <div className='wrapper-menu'>
                <div className="logo">
                    <a href="#">Kei Music</a>
                </div>
                <div className="nav-menu">
                    <div className="box-menu">
                        <a href="#">Home</a>
                    </div>
                    <div className="box-menu">
                        <a href="#">Pages</a>
                    </div>
                    <div className="box-menu">
                        <a href="#">About</a>
                    </div>
                    <div className="box-menu">
                        <a href="#">Blog</a>
                    </div>
                    <div className="box-menu">
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="nav-social">
                    <div className="item-social">
                        <a href="#">
                            <i class='bx bxl-facebook'></i>
                        </a>
                    </div>
                    <div className="item-social">
                        <a href="#">
                            <i class='bx bxl-instagram'></i>
                        </a>
                    </div>
                    <div className="item-social">
                        <a href="#">
                            <i class='bx bxl-twitter'></i>
                        </a>
                    </div>
                </div>
            </div>
            <SliderComponent />
        </div>
    );
}

export default Header;