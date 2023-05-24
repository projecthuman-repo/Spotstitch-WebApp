import { Col, Container, Row, Card } from "react-bootstrap";
import ItemCard from "../../components/listingCard/ItemCard";
import { useEffect, useState } from "react";

function Inventory() {
  const [items, setItems] = useState([])

  const itemEx = [
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] }
  ]

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
      {itemEx.map(item=>{
        return <Col lg={3} className="">
          <ItemCard item={ item } />
        </Col>
      })}
      
    </Row>
  </Container>
}

export default Inventory