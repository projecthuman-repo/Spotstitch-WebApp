import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './listingCard.css';
import './itemCard.css'
import { Col } from 'react-bootstrap';
import EventTag from './EventTag';

const ItemCard = ({
    className = '',
    item = { img, title: 'Listing Name', description: 'Description of the product', info, tags },
    link,
    imgPosition = 0 }) => {

    const [tags, setTags] = useState([]);

    const itemEx = {
        title: 'Listing Name',
        description: 'Description of the product',
        info: 'Price: $$',
        img: '',
        tags: ['tag', 'tag']
    }

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
        <div className='card my-3 listingCard item g-0' onClick={link} >

            <img src={item.img ? item.img : require('../../assets/holderimg.png')}
                className='item-img card-img-top' />

            <div className='card-body' style={{ fontSize: 'smaller' }}>
                <h5 className='card-title fs-20 m-0'>{item.title}</h5>
                <p className='card-text mb-1 fs-14'>
                    {item.description}
                    <br />
                    {item.info}
                </p>
                <div className='row row-cols-2 g-0 mt-1 '>
                    {tags.length > 0 ? tags : null}
                </div>
            </div>
        </div>
    );
};



export default ItemCard;
