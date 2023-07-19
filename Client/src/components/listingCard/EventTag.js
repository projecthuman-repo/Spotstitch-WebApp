import { Col } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

const EventTag = ({ tag }) => {
    return (
        <Col className="light rounded-pill me-2 py-1 my-1 fs-10" lg={5} xs={10}>
            <span className=''>
                <div className='mx-1 d-inline'>{tag}</div>
                <div className='float-end mx-1'>
                    <AiOutlineClose style={{ backgroundColor: 'white', borderRadius: '25px' }} />
                </div>
            </span>
        </Col>
    );
};

export default EventTag