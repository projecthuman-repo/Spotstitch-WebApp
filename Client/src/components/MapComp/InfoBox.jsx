import React from 'react'
import './InfoBox.css'
import styled from 'styled-components'

const Header = styled.div`
    height: 90px;
`

const Subtitle = styled.p`
    font-size: 0.8rem;
    margin: 0;
`

const DaysLeft = styled.p`
    font-size: 1rem;
`

const HR = styled.hr`
    height: 1px;
    margin: 0;
`


const DescriptionContainer = styled.div`
    height: 110px;
`

const EventButton = styled.button`
    border: none;
    border-radius: 30px;
    padding: 5px 15px;
    font-size: 0.8rem;
    background-color: #E0DFDF;
    font-weight: 400;
    box-shadow: 0px 1px 3px 0px #000000;

    transition: background-color 0.3s;
    &:hover {
        background-color: #BDBDBD;
    }
`

const InfoBox = ({info}) => {
  return (
    <div className='popup'>
        <Header className=" d-flex pe-4 ps-4 pt-2">
            <div className="w-75">
                <h5>{info.name}</h5>
                <Subtitle className='fw-semibold'>{info.location}</Subtitle>
                <Subtitle>{info.date}</Subtitle>

            </div>
            <div className="w-25 text-end">
                <DaysLeft>{info.numberOfDays} Days Left</DaysLeft>
            </div>
        </Header>
        <HR className='' />
        <DescriptionContainer className=" overflow-auto pe-4 ps-4 pt-2">
            <Subtitle className=' fw-semibold '>Event Description</Subtitle>
            <Subtitle>{info.description}</Subtitle>
        </DescriptionContainer>
        <div className="w-50 p-2 ps-3 d-flex justify-content-around">
            <EventButton>View Event</EventButton>
            <EventButton>Get Tickets</EventButton>
        </div>
    </div>
  )
}

export default InfoBox