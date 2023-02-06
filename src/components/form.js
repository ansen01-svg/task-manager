import styled from "styled-components";


const Form = ({ placeholder, value, setValue, handleSubmit, background, border }) => {
    return (
        <FormWrapper onSubmit={(e) => handleSubmit(e)}>
            <Input
            background={background}
            border={border}
            placeholder={placeholder}
            value={value}
            setValue={setValue}
            />
        </FormWrapper>
    )
}

const Input = ({ placeholder, value, setValue, background, border }) => {
    return (
        <InputWrapper 
        background={background}
        border={border}
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />
    )
}

const FormWrapper = styled.form`
    width: 100%;
    height: 100%;
`

const InputWrapper = styled.input`
    width: calc(99% - 20px);
    height: 90%;
    padding-left: 20px;
    background: ${props => props.background ? props.background : 'none'};
    outline: none;
    border: ${props => props.border || 'none'};
    color: white;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    border-radius: 6px;

    &:focus{
        border: 1px solid var(--input_border_color);
    }
`


export default Form;