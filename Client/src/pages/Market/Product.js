import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemCard from '../../components/listingCard/ItemCard';
import PageNav from '../../components/pageNav/PageNav';

import './Market.css'

import StarRating from '../../components/StarRating';
import { plus, minus } from '../../assets/icons';
import Recommendation from './Recommendation';

function ProductDetailPage({ id }) {
    const [quantity, setQuantity] = useState(0);
    const [showPaymentWindow, setShowPaymentWindow] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [tab, setTab] = useState(0)
    const navigate = useNavigate()

    const item = {
        name: 'item name',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur. Accumsan a sit pretium id dictumst ut bibendum commodo.',
        seller: 'seller name',
        longDesc: 'Lorem ipsum dolor sit amet consectetur. Gravida tincidunt amet nulla volutpat ut enim. Elementum elit gravida arcu velit quis adipiscing vivamus iaculis. Vulputate arcu vel ut auctor amet urna ligula platea nibh. Congue convallis etiam velit mauris tellus euismod feugiat urna orci.',
        price: 15.99,
        rating: 4.0,
        reviews: [],
        features: [{
            image: '',
            name: 'feature name',
            description: 'Lorem ipsum dolor sit amet consectetur. Accumsan a sit pretium id dictumst ut bibendum commodo.'
        }, {
            image: '',
            name: 'feature name',
            description: 'Lorem ipsum dolor sit amet consectetur. Accumsan a sit pretium id dictumst ut bibendum commodo.'
        }, {
            image: '',
            name: 'feature name',
            description: 'Lorem ipsum dolor sit amet consectetur. Accumsan a sit pretium id dictumst ut bibendum commodo.'
        }],
        images: ['', '', '', '', '', '']
    }

    function changeQuantity(newQuantity) {
        if (newQuantity < 0) return
        setQuantity(newQuantity)
    }

    function handleBuyNow() {
        setShowPaymentWindow(true);
        navigate('/cart')
    }

    function handleAddToCartClick() {
        setIsAddedToCart(true);
    }

    function Features() {
        return <Row>
            <div className='fw-600 fs-18 py-2'>Key Features</div>
            {item.features.map(feature => {
                return <>
                    <Col lg={3}>
                        <div className='img-feature' style={{ background: `url(${feature.image[0]}), #F4F2F2 ` }}></div>
                        <div className='fw-600 fs-15'>{feature.name}</div>
                        <div className='fw-400 fs-15'>{feature.description}</div>
                    </Col>
                    <Col lg={1}></Col>
                </>
            })}
        </Row>

    }

    function Reviews() {
        return <div></div>
    }

    return (
        <Container className='my-4'>
            <Row>
                <Col lg={9}>

                    <div className='content-border-s round-s p-3 px-4'>
                        <p>Category {'>'} Category {'>'} Category {'>'} Item</p>
                        <Row>
                            <Col lg={5}>
                                <div className='img-product' style={{ background: `url(${item.images[0]}), #F4F2F2 ` }}></div>
                                <div className='row flex-row flex-nowrap overflow-auto p-2 px-2'>
                                    {item.images.map(img => {
                                        return <img className='img-preview my-1 me-1' src='' style={{ height: '59px', width: '59px' }} />
                                    })}
                                </div>

                            </Col>
                            <Col lg={7}>
                                <div className='fs-18 fw-600'>{item.name}</div>
                                <div className='fs-16 fw-600'>{item.shortDesc}</div>
                                <div>{item.seller}</div>
                                <StarRating ratings={item.rating} disabled={true} />
                                <div className='underline'></div>
                                <div className='fs-24 fw-600'>C$ {item.price}</div>
                                <div>{item.longDesc}</div>
                                <Row className='my-3'>
                                    <Col lg={3}>
                                        <div>Quantity: </div>
                                        <div className="align-middle d-inline">
                                            <button className='btn m-0' onClick={() => changeQuantity(quantity - 1)}><img src={minus} /></button>
                                            <div className="align-middle d-inline m-0">{quantity}</div>
                                            <button className='btn m-0' onClick={() => changeQuantity(quantity + 1)}><img src={plus} /></button>
                                        </div>
                                    </Col>
                                    <Col>
                                        <button className='btn-checkout py-2 px-5 m-2 float-end'>Add to cart</button>
                                        <button className='btn-checkout py-2 px-5 m-2 float-end' onClick={handleBuyNow}>Buy now</button>

                                    </Col>


                                </Row>
                            </Col>
                        </Row>
                        <div className='underline pb-3'></div>
                        <Row>
                            <PageNav options={['Descriptions', 'Reviews']}
                                className='no-border justify-content-left'
                                tabFn={setTab} tab={tab} />
                            {tab == 0 && <Features />}
                            {tab == 1 && <Reviews />}
                        </Row>
                    </div>

                </Col>
                <Col lg={3} >
                    <Recommendation />
                </Col>
            </Row>
        </Container>
    );
}



export default ProductDetailPage;
