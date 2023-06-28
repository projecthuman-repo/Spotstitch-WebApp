import { useState } from "react";
import { Form, Modal, Row } from "react-bootstrap";
import { add, chevronRight } from "../../assets/icons";

function AddAddressModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <button className="btn" onClick={handleShow}><img src={add} />Add new address</button>

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
                    <Row>
                        <button className='btn' onClick={handleClose}><img src={chevronRight} /></button>
                        <div className="justify-content-center">Add new address</div>

                    </Row>
                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 p-0">
                    <Form>
                        <Form.Group className="mt-2 mx-4" itemID="address.name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type='input' placeholder="" />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.addressLine">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control as="textarea" placeholder=''/>
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.apt">
                            <Form.Control as="textarea" placeholder='Apt, suite, etc. (optional)'  />
                        </Form.Group>

                        <Form.Group className="mt-2 mx-4" itemID="address.city">
                            <Form.Label>Town/City</Form.Label>
                            <Form.Control type='input' placeholder="" />
                        </Form.Group>

                        

                        <Form.Group className="mt-2 mx-4" itemID="address.city">
                            <Form.Label>Town/City</Form.Label>
                            <Form.Control type='input' placeholder="Canada (CA)" disabled/>
                        </Form.Group>


                        <button className="btn btn-profile my-2 mx-4 float-end">Save</button>

                    </Form>
                </Modal.Body>


            </Modal>
        </>
    )


}

export default AddAddressModal