import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { GrAppsRounded, GrTask, GrScheduleNew } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { TbReportAnalytics, TbReportMoney } from "react-icons/tb";

import { Layout, Menu } from "antd";
import Topbar from "../Topbar";

const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Workspace", "1", <GrAppsRounded className="side-icons" />),
  getItem("Clients", "2", <FaUsers className="side-icons" />),
  getItem(
    "Schedule Appointment",
    "3",
    <GrScheduleNew className="side-icons" />
  ),
  getItem("Payment", "4", <TbReportMoney className="side-icons" />),
  getItem("Task", "5", <GrTask className="side-icons" />),
  getItem("Message", "6", <AiOutlineMessage className="side-icons" />),
  getItem("Reports", "sub2", <TbReportAnalytics className="side-icons" />, [
    getItem("Team 1", "7"),
    getItem("Team 2", "8"),
  ]),
];

const SidebarLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to={"/"}>
          <img className="tezzaLogo" src={Logo} alt="tezzaLogo" />
        </Link>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          {items.map((item) => {
            if (item.label === "Workspace" || item.label === "Clients") {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={`/${item.label.toLowerCase()}`}>{item.label}</Link>
                </Menu.Item>
              );
            } else if (item.label === "Reports") {
              return (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((subItem) => (
                    <Menu.Item key={subItem.key}>
                      <Link
                        to={`/${subItem.label.toLowerCase().replace(" ", "-")}`}
                      >
                        {subItem.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Topbar />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default SidebarLayout;
