import { useState } from "react";
import styled from "styled-components";
import FormHolder from './form_holder';
import TaskHolder from "./tasks_holder";


const RestHolder = () => {

    let [taskValue, setTaskValue] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <RestWrapper>
            <FormHolder
            placeholder={'Add a new task. Press Enter to save.'}
            value={taskValue}
            setValue={setTaskValue}
            handleSubmit={handleSubmit}
            />
            <TaskHolder />
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
    // border: 1px solid var(--border_color);
`


export default RestHolder;