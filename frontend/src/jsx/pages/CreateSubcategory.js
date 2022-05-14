import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Row, Card, Col, Button, Nav, Image } from "react-bootstrap";
export default function CreateSubcategory() {
  const [subcategories, setSubcategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentId, setParentId] = useState("");

  let id = window.location.href.slice(51);
  console.log(id);
  let a = subcategories?.find((y) => {
    return y._id === id;
  });
  const updateSubcategory = (id) => {
    axios.put(`/ecom-subcategories/${id}`, {
      name: name,
      parentId: parentId,
      description: description,
    });
  };
  useEffect(() => {
    const fetchsubcategories = async () => {
      const { data } = await axios.get("/ecom-subcategories");

      setSubcategories(data);
    };
    fetchsubcategories();
  }, []);

  return (
    <>
      <Row>
        <Col xl="6">
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    onChange={(e) => setParentId(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="file"
                    placeholder="image"
                  />
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Button
          className="me-2"
          variant="primary btn-lg"
          onClick={() => {
            updateSubcategory(a?._id);
          }}
        >
          Update Category
        </Button>
      </Row>
    </>
  );
}
