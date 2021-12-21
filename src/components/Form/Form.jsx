import React from 'react';
import './style.scss';
function Form(props) {
    return (
        <div className='form-register'>
            <div className="title-form">
                <div className="title">Sign Up To Newsletter</div>
                <div className="sub-title">
                    Subscribe to receive info on our latest news and episodes
                </div>
            </div>
            <div className="form">
                <form action="#">
                    <div className="form-control">
                        <input type="text" placeholder='Your Email' />
                    </div>
                    <div className="form-control">
                        <button>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;