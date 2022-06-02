import React, { useState, useEffect } from "react";

import { useTranslate } from "./hooks/translate";

export const TranslatePane = () => {
  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");

  const leftResult = useTranslate(leftText, "en-US");
  const rightResult = useTranslate(rightText, "ja");

  useEffect(() => {
    setRightText(leftResult);
  }, [leftText, leftResult]);

  useEffect(() => {
    setLeftText(rightResult);
  }, [rightText, rightResult]);

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
          value={leftText}
          onChange={onLeftTextareaChange}
        ></textarea>
      </div>
      <div>
        <h3>英</h3>
        <textarea
          className="right-area"
          value={rightText}
          onChange={onRightTextareaChange}
        ></textarea>
      </div>
    </div>
  );
};
