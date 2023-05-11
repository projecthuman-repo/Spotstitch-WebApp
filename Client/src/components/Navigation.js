import './Navigation.css'
//import { Person, Mail } from "@material-ui/icons";
import React, { useState } from "react";
import { Nav, Navbar, Container, Button, NavDropdown, Form, Modal, Badge } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { BsCircleFill } from 'react-icons/bs'
import { IoNotificationsSharp } from 'react-icons/io5'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import logo from "../assets/sslogo.png";


const SideModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <button className="btn border-0" onClick={handleShow}><RxHamburgerMenu /></button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="side-modal"
        contentClassName="side-modal-content"
        size="lg"
        aria-labelledby="side-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="side-modal">Side Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your modal content goes here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default function Topbar({ menuOpen, setMenuOpen }) {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }
  return (
    <Navbar height={'85px'} className="shadow">
      <Container className="d-flex justify-content-center" style={{ maxWidth: '1440px' }} fluid >

        
        <img
          src={logo}
          width={'40px'}
          height={'40px'}
          className="d-inline-block align-top"
          alt="Logo"
        />
        <Navbar.Brand href="#"><strong>SPOTSTICH</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <div className="input-group">
              <input
                className="form-control border-end-0 border"
                type="search"
                placeholder="Search"
              />
              <span className="input-group-append">
                <button className="btn border-start-0 border ms-n5" type="button">
                  <AiOutlineSearch />
                </button>
              </span>
            </div>
          </Form>

          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">GAME</Nav.Link>
            <Nav.Link href="#">EVENTS</Nav.Link>
            <Nav.Link href="#">MARKET</Nav.Link>
            <Nav.Link href="#">EXPLORE</Nav.Link>
          </Nav>

          <div className={"vr"}></div>
          <Nav>
            <Nav.Item><button className="btn border-0" ><BsCircleFill /></button></Nav.Item>
            <Nav.Item>
              <button className="btn border-0" ><IoNotificationsSharp /></button>
              <Badge></Badge>
            </Nav.Item>
            <Nav.Item>
              <SideModal />
            </Nav.Item>
          </Nav>

          <></>
        </Navbar.Collapse>




      </Container>
    </Navbar>


  );
}

/*

<div className={"topbar " + (menuOpen && "active")}>
      
      <div className="wrapper">
        <div className="left">
            
          <span href="#intro" className="logo">
           SPOTSTICH
          </span>
          <div className="itemContainer"> 
          <div className="wrap">
             <div className="search">
                <input type="text"  className="searchTerm" autocomplete="off" placeholder="Search"  />
                <button type="submit" class="searchButton"><i class="fa fa-search"></i> </button>
            </div>
          </div>
          </div>   
        </div> 
        <div className="itemContainer"> 
          <span className="topbarItem"><a>HOME</a></span>
          <span className="topbarItem"><a>GAME</a></span>
          <span className="topbarItem"><a>EVENTS</a></span>
          <span className="topbarItem"><a>MARKET</a></span>
          <span className="topbarItem"><a>EXPLORE</a></span>
          <div class="verticalLine">
          </div>       
        </div>
        {user && (
                          <NavDropdown className="userImg"
                                title={
                                    <>
                                        <img src={user.picture} style={{ width: 30, height: 30, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
                                        {user.name}
                                    </>
                                }
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="./profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="./wallet">Wallet</NavDropdown.Item>
                                <NavDropdown.Item href="./transaction">Transaction History</NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Button variant="danger" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}



       
        <div className="right">
      

           
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>

*/