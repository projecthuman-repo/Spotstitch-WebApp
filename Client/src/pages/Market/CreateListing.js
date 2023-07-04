import { Col, Container, Form, Row } from "react-bootstrap"
import { addPhoto, playVideo } from "../../assets/icons"

import './Market.css'

function CreateListing() {
    const boxStyle = 'content-border-l round-s m-1 p-2 pb-4 my-3'
    return <Container className="content-border-l round-s my-4 px-5 py-4">
        <Row className="g-0">
            <div className="fs-18 fw-600">Create new Listing</div>
            <div className="fs-14">Add some photos and details about your item. Fill out what you can for now - you’ll be able to edit this later.</div>
        </Row>

        <Row className={boxStyle}>
            <div className="fs-18 fw-600">Photos</div>
            <Col lg={6}>

                <div className="fs-14">Add as many as you can so buyers can see every detail.</div>
                <Row className="my-2">
                    <Col lg={4} className="">
                        <div className="img-new d-flex round-s" style={{ backgroundImage: `url(${''}), #D9D9D9` }}>
                            <div className="d-flex flex-column m-auto">
                                <img src={addPhoto} className="mx-auto" />
                                <div>Add photo</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="">
                        <div className="img-new d-flex round-s" style={{ backgroundImage: `url(${''}), #D9D9D9` }}>
                            <div className="d-flex flex-column m-auto">
                                <img src={addPhoto} className="mx-auto" />
                                <div>Add photo</div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className="">
                        <div className="img-new d-flex round-s" style={{ backgroundImage: `url(${''}), #D9D9D9` }}>
                            <div className="d-flex flex-column m-auto">
                                <img src={addPhoto} className="mx-auto" />
                                <div>Add photo</div>
                            </div>
                        </div>
                    </Col>
                </Row>



            </Col>
            <Col lg={2}>
                <div className="fs-14">Adjust Thumbnail</div>
                <div className="img-new d-flex round-s my-2" style={{ backgroundImage: `url(${''}), #D9D9D9` }}>
                    <div className="d-flex flex-column m-auto">
                        <img src={addPhoto} className="mx-auto" />
                        <div>Add photo</div>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
                <div className="fs-14">
                    Lorem ipsum dolor sit amet consectetur.
                    Risus molestie elit sit placerat nullam vulputate nibh facilisis proin.
                    Massa feugiat quam egestas feugiat morbi senectus diam placerat ultricies.
                    Magna morbi imperdiet amet arcu. Venenatis pellentesque amet gravida potenti in ac metus diam.
                    Donec amet leo egestas et sit amet ornare. Vestibulum pretium at nibh quam congue augue id.
                    In ullamcorper ut sed cursus nisi porta gravida iaculis et.
                </div>
            </Col>
        </Row>
        <Row className={boxStyle}>
            <div className="fs-18 fw-600">Video</div>
            <div className="fs-14">Bring your product to life with a 5 to 15 second video - it could help you drive more sales.
                The video won't feature sound, so let your product do the talking!</div>
            <Col lg={3}>
                <div className="img-new d-flex round-s my-2" style={{ backgroundImage: `url(${''}), #D9D9D9` }}>
                    <div className="d-flex flex-column m-auto">
                        <img src={playVideo} className="mx-auto" />
                        <div>Add video</div>
                    </div>
                </div>
            </Col>
            <Col lg={6}>
                <div className="fs-14">
                    Lorem ipsum dolor sit amet consectetur.
                    Risus molestie elit sit placerat nullam vulputate nibh facilisis proin.
                    Massa feugiat quam egestas feugiat morbi senectus diam placerat ultricies.
                    Magna morbi imperdiet amet arcu. Venenatis pellentesque amet gravida potenti in ac metus diam.
                    Donec amet leo egestas et sit amet ornare. Vestibulum pretium at nibh quam congue augue id.
                    In ullamcorper ut sed cursus nisi porta gravida iaculis et.
                </div>
            </Col>
        </Row>
        <Row className={boxStyle}>
            <div className="fs-18 fw-600">Listing Detail</div>
            <div className="fs-14">Tell the world all about your item and why they'll love it.</div>
            <Form itemID="listing">
                <Row>
                    <Col>
                        <Form.Group className="pt-2" itemID="listing.title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="pt-2" itemID="listing.color">
                            <Form.Label>Primary Colour</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="pt-2" itemID="listing.category">
                            <Form.Label>Product category</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="pt-2" itemID="listing.tags">
                            <Form.Label>Product tags</Form.Label>
                            <Form.Control type='input' placeholder="" className="round-s" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <Form.Group className="pt-2" itemID="listing.description">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as='textarea' placeholder="" className="round-s" rows={4} style={{ resize: 'none' }} />

                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="pt-2" itemID="listing.productType">
                            <Form.Label>Product Type</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    label="Physical"
                                    name="type"
                                    type='radio'
                                    id={`type-physical`}
                                    defaultChecked
                                />
                                <Form.Check
                                    inline
                                    label="Digital"
                                    name="type"
                                    type='radio'
                                    id={`type-digital`}
                                />
                            </div>

                        </Form.Group>
                    </Col>
                    <Col className="d-flex">
                        <button className="ms-auto mt-auto btn-publish p-2 px-5">Publish</button>
                    </Col>
                </Row>

            </Form>
        </Row>
    </Container>
}

export default CreateListing