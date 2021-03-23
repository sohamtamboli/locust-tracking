import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "constants/routes";

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 2rem;
	height: 80px;
	align-items: center;
`;

const NavBrandingWrapper = styled.div`
	flex: 0.9;
`;

const NavBranding = styled(NavLink)`
	text-decoration: none;
	color: #000;
	font-size: 2rem;
	font-weight: 700;
`;
const NavbarLink = styled(NavLink)`
	text-decoration: none;
	color: #000;
`;
const MenuWrapper = styled.div`
	flex: 0.1;
	display: flex;
	justify-content: space-between;
`;

const Navbar = () => {
	const { HOME, MAP, TEAM } = ROUTES;
	return (
		<>
			<NavWrapper>
				<NavBrandingWrapper>
					<NavBranding to={HOME}>LocustTracking</NavBranding>
				</NavBrandingWrapper>

				<MenuWrapper>
					<NavbarLink to={MAP}>Map</NavbarLink>
					<NavbarLink to={TEAM}>Team</NavbarLink>
				</MenuWrapper>
			</NavWrapper>
		</>
	);
};

export default Navbar;
