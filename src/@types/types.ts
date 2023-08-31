type ScreensType = 'create' | 'list' | 'response' | 'finish'

type AnswerType = {
  id: string
  description: string
  correct: boolean
}

type Quiz = {
  question: string
  answer1: AnswerType
  answer2: AnswerType
  answer3: AnswerType
  answer4: AnswerType
}