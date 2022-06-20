import React, { useState } from "react";

import { useHotkeys } from "react-hotkeys-hook";

import { TranslatePane } from "./TranslatePane";
import { NavBar } from "./NavBar";
import { CommandPlette } from "./CommandPalette";

export function Main() {
  const [openCommandPalette, setOpenCommandPalette] = useState(false);

  useHotkeys(
    "cmd+p",
    () => {
      setOpenCommandPalette(!openCommandPalette);
    },
    [openCommandPalette]
  );

  const handleToggleOpen = () => {
    setOpenCommandPalette(!openCommandPalette);
  };

  return (
    <>
      <NavBar />
      <TranslatePane />
      {openCommandPalette && (
        <CommandPlette handleToggleOpen={handleToggleOpen} />
      )}
    </>
  );
}
