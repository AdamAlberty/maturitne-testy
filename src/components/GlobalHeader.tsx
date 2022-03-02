import React from "react"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

const GlobalHeader = () => {
  return (
    <header className="bg-darky">
      <div className="flex justify-between p-4">
        <div className="font-display text-2xl">
          <Link to="/">Maturitné testy</Link>
        </div>

        <div>
          <a
            href="https://github.com/AdamAlberty/maturitne-testy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaGithub />
            <div>Pridaj sa</div>
          </a>
        </div>
      </div>
    </header>
  )
}
export default GlobalHeader
