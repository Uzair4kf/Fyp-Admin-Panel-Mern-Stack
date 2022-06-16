import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
  Row,
  Card,
  Col,
  Button,
  Nav,
  Image,
  Dropdown,
  Spinner,
} from "react-bootstrap";
export default function CreateSubcategory() {
  const [subcategories, setSubcategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentId, setParentId] = useState("");
  const [cloudImage, setCloudImage] = useState();
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  let id = window.location.href.slice(51);
  console.log(id);
  let a = subcategories?.find((y) => {
    return y._id === id;
  });
  const updateSubcategory = async (id) => {
    await axios.put(`/ecom-subcategories/${id}`, {
      name: name,
      parentId: category,
      description: description,
      image: cloudImage?.public_id,
    });
  };

  console.log(" cloud image", cloudImage?.public_id);
  useEffect(() => {
    const fetchsubcategories = async () => {
      const { data } = await axios.get("/ecom-subcategories");

      setSubcategories(data);
    };
    fetchsubcategories();
    const fetchcategories = async () => {
      const { data } = await axios.get("/ecom-categories");

      setCategories(data);
    };
    fetchcategories();
  }, []);
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
  const handleSelect = (e) => {
    setCategory(e);
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
                    placeholder="Sub Category Name"
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
                    placeholder="Sub Category Description"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Category</Dropdown.Toggle>

            <Dropdown.Menu>
              {categories?.map((category, i) => {
                return (
                  <Dropdown.Item
                    onSelect={() => {
                      handleSelect(category.name);
                    }}
                  >
                    {category.name}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
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
