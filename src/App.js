import Sidebar from "./components/sidebar";
import Tools from "./components/tools";
import Header from "./components/header";
import { Main, Wrapper } from "./app.styled";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sidebar />
        <Tools />

        <Main>
          <Header />
        </Main>
      </Wrapper>
    </div>
  );
}

export default App;
