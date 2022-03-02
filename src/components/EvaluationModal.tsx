import { Link } from "react-router-dom"
import JSConfetti from "js-confetti"
import { IoClose } from "react-icons/io5"

const EvaluationModal = ({ userStats, userAnswers, testKeys }) => {
  // Confetti
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti()

  const wrongAnswers = userStats.wrongAnswers.map((index) => {
    if (index < 20) {
      return (
        <div className="grid grid-cols-[30px_1fr_1fr] items-center gap-3 p-2">
          <div className="h-[30px] rounded bg-gray-700 p-1 font-bold">
            {index + 1}
          </div>
          <div>
            <div>
              {userAnswers[index] || <IoClose size="2rem" color="#ef4444" />}
            </div>
          </div>
          <div className="p-2xl rounded-md border-2 border-gray-500 p-2">
            <div className="flex">
              {testKeys.questions[index].answers.map((ans) => (
                <div className="mr-3">{ans}</div>
              ))}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="grid grid-cols-[30px_1fr_1fr] items-center gap-3 p-2">
          <div className="h-[30px] rounded bg-gray-700 p-1 font-bold">
            {index + 1}
          </div>

          <div className="p-3 font-bold">
            {userAnswers[index] || <IoClose size="2rem" color="#ef4444" />}
          </div>
          <div className="rounded-md border-2 border-gray-500 p-2 text-lg">
            {testKeys.questions[index].answer}
          </div>
        </div>
      )
    }
  })

  return (
    <div className="fixed top-0 left-0 h-full w-full bg-black/25 px-2">
      <div className="mx-auto mt-5 max-w-screen-sm rounded-2xl bg-darky p-5 md:mt-28">
        <header className="mb-5">
          <h2 className="font-display text-3xl">Vyhodnotenie</h2>
        </header>

        <section className="grid grid-cols-2 gap-5">
          <div>
            <h3 className="font-display">Skóre</h3>
            <div className="rounded-md bg-gray-700 p-5 text-center text-2xl font-bold">
              {userStats.score} z 30
            </div>
          </div>
          <div>
            <h3 className="font-display">Percentá</h3>
            <div className="rounded-md bg-gray-700 p-5 text-center text-2xl font-bold">
              {((userStats.score / 30) * 100).toFixed(2)}%
            </div>
          </div>
        </section>

        {/* Chyby */}
        <h3 className="mt-5 mb-2 font-display text-2xl">Nesprávne odpovede</h3>
        <section className="h-64 overflow-y-scroll md:h-96">
          {wrongAnswers}
        </section>

        <Link
          to="/"
          className="mt-5 block rounded-md bg-blue-600  p-3 text-center font-display text-xl shadow-lg transition-shadow hover:shadow-none"
        >
          Späť domov
        </Link>
      </div>
    </div>
  )
}

export default EvaluationModal
