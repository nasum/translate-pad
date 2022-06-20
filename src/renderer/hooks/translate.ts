import { useState, useEffect, useCallback } from "react";
import { ipcRenderer } from "electron";
import { TargetLanguageCode } from "deepl-node";
import { debounce } from "mabiki";

import { getDeepLAccessKey } from "../storage";

type TargetCode = "ja" | "us";

const targetCodeMap = {
  us: "en-US",
  ja: "ja",
};

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

export const useTranslate = (text: string, target: TargetCode) => {
  const [result, setResult] = useState<string>("");

  const doTranslate = useCallback(
    debounce(async (text: string, target: TargetLanguageCode) => {
      translate(text, target).then((result) => {
        setResult(result);
      });
    }, 500),
    []
  );

  useEffect(() => {
    doTranslate(text, targetCodeMap[target] as TargetLanguageCode);
  }, [text, target]);

  return result;
};
