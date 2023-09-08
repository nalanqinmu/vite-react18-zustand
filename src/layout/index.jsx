import { useState, Suspense } from "react"
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Layout, Menu, theme, Spin } from "antd";
import HeaderCom from "./components/Header";
import { useLoginStore } from "@/stores/index";
import { routes } from "../routes/index";
import NoAuthPage from "@/components/NoAuthPage";
import "antd/dist/reset.css";
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'


const { Header, Content, Footer, Sider } = Layout;
export default function BasicLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { userInfo } = useLoginStore()
  const { token: { colorBgContainer } } = theme.useToken()
  const { isAdmin } = useLoaderData()

  // 获取路由
  const getItems = (children) => {
    return children.map(item => {
      return {
        key: item.index ? '/' : item.path?.startsWith('/') ? item.path : `/${item.path}`,
        icon: item.icon,
        label: item.title,
        children: item.children ? getItems(item.children) : null
      }
    })
  }
  const menuItems = getItems(routes[0].children[0].children.filter(item => item.path !== '*'))
  // 路由跳转
  const onMenuClick = ({ key }) => {
    navigate(key)
  }
  if (!userInfo) {
    return <Navigate to="/login" replace={true} />
  }

  const renderOpenKeys = () => {
    const arr = pathname.split("/").slice(0, -1);
    const result = arr.map(
      (_, index) => "/" + arr.slice(1, index + 1).join("/")
    );
    console.log('当前选中菜单拼接', arr, result)

    return result;
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧菜单 */}
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            marginTop: 0,
            marginBottom: 42
          }}
        >
          <div className="flex-row">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={renderOpenKeys()}
          mode="inline"
          items={menuItems}
          onClick={onMenuClick}
        />
      </Sider>
      {/* 右侧内容 */}
      <Layout className="site-layout">
        <Header style={{ padding: "0 10px", background: colorBgContainer }}>
          <HeaderCom />
        </Header>
        {/* height：Header和Footer的默认高度是64 */}
        <Content
          style={{
            padding: 16,
            overflow: "auto",
            height: `calc(100vh-128px)`
          }}
        >
          {
            isAdmin ? (
              <Suspense fallback={<Spin size="large" className="content_spin" />}>
                <Outlet />
              </Suspense>
            ) : (<NoAuthPage />)
          }
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          react template admin ©2023 Created by 青木
        </Footer>
      </Layout>
    </Layout>
  )
}