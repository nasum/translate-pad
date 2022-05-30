import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("app"));

const TransLateArea = () => {
  const [leftText, setLeftText] = useState<string>("");
  const [rightText, setRightText] = useState<string>("");

  const onLeftTextareaChante = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLeftText(e.target.value);
    setRightText(e.target.value);
  };

  const onRightTextareaChante = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          onChange={onLeftTextareaChante}
        ></textarea>
      </div>
      <div>
        <h3>英</h3>
        <textarea
          className="right-area"
          value={rightText}
          onChange={onRightTextareaChante}
        ></textarea>
      </div>
    </div>
  );
};

root.render(
  <div>
    <h2>TranslatePad</h2>
    <TransLateArea />
  </div>
);
