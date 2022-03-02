import { useParams } from "react-router-dom"
import { answerKeys } from "../data/answerKeys"
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
    <div className="mx-auto max-w-screen-md px-3">
      <header className="mt-16 mb-10">
        <h2 className="text-center font-display text-2xl md:text-left">
          {testKeys.name}
        </h2>
      </header>

      <main>
        <div>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              {testKeys.questions.slice(0, 10).map((question) => (
                <Question
                  key={question.number}
                  number={question.number}
                  type={question.type}
                  handleAnswer={handleAnswer}
                />
              ))}
            </div>

            <div>
              {testKeys.questions.slice(10, 20).map((question) => (
                <Question
                  key={question.number}
                  number={question.number}
                  type={question.type}
                  handleAnswer={handleAnswer}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              {testKeys.questions.slice(20, 25).map((question) => (
                <Question
                  key={question.number}
                  number={question.number}
                  type={question.type}
                  handleAnswer={handleAnswer}
                />
              ))}
            </div>

            <div>
              {testKeys.questions.slice(25, 30).map((question) => (
                <Question
                  key={question.number}
                  number={question.number}
                  type={question.type}
                  handleAnswer={handleAnswer}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleTestSubmit}
          className="mt-10 block w-full rounded-md bg-blue-600 p-3 font-display text-lg"
        >
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
    </div>
  )
}

export default Test
