import React from "react";
import styled from "styled-components";
import locust from "assets/locust_bg.webp";
import map from "assets/map.webp";
import { NavLink } from "react-router-dom";
import ROUTES from "constants/routes";

const Heading = styled.h1`
	font-weight: 700;
	font-size: 5rem;
	@media only screen and (max-width: 600px) {
		font-size: 2.3rem;
	}
`;
const SubHeading = styled.h3`
	font-weight: 400;
`;
const FlexContainer = styled.div`
	display: flex;
	width: 80%;
	gap: 2rem;
	margin: 0 2rem;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	text-align: left;
	@media only screen and (max-width: 600px) {
		gap: 0.8rem;
	}
`;
const LeftTop = styled.div`
	align-items: flex-start;
`;
const LeftBottom = styled.div`
	align-items: flex-start;
`;
const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`;

const Img = styled.img`
	height: 400px;
	border: 3px solid #000;
	@media only screen and (max-width: 600px) {
		height: 300px;
	}
`;
const Caption = styled.figcaption`
	font-size: 0.8rem;
	color: #383838;
`;

const Btn = styled(NavLink)`
	background-color: #2196f3;
	border: none;
	color: #fff;
	display: inline-block;
	font-size: 14px;
	font-weight: 500;
	text-decoration: none;
	letter-spacing: 1px;
	line-height: 1;
	padding: 1.2rem 2.2rem;
	border-radius: 10px;
	text-transform: uppercase;
	box-shadow: inset 0 0 10px #64b5f6;
	transition: 1s;
	&:hover {
		background-color: #1976d2;
	}
`;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	align-items: center;
	/* min-height: calc(100vh - 80px); */
	height: 100%;
	width: 100%;
	margin: 0 auto;
	background-image: linear-gradient(
			rgba(255, 255, 255, 0.8),
			rgba(255, 255, 255, 0.8)
		),
		url(${locust});
	/* background-color: #f5f5f5; */
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	color: #000;
`;

const AboutLink = styled(NavLink)`
	text-decoration: none;
	color: #000;
`;

const Home = () => {
	const { MAP, ABOUT } = ROUTES;
	return (
		<HomeWrapper>
			<FlexContainer>
				<LeftContainer>
					<LeftTop>
						<Heading>Locust Tracking System</Heading>
					</LeftTop>
					<LeftBottom>
						<SubHeading>
							A webapp which shows and predicts location of locust swarms.
							<AboutLink to={ABOUT}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='18'
									height='18'
									viewBox='0 0 24 24'>
									<path d='M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z'></path>
									<path d='M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z'></path>
								</svg>
							</AboutLink>
						</SubHeading>
					</LeftBottom>
				</LeftContainer>
				<RightContainer>
					<Img src={map} alt='map' />
					<Caption>Markers show the location of locust swarms</Caption>
				</RightContainer>
			</FlexContainer>
			<Btn to={MAP}>See Full Map &rarr;</Btn>
		</HomeWrapper>
	);
};

export default Home;
