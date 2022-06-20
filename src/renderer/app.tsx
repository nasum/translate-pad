import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import style from "styled-components";

import { createRoot } from "react-dom/client";

import { Main } from "./Main";
import { SettingPane } from "./SettingPane";

const RootContainer = style.div`
  overflow: hidden;
`;

function init() {
  const root = createRoot(document.getElementById("app"));

  root.render(
    <RootContainer className="root-container">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/setting" element={<SettingPane />} />
        </Routes>
      </BrowserRouter>
    </RootContainer>
  );
}

init();
