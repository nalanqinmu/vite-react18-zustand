import { useState, useEffect } from 'react';
export default function DemoCom() {
  useEffect(() => {
    console.log('组件挂行了');
    return () => {
      console.log('组件卖了');
    }
  }, [])
  return (
    <div></div>
  )
}