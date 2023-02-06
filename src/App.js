import styled from 'styled-components';
import ListComponent from './components/lists_holder';
import TaskComponent from './components/tasks_holder';
import MyContext from './context/context';


function App() {
  return (
    <Wrapper className="App">
      <MyContext>
        <ListComponent />
        <TaskComponent />
      </MyContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export default App;