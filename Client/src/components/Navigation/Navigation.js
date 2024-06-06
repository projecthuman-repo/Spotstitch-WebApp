import "./Navigation.css";
//import { Person, Mail } from "@material-ui/icons";
import React, { useState } from "react";
import {
	Nav,
	Navbar,
	Container,
	Button,
	NavDropdown,
	Form,
	Modal,
	Badge,
	Row,
	Col,
} from "react-bootstrap";
import { useLogoutUserMutation } from "../../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { BsCircleFill } from "react-icons/bs";
import { IoNotificationsSharp } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

import logo from "../../assets/sslogo.png";
import SideNav from "./SideNav";
import { Link, useLocation } from "react-router-dom";

export default function Topbar({ menuOpen, setMenuOpen }) {
	const user = useSelector((state) => state.user);
	const picture = useSelector(state => state.user.picture)
	const [logoutUser] = useLogoutUserMutation();
	const location = useLocation();
	const nav = "mx-2 btn-nav text-center";
	const active = "mx-2 btn-nav btn-active text-center";
	const links = [
		{ path: "/", name: "HOME" },
		{ path: "/game", name: "GAME" },
		{ path: "/events", name: "EVENTS" },
		{ path: "/market", name: "MARKET" },
		{ path: "/explore", name: "EXPLORE" },
	];
	async function handleLogout(e) {
		e.preventDefault();
		await logoutUser(user);
		// redirect to home page
		window.location.replace("/");
	}


	const [query, setQuery] = useState('')
	const handleQuery = (e) => {
		setQuery(e.target.value)
	}


	return (
		<Navbar className="p-3 overflow-auto nav-shadow" expand="lg">
			<Container
				className="d-flex justify-content-center"
				style={{ maxWidth: "1440px" }}
				fluid
			>
				<img
					src={logo}
					width={"40px"}
					height={"40px"}
					className="d-inline-block align-top mx-2"
					alt="Logo"
				/>
				<Navbar.Brand href="#" className="fs-16 fw-700">
					SPOTSTITCH
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav>
						<Form className="m-2">
							<div className="input-group">
								<input
									className="form-control border-end-0 border"
									type="search"
									placeholder="Search"
									onChange={handleQuery}
								/>
								<span className="input-group-append">
									<button
										className="btn border-start-0 border ms-n5"
										type="button"
									>
										<AiOutlineSearch />
									</button>
								</span>
							</div>
						</Form>
					</Nav>

					<Nav className="ms-auto my-0 " navbarScroll>
						{links.map((link) => {
							return (
								<Nav.Link
									key={link.name}
									href={link.path}
									className={
										location.pathname == link.path
											? active
											: nav
									}
								>
									{link.name}
								</Nav.Link>
							);
						})}
					</Nav>

					<div className="vr d-none d-sm-block d-xs-block m-2"></div>

					<Nav className="mx-4">
						<Row>
							<Col lg={3} className="g-0 mx-1 d-flex">
								<img
									src={picture}
									className="avatar content-border-s shadow m-auto"
									width={"40px"}
									height={"40px"}
								></img>
							</Col>
							<Col lg={3} className="g-0 mx-1 d-flex">
								<Link
									className="btn m-auto"
									to={"/notifications"}
								>
									<IoNotificationsSharp size={25} />
								</Link>
								<Badge></Badge>
							</Col>
							<Col lg={3} className="g-0 mx-1 d-flex">
								<div className="m-auto">
									<SideNav />
								</div>
							</Col>
						</Row>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
/*


*/
