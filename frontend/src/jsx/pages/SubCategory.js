import React from "react";

import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
export default function SubCategory({ subcategory }) {
  let navigate = useHistory();
  const updateSubcategory = () => {
    let path = `/Createsubcategory/${subcategory._id}`;

    navigate.push(path);
  };
  return (
    <>
      <Col xl="6">
        <Card>
          <Card.Header>
            <Card.Title>
              <Link
                to={{
                  pathname: `/SubcategoryDetail/${subcategory._id}`,
                }}
              >
                {subcategory.name}
              </Link>
              <Button className="me-2" variant="danger btn-rounded">
                Remove
              </Button>
              <Button
                className="me-2"
                variant="success"
                onClick={() => {
                  updateSubcategory();
                }}
              >
                Update
              </Button>
            </Card.Title>
          </Card.Header>

          <Card.Body>
            <Card.Text>{subcategory.description}</Card.Text>
          </Card.Body>
          <Card.Footer className=" d-sm-flex justify-content-between align-items-center">
            <Card.Text className=" text-dark d-inline">
              Last updated 3 mins ago
            </Card.Text>

            <Link to={"#"} className="btn btn-primary">
              Go somewhere
            </Link>
          </Card.Footer>
        </Card>
      </Col>{" "}
    </>
  );
}
