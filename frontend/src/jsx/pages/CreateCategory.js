import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Row, Card, Col, Button, Nav, Spinner } from "react-bootstrap";
import { Image, Transformation } from "cloudinary-react";
import UploadImageContext from "../../context/UploadImageContext";
export default function CreateCategory() {
  const [image, setImage] = useState();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [cloudImage, setCloudImage] = useState();
  const [isCreate, setIsCreate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let id = window.location.href.slice(48);
  let state = window.location.href.slice(48);

  const navigate = useHistory();
  const [description, setDescription] = useState("");

  const createCategory = async () => {
    await axios.post(`/ecom-categories`, {
      name: name,
      description: description,
      image: cloudImage?.public_id,
    });
    let path = `/ecom-categories`;
    navigate.push(path);
  };

  const updateCategory = (id) => {
    axios.put(`/ecom-categories/${id}`, {
      name: name,

      description: description,
      image: cloudImage?.public_id,
    });
    let path = `/ecom-categories`;
    navigate.push(path);
  };
  useEffect(() => {
    const fetchcategories = async () => {
      const { data } = await axios.get("/ecom-categories");

      setCategories(data);
    };
    fetchcategories();
    if (state == "create") {
      setIsCreate(true);
    }
  }, []);
  let a = categories?.find((y) => {
    return y._id === id;
  });
  const uploadFileHandler = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "sw2ks6ox");
    console.log(formData.get("file"));
    console.log('File uploaded')

    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/djpdvrlkk/image/upload",
      formData
    );

    setCloudImage(data);
    if (data) {
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* <Row>
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
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      uploadFileHandler(e);
                    }}
                  />
                  {isLoading && (
                    <Spinner animation="border" variant="primary" />
                  )}
                </div>
              </form>
            </div>
          </div>
        </Col>
        {isCreate ? (
          <Button
            className="me-2"
            variant="primary btn-lg"
            onClick={() => {
              createCategory();
            }}
          >
            Create Category
          </Button>
        ) : (
          <Button
            className="me-2"
            variant="primary btn-lg"
            onClick={() => {
              updateCategory(a?._id);
            }}
          >
            Update Category
          </Button>
        )}
      </Row> */}
      <form
        className="needs-validation"
        noValidate=""
        onSubmit={() => {
          if (isCreate) {
            createCategory();
          } else {
            updateCategory(a?._id);
          }
          let path = "/ecom-categories";
          navigate.push(path);
        }}
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="productname">Category Name</label>
            <input
              type="text"
              className="form-control"

              id="productname"
              defaultValue={a?.name}
              required
              onChange={(e) => {
                console.log(e.target.value);
                if (!e.target.value == "") {
                  setName(e.target.value);
                } else {
                  setName(a?.name);
                }
              }}
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="product description">Category description</label>
            <input
              type="text"
              className="form-control"
              id="product description"
              defaultValue={a?.description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="product description">Category Image</label>
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
            <Image cloudName="djpdvrlkk" publicId={a?.image}>
              <Transformation crop="scale" width="200" height="200" />
            </Image>
          </div>
        </div>

        {isCreate ? (
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Create Subcategory
          </button>
        ) : (
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Update Subcategory
          </button>
        )}
      </form>
    </>
  );
}
