import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "constants/routes";

const NavWrapper = styled.div`
	display: flex;
`;
const NavBranding = styled(NavLink)``;
const NavbarLink = styled(NavLink)``;
const MenuWrapper = styled.div``;

const Navbar = () => {
	const { HOME, MAP, TEAM } = ROUTES;
	return (
		<>
			<NavWrapper>
				<NavBranding to={HOME}>LocustTracking</NavBranding>
				<MenuWrapper>
					<NavbarLink to={MAP}>Map</NavbarLink>
					<NavbarLink to={TEAM}>Team</NavbarLink>
				</MenuWrapper>
			</NavWrapper>
		</>
	);
};

export default Navbar;
