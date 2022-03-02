import { useEffect, useState } from "react"

const Question = ({ number, type, handleAnswer }) => {
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    handleAnswer(number, answer)
  }, [answer, handleAnswer, number])

  return (
    <div>
      <div className="question-number">{number}</div>

      <div className="question-body">
        {type === "long" && (
          <input type="text" onChange={(e) => setAnswer(e.target.value)} />
        )}

        {type === "select" && (
          <div className="select">
            <div
              onClick={() => setAnswer("A")}
              className={`${answer === "A" && "select--highlight"}`}
            >
              A
            </div>
            <div
              onClick={() => setAnswer("B")}
              className={`${answer === "B" && "select--highlight"}`}
            >
              B
            </div>
            <div
              onClick={() => setAnswer("C")}
              className={`${answer === "C" && "select--highlight"}`}
            >
              C
            </div>
            <div
              onClick={() => setAnswer("D")}
              className={`${answer === "D" && "select--highlight"}`}
            >
              D
            </div>
            <div
              onClick={() => setAnswer("E")}
              className={`${answer === "E" && "select--highlight"}`}
            >
              E
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question
