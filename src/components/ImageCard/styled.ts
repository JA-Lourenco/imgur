import styled from "styled-components";

export const ImgContainer = styled.div`
  border: 2px solid var(--yellow);
  height: 300px;
  width: 300px;
  /* display: flex;
  align-content: space-between; */
  position: relative;
  overflow: hidden;
`;

export const A = styled.a`
  margin: auto;
`;

export const Image = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Video = styled.video`
  cursor: pointer;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DescBox = styled.div`
  background-color: var(--yellow);
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const Description = styled.p`
  color: var(--navyBlue);
  font-size: 16px;
  font-weight: bold;
`;
