import React, { useState, useEffect } from "react";
import { Row, Card, Col, Button, Nav, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Title from "../layouts/Title";
import { Image, Transformation } from "cloudinary-react";
import axios from "axios";
export default function Categories({ category, setChange }) {
  const navigate = useHistory();
  const [hasSubcategory, setHasSubcategory] = useState(false);
  const updateCategory = async () => {
    let path = `/CreateCategory/${category._id}`;
  
  //  await axios.put(`/ecom-categories`, {});
    
    navigate.push(path);
  };
  const deleteCategory = async (id) => {
    const { data } = await axios.delete(`/ecom-categories/${id}`);

    if (data.message == "category has subcategories ") {
      setHasSubcategory(true);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasSubcategory(false);
    }, 4000);
  }, [hasSubcategory]);
  return (
    <>
      {/* <Col lg="12" xl="6">
        <Card>
          <Card.Body>
            <div class="row m-b-30">
              <Col md="5" xxl="12">
                <div class="new-arrival-product mb-xxl-4 mb-md-0 mb-4">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={category.image} />
                  </div>
                </div>
              </Col>
              <Col md="7" xxl="12">
                <Link to={`/ecom-product-detail/${category._id}`}>
                  {category.name}
                </Link>
                <Button
                  className="me-2"
                  variant="danger btn-rounded"
                  // onClick={() => {
                  //   seti((prev) => prev + 2);
                  //   console.log(a);
                  //   deleteP(category._id);
                  // }}
                >
                  Remove
                </Button>
                <Button
                  className="me-2"
                  variant="success"
                  onClick={updateCategory}
                >
                  Update
                </Button>
              </Col>
            </div>
          </Card.Body>
        </Card>
      </Col> */}

      {/* <div class="col-lg-12 col-xl-6">
        <div class="card">
          <div class="card-body">
            <div class="row m-b-30">
              <div class="col-md-5 col-xxl-12">
                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={category.image}>
                      <Transformation crop="scale" width="200" height="300" />
                    </Image>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-xxl-12">
                <div class="new-arrival-content position-relative">
                  <h4>
                    <Link to={{ pathname: `/CategoryDetail/${category._id}` }}>
                      {category.name}
                    </Link>
                  </h4>

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
                  <p class="text-content">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {hasSubcategory && (
        <Alert
          variant="danger"
          className="alert-dismissible solid alert-alt fade show"
        >
          {
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="me-2"
            >
              <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          }
          <strong>Error!</strong> Cant delete category which has subcategories
        </Alert>
      )}
      <div class="col-lg-12 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="row m-b-30">
              <div class="col-md-5 col-xxl-12">
                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={category.image} />
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-xxl-12">
                <div class="new-arrival-content position-relative">
                  <h4>
                    <Link to={{ pathname: `/CategoryDetail/${category._id}` }}>
                      {category.name}
                    </Link>
                  </h4>
                  <Button
                    className="me-2"
                    variant="danger btn-rounded"
                    onClick={() => {
                      setChange((prev) => prev + 1);

                      deleteCategory(category._id);
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    className="me-2"
                    variant="success"
                    onClick={updateCategory}
                  >
                    Update
                  </Button>

                  <p class="text-content">{category.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
