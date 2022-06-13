import React from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
import { Image } from "cloudinary-react";
export default function Sliders({ slider }) {
  return (
    <div>
      <Row>
        <Col lg="12" xl="12">
          <Card>
            <Card.Body>
              <Row>
                <Col md="5" xl="3">
                  <div class="new-arrival-product mb-xxl-4 mb-md-0 mb-4">
                    <div class="new-arrivals-img-contnent">
                      <Image cloudName="djpdvrlkk" publicId={slider.image} />
                    </div>
                  </div>
                </Col>
                <Col md="7" xl="12">
                  <>{slider.name}</>
                  <Button
                    className="me-2"
                    variant="danger btn-rounded"
                    // onClick={() => {
                    //   seti((prev) => prev + 2);
                    //   console.log(a);
                    //   deleteP(product._id);
                    // }}
                  >
                    Remove
                  </Button>
                  <Button
                    className="me-2"
                    variant="success"
                    // onClick={createProduct}
                  >
                    Update
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
