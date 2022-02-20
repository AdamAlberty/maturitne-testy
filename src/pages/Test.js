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
  }

  const handleTestSubmit = () => {
    let score = 0
    const wrongAnswers = []
    userAnswers.forEach((userAnswer, i) => {
      // Long answers
      if (i < 20) {
        testKeys.questions[i].answers.includes(userAnswer)
          ? score++
          : wrongAnswers.push(i)
        // A through E
      } else {
        testKeys.questions[i].answer === userAnswer
          ? score++
          : wrongAnswers.push(i)
      }
    })

    const testScores = JSON.parse(localStorage.getItem("testScores"))
    if (!testScores) {
      const newScores = { [testKeys.id]: score }
      localStorage.setItem("testScores", JSON.stringify(newScores))
    } else {
      testScores[testKeys.id] = score
      localStorage.setItem("testScores", JSON.stringify(testScores))
    }

    setUserStats({ score, wrongAnswers })
    setEvaluationModal(true)
  }

  return (
    <TestWrapper>
      <header className="header">
        <h2>{testKeys.name}</h2>
      </header>

      <main className="questions">
        <div className="question-columns">
          <div>
            {testKeys.questions.slice(0, 20).map((question) => (
              <Question
                key={question.number}
                number={question.number}
                type={question.type}
                handleAnswer={handleAnswer}
              />
            ))}
          </div>

          <div>
            {testKeys.questions.slice(20, 30).map((question) => (
              <Question
                key={question.number}
                number={question.number}
                type={question.type}
                handleAnswer={handleAnswer}
              />
            ))}
          </div>
        </div>

        <button onClick={handleTestSubmit} className="finish-button">
          Skontroluj si výsledky
        </button>

        {evaluationModal && (
          <EvaluationModal
            testKeys={testKeys}
            userAnswers={userAnswers}
            userStats={userStats}
          />
        )}
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
    @media (min-width: 800px) {
      max-width: 800px;
    }

    margin: 0 auto 3rem auto;
  }

  .question-columns {
    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
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
