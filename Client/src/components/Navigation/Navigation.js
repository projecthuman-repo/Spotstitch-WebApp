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
import { useLocation } from 'react-router-dom';

export default function Topbar({ menuOpen, setMenuOpen }) {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  const location = useLocation()
  const nav = "mx-2 btn-nav";
  const active = "mx-2 btn-nav active"
  const links = [
    { path: '/', name: 'HOME' },
    { path: '/game', name: 'GAME' },
    { path: '/events', name: 'EVENTS' },
    { path: '/market', name: 'MARKET' },
    { path: '/explore', name: 'EXPLORE' }
  ]
  async function handleLogout(e) {
    e.preventDefault();
    await logoutUser(user);
    // redirect to home page
    window.location.replace("/");
  }
  return (


    <Navbar className="shadow p-3 overflow-auto" expand="lg">
      <Container className="d-flex justify-content-center" style={{ maxWidth: '1440px' }} fluid >
        <img
          src={logo}
          width={'40px'}
          height={'40px'}
          className="d-inline-block align-top mx-2"
          alt="Logo"
        />
        <Navbar.Brand href="#" className='fs-16 fw-700'>SPOTSTICH</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
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
            className="ms-auto my-0 "
            navbarScroll
          >
            {
              links.map(link => {
                return <Nav.Link href={link.path} className={location.pathname == link.path ? active : nav}>{link.name}</Nav.Link>
              })
            }
          </Nav>

          <div className={"vr"}></div>
          <Nav>
            <Nav.Item>
              <button className="btn border-0" >
                <img
                  src=""
                  className='avatar'
                  width={'40px'}
                  height={'40px'}>
                </img>
              </button>
            </Nav.Item>
            <Nav.Item>
              <button className="btn border-0" ><IoNotificationsSharp size={20} /></button>
              <Badge></Badge>
            </Nav.Item>
            <Nav.Item>
              <SideNav />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
/*


*/