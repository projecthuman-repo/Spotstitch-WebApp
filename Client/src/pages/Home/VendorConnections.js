import { Col, Form, Row, Card, Container } from "react-bootstrap";
import BusinessPreview from "./BusinessPreview";

function VendorConnections() {
    const pendingEx = ['1', '2'];
    const busEx = ['1', '2', '3', '4'];

    return <Container className="my-4 content-border-l round-s">
        <Row>
            <p className="fs-18 fw-600 my-2">Pending Requests</p>
            {
                pendingEx.map(pending => {
                    return <Col lg={5}><BusinessPreview message={'test'} /></Col>
                })
            }
        </Row>
        <Row>
        <p className="fs-18 fw-600 my-2">Connected Business</p>
            {busEx.map(bus => {
                return <Col lg={5}><BusinessPreview /></Col>
            })}
        </Row>
    </Container>

}

export default VendorConnections