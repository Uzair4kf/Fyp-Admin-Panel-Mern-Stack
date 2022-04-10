import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import axios from "axios";
export default function useAlan(products, setCurrentProducts) {
  console.log(products);
  const [alanInstance, setAlanInstance] = useState();
  const alanKey = `1924fbdbfa5f99b552c43824c5134e1c2e956eca572e1d8b807a3e2338fdd0dc/stage`;

  const [filterProducts, setFilterProducts] = useState();
  // useEffect(() => {
  //  const fetchproducts = async () => {
  //     const { data } = await axios.get("/ecom-product-list");
  //     setFilterProducts(data);
  //   };
  //   fetchproducts();
  // }, []);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        top: "15px",
        left: "15px",
        key: alanKey,
        onCommand: ({ command }) => {
          if ((command = "product")) {
            window.location.href =
              "http://localhost:3000/react/demo/ecom-product-list";
          }
          if ((command = "price")) {
            let a = filterProducts?.sort((a, b) => {
              return b.price - a.price;
            });
            setCurrentProducts(a);
          }
        },
      })
    );
  }, []);
  return <div> </div>;
}
