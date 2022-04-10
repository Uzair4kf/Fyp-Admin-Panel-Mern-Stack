import React, { Fragment } from "react";
import Profile from "../../pages/Profile";
import { Link } from "react-router-dom";
/// Compoents
import PageTitle from "../../layouts/PageTitle";

/// Image
import img1 from "../../../images/card/1.png";
import img2 from "../../../images/card/2.png";
import img3 from "../../../images/card/3.png";
/// Bootstrap
import { Row, Card, Col, Button, Nav } from "react-bootstrap";

const UiCards = () => {
  console.log("gfkbh");

  return (
    <Fragment>
      <Row>
        <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-primary">
            <div className="card-body  p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-users"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Total Purchases</p>
                  <h3 className="text-white">3280</h3>
                  <div className="progress bg-secondary mb-2">
                    <div
                      className="progress-bar progress-animated bg-light"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <small>80% Increase in 20 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-warning">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-user"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">New Customers</p>
                  <h3 className="text-white">245</h3>
                  <div className="progress bg-primary mb-2">
                    <div
                      className="progress-bar progress-animated bg-light"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                  <small>50% Increase in 25 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4 col-lg-6 col-sm-6">
          <div className="widget-stat card bg-danger ">
            <div className="card-body p-4">
              <div className="media">
                <span className="me-3">
                  <i className="la la-dollar"></i>
                </span>
                <div className="media-body text-white">
                  <p className="mb-1">Total Revenue</p>
                  <h3 className="text-white">250$</h3>
                  <div className="progress bg-secondary mb-2">
                    <div
                      className="progress-bar progress-animated bg-light"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                  <small>30% Increase in 30 Days</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Button>Ai</Button>
    </Fragment>
  );
};
export default UiCards;
