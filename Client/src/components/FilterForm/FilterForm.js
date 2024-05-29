import './FilterForm.css'

function filterForm({ priceFilters = [], categories = [] }) {
    return <div className='border-filter p-3 pb-4 mx-2 my-3'>
        <p>Events</p>
        <input type='text' className='form-control' />

        <p>Filters</p>
        <p>Toronto, Ontario . Within 20 Km</p>
        <hr style={{ color: '#757575' }} />

        <div className='text-nowrap'>
            <p>Price Range</p>
            {
                priceFilters.map((price, index) => {
                    return <div className='form-check'>
                        <input type='radio' className='form-check-input' name='price' id={`priceFilter_${index}`} />
                        <label className='form-check-label'>{price}</label>
                    </div>
                })
            }
        </div>
        <div className='d-block d-lg-flex mt-2 mx-2 mx-sm-0 text-center'>
            <input type='text' className='form-control form-control-sm mx-1' placeholder='$' />
            <span className='my-auto'>-</span>{' '}
            <input type='text' className='form-control form-control-sm mx-1' placeholder='$' />
            <button className='btn btn-primary btn-sm mt-2 my-lg-auto' data-bs-toggle="button" >
                Go
            </button>
        </div>
        <hr style={{ color: '#757575' }} />

        <p>Categories</p>
        {
            categories.map((category, index) => {
                return <div className='form-check'>
                    <input
                        type='checkbox'
                        className='form-check-input round-label'
                        name={`${category}`}
                        id={`categoryFilter_${index}`}
                    />
                    <label className='form-check-label'>Category Name</label>
                </div>
            })
        }

    </div>
}

export default filterForm