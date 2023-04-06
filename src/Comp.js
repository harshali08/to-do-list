import React, { useState } from 'react'
import { MdAdd } from "react-icons/md";
import Task from './task';
import './Comp.css'


function Comp() {
    const[inputList,setInputList]=useState("")
    const[tasks,setTask]=useState([]);

    const addInput=(event)=>{
        
        setInputList(event.target.value)
        
    }
    const addTask=()=>{
        if(inputList!==''){ 
            
        setTask((oldTask)=>{
            
            return [...oldTask,inputList];
            
        }

        )
    }
    else {
        console.log("Invalid Input!")
        alert("Invalid Input!")
    }
   
        setInputList("")
    }

    const deleteTasks=(id)=>{
        setTask((oldTask)=>{
           return oldTask.filter((arrElement,index)=>{
            return index!==id
           })
        })
        
    }
//    const editTask=(id)=>{
//     console.log("edit")
//     setTask(()=>{
        
//         console.log(inputList)
//         tasks[id]=inputList
//      })
//    }

const editTask=(id)=>{
    console.log('edit')
    console.log(id)
    console.log(inputList)

    setTask((oldTasks) => {
        const updatedTasks = [...oldTasks];
        updatedTasks[id] = inputList;
        return updatedTasks;
      });
      setInputList("")
}
  return (
    <div className='main_cont'>
        <div className='cont'>
            <h1>TO DO LIST</h1>
            <div className='input_cont'>
                <input type='text' placeholder='Enter task' onChange={addInput} value={inputList}></input>
                <button onClick={addTask}><MdAdd className='icon' size={40} ></MdAdd></button>
            </div>

            <div className='Task'>  
            <ul>
                    {
                        tasks.map((task,index)=>{
                          return  <Task text={task} key={index} id={index} onSelect={deleteTasks} edit={editTask}></Task>
                        })
                    } 
                    
                 </ul>
            </div>
        </div>
    </div>
  )
}


export default Comp