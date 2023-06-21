import React, { useState } from "react";
import './Market.css';
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ItemCard from "../../components/listingCard/ItemCard";



const Market = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    const priceFilters = ['All', '$0 - $20', '$20 - $50', '$50 - $100', '$100 and Above']
    const Categories = ['Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name', 'Category Name']
    const Items = ['1', '2', '3', '4', '5', '6', '7']

    function toProduct(id) {
        navigate(`/market/product?id=${id}`)
    }

    {

        return (
            <Container className="my-4 ">
                <Row>
                    <Col className="content-border-s round-s py-3" lg={3}>
                        <div>
                            <p>Price Range</p>
                            {
                                priceFilters.map((price, index) => {
                                    return <div className='form-check'>
                                        <input type='radio' className='form-check-input' name='price' id={`priceFilter_${index}`} />
                                        <label className='form-check-label'>{price}</label>
                                    </div>
                                })
                            }
                        </div>

                        <div className='d-block d-lg-flex mt-2 mx-2 mx-sm-0 text-center'>
                            <input type='text' className='form-control form-control-sm mx-1' placeholder='$' />
                            <span className='my-auto'>-</span>{' '}
                            <input type='text' className='form-control form-control-sm mx-1' placeholder='$' />
                            <button className='btn btn-sm mt-2 my-lg-auto' style={{ backgroundColor: '#D9D9D9', }} >
                                Go
                            </button>
                        </div>
                        <hr style={{ color: '#757575' }} className="mb-1" />
                        <div>
                            <p className="py-1 m-0">Categories</p>
                            {
                                Categories.map((category, index) => {
                                    return <div className='form-check'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input round-label'
                                            name={`${category}`}
                                            id={`categoryFilter_${index}`}
                                        />
                                        <label className='form-check-label'>Category Name</label>
                                    </div>
                                })
                            }

                        </div>

                    </Col>
                    <Col>
                        <Row>
                            <p>{search == '' ? 'Top Listings' : search}</p>
                            {
                                Items.map(item => {
                                    return <Col lg={3}>
                                        <ItemCard item={{ img: '' }} link={()=>toProduct(item)}/>
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