export const getAllQuestions = async (): Promise<Question[]> => {
  const response = await fetch('http://localhost:3000/questions', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    return await response.json()
  }

  throw new Error ('Ocorreu um erro ao carregar os dados')

}
