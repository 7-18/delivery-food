import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { NavIcons, NavLi, NavStyled } from "./NavbarStyles";
import { NavLink } from "react-router-dom";

export const Navbar = ({ active }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavStyled>
      <NavIcons value={value} onChange={handleChange} aria-label="nav icons">
        <NavLi>
          <NavLink to="/home" className={active === "active" ? active : ""}>
            <AiOutlineHome />
            <span></span>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/search">
            <FiSearch />
            <span></span>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/order">
            <GiBackwardTime />
            <span></span>
          </NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/user-account">
            <FaRegUser />
            <span></span>
          </NavLink>
        </NavLi>
      </NavIcons>
    </NavStyled>
  );
};
