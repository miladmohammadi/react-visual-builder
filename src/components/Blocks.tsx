import {
  Row,
  Col,
  Layout,
  Form,
  Input,
  Select,
  Avatar,
  Affix,
  Button,
  Pagination,
  Breadcrumb,
  Menu,
} from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import useAddToCanvas from "../hooks/useAddtoCanvas";
import { UserOutlined } from "@ant-design/icons";
import { useCanvas } from "../contexts/CanvasContext";

const eventsObject: any = {};

const Blocks: React.FC = () => {
  const { add } = useAddToCanvas();
  const { setDragedBlock,callDrop } = useCanvas();
  // const handleClick = () => {
  //   setCanvas((prev: any) => (
  //     <div>
  //       milad{prev}
  //       {prev}
  //     </div>
  //   ));
  // };
  const dragStart = (e: React.BaseSyntheticEvent) => {
    // dragItem.current = position;
    // console.log(e.target);
    // console.log("drag start event on", e.target);
    setDragedBlock(e)
  };

  const drop = (e: React.BaseSyntheticEvent) => {
    // console.log("drop event on", e.target);
    callDrop();
    // const copyListItems = [...list];
    // const dragItemContent = copyListItems[dragItem.current];
    // copyListItems.splice(dragItem.current, 1);
    // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    // dragItem.current = null;
    // dragOverItem.current = null;
    // setList(copyListItems);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
      {blocksData.map((blockItem) => (
        <div
          key={blockItem.name}
          style={{ width: "50%", display: "block" }}
          onDragEnd={drop}
          onDragStart={(e) => dragStart(e)}
          //   onDragEnter={(e) => dragEnter(e)}
          draggable
        >
          <div
            style={{
              margin: "0.25rem",
              padding: ".9rem",
              background: "#ccc",
              height: "10rem",
              borderRadius: "1rem",
            }}
            onClick={() => {
              add(blockItem.componentData,blockItem.name);
            }}
          >
            {blockItem.name}
          </div>
        </div>
      ))}
    </div>
    // <div
    //   onClick={handleClick}
    //   style={{ width: 100, height: 100, background: "black" }}
    // ></div>
  );
};
export const blocksData = [
  {
    name: "Grid 2 Col",
    componentData: (
      <>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </>
    ),
  },
  {
    name: "Grid 3 col",
    componentData: (function (id) {
      const event = (change = false) => (
        <>
          <Row>
            <Col span={8}>{change ? "changed" : "not"}</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </>
      );
      const ece = event;
      eventsObject["milad"] = ece;
      // console.log(eventsObject["milad"]);
      return eventsObject["milad"]();
    })("milad"),
  },
  {
    name: "layout",
    componentData: (
      <>
        <Layout>
          <Header>
            <span style={{ color: "#FFF" }}>Header</span>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </>
    ),
  },
  {
    name: "card",
    componentData: (
        <div>
        <Layout>
          <Header>
            <span style={{ color: "#FFF" }}>Header</span>
          </Header>
          <Layout>
            <Sider>
              <span style={{ color: "#FFF" }}>Sider</span>
            </Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
        </div>
    ),
  },
  {
    name: "form input",
    componentData: (
      <>
        <Form.Item label="Input" name="input">
          <Input />
        </Form.Item>
      </>
    ),
  },
  {
    name: "select",
    componentData: (
      <>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="opt1">Option 1</Select.Option>
            <Select.Option value="opt2">Option 2</Select.Option>
          </Select>
        </Form.Item>
      </>
    ),
  },
  {
    name: "avatar",
    componentData: (
      <>
        <Avatar icon={<UserOutlined />} />
      </>
    ),
  },
  {
    name: "affix",
    componentData: (
      <>
        <Affix offsetTop={10}>
          <Button type="primary">Affix top</Button>
        </Affix>
      </>
    ),
  },
  {
    name: "pagination",
    componentData: (
      <>
        <Pagination defaultCurrent={1} total={50} />
      </>
    ),
  },
  {
    name: "breadcrumb",
    componentData: (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Component</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item
            overlay={
              <Menu>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.alipay.com/"
                  >
                    General
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                  >
                    Layout
                  </a>
                </Menu.Item>
              </Menu>
            }
          >
            <a href="">General</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Button</Breadcrumb.Item>
        </Breadcrumb>
      </>
    ),
  },
];
export default Blocks;
