import React, { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import axios from "axios";
import Categories from "./Categories";
import { Link, useHistory } from "react-router-dom";
export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  const history = useHistory();
  const createCategory = async () => {
    const { data } = await axios.post(`/ecom-categories`, {});
    let path = `/CreateCategory/${data._id}`;
    history.push(path);
  };
  useEffect(() => {
    const fetchcategories = async () => {
      const { data } = await axios.get("/ecom-categories");

      setCategories(data);
    };
    fetchcategories();
  }, []);
  return (
    <>
      <Button
        onClick={() => {
          createCategory();
        }}
      >
        Create Category
      </Button>
      <Row>
        {categories.map((category, i) => {
          return (
            <Categories category={category} key={i}   />
          );
        })}
      </Row>
    </>
  );
}