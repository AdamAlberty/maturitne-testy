import styled from "styled-components"
import { Link } from "react-router-dom"
import { AiOutlineCheck } from "react-icons/ai"

const TestItem = (props) => {
  return (
    <ItemWrapper>
      <div className="left">
        <div className="number">{props.id}</div>
        <a href={props.testLink} target="_blank" rel="noopener noreferrer">
          {props.name}
        </a>
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
  border: 2px solid black;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;
    a {
      display: inline-block;
      padding: 1rem;
      text-decoration: none;

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
      font-size: 1.2rem;
      text-decoration: none;
    }
  }

  .number {
    padding: 1.1rem;
    margin-right: 0.5rem;
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.accent};
    color: white;
  }

  .checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 1rem;
    border: 1px solid black;
    color: white;

    width: 25px;
    height: 25px;
  }
  .checked {
    color: black;
    background-color: lightgreen;
  }
`

export default TestItem
