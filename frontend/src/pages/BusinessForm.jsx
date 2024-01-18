import React, { useState } from "react";
import axios from "axios";

const BusinessForm = () => {
  const bName = document.getElementById("businessName");
  const aadhar = document.getElementById("aadharNo");
  const gst = document.getElementById("gst");
  const addr = document.getElementById("bus-address");
  const city = document.getElementById("bus-city");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(bName.value);
    console.log(gst.value);
    console.log(aadhar.value);

    const data = {
      businessName: bName.value,
      aadharNo: aadhar.value,
      gstNo: gst.value,
      userID: localStorage.getItem("id"),
      ownerName: localStorage.getItem("name"),
      address: addr.value,
      city: city.value,
    };

    console.log(data);

    axios
      .post("http://localhost:8080/business/entry", data)
      .then(() => {
        console.log("added business");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add Business Information</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
        <div className="name-business">
          <label htmlFor="">Business Name: </label>
          <input name="businessName" id="businessName"></input>
        </div>
        <div className="business-aadhar">
          <label htmlFor="aadharNo">Aadhaar No: </label>
          <input
            name="aadharNo"
            id="aadharNo"
            placeholder="XXXX-XXXX-XXXX"
            maxLength={12}
          ></input>
        </div>
        <div className="business-gst">
          <label htmlFor="gst">GST No: </label>
          <input name="gst" id="gst" maxLength={15}></input>
        </div>
        <div className="bus-address">
          <label htmlFor="bus-address">Business Address: </label>
          <input name="bus-address" id="bus-address"></input>
        </div>
        <div className="bus-city">
          <label htmlFor="bus-city">Business City: </label>
          <input name="bus-city" id="bus-city"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessForm;
