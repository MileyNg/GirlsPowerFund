import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: "Home",
      aboutus: "About Us",
      ourteam: "Our Team",
      newsandmediamentions: "News and Media Mentions",
      contactus: "Contact Us",
      getinvolved: "Get Involved",
      waystosupport: "Ways to support",
      volunteer: "Volunteer",
      programs: "Programs",
      codingbootcamp: "Coding Bootcamp",
      tutoringprogram: "Tutoring Program",
      entrepreneurship: "Entrepreneurship",
      impact: "Impact",
    },
  },
  de: {
    translation: {
      home: "Home",
      aboutus: "Über uns",
      ourteam: "Unser Team",
      newsandmediamentions: "News and Media Erwähnungen",
      contactus: "Kontaktiere Uns",
      getinvolved: "Engagiere dich",
      waystosupport: "Möglichkeiten der Beteiligung",
      volunteer: "Volunteer",
      programs: "Programme",
      codingbootcamp: "Coding Bootcamp",
      tutoringprogram: "Tutoring Programm",
      entrepreneurship: "Entrepreneurship",
      impact: "Impact",
    },
  },
  ru: {
    translation: {
      home: "Home",
      aboutus: "About Us",
      ourteam: "Our Team",
      newsandmediamentions: "News and Media Mentions",
      contactus: "Contact Us",
      getinvolved: "Get Involved",
      waystosupport: "Ways to support",
      volunteer: "Volunteer",
      programs: "Programs",
      codingbootcamp: "Coding Bootcamp",
      tutoringprogram: "Tutoring Program",
      entrepreneurship: "Entrepreneurship",
      impact: "Impact",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
