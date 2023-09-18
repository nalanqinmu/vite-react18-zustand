import { useState, useEffect } from 'react';
import { useGlobalStore } from '@/stores';
import { StatisticCard } from "@ant-design/pro-components";
import { Button } from 'antd';
import { useImmer } from 'use-immer';
export default function DemoCom({ count, onClick, children }) {
  const { primaryColor } = useGlobalStore();
  useEffect(() => {
    console.log('组件挂行了');
  }, [])

  const [obj, setObj] = useImmer({
    name: '小明',
    list: {
      a: {
        names: '小明',
        age: 18
      }
    }
  })


  return (
    <StatisticCard>
      <div onClick={onClick} style={{ color: primaryColor, cursor: 'pointer' }} >
        子组件 传值{count}
        {children}
      </div >

      使用immer 更新复杂嵌套对象
      <p>{obj.list.a.names}</p>
      <p>{obj.list.a.age}</p>
      <Button type="primary" onClick={() => setObj(draft => {
        draft.list.a.age = 20
        draft.list.a.names = '小米n'
      })}>更新对象</Button>
    </StatisticCard>
  )
}