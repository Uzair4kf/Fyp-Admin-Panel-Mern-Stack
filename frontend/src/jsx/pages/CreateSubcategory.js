import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
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
  const [isCreate, setIsCreate] = useState(false);
  let id = window.location.href.slice(51);
  let state = window.location.href.slice(51);
  console.log("state :", state);
  const history = useHistory();
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
  const createSubcategory = async () => {
    const { data } = await axios.post(`/ecom-subcategories`, {
      name: name,
      parentId: category,
      description: description,
      image: cloudImage?.public_id,
    });
  };

  useEffect(() => {
    if (state == "create") {
      setIsCreate(true);
    }
  }, []);
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
      <form
        className="needs-validation"
        noValidate=""
        onSubmit={() => {
          if (isCreate) {
            createSubcategory();
          } else {
            updateSubcategory(a?._id);
          }
          let path = "/ecom-subcategories";
          history.push(path);
        }}
      >
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="productname">Subcategory Name</label>
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
            <label htmlFor="product description">Subcategory description</label>
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
            <label htmlFor="product description">Subcategory Image</label>
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
            <div className="col-md-6 mb-3">
              <div class="new-arrivals-img-contnent">
                <Image cloudName="djpdvrlkk" publicId={a?.image} />
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="product description">Select Category</label>
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
