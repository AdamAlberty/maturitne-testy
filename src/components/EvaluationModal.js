import { Link } from "react-router-dom"
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
    <div>
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
    </div>
  )
}

export default EvaluationModal
