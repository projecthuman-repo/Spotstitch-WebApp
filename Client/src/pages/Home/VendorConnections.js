import { Col, Form, Row, Card, Container } from "react-bootstrap";
import BusinessPreview from "./BusinessPreview";

function VendorConnections() {
    const pendingEx = ['1', '2'];
    const busEx = ['1', '2', '3', '4'];

    return <Container className="my-4 content-border-l">
        <Row>
            <h4>Pending Requests</h4>
            {
                pendingEx.map(pending => {
                    return <Col lg={5}><BusinessPreview message={'test'} /></Col>
                })
            }
        </Row>
        <Row>
        <h4>Connected Business</h4>
            {busEx.map(bus => {
                return <Col lg={5}><BusinessPreview /></Col>
            })}
        </Row>
    </Container>

}

export default VendorConnections