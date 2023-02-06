import { useState } from "react";
import Panel from "../panel";
import HeaderHolder from "./header_holder";
import ListHolder from "./list_holder";


const ListComponent = () => {

    let [showInput, setShowInput] = useState(false)

    return (
        <Panel width={'30vw'} border={'rgb(62, 62, 62)'}>
            <HeaderHolder
            showInput={showInput} setShowInput={setShowInput}
            />
            <ListHolder />
        </Panel>
    )
}


export default ListComponent;