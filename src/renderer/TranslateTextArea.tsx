import React from "react";
import style from "styled-components";

type Props = {
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => Promise<void>;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement>;
};

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

export const TranslateTextArea = ({ handleOnChange, textAreaRef }: Props) => {
  return (
    <FullHeightDiv className="column is-half">
      <FullHeightTextarea
        className="has-fixed-size"
        onChange={handleOnChange}
        ref={textAreaRef}
      ></FullHeightTextarea>
    </FullHeightDiv>
  );
};
