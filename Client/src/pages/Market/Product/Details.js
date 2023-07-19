import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PageNav from '../../../components/pageNav/PageNav';

import '../Market.css'

import StarRating from '../../../components/StarRating';
import { plus, minus } from '../../../assets/icons';

function Details({ id, product, preview }) {
    const [quantity, setQuantity] = useState(0);
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
        if (preview) return
        navigate('/market/cart')
    }

    function handleAddToCart() {
        if (preview) return
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
        const pre = require('../../../assets/holderimg.png')
        const reviews = [{
            name: 'Jane Doe',
            image: pre,
            avatar: '',
            relation: 'Relation to item (buyer/seller)',
            title: 'Review Title / First Line Made Bold',
            body: 'Lorem ipsum dolor sit amet consectetur. Accumsan a sit pretium id dictumst ut bibendum commodo.',
            rating: 4,
            tags: []
        }, {
            name: 'Jane Doe',
            image: pre,
            avatar: '',
            relation: 'Relation to item (buyer/seller)',
            title: 'Review Title / First Line Made Bold',
            body: 'Lorem ipsum dolor sit amet consectetur. Accumsan a sit pretium id dictumst ut bibendum commodo.',
            rating: 4,
            tags: []
        }]
        return <div>
            {reviews.map(review => {
                return <div className='content-border-l round-s d-flex flex-row p-3 mb-2'>
                    <div className='me-3'><img src={review.image} className='img-review round-s ' /></div>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-row'>
                            <div className='p-2'><img className='avatar img-avatar' src={review.avatar}></img></div>
                            <div className='d-flex flex-column my-auto p-2'>
                                <div className='fs-15'>{review.name}</div>
                                <div className='fs-12 fw-400'>{review.relation}</div>
                            </div>
                        </div>
    
                        <div className='fs-15 p-2'>{review.title}</div>
                        <div className='fs-15 fw-400 p-2'>{review.body}</div>
    
                    </div>
                    <div className='d-flex ms-auto flex-row pe-3'>
                        <StarRating ratings={review.rating} disabled={true} />
                        <div className='fs-15 px-2'>{review.rating}</div>
                    </div>
                </div>
            })}
        </div>
    }

    return <div className='content-border-s round-s p-3 px-4'>
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
                        <div className="d-flex g-0">
                            <button className='btn m-0 ps-0 btn-outline-0' onClick={() => changeQuantity(quantity - 1)}><img src={minus} /></button>
                            <div className="my-auto">{quantity}</div>
                            <button className='btn m-0 btn-outline-0' onClick={() => changeQuantity(quantity + 1)}><img src={plus} /></button>
                        </div>
                    </Col>
                    <Col>
                        <button className='btn-checkout py-2 px-4 m-2 float-end' onClick={handleAddToCart}>Add to cart</button>
                        <button className='btn-checkout py-2 px-4 m-2 float-end' onClick={handleBuyNow}>Buy now</button>

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
}



export default Details;