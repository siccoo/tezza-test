import React from "react";
import SidebarLayout from "../../components/Sidebar";
// import { Breadcrumb } from "antd";

// import { Card, Space } from "antd";

const Clients = () => {
  return (
    <SidebarLayout>
      <>
        <div
          style={{
            marginTop: 20,
            marginBottom: -30,
          }}
        >
          <div style={{ marginLeft: 38 }}>
            <h1 className="h1_welcome">Your Workspace</h1>
            <p className="p_welcome">Welcome, xxx</p>
          </div>
        </div>
        <div
          style={{
            paddingTop: 5,
            paddingRight: 40,
            paddingLeft: 40,
            paddingBottom: 40,
            minHeight: 630,
          }}
        >
          <div className="client_content">
            <p className="p-over">Overview</p>
            <div className="card_compartment">
              <div className="client_card">
                <div className="span A"></div>
                <div className="span B">
                  <div style={{display: "flex", paddingLeft: 7, paddingRight: 7, justifyContent: "space-between"}}>
                    <p className="p-today">Today's Agenda</p>
                  </div>
                </div>
              </div>
              <div className="client_card B"></div>
            </div>
          </div>
        </div>
      </>
    </SidebarLayout>
  );
};

export default Clients;
