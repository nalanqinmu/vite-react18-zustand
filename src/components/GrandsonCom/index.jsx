import { useState } from 'react';
export default function GrandsonCom({ count, color = 'red', onButtonClick }) {
  const handleClick = () => {
    onButtonClick('这是孙子组件传值')
  }
  return (
    <div onClick={handleClick} style={{ color: color, cursor: 'pointer' }} >
      孙子组件传值：{count}
    </div>
  )
}