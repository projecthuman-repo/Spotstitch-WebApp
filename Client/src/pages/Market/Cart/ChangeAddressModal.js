import { useState } from "react";
import { checked, chevronRight } from "../../../assets/icons";
import { Modal, Row } from "react-bootstrap";
import AddAddressModal from "./AddAddressModal";

function ChangeAddressModal() {

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

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    return (
        <>
            <button className="btn" onClick={handleShow}><img src={chevronRight} /></button>

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
                <Modal.Header className="py-0 border-0" closeButton>
                    <Modal.Title className="ms-auto p-3">
                        <div className="mx-auto fs-24" style={{ color: '#333333' }}>Change Address</div>
                    </Modal.Title>


                </Modal.Header>
                <Modal.Body className="px-5 py-3">
                    <div className="d-flex p-3">
                        <div className="d-flex flex-column">
                            <div>{address.name}</div>
                            <div>{address.addressLine}</div>
                            <div>{address.city}, {address.province} {address.postalCode}, {address.country}</div>
                            <div>{address.extension} {address.number}</div>
                        </div>
                        <div className="ms-auto my-auto"><img src={checked}/></div>
                    </div>

                    <div className="underline my-3"></div>

                    <div className="d-flex ">
                        <AddAddressModal />
                    </div>
                </Modal.Body>


            </Modal>
        </>
    )
}

export default ChangeAddressModal