import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";


const Header = ({ setShowInput }) => {
    return (
        <HeaderWrapper>
            <h1>Lists</h1>
            <AiOutlinePlus id = 'plus' 
            onClick = {() => setShowInput(state => !state)} 
            />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: calc(100% - 40px);
    height:50px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #plus {
        font-size:20px;
        color: white;
        cursor: pointer;
    }
`


export default Header;