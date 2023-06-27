import React, { useEffect, useState } from "react";
import './Market.css';


import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Recommendation from "./Recommendation";
import { garbageCan, minus, plus } from "../../assets/icons";


const Market = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([{
        name: 'item name',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        quantity: 1,
        price: 11.50
    }, {
        name: 'item name',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        quantity: 1,
        price: 11.50
    }])

    const numItems = 0
    const price = 0

    function proceedToCheckout() {
        navigate('/cart/checkout')
    }

    function changeQuantity() {
  
    }

    function deleteItem(index) {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
        console.log(newItems)
    }

    return (
        <Container className="my-4">
            <Row>
                <Col lg={8}>
                    <div className="content-border-s round-s">
                        <div className="underline px-4 py-3">
                            <div className="fs-18 fw-600">Shopping Cart</div>
                        </div>
                        <div className="px-3 py-3">
                            {items.map((item, index) => {
                                return <div className="d-flex p-2">
                                    <div className='form-check my-auto m-2'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input round-label'
                                            name={`${'test'}`}
                                            id={`itemCart_${index}`}
                                        />
                                    </div>
                                    <div className="img-cart" style={{ background: `url(${item.image}), #F4F2F2 ` }}>
                                        
                                    </div>
                                    <div className="p-2 mx-2">
                                        <div>{item.name}</div>
                                        <div>{item.description}</div>
                                        <div>${item.price}</div>
                                        <div className="align-middle d-inline">
                                            <button className='btn m-0' onClick={() => changeQuantity()}><img src={minus} /></button>
                                            <div className="align-middle d-inline m-0">{item.quantity}</div>
                                            <button className='btn m-0' onClick={() => changeQuantity()}><img src={plus} /></button>
                                        </div>
                                    </div>
                                    <div className="mx-auto">
                                        <button className="btn" onClick={() => deleteItem(index)}><img src={garbageCan} /></button>
                                    </div>
                                </div>

                            })}
                        </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="content-border-s round-s py-3 px-4">
                        <div className="fs-18 fw-600">Summary ({numItems} items): ${price}</div>
                        <div><button className="btn-checkout my-3 py-2 w-100" onClick={proceedToCheckout}>Proceed to Checkout</button></div>

                    </div>


                    <Recommendation />
                </Col>
            </Row>
        </Container>
    )


}

export default Market