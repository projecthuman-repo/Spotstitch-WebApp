import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import "./Navigation.css";

const LoginDialog = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Control type="email" placeholder="Email or Username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mb-3">
                        Sign In
                    </Button>
                    <div className="text-center mb-3">OR</div>
                    <Button variant="outline-dark" className="w-100 mb-2">
                        Sign in with Google
                    </Button>
                    <Button variant="outline-dark" className="w-100 mb-2">
                        Sign in with Facebook
                    </Button>
                    <Button variant="outline-dark" className="w-100 mb-2">
                        Sign in with PHC
                    </Button>
                    <div className="text-center mt-3">
                        <a href="#create-account" onClick={handleClose}>Need an account? Create your account</a>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default LoginDialog;
