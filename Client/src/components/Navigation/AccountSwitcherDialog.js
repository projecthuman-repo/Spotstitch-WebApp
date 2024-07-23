import React from 'react';
import { Modal, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "./AccountSwitcher1.css";
import { useSelector } from 'react-redux';
import { useGlobalContext } from '../../context/GlobalContext';
import store from '../../store';
import { useViewUserProfileMutation } from '../../services/userApi';

const AccountSwitcherDialog = ({ show, handleClose }) => {

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

    const switchAccount = () =>{
        
        store.dispatch({ type: "RESET" });
        localStorage.clear();
    
        console.log("SWITCHED~!!!@#!@#")
        // navigate("/start");
    }

    const {
        accPassword, setAccPassword,
        switchUser, setSwitchUser
      } = useGlobalContext();

    const otherAccounts = OtherAccountsList();

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className='head'>
                <Modal.Title className="ms-auto">Switch accounts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {otherAccounts && otherAccounts.map((value) => {
                        // value { username, picture, token, password }
                            console.log("VALUE: ", value)
                            return <ListGroup.Item key={value[0]} onClick={(e) => {
                                        setAccPassword(value[1][3]);
                                        setSwitchUser(value[1][0]);
                                        switchAccount();
                                    }}>

                            <button className="btn nopadding">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={value[1][1]} // Fallback to a default avatar if picture is not available
                                        alt={undefined}
                                        className="rounded-circle me-3"
                                        height={40}
                                        width={40}
                                    />
                                    {value[1][0]}
                                </div>
                            </button>
                        </ListGroup.Item>

                    })}
                </ListGroup>
                <div className="createaccount1">
                    <Link to="/usersignup"> 
                    {/* to switch Link to */}
                            Log into an existing account
                    </Link>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AccountSwitcherDialog;