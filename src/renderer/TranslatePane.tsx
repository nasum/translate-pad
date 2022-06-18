import React, { useState, useEffect, useRef } from "react";
import style from "styled-components";

import { useTranslate } from "./hooks/translate";

const FullHeightDiv = style.div`
  height: 100vh;
`;

const FullHeightTextarea = style.textarea`
  height: 100vh;
  margin: 0 3px;
  border: 1px solid black;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  padding: 15px;
`;

export const TranslatePane = () => {
  const LeftTextareaRef = useRef<HTMLTextAreaElement>(null);
  const RightTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");

  const leftResult = useTranslate(leftText, "en-US");
  const rightResult = useTranslate(rightText, "ja");

  useEffect(() => {
    if (RightTextareaRef.current) {
      RightTextareaRef.current.value = leftResult;
    }
  }, [leftResult]);

  useEffect(() => {
    if (LeftTextareaRef.current) {
      LeftTextareaRef.current.value = rightResult;
    }
  }, [rightResult]);

  const onLeftTextareaChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    setLeftText(text);
  };

  const onRightTextareaChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    setRightText(text);
  };
  return (
    <FullHeightDiv className="columns is-gapless">
      <FullHeightDiv className="column is-half">
        <FullHeightTextarea
          className="has-fixed-size"
          onChange={onLeftTextareaChange}
          ref={LeftTextareaRef}
        ></FullHeightTextarea>
      </FullHeightDiv>
      <FullHeightDiv className="column is-half">
        <FullHeightTextarea
          className="has-fixed-size"
          onChange={onRightTextareaChange}
          ref={RightTextareaRef}
        ></FullHeightTextarea>
      </FullHeightDiv>
    </FullHeightDiv>
  );
};
