import React, { useState } from "react";
import '../Market.css';
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import ItemCard from "../../../components/listingCard/ItemCard";

import FilterForm from "../../../components/FilterForm/FilterForm"
import EventTag from "../../../components/listingCard/EventTag";
import { options } from "../../../assets/icons";



function Listings() {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const priceFilters = ['All', '$0 - $20', '$20 - $50', '$50 - $100', '$100 and Above']
    const Categories = ['Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name']

    const tempImg = require('../../../assets/holderimg.png')
    const Items = [{
        _id: 1,
        title: 'Listing Name',
        description: 'Description of the product \n Lorem ipsum dolor sit amet consectetur. Mi suspendisse in in quis viverra.',
        info: 'Price: $$',
        img: tempImg,
        tags: ['tag', 'tag'],
        quantity: 200
    }, {
        _id: 2,
        title: 'Listing Name',
        description: 'Description of the product \n Lorem ipsum dolor sit amet consectetur. Mi suspendisse in in quis viverra.',
        info: 'Price: $$',
        img: tempImg,
        tags: ['tag', 'tag'],
        quantity: 200
    }, {
        _id: 3,
        title: 'Listing Name',
        description: 'Description of the product \n Lorem ipsum dolor sit amet consectetur. Mi suspendisse in in quis viverra.',
        info: 'Price: $$',
        img: tempImg,
        tags: ['tag', 'tag'],
        quantity: 200
    }]

    function toProduct(id) {
        navigate(`/market/product?id=${id}`)
    }

    function HandleEdit(id) {
        navigate(`/market/mylistings/edit/${id}`)
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a href="" ref={ref} onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }} >
            {children}
        </a>
    ));

    return (
        <Container className="my-4 ">
            <Row>
                <Col lg={3}>
                    <FilterForm priceFilters={priceFilters} categories={Categories} />
                </Col>
                <Col>
                    <Row>
                        <p className="fs-18 fw-600">{search == '' ? `Your Listings: ${Items.length}` : search}</p>
                        {
                            Items.map((item) => {
                                return <Col lg={6} className="p-3">
                                    <Row className="listing-card g-0">
                                        <Col lg={6} class="ratio ratio-1x1">
                                            <img src={item.img} className="img-fluid img-listing" />
                                        </Col>
                                        <Col lg={6} >
                                            <div className="p-2 d-flex flex-column h-100">
                                                <div className="d-flex flex-row">
                                                    <div className="fs-20">{item.title}</div>
                                                    <div className="ms-auto">
                                                        <Dropdown>
                                                            <Dropdown.Toggle as={CustomToggle}>
                                                                <img src={options} />
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item onClick={() => HandleEdit(item._id)}>Edit Listing</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                </div>

                                                <div className="fs-14 fw-400">{item.description}</div>
                                                <div className="mt-auto">
                                                    <div className="fs-14 fw-400 pt-2">QTY: {item.quantity}</div>
                                                    <div className="fs-14 fw-500 py-3">{item.info}</div>
                                                    <div className='row row-cols-2 g-0 mt-1 '>
                                                        {item.tags.map((tag, index) => {
                                                            return <EventTag key={`item_${index}`} tag={tag} />
                                                        })}
                                                    </div>
                                                </div>



                                            </div>

                                        </Col>
                                    </Row>
                                </Col>
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default Listings