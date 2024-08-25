import React from "react";

const ProductListItem = (props) => {
  return (
    <div className="m-2 d-flex align-items-center justify-content-center">
      <div className="productCardImg">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt="props.title"
          className="p-2"
        />
      </div>
      <h5 className="card-title me-3">{props.title}</h5>
      <h6 className="mt-2 me-3">price: {`${props.price}`}</h6>
      <h6 className="mt-2 me-3">Discount: {`${props.discountPercentage} %`}</h6>
      <h6 className="mt-2 me-3">Rating: {`${props.rating}/5`}</h6>
      <button className="btn btn-danger me-2" onClick={props.incrementItem}>
        +
      </button>
      Quantity <b className="p-2">{props.count}</b>
      <button
        className="btn btn-danger ms-2 me-3"
        onClick={props.decrementItem}
      >
        -
      </button>
      <button className="btn btn-danger" onClick={props.removeItem}>
        Remove
      </button>
    </div>
  );
};

export default ProductListItem;
