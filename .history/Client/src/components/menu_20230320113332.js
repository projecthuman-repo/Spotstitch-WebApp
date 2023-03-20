import "./menu.scss";
import React from "react";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";


export default function Menu({ menuOpen, setMenuOpen }) {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation();
  async function handleLogout(e) {
      e.preventDefault();
      await logoutUser(user);
      // redirect to home page
      window.location.replace("/");
  }
  return (
   <>
 
    <div className={"menu "+(menuOpen && "active")}>
    <div>
        {user &&(
          <div className="userInfo">
          <img src={user.picture} style={{ width: 80, height: 80, marginRight: 10, objectFit: "cover", borderRadius: "50%" }} />
            <div>{user.name}</div>
            <div>{user.email}</div>         
          </div>                                
                              )}

   </div>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Profile</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Messages</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Inventory</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Wallet</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Settings</a>
        </li>
      </ul>
      
    </div>
   </>
  );
}
