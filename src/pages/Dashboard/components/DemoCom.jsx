import { useState, useEffect, useReducer, useContext } from 'react';
import { useGlobalStore } from '@/stores';
import { StatisticCard } from "@ant-design/pro-components";
import { Button } from 'antd';
import { useImmer } from 'use-immer';
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';
import { add, set } from 'lodash';
import { GlobalContext } from './Context.js';
import GroupContext from 'antd/es/checkbox/GroupContext.js';
import GrandsonCom from '../../../components/GrandsonCom/index.jsx';
export default function DemoCom({ count, onClick, children }) {
  const { primaryColor } = useGlobalStore();


  const [obj, setObj] = useImmer({
    name: '小明',
    list: {
      a: {
        names: '小明',
        age: 18
      }
    }
  })

  let nextId = 3;
  const initialTasks = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '列侬墙图片', done: false }
  ];
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
  const handleAddTask = (text) => {
    console.log(tasks.slice(-1))
    dispatch(
      {
        type: 'add',
        id: tasks.slice(-1)[0].id + 1,
        text: text,
        done: true
      }
    )
  }
  const handleTaskClick = (task) => {
    dispatch(
      {
        type: 'edit',
        task: task
      }
    )
  }
  const handleTaskDelete = (taskId) => {
    dispatch(
      {
        type: 'del',
        id: taskId
      }
    )
  }

  function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'add': {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: action.done
        }]
      }

      default:
        break;
    }
  }
  const maplist = [{ id: 1, name: '小明' }, { id: 2, name: '小米n' }, { id: 3, name: '小籍' }, { id: 4, name: '小明ssss' }]
  const [listSet, setListSet] = useState(new Set([1, 2]))
  useEffect(() => {
    let arr = new Set(listSet)
    arr.add(4)
    setListSet(arr)
    console.log('listSet', listSet)
  }, [])
  return (

    <>
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

        使用reducer 提取状态逻辑
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onTaskClick={handleTaskClick} onTaskDelete={handleTaskDelete} />

      </StatisticCard>
      <StatisticCard>
        使用 new set()
        {
          maplist.map(item => listSet.has(item.id) ? <li key={item.id}> {item.name}</li> : '')
        }
      </StatisticCard>

      <StatisticCard>
        使用 context
        <GlobalContext.Provider value={888}>
          <GrandsonCom></GrandsonCom>
        </GlobalContext.Provider>
      </StatisticCard>
    </>



  )
}