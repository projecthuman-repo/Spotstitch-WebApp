import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Recommendation from '../Recommendation';
import Details from './Details';
import '../Market.css'



function ProductDetailPage({ id }) {
    return (
        <Container className='my-4'>
            <Row>
                <Col lg={9}>
                    <Details />
                </Col>
                <Col lg={3} >
                    <Recommendation />
                </Col>
            </Row>
        </Container>
    );
}



export default ProductDetailPage;