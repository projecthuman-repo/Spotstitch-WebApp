import React from "react";
import './Market.css';
import { Link, useNavigate } from "react-router-dom";


import Table from "../../components/BasicTable";



const Market = () => {


    {

        return (
            <div className="container">

                <div className="title">
                    Market
                </div>
                <div className="body">
                    <div className="leftbox">
                    <Link to="/" className="lboxpayment">Home</Link>
                    <Link to="/shopping-cart" className="lboxpayment">Shopping Cart</Link>
                    <Link to="/product" className="lboxpayment">Product Detail</Link>

                    <div className="searchbar">Search Filter</div>
                    <input type="text" id="search"/>


                    <div className="pricefilter">
                        <div>Price Range Slider</div>

                        <div className="price-content">
                            <div>
                                <label>Min</label>
                                <p id="min-value">$50</p>
                            </div>

                            <div>
                                <label>Max</label>
                                <p id="max-value">$500</p>
                            </div>
                        </div>

                    </div>

                        <div className="range-slider">
                            <input type="range" className="min-price" value="100" min="10" max="500" step="10"/>
                            <input type="range" className="max-price" value="250" min="10" max="500" step="10"/>
                        </div>
                        <div> Type Selection</div>
                        <form action="#">
                            <select name="languages" id="lang">
                                <option value="food">Food</option>
                                <option value="drink">Drink</option>

                            </select>
                            <input type="submit" value="Submit"/>
                        </form>
                    </div>





                    <div className="rightbox">

                        <div className="MarketTable">

                        </div>


                        <a className="checkoutlink">
                            <button className="checkoutbutton">Previous Page</button>
                            <button className="checkoutbutton">Next Page</button>
                        </a>


                    </div>

                </div>
                <div className="footer"></div>


            </div>


        )
    }

}

export default Market