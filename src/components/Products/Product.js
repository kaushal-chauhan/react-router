import { useParams } from "react-router-dom"
function Product() {
    const params = useParams()
    return (
        <div>Product {params.productId}</div>
    )
}
export default Product
