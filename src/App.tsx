import { useState } from "react"
import { Header, Main, Global, Nav } from "./assets/styled"
import List from "./pages/list"
import Create from "./pages/create"
import Response from "./pages/response"
import Result from "./pages/result"

const SCREENS = {
  CREATE: 'create',
  LIST: 'list',
  RESPONSE: 'response',
  FINISH: 'finish'
}

function App() {
  const [currentScreen, setScreens] = useState('create')
  const [quizzes, setQuizzes] = useState<Quiz[]>([])

  const createQuiz = (quiz: Quiz): void => {
    setQuizzes([...quizzes, quiz])
  }

  return (
    <>
      <Global />
      <div>
        <Header>
          <div>
            Logo
          </div>
          <Nav>
            <ul>
              <li onClick={() => setScreens(SCREENS.RESPONSE)}>Fazer o Quiz</li>
              <li onClick={() => setScreens(SCREENS.CREATE)}>Cadastrar Perguntas</li>
              <li onClick={() => setScreens(SCREENS.LIST)}>Listar Perguntas</li>
            </ul>
          </Nav>
        </Header>

        <Main>
          {currentScreen === SCREENS.LIST && <List />}
          {currentScreen === SCREENS.CREATE && <Create createQuiz={createQuiz} />}
          {currentScreen === SCREENS.RESPONSE && <Response />}
          {currentScreen === SCREENS.FINISH && <Result />}
        </Main>

      </div>
    </>
  )
}

export default App
