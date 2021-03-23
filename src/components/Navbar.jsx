import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "constants/routes";

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1rem 2rem 1rem;
	height: 80px;
	align-items: center;
	box-shadow: 0 1px 8px #888888;
`;

const NavBrandingWrapper = styled.div`
	flex: 0.85;
`;

const NavBranding = styled(NavLink)`
	text-decoration: none;
	color: #000;
	font-size: 2rem;
	font-weight: 700;

	@media only screen and (max-width: 600px) {
		font-size: 1.2rem;
	}
`;
const NavbarLink = styled(NavLink)`
	text-decoration: none;
	color: #000;
	@media only screen and (max-width: 600px) {
		padding: 0 0.5rem;
	}
`;
const MenuWrapper = styled.div`
	flex: 0.15;
	display: flex;
	justify-content: space-between;
`;

const Navbar = () => {
	const { HOME, MAP, TEAM, ABOUT } = ROUTES;
	return (
		<>
			<NavWrapper>
				<NavBrandingWrapper>
					<NavBranding to={HOME}>LocustTracking</NavBranding>
				</NavBrandingWrapper>

				<MenuWrapper>
					<NavbarLink to={MAP}>Map</NavbarLink>
					<NavbarLink to={ABOUT}>About</NavbarLink>
					<NavbarLink to={TEAM}>Team</NavbarLink>
				</MenuWrapper>
			</NavWrapper>
		</>
	);
};

export default Navbar;
