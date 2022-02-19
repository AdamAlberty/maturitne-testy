import { Link } from "react-router-dom"
import styled from "styled-components"

const EvaluationModal = ({ userStats }) => {
  return (
    <ModalWrapper>
      <div className="modal-inner">
        <header>
          <h2 className="heading">Vyhodnotenie</h2>
        </header>

        <div className="top-grid">
          <section className="score">
            <h3>Tvoje Skóre</h3>
            <div>{userStats.score} z 30</div>
          </section>
          <section className="score">
            <h3>To je</h3>
            <div>{((userStats.score / 30) * 100).toFixed(2)}%</div>
          </section>
        </div>

        <Link to="/" className="link">
          Späť domov
        </Link>
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1rem;

  .modal-inner {
    max-width: 600px;
    margin: 10vh auto;
    border-radius: 0.3rem;
    padding: 1rem;
    background-color: white;
  }

  header {
    margin-bottom: 1rem;
  }

  .heading {
    font-size: 2rem;
  }

  .top-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .score {
    background-color: #efefef;
    border-radius: 0.4rem;
    padding: 0.8rem 0.5rem;
    h3 {
      margin-bottom: 0.3rem;
    }

    div {
      font-size: 1.3rem;
    }
  }

  .percent {
    font-size: 3rem;
    border: 3px solid blue;
  }

  .link {
    display: block;
    margin-top: 1rem;
    background: linear-gradient(to right, #c2e59c, #64b3f4);
    text-decoration: none;
    border-radius: 0.3rem;
    padding: 1rem;
    text-align: center;
    font-size: 1.1rem;
    font-weight: bold;
    color: white;
  }
`

export default EvaluationModal
