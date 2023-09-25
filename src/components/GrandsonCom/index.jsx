import { useState, useContext } from 'react';
import { GlobalContext } from '../../pages/Dashboard/components/Context';
export default function GrandsonCom({ count, color = 'red', onButtonClick }) {
  const handleClick = () => {
    onButtonClick('这是孙子组件传值')
  }
  const contextNum = useContext(GlobalContext)
  return (
    <div onClick={handleClick} style={{ color: color, cursor: 'pointer' }} >
      孙子组件传值：{count}
      context 传的值：{contextNum}
    </div>
  )
}