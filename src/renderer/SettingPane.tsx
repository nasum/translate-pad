import React, { useState } from "react";

import { Setting, SettingAction } from "./types";

type Props = {
  setting: Setting;
  changeSetting: (action: SettingAction) => void;
};

export const SettingPane = (props: Props) => {
  const { setting, changeSetting } = props;

  const [deepLaccessKey, setDeepLAccessKey] = useState(setting.deepLAccessKey);

  const save = () => {
    changeSetting({
      type: "set-deep-l-access-key",
      payload: deepLaccessKey,
    });
  };

  return (
    <div>
      <h2>SettingPane</h2>
      <label>DeepL Access Key</label>:
      <input
        type="text"
        value={deepLaccessKey}
        onChange={(e) => setDeepLAccessKey(e.target.value)}
      />
      <button onClick={save}>save</button>
    </div>
  );
};
