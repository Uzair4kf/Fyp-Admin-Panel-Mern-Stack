import React, { useState, useEffect } from "react";
import axios from "axios";

import { Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import SubCategory from "./SubCategory";

export default function SubCategoryList() {
  const history = useHistory();
  const createSubcategory = async () => {
    const { data } = await axios.post(`/ecom-subcategories`, {});
    let path = `/CreateSubcategory/${data._id}`;
    history.push(path);
  };
  const [subcategories, setSubcategories] = useState([]);
  useEffect(() => {
    const fetchsubcategories = async () => {
      const { data } = await axios.get("/ecom-subcategories");

      setSubcategories(data);
    };
    fetchsubcategories();
  }, []);
  return (
    <>
      <Button
        onClick={() => {
          createSubcategory();
        }}
      >
        Create Sub Category
      </Button>

      <Row>
        {subcategories.map((subcategory, i) => {
          return <SubCategory subcategory={subcategory} key={i} />;
        })}
      </Row>
    </>
  );
}
