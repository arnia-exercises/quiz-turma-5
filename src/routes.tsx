import { BrowserRouter, Route, Routes } from "react-router-dom";

import BaseLayout from "./components/base-layout";

import List from "./pages/list";
import Create from "./pages/create";
import Response from "./pages/response";
import Result from "./pages/result";


export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<List />} />
          <Route path="/fazer-o-quiz" element={<Response />} />
          <Route path="/cadastrar-perguntas" element={<Create />} />
          <Route path="/resultado" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}