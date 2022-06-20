import React from "react";
import { Link } from "react-router-dom";
import style from "styled-components";

const NavBarContainer = style.aside`
    position: absolute;
    z-index: 10;
    height: 100vh;
    width: 200px;
    margin-left: -190px;
    transition: all 0.5s 0s ease;

    &:hover {
        margin-left: 0px;
    }
`;

const NavBarInner = style.div`
    height: 100vh;
    padding: 10px;
`;

export const NavBar = () => {
  return (
    <NavBarContainer className="menu ui-background">
      <NavBarInner className="panel">
        <p className="menu-label">Setting</p>
        <ul className="menu-list">
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      </NavBarInner>
    </NavBarContainer>
  );
};
