import React from "react";
import { Link, useHistory } from "react-router-dom";
import ProductDetail from "./ProductDetail";

import { Row, Card, Col, Button, Nav, Image } from "react-bootstrap";

export default function ({ product, deleteP, seti }) {
  let a = 0;
  let navigate = useHistory();
  const createProduct = () => {
    let path = `/CreateProduct/${product._id}`;
    navigate.push(path);
  };
  return (
    <>
      <Row>
        <Col lg="12" xl="12">
          <Card>
            <Card.Body>
              <Row>
                <Col md="5" xl="12">
                  <div class="new-arrival-product mb-xxl-4 mb-md-0 mb-4">
                    <div class="new-arrivals-img-contnent">
                      <Card.Img src={product.image} variant="top" />
                    </div>
                  </div>
                </Col>
                <Col md="7" xl="12">
                  <Link to={`/ecom-product-detail/${product._id}`}>
                    {product.name}
                  </Link>
                  <Button
                    className="me-2"
                    variant="danger btn-rounded"
                    onClick={() => {
                      seti(a++);
                      console.log(a);
                      deleteP(product._id);
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    className="me-2"
                    variant="success"
                    onClick={createProduct}
                  >
                    Update
                  </Button>
                  <div className="new-arrival-content position-relative">
                    <div class="comment-review star-rating">
                      <ul>
                        <li>
                          <i class="fa fa-star"> </i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star"></i>
                        </li>
                        <li>
                          <i class="fa fa-star-half-empty"></i>
                        </li>
                        <li>
                          <i class="fa fa-star-half-empty"></i>
                        </li>
                      </ul>
                      <span class="review-text"> / </span>
                      <a
                        class="product-review"
                        data-toggle="modal"
                        data-target="#reviewModal"
                        href="/react/demo/ecom-product-list"
                      >
                        Write a review?
                      </a>
                      <p class="price">${product.price}</p>
                    </div>
                    <p>
                      Availability:{" "}
                      <span class="item">
                        {" "}
                        In stock <i class="fa fa-check-circle text-success"></i>
                      </span>
                    </p>
                    <p>
                      Product code: <span class="item">0405689</span>{" "}
                    </p>
                    <p>
                      Brand: <span class="item">Lee</span>
                    </p>
                    <p class="text-content">{product.description}</p>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
