import { Col, Container, Modal, Row } from "react-bootstrap"
import { useState } from "react"

import './Market.css'
import { chevronRight, garbageCan, minus, plus } from "../../assets/icons"
import ChangeAddressModal from "./ChangeAddressModal"
import DeliveryModal from "./DeliveryModal"
import ChangeCardModal from "./ChangeCardModal"


function Checkout() {
    const address = {
        name: 'John Doe',
        addressLine: '13849 111 AVE',
        city: 'Vancouver',
        province: 'BC',
        country: 'Canada',
        postalCode: 'V4H 0I8',
        number: '778-234-4827',
        extension: '+1'
    }

    const [items, setItems] = useState([{
        name: 'item name',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        quantity: 1,
        price: 11.50
    }, {
        name: 'item name',
        image: '',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        quantity: 1,
        price: 11.50
    }])

    const [deliveryType, setDeliveryType] = useState({
        name: 'Standard',
        price: 0.00,
        startDate: '5 April',
        endDate: '6 April'
    })

    const taxRate = 0.13

    const getTotal = () => {
        let total = 0
        for (const item of items) {
            total += item.price
        }
        return Number(total).toFixed(2)
    }

    const getDeliveryPrice = () => {
        return deliveryType.price == 0 ? 'Free' : `CA $${Number(deliveryType.price).toFixed(2)}`
    }
    const getTax = () => {
        return Number(getTotal() * taxRate).toFixed(2)
    }

    const card = {

    }

    function changeQuantity() {

    }

    function deleteItem(index) {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
        console.log(newItems)
    }

    return <Container className="my-0">
        <Row className="">
            <Col lg={7} className="py-4">
                <div className="fw-600 fs-18 py-2">Shipping/billing address</div>
                <div className="content-border-l round-l me-4 p-4">
                    <div className="d-flex ">
                        <div className="d-flex flex-column">
                            <div>{address.name}</div>
                            <div>{address.addressLine}</div>
                            <div>{address.city}, {address.province} {address.postalCode}, {address.country}</div>
                            <div>{address.extension} {address.number}</div>
                        </div>
                        <div className="ms-auto my-auto"><ChangeAddressModal /></div>
                    </div>

                    <div className="underline my-4"></div>

                    <div className="d-flex ">
                        <div className="d-flex flex-column">
                            <div>Standard (CA$0.00)</div>
                            <div>Delivers 5 April - 6 April</div>
                        </div>
                        <div className="ms-auto my-auto"><DeliveryModal /></div>
                    </div>



                </div>

                <div className="fw-600 fs-18 py-2">Payment Method</div>
                <div className="d-flex content-border-l round-l me-4 p-4">
                    <div className="d-flex flex-column">
                        <div>Mastercard **** 4052 </div>
                        <div>Exp 03/27</div>
                    </div>

                    <div className="ms-auto my-auto"><ChangeCardModal /></div>
                </div>

                <div>Review Items</div>
                {items.map((item, index) => {
                    return <div className="d-flex py-2" id={`checkOutItem_${index}`}>
                        <div className="img-cart" style={{ background: `url(${item.image}), #F4F2F2 ` }}>

                        </div>
                        <div className="p-2 mx-2">
                            <div>{item.name}</div>
                            <div>{item.description}</div>
                            <div>${item.price}</div>
                            <div className="align-middle d-inline">
                                <button className='btn m-0' onClick={() => changeQuantity()}><img src={minus} /></button>
                                <div className="align-middle d-inline m-0">{item.quantity}</div>
                                <button className='btn m-0' onClick={() => changeQuantity()}><img src={plus} /></button>
                            </div>
                        </div>
                        <div className="mx-auto">
                            <button className="btn" onClick={() => deleteItem(index)}><img src={garbageCan} /></button>
                        </div>
                    </div>

                })}

            </Col>
            <Col lg={5} className="bg-checkout justify-content-center g-0 py-5">
                <Row className="g-0 px-5 pt-3 underline">
                    <div className="px-5">
                        <div className="fs-20 fw-600 pb-4">Order Summary</div>

                        <div className="pt-4 pb-3 d-flex flex-row">
                            <div>Subtotal</div>
                            <div className="ms-auto">CA ${getTotal()}</div>
                        </div>
                        <div className="pb-3 d-flex flex-row">
                            <div className="">Delivery</div>
                            <div className="ms-auto">{getDeliveryPrice()}</div>
                        </div>
                        <div className="pb-3 d-flex flex-row">
                            <div className="">Estimated Tax</div>
                            <div className="ms-auto">CA ${getTax()}</div>
                        </div>
                    </div>
                </Row>

                <Row className="g-0 px-5">
                    <div className="px-5">
                        <div className="d-flex flex-column">
                            <div className="fw-700 fs-18 py-3 mb-5">Total</div>
                            <button className="btn-checkout my-3 py-3 px-5">Confirm your order</button>
                        </div>
                    </div>

                </Row>


            </Col>
        </Row>
    </Container >
}




export default Checkout