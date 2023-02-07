import { AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Header = () => {

    let { currentList } = useSelector(state => state.mainSlice);

    return (
        <HeaderWrapper>
            <AiOutlineMenu id='icon' />
            <h1>{ currentList.list }</h1>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: calc(100% - 40px);
    height: 50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    // background: red;

    #icon {
        font-size:20px;
        color: white;
    }
`


export default Header;