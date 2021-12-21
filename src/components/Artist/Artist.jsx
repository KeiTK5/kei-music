import React from 'react';
import './style.scss'
function Artist(props) {
    return (
        <div className='artist'>
            <div className="title-main">
                <h3>Favorite Artist</h3>
            </div>
            <div className="wrapper-artist">
                <div className="box-artist">
                    <div className="image-artist">
                        <img src="../images/artist/artist-1.jpg" alt="" />
                    </div>
                    <div className="box-info">
                        <div className="name-artist">
                            Alfred Day
                        </div>
                        <div className="info-artist">
                            PRODUCER
                        </div>
                    </div>
                </div>
                <div className="box-artist">
                    <div className="image-artist">
                        <img src="../images/artist/artist-2.jpg" alt="" />
                    </div>
                    <div className="box-info">
                        <div className="name-artist">
                            Alfred Day
                        </div>
                        <div className="info-artist">
                            PRODUCER
                        </div>
                    </div>
                </div>
                <div className="box-artist">
                    <div className="image-artist">
                        <img src="../images/artist/artist-3.jpg" alt="" />
                    </div>
                    <div className="box-info">
                        <div className="name-artist">
                            Alfred Day
                        </div>
                        <div className="info-artist">
                            PRODUCER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artist;