import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-center;
  position: absolute;
`;

export const NavIcons = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const NavLi = styled.li`
  padding: 0 0 15px 0;
  font-size: 2rem;
  display: flex;

  & > a {
    padding: 0 10px;
    color: var(--dark);
    display: flex;
    flex-direction: column;
  }

  & > a.active {
    color: var(--yellow) !important;
  }

  & > a.active > span {
    position: relative;
    display: block;
    padding-bottom: 10px;
  }

  & > a.active > span:after {
    width: 5px;
    height: 5px;
    border-radius: 70px;
    background-color: var(--yellow);
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
  }
`;
