import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Account() {
    const userDetails = ['Name', 'Username', 'Bio'];
    const links = ['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Google'];
    const [isLinked, setIsLinked] = useState([]);
    const [formState, setFormState] = useState({});
    
    const user = useSelector((state) => state.user);
    const username = user.username || "Username";
    const picture = user.picture;

    function onLink(newLink) {
        const linked = [...isLinked];
        if (linked.includes(newLink)) linked.splice(linked.indexOf(newLink), 1);
        else linked.push(newLink);
        setIsLinked(linked);
    }

    function handleChange(e, field) {
        setFormState({ ...formState, [field]: e.target.value });
    }

    async function handleUpdate() {
        const updatedFields = Object.fromEntries(
            Object.entries(formState).filter(([key, value]) => value)
        );
        console.log('Updated Fields:', updatedFields);
        const response = await fetch('/v1/settings/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedFields),
        });
    
        if (response.ok) {
            alert('User updated successfully');
        } else {
            alert('Error updating user');
        }
    }

    async function handleDelete() {
        if (!window.confirm('Are you sure? This action cannot be undone.')) return;
        console.log('User ID:', user.id);
        const response = await fetch(`/v1/user/${user.id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert('User deleted successfully');
            // Optionally: Redirect or update UI state
        } else {
            alert('Error deleting user');
            console.log(err);
        }
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
                        <Col lg={2}><img className='avatar' src={picture} height={92} width={92} alt="avatar"></img></Col>
                        <Col lg={10}>
                            <p className="nopadding fs-16 fw-500 my-1">{username}</p>
                            <p className="nopadding fs-15 fw-400"><button className="btn btn-link nopadding">Change profile photo</button></p>
                        </Col>
                    </Row>
                    {userDetails.map((section, index) => (
                        <Row key={index} className="my-2">
                            <Col lg={6}><span className="align-middle">{section}</span></Col>
                            <Col lg={4}>
                                <Form.Control 
                                    type="input" 
                                    className="round-s" 
                                    onChange={(e) => handleChange(e, section.toLowerCase())}
                                />
                            </Col>
                        </Row>
                    ))}
                </Row>
                <Row className="justify-content-center">
                    <button className="button-18" onClick={handleUpdate}>Update</button>
                </Row>
            </section>
            <section className="border-bottom mx-0">
                <Row className="m-3">
                    <Col lg={12} className="my-2 fw-600 fs-16 my-0">Link Accounts</Col>
                    {links.map((link, index) => (
                        <Row key={index} className="my-2">
                            <Col lg={10}><span className="align-middle">{link}</span></Col>
                            <Col lg={2}>
                                <button className="btn link w-100" onClick={() => { onLink(link) }}>
                                    {!isLinked.includes(link) ? "Link" : "Unlink"}
                                </button>
                            </Col>
                        </Row>
                    ))}
                </Row>
            </section>
            <section className="mx-0">
                <Row className="justify-content-center m-3">
                    <button className="button-18 delete-button" onClick={handleDelete}>Delete Account</button>
                </Row>
            </section>
        </Container>
    );
}

export default Account;

