import "./topbar.scss";
//import { Person, Mail } from "@material-ui/icons";
import React from "react";
import { Nav, Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.jpg";

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
    
  );
}
