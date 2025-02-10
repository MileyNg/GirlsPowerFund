import React from "react";
import "../../components/languages";
import { useTranslation } from "react-i18next";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SlArrowUp } from "react-icons/sl";

function AboutUs() {
  const { t } = useTranslation();
  return (
    <div>
      <VerticalTimeline className="background-purple">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={<h1>2024</h1>}
          iconStyle={{ background: "#49347C", color: "#fff" }}
          icon={<SlArrowUp />}
        >
          <h2>{t("aboutus1title")}</h2>
          <p>{t("aboutus1")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={<h1>2023</h1>}
          iconStyle={{ background: "#49347C", color: "#fff" }}
          icon={<SlArrowUp />}
        >
          <h2>{t("aboutus2title")}</h2>
          <p>{t("aboutus2")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={<h1>2022</h1>}
          iconStyle={{ background: "#49347C", color: "#fff" }}
          icon={<SlArrowUp />}
        >
          <h2>{t("aboutus3title")}</h2>
          <p>{t("aboutus3")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={<h1>2021</h1>}
          iconStyle={{ background: "#49347C", color: "#fff" }}
          icon={<SlArrowUp />}
        >
          <h2>{t("aboutus4title")}</h2>
          <p>{t("aboutus4")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={<h1>2020</h1>}
          iconStyle={{ background: "#49347C", color: "#fff" }}
          icon={<SlArrowUp />}
        >
          <h2>{t("aboutus5title")}</h2>
          <p>{t("aboutus5")}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: "7px solid" }}
          date={<h1>2019</h1>}
          iconStyle={{ background: "#49347C", color: "#fff" }}
          icon={<SlArrowUp />}
        >
          <h2>{t("aboutus6title")}</h2>
          <p>{t("aboutus6")}</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default AboutUs;
