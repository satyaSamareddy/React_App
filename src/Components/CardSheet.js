import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Avatar,
  Input,
  message,
  Upload,
  Space,
} from "antd";
import {
  UserOutlined,
  FolderOpenOutlined,
  ExclamationCircleOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  LoadingOutlined,
  PlusOutlined,
  MailOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./stylesheet.css";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
export default function CardSheet() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      <Card hoverable className="antd-card">
        <Row>
          <Col>
            
            <h4 className="set-name">Guy hawkins</h4>
          </Col>
          <Col>
            <Button className="setup-button">Add Account</Button>
          </Col>
          <Col>
            <Avatar size={40} icon={<UserOutlined />} />
          </Col>
        </Row>
      </Card>

      <div>
        <div>
          <Card hoverable className="antd-card1">
            <Col>
              <span className="set-font">My Prescription Categories</span>
            </Col>
            <Col className="set-para">
              <span>Analgesic</span>
            </Col>
            <Col className="set-para">
              <span>Anti-anxiety</span>
            </Col>
            <Col className="set-para">
              <span>Antiarrhythmic</span>
            </Col>
            <Col className="set-para">
              <span>Antocoagulant</span>
            </Col>
            <Row>
              <Col className="set-para">
                <span>Anticonvulsant</span>
              </Col>
              <Col>
                <div className="set-avatar">
                  <FolderOpenOutlined className="set-icon" />
                </div>
              </Col>
            </Row>
          </Card>
        </div>

        <div>
          <Row>
            <Col>
              <Card hoverable className="antd-card2">
                <Row>
                  <Col>
                    <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  </Col>
                  <Col className="set-span">
                    Guy is hearing -impaired so please speak loud,clear and
                    slow!
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  </Col>
                  <Col className="set-span">
                    Guy is a big Red Sox fan, any mention of this may help ease
                    tension.
                  </Col>
                </Row>
                <Col>
                  <h2 style={{ fontWeight: "900" }}>
                    <span>Vital Info(6)</span>
                  </h2>
                </Col>
                <Col className="set-para1">
                  <span>Nut Allergy</span>
                </Col>
                <Col className="set-para1">
                  <span>String Allergy</span>
                </Col>
                <Col className="set-para1">
                  <span>OSD</span>
                </Col>
                <Col className="set-para1">
                  <span>PTSD</span>
                </Col>
                <Col className="set-para1">
                  <span>Prosthetic Leg</span>
                </Col>
                <Col className="set-para1">
                  <span>Therapy Dog</span>
                </Col>
              </Card>
            </Col>
            <Col>
              <Card hoverable className="antd-card3">
                <Row>
                  <Col style={{ fontSize: "20px", fontWeight: "900" }}>
                    <span>Recent Activity</span>
                  </Col>
                  <Col>
                    <button className="btn">View All</button>
                  </Col>
                </Row>
                <Row>
                  <Col className="UserOutlined">
                    <Avatar size={40} icon={<UserOutlined />} />
                  </Col>
                  <Col className="UserOutlined1">
                    <span>Guy.H</span>
                  </Col>
                  <Col className="UserOutlined2">
                    <span>Care Recepient</span>
                  </Col>
                  <Col className="UserOutlined3">
                    <span>6/20/23</span>
                  </Col>
                  <Col className="set-para2">
                    <span>Added "Nuts-Allergy" to list of alerts.</span>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="UserOutlined">
                    <Avatar size={40} icon={<UserOutlined />} />
                  </Col>
                  <Col className="UserOutlined1">
                    <span>Kaylee W.</span>
                  </Col>
                  <Col className="UserOutlined4">
                    <span>Primary</span>
                  </Col>
                  <Col className="UserOutlined5">
                    <span>6/20/23</span>
                  </Col>
                  <Col className="set-para2">
                    <span>Sent a message</span>
                  </Col>
                </Row>
                <Row>
                  <Input
                    className="set-input"
                    style={{ padding: "20px" }}
                    placeholder="Hey everyone! Just a heads up,I will be taking Guy to our New Hampshire lake house this weekend Feel free to call me if you have any questions"
                  ></Input>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>

        <div>
          <Card hoverable className="antd-card4">
            <Col>
              <span style={{ fontSize: "20px", fontWeight: "900" }}>
                Stat Info
              </span>
            </Col>
            <br />
            <Col span={8}>
              <span className="setclass">Does Guy have a DNR order</span>
              <Col
                style={{ marginLeft: "15px", fontSize: "20px", color: "red" }}
              >
                <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                <span style={{ marginLeft: "10px" }}>Yes</span>
              </Col>
            </Col>
            <br />
            <Col>
              <span className="setclass">
                What are Guy's diagnoses/needs (select <br /> all that apply)?
              </span>
              <Col
                style={{ marginLeft: "15px", fontSize: "18px", color: "red" }}
              >
                <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                <span style={{ marginLeft: "10px" }}>Alzheimer's</span>
                <Col style={{ fontSize: "18px", color: "red" }}>
                  <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  <span style={{ marginLeft: "10px" }}>Asthma</span>
                </Col>
                <Col style={{ fontSize: "18px", color: "red" }}>
                  <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  <span style={{ marginLeft: "10px" }}>Back Pain</span>
                </Col>
                <Col style={{ fontSize: "18px", color: "red" }}>
                  <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  <span style={{ marginLeft: "10px" }}>Cerebral Palsy</span>
                </Col>
              </Col>
            </Col>
            <br />
            <Col>
              <span className="setclass">
                
                Does Guy have a Hearing Impairment?
              </span>
              <Col
                style={{ marginLeft: "15px", fontSize: "20px", color: "red" }}
              >
                <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                <span style={{ marginLeft: "10px" }}>Yes</span>
              </Col>
            </Col>
            <br />
            <Col>
              <span className="setclass">
                Does Guy have a Vision Impairment?
              </span>
              <Col
                style={{ marginLeft: "15px", fontSize: "20px", color: "green" }}
              >
                <CheckCircleOutlined />
                <span style={{ marginLeft: "10px" }}>No</span>
              </Col>
            </Col>
            <br />
            <Col>
              <span className="setclass">Does Guy have any Allergies?</span>
              <Col style={{ fontSize: "20px", color: "red" }}>
                <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                <span style={{ marginLeft: "10px" }}>Animals/Pet</span>
              </Col>
              <Col style={{ fontSize: "20px", color: "red" }}>
                <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                <span style={{ marginLeft: "10px" }}>Bee Sting</span>
              </Col>
              <Col style={{ fontSize: "20px", color: "red" }}>
                <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                <span style={{ marginLeft: "10px" }}>Dairy</span>
              </Col>
            </Col>
            <br />
            <Col>
              <span className="setclass">
                
                Is Guy tactile defensive? (Sensitive to being <br /> touched)?
              </span>
              <Col
                style={{
                  marginLeft: "15px",
                  fontSize: "20px",
                  color: "green",
                }}
              >
                <CheckCircleOutlined />
                <span style={{ marginLeft: "10px" }}>No</span>
              </Col>
            </Col>
            <Col
              style={{ position: "absolute", marginLeft: "400px", top: "80px" }}
            >
              <Col>
                <span className="setclass">Is Guy disabled?</span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Does guy have the Capacity to consent to medical
                  <br /> treatment on his own behalf?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>Yes</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass"> Is Guy have a Life Support?</span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">Pain Support</span>
                <Col
                  style={{ marginLeft: "15px", fontSize: "18px", color: "red" }}
                >
                  <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  <span style={{ marginLeft: "10px" }}>Unique</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">Is Guy elderly?</span>
                <Col
                  style={{ marginLeft: "15px", fontSize: "18px", color: "red" }}
                >
                  <ExclamationCircleOutlined className="ExclamationCircleOutlined" />
                  <span style={{ marginLeft: "10px" }}>Yes</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Does Guy Have any triggers and warnings signs?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Are there any medical concerns to consider for Guy <br />
                  during an Emergency evacutation?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Has Guy ever been tested for Covid-19?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>
                    More than three times
                  </span>
                </Col>
              </Col>
            </Col>
            <Col
              style={{ position: "absolute", marginLeft: "900px", top: "80px" }}
            >
              <Col>
                <span className="setclass">
                  
                  Does Guy require prescription medication -?
                </span>
                <Col
                  style={{ marginLeft: "15px", fontSize: "18px", color: "red" }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>Yes</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Should the first-responder avoid moving or <br />
                  extending Guy's extremities during an evacutation transfer?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Does Guy have any unique identifying marks, tattos,or
                  features?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Has Guy received a tetanus shot?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Does Guy have a Medical Durable POA?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>No</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Has Guy had the Covid-19 vacccination(s)?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>Yes</span>
                </Col>
              </Col>
              <br />
              <Col>
                <span className="setclass">
                  
                  Has Guy had the Covid-19 vacccination(s)?
                </span>
                <Col
                  style={{
                    marginLeft: "15px",
                    fontSize: "18px",
                    color: "green",
                  }}
                >
                  <CheckCircleOutlined />
                  <span style={{ marginLeft: "10px" }}>Yes</span>
                </Col>
              </Col>
            </Col>
          </Card>
        </div>

        <div>
          <Card hoverable className="antd-card5">
            <span style={{ fontWeight: "800", fontSize: "20px" }}>
              Guy Hawkins
            </span>
            <Row>
              <Col>
                <CalendarOutlined />
              </Col>
              <Col style={{ marginLeft: "20px" }}>61Years (1/12/62)</Col>
            </Row>
            <Row>
              <Col>
                <EnvironmentOutlined />
              </Col>
              <Col>
                <span style={{ marginLeft: "20px" }}>Southington, CT</span>
              </Col>
            </Row>

            <Row>
              <span
                style={{
                  fontWeight: "900",
                  fontSize: "20px",
                  marginTop: "400px",
                }}
              >
                Contact Info
              </span>
            </Row>
            <Row>
              <Col>
                <PhoneOutlined />
              </Col>
              <Col
                style={{
                  marginLeft: "20px",
                  color: " #0099ff",
                  fontSize: "20px",
                }}
              >
                800-867-5309
              </Col>
              <Col>
                <>
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{
                          width: "100%",
                        }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </>
              </Col>
            </Row>
            <Col style={{ position: "absolute", top: "570px" }}>
              <MailOutlined />
            </Col>
            <Col
              style={{
                position: "absolute",
                top: "570px",
                marginLeft: "30px",
                color: " #0099ff",
                fontSize: "18px",
              }}
            >
              guyhawkins@gmail.com
            </Col>
            <Row>
              <Col style={{ fontWeight: "800", fontSize: "20px" }}>
                Primary Contacts
              </Col>
            </Row>
            <Row>
              <Col>
                <Space size={16} wrap>
                  <Avatar icon={<UserOutlined />} />
                </Space>
              </Col>
              <Col>
                <span style={{ marginLeft: "10px", color: "grey" }}>
                  Emergency Contact-primary
                </span>
                <Col>
                  <span style={{ marginLeft: "10px", fontWeight: "800" }}>
                    John Smith
                  </span>
                  <span style={{ marginLeft: "20px", color: "#0099ff" }}>
                    800-867-5309
                  </span>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <Space size={16} wrap>
                  <Avatar icon={<UserOutlined />} />
                </Space>
              </Col>
              <Col>
                <span style={{ marginLeft: "10px", color: "grey" }}>
                  Emergency Contact-primary
                </span>
                <Col>
                  <span style={{ marginLeft: "10px", fontWeight: "800" }}>
                    Jack Ryan
                  </span>
                  <span style={{ marginLeft: "20px", color: "#0099ff" }}>
                    203-209-2930
                  </span>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <Space size={16} wrap>
                  <Avatar icon={<UserOutlined />} />
                </Space>
              </Col>
              <Col>
                <span style={{ marginLeft: "10px", color: "grey" }}>
                  Emergency Contact-primary
                </span>
                <Col>
                  <span style={{ marginLeft: "10px", fontWeight: "800" }}>
                    Kaylee wright
                  </span>
                  <span style={{ marginLeft: "20px", color: "#0099ff" }}>
                    802-209-1389
                  </span>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col style={{ fontWeight: "800", fontSize: "20px" }}>
                Personal Info
              </Col>
            </Row>
            <Row>
              <Col span={12} className="set-class1">
                Height
                <Col className="set-class3">6ft lin</Col>
              </Col>
              <Col span={12} className="set-class1">
                Signup date
                <Col className="set-class3">1/12/22</Col>
              </Col>
            </Row>
            <Row>
              <Col span={12} className="set-class2">
                Weight
                <Col className="set-class3">130 Ibs</Col>
              </Col>
              <Col className="set-class2" span={12} style={{ top: "20px" }}>
                Nick name
                <Col className="set-class3">Guy</Col>
              </Col>
            </Row>
            <Row>
              <Col className="set-class2" style={{ top: "30px" }}>
                Eye color
                <Col className="set-class3">Blue</Col>
              </Col>
            </Row>
            <Row>
              <Col className="set-class2" style={{ top: "40px" }}>
                Ethinicity
                <Col className="set-class3">Asian</Col>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
}
