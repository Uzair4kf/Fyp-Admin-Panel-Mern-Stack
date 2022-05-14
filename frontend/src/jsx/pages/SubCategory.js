import React from "react";

import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
export default function SubCategory({ subcategory }) {
  return (
    <>
      <Col xl="6">
        <Card>
          <Card.Header>
            <Card.Title>
              {subcategory.name}
              <Button className="me-2" variant="danger btn-rounded">
                Remove
              </Button>
              <Button className="me-2" variant="success">
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
