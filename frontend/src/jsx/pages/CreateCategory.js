import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Row, Card, Col, Button, Nav, Image, Spinner } from "react-bootstrap";
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
  console.log("state :", state);

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
      </Row>
    </>
  );
}
