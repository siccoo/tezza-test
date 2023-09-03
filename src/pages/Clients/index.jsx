import React from "react";
import SidebarLayout from "../../components/Sidebar";
import { Table, theme } from "antd";

const Clients = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Residential Address",
      dataIndex: "address",
      key: "address",
      render: (text) => (
        <span style={{ whiteSpace: "pre-line" }}>{text}</span>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08168754323",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      key: "2",
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08168754323",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      key: "3",
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08168754323",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      key: "4",
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08168754323",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      key: "5",
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08168754323",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
    {
      key: "6",
      name: "Adegoke Oluwadailare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08168754323",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigeria",
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <SidebarLayout>
      <div
        style={{
          marginTop: 40,
          marginBottom: -30,
        }}
      >
        <div style={{ marginLeft: 38 }}>
          <h1 className="h1_welcome">Clients</h1>
          <p className="p_welcome">Here's the clients list</p>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          padding: 24,
          marginLeft: 35,
          marginRight: 30,
          minHeight: 550,
          background: colorBgContainer,
          borderRadius: 5,
        }}
      >
        <div className="workspace_container">
          <input
            type="text"
            placeholder="Search by name, email..."
            className="work_input"
          />
          <a href="/clients-profile" className="work_btn" type="submit">
            Add new Client
          </a>
        </div>
        <br />
        <div>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Clients;
