import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      aboutus: "About Us",
      ourstory: "Our Story",
      ourteam: "Our Team",
      newsandmediamentions: "News and Media Mentions",
      contactus: "Contact Us",
      getinvolved: "Get Involved",
      waystosupport: "Ways to support",
      volunteer: "Volunteer",
      programs: "Programs",
      codingbootcamp: "Coding Bootcamp",
      entrepreneurship: "Entrepreneurship",
      impact: "Impact",
      home1:
        "A platform to empower girls and young women through STEM and entrepreneurship education, mentorship, and opportunities, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      homequote1:
        "Empowering the Next Generation of Innovators Through HANDS-ON LEARNING...",
      homequote2:
        "Explore our programs designed to INSPIRE growth and EMPOWER change!",
    },
  },
  de: {
    translation: {
      home: "Home",
      aboutus: "Über uns",
      ourstory: "Unsere Geschichte",
      ourteam: "Unser Team",
      newsandmediamentions: "Presseerwähnungen",
      contactus: "Kontaktiere Uns",
      getinvolved: "Engagiere dich",
      waystosupport: "Beteiligungsmöglichkeiten ",
      volunteer: "Volunteer",
      programs: "Programme",
      codingbootcamp: "Coding Bootcamp",
      entrepreneurship: "Entrepreneurship",
      impact: "Impact",
      home1:
        "Eine Plattform zur Stärkung von Mädchen und jungen Frauen durch Bildung in den Bereichen MINT und Unternehmertum, Mentoring und Möglichkeiten, die ihre Fähigkeiten, ihr Selbstbewusstsein und ihre Führungsqualitäten fördern, um in einer technologiegetriebenen Welt erfolgreich zu sein.",
    },
  },
  ru: {
    translation: {
      home: "Главная",
      aboutus: "О нас",
      ourstory: "Our Story",
      ourteam: "Наша команда",
      newsandmediamentions: "Новости и упоминания в СМИ",
      contactus: "Свяжитесь с нами",
      getinvolved: "Присоединяйтесь к нам",
      waystosupport: "Способы поддержки",
      volunteer: "Стать волонтером",
      programs: "Программы",
      codingbootcamp: "Кодинг-буткэмп",
      entrepreneurship: "Предпринимательство",
      impact: "Влияние",
      home1:
        "Платформа для расширения возможностей девочек и молодых женщин через образование в области STEM и предпринимательства, наставничество и предоставление возможностей, способствующих развитию их навыков, уверенности и лидерских качеств для успеха в технологически развитом мире.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
