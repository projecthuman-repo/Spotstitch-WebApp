import React from 'react'
import styled from 'styled-components'
import './Explore.css'
import MapComp from '../../components/MapComp/MapComp'
import { eventLocations } from './mockData'


const Tag = styled.button`
    background-color: #D9D9D9;
    border-radius: 10px;
    min-width: 150px;
    height: 40px;
    display: flex;
    border: none;
    color: #000;


`

const ExplorePage = () => {

    const tags = [
        "General tag",
        "Tech tag",
        "Fashion tag",
        "Food tag",
        "Travel tag",
        "Art tag",
        "Music tag",
        "Sports tag",
        "Health tag",
        "Science tag",
    ]

  return (
    <div className='h-100 m-5'>
        <h4 className=' mb-3 '>Explore Page</h4>
        <div className='d-flex mb-3 w-100 overflow-auto'>
            {tags.map((tag, i) => {
                return (
                    <Tag key={i} className='btn btn-primary text-nowrap mt-2 mb-2 me-4  justify-content-around align-items-center border-1 border-primary'
                    data-bs-toggle="button">
                        {tag}
                    </Tag>
                )
            })}
        </div>

        <MapComp locations={eventLocations} />

    </div>
  )
}

export default ExplorePage