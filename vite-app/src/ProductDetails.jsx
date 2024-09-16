import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
 
  useEffect(() => {
    function apifun() {
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProducts([data]));
    }
    apifun();
  }, []);
  return (
    <>
      <h1>ProductDetails</h1>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h6>ID:{item.id}</h6>
            <h6>Title:{item.title}</h6>
            <h6>Brand:{item.brand}</h6>
            <h6>
              Price;
              {item.price}
            </h6>
            <h6>DiscountPercentage:{item.discountPercentage}</h6>
            <h6>Stock:{item.stock}</h6>
            <h6>
              WarrantyInformation
              {item.warrantyInformation}
            </h6>
            <h6>Weight{item.weight}</h6>
          </div>
        );
      })}
    </>
  );
};
