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
