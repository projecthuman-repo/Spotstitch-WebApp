import { useEffect, useState } from "react";
import { checked, chevronRight } from "../../../assets/icons";
import { Modal, Row } from "react-bootstrap";
import AddAddressModal from "./AddAddressModal";
import { useDispatch, useSelector } from "react-redux";
import { useGetAddressQuery } from "../../../services/address";
import { setUserData } from "../../../features/User/userSlice";

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

    const addresses = useSelector(state => state.user?.address)
    const selectedAddress = useSelector(state => state.user?.selectedAddress)
    const addressResponse = useGetAddressQuery().data
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    useEffect(() => {
        if (addressResponse) {
            dispatch(setUserData({ address: addressResponse.address }))
        }
    }, [addressResponse])

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const selectAddress = (address) => {
        const exists = addresses?.filter((addr) => {
            return addr._id == address._id
        })
        if (exists) {
            dispatch(setUserData({ selectedAddress: address }))
            console.log(address)
        }
        
    }

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
                    {addressResponse && addressResponse.address.map((address, index) => {
                        return <div className="d-flex p-3" key={`address_checkout_${index}`} onClick={() => { selectAddress(address) }}>
                            <div className="d-flex flex-column">
                                <div>{address.name}</div>
                                <div>{address.addressLine}</div>
                                <div>{address.city}, {address.province} {address.postalCode}, {address.country}</div>
                                <div>+1 {address.number}</div>
                            </div>
                            <div className="ms-auto my-auto">{selectedAddress && selectedAddress._id == address._id && <img src={checked} />}</div>
                        </div>
                    })}


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