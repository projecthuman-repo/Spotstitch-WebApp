import { Col, Container, Row } from "react-bootstrap"
import ItemCard from "../../../components/listingCard/ItemCard"
import Details from "../Product/Details"
import { useState } from "react"

function Preview() {
    const [show, setShow] = useState(false)
    const itemEx = {
        title: 'Listing Name',
        description: 'Description of the product',
        rating: 'Price: $$',
        img: '',
        tags: ['tag', 'tag']
    }

    const switchPreview = () => {
        setShow(!show)
    }

    function CardPreview() {
        return <Row className="d-flex">
            <Col lg={3} className="mx-auto">
                <ItemCard item={itemEx} link={setShow} />
                <div className="d-flex flex-column">
                    <div className="mx-auto p-2 flex-row">
                    </div>
                    <p className="my-auto mx-auto p-2">Your Listing is Posted!</p>
                    <p className="my-auto mx-auto p-2">Click Here to preview or edit</p>
                </div>
            </Col>
        </Row>
    }

    function ProductPreview() {
        return <Row className="d-flex py-4">
            <Col className="mx-auto" lg={9}>
                <Details />
            </Col>

        </Row>
    }

    return <Container className="my-4">
        {show ? <ProductPreview /> : <CardPreview />}
    </Container>
}

export default Preview