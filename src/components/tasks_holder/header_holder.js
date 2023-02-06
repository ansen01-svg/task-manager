import styled from "styled-components";
import Header from "./header";


const HeaderHolder = () => {
    return (
        <HolderWrapper>
            <Header />
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: 100%;
    height: 50px;
    // border-bottom: 1px solid white;
`


export default HeaderHolder;