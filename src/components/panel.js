import styled from "styled-components";


const Panel = ({ children, width, border }) => {
    return (
        <Wrapper width={width} border={border}>
            { children }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: ${props => props.width || '30vw'};
    height: calc(100vh - 30px);
    padding: 15px 0;
    border-right: ${props => `1px solid ${props.border}` || '1px solid rgb(36, 35, 35)'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`


export default Panel;