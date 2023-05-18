import { Col, Row } from "react-bootstrap"

function NavSelection({icon, text}) {

    return <button className="btn text-start"><Row>
        <Col lg={1}>
            <img src={icon}></img>
        </Col>
        <Col lg={10} className="fs-20">
            {text}
        </Col>
    </Row></button>
}

export default NavSelection