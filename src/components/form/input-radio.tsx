import { Dispatch, SetStateAction } from "react"
import { IptRadio } from "./styled"

interface Props {
  label: string
  name: string
  id: string
  setAnwser: Dispatch<SetStateAction<string>>
  setCorrect: Dispatch<SetStateAction<string>>
}

export default function InputRadio ({ label, id, name, setAnwser, setCorrect }: Props) {
  return (
    <IptRadio>
      <div className="input">
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id}
          onChange={(e) => setAnwser(e.target.value)} />
      </div>

      <div className="radio">
        <label htmlFor={`${id}-radio`}>Correta?</label>
        <input type="radio" name={name} id={`${id}-radio`} value={id}
          onChange={(e) => setCorrect(e.target.value)}
          />
      </div>
    </IptRadio>
  )
}