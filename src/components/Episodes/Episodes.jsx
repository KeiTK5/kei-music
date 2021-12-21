import React from 'react';
import Loadmore from '../../common/Loadmore';
import './style.scss'

function Episodes(props) {
    return (
        <div className='episodes'>
            <div className="title-main">
                <h3>Latest Episodes</h3>
            </div>
            <div className="wrapper-categories">
                <div className="item-cate active">All</div>
                <div className="item-cate">Entrepreneurship</div>
                <div className="item-cate">Media</div>
                <div className="item-cate">Tech</div>
                <div className="item-cate">Tutorials</div>
            </div>
            <div className="wrapper-item-cate">
                <div className="box-cate">
                    <div className="image-cate">
                        <img src="../images/cate-1.jpg" alt="" />
                    </div>
                    <div className="box-content">
                        <div className="box-date">
                            DECEMBER 9, 2018
                        </div>
                        <div className="box-name">
                            Episode 201 - You Don’t Know Squat!
                        </div>
                    </div>
                </div>
                <div className="box-cate">
                    <div className="image-cate">
                        <img src="../images/cate-1.jpg" alt="" />
                    </div>
                    <div className="box-content">
                        <div className="box-date">
                            DECEMBER 9, 2018
                        </div>
                        <div className="box-name">
                            Episode 201 - You Don’t Know Squat!
                        </div>
                    </div>
                </div>
                <div className="box-cate">
                    <div className="image-cate">
                        <img src="../images/cate-1.jpg" alt="" />
                    </div>
                    <div className="box-content">
                        <div className="box-date">
                            DECEMBER 9, 2018
                        </div>
                        <div className="box-name">
                            Episode 201 - You Don’t Know Squat!
                        </div>
                    </div>
                </div>
                <div className="box-cate">
                    <div className="image-cate">
                        <img src="../images/cate-1.jpg" alt="" />
                    </div>
                    <div className="box-content">
                        <div className="box-date">
                            DECEMBER 9, 2018
                        </div>
                        <div className="box-name">
                            Episode 201 - You Don’t Know Squat!
                        </div>
                    </div>
                </div>
            </div>
            <Loadmore />
        </div>
    );
}

export default Episodes;