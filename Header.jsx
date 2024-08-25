import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header bg-secondary p-3">
      <h3 className="text-white">CSP Online Store</h3>
      <div className="row justify-content-center pt-2 pb-1">
        <div className="col-sm-12 col-md-7 col-lg-6 col-xl-5 d-flex gap-4">
          <button className="btn btn-success" onClick={() => navigate("/")}>
            Home
          </button>
          <input
            type="search"
            placeholder="search..."
            className="form-control"
          />
          <button className="btn btn-success" onClick={() => navigate("/cart")}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
