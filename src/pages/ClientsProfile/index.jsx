import React from "react";
import SidebarLayout from "../../components/Sidebar";
import UserIcon from "../../assets/images/profileAvatar.png";
import { theme, Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

const ClientsProfile = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const clientData = {
    fullName: "Odusote Mayokun",
    email: "adegoketemitope1909@gmail.com",
    gender: "Female",
    age: "54",
    nationality: "Nigerian",
    profilePicture: UserIcon,
    placeOfBirth: "Nigeria",
    dateOfBirth: "04/11/2012",
    maritalStatus: "Married",
    occupation: "Engineer",
    countryInterest: "Iceland",
    citizenShip: "Nigeria, Uganda",
    education: "Bachelor Degree",
    travelling: "Trading",
    phoneNumber: "+234(0)8167894354"
  };

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
                    src={clientData.profilePicture}
                    alt="user"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <div>
                    <Text strong style={{ fontFamily: "Inter", fontSize: 16 }}>
                      {clientData.fullName}
                    </Text>
                  </div>
                  <div className="email">
                    <Text className="text_info">{clientData.email}</Text>
                  </div>
                  <div className="personal-info">
                    <Text className="text_info" style={{ marginRight: 20 }}>
                      {clientData.gender}
                    </Text>
                    <Text className="text_info" style={{ marginRight: 20 }}>
                      {clientData.age} years old
                    </Text>
                    <Text className="text_info">{clientData.nationality}</Text>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Row gutter={16}>
              <Col span={12}>
                <div
                  style={{ paddingLeft: 0, paddingRight: 20, paddingTop: 20 }}
                >
                  <div className="clients_data">
                    <span>Full Name</span>
                    <p>{clientData.fullName}</p>
                  </div>

                  <div className="clients_data">
                    <span>
                      Applicants Fullname{" "}
                      <small style={{ color: "#B23331", fontWeight: "normal" }}>
                        (as shown in passport)
                      </small>
                    </span>
                    <p>{clientData.fullName}</p>
                  </div>

                  <div className="clients_data">
                    <div style={{ display: "flex" }}>
                      <span>Place of Birth</span>
                      <span style={{ paddingLeft: 70 }}>Date of Birth</span>
                    </div>
                    <div style={{ display: "flex" }}>
                      <p>{clientData.placeOfBirth}</p>
                      <p style={{ paddingLeft: 105 }}>
                        {clientData.dateOfBirth}
                      </p>
                    </div>
                  </div>

                  <div className="clients_data">
                    <span>Marital Status</span>
                    <p>{clientData.maritalStatus}</p>
                  </div>

                  <div className="clients_data">
                    <span>Current Occupation</span>
                    <p>{clientData.occupation}</p>
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
                    <p>{clientData.countryInterest}</p>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div
                  style={{ paddingLeft: 0, paddingRight: 20, paddingTop: 20 }}
                >
                  <div className="clients_data">
                    <span>Email</span>
                    <p>{clientData.email}</p>
                  </div>

                  <div className="clients_data">
                    <span>Gender</span>
                    <p>{clientData.gender}</p>
                  </div>

                  <div className="clients_data">
                    <span>Country of Citizenship</span>
                    <p>{clientData.citizenShip}</p>
                  </div>

                  <div className="clients_data">
                    <span>
                      Education{" "}
                      <small style={{ color: "#B23331", fontWeight: "normal" }}>
                        (Client's highest level of education)
                      </small>
                    </span>
                    <p>{clientData.education}</p>
                  </div>

                  <div className="clients_data">
                    <span>Phone Number</span>
                    <p>{clientData.phoneNumber}</p>
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
                    <p>{clientData.travelling}</p>
                  </div>
                </div>
              </Col>
            </Row>
            <a href="!#" className="profile_btn" type="submit">
              Back
            </a>
          </div>
        </div>
      </SidebarLayout>
    </>
  );
};

export default ClientsProfile;
