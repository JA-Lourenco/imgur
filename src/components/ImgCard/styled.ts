import styled from "styled-components";

export const ImgContainer = styled.div`
	border: 1px solid var(--border);
	height: 300px;
	width: 300px;
	display: flex;
	align-content: space-between;
	position: relative;
`;

export const Image = styled.img``;

export const DescBox = styled.div`
	background-color: rgba(200, 200, 200, 0.4);
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
