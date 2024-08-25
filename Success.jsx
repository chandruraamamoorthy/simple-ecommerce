import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [count, setCount] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    const timeout = setTimeout(() => navigate("/"), 15000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="text-center mt-5">
      <h4>
        Your order has been successfully placed. You will be redirected in
        <span className="px-2">{count}</span> seconds.
      </h4>
    </div>
  );
};

export default Success;
