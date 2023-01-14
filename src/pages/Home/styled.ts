import styled from "styled-components";
import { device } from "../../global/styles/breakpoints";

interface GridProps {}

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

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(1, auto);
  justify-items: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, auto);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, auto);
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(5, auto);
  }
`;
