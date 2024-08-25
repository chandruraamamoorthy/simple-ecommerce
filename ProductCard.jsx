import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2 cursor-pointer"
      style={{ width: 300 }}
      role="button"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div className="productCardImg">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt="props.title"
          className="p-2"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">price: {`${props.price}`}</h6>
        <h6 className="mt-2">Discount: {`${props.discountPercentage} %`}</h6>
        <h6 className="mt-2">Rating: {`${props.rating}/5`}</h6>
        <div className="mt-3">
          {props.stock > 0 ? (
            <button className="btn btn-success">Available</button>
          ) : (
            <button className="btn btn-danger">Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
