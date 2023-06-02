import { Col, Container, Row } from "react-bootstrap"
import { cart } from "../../assets/icons"


function Orders() {

    const orders = [{
        id: 'SIE74F94NWOIDJ3847',
        date: '',
        price: '',
        product: {
            name: 'David',
            description: '',
            seller: '',
            img: ''
        }
    }]

    return <Container className="content-border-l round-s my-3 g-0">
        <section className="border-bottom mx-0">
            <Row className="m-3">
                <Col lg={12} className="fs-20 fw-500">Orders</Col>
            </Row>
        </section>
        <section>
            <Row className="m-3">
                <Col lg={12}>Your Orders</Col>
            </Row>
            {orders.map(order => {
                return <Container className="m-3 border-card">
                    <Row className="light">
                        <Col lg={3}>
                            <p>Order Date & Time</p>
                            <p>{order.date}</p>
                        </Col>
                        <Col lg={2}>
                            <p>Total</p>
                            <p>{order.price}</p>
                        </Col>
                        <Col lg={5}>
                            <p>Order ID</p>
                            <p>{order.id}</p>
                        </Col>
                        <Col lg={2} className="float-end"><button>Order Details</button></Col>
                    </Row>
                    <Row>
                        <Col>
                            <p><img src={cart} /> Seller name: {order.product.seller}</p>
                            <img src={order.product.img} height={125} width={200} className="order-img" />
                        </Col>
                        <Col></Col>
                        <Col className="float-end">
                            <button>Write Review</button>
                            <button>Buy Again</button>
                        </Col>
                    </Row>
                </Container>
            })}


        </section>
    </Container>
}

export default Orders