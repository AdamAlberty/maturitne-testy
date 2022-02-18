import styled from "styled-components";

const Question = (props) => {
  return (
    <QuestionWrapper>
      <div className="question-number">{props.number}</div>

      <div className="question-body">
        {props.type === "long" && <input type="text" />}

        {props.type === "select" && (
          <div className="select">
            <div>A</div>
            <div>B</div>
            <div>C</div>
            <div>D</div>
            <div>E</div>
          </div>
        )}
      </div>
    </QuestionWrapper>
  );
};

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  margin-top: 0.4rem;

  .question-number {
    font-size: 1.5rem;
    width: 30px;
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
    display: flex;
    justify-content: space-between;

    & > div {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border: 2px solid black;
    }
  }
`;

export default Question;
