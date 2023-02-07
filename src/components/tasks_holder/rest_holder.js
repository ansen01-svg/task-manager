import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTask } from '../../redux/slice';
import FormHolder from './form_holder';
import TaskHolder from "./tasks_holder";


const RestHolder = () => {

    let dispatch = useDispatch();

    let [taskValue, setTaskValue] = useState('')

    let { currentList } = useSelector(state => state.mainSlice);

    let getPendingTasks = () => {
        let pendingTasks;
        pendingTasks = Object.keys(currentList).length ? currentList.tasks.filter(task => task.completed === false) : []
        return pendingTasks;
    }

    let getCompletedTasks = () => {
        let completedTasks;
        completedTasks = Object.keys(currentList).length ? currentList.tasks.filter(task => task.completed !== false) : []
        return completedTasks;
    }

    let pending = getPendingTasks()
    let completed = getCompletedTasks()
    
    let handleSubmit = (e) => {
        e.preventDefault();
        
        if (!taskValue) {
            return;
        }

        dispatch(addTask(taskValue));
        setTaskValue('');
    }

    return (
        <RestWrapper>
            <FormHolder
            placeholder={'Add a new task. Press Enter to save.'}
            value={taskValue}
            setValue={setTaskValue}
            handleSubmit={handleSubmit}
            />
            <TaskHolder title={'Pending'} tasks={pending} />
            <TaskHolder title={'Completed'} tasks={completed} />
        </RestWrapper>
    )
}

const RestWrapper = styled.div`
    width: 100%;
    // padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`


export default RestHolder;