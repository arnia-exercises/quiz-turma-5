import { Link, Outlet } from "react-router-dom";
import { Global, Header, Main, Nav } from "../../assets/styled";

export default function BaseLayout () {
  return (
    <>
      <Global />

      <div>
        <Header>
          <div>
            Logo
          </div>
          <Nav>
            <Link to="/">Listar Perguntas</Link>
            <Link to="/fazer-o-quiz">Fazer o Quiz</Link>
            <Link to="/cadastrar-perguntas">Cadastrar Perguntas</Link>
          </Nav>
        </Header>

        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  )
}