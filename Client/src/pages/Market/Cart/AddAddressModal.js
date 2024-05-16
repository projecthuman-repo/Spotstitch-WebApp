import { useEffect, useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { add, chevronRight } from "../../../assets/icons";

import '../Market.css'
import { useAddAddressMutation } from "../../../services/address";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../features/User/userSlice";

function AddAddressModal() {
    const [show, setShow] = useState(false);
    // address form states
    const [addressName, setAddressName] = useState("")
    const [addressLine, setAddressLine] = useState("")
    const [aptNumber, setAptNumber] = useState("")
    const [city, setCity] = useState("")
    const [province, setProvince] = useState("")
    const [country, setCountry] = useState('Canada')
    const [postalCode, setPostalCode] = useState("")

    // redux
    const address = useSelector(state => state.user?.address)
    const [addAddress] = useAddAddressMutation()
    const dispatch = useDispatch()

    const selectProvinces = [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland and Labrador",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"
    ];

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const adrline = aptNumber ? `, ${aptNumber}` : ""
            const address = {
                name: addressName,
                addressLines: [`${addressLine}${adrline}`],
                city: city,
                province: province,
                country: country,
                postalCode: postalCode
            }
            const res = await addAddress({ address: address })
            if (res.error) throw new Error(res.error.data.error.message)
            if (res.data?.status == "ok") {
                const wallet = res.data?.wallet
                await dispatch(setUserData({ address: address }))
                window.location.reload();
                handleClose()
            }
        } catch (error) {
            console.log('rejected', error.message)
        }
    }



    return (
        <>
            <button className="btn" onClick={handleShow}><img src={add} className="px-3" />Add new address</button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal"
                dialogClassName="modal-dialog-centered"
                contentClassName="modal-content"
                aria-labelledby="modal"
                backdrop="static"
                size="lg"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <button className='btn flip' onClick={handleClose}><img src={chevronRight} /></button>
                    <Modal.Title className="ms-auto p-3">
                        <div className="mx-auto fs-24" style={{ color: '#333333' }}>Add new address</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mt-2 mx-4">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s"
                                value={addressName} onChange={(e) => { setAddressName(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.addressLine">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control as="input" placeholder='' className="round-s"
                                value={addressLine} onChange={(e) => { setAddressLine(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.apt">
                            <Form.Control as="input" placeholder='Apt, suite, etc. (optional)' className="round-s"
                                value={aptNumber} onChange={(e) => { setAptNumber(e.target.value) }} />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.city">
                            <Form.Label>Town/city</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" value={city}
                                onChange={(e) => { setCity(e.target.value) }} />
                        </Form.Group>

                        <Row>
                            <Col lg={7}>
                                <Form.Group className="mt-2 ms-4 form-address" itemID="address.province">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Select
                                        className="round-s"
                                        id="province"
                                        name="province"
                                        required
                                        defaultValue={""}
                                        onChange={(event) => {
                                            setProvince(event.target.value)
                                        }}>
                                        <option value="" disabled>State/Province</option>
                                        {selectProvinces.map((province, index) => {
                                            return <option value={province}
                                                key={`checkout_address_province_${province}_${index}`}>
                                                {province}
                                            </option>
                                        })}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col lg={5}>
                                <Form.Group className="mt-2 me-4" itemID="address.postalCode">
                                    <Form.Label>Postal code</Form.Label>
                                    <Form.Control type='input' placeholder="" className="round-s" value={postalCode}
                                        onChange={(e) => { setPostalCode(e.target.value) }} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mt-2 mx-4" itemID="address.city">
                            <Form.Label>Country/region</Form.Label>
                            <Form.Control type='input' placeholder="Canada (CA)" className="round-s border-0 fw-600" disabled />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.phone">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />
                        </Form.Group>
                        <div className="underline my-4"></div>
                        <div className="d-flex">
                            <button className="btn-address-save p-2 px-5 mx-auto" type="submit">Save and continue</button>
                        </div>


                    </Form>
                </Modal.Body>


            </Modal>
        </>
    )


}

export default AddAddressModal