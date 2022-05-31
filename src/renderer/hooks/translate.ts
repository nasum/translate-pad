import { useState, useEffect } from "react";
import { ipcRenderer } from "electron";
import { TargetLanguageCode } from "deepl-node";
import { debounce } from "mabiki";

import { getDeepLAccessKey } from "../storage";

const translate = (
  text: string,
  target: TargetLanguageCode
): Promise<string> => {
  const apiKey = getDeepLAccessKey();

  return ipcRenderer.invoke("translate", {
    text,
    target,
    apiKey,
  });
};

export const useTranslate = (text: string, target: TargetLanguageCode) => {
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    translate(text, target).then((result) => {
      setResult(result);
    });
  }, [text, target]);

  return result;
};
