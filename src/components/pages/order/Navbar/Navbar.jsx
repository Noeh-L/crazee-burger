import Logo from "../../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../../theme";
import NavbarRightSide from "./NavbarRightSide";

/* eslint-disable react/prop-types */
function Navbar({ username }) {
  // BEHAVIOR
  const handleClick = () => {
    window.location.reload();
  };

  // RENDER
  return (
    <NavbarStyled>
      <Logo scale={0.9} onClick={handleClick} className="logo" />
      <NavbarRightSide username={username} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.xs};
  padding-left: ${theme.spacing.xxs};
  padding-right: ${theme.spacing.xl};
  border-bottom: 1px solid ${theme.colors.greyLight};

  .logo {
    cursor: pointer;
  }
`;

export default Navbar;
