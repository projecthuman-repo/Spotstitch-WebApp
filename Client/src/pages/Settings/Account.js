//Client/src/pages/Settings/Account.js

import { useState } from "react";
import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

function Account() {
    const userDetails = ['Name', 'Username', 'Bio']
    const links = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Google']
    const [isLinked, setIsLinked] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        bio: ''
    });
    const [showModal, setShowModal] = useState(false);

    const user = useSelector((state) => state.user);
    const username = user.username || "Username";
    const picture = user.picture; 

    function onLink(newLink) {
        const linked = [...isLinked]
        if (linked.includes(newLink)) linked.splice(linked.indexOf(newLink), 1)
        else linked.push(newLink)
        setIsLinked(linked)
    }

    function handleInputChange(e, field) {
        setFormData({ ...formData, [field]: e.target.value });
    }

    function handleUpdateAll() {
        // Send request to update account details
        console.log("Updated data:", formData);
        // Add actual logic to update the account details using an API call
    }

    function handleDeleteAccount() {
        // Send request to delete account
        console.log("Account deleted");
        setShowModal(false);
    }

    function handleShowModal() {
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <Container className="content-border-l round-s my-3 g-0">
            <section className="border-bottom mx-0">
                <Row className="m-3">
                    <Col lg={12} className="fs-20 fw-500">Account</Col>
                </Row>
            </section>

            <section className="border-bottom mx-0">
                <Row className="m-3">
                    <Row>
                        <Col lg={2}><img className='avatar' src={picture} height={92} width={92}></img></Col>
                        <Col lg={10}>
                            <p className="nopadding fs-16 fw-500 my-1">{username}</p>
                            <p className="nopadding fs-15 fw-400"><button className="btn btn-link nopadding">Change profile photo</button></p>
                        </Col>
                    </Row>
                    {userDetails.map(section => {
                        return (
                            <Row className="my-2" key={section}>
                                <Col lg={6}><span className="align-middle">{section}</span></Col>
                                <Col lg={6}>
                                    <Form>
                                        <Form.Control 
                                            type="input" 
                                            className="round-s" 
                                            value={formData[section.toLowerCase()]} 
                                            onChange={(e) => handleInputChange(e, section.toLowerCase())} 
                                        />
                                    </Form>
                                </Col>
                            </Row>
    
                        )
                    })}
                </Row>
                <Row className="m-3 justify-content-center">
                    <Col lg={4} className="d-flex justify-content-center">
                        <Button 
                            className="btn-update" 
                            onClick={handleUpdateAll}
                        >
                            Update
                        </Button>
                    </Col>
                </Row>
            </section>

            <section className="border-bottom mx-0">
                <Row className="m-3">
                    <Col lg={12} className="my-2 fw-600 fs-16 my-0">Link Accounts</Col>
                    {links.map(link => {
                        return (
                            <Row className="my-2" key={link}>
                                <Col lg={10}><span className="align-middle">{link}</span></Col>
                                <Col lg={2}>
                                    <button className="btn link w-100" onClick={() => { onLink(link) }}>
                                        {!isLinked.includes(link) ? "Link" : "Unlink"}
                                    </button>
                                </Col>
                            </Row>
                        )
                    })}
                    <Col lg={12} className="fs-20 fw-500"></Col>
                </Row>
            </section>

            <section className="border-bottom mx-0">
                <Row className="m-3 justify-content-center">
                    <Col lg={4} className="d-flex justify-content-center">
                        <Button 
                            className="btn-delete"
                            onClick={handleShowModal}
                        >
                            Delete Account
                        </Button>
                    </Col>
                </Row>
            </section>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDeleteAccount}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}

export default Account;

// import { useState } from "react";
// import { Col, Container, Form, Row, Button, Modal } from "react-bootstrap";
// import { useSelector } from "react-redux";

// function Account() {
//     const userDetails = ['Name', 'Username', 'Bio']
//     const links = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Google']
//     const [isLinked, setIsLinked] = useState([]);
//     const [name, setName] = useState('')
//     const [showModal, setShowModal] = useState(false);

//     const user = useSelector((state) => state.user);
//     const username = user.username || "Username";
//     const picture = user.picture; 

//     function onLink(newLink) {
//         const linked = [...isLinked]
//         if (linked.includes(newLink)) linked.splice(linked.indexOf(newLink), 1)
//         else linked.push(newLink)
//         setIsLinked(linked)
//     }

//     function handleDeleteAccount() {
//         // Send request to delete account
//         console.log("Account deleted");
//         setShowModal(false);
//     }

//     function handleShowModal() {
//         setShowModal(true);
//     }

//     function handleCloseModal() {
//         setShowModal(false);
//     }

//     return (
//         <Container className="content-border-l round-s my-3 g-0">
//             <section className="border-bottom mx-0">
//                 <Row className="m-3">
//                     <Col lg={12} className="fs-20 fw-500">Account</Col>
//                 </Row>
//             </section>

//             <section className="border-bottom mx-0">
//                 <Row className="m-3">
//                     <Row>
//                         <Col lg={2}><img className='avatar' src={picture} height={92} width={92}></img></Col>
//                         <Col lg={10}>
//                             <p className="nopadding fs-16 fw-500 my-1">{username}</p>
//                             <p className="nopadding fs-15 fw-400"><button className="btn btn-link nopadding">Change profile photo</button></p>
//                         </Col>
//                     </Row>
//                     {userDetails.map(section => {
//                         return (
//                             <Row className="my-2" key={section}>
//                                 <Col lg={6}><span className="align-middle">{section}</span></Col>
//                                 <Col lg={4}>
//                                     <Form>
//                                         <Form.Control type="input" className="round-s" />
//                                     </Form>
//                                 </Col>
//                                 <Col lg={2}><button className="btn link w-100">Update</button></Col>
//                             </Row>
//                         )
//                     })}
//                 </Row>
//             </section>

//             <section className="border-bottom mx-0">
//                 <Row className="m-3">
//                     <Col lg={12} className="my-2 fw-600 fs-16 my-0">Link Accounts</Col>
//                     {links.map(link => {
//                         return (
//                             <Row className="my-2" key={link}>
//                                 <Col lg={10}><span className="align-middle">{link}</span></Col>
//                                 <Col lg={2}>
//                                     <button className="btn link w-100" onClick={() => { onLink(link) }}>
//                                         {!isLinked.includes(link) ? "Link" : "Unlink"}
//                                     </button>
//                                 </Col>
//                             </Row>
//                         )
//                     })}
//                     <Col lg={12} className="fs-20 fw-500"></Col>
//                 </Row>
//             </section>

//             <section className="border-bottom mx-0">
//                 <Row className="m-3 justify-content-center">
//                     <Col lg={4} className="d-flex justify-content-center">
//                         <Button 
//                             className="btn-delete"
//                             onClick={handleShowModal}
//                         >
//                             Delete Account
//                         </Button>
//                     </Col>
//                 </Row>
//             </section>

//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Confirm Deletion</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Are you sure you want to delete your account? This action cannot be undone.</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="danger" onClick={handleDeleteAccount}>
//                         Delete
//                     </Button>
//                     <Button variant="secondary" onClick={handleCloseModal}>
//                         Cancel
//                     </Button>


//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }

// export default Account;