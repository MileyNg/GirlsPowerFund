import React from "react";
import { Container, Row } from "react-bootstrap";
import "../../components/languages";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TextImage from "../../components/TextImage";
import OurStory from "../../img/our_story.png";
import AboutUs2 from "../../img/aboutus2.png";

function AboutUs() {
  const { t } = useTranslation();
  const aboutus1 = {
    background: "",
    title: t("ourstory"),
    text: t("home1"),
    href: "/getinvolved",
    buttonText: t("getinvolved"),
    image: OurStory,
    alt: "CEO",
  };

  const aboutus2 = {
    background: "",
    title: t("home17title"),
    text: t("home17"),
    href: "/donate",
    buttonText: t("donatenow"),
    image: AboutUs2,
    alt: "Community",
  };

  return (
    <div>
      <div className="background-gradient">
        <TextImage data={aboutus1} />
      </div>
      <Timeline />
      <TextImage data={aboutus2} />
    </div>
  );
}

function Timeline() {
  const { t } = useTranslation();
  return (
    <Container className="background-purple">
      <Row>
        <div className="container quote">
          <h1>{t("history")}</h1>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<h1>2024</h1>}
            iconStyle={{ background: "#49347C", color: "#fff" }}
          >
            <h2>{t("aboutus1title")}</h2>
            <p>{t("aboutus1")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<h1>2023</h1>}
            iconStyle={{ background: "#49347C", color: "#fff" }}
          >
            <h2>{t("aboutus2title")}</h2>
            <p>{t("aboutus2")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<h1>2022</h1>}
            iconStyle={{ background: "#49347C", color: "#fff" }}
          >
            <h2>{t("aboutus3title")}</h2>
            <p>{t("aboutus3")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={<h1>2021</h1>}
            iconStyle={{ background: "#49347C", color: "#fff" }}
          >
            <h2>{t("aboutus4title")}</h2>
            <p>{t("aboutus4")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={<h1>2019</h1>}
            iconStyle={{ background: "#49347C", color: "#fff" }}
          >
            <h2>{t("aboutus5title")}</h2>
            <p>{t("aboutus5")}</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date={<h1>2018</h1>}
            iconStyle={{ background: "#49347C", color: "#fff" }}
          >
            <h2>{t("aboutus6title")}</h2>
            <p>{t("aboutus6")}</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Row>
    </Container>
  );
}

export default AboutUs;
