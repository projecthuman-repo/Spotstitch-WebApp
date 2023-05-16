import { Col, Row, Card } from "react-bootstrap";

function BusinessPreview({ message }) {

    const tagsEx = ['business tag', 'business tag']
    return <Card className="my-2 round-xl content">
        <Card.Body>
            <Row>
                <Col><img className='avatar shadow' lg={2} src={""} width={52} height={52}></img></Col>
                <Col lg={9}>
                    <h5>Business name</h5>
                    <p>Business Description</p>
                    {
                        message &&
                        <div>
                            <p>message
                                <br />
                                {message}
                            </p>
                        </div>
                    }
                    <Row>
                        {tagsEx.map(tag => {
                            return <Col className="light rounded-pill">{tag}</Col>
                        })}
                    </Row>

                    <span>
                        <button className='btn light'>{message ? 'Approve' : 'Promote'}</button>
                        <button className='btn light'>{message ? 'Reject' : 'Remove'}</button>
                    </span>
                </Col>
            </Row>
        </Card.Body>
    </Card>

}

export default BusinessPreview