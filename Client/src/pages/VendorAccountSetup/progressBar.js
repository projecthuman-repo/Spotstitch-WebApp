import { current } from "@reduxjs/toolkit";
import React, {useState} from "react";
import { Nav } from "react-bootstrap";

function ProgressBar(currentProgress, setCurrentProgress){
    const links = 
    [
        {name: "Business Preference", path: "/BusinessPreferences"},
        {name: "Business Name", path: "/BusinessName"},
        {name: "Business Category", path: "/BusinessCategory"}
    ]
    const active = "mx-2 btn-nav btn-active text-center";
    const nav = "mx-2 btn-nav text-center";
    return (
    <>
        <div className="d-flex align-items-center">

        </div>
        <div className="progress-container">
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
        </div>
    </>)
}

export default ProgressBar