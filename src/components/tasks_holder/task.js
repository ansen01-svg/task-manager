import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteTask, editTask, moveTask } from '../../redux/slice';


const Task = ({ taskItem }) => {

    let dispatch = useDispatch();
    let [task, setTask] = useState(taskItem.task)

    let handleChange = (e, taskId) => {
        let newTask = e.target.value;
        setTask(newTask);
        dispatch(editTask({ taskId, newTask }))
    }

    let moveTask = (id) => {
        dispatch(moveTask(id))
    }

    return (
        <TaskWrapper>
            <CheckboxHolder 
            taskId={taskItem.id}
            moveTask={moveTask} 
            dispatch={dispatch}
            />
            <InputHolder 
            value={task}
            setTask={setTask}
            taskId={taskItem.id}
            handleChange={handleChange}
            />
            <IconsHolder
            taskId={taskItem.id}
            dispatch={dispatch}
            />
        </TaskWrapper>
    )
}

const CheckboxHolder = ({ taskId, dispatch }) => {
    return (
        <CommonWrapper
        width={'5%'}
        justify={'center'}
        >
            <input type='checkbox' onChange={() => dispatch(moveTask(taskId))}/>
        </CommonWrapper>
    )
}

const InputHolder = ({ value, taskId, handleChange }) => {
    return (
        <CommonWrapper
        width={'70%'}
        justify={'center'}
        >
            <TextInput 
            type='text' 
            value={value} 
            onChange={(e) => handleChange(e, taskId)} />
        </CommonWrapper>
    )
}

const IconsHolder = ({ taskId, dispatch }) => {
    return (
        <CommonWrapper
        width={'30%'}
        justify={'flex-end'}
        >
            <AiFillDelete id='icon' onClick={() => dispatch(deleteTask(taskId))} />
        </CommonWrapper>
    )
}

const TaskWrapper = styled.div`
    width: calc(100% - 40px);
    height: 45px;
    padding: 0 20px;
    border-bottom: 1px solid var(--border_color);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--hover_color);
        border: none;
    }
`

const CommonWrapper = styled.div`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    gap: 20px;

    #icon {
        font-size: 14px;
        cursor: pointer;
    }
`

const TextInput = styled.input`
    width: 100%;
    background: none;
    outline: none;
    border: none;
    color: white;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`


export default Task;