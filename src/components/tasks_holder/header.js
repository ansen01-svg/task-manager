import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";


const Header = () => {
    return (
        <HeaderWrapper>
            <AiOutlineMenu id='icon' />
            <h1>List1</h1>
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