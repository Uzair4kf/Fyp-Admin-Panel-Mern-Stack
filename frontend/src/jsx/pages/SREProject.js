import React, { useState, useEffect } from "react";
import { Row, Card, Col, Button, Nav, Spinner } from "react-bootstrap";
export default function SREProject() {
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [hasDiscount, setHasDiscount] = useState(false);
  const [changeColor, setchangeColor] = useState(false);
  console.log(" hieght:", window.innerWidth);

  //Explanning variable 
  if (window.innerWidth == 809 && window.innerHeight == 564) {
    alert("Size decrease");

    console.log(" Width decreased");
    console.log(" Height decreased");
  }

  // Replace Temp Query

  const calculateTax = (quantity, itemPrice) => {
    discount(quantity);
    let basePrice = quantity * itemPrice;
    if (basePrice > 1000) {
      return basePrice * 0.45;
    } else {
      return basePrice * 0.98;
    }
  };

  //inline Temp
  const discount = (quantity) => {
    let itemquantity = quantity;
    if (itemquantity < 5) {
      setHasDiscount(false);
    } else {
      setHasDiscount(true);
    }
  };
  return (
    <>
      <label htmlFor="cc-expiration">Price</label>
      <input
        type="number"
        className="form-control"
        id="cc-cvv"
        required
        defaultValue=""
        onChange={(e) => setPrice(e.target.value)}
      />
      <label htmlFor="cc-expiration">Quantity</label>
      <input
        type="number"
        className="form-control"
        id="cc-cvv"
        required
        defaultValue=""
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button
        onClick={() => {
          calculateTax(quantity, price);
        }}
      >
        Calculate tax
      </Button>
      {changeColor && (
        <Button
          variant="danger"
          onClick={() => {
            calculateTax(quantity, price);
          }}
        >
          Calculate tax
        </Button>
      )}
      {hasDiscount ? <h2>has Discount</h2> : <h2>No Discount</h2>}
    </>
  );
}
