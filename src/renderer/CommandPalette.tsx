import React, { useState, MouseEvent } from "react";
import styled from "styled-components";

import { useTranslate } from "./hooks/translate";

type Props = {
  handleToggleOpen: () => void;
};

const GlassPane = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const CardContent = styled.div`
  margin: auto;
  width: 500px;
  margin-top: 100px;
`;

type CommandMenuProps = {
  translateValue: "ja" | "us";
  setTranslateValue: (value: "ja" | "us") => void;
};

const CommandMenu = ({
  translateValue,
  setTranslateValue,
}: CommandMenuProps) => {
  return (
    <div className="card-content">
      <ul>
        <li>
          <label>
            <input
              name="translate"
              type="radio"
              value="ja"
              checked={translateValue === "us"}
              onChange={() => setTranslateValue("us")}
              onClick={(e) => e.stopPropagation()}
            />
            Japan to English
          </label>
        </li>
        <li>
          <label>
            <input
              name="translate"
              type="radio"
              value="us"
              checked={translateValue === "ja"}
              onChange={() => setTranslateValue("ja")}
              onClick={(e) => e.stopPropagation()}
            />
            English to Japan
          </label>
        </li>
      </ul>
    </div>
  );
};

export const CommandPlette = ({ handleToggleOpen }: Props) => {
  const [open, setOpen] = useState(false);
  const [translateValue, setTranslateValue] = useState<"ja" | "us">("us");
  const [target, setTarget] = useState("");
  const translated = useTranslate(target, translateValue);

  const clickInput = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setOpen(!open);
  };

  const handleSetTranslateValue = (value: "ja" | "us") => {
    setTranslateValue(value);
  };

  return (
    <GlassPane onClick={handleToggleOpen}>
      <CardContent className="card is-two-thirds">
        <input
          type="text"
          className="input"
          onClick={clickInput}
          onChange={(e) => {
            setTarget(e.currentTarget.value);
          }}
        />
        {open && (
          <CommandMenu
            translateValue={translateValue}
            setTranslateValue={handleSetTranslateValue}
          />
        )}
        {translated && <div className="card-content">Result: {translated}</div>}
      </CardContent>
    </GlassPane>
  );
};
