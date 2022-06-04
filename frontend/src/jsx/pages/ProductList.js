import React, { useState, useEffect, useRef, useContext } from "react";
import { Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAlan from "../hooks/useAlan";

import Product from "./Product";
import axios from "axios";
import Pagination from "../components/bootstrap/Pagination";

import SearchContext from "../../context/SearchContext";
export default function () {
  const history = useHistory();
  const { searchItem } = useContext(SearchContext);

  //Initialization
  let array = [];
  const [products, setProducts] = useState(array);
  const [productImages, setProductImages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(10);

  const [alanInstance, setAlanInstance] = useState();
  const alanKey = `1924fbdbfa5f99b552c43824c5134e1c2e956eca572e1d8b807a3e2338fdd0dc/stage`;

  const deleteP = (id) => [axios.delete(`/ecom-product-list/${id}`)];
  const createProduct = async () => {
    const { data } = await axios.post(`/ecom-product-list`, {});
    let path = `/CreateProduct/${data._id}`;
    history.push(path);
  
  };

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
      console.log("data :", data);

      setProducts(data);
    };
    fetchproducts();
  }, [i]);

  useEffect(() => {
    const fetchimages = async () => {
      const { data } = await axios.get("/images");

      console.log(" data", data);
      // setProductImages(data);
    };
    fetchimages();
  }, []);
  const sort = (e) => {
    e.preventDefault();
    sets((prev) => prev + 1);
    setProducts(
      products.sort((a, b) => {
        return b.price - a.price;
      })
    );
  };

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
      <Button onClick={sort}>Sort</Button>
      <Button
        onClick={() => {
          createProduct();
        }}
      >
        Create
      </Button>

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
