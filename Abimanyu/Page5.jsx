import React from "react";
import { Icon } from "@iconify/react";
import "./page5.css";

const Page5 = () => {
  return (
    <div style={{ width: "100vw", minHeight: "100vh" }} className="p-5">
      <div className="w-100 d-flex justify-content-between align-items-center flex-column flex-sm-row ">
        <div>
          <h3>Station Control</h3>
        </div>
        <div className="d-flex gap-3">
          <div className="d-flex justify-content-center align-items-center buttonGroup">
            <Icon icon="ic:round-add" fontSize={25} color="black" />
            <button className="button">Add Station</button>
          </div>
          <div className="d-flex justify-content-center align-items-center buttonGroup">
            <Icon icon="mdi:edit-box" fontSize={25} color="black" />
            <button className="button">Edit</button>
          </div>
          <div className="d-flex justify-content-center align-items-center buttonGroup">
            <Icon
              icon="material-symbols-light:delete"
              fontSize={25}
              color="black"
            />
            <button className="button">Delete</button>
          </div>
        </div>
      </div>
      <div className="w-100 pt-4 tableOver">
        <table className="table">
          <thead>
            <tr className="border">
              <th style={{ backgroundColor: "#7ea1ff" }} className="border">
                Station ID
              </th>
              <th style={{ backgroundColor: "#7ea1ff" }} className="border">
                Station Name
              </th>
              <th style={{ backgroundColor: "#7ea1ff" }} className="border">
                City
              </th>
              <th style={{ backgroundColor: "#7ea1ff" }} className="border">
                District
              </th>
              <th style={{ backgroundColor: "#7ea1ff" }} className="border">
                Pincode
              </th>
              <th style={{ backgroundColor: "#7ea1ff" }} className="border">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td
                style={{
                  padding: 20,
                  width: "16.6%",
                  backgroundColor: "#bfd0ff",
                }}
                className="border"
              >
                101
              </td>
              <td
                style={{
                  padding: 20,
                  width: "16.6%",
                  backgroundColor: "#bfd0ff",
                }}
                className="border"
              >
                Arun Tea Stall
              </td>
              <td
                style={{
                  padding: 20,
                  width: "16.6%",
                  backgroundColor: "#bfd0ff",
                }}
                className="border"
              >
                Perumal Puram
              </td>
              <td
                style={{
                  padding: 20,
                  width: "16.6%",
                  backgroundColor: "#bfd0ff",
                }}
                className="border"
              >
                Tirunelveli
              </td>
              <td
                style={{
                  padding: 20,
                  width: "16.6%",
                  backgroundColor: "#bfd0ff",
                }}
                className="border"
              >
                628005
              </td>
              <td
                style={{
                  padding: 20,
                  width: "16.6%",
                  backgroundColor: "#bfd0ff",
                }}
                className="border"
              >
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
            <tr className="">
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                101
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Arun Tea Stall
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Perumal Puram
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                Tirunelveli
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                628005
              </td>
              <td style={{ padding: 20, width: "16.6%" }} className="border">
                PP3H+25J, Vasanth Nagar, Tirunelveli, Tamil Nadu 627005
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page5;
