import { Container } from "react-bootstrap"
import ItemCard from "../../components/listingCard/ItemCard"

function Recommendation() {

    const itemEx = { 
        title: 'Listing Name', 
        description: 'Description of the product',
        rating: 'Price: $$',
        img: '', 
        tags: ['tag','tag']}

    return <div className="content-border-s round-s py-2 px-4">
        <div className="fs-18 fw-600">More to Love</div>
        <ItemCard item={itemEx} className='p-2'/>
        <ItemCard item={itemEx} className='p-2'/>
        <ItemCard item={itemEx} className='p-2'/>
    </div>
}

export default Recommendation