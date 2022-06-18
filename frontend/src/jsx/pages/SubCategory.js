import React, { useState, useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import { Row, Card, Col, Button, Nav, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Title from "../layouts/Title";
import axios from "axios";
export default function SubCategory({ subcategory, setChange }) {
  let navigate = useHistory();
  const [hasProduct, setHasProduct] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasProduct(false);
    }, 4000);
  }, [hasProduct]);

  const updateSubcategory = () => {
    let path = `/Createsubcategory/${subcategory._id}`;

    navigate.push(path);
  };
  const deleteSubCategory = async (id) => {
    const { data } = await axios.delete(`/ecom-subcategories/${id}`);

    console.log("   subcategory has products");
    console.log("data.message :", data.message);

    if (data.message == "subcategory has products ") {
      setHasProduct(true);
    }
  };

  return (
    <>
      {/* <Col xl="6">
        <Card>
          <Card.Header>
            <Card.Title>
              <Link
                to={{
                  pathname: `/SubCategoryDetail/${subsubcategory._id}/${subsubcategory.name}`,
                }}
              >
                {subsubcategory.name}
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
            <Card.Text>{subsubcategory.description}</Card.Text>
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
      </Col>{" "} */}

      {/* <div class="col-lg-12 col-xl-6">
        <div class="card">
          <div class="card-body">
            <div class="row m-b-30">
              <div class="col-md-5 col-xxl-12">
                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={subcategory.image}>
                      <Transformation crop="scale" width="100" height="100" />
                    </Image>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-xxl-12">
                <div class="new-arrival-content position-relative">
                  <h4>
                    <Link
                      to={{
                        pathname: `/SubCategoryDetail/${subcategory._id}/${subcategory.name}`,
                      }}
                    >
                      {subcategory.name}
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
      {hasProduct && (
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
          <strong>Error!</strong> Cant delete Subcategory which has products
        </Alert>
      )}
      <div class="col-lg-12 col-xl-3">
        <div class="card">
          <div class="card-body">
            <div class="row m-b-30">
              <div class="col-md-5 col-xxl-12">
                <div class="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                  <div class="new-arrivals-img-contnent">
                    <Image cloudName="djpdvrlkk" publicId={subcategory.image} />
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-xxl-12">
                <div class="new-arrival-content position-relative">
                  <h4>
                    <Link
                      to={{ pathname: `/SubcategoryDetail/${subcategory._id}` }}
                    >
                      {subcategory.name}
                    </Link>
                  </h4>
                  <Button
                    className="me-2"
                    variant="danger btn-rounded"
                    onClick={() => {
                      setChange((prev) => prev + 1);

                      deleteSubCategory(subcategory?._id);
                    }}
                  >
                    Remove
                  </Button>
                  <Button
                    className="me-2"
                    variant="success"
                    onClick={updateSubcategory}
                  >
                    Update
                  </Button>

                  <p class="text-content">{subcategory.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
