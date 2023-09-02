import React from "react";
import { Layout, theme } from "antd";

import { IoNotificationsOutline } from "react-icons/io5";
import UserIcon from "../../assets/images/userImg.png";

const { Header } = Layout;

const Topbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <div className="topbar__wrapper">
          <div className="topbar__left">
            {/* <p>Customers</p> */}
          </div>
          <div className="topbar__right">
            <div className="icons__container">
              <IoNotificationsOutline size={22} className="notify" alt="notify" />
              {/* <img className="notify" src={NotificationIcon} alt="notify" /> */}
              <span className="badge">2</span>
            </div>
            <div style={{display: "flex", }}>
              <p className="topbar_username">Kelin</p>
              <img className="topbar__avatar" src={UserIcon} alt="user_icon" />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Topbar;
