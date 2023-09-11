import { lazy } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "@/components/ErrorPage";
import LoginPage from "@/layout/components/Login";
import App, { authLoader } from "../App";
import {
  DashboardOutlined,
  EditOutlined,
  TableOutlined,
  BarsOutlined,
  UserOutlined,
} from "@ant-design/icons";
const Dashboard = lazy(() => import('@/pages/Dashboard'))
const TablePage = lazy(() => import('@/pages/TablePage'))
const Game = lazy(() => import('@/pages/Game'))
const routes = [
  {
    path: "/",
    element: <App />,
    loader: authLoader,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            title: "首页",
            icon: <DashboardOutlined />,
            element: <Dashboard />,
          },
          {
            path: "tablePage",
            title: "表格",
            icon: <TableOutlined />,
            element: <TablePage />,
          },
          {
            path: "game",
            title: "游戏",
            icon: <TableOutlined />,
            element: <Game />,
          },
        ]
      },
      {
        path: "*",
        element: <Navigate to="/" replace={true} />,
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
]
export { routes }

export default createBrowserRouter(routes) 
