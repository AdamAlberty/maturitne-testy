import { useEffect, useState } from "react"

const Question = ({ number, type, handleAnswer }) => {
  const [answer, setAnswer] = useState(null)

  useEffect(() => {
    handleAnswer(number, answer)
  }, [answer, handleAnswer, number])

  return (
    <div className="mt-4 grid grid-cols-[25px_1fr]">
      <div className="mr-2">{number}</div>

      <div className="w-full">
        {type === "long" && (
          <input
            type="text"
            className="w-full rounded-md border-2 border-gray-500 bg-dark p-2 font-mono text-lg shadow-md outline-none focus:border-blue-400"
            onChange={(e) => setAnswer(e.target.value)}
          />
        )}

        {type === "select" && (
          <div className="flex justify-between">
            <button
              onClick={() => setAnswer("A")}
              className={`rounded-md border-2 border-gray-500 bg-darky px-5 py-3 text-lg shadow-md outline-none focus:border-blue-400 ${
                answer === "A" && "bg-blue-500"
              }`}
            >
              A
            </button>
            <button
              onClick={() => setAnswer("B")}
              className={`rounded-md border-2 border-gray-500 bg-darky py-3 px-5 text-lg shadow-md outline-none focus:border-blue-400 ${
                answer === "B" && "bg-blue-500"
              }`}
            >
              B
            </button>
            <button
              onClick={() => setAnswer("C")}
              className={`rounded-md border-2 border-gray-500 bg-darky px-5 py-3 text-lg shadow-md outline-none focus:border-blue-400 ${
                answer === "C" && "bg-blue-500"
              }`}
            >
              C
            </button>
            <button
              onClick={() => setAnswer("D")}
              className={`rounded-md border-2 border-gray-500 bg-darky px-5 py-3 text-lg shadow-md outline-none focus:border-blue-400 ${
                answer === "D" && "bg-blue-500"
              }`}
            >
              D
            </button>
            <button
              onClick={() => setAnswer("E")}
              className={`rounded-md border-2 border-gray-500 bg-darky py-3 px-5 text-lg shadow-md outline-none focus:border-blue-400  ${
                answer === "E" && "bg-blue-500"
              }`}
            >
              E
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Question
