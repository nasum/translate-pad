import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getDeepLAccessKey, setDeepLAccessKey } from "./storage";

export const SettingPane = () => {
  const [deepLaccessKey] = useState(getDeepLAccessKey());

  return (
    <div className="container">
      <nav className="navbar" role="navigation">
        <Link className="navbar-item" to="/main">
          back
        </Link>
      </nav>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">DeepL Access Key</label>
        </div>
        <div className="field-body">
          <div className="field">
            <input
              className="input"
              type="text"
              value={deepLaccessKey}
              onChange={(e) => setDeepLAccessKey(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
