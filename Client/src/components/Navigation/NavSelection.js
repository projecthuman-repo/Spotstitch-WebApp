import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavSelection({icon, text, link = '/'}) {

    return <Link to={link}><button className="btn text-start"><Row>
    <Col lg={1}>
        <img src={icon}></img>
    </Col>
    <Col lg={10} className="fs-20">
        {text}
    </Col>
</Row></button></Link>
}

export default NavSelection