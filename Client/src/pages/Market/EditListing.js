import { Col, Container, Form, Row } from "react-bootstrap"
import { addPhoto, cross, playVideo } from "../../assets/icons"

import './Market.css'
import ItemCard from "../../components/listingCard/ItemCard"
import { useRef, useState } from "react"

function EditListing() {
    const boxStyle = 'px-5 py-2'

    const [photos, setPhotos] = useState([])
    const [thumbnail, setThumbnail] = useState()
    const [video, setVideo] = useState()
    const inputRef = useRef();
    const thumbRef = useRef();
    const videoRef = useRef();

    const handleInputClick = (ref) => {
        ref.current?.click()
    }

    const handleFileChange = (ref, setRef) => {
        ref.current?.files && setRef(URL.createObjectURL(ref.current.files[0]));
    }

    const handlePhotoUpload = () => {
        if (inputRef.current?.files) {
            let temp = [...photos];
            temp.push(URL.createObjectURL(inputRef.current.files[0]))
            setPhotos(temp)
        }
    };

    const handlePhotoRemove = (index) => {
        let temp = [...photos]
        temp.splice(index, 1)
        setPhotos(temp)
    }

    const itemEx = {
        title: 'Listing Name',
        description: 'Description of the product',
        rating: 'Price: $$',
        img: '',
        tags: ['tag', 'tag']
    }


    return <Container className="my-4">
        <Row>
            <Col lg={9}>
                <Container className="content-border-l round-s my-0 px-0 py-1">
                    <Row className="g-0 underline px-5 py-3">
                        <div className="fs-18 fw-600">Edit Listing: Listing Name</div>
                        <div className="fs-14">Make adjustments to your existing listings.</div>
                    </Row>

                    <Row className={boxStyle}>
                        <div className="fs-18 fw-600">Photos</div>
                        <Col lg={11}>
                            <Row className="my-2">
                                {photos.map((img, index) => {
                                    return <Col lg={3} className="my-2" key={`edit-img-${index}`}>
                                        <div className="img-edit d-flex round-s"
                                            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
                                            {!img && <div className="d-flex flex-column m-auto ps-5">
                                                <div className="fs-24 img-text-light">IMAGE</div>
                                            </div>}

                                            <img src={cross} className="ms-auto mb-auto p-2 btn-close" onClick={() => handlePhotoRemove(index)} />

                                        </div>
                                    </Col>
                                })}
                                <Col lg={3} className="my-2">
                                    <div className="img-new d-flex round-s" style={{ backgroundImage: `url(${''})` }}>
                                        <button className="btn d-flex flex-column m-auto" onClick={() => { handleInputClick(inputRef) }}>
                                            <input
                                                ref={inputRef}
                                                onChange={handlePhotoUpload}
                                                className="d-none"
                                                type="file"
                                                accept="image/*"
                                            />
                                            <img src={addPhoto} className="mx-auto" />
                                            <div>Add photo</div>
                                        </button>
                                    </div>
                                </Col>

                            </Row>



                        </Col>


                    </Row>
                    <Row className={boxStyle}>
                        <div className="fs-18 fw-600">Video</div>
                        <Col lg={10}>
                            <div className='d-flex'>
                                <div className="d-flex round-s my-2 video-preview">
                                    {video && (
                                        <video className="d-flex video-preview" autoPlay={false} controls muted>
                                            <source src={video} type="video/mp4" />
                                            <source src={video} type="video/mkv" />
                                        </video>
                                    )}
                                    {!video && <button className="btn d-flex flex-column m-auto video-preview" onClick={() => { handleInputClick(videoRef) }}>
                                        <input
                                            ref={videoRef}
                                            onChange={() => { handleFileChange(videoRef, setVideo) }}
                                            className="d-none"
                                            type="file"
                                            accept="video/*"
                                        />
                                        <div className="m-auto">
                                            <img src={playVideo} className="mx-auto" />
                                            <div>Add video</div>
                                        </div>

                                    </button>}

                                </div>
                                <div className="fs-14 px-4 py-1">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Risus molestie elit sit placerat nullam vulputate nibh facilisis proin.
                                    Massa feugiat quam egestas feugiat morbi senectus diam placerat ultricies.
                                    Magna morbi imperdiet amet arcu. Venenatis pellentesque amet gravida potenti in ac metus diam.
                                    Donec amet leo egestas et sit amet ornare. Vestibulum pretium at nibh quam congue augue id.
                                    In ullamcorper ut sed cursus nisi porta gravida iaculis et.
                                </div>
                            </div>

                        </Col>
                    </Row>
                    <Row className={boxStyle}>
                        <div className="fs-18 fw-600">Listing Detail</div>
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

                            </Row>
                            
                        </Form>
                    </Row>
                </Container>

            </Col>

            <Col lg={3}>

                <div className="content-border-l round-s py-3 px-4 mb-4">
                    <div className="fs-18 fw-600">Finish Edit</div>
                    <div><button className="btn-checkout my-3 py-2 w-100" >Save</button></div>
                </div>



                <div className="content-border-l round-s py-2 px-4">
                    <div className="fs-18 fw-600">More to Love</div>
                    <ItemCard item={itemEx} className='p-2' />
                    <ItemCard item={itemEx} className='p-2' />
                    <ItemCard item={itemEx} className='p-2' />
                </div>
            </Col>
        </Row>


    </Container>
}

export default EditListing