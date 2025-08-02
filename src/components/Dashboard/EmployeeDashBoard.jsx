import React from 'react'
import Header from '../../other/Header'
import Tasks from '../../other/Tasks'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashBoard = (props) => {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasks data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashBoard