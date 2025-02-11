import "../../components/languages";
import { useTranslation } from "react-i18next";
import Cards from "../../components/Cards";
import Quote from "../../components/Quote";
import TextImage from "../../components/TextImage";
import ImageText from "../../components/ImageText";
import ImageQuote from "../../components/ImageQuote";
import Grouppic from "../../img/home_1.png";
import Workpic from "../../img/pic2.jpg";
import AboutUs2 from "../../img/aboutus2.png";
import Girl2 from "../../img/QuoteGirl2.png";

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
    borderImage: "background-stripes",
  };

  const accelerate = {
    background: "",
    title: t("home9title"),
    text: t("home9"),
    href: "/programs/entrepreneurship",
    buttonText: t("readmore"),
    image: Grouppic,
    alt: "Entrepreneurship",
    borderImage: "background-stripes",
  };

  const donate = {
    background: "background-purple",
    title: t("home17title"),
    text: t("home17"),
    href: "/donate",
    buttonText: t("donatenow"),
    image: AboutUs2,
    alt: "Community",
  };

  const quote = {
    background: "background-gradient-4",
    text: t("programs1"),
    author: t("programs1author"),
    image: Girl2,
    alt: "Girl",
  };

  return (
    <div className="background-gradient">
      <TextImage data={girlsInSTEM} />
      <ImageText data={accelerate} />
      <ImageQuote data={quote} />
      <Quote text={t("home2")} />
      <Cards />
      <Quote text={t("home16")} background="background-purple" />
      <TextImage data={donate} />
    </div>
  );
}

export default Programs;
