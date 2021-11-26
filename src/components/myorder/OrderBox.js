import React from "react";

const OrderBox = ({ order, deleteItem, status, statusChange }) => {
  // console.log(order);
  const { _id, name, email, place, price, state } = order;
  return (
    <>
      <div className="row my-3 pb-1  border-bottom">
        <div className="col-md-2 mx-auto">
          <h5 className="text-center">{name}</h5>
        </div>
        <div className="col-md-3 mx-auto overflow-hidden">
          <h5 className="text-center">{email}</h5>
        </div>
        <div className="col-md-2 mx-auto">
          <h5 className="text-center">{place}</h5>
        </div>
        <div className="col-md-1 mx-auto">
          <h5 className="text-center">${price}</h5>
        </div>
        <div className="col-md-2 mx-auto">
          <h5 className="text-center">{state}</h5>
        </div>
        <div className="col-md-1 mx-auto d-flex justify-content-center align-items-center">
          <button
            onClick={() => deleteItem(_id)}
            className="btn btn-danger text-center"
          >
            Cancel
          </button>
        </div>
        {status === 1 && (
          <div className="col-md-1 mx-auto d-flex justify-content-center align-items-center">
            <button
              onClick={() => statusChange(_id, state)}
              className="btn btn-danger text-center mt-1 ms-md-2 "
            >
              Status
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderBox;
