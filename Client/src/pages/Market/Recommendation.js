import { Container } from "react-bootstrap"
import ItemCard from "../../components/listingCard/ItemCard"

function Recommendation() {
    return <div className="content-border-s round-s py-2 px-4">
        <div className="fs-18 fw-600">More to Love</div>
        <ItemCard item={{img:''}} className='p-2'/>
        <ItemCard item={{img:''}} className='p-2'/>
        <ItemCard item={{img:''}} className='p-2'/>
    </div>
}

export default Recommendation