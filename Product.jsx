import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/reducer/Cart";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = ProductList.find((element) => element.id === parseInt(id));

  const [alert, setAlert] = useState(false);

  const list = useSelector((state) => state.cart.list);
  const element = list.find((item) => item.id === product?.id);

  const addToCart = () => {
    if (product) {
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
      dispatch(addItem(product));
    }
  };

  if (!product) {
    return <div className="alert alert-danger">Product not found</div>;
  }

  return (
    <div className="card m-2">
      {alert && (
        <span className="alert alert-success text-center">
          Item added to cart
        </span>
      )}
      <div className="productCardImg text-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="img-fluid p-2"
          style={{ maxHeight: "300px", maxWidth: "100%" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <h6 className="mt-2">Price: {`${product.price}`}</h6>
        <h6 className="mt-2">Discount: {`${product.discountPercentage} %`}</h6>
        <h6 className="mt-2">Rating: {`${product.rating}/5`}</h6>
        <div className="mt-3 d-flex flex-wrap justify-content-center gap-2">
          {product.stock > 0 ? (
            <>
              <button
                className="btn btn-success"
                onClick={() => navigate(`/checkout/${product.id}`)}
              >
                Buy Now
              </button>
              {element?.count > 0 ? (
                <button
                  className="btn btn-warning"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button className="btn btn-warning" onClick={addToCart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className="btn btn-danger">Out of Stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
