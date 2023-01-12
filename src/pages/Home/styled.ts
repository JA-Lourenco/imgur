import styled from "styled-components";

export const ContainerTitle = styled.div`
  text-align: center;
  padding: 25px;
`;

export const ContainerSelects = styled.div`
  width: 80%;
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
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
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(6, auto);
  grid-gap: 15px;
  justify-items: center;
`;
