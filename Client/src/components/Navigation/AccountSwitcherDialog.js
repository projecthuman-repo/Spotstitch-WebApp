import React from 'react';
import { Modal, ListGroup, Button } from 'react-bootstrap';
import "./AccountSwitcher.css";

const AccountSwitcherDialog = ({ show, handleClose }) => {
    const accounts = [
        { username: 'John Doe', picture: 'https://via.placeholder.com/40' },
        { username: 'Jane Smith', picture: 'https://via.placeholder.com/40' },
    ];

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Switch accounts</Modal.Title>
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
                <div className="text-center mt-3">
                    <Button variant="link" className="existing-account-link" onClick={() => console.log("Navigate to login screen")}>
                        Log into an existing account
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AccountSwitcherDialog;
