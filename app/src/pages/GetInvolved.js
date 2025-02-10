import React from "react";
import "../components/languages";

import { useTranslation } from "react-i18next";

function GetInvolved() {
  const { t } = useTranslation();
  return <h1>{t("getinvolved1")}</h1>;
}

export default GetInvolved;
