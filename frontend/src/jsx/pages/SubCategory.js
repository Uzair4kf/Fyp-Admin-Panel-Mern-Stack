import React from "react";
import { Image, Transformation } from "cloudinary-react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Title from "../layouts/Title";
export default function SubCategory({ subcategory }) {
  let navigate = useHistory();
  const updateSubcategory = () => {
    let path = `/Createsubcategory/${subcategory._id}`;

    navigate.push(path);
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
 
      <div class="col-lg-12 col-xl-6">
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
      </div>
    </>
  );
}
