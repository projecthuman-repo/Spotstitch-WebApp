import React from 'react'
import styled from 'styled-components'
import './Explore.css'

const Tag = styled.button`
    background-color: #D9D9D9;
    border-radius: 10px;
    min-width: 150px;
    height: 40px;
    display: flex;
    border: none;
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
        <h4 className=''>Explore Page</h4>
        <div className='d-flex w-100 overflow-auto '>
            {tags.map((tag, i) => {
                return (
                    <Tag key={i} className=' text-nowrap mt-2 mb-2 me-4  justify-content-around align-items-center border-1 border-primary'>
                        {tag}
                    </Tag>
                )
            })}
            </div>
    </div>
  )
}

export default ExplorePage