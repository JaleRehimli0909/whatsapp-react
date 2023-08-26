import React from "react";
import "./style.css";
import { Layout, Row, Col, Image, Space } from "antd";
import {
  ReloadOutlined,
  FolderOutlined,
  MoreOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Header, Content } = Layout;
// import { Item, Header, Footer } from '../../components';

const Main = () => {
  return (
    <Layout>
      <Row>
        <Col span={8}>
          <Header className="header-left">
            <Row>
              <Col span={3}>
                <Image
                  width={40}
                  className="img"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <Space size={20}>
                  <ReloadOutlined />
                  <FolderOutlined />
                  <MoreOutlined />
                </Space>
              </Col>
            </Row>
          </Header>
          <Content>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
            <li>salam</li>
          </Content>
        </Col>

        <Col span={16}>
          <Header className="header-right">
            <Row>
              <Col span={12}>
                <Space size={20}>
                  <Image
                    width={40}
                    className="img"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />

                  <p>You</p>
                </Space>
              </Col>
            </Row>
            <Row>
              <Col span={4}>
                <Space size={20}>
                  <SearchOutlined />
                  <MoreOutlined />
                </Space>
              </Col>
            </Row>
          </Header>
          <Content>Content</Content>
        </Col>
      </Row>
      {/* <Row>
        <Col span={8} style={{ backgroundColor: "red" }}>
          <Header style={headerStyle}>
            <Content>
        
            </Content>
            <Content>
              hey
            </Content>
          </Header>
          col-12
        </Col>

        <Col span={16} style={{ backgroundColor: "gray" }}>
          col-12
        </Col>
      </Row> */}
    </Layout>
  );
};

export default Main;
