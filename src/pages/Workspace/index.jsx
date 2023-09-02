import React from "react";
import SidebarLayout from "../../components/Sidebar";

const Workspace = () => {
  return (
    <SidebarLayout>
      <>
        <div
          style={{
            marginTop: 40,
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
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 15,
                      paddingRight: 7,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p className="p-today">Today's Agenda</p>
                  </div>
                  <p>
                    You don't have any schedule today.{" "}
                    <a href="#" className="add">
                      Add
                    </a>
                  </p>
                </div>
              </div>
              <div className="client_card B">
              <div className="span A"></div>
                <div className="span B">
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 15,
                      paddingRight: 7,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p className="p-today">Activity Report</p>
                    <span
                      style={{
                        alignItems: "center",
                        marginBottom: 5,
                        color: "#ddaa33",
                        fontSize: 12,
                        cursor: "pointer"
                      }}
                    >
                      View full activity report &rarr;{" "}
                    </span>
                  </div>
                  <p>
                    You don't have any schedule today.{" "}
                    <a href="#" className="add">
                      Add
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <div className="client_card C">
                <div className="span A"></div>
                <div className="span B">
                  <div
                    style={{
                      display: "flex",
                      paddingLeft: 15,
                      paddingRight: 7,
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p className="p-today">Task that are due</p>
                    <span
                      style={{
                        alignItems: "center",
                        marginBottom: 5,
                        color: "#ddaa33",
                        fontSize: 12,
                        cursor: "pointer"
                      }}
                    >
                      Create Tasks &rarr;{" "}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: 10,
                      borderRadius: 5,
                      backgroundColor: "#FBF6EB",
                      margin: 20,
                    }}
                  >
                    <span>Follow up with Odusote</span>
                    <p className="p-due">
                      Due on: 1/21/2021 &nbsp; &nbsp; Created on: 1/15/2021{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </SidebarLayout>
  );
};

export default Workspace;