import { useState } from 'react';
import { Input, Button } from 'antd';
export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  const handleClick = () => {
    onAddTask(text)
  }
  return (
    <div className='flex-row'>
      <Input style={{ width: '300px' }} placeholder='添加行程' value={text} onChange={e => setText(e.target.value)}></Input>
      <Button onClick={handleClick}>添加</Button>
    </div>
  )
}