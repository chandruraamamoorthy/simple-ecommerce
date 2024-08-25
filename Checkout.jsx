import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem.jsx";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const params = useParams();
  const list = useSelector((state) => state.cart.list);

  const ProductList = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
  ];

  const [state, setState] = useState(
    params.id
      ? [
          {
            ...ProductList.find(
              (element) => element.id === parseInt(params.id)
            ),
            count: 1,
          },
        ]
      : list
  );

  const navigate = useNavigate();

  const incrementItem = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((prevState) => [
      ...prevState.slice(0, index),
      { ...item, count: item.count + 1 },
      ...prevState.slice(index + 1),
    ]);
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemFromCart(item);
    } else {
      const index = state.findIndex((product) => product.id === item.id);
      setState((prevState) => [
        ...prevState.slice(0, index),
        { ...item, count: item.count - 1 },
        ...prevState.slice(index + 1),
      ]);
    }
  };

  const removeItemFromCart = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1),
    ]);
  };

  return (
    <div className="mt-5">
      {state.length > 0 ? (
        <>
          {list.map((item) => (
            <ProductListItem
              key={item.id}
              {...item}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemFromCart(item)}
            />
          ))}
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-success"
              onClick={() => navigate("/success")}
            >
              Place Order
            </button>
          </div>
        </>
      ) : (
        <h3 className="text-center mt-5">No items in the checkout</h3>
      )}
    </div>
  );
};

export default Checkout;
