import React from "react";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Row, Col, Card } from "react-bootstrap";
export default function BarChart() {
  const ApexBar2 = loadable(() => pMinDelay(import("./Bar2"), 1000));
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4 className="card-title">Bar Chart</h4>
            </Card.Header>
            <Card.Body>
              <ApexBar2 />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
