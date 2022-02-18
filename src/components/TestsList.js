import styled from "styled-components";
import { tests } from "../data/tests";
import TestItem from "./TestItem";
const TestsList = () => {
  return (
    <ListWrapper>
      {tests.map((test) => (
        <TestItem
          key={test.id}
          id={test.id}
          name={test.name}
          testLink={test.testLink}
          keysLink={test.keysLink}
        />
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.section`
  padding: 1rem;
  max-width: 700px;
  margin: 1rem auto;
`;

export default TestsList;
