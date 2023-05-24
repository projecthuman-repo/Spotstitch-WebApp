import { Col, Container, Row, Card } from "react-bootstrap";
import ItemCard from "../../components/listingCard/ItemCard";

function Inventory() {
  return <Container className="my-4">
    <Row className="mt-3 content-border-l round-s">
      <Col>
            <div className="d-flex justify-content-evenly">
              <button className={"btn-nav active p-3"}>
                <p className="nopadding s-16 fw-500">Inventory</p>
              </button>
            </div>
      </Col>
    </Row>
    <Row className="mt-3 content-border-l round-s">
      <Col lg={3}>
        <ItemCard item={{name: 'test', description: 'test', rating:0 }}/>
      </Col>
    </Row>
  </Container>
}

export default Inventory