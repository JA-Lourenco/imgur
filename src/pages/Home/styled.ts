import styled from "styled-components";

export const ContainerTitle = styled.div`
  text-align: center;
  padding: 50px;
`;

export const PageTitle = styled.h1`
  color: var(--yellow);
  font-size: 50px;
`;

export const Main = styled.main`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Grid = styled.div`
  border: 2px dotted var(--yellow);
  /* width: 80%; */
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(6, auto);
  grid-gap: 15px;
  justify-items: center;
  flex-wrap: wrap;
`;
