import React, { useState, useEffect, useRef } from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import products from "./products";
import axios from "axios";
import { Image, Transformation } from "cloudinary-react";
import { useParams } from "react-router-dom";

export default function ({ match }) {
  const [pro, setPro] = useState([]);

  const count = useRef(0);

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/ecom-product-list`);

      setPro(data);
    };

    fetchproduct();
  }, []);
  let productLocal = JSON.parse(localStorage.getItem("products"));
  console.log("productLocal :", typeof productLocal);
  count.current = count.current + 1;
  console.log("count :", count.current);

  let id = window.location.href.slice(53);

  let product = productLocal.find((product) => {
    return product._id == id;
  });

  let a = pro.find((y) => {
    return y._id === id;
  });
  let image = a?.image.slice(25);
  console.log("product", a);
  return (
    <>
      <Col lg="12" xl="12">
        <Col lg="12" xl="12">
          <Card className="">
            <Card.Body>
              <Row>
                <Col md="6" xl="3" xxl="3" lg="6">
                  <div className="tab-content">
                    <div
                      role="tabpanel"
                      aria-hidden="false"
                      class="fade tab-pane active show"
                    >
                      <Image cloudName="djpdvrlkk" publicId={a?.image}>
                        <Transformation crop="scale" width="200" />
                      </Image>
                    </div>
                  </div>
                  <div class="tab-slide-content new-arrival-product mb-xl-0 mb-4">
                    <ul class="nav slide-item-list nav mt-3" role="tablist">
                      <li class="nav-item">
                        <a
                          to="#first"
                          role="tab"
                          data-rb-event-key="first"
                          aria-selected="true"
                          class="nav-link active"
                        >
                          <img
                            class="img-fluid"
                            src="/react/demo/static/media/1.f274aa3f.jpg"
                            alt=""
                            width="50"
                          />
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          to="#second"
                          role="tab"
                          data-rb-event-key="second"
                          aria-selected="false"
                          class="nav-link"
                        >
                          <img
                            class="img-fluid"
                            src="/react/demo/static/media/2.1db98767.jpg"
                            alt=""
                            width="50"
                          />
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          to="#third"
                          role="tab"
                          data-rb-event-key="third"
                          aria-selected="false"
                          class="nav-link"
                        >
                          <img
                            class="img-fluid"
                            src="/react/demo/static/media/3.f92cd16f.jpg"
                            alt=""
                            width="50"
                          />
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          to="#for"
                          role="tab"
                          data-rb-event-key="four"
                          aria-selected="false"
                          class="nav-link"
                        >
                          <img
                            class="img-fluid"
                            src="/react/demo/static/media/4.4a9d5cac.jpg"
                            alt=""
                            width="50"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xl="9" lg="6" md="6" sm="12">
                  <div class="product-detail-content">
                    <div class="new-arrival-content pr">
                      <h4> {a?.name}</h4>
                      <div class="comment-review star-rating">
                        <ul>
                          <li>
                            <i class="fa fa-star"></i>
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
                        <span class="review-text">{a?.review} / </span>
                        <a
                          class="product-review"
                          data-toggle="modal"
                          data-target="#reviewModal"
                          href="/react/demo/ecom-product-detail"
                        >
                          Write a review?
                        </a>
                      </div>
                      <div class="d-table mb-2">
                        <p class="price d-block float-left"></p>
                      </div>
                      <p>
                        {" "}
                        Availability:{" "}
                        <span class="item">
                          {" "}
                          In stock <i class="fa fa-shopping-basket"></i>
                        </span>
                      </p>
                      <p>
                        {" "}
                        Product code: <span class="item">0405689</span>
                      </p>
                      <p>
                        Brand: <span class="item"> {a?.category}</span>
                      </p>
                      <p>
                        Product tags:&nbsp;&nbsp;
                        <span class="badge badge-success light me-1">bags</span>
                        <span class="badge badge-success light me-1">
                          clothes
                        </span>
                        <span class="badge badge-success light me-1">
                          shoes
                        </span>
                        <span class="badge badge-success light me-1">
                          dresses
                        </span>
                      </p>
                      <p class="text-content">{a?.description}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Col>
    </>
  );
}
