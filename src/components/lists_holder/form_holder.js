import styled from "styled-components";
import Form from '../form';


const FormHolder = ({ showInput, placeholder, value, setValue, handleSubmit }) => {
    return (
        <HolderWrapper  
        display = {showInput ? 'block' : 'none' } 
        >
            <Form 
            border={'1px solid var(--input_border_color)'}
            placeholder={placeholder}
            value={value}
            setValue={setValue}
            handleSubmit={handleSubmit}
            />
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: 100%;
    height: 30px;
    display: ${props => props.display};
`


export default FormHolder;