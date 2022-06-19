import React, { useEffect, useState, useRef, useContext } from "react";
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
  Form,
} from "react-bootstrap";
import {
  updateProduct,
  uploadFileHandler,
  secondaryuploadFileHandler,
} from "./ProductMethods";
export default function CreateProduct() {
  const history = useHistory();
  const [subcategories, setSubcategories] = useState([]);
  const [products, setProducts] = useState();
  const [isCreated, setIsCreated] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  let id = window.location.href.slice(47);
  let state = window.location.href.slice(47);

  let product = products?.find((product) => {
    return product._id == id;
  });
  console.log("product :", product);

  useEffect(() => {
    if (state == "create") {
      setIsCreate(true);
    }
  }, []);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [cloudImage, setCloudImage] = useState();
  const [secondCloudImage, setSecondCloudImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (e) => {
    setCategory(e);
  };

  const updateProduct = async (id) => {
    const res = await axios.put(`/ecom-product-list/${id}`, {
      name: name,
      category: category,
      description: description,
      price: price,
      quantity: quantity,
      image: cloudImage?.public_id,
      secondaryimage: secondCloudImage?.public_id,
    });
    const { data } = res;

    if (res.status == 200) {
      alert("Success ! Product added");
      // setIsCreated(true);
    }
  };

  const createProduct = async () => {
    console.log(" create");
    const { data } = await axios.post(`/ecom-product-list`, {
      name: name,
      category: category,
      description: description,

      price: price,
      quantity: quantity,
      image: cloudImage?.public_id,
      secondaryimage: secondCloudImage?.public_id,
    });
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
      setIsLoading(false);
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
        {/* <form
          onSubmit={() => {
            updateProduct(a?._id, a?.name);
            let path = "/ecom-product-list";
            history.push(path);
          }}
        > */}

        <form
          className="needs-validation"
          noValidate=""
          onSubmit={(e) => {
            e.preventDefault();

            console.log(" :");
            if (isCreate) {
              console.log(" :");
              createProduct();
              let path = "/ecom-product-list";
              history.push(path);
            } else {
              updateProduct(product?._id);
              let path = "/ecom-product-list";
              history.push(path);
            }
          }}
        >
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="productname">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productname"
                defaultValue={product?.name}
                required
                onChange={(e) => {
                  console.log(e.target.value);
                  if (!e.target.value == "") {
                    setName(e.target.value);
                  } else {
                    setName();
                  }
                }}
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="product description">Product description</label>
              <input
                type="text"
                className="form-control"
                id="product description"
                defaultValue={product?.description}
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="product description">Product Image</label>
              <input
                class="form-control form-control-lg"
                type="file"
                placeholder="image"
                name="image"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  uploadFileHandler(e);
                }}
              />
              {isLoading && <Spinner animation="border" variant="primary" />}
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="product description">
                Product Secondary Image
              </label>
              <input
                class="form-control form-control-lg"
                type="file"
                placeholder="image"
                name="image"
                onChange={secondaryuploadFileHandler}
              />
              {isLoading && <Spinner animation="border" variant="primary" />}
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">Quantity</label>
              <input
                type="number"
                className="form-control"
                id="cc-expiration"
                defaultValue={product?.quantity}
                required
                onChange={(e) => setQuantity(e.target.value)}
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>

            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">Price</label>
              <input
                type="number"
                className="form-control"
                id="cc-cvv"
                defaultValue={product?.price}
                required
                onChange={(e) => setPrice(e.target.value)}
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="cc-expiration">Select Subcategory</label>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  SubCategory
                </Dropdown.Toggle>

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
            </div>
          </div>

          {price < 0 && <p className="text-danger">Price cant be negative</p>}
          <hr className="mb-4" />

          {isCreate ? (
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Create Product
            </button>
          ) : (
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Update Product
            </button>
          )}
        </form>
      </Row>
    </>
  );
}
