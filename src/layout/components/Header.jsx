import { Col, Row, Typography } from 'antd';
import RightContent from './RightContent'
export default function HeaderCom() {
  const { Text } = Typography
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Text strong style={{ fontSize: '18px' }}>
          react  头组件
        </Text>
      </Col>
      <Col style={{ display: 'flex' }}>
        <RightContent />
      </Col>
    </Row>
  )
}