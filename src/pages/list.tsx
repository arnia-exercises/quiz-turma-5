import { useEffect, useState } from "react"
import { getAllQuestions } from "../services/question-service"


export default function List () {
  const [questions, setQuestions] = useState<Array<Question>>([])

  useEffect(() => {
    getAllQuestions().then(setQuestions)
  }, [])


  return (
    <>
      <h1>LISTAGEM DE PERGUNTAS</h1>

      <ul>
        {questions.map(question => (
          <li key={question.id}>
            {question.question}
          </li>
        ))}
      </ul>
    </>
    
  )
}