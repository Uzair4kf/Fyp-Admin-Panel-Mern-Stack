import React from "react";
import { Row, Card, Col, Button, Nav } from "react-bootstrap";
export default function () {
  return (
    <>
      <Row>
        <Col lg="12">
          <div class="profile card card-body px-3 pt-3 pb-0">
            <div class="profile-head">
              <div class="photo-content ">
                <div class="cover-photo rounded"></div>
              </div>
              <div class="profile-info">
                <div class="profile-photo">
                  <img
                    src="/react/demo/static/media/profile.0a3dd7b3.png"
                    class="img-fluid rounded-circle"
                    alt="profile"
                  />
                </div>
                <div class="profile-details">
                  <div class="profile-name px-3 pt-2">
                    <h4 class="text-primary mb-0">Mitchell C. Shay</h4>
                    <p>UX / UI Designer</p>
                  </div>
                  <div class="profile-email px-2 pt-2">
                    <h4 class="text-muted mb-0">hello@email.com</h4>
                    <p>Email</p>
                  </div>
                  <div class="dropdown ms-auto dropdown">
                    <button
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-toggle="dropdown"
                      type="button"
                      class="btn btn-primary light sharp i-false dropdown-toggle btn btn-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
