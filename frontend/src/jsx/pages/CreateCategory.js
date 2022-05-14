import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Card, Col, Button, Nav, Image } from "react-bootstrap";
export default function CreateCategory() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState(""); 
  let id = window.location.href.slice(48);

  const [description, setDescription] = useState("");
  const updateCategory = (id) => {
    axios.put(`/ecom-categories/${id}`, {
      name: name,

      description: description,
    });
  };
  useEffect(() => {
    const fetchcategories = async () => {
      const { data } = await axios.get("/ecom-categories");

      setCategories(data);
    };
    fetchcategories();
  }, []);
  let a = categories?.find((y) => {
    return y._id === id;
  });
  console.log(a);
  console.log(a?._id);
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
            updateCategory(a?._id);
          }}
        >
          Update Category
        </Button>
      </Row>
    </>
  );
}
