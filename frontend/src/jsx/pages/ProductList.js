import React, { useState, useEffect, useRef, useContext, useMemo } from "react";
import { Row, Button, Spinner, Card, Dropdown, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAlan from "../hooks/useAlan";
import Title from "../layouts/Title";
import Product from "./Product";
import axios from "axios";
import Pagination from "../components/bootstrap/Pagination";

import SearchContext from "../../context/SearchContext";
export default function () {
  const history = useHistory();
  const { searchItem } = useContext(SearchContext);

  const p = JSON.parse(localStorage.getItem("products"));
  //Initialization
  let array = [];
  const [products, setProducts] = useState(array);

  const [persistProducts, setPersistProducts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setPostPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);
  const [alanInstance, setAlanInstance] = useState();
  const [subcategories, setSubcategories] = useState([]);
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
      if (data) {
        setIsLoading(false);
      }
      localStorage.setItem("products", JSON.stringify(data));
      setProducts(data);
      setPersistProducts(data);
    };
    fetchproducts();
    const fetchsubcategories = async () => {
      const { data } = await axios.get("/ecom-subcategories");

      setSubcategories(data);
    };
    fetchsubcategories();
    // setProducts(
    //   products.map((product) => {
    //     return product.name.includes(searchItem);
    //   })
    // );
  }, [i, searchItem]);

  useEffect(() => {
    const fetchimages = async () => {
      const { data } = await axios.get("/images");

      console.log(" data", data);
      // setProductImages(data);
    };
    fetchimages();
  }, []);
  // useEffect(() => {
  //   setProducts(

  //   );
  // }, [searchItem]);

  const sort = (e) => {
    e.preventDefault();
    sets((prev) => prev + 1);
    setProducts(
      products.sort((a, b) => {
        return b.price - a.price;
      })
    );
  };
  const filterbySubcategory = (name) => {
    console.log(" products", products);
    const filteredProducts = p.filter((product) => {
      return product.category === name;
    });
    setProducts(filteredProducts);
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
  //             "http://localhost:3006/react/demo/ecom-product-list";
  //         }
  //         if ((command = "price")) {

  //         }
  //       },
  //     })
  //   );
  // }, []);

  return (
    <>
      <Title name="Product List" />
      <Row>
        <Col xl="3">
          <Button onClick={sort}>Sort</Button>
        </Col>
        <Col xl="3">
          <Button
            onClick={() => {
              createProduct();
            }}
          >
            Create
          </Button>
        </Col>
        {console.log(" subcat", subcategories)}

        <Col xl="3">
          <div className="basic-dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="primary">
                Filter By Sub Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    setProducts(p);
                  }}
                >
                  Default
                </Dropdown.Item>
                {subcategories.map((subcategory) => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        filterbySubcategory(subcategory.name);
                      }}
                    >
                      {subcategory.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        {currentProducts.map((product, i) => {
          return (
            <Product product={product} key={i} deleteP={deleteP} seti={seti} />
          );
        })}
      </Row>
      {isLoading && <Spinner animation="border" variant="primary" />}
      <Pagination
        postperPage={postperPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </>
  );
}
