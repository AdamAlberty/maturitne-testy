import TestsList from "../components/TestsList.tsx"
import { useState, useEffect } from "react"

const Home = () => {
  const [quote, setQuote] = useState(null)

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random")
    const data = await res.json()
    setQuote(data)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  return (
    <>
      <img
        className="absolute top-44 left-16 w-32"
        src="/img/planet-illustration.svg"
        alt="Planet"
      />

      {/* Quote */}
      <section className="mx-auto mt-6 max-w-md">
        <blockquote>
          <p className="font-display text-lg">{quote && quote.content}</p>
          <cite className="text-right text-sm">- {quote && quote.author}</cite>
        </blockquote>
      </section>
      <TestsList />
    </>
  )
}

export default Home
