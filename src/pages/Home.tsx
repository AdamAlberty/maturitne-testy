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
      {/* Quote */}
      <section className="mx-auto mt-6 max-w-md">
        <blockquote>
          <p className="text-lg">{quote && quote.content}</p>
          <cite className="text-right text-sm">- {quote && quote.author}</cite>
        </blockquote>
      </section>
      <TestsList />
    </>
  )
}

export default Home
