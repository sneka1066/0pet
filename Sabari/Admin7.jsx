import React, { useState } from "react";
import "./Styles.css";

function Admin7() {
  const [inputBox, setInputBox] = useState([
    { label: "Station ID:", placeholder: "Enter Station ID" },
    { label: "Station Name:", placeholder: "Enter Station name" },
    { label: "City:", placeholder: "Enter City Name" },
    { label: "District:", placeholder: "Enter District Name" },
    { label: "Pincode:", placeholder: "Enter Pincode" },
    { label: "Location:", placeholder: "Enter Location" },
  ]);

  return (
    <div className="Add-stations">
      <div className="Add-station">
        <p>Add Station</p>
      </div>
      <div className="Container">
        <div className="Container-body">
          {inputBox.map((val) => {
            return (
              <div className="input">
                <div style={{ paddingBottom: "20px" }}>
                  <label>{val.label}</label>
                </div>
                <input
                  type="text"
                  placeholder={val.placeholder}
                  className="inputbox"
                  style={{ width: "90%", border: 0, outline: 0 }}
                />
              </div>
            );
          })}
        </div>
        <div className="w-100 d-flex justify-content-center pb-3">
          <button className="subbox">Add Station</button>
        </div>
        <div className="w-100 d-flex justify-content-center ">
          <button className="subbox bg-white">Discard</button>
        </div>
      </div>
    </div>
  );
}

export default Admin7;
