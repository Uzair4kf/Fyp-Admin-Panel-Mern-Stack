import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import axios from "axios";
import { Row, Col, Card, CardBody, CardTitle } from "react-bootstrap";
export default function () {
  const [users, setUsers] = useState();

  useEffect(() => {
    const fetchusers = async () => {
      const { data } = await axios.get("/ecom-customers");
      setUsers(data);
    };
    fetchusers();
  }, []);
  console.log("users", users);

  const data = {
    columns: [
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Password",
        field: "password",
        sort: "asc",
        width: 270,
      },
      {
        label: "ID",
        field: "_id",
        sort: "asc",
        width: 200,
      },
    ],
    rows: users,
  };
  console.log(data);
  return (
    <div>
      <Row>
        <Col className="col-12">
          <Card>
            <p className="card-title-desc"></p>

            {users && <MDBDataTable responsive bordered data={users} />}
          </Card>
        </Col>
      </Row>
    </div>
  );
}
