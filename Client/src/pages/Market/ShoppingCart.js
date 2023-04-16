import React, {useEffect} from "react";
import './ShoppingCart.css';
import Cart from './cart';
import cart0 from "../../constants/cart.json"
import photo from '../../assets/default.jpg';

import { Link, useNavigate } from "react-router-dom";


import Table from "../../components/BasicTable";


//const [cart, setCart] = useState([]);

// useEffect(() => {
//     console.log("ComponentDidMount");
//
//     // 没有数据就加载数据，此处的cart0是本地JSON
//     !cart.length && setCart(cart0)
// }, [])

const Market = () => {


    {

        return (
            <div className="container1">


                <div className="body1">






                    <div className="leftbox1">


                            <div className="sub_title1">
                                Shopping cart
                            </div>

                            <div className="sub_title2">
                                Deselect all items
                            </div>


                        <hr class="hr-solid1"></hr>

                        <div className="shopping_product_list">

                            <div className="product_list">
                                <div className="product_item">
                                    <Cart></Cart>
                                </div>
                                <div className="product_item">

                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="rightbox1">

                        <div className="summary_box1">

                            <div className="summ_box2">
                                <div className="titles">
                                     <div>
                                         Summary
                                    </div>
                                    <div>
                                        (2 items): $
                                    </div>
                                    <div>
                                        22.57
                                    </div>
                                </div>
                            </div>
                            <div className="checkout_button">
                                <button className="button_size">Proceed to Checkout</button>
                            </div>
                        </div>

                        <div className="other_box1 ">
                            <div className="sub_title1">
                                More to love
                            </div>
                            <div className="other_product_list">
                                <div className="other_product">

                                </div>

                                <div className="other_product">

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="footer"></div>


            </div>


        )
    }

}

export default Market