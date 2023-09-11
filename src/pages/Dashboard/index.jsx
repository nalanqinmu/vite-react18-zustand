import React, { useState } from "react"
import { Row, Col } from "antd";
import DemoCard from "./components/DemoCard";
import DemoColumn from "./components/DemoColumn";
import DemoPie from "./components/DemoPie";
import DemoLine from "./components/DemoLine";
import DemoCom from "./components/DemoCom";
import GrandsonCom from '@/components/GrandsonCom';

export default function Dashboard() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  }
  const handleClick = (e) => {
    console.log(e)
  }
  return (
    <React.Fragment>
      <DemoCom count={count} onClick={() => setCount(count + 1)}>
        <GrandsonCom count={count} onClick={changeCount}></GrandsonCom>
        <GrandsonCom color='pink' count={count} onClick={changeCount} onButtonClick={handleClick}></GrandsonCom>
      </DemoCom>
      <DemoCard />
      <Row wrap style={{ marginTop: 20 }}>
        <Col span={24} style={{ background: "white", padding: 10 }}>
          <DemoLine />
        </Col>
      </Row>
      <Row wrap style={{ marginTop: 20 }} justify="space-between">
        <Col style={{ background: "white", padding: 10, width: "49%" }}>
          <DemoColumn />
        </Col>
        <Col style={{ background: "white", padding: 10, width: "49%" }}>
          <DemoPie />
        </Col>
      </Row>
    </React.Fragment>
  )
}