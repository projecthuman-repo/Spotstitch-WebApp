import React from 'react';
import { Modal, ListGroup, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "./AccountSwitcher1.css";
import { useSelector } from 'react-redux';

const AccountSwitcherDialog = ({ show, handleClose }) => {
    const accounts = [
        { username: 'John Doe', picture: 'https://via.placeholder.com/40' },
        { username: 'Jane Smith', picture: 'https://via.placeholder.com/40' },
    ];

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
    
    console.log("OTHER ACCOUTNS--", OtherAccountsList)

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className='head'>
                <Modal.Title className="ms-auto">Switch accounts</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {accounts.map((account, index) => (
                        <ListGroup.Item key={index} action onClick={() => console.log("Switch to account:", account.username)}>
                            <div className="d-flex align-items-center">
                                <img
                                    src={account.picture} // Fallback to a default avatar if picture is not available
                                    alt={account.username}
                                    className="rounded-circle me-3"
                                    height={40}
                                    width={40}
                                />
                                <span className="account-username">{account.username}</span>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <div className="createaccount1">
                    <Link to="/usersignup">
                            Log into an existing account
                    </Link>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AccountSwitcherDialog;
