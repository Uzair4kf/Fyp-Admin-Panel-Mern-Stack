import { Row, Col, Button, Dropdown, Spinner } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Slider() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cloudImage, setCloudImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const createSlider = async () => {
    const { data } = await axios.post(`/Slider`, {
      name: name,
      description: description,
      image: cloudImage?.public_id,
    });
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
                    name="image"
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
        <Button
          className="me-2"
          variant="primary btn-lg"
            onClick={createSlider}
        >
          Create Slider
        </Button>
      </Row>
    </>
  );
}
