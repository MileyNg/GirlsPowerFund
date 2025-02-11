import { Container, Row, Col } from "react-bootstrap";
import "../components/languages";
import { useTranslation } from "react-i18next";
import Quote from "../components/Quote";
import TextImage from "../components/TextImage";
import ImageText from "../components/ImageText";
import Image from "../components/Image";
import Grouppic from "../img/Group.png";
import Partnerpic from "../img/Partner.png";
import Sponsorpic from "../img/Sponsor.png";
import Volunteerpic from "../img/Volunteer.png";
import AboutUs2 from "../img/aboutus2.png";
import Sponsorspic from "../img/Sponsors.png";

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

  const difference = {
    borderImage: "image-border-gradient",
    title: t("home17title"),
    text: t("home17"),
    href: "/donate",
    buttonText: t("donatenow"),
    image: AboutUs2,
    alt: "Community",
  };

  return (
    <div>
      <Image imageSrc={Grouppic} imageAlt="Group Picture" />
      <Quote text={t("getinvolved1")} />
      <TextImage data={volunteer} />
      <ImageText data={partner} />
      <TextImage data={sponsorDonation} />
      <Sponsors />
      <TextImage data={difference} />
    </div>
  );
}

function Sponsors() {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="content-container">
        <Col md={6} className="text-section sponsor-text">
          {t("getinvolved6")}
        </Col>
        <Row>
          <img src={Sponsorspic} alt="Logos of Sponsors" />
        </Row>
      </Row>
    </Container>
  );
}

export default GetInvolved;
