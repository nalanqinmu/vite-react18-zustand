import { Checkbox, Button } from 'antd';
import { useState } from 'react';
function Task({ item }) {
  const [done, setDone] = useState(item.done)
  return (
    <>
      <Checkbox checked={done} onChange={(e) => {
        setDone(e.target.checked)
      }}> {item.text}</Checkbox>
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