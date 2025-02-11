import React from "react";
import "../components/languages";
import Quote from "../components/Quote";
import QuoteLink from "../components/QuoteLink";
import TextImage from "../components/TextImage";
import ImageText from "../components/ImageText";
import Image from "../components/Image";
import Grouppic from "../img/Group.png";
import Partnerpic from "../img/Partner.png";
import Sponsorpic from "../img/Sponsor.png";
import Volunteerpic from "../img/Volunteer.png";

import { useTranslation } from "react-i18next";

function GetInvolved() {
  const { t } = useTranslation();

  const volunteer = {
    title: t("volunteer"),
    text: t("getinvolved2"),
    href: "mailto:girlspowerfund@gmail.com",
    buttonText: t("contactus"),
    image: Volunteerpic,
    alt: "Volunteer Picture",
    borderImage: "image-border-purple",
  };

  const partner = {
    title: t("getinvolved3title"),
    text: t("getinvolved3"),
    href: "mailto:girlspowerfund@gmail.com",
    buttonText: t("contactus"),
    image: Partnerpic,
    alt: "Partner Picture",
    borderImage: "image-border-purple",
  };

  const sponsorDonation = {
    title: t("getinvolved4title"),
    text: t("getinvolved4"),
    href: "/donate",
    buttonText: t("donate"),
    image: Sponsorpic,
    alt: "Group Picture",
    borderImage: "image-border-purple",
  };

  return (
    <div>
      <Image imageSrc={Grouppic} imageAlt="Group Picture" />
      <Quote text={t("getinvolved1")} />
      <TextImage data={volunteer} />
      <ImageText data={partner} />
      <TextImage data={sponsorDonation} />
    </div>
  );
}

export default GetInvolved;
