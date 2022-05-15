import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Button } from "react-bootstrap";
import Product from "./Product";
export default function SubcategoryDetail() {
  const [products, setProducts] = useState([]);
  const id = window.location.href.slice("51", "75");
  const subcategory = window.location.href.slice("76");

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");

      setProducts(data);
    };
    fetchproducts();
  }, []);
  const filteredProducts = products.filter((product) => {
    return product.category === subcategory;
  });
  console.log(filteredProducts);

  return (
    <>
      <Row>
        {filteredProducts.map((product, i) => {
          return <Product product={product} key={i} />;
        })}
      </Row>
    </>
  );
}
