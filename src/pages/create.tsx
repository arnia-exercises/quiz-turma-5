import { useState } from "react"

type Props = {
  createQuiz: (quiz: Quiz) => void
}

function generateDefaultValue ():AnswerType {
  return {
    id: crypto.randomUUID(),
    correct: false,
    description: ''
  }
}

export default function Create ({ createQuiz }: Props) {
  const [question, setQuestion] = useState<string>('')
  const [answer1, setAnswer1] = useState<AnswerType>(generateDefaultValue())
  const [answer2, setAnswer2] = useState<AnswerType>(generateDefaultValue())
  const [answer3, setAnswer3] = useState<AnswerType>(generateDefaultValue())
  const [answer4, setAnswer4] = useState<AnswerType>(generateDefaultValue())

  return (
    <h1>Create SCREEN</h1>
  )
}