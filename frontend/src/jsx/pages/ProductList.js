import React, { useState, useEffect, useRef, useContext } from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAlan from "../hooks/useAlan";
import CreateProduct from "./CreateProduct";
import products from "./products";
import Product from "./Product";
import axios from "axios";
import Pagination from "../components/bootstrap/Pagination";

import SearchContext from "../../context/SearchContext";
export default function () {
  const { searchItem } = useContext(SearchContext);

  //Initialization
  let array = [];
  const [products, setProducts] = useState(array);

  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(10);

  let p = [];
  const [alanInstance, setAlanInstance] = useState();
  const alanKey = `1924fbdbfa5f99b552c43824c5134e1c2e956eca572e1d8b807a3e2338fdd0dc/stage`;

  const deleteP = (id) => [axios.delete(`/ecom-product-list/${id}`)];
  const createProduct = () => axios.post(`/ecom-product-list}`);

  //Prop used to re render component on delete
  const [i, seti] = useState(0);
  const [s, sets] = useState(0);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renders = useRef(0);
  console.log(renders.current++);

  const indexofLastPage = currentPage * postperPage;
  const indexofFirstPage = indexofLastPage - postperPage;
  const currentProducts = products?.slice(indexofFirstPage, indexofLastPage);
  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");
      setProducts(data);
    };
    fetchproducts();
  }, [s]);

  // useEffect(() => {
  //   let filterProducts = products.filter((val) => {
  //     if (searchItem == "") return val;
  //     else if (val.name?.toLowerCase().includes(searchItem?.toLowerCase())) {
  //       return val;
  //     }
  //   });
  //   setProducts(filterProducts);
  // }, [searchItem]);

  const sort = () => {
    sets((prev) => prev + 1);
    setProducts(
      products.sort((a, b) => {
        return b.price - a.price;
      })
    );
  };

  console.log(s);
  //hooks

  // useEffect(() => {
  //   if (alanInstance != null) return;
  //   setAlanInstance(
  //     alanBtn({
  //       top: "15px",
  //       left: "15px",
  //       key: alanKey,
  //       onCommand: ({ command }) => {
  //         if ((command = "product")) {
  //           window.location.href =
  //             "http://localhost:3000/react/demo/ecom-product-list";
  //         }
  //         if ((command = "price")) {

  //         }
  //       },
  //     })
  //   );
  // }, []);

  return (
    <>
      <Link
        to={{
          pathname: `/CreateProduct`,
          state: {
            id: 1,
            name: "sabaoon",
            shirt: "green",
            products: products,
          },
        }}
        onClick={() => {
          createProduct().then((res) => {
            console.log(res.data);
          });
        }}
      >
        Create
      </Link>

      <Row>
        {currentProducts.map((product, i) => {
          return (
            <Product product={product} key={i} deleteP={deleteP} seti={seti} />
          );
        })}
      </Row>

      <Pagination
        postperPage={postperPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  );
}
