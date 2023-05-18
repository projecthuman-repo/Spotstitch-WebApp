import { Col, Row, Card } from "react-bootstrap";

function BusinessPreview({ message }) {

    const tagsEx = ['business tag', 'business tag']
    return <Card className="my-2 round-xl content">
        <Card.Body>
            <Row>
                <Col><img className='avatar shadow' lg={2} src={""} width={52} height={52}></img></Col>
                <Col lg={9}>
                    <h5 className="mb-0 fs-16 fw-500">Business name</h5>
                    <p className="mt-0 fs-15">Business Description</p>
                    {
                        message &&
                        <div>
                            <p className="mb-0 fs-14 t-light">message</p>
                            <p className="mt-0 fs-14">{message}</p>
                        </div>
                    }
                    <Row>
                        {tagsEx.map(tag => {
                            return <Col className="light rounded-pill mx-1 py-1 fs-10" lg={4}>{tag}</Col>
                        })}
                    </Row>

                    <span>
                        <button className='btn light my-1'>{message ? 'Approve' : 'Promote'}</button>
                        <button className='btn light mx-2 my-1'>{message ? 'Reject' : 'Remove'}</button>
                    </span>
                </Col>
            </Row>
        </Card.Body>
    </Card>

}

export default BusinessPreview