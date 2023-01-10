import styled from "styled-components";

export const Main = styled.main`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  border: 2px dotted var(--border);
  /* width: 80%; */
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(6, auto);
  grid-gap: 15px;
  justify-items: center;
  flex-wrap: wrap;
`;
