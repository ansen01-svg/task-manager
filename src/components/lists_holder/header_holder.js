import { useState } from "react";
import { useDispatch } from 'react-redux';
import styled from "styled-components";
import { addToList, storeCurrent, storeLists } from '../../redux/slice';
import FormHolder from "./form_holder";
import Header from "./header";


const HeaderHolder = ({ showInput, setShowInput }) => {

    let [listValue, setListValue] = useState('')
    
    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!listValue) {
            return;
        }

        dispatch(addToList(listValue));
        dispatch(storeLists());
        dispatch(storeCurrent());
        setListValue('');
        setShowInput(false);
    }

    return (
        <HolderWrapper>
            <Header setShowInput = {setShowInput} />
            <FormHolder
            showInput = {showInput}
            placeholder={'List name'}
            value={listValue}
            setValue={setListValue}
            handleSubmit={handleSubmit}
            />
        </HolderWrapper>
    )
}

const HolderWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--hover_color);
    border-radius: 6px;

`


export default HeaderHolder;