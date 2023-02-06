import styled from "styled-components";
import Task from "./task";


const TaskHolder = () => {
    return (
        <HolderWrapper>
            <Task />
            <Task />
            <Task />
            <Task />
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: calc(100% - 40px);
    // border: 1px solid var(--border_color);
    border-radius: 6px;
`


export default TaskHolder;