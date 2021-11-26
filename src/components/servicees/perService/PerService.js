import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../useHooks/useAuth";
import { useHistory } from "react-router-dom";
const PerService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { user } = useAuth();
  const history = useHistory();
  // console.log(user);
  useEffect(() => {
    fetch(`https://enigmatic-springs-04750.herokuapp.com/singleService/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
  const confirmation = (e) => {
    e.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      place: service.name,
      price: service.price,
      state: "pending",
    };
    axios
      .post("https://enigmatic-springs-04750.herokuapp.com/addOrder", order)
      .then((res) => {
        if (res.data.insertedId) {
          history.push("/confirm");
        }
      });
  };
  return (
    <>
      <div className="row ">
        <div className="col-md-9 col-12 mx-auto ">
          <div className="row">
            <div className=" col-md-10 col-12  mx-auto d-flex justify-content-center align-items-center">
              <img
                src={service.img}
                className="mt-3"
                style={{ width: "85%" }}
                alt=""
              />
            </div>
            <div className="col-10 col-md-8  mx-auto">
              <div className="my-4">
                <h1 className="m-0 text-danger">
                  TOURS IN{" "}
                  <span className="text-uppercase">{service.name}</span>
                </h1>
                <hr className="w-50" />
                <p>{service.discription}</p>
              </div>
            </div>
            <div className="col-10 col-md-8  mx-auto">
              <form onSubmit={confirmation} className="row">
                <div className="col-md-10 col-12 mx-auto my-1 ">
                  <h4 className="text-danger text-center">
                    BOOK YOUR JOURNY PLACE
                  </h4>
                  <hr />
                </div>
                <div className="col-md-10 col-12 mx-auto my-1 ">
                  <input
                    type="text"
                    className="form-control"
                    value={user.displayName}
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-1 ">
                  <input
                    type="text"
                    className="form-control"
                    value={user.email}
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-1 ">
                  <input
                    type="text"
                    className="form-control -warning"
                    value={service.name}
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-1 ">
                  <input
                    type="text"
                    className="form-control -warning"
                    value={`$${service.price}`}
                    aria-label="First name"
                  />
                </div>
                <div className="col-md-10 col-12 mx-auto my-1 ">
                  <input
                    type="submit"
                    className="form-control btn btn-danger"
                    value="Confirm Order"
                    aria-label="First name"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PerService;
