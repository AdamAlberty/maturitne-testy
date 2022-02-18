import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const TestItem = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <ItemWrapper>
      <div className="left">
        <div className="number">{props.id}</div>
        <a href={props.testLink} target="_blank" rel="noopener noreferrer">
          {props.name}
        </a>
      </div>

      <div className="right">
        <Link to={`/test/${props.id}`}>Spustiť test</Link>

        <a href={props.keysLink} target="_blank" rel="noopener noreferrer">
          Odpovede
        </a>

        <div
          className={`checkbox ${checked && "checked"}`}
          onClick={() => setChecked(!checked)}
        ></div>
      </div>
    </ItemWrapper>
  );
};

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
    padding: 1rem;
  }

  .checkbox {
    cursor: pointer;
    margin: 10px;
    border: 1px solid black;

    width: 20px;
    height: 20px;
  }
  .checked {
    background-color: green;
  }
`;

export default TestItem;
