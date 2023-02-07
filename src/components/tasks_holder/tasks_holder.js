import styled from "styled-components";
import Task from "./task";


const TaskHolder = ({ tasks, title }) => {
    
    if (!tasks.length) {
        return <></>
    }
    
    return (
        <HolderWrapper>
            <TaskHeader title={title} />
            <MainHolder tasks={tasks} />
        </HolderWrapper>
    )
}

const TaskHeader = ({ title }) => {
    return (
        <HeaderWrapper>
            <p>{ title }</p>
        </HeaderWrapper>
    )
}

const MainHolder = ({ tasks }) => {
    return (
        <MainHolderWrapper>
            {
                tasks.length && tasks.map(task => <Task taskItem={task} key={task.id} />)
            }
        </MainHolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    // border: 1px solid var(--border_color);
    // border-radius: 6px;
`

const MainHolderWrapper = styled.div`
    width: 100%;
`

const HeaderWrapper = styled.div`
    width: calc(100% - 40px);
    height: 45px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    background-color: var(--hover_color);
    padding: 0 20px;
`


export default TaskHolder;