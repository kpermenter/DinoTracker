// React imports
import React from "react";

// Component imports
import TopNav from "calcite-react/TopNav";
import TopNavBrand from "calcite-react/TopNav/TopNavBrand";
import TopNavTitle from "calcite-react/TopNav/TopNavTitle";
import TopNavList from "calcite-react/TopNav/TopNavList";
import TopNavLink from "calcite-react/TopNav/TopNavLink";
import logo from "../styles/images/logo.png";
// import UserAccount from "./UserAccount"
import { useSelector, useDispatch } from "react-redux";
import { startAuth, logout } from "../redux/reducers/auth";

// Styled Components
import styled from "styled-components";

const Logo = styled(TopNavBrand)`
  justify-content: center;
  & img {
    height: 55px;
  }
`;

const Nav = styled(TopNav)`
  && {
    z-index: 5;
  }
`;

const NavList = styled(TopNavList)`
  text-align: left;
`;

// Component definition
const Navbar = props => {
  const auth = useSelector(state => state.auth);
  const config = useSelector(state => state.config);
  const dispatch = useDispatch();

//   Sign in button click event
  const signIn = () => {
    const { clientId, sessionId, popup } = config;
    dispatch(
      startAuth({
        clientId,
        sessionId,
        popup,
        signInRequest: true
      })
    );
  };

//   Sign out button click event
  const signOut = () => {
    dispatch(logout(config.sessionId));
  };

  return (
      <Nav>
        <Logo href="#" src={logo} />
        <TopNavTitle>Worldwide Historic Fossil Sites</TopNavTitle>
        <NavList>
          <TopNavLink href="">
            {/*  */}
          </TopNavLink>
          <TopNavLink href="">
            {/* */}
          </TopNavLink>
          <TopNavLink href="">
            {/* */}
          </TopNavLink>
        </NavList>
        {/* <UserAccount
          user={auth.user}
          portal={auth.portal}
          token={auth.token}
          loggedIn={auth.loggedIn}
          signIn={signIn}
          signOut={signOut}
        /> */}
      </Nav>
  )};

export default Navbar;
