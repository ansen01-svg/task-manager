import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";


const List = () => {
    return (
        <ListWrapper>
            <AiOutlineMenu id='icon' />
            <p>List1</p>
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
    width: calc(95% - 40px);
    height: 45px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
    border-radius: 6px;
    // background-color: black;
    // border-bottom: 1px solid white;

    #icon {
        font-size:14px;
        color: white;
    }

    &:hover {
        background-color: var(--background_color);
    }
`


export default List;