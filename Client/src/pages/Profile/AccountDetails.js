import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Modal, Row, Col, Container, Button, Form, Image } from "react-bootstrap";
import { Link } from "react-router-dom"

import { editAvatar, editBanner, removeBanner, settings } from "../../assets/icons";
import { useUpdateBioMutation, useUpdateFirstNameMutation, useUpdateLastNameMutation, useUpdatePictureMutation, useUpdateWebsiteMutation } from "../../services/userApi";
import { setUserData } from "../../features/User/userSlice";

function AccountDetails() {
    const user = useSelector((state) => state.user);
    const picture = useSelector(state => state.user.picture)
    const imageRef = useRef()
    const [image, setImage] = useState("")
    const [tab, setTab] = useState(1);
    const [updatePicture, { }] = useUpdatePictureMutation()
    // const [updateDisplayName, { }] = useUpdateDisplayNameMutation()
    // const [displayName, setNameInput] = useState('');

    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    // Use these to handle banner image upload from frontend (copy steps for picture, picture sets profile picture)
    const banner = useSelector(state => state.user.banner)
    const bannerImageRef = useRef()
    const [bannerImg, setBanner] = useState("")

    useEffect(() => {
        setImage(picture)
    }, [])

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    function tabOnChange(i) {
        setTab(i);
    }

    const convertToBase64 = async () => {
        const reader = new FileReader()
        reader.readAsDataURL(imageRef.current.files[0])
        reader.onload = () => {
            setImage(reader.result)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {

            if (image) {
                const res = await updatePicture({ picture: image })
                if (res.error) throw new Error(res.error)
                if (res.data?.status == "ok") {
                    await dispatch(setUserData({ picture: image }))
                }
            }
            
            if (firstName) {
                const fNameRes = await updateFirstName({ firstName: firstName })
                if (fNameRes.error) throw new Error(fNameRes.error)
                if (fNameRes.data?.status == "ok") {
                    await dispatch(setUserData({ firstName: firstName }))
                }
            }

            if (lastName) {
                const lNameRes = await updateLastName({ lastName: lastName })
                if (lNameRes.error) throw new Error(lNameRes.error)
                if (lNameRes.data?.status == "ok") {
                    await dispatch(setUserData({ lastName: lastName }))
                }
            }

            if (bio) {
                const bioRes = await updateBio({ bio: bio })
                if (bioRes.error) throw new Error(bioRes.error)
                if (bioRes.data?.status == "ok") {
                    await dispatch(setUserData({ bio: bio }))
                }
            }

            if (website) {
                const webRes = await updateWebsite({ website: website })
                if (webRes.error) throw new Error(webRes.error)
                if (webRes.data?.status == "ok") {
                    await dispatch(setUserData({ website: website }))
                }
            }

        } catch (error) {
            console.log('rejected', error)
        }

    }

    function handleChangeImage() {
        imageRef.current.click()
    }

    // Handle firstName, changes first name of user
    const [firstName, setFirstName] = useState('')
    const [updateFirstName, { }] = useUpdateFirstNameMutation()
    const handleFirstName = (e)  => {
        setFirstName(e.target.value)
    }

    // Handle lastName, changes last name of user
    const [lastName, setLastName] = useState('')
    const [updateLastName, { }] = useUpdateLastNameMutation()
    const handleLastName = (e)  => {
        setLastName(e.target.value)
    }

    // Handle bio, changes bio of user
    const [bio, setBio] = useState('')
    const [updateBio, { }] = useUpdateBioMutation()
    const handleBio = (e)  => {
        setBio(e.target.value)
    }


    // Handle website, changes website of user
    const [website, setWebsite] = useState('')
    const [updateWebsite, { }] = useUpdateWebsiteMutation()
    const handleWebsite = (e)  => {
        setWebsite(e.target.value)
    }


    return (
        <>
            <button className="btn btn-profile" onClick={handleShow}>Edit Account</button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="modal"
                backdrop="static"
                size="lg"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <Row className="w-100">
                        <Col>
                            <div className="d-flex justify-content-evenly">
                                <button className={tab == 1 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(1)}>
                                    <p className='nopadding s-16 fw-500'>Account</p></button>

                            </div>
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 p-0">
                    <Row className="d-flex">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group itemID="account.picture" hidden>
                                <Form.Control
                                    name="picture"
                                    type='file'
                                    ref={imageRef}
                                    accept=".png,.jpg,.jpeg,.webp"
                                    onChange={(e) => {
                                        console.log(e.target.files[0])
                                        if (e.target.files[0]) {
                                            let buffer = e.target.files[0]
                                            convertToBase64()
                                        }

                                    }} />
                            </Form.Group>
                            <div className="bg-banner row g-0 pt-5"
                                style={{ backgroundImage: `url(${''}), linear-gradient(#D9D9D9 100%, #FFFFFF 1%)` }}>
                                <Col lg={3} sm={6} xs={7} className="d-flex">
                                    <div className="position-relative">
                                        <img
                                            type="button"
                                            className="avatar content-border-l mx-4"
                                            src={image}
                                            width={139}
                                            height={139}
                                            onClick={() => { handleChangeImage(); }}
                                        />
                                        <img
                                            type="button"
                                            className="position-absolute top-50 start-50 translate-middle"
                                            src={editAvatar}
                                            width={30}
                                            eight={30}
                                            onClick={() => { handleChangeImage(); }}
                                        />
                                    </div>

                                </Col>
                                <Col lg={6} className="d-flex justify-content-evenly" sm={6} xs={5}>
                                    <img src={editBanner} className="" height={54} width={54} />
                                    <img src={removeBanner} className="" height={54} width={54} />
                                </Col>
                                <Col lg={3} sm={0} xs={0}>
                                </Col>
                            </div>

                            <Form.Group className="mt-2 mx-4" itemID="account.name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='input' placeholder="first name" onChange={handleFirstName}/>
                            </Form.Group>

                            <Form.Group className="mt-2 mx-4" itemID="account.name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='input' placeholder="last name" onChange={handleLastName}/>
                            </Form.Group>

                            <Form.Group className="mt-2 mx-4" itemID="account.name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='input' placeholder="last name" onChange={handleChangeLastName}/>
                            </Form.Group>
               
                            <Form.Group className="mt-2 mx-4" itemID="account.bio">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control as="textarea" placeholder='old bio' rows={4} style={{ resize: 'none' }} onChange={handleBio}/>
                            </Form.Group>

                            <Form.Group className="mt-2 mx-4" itemID="account.website">
                                <Form.Label>Website</Form.Label>
                                <Form.Control type='input' placeholder="website" onChange={handleWebsite}/>
                            </Form.Group>

                            <button type="submit" className="btn btn-profile my-2 mx-4 float-end">Save</button>

                        </Form>
                    </Row>
                </Modal.Body>


            </Modal>
        </>
    )
}

export default AccountDetails