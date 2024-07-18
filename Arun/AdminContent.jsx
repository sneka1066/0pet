import React from "react";
import { Icon } from "@iconify/react";
import Card from "react-bootstrap/Card";

const AdminContent = () => {
  return (
    <div>
      <div>
        <div>
          <p style={{ fontSize: 18, fontWeight: 500 }}>Overview</p>
        </div>
        <div className="d-flex gap-3">
          <Card style={{ width: "20rem", height: "10rem" }} className="shadow">
            <Card.Body
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <div
                className="shadow"
                style={{
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                <Icon icon="bxs:user" fontSize={25} />
              </div>
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontSize: 18, fontWeight: "500" }}>Total Users</p>
                <p
                  style={{ fontSize: 18, color: "#7ea1ff", fontWeight: "500" }}
                >
                  350
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }} className="shadow">
            <Card.Body
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <div
                className="shadow"
                style={{
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                <Icon
                  icon="material-symbols-light:water-damage"
                  fontSize={25}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: 18, fontWeight: "500" }}>
                  Total Stations
                </p>
                <p
                  style={{ fontSize: 18, color: "#7ea1ff", fontWeight: "500" }}
                >
                  350
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card style={{ width: "20rem" }} className="shadow">
            <Card.Body
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
              }}
            >
              <div
                className="shadow"
                style={{
                  padding: 10,
                  borderRadius: 50,
                }}
              >
                <Icon icon="mdi:ban" fontSize={25} />
              </div>
              <div style={{ alignItems: "center", justifyContent: "center" }}>
                <p style={{ fontSize: 18, fontWeight: "500" }}>
                  Total PET Reduced
                </p>
                <p
                  style={{ fontSize: 18, color: "#7ea1ff", fontWeight: "500" }}
                >
                  350
                </p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div style={{ paddingTop: 20 }}>
        <div>
          <p style={{ fontSize: 18, fontWeight: 500 }}>PET Restricted Report</p>
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
