import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ItemCard from '../../components/listingCard/ItemCard';
import PageNav from '../../components/pageNav/PageNav';

import './ShoppingCart.css'
/*
import PaymentWindow from './PaymentWindow';
import AddToCartButton from './AddToCartButton';
import QuantitySelector from './QuantitySelector';
import ProductDescription from './ProductDescription';
import Pricing from './Pricing';
import VendorRating from './VendorRating';
*/

function ProductDetailPage({ id }) {
    const [quantity, setQuantity] = useState(1);
    const [showPaymentWindow, setShowPaymentWindow] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [tab, setTab] = useState(0)

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }

    function handleBuyNow() {
        setShowPaymentWindow(true);
    }

    function handleAddToCartClick() {
        setIsAddedToCart(true);
    }

    return (
        <Container className='my-4'>
            <Row>
                <Col lg={8} className='content-border-s round-s p-2'>
                    <Row></Row>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={8}>
                            <div>item name</div>
                            <div>desc</div>
                            <div>seller name</div>
                            <div className='underline'></div>
                            <div className='my-3'>
                                <button className='btn-checkout py-2 px-5' onClick={handleBuyNow}>Buy now</button>
                                <button className='btn-checkout py-2 px-5'>Add to cart</button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <PageNav options={['Descriptions', 'Reviews']}
                            className='no-border justify-content-left'
                            tabFn={setTab} tab={tab} />
                    </Row>
                </Col>
                <Col lg={4} className='content-border-s round-s p-2'>
                    <ItemCard item={{ img: '' }} />
                    <ItemCard item={{ img: '' }} />
                    <ItemCard item={{ img: '' }} />
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetailPage;
