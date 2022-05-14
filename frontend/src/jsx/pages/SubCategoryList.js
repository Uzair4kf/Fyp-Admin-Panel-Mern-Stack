import React from "react";
import React, { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
export default function SubCategoryList() {
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
          createsubCategory();
        }}
      >
        Create Sub Category
      </Button>

      <Row>
        {subcategories.map((subcategory, i) => {
          return <Product subcategory={subcategory} key={i} />;
        })}
      </Row>
    </>
  );
}
