import "./home.css";
import React, { useEffect, useRef, useState } from "react";
import {
	Col,
	Container,
	Form,
	Row,
	Card,
	Popover,
	OverlayTrigger,
} from "react-bootstrap";

import { HiOutlinePencil } from "react-icons/hi";

import {
	BsCameraVideo,
	BsCloudUpload,
	BsEmojiSmile,
	BsImage,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import CreateLayerModal from "./CreateLayerModal";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Home({ vendor = false }) {
	const navigate = useNavigate();
	let userState = useSelector((state) => state.user);

	if (!userState) {
		navigate("/login");
		return <div>loading</div>;
	}
	console.log(first);
	const { user } = userState;
	const dispatch = useDispatch();

	const [filters, setFilters] = useState([]);
	const [modalShow, setModalShow] = useState(false);
	const [popoverShow, setPopoverShow] = useState(false);

	const popover = (
		<Popover id="popover-basic" className="mt-5">
			<Popover.Body>
				<p className="btn-layer py-3 px-1 m-0">Edit Layers</p>
				<hr className="m-0" />
				<p
					className="btn-layer py-3 px-1 m-0"
					onClick={() => {
						setModalShow(true);
						setPopoverShow(false);
					}}
				>
					Create new layer
				</p>
			</Popover.Body>
		</Popover>
	);

	const layerExamples = ["these", "are", "test", "layers", "replace later"];
	const avatar = "";

	function editFilter(layerName) {
		const newFilters = [...filters];
		if (filters.includes(layerName))
			newFilters.splice(newFilters.indexOf(layerName), 1);
		else newFilters.push(layerName);
		setFilters(newFilters);
	}

	function tabOnChange(i) {
		setTab(i);
	}

	function addAttachment(e) {
		e.preventDefault();
	}

	return (
		<div>
			<Container className="my-4 ">
				<CreateLayerModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
				<Row>
					<Col lg="3">
						<Card className="my-3 content-border-l round-s">
							<Card.Body>
								<Row className="mb-3">
									<Col lg={3}>
										<img
											className="avatar shadow"
											src={avatar}
											width={50}
											height={50}
										></img>
									</Col>
									<Col
										lg={9}
										className="ps-3 pt-2 overflow-auto d-flex justify-content-center align-items-center "
									>
										<p className="fw-500">
											{user.username}
										</p>
									</Col>
								</Row>

								<Row>
									<Form>
										<Form.Group>
											<Form.Control
												className="lighter input"
												as="textarea"
												placeholder="Share your life!"
												rows={4}
											/>

											<Row className="px-1">
												<span>
													<button
														className="btn nopadding"
														onClick={addAttachment}
													>
														<BsImage size={20} />
													</button>
													<button
														className="btn nopadding"
														onClick={addAttachment}
													>
														<BsCameraVideo
															size={20}
														/>
													</button>
													<button
														className="btn nopadding"
														onClick={addAttachment}
													>
														<GoLocation size={20} />
													</button>
													<button
														className="btn nopadding"
														onClick={addAttachment}
													>
														<BsCloudUpload
															size={20}
														/>
													</button>
													<button
														className="btn nopadding"
														onClick={addAttachment}
													>
														<BsEmojiSmile
															size={20}
														/>
													</button>
												</span>
											</Row>
											<button className="btn light float-end mt-4 round-l px-3 py-1 fw-400">
												<p className="fs-15 nopadding">
													Post
												</p>
											</button>
										</Form.Group>
									</Form>
								</Row>
							</Card.Body>
						</Card>

						<Card className="my-3 content-border-l round-s">
							<Card.Body>
								<div
									className="row p-2"
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<div className="col-lg-10 s-16 f-mid">
										{vendor ? "Connections" : "Layers"}{" "}
									</div>
									<div className="col-lg-2">
										<OverlayTrigger
											trigger="click"
											placement="right"
											overlay={popover}
											show={popoverShow}
										>
											<button
												className="btn text-left"
												onClick={() =>
													setPopoverShow(!popoverShow)
												}
											>
												<HiOutlinePencil />
											</button>
										</OverlayTrigger>
									</div>
									<hr></hr>
									{layerExamples.map((layer) => {
										/* switch to api data here */
										return (
											<Row>
												<Col>
													<button
														className={
															filters.includes(
																layer
															) == true
																? "btn btn-outline-0 post m-2 text-start w-100 shadow"
																: "btn btn-outline-0 bg-light m-2 text-start w-100"
														}
														onClick={() => {
															editFilter(layer);
														}}
													>
														<p className="nopadding fs-16 fw-400">
															{layer}
														</p>
													</button>
												</Col>
											</Row>
										);
									})}
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Outlet />
				</Row>
			</Container>
		</div>
	);
}

export default Home;
