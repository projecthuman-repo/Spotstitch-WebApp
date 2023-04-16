import React from 'react';

import defImg from '../../assets/default.jpg'
import './cart.css';

const Cart = () => {
    return (
        <div className="cart-wrapper">



            <div className="middle">
                <ul>

                    <li className='item'>

                        <div className='sel-box'>
                            <input type="checkbox" />
                        </div>

                        <div className='imgname-box'>
                            {/*<img src={defImg} alt="item" id="aaa"/>*/}
                            <span>product name</span>
                        </div>

                        <div className='price-box'>
                            $<span className='price'>0.00</span>
                        </div>

                        <div className='count-box'>
                            <button>-</button>
                            <input type="number" />
                            <button>+</button>
                        </div>

                        <div className='amount-box'>
                            <span className='price'>0.00</span>
                        </div>
                        <div className='action-box'>
                            <a href="#">remove product</a>
                        </div>
                    </li>


                    <li className='item'>

                        <div className='sel-box'>
                            <input type="checkbox" />
                        </div>

                        <div className='imgname-box'>
                            {/*<img src={defImg} alt="item" />*/}
                            <span>product name</span>
                        </div>

                        <div className='price-box'>
                            $<span className='price'>0.00</span>
                        </div>

                        <div className='count-box'>
                            <button>-</button>
                            <input type="number" />
                            <button>+</button>
                        </div>

                        <div className='amount-box'>
                            <span className='price'>0.00</span>
                        </div>
                        <div className='action-box'>
                            <a href="#">remove product</a>
                        </div>
                    </li>

                </ul>
            </div>


        </div>
    );
}

export default Cart;
