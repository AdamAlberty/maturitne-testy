import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GlobalHeader = () => {
  return (
    <HeaderWrapper>
      <div className="inner-header">
        <div className="left">
          <Link to="/">Maturitné testy</Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: black;
  color: white;

  .inner-header {
    padding: 1rem;
  }

  .left {
    a {
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

export default GlobalHeader;
