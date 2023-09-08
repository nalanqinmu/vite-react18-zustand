import { Avatar, Dropdown, Button, Input, Badge, Space } from "antd";
import { SkinOutlined, BellOutlined } from "@ant-design/icons";
import { useLoginStore, useGlobalStore } from '@/stores/index'
import debounce from 'lodash/debounce'
import styles from '../index.module.scss'
import "../index.scss"
export default function RightContent() {
  const { setUserInfo } = useLoginStore()
  const { setColor, primaryColor } = useGlobalStore()
  const logoutHandle = () => {
    setUserInfo(null)
  }
  const items = [
    {
      key: '1',
      label: <span onClick={logoutHandle}>退出登录</span>
    },
    {
      key: '2',
      label: '个人中心'
    }
  ]
  const changeMainColor = (e) => {
    setColor(e.target.value)
  }
  return (
    <Space size={20}>
      {/* 徽标 */}
      <span style={{ display: 'flex' }}>
        <Badge count={12}>
          <BellOutlined style={{ fontSize: 24 }}></BellOutlined>
        </Badge>
      </span>
      <div className={styles.skin}>
        <Button type="primary" shape="circle" icon={<SkinOutlined />}></Button>
        <Input type="color" className={styles.skin_input} defaultValue={primaryColor} onChange={debounce(changeMainColor, 500)}></Input>
      </div>
      <Dropdown menu={{ items }} placement="bottomRight">
        <div className="poin_avatar">
          <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" className="poin"></Avatar>
        </div>
      </Dropdown>
    </Space>
  )
}