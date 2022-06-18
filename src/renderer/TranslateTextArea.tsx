import React from "react";
import style from "styled-components";

import { Lang, FlagIcon } from "./FlagIcon";

type Props = {
  handleOnChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => Promise<void>;
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement>;
  lang: Lang;
};

const FullHeightDiv = style.div`
  height: 100vh;
  &:last-child {
    border-left: 1px solid #595858;
  }
`;

const FullHeightTextarea = style.textarea`
  height: calc(100% - 25px);
  margin: 0 3px;
  width: 100%;
  box-sizing: border-box;
  resize: none;
  padding: 15px;
  background-color: #F6F7F7;
  &:focus {
    background-color: #FAFBFA;
  }
  `;

const NavArea = style.div`
  height: 25px;
  box-sizing: border-box;
  margin-top: -7px;
  padding: 0 3px;
  text-align: right;
`;

export const TranslateTextArea = ({
  handleOnChange,
  textAreaRef,
  lang,
}: Props) => {
  return (
    <FullHeightDiv className="column is-half">
      <FullHeightTextarea
        className="has-fixed-size"
        onChange={handleOnChange}
        ref={textAreaRef}
      ></FullHeightTextarea>
      <NavArea className="ui-background">
        <FlagIcon lang={lang} />
      </NavArea>
    </FullHeightDiv>
  );
};
