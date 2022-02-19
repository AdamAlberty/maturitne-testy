import { useState } from "react"
import styled from "styled-components"

const Question = (props) => {
  const [answer, setAnswer] = useState(null)

  return (
    <QuestionWrapper>
      <div className="question-number">{props.number}</div>

      <div className="question-body">
        {props.type === "long" && (
          <input type="text" onChange={(e) => setAnswer(e.target.value)} />
        )}

        {props.type === "select" && (
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
    </QuestionWrapper>
  )
}

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-top: 0.4rem;

  .question-number {
    font-size: 1.5rem;
    width: 50px;
  }

  .question-body {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 2px solid black;
  }

  .select {
    cursor: pointer;
    display: flex;
    justify-content: space-between;

    & > div {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border: 2px solid black;
    }
  }

  .select--highlight {
    background-color: black;
    color: white;
  }
`

export default Question
