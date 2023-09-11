import { useState, useEffect } from 'react';
import { useGlobalStore } from '@/stores';
import { StatisticCard } from "@ant-design/pro-components";
export default function DemoCom({ count, onClick, children }) {
  const { primaryColor } = useGlobalStore();
  useEffect(() => {
    console.log('组件挂行了');
  }, [])

  return (
    <StatisticCard >
      <div onClick={onClick} style={{ color: primaryColor, cursor: 'pointer' }} >
        子组件 传值{count}
        {children}
      </div >
    </StatisticCard>
  )
}