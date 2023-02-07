import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { addToList } from '../../redux/slice';
import FormHolder from "./form_holder";
import Header from "./header";


const HeaderHolder = ({ showInput, setShowInput }) => {

    let [listValue, setListValue] = useState('')
    
    let { lists } = useSelector((state) => state.mainSlice);
    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!listValue) {
            return;
        }

        dispatch(addToList(listValue));
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