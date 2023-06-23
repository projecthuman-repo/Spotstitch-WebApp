import React, { useState } from "react";
import './Market.css';
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "../../components/listingCard/ItemCard";

import FilterForm from "../../components/FilterForm/FilterForm"

const Market = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const priceFilters = ['All', '$0 - $20', '$20 - $50', '$50 - $100', '$100 and Above']
    const Categories = ['Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name']
    const Items = ['1', '2', '3', '4', '5', '6', '7']

    const itemEx = { 
        title: 'Listing Name', 
        description: 'Description of the product',
        rating: 'Price: $$',
        img: '', 
        tags: ['tag','tag']}

    function toProduct(id) {
        navigate(`/market/product?id=${id}`)
    }

    {

        return (
            <Container className="my-4 ">
                <Row>
                    <Col lg={3}>
                        <FilterForm priceFilters={priceFilters} categories={Categories}/>


                    </Col>
                    <Col>
                        <Row>
                            <p>{search == '' ? 'Top Listings' : search}</p>
                            {
                                Items.map(item => {
                                    return <Col lg={3}>
                                        <ItemCard item={itemEx} link={() => toProduct(item)} />
                                    </Col>
                                })
                            }
                        </Row>




                    </Col>
                </Row>

            </Container>

        )
    }

}

export default Market