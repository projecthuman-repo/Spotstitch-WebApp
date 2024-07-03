import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from 'react-icons/rx'
import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"
import { inventory, messages, profile, settings, wallet } from '../../assets/icons'

import store from "../../store";

import { useGlobalContext } from '../../context/GlobalContext';

import AccountSwitcherDialog from "./AccountSwitcherDialog";   {/*Newly Added*/}
import AddAccount from './AddAccount';                       {/*Newly Added*/}
import "./Navigation.css";



function SideNav() {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showSwitchDialog, setShowSwitchDialog] = useState(false);    {/*Newly Added*/}
    const [showAddAccount, setShowAddAccount] = useState(false);      {/*Newly Added*/}

    const links = [
        { icon: profile, name: "Profile", destination: "/profile" },
        { icon: messages, name: "Messages", destination: "/messages" },
        { icon: inventory, name: "Inventory", destination: "/inventory" },
        { icon: wallet, name: "Wallet", destination: "/wallet" },
        { icon: settings, name: "Settings", destination: "/settings" }
    ]
    const username = useSelector((state) => state.user.username);
    const picture = useSelector(state => state.user.picture);
    const userType = useSelector((state) => state.user.userType);
    const email = useSelector((state) => state.user.email);
    const followers = useSelector((state) => state.user.followers);
    const following = useSelector((state) => state.user.following);
    
    const OtherAccountsList = () => {
        // Retrieve otherAccounts from Redux store
        const otherAccounts = useSelector((state) => state.user.otherAccounts);
      
        // Ensure otherAccounts is an object and not null
        if (typeof otherAccounts !== 'object' || otherAccounts === null) {
          return null;
        }
      
        // Convert Object to Array
        const otherAccountsArray = Object.entries(otherAccounts);
        return otherAccountsArray;
    }      
    
    const otherAccounts = OtherAccountsList();

    // console.log("state.user", useSelector((state) =>state.user));
    // console.log("Other Accs", otherAccounts);
    // console.log("Other Accs 0", otherAccounts[0]);
    // console.log("Other Accs 1", otherAccounts[0][1][0]);
    

    const {
        sent, setSent,
        mainEmail, setMainEmail,
        accPassword, setAccPassword,
        switchUser, setSwitchUser
      } = useGlobalContext();
    
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        console.log(user)
        setShow(true);
    };
    const handleShowSwitchDialog = () => setShowSwitchDialog(true);       {/*Newly Added*/}
    const handleCloseSwitchDialog = () => setShowSwitchDialog(false);     {/*Newly Added*/}
    const handleShowAddAccount = () => setShowAddAccount(true);         {/*Newly Added*/}
    const handleCloseAddAccount = () => setShowAddAccount(false);       {/*Newly Added*/}

    const handleLogout = () => {
        console.log("logging out")
        store.dispatch({type: "RESET"})
        localStorage.clear()
        window.location.reload();
    }

    const handleAddAccount = () =>{
        setMainEmail(email);
        setSent(true);
        handleClose();
        handleShowAddAccount(); 
    }

    const switchAccount = () =>{
        
        store.dispatch({ type: "RESET" });
        localStorage.clear();

        navigate("/start");
    }

    return (
        <>
            <button className="btn border-0" onClick={handleShow}><RxHamburgerMenu size={30} /></button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal right"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="right-side-modal"
            >
                <Modal.Header className="border-no pb-0" closeButton>

                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 mx-3 d-flex flex-column">
                    <section>
                        <Row>
                            <Col lg={4} ><img className='avatar' src={picture} height={88} width={88}></img></Col>
                            <Col lg={8} >
                                <p className="nopadding fs-16 fw-500 my-1">{username || "user"}</p>
                                <p className="nopadding fs-15 fw-300 my-1">{userType || "account type"}</p>
                                <p className="nopadding fs-15 fw-400">{email || "email"}</p>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col lg={3} xs={4} className="text-center">
                                <span>{following || 0}</span>
                                <p>Following</p>
                            </Col>
                            <Col lg={3} xs={4} className="text-center">
                                <span>{followers || 0}</span>
                                <p>Followers</p>
                            </Col>
                            <Col lg={3} xs={4} className="text-center">
                                <span>5</span>
                                <p>Layers</p>
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            {
                                links.map(link => {
                                    return <Link key={link.name} to={link.destination} className="btn text-start my-1" onClick={handleClose}><Row>
                                        <Col sm={1} lg={1} className="mx-2"><img src={link.icon}></img></Col>
                                        <Col sm={5} lg={6} className="fs-20">{link.name}</Col>
                                    </Row></Link>
                                })
                            }
                        </Row>
                    </section>

                    <section className="mt-auto">
                        <Row className="mb-1"><Col><button className="btn nopadding mt-auto"><p className="fw-600 mb-0">Your Accounts</p></button></Col></Row>
                        <Row><Col className="mt-1"><button className="btn nopadding mt-auto" onClick={handleShowSwitchDialog}>Switch Account</button></Col></Row>
                        <Row><Col className="mt-1"><button className="btn nopadding mt-auto" onClick={handleAddAccount}>Add Account</button></Col></Row>
                        {['Convert to vendor'].map(option => {
                            return <Row key={option}><Col><button className="btn nopadding">{option}</button></Col></Row>
                        })}
                        <Row><Col><button className="btn nopadding mt-3"><p className="fw-600 mb-0">More Options</p></button></Col></Row>

                        {/* {['See terms of service', 'See privacy policy'].map(option => {
                            return <Row key={option}><Col><button className="btn nopadding">{option}</button></Col></Row>
                        })} */}
                        <Row><Col className="mt-1"><Link className="btn nopadding" to="/terms-of-service">See terms of service</Link></Col></Row>
                        <Row><Col className="mt-1"><Link className="btn nopadding" to="/privacy-policy">See privacy policy</Link></Col></Row>

                        <br/>

                        {otherAccounts && otherAccounts.map((value) => {
                            return <Row key={value[0]}><Col onClick={(e) => {setAccPassword(value[1][3]); setSwitchUser(value[1][0]); switchAccount()}}><button className="btn nopadding">{value[1][0]}</button></Col></Row>
                        })}
                        {/* <Row className="mb-1"><Col><button className="btn nopadding mt-auto"><p className="fw-600 mb-0">Switch Accounts</p></button></Col></Row> */}

                        <Row>
                            {/* <Col className="mt-5"><button className="btn nopadding" onClick={handleAddAccount}>Add Account</button></Col> */}
                            <Col className="mt-5"><button className="btn nopadding" onClick={handleLogout}>Log Out</button></Col>
                        </Row>
                    </section>

                </Modal.Body>
            </Modal>
            <AccountSwitcherDialog show={showSwitchDialog} handleClose={handleCloseSwitchDialog} />  {/*Newly Added*/}
            <AddAccount show={showAddAccount} handleClose={handleCloseAddAccount} />  {/*Newly Added*/}


        </>
    );
};

export default SideNav