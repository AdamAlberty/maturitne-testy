import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

const GlobalHeader = () => {
  return (
    <HeaderWrapper>
      <div className="inner-header">
        <div className="left">
          <Link to="/">Maturitné testy</Link>
        </div>

        <div className="right">
          <a
            href="https://github.com/AdamAlberty/maturitne-testy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <div>Pridaj sa</div>
          </a>
        </div>
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: black;
  color: white;

  .inner-header {
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }

  .left {
    a {
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .right {
    a {
      background-color: ${(props) => props.theme.accent};
      text-decoration: none;
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
      div {
        margin-left: 0.3rem;
      }
    }
  }
`

export default GlobalHeader
