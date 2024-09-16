import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    function apifun() {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data.products));
    }
    apifun();
  },[]);

 const handleRowClick=(product)=>{

    navigate(`/productDetails/${product.id}`);
    
 }

  return (
    <>
      <table>
        <tr>
          <th>Title</th>
          <th>Availabiltiy Status</th>
          <th>Brand</th>
          <th>DiscountPercentage</th>
          <th>Price</th>
        </tr>
        {products.map((product) => {
          return (
            <tr key={product.id} onClick={()=>handleRowClick(product)}>
              <td>{product.title}</td>
              <td>{product.availabilityStatus}</td>
              <td>{product.brand}</td>
              <td>{product.discountPercentage}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Product;
