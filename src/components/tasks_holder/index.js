import Panel from "../panel";
import HeaderHolder from "./header_holder";
import RestHolder from "./rest_holder";


const TaskComponent = () => {
    return (
        <Panel width={'70vw'}>
            <HeaderHolder />
            <RestHolder />
        </Panel>
    )
}


export default TaskComponent;