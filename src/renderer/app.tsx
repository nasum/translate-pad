import React from "react";
import { createRoot } from "react-dom/client";
import { TranslateArea } from "./TranslateArea";

function init() {
  const root = createRoot(document.getElementById("app"));

  root.render(
    <div>
      <h2>TranslatePad</h2>
      <TranslateArea />
    </div>
  );
}

init();
