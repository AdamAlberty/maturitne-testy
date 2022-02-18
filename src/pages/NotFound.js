import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <div>Táto stránka nebola nájdená</div>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  font-size: 1.2rem;
  margin: 5rem;
  text-align: center;
`;

export default NotFound;
