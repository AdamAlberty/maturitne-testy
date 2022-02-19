import { useParams } from "react-router-dom"
import { answerKeys } from "../data/answerKeys"
import styled from "styled-components"
import Question from "../components/Question"
import { useState } from "react"
import EvaluationModal from "../components/EvaluationModal"

const Test = () => {
  const { slug } = useParams()
  const testKeys = answerKeys.find((el) => el.slug === slug)
  const [userAnswers, setUserAnswers] = useState(new Array(30))
  const [evaluationModal, setEvaluationModal] = useState(false)
  const [userStats, setUserStats] = useState(null)

  const handleAnswer = (questionNumber, answer) => {
    const newUserAnswers = userAnswers
    newUserAnswers[questionNumber - 1] = answer
    setUserAnswers(newUserAnswers)
    console.log(userAnswers)
  }

  const handleTestSubmit = () => {
    let score = 0
    userAnswers.forEach((userAnswer, i) => {
      // Long answers
      if (i < 20) {
        if (testKeys.questions[i].answers.includes(userAnswer)) {
          score++
        }
        // A through E
      } else {
        if (testKeys.questions[i].answer === userAnswer) {
          score++
        }
      }
    })

    setUserStats({ score: score })
    setEvaluationModal(true)
  }

  return (
    <TestWrapper>
      <header className="header">
        <h2>{testKeys.name}</h2>
      </header>

      <main className="questions">
        {testKeys.questions.map((question) => (
          <Question
            number={question.number}
            type={question.type}
            handleAnswer={handleAnswer}
          />
        ))}

        <button onClick={handleTestSubmit} className="finish-button">
          Skontroluj si výsledky
        </button>

        {evaluationModal && <EvaluationModal userStats={userStats} />}
      </main>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  padding: 0 1rem;
  .header {
    margin: 3rem 1rem;
    text-align: center;
  }

  .questions {
    max-width: 400px;
    margin: 0 auto 3rem auto;
  }

  .finish-button {
    margin-top: 2rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.accent};
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1rem;

    &:hover {
      background-color: blue;
    }
  }
`

export default Test
