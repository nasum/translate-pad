import React, { useState, useEffect, useRef } from "react";
import style from "styled-components";

import { useTranslate } from "./hooks/translate";
import { TranslateTextArea } from "./TranslateTextArea";

const FullHeightDiv = style.div`
  height: 100vh;
`;

export const TranslatePane = () => {
  const LeftTextareaRef = useRef<HTMLTextAreaElement>(null);
  const RightTextareaRef = useRef<HTMLTextAreaElement>(null);

  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");

  const leftResult = useTranslate(leftText, "us");
  const rightResult = useTranslate(rightText, "ja");

  useEffect(() => {
    if (RightTextareaRef.current) {
      RightTextareaRef.current.value = leftResult;
    }
  }, [leftResult, RightTextareaRef]);

  useEffect(() => {
    if (LeftTextareaRef.current) {
      LeftTextareaRef.current.value = rightResult;
    }
  }, [rightResult, LeftTextareaRef]);

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
      <TranslateTextArea
        handleOnChange={onLeftTextareaChange}
        textAreaRef={LeftTextareaRef}
        lang="jp"
      />
      <TranslateTextArea
        handleOnChange={onRightTextareaChange}
        textAreaRef={RightTextareaRef}
        lang="us"
      />
    </FullHeightDiv>
  );
};
