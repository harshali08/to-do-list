import React from 'react'
import { MdDeleteForever ,MdEditNote} from "react-icons/md";
import './task.css'


function Task(props) {
  return (
    <div>
        <div className='each_task'> <li>{props.text}</li>
        <button onClick={()=>{props.edit(props.id)}}><MdEditNote  className='icon' size={40}></MdEditNote></button>
            <button onClick={()=>{
                props.onSelect(props.id)
            }}> <MdDeleteForever className='icon' size={40}></MdDeleteForever></button></div>
    </div>
  )
}

export default Task