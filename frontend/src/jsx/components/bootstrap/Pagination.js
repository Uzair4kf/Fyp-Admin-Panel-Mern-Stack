import React from "react";
import { Fragment } from "react";

import PageTitle from "../../layouts/PageTitle.js";
import { Row, Card, Nav, Col, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

const UiPagination = ({ postperPage, totalPosts, paginate }) => {
  const active = 1;
  let items = [];

  for (
    let number = 1;
    number <= Math.ceil(totalPosts / postperPage);
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          paginate(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  const pag = (size, gutter, variant, bg, circle) => (
    <Pagination
      size={size}
      className={`mt-4  ${gutter ? "pagination-gutter" : ""} ${
        variant && `pagination-${variant}`
      } ${!bg && "no-bg"} ${circle && "pagination-circle"}`}
    >
      <li className="page-item page-indicator">
        <a className="page-link" href="/po">
          <i className="la la-angle-left" />
        </a>
      </li>
      {items}
      <li className="page-item page-indicator">
        <Link className="page-link" to="#">
          <i className="la la-angle-right" />
        </Link>
      </li>
    </Pagination>
  );
  return (
    <Fragment>
      <Row>
        <Col xl={12} lg={12} className=" col-xxl-12">
          <Card>
            <Card.Body className="pt-0">
              <Nav>{pag("", false, "", true, false)}</Nav>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default UiPagination;
