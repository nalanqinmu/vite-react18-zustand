import { Checkbox, Button } from 'antd';
function Task({ item }) {
  return (
    <>
      <Checkbox checked={item.done} > {item.text}</Checkbox>
      <Button onClick={() => handleTaskClick()}>编辑</Button>
      <Button>删除</Button>
    </>
  )
}
export default function TaskList({ tasks, handleTaskClick, handleTaskDelete }) {
  return (
    <div>
      <ul>
        {
          tasks.map(item => {
            return <li key={item.id}> <Task item={item}></Task> </li>
          })
        }
      </ul>


    </div>
  )
}