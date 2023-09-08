import reactLogo from '../../assets/react.svg'

export default function NoAuthPage() {
  return (
    <div style={{
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center"
    }}>

      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      暂无权限...
    </div>
  )
}