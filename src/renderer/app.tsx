import React from "react";
import style from "styled-components";

import { createRoot } from "react-dom/client";
import { TranslateArea } from "./TranslateArea";

const RootContainer = style.div`
  overflow: hidden;
`;

function init() {
  const root = createRoot(document.getElementById("app"));

  root.render(
    <RootContainer className="root-container">
      <TranslateArea />
    </RootContainer>
  );
}

init();
