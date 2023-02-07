import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { changeCurrentList } from '../../redux/slice';


const List = ({ listItem }) => {

    let dispatch = useDispatch();

    let { id, list } = listItem;

    return (
        <ListWrapper onClick={() => dispatch(changeCurrentList(id))} >
            <AiOutlineMenu id='icon' />
            <p>{list}</p>
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