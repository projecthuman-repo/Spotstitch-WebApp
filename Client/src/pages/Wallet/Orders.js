import { Col, Container, Row } from "react-bootstrap"
import { cart } from "../../assets/icons"


function Orders() {

    const orders = [{
        id: 'SIE74F94NWOIDJ3847',
        date: '',
        price: '',
        product: {
            name: 'Product name',
            description: 'this description is for testing purposes only',
            seller: 'David',
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
            <Row>

            </Row>
            {orders.map(order => {
                return <div className="m-3 border-card">
                    <Row className="light g-0 px-3 py-1 border-card-top">
                        <Col lg={2}>
                            <div>Order Date & Time</div>
                            <div>{order.date}</div>
                        </Col>
                        <Col lg={1}>
                            <div>Total</div>
                            <div>{order.price}</div>
                        </Col>
                        <Col lg={7}>
                            <div>Order ID</div>
                            <div>{order.id}</div>
                        </Col>
                        <Col lg={2} className="float-end d-flex flex-column"><button className="btn btn-order bg-white m-2">Order Details</button></Col>
                    </Row>
                    <Row className="g-0 px-3 py-1 mb-3">
                        <Col lg={3}>
                            <div className="align-middle py-1"><img src={cart} /> Seller name: {order.product.seller}</div>

                            <img src={order.product.img} height={125} width={200} className="order-img" />
                        </Col>
                        <Col lg={7}>
                            <br />
                            <p className="my-1">{order.product.name}</p>
                            <p>{order.product.description}</p>
                        </Col>
                        <Col lg={2} className="float-end d-flex flex-column">
                            <button className="btn btn-order lighter m-2 mt-auto" >Write Review</button>
                            <button className="btn btn-order lighter m-2 mb-auto">Buy Again</button>
                        </Col>
                    </Row>
                </div>
            })}


        </section>
    </Container>
}

export default Orders