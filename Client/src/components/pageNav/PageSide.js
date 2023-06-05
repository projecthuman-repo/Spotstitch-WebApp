import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";

function PageSide({ options, tabFn, tab = 0, className = "" }) {


    const [index, setIndex] = useState(tab);

    function tabOnChange(i) {
        tabFn(i);
        setIndex(i);
    }

    return <Container className={className ? className : "my-3 content-border-l round-s g-0"}>
        <div className="d-flex row justify-content-center my-3 " >
            {options.map((option, i) => {
                return (
                    <Row className="nopadding my-1" id={`side_${option}_${i}`}>
                        <Col >
                            <button className={index == i ?
                                "btn btn-outline-0 light text-start w-100 px-3 py-1" :
                                "btn btn-outline-0 text-start w-100 px-3 py-1"}
                                onClick={() => tabOnChange(i)}>
                                <p className="nopadding fs-16 fw-400"> {option} </p>
                            </button>
                        </Col>
                    </Row>
                );
            })}
        </div>
    </Container>
}

export default PageSide