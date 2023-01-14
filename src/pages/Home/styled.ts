import styled from "styled-components";
import { device } from "../../global/styles/breakpoints";

interface GridProps {
  gridSize: boolean;
}

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
  padding: 20px 0;
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

  justify-items: center;

  grid-template-columns: repeat(1, auto);

  @media ${device.tablet} {
    grid-template-columns: repeat(
      ${({ gridSize }) => (gridSize ? 3 : 2)},
      auto
    );
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(
      ${({ gridSize }) => (gridSize ? 3 : 2)},
      auto
    );
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(
      ${({ gridSize }) => (gridSize ? 4 : 2)},
      auto
    );
  }

  @media ${device.desktop} {
    grid-template-columns: repeat(
      ${({ gridSize }) => (gridSize ? 6 : 3)},
      auto
    );
  }
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--navyBlue);
  color: var(--yellow);
  border: 1px solid var(--yellow);
  border-radius: 5px;
  outline: none;
  text-align: center;

  &:hover {
    cursor: pointer;
    transition: all 0.4s linear;
    background-color: var(--yellow);
    color: var(--navyBlue);
  }
`;
