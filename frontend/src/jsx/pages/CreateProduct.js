import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Dropdown,
  Spinner,
  Alert,
  Media,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";

export default function CreateProduct() {
  const history = useHistory();
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState();
  const [isCreated, setIsCreated] = useState(false);
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
  const [cloudImage, setCloudImage] = useState();
  const [secondCloudImage, setSecondCloudImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const handleSelect = (e) => {
    setCategory(e);
  };
  const uploadFileHandler = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "sw2ks6ox");
    console.log(formData.get("file"));

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djpdvrlkk/image/upload",
      formData
    );

    setCloudImage(data);
    if (data) {
      // setIsLoading(false);
    }

     
  };
  const secondaryuploadFileHandler = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "sw2ks6ox");
    console.log(formData.get("file"));

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djpdvrlkk/image/upload",
      formData
    );

    setSecondCloudImage(data);
    if (data) {
      setIsLoading(false);
    }
  };

  const updateProduct = async (id) => {
    const res = await axios.put(`/ecom-product-list/${id}`, {
      name: name,
      category: category,
      descirption: description,
      price: price,
      quantity: quantity,
      image: cloudImage?.public_id,
      secondaryimage: secondCloudImage?.public_id,
    });

    if (res.status == 200) {
      alert("Success ! Product added");
      // setIsCreated(true);
    }
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
        {isCreated && (
          <Alert variant="success" className="alert-dismissible left-icon-big">
            <Media>
              <div variant="" className="alert-left-icon-big">
                <span>
                  <i className={`mdi mdi-check-circle-outline`}></i>
                </span>
              </div>
              <Media.Body>
                <h6 className="mt-1 mb-2">Success!</h6>
                <p className="mb-0">New Item Created</p>
              </Media.Body>
            </Media>
          </Alert>
        )}

        <Col xl="6">
          <div class="card-body">
            <div class="basic-form">
              <form>
                <div class="form-group mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    defaultValue={a?.name}
                    placeholder="Product Name"
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
                    placeholder="Product Description"
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
                    placeholder="Category"
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
                    placeholder="Stock"
                    onChange={(e) => setCountInStock(e.target.value)}
                  />
                  {countInStock < 0 && (
                    <Alert
                      variant={`outline-danger`}
                      className=" alert-dismissible fade show"
                    >
                      Stock cant be negative
                    </Alert>
                  )}
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
                    placeholder="Price"
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
                    placeholder="Quantity"
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
                    type="file"
                    placeholder="image"
                    name="image"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                    }}
                  />
                  <input
                    type="file"
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
                  />
                  {isLoading && (
                    <Spinner animation="border" variant="primary" />
                  )}
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
                    name="image"
                    onChange={secondaryuploadFileHandler}
                  />

                  {isLoading && (
                    <Spinner animation="border" variant="primary" />
                  )}
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
            let path = "/ecom-product-list";
            history.push(path);
          }}
        >
          Update Product
        </Button>
      </Row>
    </>
  );
}
