import Sidebar from "./components/sidebar";
import Tools from "./components/tools";
import Header from "./components/header";
import Kanban from "./components/kanban";
import { Content, Wrapper } from "./app.styled";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sidebar />
        <Tools />

        <Content>
          <Header />
          <Kanban />
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;
