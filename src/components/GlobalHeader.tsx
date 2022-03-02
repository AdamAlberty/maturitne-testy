import React from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

const GlobalHeader = () => {
  return (
    <header className="sticky top-0 bg-darky">
      <div className="flex items-center justify-between p-4">
        <div className="font-display text-2xl">
          <Link to="/">Maturitné testy</Link>
        </div>

        <div>
          <a
            href="https://github.com/AdamAlberty/maturitne-testy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded border-2  p-2 transition-colors hover:bg-light hover:text-darky"
          >
            <FaGithub />
            <div className="ml-2">Pridaj sa</div>
          </a>
        </div>
      </div>
    </header>
  )
}
export default GlobalHeader
