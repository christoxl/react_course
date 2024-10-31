import { Link, useNavigate } from'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return <>
    <h1>Home Page</h1>
    <p>
      Go to the <Link to="products">Products Page</Link> to see some products.
    </p>
    <p>
      <button onClick={navigateHandler}>Go to Products Page</button>
    </p>
  </>
}

export default HomePage;