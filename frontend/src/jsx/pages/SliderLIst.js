import React, { useState, useEffect } from "react";
import { Row, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Sliders from "./Sliders";
export default function SliderLIst() {
      const history = useHistory();
  const [sliders, setSliders] = useState([]);
  useEffect(() => {
    const fetchsliders = async () => {
      const { data } = await axios.get("/Slider");

      setSliders(data);
    };
    fetchsliders();
  }, []);

 
    const createSlider = async () => {
 
      let path = `/CreateSlider`;
      history.push(path);
    };

  return (
    <>
      <Button
        onClick={() => {
          createSlider();
        }}
      >
        Create
      </Button>
      <Row>
        {sliders.map((slider, i) => {
          return <Sliders slider={slider} key={i} />;
        })}
      </Row>
    </>
  );
}
