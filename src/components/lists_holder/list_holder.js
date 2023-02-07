import { useSelector } from 'react-redux';
import styled from "styled-components";
import List from "./list";


const ListHolder = () => {

    let { lists } = useSelector(state => state.mainSlice);

    if (!lists.length) {
        return <></>
    }

    return (
        <HolderWrapper>
            {
                lists.map(list => <List listItem={list} key={list.id} />) 
            }
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