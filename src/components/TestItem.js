import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineCheck } from "react-icons/ai"

const TestItem = (props) => {
  return (
    <ItemWrapper>
      <div className="left">
        <div className="number">{props.id}</div>
        <div>
          <a href={props.testLink} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
          <div className="code">{props.code}</div>
        </div>
      </div>

      <div className="right">
        <Link to={`/test/${props.slug}`}>Spustiť test</Link>

        <a href={props.keysLink} target="_blank" rel="noopener noreferrer">
          Odpovede
        </a>

        <div
          className={`checkbox ${props.completed && "checked"}`}
          onClick={() => props.handleCompleted(props.id, !props.completed)}
        >
          <AiOutlineCheck />
        </div>
      </div>
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  padding: 0.5rem 0;
  border: 2px solid black;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;
    a {
      display: inline-block;
      padding: 0.3rem;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        color: white;
        background-color: black;
      }
    }
  }

  .left {
    display: flex;
    align-items: center;

    a {
      font-size: 1.1rem;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .code {
    padding: 0.2rem;
    font-size: 0.9rem;
    width: max-content;
    margin-top: 0.2rem;
    border-radius: 0.2rem;
    background-color: #efefef;
  }

  .number {
    padding: 0.5rem;
    margin-right: 0.2rem;
    font-size: 1rem;
    color: #00c9e9;
    font-weight: bold;
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0.5rem;
    border: 1px solid black;
    color: white;

    flex-shrink: 0;
    width: 25px;
    height: 25px;
  }
  .checked {
    color: black;
    background-color: lightgreen;
  }
`

export default TestItem
