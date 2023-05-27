import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


/*
    Component for inpage navigation
*/ 

function PageNav({ options, tabFn, tab = 0, className='' }) {
    const [index, setIndex] = useState(tab);

    function tabOnChange(i) {
        tabFn(i);
        setIndex(i);
    }
    return <>
        <Container className={className ? classname : "mt-3 content-border-l round-s"}>
            <Row >
                <Col>
                    <div className="d-flex justify-content-evenly">
                        {options.map((option, i) => {
                            return <button className={index == i ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(i)}>
                                <p className='nopadding s-16 fw-500'>{option}</p></button>
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    </>

}

export default PageNav