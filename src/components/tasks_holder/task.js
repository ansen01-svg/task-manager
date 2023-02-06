import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import styled from "styled-components";


const Task = () => {

    let [task, setTask] = useState('Testing')

    return (
        <TaskWrapper>
            <CheckboxHolder />
            <InputHolder 
            value={task}
            setTask={setTask}
            />
            <IconsHolder />
        </TaskWrapper>
    )
}

const CheckboxHolder = () => {
    return (
        <CommonWrapper
        width={'5%'}
        justify={'center'}
        >
            <input type='checkbox' />
        </CommonWrapper>
    )
}

const InputHolder = ({ value, setTask }) => {
    return (
        <CommonWrapper
        width={'70%'}
        justify={'center'}
        >
            <TextInput type='text' value={value} />
        </CommonWrapper>
    )
}

const IconsHolder = () => {
    return (
        <CommonWrapper
        width={'30%'}
        justify={'flex-end'}
        >
            <AiFillEdit id='icon' />
            <AiFillDelete id='icon' />
            <BiTransfer id='icon' />
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