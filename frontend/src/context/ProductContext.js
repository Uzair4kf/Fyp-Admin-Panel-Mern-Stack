import { createContext, useEffect, useState } from "react";
import axios from "axios";
const ProductContext = createContext(null);

const ProductState = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");

      setProducts(data);
    };
    fetchproducts();
  }, [i]);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default { ProductState, ProductContext };
