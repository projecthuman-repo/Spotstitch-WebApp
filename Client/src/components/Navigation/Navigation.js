import './Navigation.css'
//import { Person, Mail } from "@material-ui/icons";
import React, { useState } from "react";
import { Nav, Navbar, Container, Button, NavDropdown, Form, Modal, Badge } from "react-bootstrap";
import { useLogoutUserMutation } from "../../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { BsCircleFill } from 'react-icons/bs'
import { IoNotificationsSharp } from 'react-icons/io5'
import { AiOutlineSearch } from 'react-icons/ai'

import logo from "../../assets/sslogo.png";
import SideNav from './SideNav';

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
    <Navbar className="shadow p-3 overflow-auto">
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
            <Nav.Link href="#" className="mx-2 btn-nav">HOME</Nav.Link>
            <Nav.Link href="##" className="mx-2 btn-nav">GAME</Nav.Link>
            <Nav.Link href="###" className="mx-2 btn-nav">EVENTS</Nav.Link>
            <Nav.Link href="####" className="mx-2 btn-nav">MARKET</Nav.Link>
            <Nav.Link href="#####" className="mx-2 btn-nav">EXPLORE</Nav.Link>
          </Nav>

          <div className={"vr"}></div>
          <Nav>
            <Nav.Item><button className="btn border-0" ><BsCircleFill /></button></Nav.Item>
            <Nav.Item>
              <button className="btn border-0" ><IoNotificationsSharp /></button>
              <Badge></Badge>
            </Nav.Item>
            <Nav.Item>
              <SideNav />
            </Nav.Item>
          </Nav>

          <></>
        </Navbar.Collapse>




      </Container>
    </Navbar>


  );
}