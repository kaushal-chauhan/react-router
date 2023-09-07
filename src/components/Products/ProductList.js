import {Link, Outlet} from "react-router-dom"
function ProductList() {
    console.log("Products")
    return (
        <div>
            <input type="search" placeholder="Search.." />
            <h1>Product Listing Page</h1>
            <nav>
                <Link to="reviews" >Reviews</Link>
                <Link to="share-with" >Share with</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default ProductList