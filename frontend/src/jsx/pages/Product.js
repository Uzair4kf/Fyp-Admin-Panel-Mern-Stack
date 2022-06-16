import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
import axios from "axios";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";

export default function ({ product, deleteP, seti }) {
  let a = 0;
  let navigate = useHistory();
  const createProduct = () => {
    let path = `/CreateProduct/${product._id}`;
    axios.put(`/ecom-product-list`, {});
    navigate.push(path);
  };
  let data = product.image;
  return (
    <>
      {/* <Col lg="12" xl="12">
        <Card>
          <Card.Body>
            <div class="row m-b-30">
              <Col md="5" xxl="3">
                <div class="new-arrival-product mb-xxl-4 mb-md-0 mb-4">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={product.image} />
                  </div>
                </div>
              </Col>
              <Col md="7" xxl="12">
                <Link to={`/ecom-product-detail/${product._id}`}>
                  {product.name}
                </Link>
                
               
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
                    Sub Category <span class="item"> {product.category}</span>{" "}
                  </p>
                  <p>
                    Quantity <span class="item">{product.quantity}</span>
                  </p>
                  <p class="text-content">{product.description}</p>
                </div>
              </Col>
            </div>
          </Card.Body>
        </Card>
      </Col> */}
      <div class="col-lg-12 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="row m-b-30">
              <div class="col-md-5 col-xxl-12">
                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={product.image} />
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-xxl-12">
                <div class="new-arrival-content position-relative">
                  <h4>
                    <Link to={`/ecom-product-detail/${product._id}`}>
                      {product.name}
                    </Link>
                  </h4>
                  <Button
                    className="me-2"
                    variant="danger btn-rounded"
                    onClick={() => {
                      seti((prev) => prev + 1);
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
                  <div class="comment-review star-rating">
                    <ul>
                      {" "}
                      <li>
                        <i class="fa fa-star"></i>
                      </li>{" "}
                      <li>
                        <i class="fa fa-star"></i>
                      </li>{" "}
                      <li>
                        <i class="fa fa-star"></i>
                      </li>{" "}
                      <li>
                        <i class="fa fa-star-half-empty"></i>
                      </li>{" "}
                      <li>
                        <i class="fa fa-star-half-empty"></i>
                      </li>
                    </ul>
                    <span class="review-text">(34 reviews) / </span>
                    <a
                      class="product-review"
                      data-toggle="modal"
                      data-target="#reviewModal"
                      href="/react/demo/ecom-product-list"
                    >
                      Write a review?
                    </a>
                    <p class="price">{product.price}Rs</p>
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
                    Sub Category <span class="item"> {product.category}</span>{" "}
                  </p>
                  <p class="text-content">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
