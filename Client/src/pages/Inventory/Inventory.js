import { Col, Container, Row, Card } from "react-bootstrap";
import ItemCard from "../../components/listingCard/ItemCard";
import { useEffect, useState } from "react";

import './inventory.css'


function Inventory() {
  const [items, setItems] = useState([])
  const [categories, SetCategories] = useState([])
  const [filters, setFilters] = useState([]);

  const itemEx = [
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['General tag 1', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['General tag 1', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['General tag 1', 'General tag 2'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] },
    { title: 'item name', description: 'Description of the item', rating: 'Trader rating', tags: ['item tag', 'item tag'] }
  ]

  const filterEx = ['General tag 1', 'General tag 2', 'General tag 3', 'General tag 4']

  function editFilter(tag) {
    const newFilters = [...filters];
    if (filters.includes(tag)) newFilters.splice(newFilters.indexOf(tag), 1)
    else newFilters.push(tag)
    setFilters(newFilters)
  }

  function matchFilters(tags) {
    let hasTags = true;
    for (const filter of filters) {
      if (tags.includes(filter) == false) {
        hasTags = false;
      }
    }
    return hasTags
  }

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
    <Row className="mt-3 py-3 px-5 content-border-l round-s">
      <Col lg={12} className="my-3">
        {filterEx.map(filter => {
          const style = filters.includes(filter) ? 'btn post mx-2 my-1 px-5 pt-0 pb-1 fs-15 fw-400' :
            'btn light mx-2 my-1 px-5 pt-0 pb-1 fs-15 fw-400'

          return <button className={style} onClick={() => editFilter(filter)}>{filter}</button>
        })}
      </Col>
      {itemEx.map(item => {
        if (filters.length > 0) {
          const match = matchFilters(item.tags)
          return match ? <Col lg={3} className=""><ItemCard item={item} className="" /></Col> : null
        } else return <Col lg={3} className=""><ItemCard item={item} className="" /></Col>
      })}

    </Row>
  </Container>
}

export default Inventory