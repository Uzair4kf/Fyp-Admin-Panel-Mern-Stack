import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Row, Card, Col, Button, Nav, Image } from "react-bootstrap";

import newProducts from "./ProductList";
import prefixName from "redux-form/lib/util/prefixName";
export default function CreateProduct({ match }) {
  const [products, setProducts] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const { state } = useLocation();
  const updateProduct = (id) =>
    axios.put(`/ecom-product-list/${id}`, {
      id: a?._id,   
      name: a?.name,
      category: "pol",
      descirption: "iop",
      price: 12,
    });

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");
      setProducts(data);
    };

    fetchproducts();
  }, [products]);

  let id = window.location.href.slice(47);
  console.log(id);
  let a = products?.find((y) => {
    return y._id === id;
  });
  console.log(a);
  updateProduct(a?._id).then((res) => {
    console.log(res.data);
  });
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
                    placeholder={a?.name}
                    onChange={(e) => setName(e.target.value)}
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
                    placeholder={a?.description}
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
                    placeholder={a?.brand}
                    onChange={(e) => setBrand(e.target.value)}
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
                    placeholder={a?.category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    type="number"
                    placeholder={a?.countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
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
                    type="number"
                    placeholder={a?.price}
                    onChange={(e) => setPrice(e.target.value)}
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
            updateProduct(a?._id).then((data) => {
              console.log(data);
            });
          }}
        >
          Create Product
        </Button>
      </Row>
    </>
  );
}
