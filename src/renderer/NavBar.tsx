import React, { useState } from "react";
import style from "styled-components";

type Props = {
  toggleSetting: () => void;
};

const NavBarContainer = style.aside`
    position: absolute;
    z-index: 10;
    background-color: white;
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

export const NavBar = ({ toggleSetting }: Props) => {
  return (
    <NavBarContainer className="menu">
      <NavBarInner className="panel">
        <p className="menu-label">Setting</p>
        <ul className="menu-list">
          <li>
            <a onClick={toggleSetting}>open setting</a>
          </li>
        </ul>
      </NavBarInner>
    </NavBarContainer>
  );
};
