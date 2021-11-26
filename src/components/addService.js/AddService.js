import axios from "axios";
import React, { useState } from "react";
import "./addservice.css";
const AddService = () => {
  const [addService, setAddservice] = useState({
    name: "",
    price: "",
    discription: "",
    img: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAddservice({ ...addService, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(addService);
    axios
      .post(
        "https://enigmatic-springs-04750.herokuapp.com/addservice",
        addService
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert("Service addeded");
        }
      });
    setAddservice({
      name: "",
      price: "",
      discription: "",
      img: "",
    });
  };
  const { name, price, discription, img } = addService;
  return (
    <div className="container-fluid " style={{ minHeight: "68vh" }}>
      <div className=" row" style={{ marginTop: "70px" }}>
        <div className=" row col-md-8 col-12  mx-auto">
          <div className="col-md-7 col-12 mx-auto ">
            <h1>Add Services...</h1>
            <hr className="w-50" />
          </div>
          <div className="col-md-7 col-12 mx-auto ">
            <input
              onChange={handleChange}
              value={name}
              name="name"
              type="text"
              placeholder="Place Name"
              className="form-control my-2 mx-auto "
            />
          </div>
          <div className="col-md-7 col-12 mx-auto ">
            <input
              onChange={handleChange}
              value={price}
              name="price"
              type="text"
              placeholder="price"
              className="form-control  my-2 mx-auto "
            />
          </div>
          <div className="col-md-7 col-12 mx-auto ">
            <textarea
              rows="3"
              onChange={handleChange}
              value={discription}
              name="discription"
              type="text"
              placeholder="discription"
              className="form-control  my-2 mx-auto "
            />
          </div>
          <div className="col-md-7 col-12 mx-auto ">
            <input
              onChange={handleChange}
              value={img}
              name="img"
              type="text"
              placeholder="Image URL"
              className="form-control  my-2 mx-auto "
            />
          </div>
          <div className="col-md-7 col-12 mx-auto ">
            <input
              type="submit"
              onClick={onSubmit}
              className="form-control  my-2 mx-auto btn btn-danger"
            />
          </div>
        </div>
      </div>
      {/* 
        
        
        
        */}
    </div>
  );
};

export default AddService;
