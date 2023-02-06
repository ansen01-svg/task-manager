import styled from "styled-components";
import Form from '../form';


const FormHolder = ({ placeholder, value, setValue, handleSubmit }) => {
    return (
        <HolderWrapper >
            <Form 
            background={'rgb(42, 41, 41)'}
            placeholder={placeholder}
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit}
            />
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: calc(100% - 40px);
    height: 50px;
    // background-color: yellow;
`


export default FormHolder;