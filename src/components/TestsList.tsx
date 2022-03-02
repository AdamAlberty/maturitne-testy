import { tests } from "../data/tests.ts"
import TestItem from "./TestItem.tsx"
import { useEffect, useState } from "react"
import PlaylistLink from "./PlaylistLink.tsx"

const TestsList = () => {
  const [completedTests, setCompletedTests] = useState([])
  const [testScores, setTestScores] = useState({})

  useEffect(() => {
    const completedTestsFromStorage = JSON.parse(
      localStorage.getItem("completedTests")
    )
    if (completedTestsFromStorage) {
      setCompletedTests(completedTestsFromStorage)
    } else {
      localStorage.setItem("completedTests", JSON.stringify([]))
    }

    const testScoresFromStorage = JSON.parse(localStorage.getItem("testScores"))
    if (!testScoresFromStorage) {
      localStorage.setItem("testScores", JSON.stringify({}))
    } else {
      setTestScores(testScoresFromStorage)
    }
  }, [])

  const handleCompleted = (id, isCompleted) => {
    if (isCompleted) {
      setCompletedTests([...completedTests, id])
      localStorage.setItem(
        "completedTests",
        JSON.stringify([...completedTests, id])
      )
    } else {
      const index = completedTests.indexOf(id)
      if (index > -1) {
        const newCompleted = completedTests.filter((el) => el !== id)
        setCompletedTests(newCompleted)
        localStorage.setItem("completedTests", JSON.stringify(newCompleted))
      }
    }
  }

  return (
    <section className="mx-auto mt-10 max-w-screen-md p-3">
      <h2 className="font-display text-4xl">Matematika</h2>
      {tests.map((test) => (
        <TestItem
          testScore={testScores[test.id]}
          completed={completedTests.includes(test.id)}
          code={test.code}
          handleCompleted={handleCompleted}
          key={test.id}
          id={test.id}
          slug={test.slug}
          name={test.name}
          testLink={test.testLink}
          keysLink={test.keysLink}
        />
      ))}

      <PlaylistLink />
    </section>
  )
}

export default TestsList
