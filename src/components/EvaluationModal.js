import { Link } from "react-router-dom"
import styled from "styled-components"
import JSConfetti from "js-confetti"

const EvaluationModal = ({ userStats, userAnswers, testKeys }) => {
  // Confetti
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()

  const wrongAnswers = userStats.wrongAnswers.map((index) => {
    if (index < 20) {
      return (
        <div className="wrong-answer">
          <div className="number">{index + 1}</div>
          <div className="answer-body">
            <p>Tvoja odpoveď</p>
            <div>{userAnswers[index] || "_______"}</div>
          </div>
          <div>
            <p>Správne malo byť</p>
            <div>{testKeys.questions[index].answers}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="wrong-answer">
          <div className="number">{index + 1}</div>
          <div className="answer-body">
            <p>Tvoja odpoveď</p>
            <div>{userAnswers[index] || "_______"}</div>
          </div>
          <div>
            <p>Správne malo byť</p>
            <div>{testKeys.questions[index].answer}</div>
          </div>
        </div>
      )
    }
  })

  return (
    <ModalWrapper>
      <div className="modal-inner">
        <header>
          <h2 className="heading">Vyhodnotenie</h2>
        </header>

        <div className="top-grid">
          <section className="score">
            <h3>Skóre</h3>
            <div>{userStats.score} / 30</div>
          </section>
          <section className="score">
            <h3>Percentá</h3>
            <div>{((userStats.score / 30) * 100).toFixed(2)}%</div>
          </section>
        </div>

        {/* Chyby */}
        <section className="answers">{wrongAnswers}</section>

        <Link to="/" className="link">
          Späť domov
        </Link>
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;

  .modal-inner {
    max-width: 600px;
    margin: 10vh auto;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: white;
  }

  header {
    margin-bottom: 1rem;
  }

  .heading {
    font-size: 2rem;
  }

  .top-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .score {
    background-color: #efefef;
    border-radius: 0.4rem;
    padding: 0.8rem 0.5rem;
    h3 {
      margin-bottom: 0.5rem;
      text-align: center;
    }

    div {
      font-size: 1.7rem;
      text-align: center;
      font-weight: bold;
    }
  }

  .percent {
    font-size: 3rem;
    border: 3px solid blue;
  }

  .link {
    display: block;
    margin-top: 1rem;
    background: linear-gradient(to right, #c2e59c, #64b3f4);
    text-decoration: none;
    border-radius: 0.3rem;
    padding: 1rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
  }

  .answers {
    max-height: 50vh;
    overflow-y: scroll;
    margin-top: 2rem;
    border-radius: 0.5rem;
  }

  .wrong-answer {
    display: flex;
    align-items: flex-start;

    margin-top: 0.2rem;
    padding: 1rem 0.5rem;
    background-color: #f7f7f7;
    border-radius: 0.4rem;
  }

  .answer-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .number {
    background-color: #ffdeec;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin-right: 0.3rem;
    font-weight: bold;
    min-width: 30px;
    min-height: 30px;
  }
`

export default EvaluationModal
