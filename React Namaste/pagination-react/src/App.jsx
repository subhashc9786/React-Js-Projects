
import { useEffect, useState } from 'react';
import './App.css'


const ProductCard = ({ image, title }) => {
  return (
    <div className='product-card' >
      <img src={image} alt={title} className='product-img' />
      <span>{title}</span>
    </div>
  )
}

function App() {

  const [products, setProducts] = useState();
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();
    setProducts(json.products)
  }

  useEffect(() => {
    fetchData();
  }, []);

  const PAGE_SIZE = 10;
  const totalProducts = products?.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (n) => {
    setCurrentPage(n);
  }

  const goToPrePage = () => {
    setCurrentPage(pre => pre - 1);
  }

  const goToNextPage = () => {
    setCurrentPage(pre => pre + 1);
  }


  return !products?.length ? (<h1>No Products found</h1>
  ) : (<div className='App'>
    <h1>Pagination</h1>

    <div className='products-container'>
      {products.slice(start, end).map(p => (
        <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
      ))}
    </div>

    <div className='pagination-container'>
      <button disabled={currentPage === 0} className='page-number' onClick={() => goToPrePage()}>{"<"}</button>
      {[...Array(noOfPages).keys()].map((n) => (
        <span className={`page-number ${(n === currentPage ? "active" : "")}`} onClick={() => handlePageChange(n)}>{n}</span>
      ))}
      <button disabled={currentPage == noOfPages} className='page-number' onClick={() => goToNextPage()}>{">"}</button>
    </div>
  </div>)
}

export default App
