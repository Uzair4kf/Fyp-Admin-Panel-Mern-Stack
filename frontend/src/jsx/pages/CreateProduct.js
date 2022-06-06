import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import { Row, Col, Button, Dropdown } from "react-bootstrap";

export default function CreateProduct() {
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState();
  let id = window.location.href.slice(47);

  let a = products?.find((y) => {
    return y._id === id;
  });

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleSelect = (e) => {
    setCategory(e);
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    console.log("formData :", formData);

    try {
    
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload", formData, config);

      setImage(data);
      console.log("data :", data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const updateProduct = (id) => {
    axios.put(`/ecom-product-list/${id}`, {
      name: name,
      category: category,
      descirption: description,
      price: price,
      quantity: quantity,
      image: image,
    });
  };

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/ecom-product-list");
      setProducts(data);
    };

    fetchproducts();

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
                    defaultValue={a?.name}
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (!e.target.value == "") {
                        setName(e.target.value);
                      } else {
                        setName(a?.name);
                      }
                    }}
                  />
                </div>
                {console.log(name)}
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
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">SubCategory</Dropdown.Toggle>

          <Dropdown.Menu>
            {subcategories.map((subcategory, i) => {
              return (
                <Dropdown.Item
                  onSelect={() => {
                    handleSelect(subcategory.name);
                  }}
                >
                  {subcategory.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>

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
        <Col xl="6">
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="number"
                    placeholder={a?.quantity}
                    onChange={(e) => setQuantity(e.target.value)}
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
                    placeholder="image"
                    name="image"
                    onChange={(e) => {
                      setImage(e.target.value);

                      console.log(" files", e.target.files);
                    }}
                  />
                  <input
                    type="file"
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
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
            updateProduct(a?._id, a?.name);
          }}
        >
          Update Product
        </Button>
      </Row>
    </>
  );
}
