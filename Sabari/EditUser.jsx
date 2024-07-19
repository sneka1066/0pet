import React, { useState } from "react";
import "./Styles.css";

function EditUser() {
  const [inputBox, setInputBox] = useState([
    { label: "User Name:", value: "Arun" },
    { label: "Email:", value: "aaa@gmail.com" },
    { label: "City:", value: "Perumal Puram" },
    { label: "District:", value: "Tirunelveli" },
    { label: "Pincode:", value: "628005" },
  ]);
 
  return (
    <div className="Add-stations">
      <div className="Add-station">
        <p>Edit User</p>
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
                  value={val.value}
                  // placeholder={val.placeholder}
                  className="inputbox"
                  style={{ width: "90%", border: 0, outline: 0 }}
                />
              </div>
            );
          })}
        </div>
        <div className="w-100 d-flex justify-content-center pb-3">
          <button className="subbox">Save Changes</button>
        </div>
        <div className="w-100 d-flex justify-content-center ">
          <button className="subbox bg-white">Back</button>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
