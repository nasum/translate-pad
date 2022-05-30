import React, { useState, useReducer } from "react";
import * as deepl from "deepl-node";

import { TranslatePane } from "./TranslatePane";
import { SettingPane } from "./SettingPane";
import { getDeepLAccessKey, setDeepLAccessKey } from "./storage";

import { Setting, SettingAction } from "./types";

export const TranslateArea = () => {
  function reducer(state: Setting, action: SettingAction) {
    switch (action.type) {
      case "set-deep-l-access-key":
        setDeepLAccessKey(action.payload);
        return { ...state, deepLAccessKey: action.payload };
      default:
        return state;
    }
  }

  const [setting, dispatch] = useReducer(reducer, {
    deepLAccessKey: getDeepLAccessKey() || "",
  });

  const [openSetting, setOpenSetting] = useState(false);

  return (
    <>
      <button onClick={() => setOpenSetting(!openSetting)}>open setting</button>
      {openSetting ? (
        <SettingPane setting={setting} changeSetting={dispatch} />
      ) : (
        <TranslatePane />
      )}
    </>
  );
};
