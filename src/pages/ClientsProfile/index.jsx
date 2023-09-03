import React from "react";
import SidebarLayout from "../../components/Sidebar";
import UserIcon from "../../assets/images/profileAvatar.png";

import { theme, Card, Row, Col, Typography } from "antd";

// import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ClientsProfile = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <SidebarLayout>
        <div
          style={{
            marginTop: 40,
            marginBottom: -30,
          }}
        >
          <div style={{ marginLeft: 38 }}>
            <h1 className="h1_welcome">Clients Profile</h1>
            <p className="p_clientsProfile">View Client's profile here</p>
          </div>
        </div>
        <div
          style={{
            padding: 24,
            marginLeft: 35,
            marginRight: 30,
            minHeight: 600,
            background: colorBgContainer,
            borderRadius: 5,
          }}
        >
          <div>
            <Card
              bordered={true}
              style={{
                border: "none",
                backgroundColor: "#FAFAFA",
                marginBottom: 20,
              }}
              className="clientProfile_card"
            >
              <div>
                <p>Client's Picture</p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <img
                    src={UserIcon}
                    alt="user"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  {/* <Avatar size={100} icon={<UserOutlined />} /> */}
                </div>
                <div style={{ marginLeft: "30px" }}>
                  {" "}
                  {/* Adjust margin for spacing */}
                  <div>
                    <Text strong style={{ fontFamily: "Inter", fontSize: 16 }}>
                      Odusote Mayokun{" "}
                    </Text>
                  </div>
                  <div className="email">
                    <Text className="text_info">
                      adegoketemitope1909@gmail.com
                    </Text>
                  </div>
                  <div className="personal-info">
                    <Text className="text_info" style={{ marginRight: 20 }}>
                      Female
                    </Text>
                    <Text className="text_info" style={{ marginRight: 20 }}>
                      54 years old
                    </Text>
                    <Text className="text_info">Nigerian</Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Row gutter={16}>
              <Col span={12}>
                {/* Content for the left column */}
                <div
                  style={{ paddingLeft: 0, paddingRight: 20, paddingTop: 20 }}
                >
                  <div className="clients_data">
                    <span>Full Name</span>
                    <p>Odusote Mayokun</p>
                  </div>

                  <div className="clients_data">
                    <span>
                      Applicants Fullname{" "}
                      <small style={{ color: "#B23331", fontWeight: "normal" }}>
                        (as shown in passport)
                      </small>
                    </span>
                    <p>Odusote Mayokun Kemi</p>
                  </div>

                  <div className="clients_data">
                    <div style={{ display: "flex" }}>
                      <span>Place of Birth</span>
                      <span style={{ paddingLeft: 70 }}>Date of Birth</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p>Nigeria</p>
                      <p style={{ paddingLeft: 105 }}>04/11/2012</p>
                    </div>
                  </div>

                  <div className="clients_data">
                    <span>Marital Status</span>
                    <p>Married</p>
                  </div>

                  <div className="clients_data">
                    <span>Current Occupation</span>
                    <p>Engineer</p>
                  </div>

                  <div className="clients_data">
                    <span>Residential Address</span>
                    <p>
                      No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, <br />
                      Nigeria
                    </p>
                  </div>

                  <div className="clients_data">
                    <span>Country of Interest</span>
                    <p>Iceland</p>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                {/* Content for the right column */}
                <div
                  style={{ paddingLeft: 0, paddingRight: 20, paddingTop: 20 }}
                >
                  <div className="clients_data">
                    <span>Email</span>
                    <p>adegoketemitope@gmail.com</p>
                  </div>

                  <div className="clients_data">
                    <span>Gender</span>
                    <p>Female</p>
                  </div>

                  <div className="clients_data">
                    <span>Country of Citizenship</span>
                    <p>Nigeria, Uganda</p>
                  </div>

                  <div className="clients_data">
                    <span>
                      Education{" "}
                      <small style={{ color: "#B23331", fontWeight: "normal" }}>
                        (Client's highest level of education)
                      </small>
                    </span>
                    <p>Bachelor Degree</p>
                  </div>

                  <div className="clients_data">
                    <span>Phone Number</span>
                    <p>+234(0)8167345689</p>
                  </div>

                  <div className="clients_data">
                    <span>Mailing Address</span>
                    <p>
                      No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, <br />
                      Nigeria{" "}
                    </p>
                  </div>

                  <div className="clients_data">
                    <span>Purpose of Traveling</span>
                    <p>Trading</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </SidebarLayout>
    </>
  );
};

export default ClientsProfile;
