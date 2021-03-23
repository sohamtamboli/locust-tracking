import DefaultLayout from "layout";
import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 80%;
	height: 100%;
	margin: 0 auto;
`;
const FieldContainer = styled.div`
	text-align: left;
`;
const Header = styled.div`
	padding: 2rem 0;
`;

const Heading = styled.h1`
	font-weight: 700;
`;
const SubHeading = styled.h3`
	font-weight: 500;
`;
const Para = styled.p`
	padding: 1rem 0;
	text-align: justify;
`;
const MoreInfo = styled.a`
	text-decoration: none;
	color: #000;
`;

const About = () => {
	return (
		<DefaultLayout>
			<FlexContainer>
				<FieldContainer>
					<Header>
						<Heading>Locust Tracking System</Heading>
						<SubHeading>Tech Mahindra's Makers Lab Project</SubHeading>
					</Header>
					<Para>
						<b>Aim:</b> Tech Mahindra's Makers Lab aims to promote technology
						innovation and recognize transformative ideas that have a potential
						to make a difference and create disruptive solutions to solve real
						world problems.
					</Para>
					<Para>
						<b>Vision:</b> Educated, skilled and able women and men are a
						country’s true strength. Aspire to see children who are purposefully
						engaged, youth that is constructively employed and a society that
						provides equal opportunities to people with different abilities.
					</Para>
				</FieldContainer>
				<FieldContainer>
					<Header>
						<Heading>About the Project</Heading>
						<SubHeading></SubHeading>
					</Header>
					<Para>
						<b>Brief:</b> Desert locusts have attacked crops since antiquity. To
						prevent or mitigate its effects on local communities, it is
						necessary to precisely locate its breeding areas. Previous works
						have relied on precipitation and vegetation index datasets obtained
						by satellite remote sensing. However, these products present some
						limitations in arid or semiarid environments. We have explored a
						parameter: soil moisture (SM); and examined its influence on the
						desert locust wingless juveniles. We have used two machine learning
						algorithms (generalized linear model and random forest) to evaluate
						the link between hopper presences and SM conditions under different
						time scenarios. RF obtained the best model performance with very
						good validation results according to the true skill statistic and
						receiver operating characteristic curve statistics. It was found
						that an area becomes suitable for breeding when the minimum SM
						values are over 0.07  m3  /  m3 during 6 days or more. These results
						demonstrate the possibility to identify breeding areas in Mauritania
						by means of SM, and the suitability of ESA CCI SM product to
						complement or substitute current monitoring techniques based on
						precipitation datasets.
					</Para>
					<Para>
						<MoreInfo href='https://www.spiedigitallibrary.org/journals/journal-of-applied-remote-sensing/volume-12/issue-03/036011/Machine-learning-approach-to-locate-desert-locust-breeding-areas-based/10.1117/1.JRS.12.036011.full?SSO=1'>
							More Info
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='18'
								height='18'
								viewBox='0 0 24 24'>
								<path d='M13 3L16.293 6.293 9.293 13.293 10.707 14.707 17.707 7.707 21 11 21 3z'></path>
								<path d='M19,19H5V5h7l-2-2H5C3.897,3,3,3.897,3,5v14c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2v-5l-2-2V19z'></path>
							</svg>
						</MoreInfo>
					</Para>
				</FieldContainer>
			</FlexContainer>
		</DefaultLayout>
	);
};

export default About;
