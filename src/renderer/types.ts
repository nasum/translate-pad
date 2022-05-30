export type Setting = {
  deepLAccessKey: string;
};

export type SettingAction = {
  type: "set-deep-l-access-key";
  payload: string;
};
