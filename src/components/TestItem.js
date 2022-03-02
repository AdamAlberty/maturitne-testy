import { Link } from "react-router-dom"
import { AiOutlineCheck } from "react-icons/ai"

const TestItem = (props) => {
  return (
    <div>
      <div className="left">
        <div className="number">{props.id}</div>
        <div>
          <a href={props.testLink} target="_blank" rel="noopener noreferrer">
            {props.name}
          </a>
          <div className="left-bottom">
            <div className="code">{props.code}</div>
            {typeof props.testScore === "number" && (
              <div className="test-score">
                {((props.testScore / 30) * 100).toFixed(2)}%
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="right">
        <a href={props.keysLink} target="_blank" rel="noopener noreferrer">
          Odpovede
        </a>

        <div
          className={`checkbox ${props.completed && "checked"}`}
          onClick={() => props.handleCompleted(props.id, !props.completed)}
        >
          <AiOutlineCheck />
        </div>

        <Link className="start-test-button" to={`/test/${props.slug}`}>
          Spustiť test
        </Link>
      </div>
    </div>
  )
}

export default TestItem
