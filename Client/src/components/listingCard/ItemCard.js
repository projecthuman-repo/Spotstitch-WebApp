import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './listingCard.css';
import { Col } from 'react-bootstrap';

const ItemCard = ({ item = {} }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {

        if (item.tags) {
            setTags(
                item.tags.map((tag, index) => (
                    <EventTag key={`item_${index}`} tag={tag} />
                ))
            );
        }
    }, []);
    return (
        <div
            className='card my-3 listingCard'
            style={{ borderRadius: '20px' }}
        >
            <img
                src={item.img ? item.img : require('../../assets/holderimg.png')}
                className='card-img-top '
                height={'180px'}
                width={'250px'}
                style={{ borderRadius: '20px 20px 0px 0px', maxHeight: '180px'}}
            />
            <div className='card-body' style={{ fontSize: 'smaller' }}>
                <h5 className='card-title fs-20 m-0'>{item.title}</h5>
                <p className='card-text mb-1 fs-14'>
                    {item.description}
                    <br />
                    {item.rating}
                </p>
                <div className='row row-cols-2 g-0 mt-1 '>
                    {tags.length > 0 ? tags : null}
                </div>
            </div>
        </div>
    );
};

const EventTag = ({ tag }) => {
    return (
        <Col className="light rounded-pill me-2 py-1 fs-10" lg={5}>
            <span>
                <div className='mx-1 d-inline'>{tag}</div>
                <div className='float-end mx-1'>
                    <AiOutlineClose style={{ backgroundColor: 'white', borderRadius: '25px' }} />
                </div>
            </span>
        </Col>
    );
};

export default ItemCard;
