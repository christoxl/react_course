import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
]

function ProductsPage() {
  return (
    <>
      <h1>Products Page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={`${prod.id}`}>{prod.name}</Link>
          </li>
        )
      )}
      </ul>
    </>
  )
}

export default ProductsPage;