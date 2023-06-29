import { useState } from "react";
import { checked, chevronRight } from "../../assets/icons";
import { Modal, Row } from "react-bootstrap";

function DeliveryModal() {

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(0)

    const methods = [{
        name: 'Standard',
        price: 0.00,
        startDate: '5 April',
        endDate: '6 April',
    }, {
        name: 'Priority',
        price: 12.99,
        startDate: '30 March',
        endDate: '31 March',
    }]

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
                        <div className="mx-auto fs-24" >Change delivery method</div>
                    </Modal.Title>


                </Modal.Header>
                <Modal.Body className="px-5 py-3">
                    {methods.map((method, index) => {
                        return <div className="d-flex py-3">
                            <div onClick={()=>setSelected(index)} className="btn-delivery">
                                <div>{method.name} (CA${Number(method.price).toFixed(2)})</div>
                                <div className="fw-400 fs-14">Delivers {method.startDate} - {method.endDate}</div>
                            </div>
                            <div className="ms-auto my-auto">
                                {index == selected ? <img src={checked} /> : <></>}
                            </div>
                        </div>
                    })}

                </Modal.Body>


            </Modal>
        </>
    )
}

export default DeliveryModal