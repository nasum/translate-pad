import React, { useState, useEffect, useRef } from "react";

import { useTranslate } from "./hooks/translate";

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
    <div className="translate-area">
      <div>
        <h3>日</h3>
        <textarea
          className="left-area"
          onChange={onLeftTextareaChange}
          ref={LeftTextareaRef}
        ></textarea>
      </div>
      <div>
        <h3>英</h3>
        <textarea
          className="right-area"
          onChange={onRightTextareaChange}
          ref={RightTextareaRef}
        ></textarea>
      </div>
    </div>
  );
};
