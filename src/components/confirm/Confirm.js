import React from "react";
import { useHistory } from "react-router-dom";

const Confirm = () => {
  const history = useHistory();
  const gohome = () => {
    history.push("/");
  };
  return (
    <div
      className="container-fluid border d-flex justify-content-center align-items-center"
      style={{ minHeight: "68vh" }}
    >
      <div className="">
        <h1 className="text-danger">You successfully confirm your order</h1>
        <button onClick={gohome} className="btn btn-info text-center mx-auto">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Confirm;
