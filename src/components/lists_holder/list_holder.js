import styled from "styled-components";
import List from "./list";


const ListHolder = () => {
    return (
        <HolderWrapper>
            <List />
            <List />
            <List />
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: 90%;
    padding: 20px 0;
    background-color: var(--hover_color);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`


export default ListHolder;