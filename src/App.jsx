import { lazy, Suspense } from 'react'
import { ConfigProvider, Spin } from 'antd'
import { useGlobalStore } from '@/stores/index'
import zhCN from 'antd/locale/zh_CN'
import dayjs from 'dayjs'
import "dayjs/locale/zh-cn"
import "antd/dist/reset.css"

dayjs.locale("zh-ch");

const BasicLayout = lazy(() => import("./layout"))

export function authLoader() {
  return { isAdmin: true }
}
function App() {
  const { primaryColor } = useGlobalStore()
  return (
    // 自定义全局配置
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: primaryColor
        }
      }}
    >
      {/* 退路方案 直到子组件加载完成 */}
      <Suspense fallback={<Spin size='large' className='globa_spin' />}>
        <BasicLayout />
      </Suspense>
    </ConfigProvider>
  )
}

export default App
