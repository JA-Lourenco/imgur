import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
		--white: #f5f5f5;
		--navyBlue: #001427;
		--yellow: #F6AE2D;
    --gray: #888;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: var(--navyBlue);
	}
`;
