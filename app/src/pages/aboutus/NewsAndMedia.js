import React from "react";
import "../../components/languages";
import { useTranslation } from "react-i18next";
import obama_pic from "../../img/pic8.jpg";
import undp_pic from "../../img/undp.png";
import "react-vertical-timeline-component/style.min.css";
import ImageText from "../../components/ImageText";
import TextImage from "../../components/TextImage";
import community_pic from "../../img/aboutus2.png";
import Quote from "../../components/Quote";

function NewsAndMedia() {
  const { t } = useTranslation();
  const data = {
    background: "",
    title: t("ourteam4title"),
    text: t("ourteam4"),
    href: "mailto:girlspowerfund@gmail.com",
    buttonText: t("contactus"),
    image: obama_pic,
    alt: "Obama picture",
    borderImage: "",
  };

  const data2 = {
    background: "",
    title: t("undpboost"),
    text: t("newsandmediamentions1"),
    href: "/getinvolved",
    buttonText: t("getinvolved"),
    image: undp_pic,
    alt: "UNDP picture",
    borderImage: "",
  };

  const data3 = {
    background: "background-purple",
    title: t("home17title"),
    text: t("home17"),
    href: "/donate",
    buttonText: t("donatenow"),
    image: community_pic,
    alt: "Community",
  };

  return (
    <div>
      <div className="text-image-container background-gradient">
        <h1>
          <span className="custom-badge">{t("media")}</span>
        </h1>
      </div>
      <ImageText data={data} />
      <div className="text-image-container">
        <h1>
          <span className="custom-badge">{t("news")}</span>
        </h1>
      </div>
      <TextImage data={data2} />
      <Quote text={t("home16")} background="background-purple" />
      <ImageText data={data3} />
    </div>
  );
}

export default NewsAndMedia;
