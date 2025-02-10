import React from "react";
import "../../components/languages";
import Cards from "../../components/Cards";
import Quote from "../../components/Quote";
import TextImage from "../../components/TextImage";
import ImageText from "../../components/ImageText";
import { useTranslation } from "react-i18next";
import Grouppic from "../../img/pic1.jpg";
import Workpic from "../../img/pic2.jpg";
import AboutUs2 from "../../img/aboutus2.png";

function Programs() {
  const { t } = useTranslation();

  const girlsInSTEM = {
    background: "",
    title: t("home8title"),
    text: t("home8"),
    href: "/programs/codingbootcamp",
    buttonText: t("readmore"),
    image: Workpic,
    alt: "Working picture",
    borderImage: "image-border-gradient",
  };

  const accelerate = {
    background: "",
    title: t("home9title"),
    text: t("home9"),
    href: "/programs/entrepreneurship",
    buttonText: t("readmore"),
    image: Grouppic,
    alt: "Entrepreneurship",
    borderImage: "image-border-gradient",
  };

  const donate = {
    background: "",
    title: t("home17title"),
    text: t("home17"),
    href: "/donate",
    buttonText: t("donate"),
    image: AboutUs2,
    alt: "Community",
  };

  return (
    <div className="background-gradient">
      <TextImage data={girlsInSTEM} />
      <ImageText data={accelerate} />
      <Quote text={t("home2")} />
      <Cards />
      <Quote text={t("home7")} background="background-purple" />
      <TextImage data={donate} />
    </div>
  );
}

export default Programs;
