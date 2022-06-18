import React from "react";

export type Lang = "jp" | "us";

type Props = {
  lang: Lang;
};

export const FlagIcon = ({ lang }: Props) => {
  return <span className={`fi fi-${lang}`}></span>;
};
