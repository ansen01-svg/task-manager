import { useState } from "react";
import styled from "styled-components";
import { useMyContext } from '../../context/context';
import List from "../../utils/classes";
import FormHolder from "./form_holder";
import Header from "./header";


const HeaderHolder = ({ showInput, setShowInput }) => {

    let [listValue, setListValue] = useState('')

    let { setLists, lists }  = useMyContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (listValue) {
            let newList = new List(listValue)
            setLists(lists => {
                lists = [...lists, newList]
                localStorage.setItem('lists', JSON.stringify(lists))
            })
            console.log(lists)
            setListValue('')
            setShowInput(false)
        }
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