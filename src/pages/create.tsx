import { FormEvent, useState } from "react"
import InputRadio from "../components/form/input-radio"
import { Button } from "../assets/styled"
import { useNavigate } from "react-router-dom"

export default function Create () {
  const navigate = useNavigate()
  const [question, setQuestion] = useState('')

  const [anwser1, setAnwser1] = useState<string>('')
  const [anwser2, setAnwser2] = useState<string>('')
  const [anwser3, setAnwser3] = useState<string>('')
  const [anwser4, setAnwser4] = useState<string>('')
  
  const [anwserCorrect, setAnwserCorrect] = useState<string>('')

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    try {
      await fetch('http://localhost:3000/questions', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          question,
          anwser1,
          anwser2,
          anwser3,
          anwser4,
          anwserCorrect
        })
      })
      navigate('/')
    } catch (_) {
      alert('Ocorreu um erro ao salvar a questão')
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Pergunta</label>
        <input type="text" required id="question"
          onChange={(evt) => setQuestion(evt.target.value)}
        />
      </div>

      <InputRadio label="Alternativa 1" id="anwser1" name="anwser"
        setAnwser={setAnwser1}
        setCorrect={setAnwserCorrect}
      />

      <InputRadio label="Alternativa 2" id="anwser2" name="anwser"
        setAnwser={setAnwser2}
        setCorrect={setAnwserCorrect}
      />
      <InputRadio label="Alternativa 3" id="anwser3" name="anwser"
        setAnwser={setAnwser3}
        setCorrect={setAnwserCorrect}
      />
      <InputRadio label="Alternativa 4" id="anwser4" name="anwser"
        setAnwser={setAnwser4}
        setCorrect={setAnwserCorrect}
      />

      <Button type="submit">Salvar</Button>
    </form>
  )
}