import React from "react";
import "../style/home.css";
import { setDataproduct } from "./Redux/ProductSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Bookproduct = ({ image, bookdata }) => {
  // console.log(bookdata.productprice);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const Saveproductonredux = () => {
    dispatch(setDataproduct(bookdata));
    Navigate("/fullviewpro");
  };
  return (
    // <div className="horizontal-product">
    <div className="product-cart">
      <img src={image} alt="" onClick={Saveproductonredux} />
    </div>
    // </div>
  );
};

export default Bookproduct;
