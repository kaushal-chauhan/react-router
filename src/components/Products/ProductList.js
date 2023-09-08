import {Link, Outlet} from "react-router-dom"
function ProductList() {
    console.log("Products")
    return (
        <div>
            <input type="search" placeholder="Search.." />
            <h1>Product Listing Page</h1>
            <Link to="/products/1" >Product 1</Link>
            <Link to="/products/2" >Product 2</Link>
            <Link to="/products/3" >Product 3</Link>
            <nav>
                <Link to="reviews" >Reviews</Link>
                <Link to="share-with" >Share with</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default ProductList