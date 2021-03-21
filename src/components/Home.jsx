import React from "react";
import styled from "styled-components";
import locust from "assets/locust.webp";
import DefaultLayout from "layout";

const Img = styled.img`
	height: auto;
	width: 600px;
`;
const Heading = styled.h1``;
const Para = styled.p``;

const HomeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	width: 70%;
	margin: 0 auto;
`;

const Home = () => {
	return (
		<DefaultLayout>
			<HomeWrapper>
				<Heading>Locust Tracking</Heading>
				<Img src={locust} alt='locust' />
				<Para>
					Desert locust is the world’s most dangerous and destructive migratory
					pest (Cressman et al., 2016; Lazar et al., 2016). They are highly
					voracious, as a single adult locust can consume vegetation equivalent
					to its own weight (approximately 2 grams) in a day (Latchininsky et
					al., 2016). Locust swarms are highly mobile and can fly across
					continents and destroy entire livelihoods in less than six hours, with
					adult swarms flying about 150km daily. A small (1km2) size swarm
					(approx. 40 million locusts) can demolish the equivalent amount food
					that 35,000 people would eat in a day (Cressman et al., 2016). During
					the plague in 2003-2005 in West Africa, 100, 90 and 85 per cent losses
					on cereals, legumes and pastures respectively were recorded, affecting
					more that 8 million people (Renier et al., 2015; Brader et al., 2006).
					Due to desert locusts’ trans-boundary nature they require
					trans-boundary coordination and intervention to deal with.
				</Para>
			</HomeWrapper>
		</DefaultLayout>
	);
};

export default Home;
