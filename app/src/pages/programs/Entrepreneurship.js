import React from "react";
import "../../components/languages";
import ImageText from "../../components/ImageText";
import { useTranslation } from "react-i18next";
import Grouppic from "../../img/pic1.jpg";

function Entrepreneurship() {
  const { t } = useTranslation();

  const accelerate = {
    background: "background-purple",
    title: t("home9title"),
    text: t("home9"),
    href: "/programs/entrepreneurship",
    buttonText: t("readmore"),
    image: Grouppic,
    alt: "Entrepreneurship",
    borderImage: "image-border-gradient",
  };
  return (
    <div>
      <ImageText data={accelerate} />
    </div>
  );
}

export default Entrepreneurship;
