import { useParams } from "react-router-dom"
import { answerKeys } from "../data/answerKeys"
import styled from "styled-components"
import Question from "../components/Question"

const Test = () => {
  const { slug } = useParams()
  const testKeys = answerKeys.find((el) => el.slug === slug)

  return (
    <TestWrapper>
      <header className="header">
        <h2>{testKeys.name}</h2>
      </header>

      <main className="questions">
        {testKeys.questions.map((question) => (
          <Question number={question.number} type={question.type} />
        ))}

        <button className="finish-button">Skontroluj si výsledky</button>
      </main>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  .header {
    margin: 3rem 1rem;
    text-align: center;
  }

  .questions {
    max-width: 400px;
    margin: 0 auto 3rem auto;
  }

  .finish-button {
    margin-top: 2rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.accent};
    cursor: pointer;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1rem;

    &:hover {
      background-color: blue;
    }
  }
`

export default Test
