import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './listingCard.css';

const ItemCard = ({ item = {} }) => {
    const [tags, setTags] = useState([]);

    useEffect(() => {

        if (item.tags) {
            setTags(
                item.tags.map((tag, index) => (
                    <EventTag key={tag} eventTag={tag} />
                ))
            );
        }
    }, []);
    return (
        <div
            className='card my-3 mx-2 shadow listingCard'
            style={{ borderRadius: '25px' }}
        >
            <img
                src={item.img ? item.img : require('../../assets/holderimg.png')}
                className='card-img-top '
                style={{ borderRadius: '25px 25px 0px 0px', height: '13vh' }}
            />
            <div className='card-body' style={{ fontSize: 'smaller' }}>
                <h5 className='card-title fs-6'>{item.title}</h5>
                <p className='card-text mb-1'>
                    {item.description}
                    <br />
                    {item.rating}
                </p>
                <div className='row row-cols-2 g-0'>
                    {tags.length > 0 ? tags : null}
                </div>
            </div>
        </div>
    );
};

const EventTag = ({ eventTag }) => {
    return (
        <div className='col text-nowrap text-center mt-1'>
            <div
                className='rounded-pill px-2'
                style={{ backgroundColor: '#D9D9D9', fontSize: '90%' }}
            >
                {eventTag}{' '}
                <AiOutlineClose
                    className='ms-2 me-1'
                    style={{ backgroundColor: 'white', borderRadius: '25px' }}
                />
            </div>
        </div>
    );
};

export default ItemCard;
