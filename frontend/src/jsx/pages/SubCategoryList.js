import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Button, Spinner, Dropdown, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import SubCategory from "./SubCategory";
import Title from "../layouts/Title";
export default function SubCategoryList() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [change, setChange] = useState(0);
  const history = useHistory();
  const sub = JSON.parse(localStorage.getItem("subcategories"));
  console.log("categories :", categories);
  const createSubcategory = async () => {
    const { data } = await axios.post(`/ecom-subcategories`, {});
    let path = `/CreateSubcategory/create`;
    history.push(path);
  };
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    const fetchsubcategories = async () => {
      const { data } = await axios.get("/ecom-subcategories");
      if (data) {
        setIsLoading(false);
      }
      localStorage.setItem("subcategories", JSON.stringify(data));
      setSubcategories(data);
    };

    fetchsubcategories();
    const fetchcategories = async () => {
      const { data } = await axios.get("/ecom-categories");

      setCategories(data);
      localStorage.setItem("categorires", JSON.stringify(data));
    };
    fetchcategories();
  }, [change]);

  const filterbycategory = (name) => {
    console.log(" sub", sub);
    const filteredSubcategories = sub.filter((product) => {
      return product.parentId === name;
    });
    console.log("filteredSubcategories :", filteredSubcategories);
    setSubcategories(filteredSubcategories);
  };
  return (
    <>
      <Title name="Subcategory List" />
      <Row>
        <Col xl="3">
          <Button
            onClick={() => {
              createSubcategory();
            }}
          >
            Create Sub Category
          </Button>
        </Col>
        <Col xl="3">
          <div className="basic-dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="primary">
                Filter By Category
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                // onClick={() => {
                //   setProducts(p);
                // }}
                >
                  Default
                </Dropdown.Item>
                {categories.map((category) => {
                  return (
                    <Dropdown.Item
                      onClick={() => {
                        filterbycategory(category.name);
                      }}
                    >
                      {category.name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
      <Row>
        {subcategories.map((subcategory, i) => {
          return (
            <SubCategory
              subcategory={subcategory}
              key={i}
              setChange={setChange}
            />
          );
        })}
      </Row>
      {isLoading && <Spinner animation="border" variant="primary" />}
    </>
  );
}
