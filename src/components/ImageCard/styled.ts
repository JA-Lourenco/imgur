import styled from "styled-components";

export const ImgContainer = styled.div`
  border: 2px solid var(--border);
  height: 300px;
  width: 100%;
  display: flex;
  align-content: space-between;
  position: relative;
`;

export const Image = styled.img`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const Video = styled.video`
  cursor: pointer;
  height: 100%;
  width: 100%;
`;

export const DescBox = styled.div`
  background-color: var(--gray);
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const Description = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: bold;
`;
