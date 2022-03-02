import { Link } from "react-router-dom"
import { AiOutlineCheck } from "react-icons/ai"

const TestItem = (props) => {
  return (
    <div className="mt-3 flex justify-between rounded-lg bg-dark p-3 shadow-md">
      <div>
        <div>
          <a
            className="font-display text-lg transition-colors hover:text-blue-400 focus:text-blue-400"
            href={props.testLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.name}
          </a>
          <div className="left-bottom">
            <div className="font-mono text-sm">{props.code}</div>
            {typeof props.testScore === "number" && (
              <div className="test-score">
                {((props.testScore / 30) * 100).toFixed(2)}%
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <Link
          className="block rounded-lg bg-blue-600 p-2 transition-colors hover:bg-blue-500"
          to={`/test/${props.slug}`}
        >
          Spustiť test
        </Link>

        <a
          className="mt-1 text-sm text-gray-400 hover:text-gray-200"
          href={props.keysLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Oficiálne odpovede
        </a>

        {/* TODO make completed toggle display */}
        <div
          onClick={() => props.handleCompleted(props.id, !props.completed)}
        ></div>
      </div>
    </div>
  )
}

export default TestItem
