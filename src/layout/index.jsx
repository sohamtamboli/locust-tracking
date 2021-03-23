import React from "react";
import styled from "styled-components";
import GlobalStyle from "common/globalStyles";
import Navbar from "components/Navbar";

const PageWrapper = styled.div`
	height: calc(100vh - 80px);
`;

const DefaultLayout = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<PageWrapper>{children}</PageWrapper>
		</>
	);
};

export default DefaultLayout;
