import { useParams } from "react-router-dom";
import { answerKeys } from "../data/answerKeys";
import styled from "styled-components";
import Question from "../components/Question";

const Test = () => {
  const { id } = useParams();

  const testKeys = answerKeys.find((el) => el.id == id);
  console.log(testKeys);

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
  );
};

const TestWrapper = styled.div`
  .header {
    margin: 3rem 1rem;
    text-align: center;
  }

  .questions {
    max-width: 400px;
    margin: 0 auto;
  }

  .finish-button {
    margin-top: 2rem;
    padding: 1rem;
    background-color: lightblue;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    width: 100%;
    font-size: 1rem;
  }
`;

export default Test;
