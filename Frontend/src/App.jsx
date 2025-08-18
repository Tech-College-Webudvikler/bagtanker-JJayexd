import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";
import { AppRouter } from "./Components/AppRouter/AppRouter";

function App() {
  return (
    <>
      <Header />
        <Main>
          <AppRouter />
        </Main>
    </>
  )
}

export default App
