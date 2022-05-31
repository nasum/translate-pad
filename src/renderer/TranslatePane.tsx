import React, { useState, useEffect } from "react";
import { ipcRenderer } from "electron";

import { getDeepLAccessKey } from "./storage";
import { useTranslate } from "./hooks/translate";

const translate = async (text: string): Promise<string> => {
  const apiKey = getDeepLAccessKey();
  if (!apiKey) {
    return;
  }
  const result = await ipcRenderer.invoke("translate", { text, apiKey });
  return result;
};

export const TranslatePane = () => {
  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");

  const result = useTranslate(leftText, "en-US");

  useEffect(() => {
    setRightText(result);
  }, [leftText, result]);

  const onLeftTextareaChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const text = e.target.value;
    setLeftText(text);
  };

  const onRightTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRightText(e.target.value);
    setLeftText(e.target.value);
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
