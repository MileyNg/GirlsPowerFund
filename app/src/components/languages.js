import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      company: "Girls Power Fund",
      home: "Home",
      aboutus: "About Us",
      ourstory: "Our Story",
      ourteam: "Our Team",
      newsandmediamentions: "News and Media Mentions",
      contactus: "Contact Us",
      getinvolved: "Get Involved",
      waystosupport: "Ways to support",
      volunteer: "Volunteer",
      program: "Program",
      codingbootcamp: "Coding Bootcamp",
      entrepreneurship: "Entrepreneurship",
      donate: "Donate",
      impact: "Impact",
      ourapproach: "Our Approach",
      history: "History",
      financialinfo: "Financial Information",
      approachsectionstats: "Approach Section Stats",
      generalimpact: "General Impact",
      copyright: "© 2024 Girls Power Fund | All Rights Reserved",
      footer1: "Have a Question? We can Help!",
      footer2: "We typically respond within 72 hours!",
      footer3:
        "Girls Power Fund is a platform to empower girls and young women through STEM and entrepreneurship education, mentorship, and opportunities, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      home1:
        "A platform to empower girls and young women through STEM and entrepreneurship education, mentorship, and opportunities, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      home2:
        "Empowering the Next Generation of Innovators Through HANDS-ON LEARNING...",
      home3:
        "Explore our programs designed to INSPIRE growth and EMPOWER change!",
      home4:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
      home5:
        "We bring inspirational female speakers and leaders to share their journeys, encouraging ambition and inclusivity. Empowers individuals to envision and achieve their goals.",
      home6:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
      home7:
        "This 2-8 week program is for young woman ages 15-18 that want to learn UI/UX design and how to code websites and apps. Participants undergo training in one of the tech disciplines and present a project based on what they learned.",
      girlsinstem: "Girls in STEM!",
      home8: "Learn more about our approach here",
      accelerate: "ACCELERATE",
      home9:
        "Accelerate is an online training for 300 women entrepreneurs from Kazakhstan, Kyrgyzstan, and Uzbekistan. Women receive mentorship and access to investment to scale their business and find new partnerships.",
      readmore: "Read More",
      home10:
        "“After participating in the Girls power fund’s program “Create your first app,” I realized I love tech. I started participating in several competitions and was selected to a prestigious fully funded program, Tech Girls, by the US state department. Now, I am studying computer science at NYU AD with a full ride scholarship.”",
      home10author: "Kuralay, Girls in STEM participant",
      home11:
        "Our alumni achieve global recognition, winning competitions like Technovation Challenge, Tech Girls, and Robocon while raising funds to improve their communities.",
      home12: "Learn More About Our Impact Here",
      home13: "Learn More About Who We Are and What We Can Offer You",
      home14: "Invest in Kazakhstan's Next Generation of Women Leaders",
      home15: "MAKE A DIFFERENCE TODAY!",
      home16:
        "We’re raising funds for the 2024–2025 school year, to empower at least 100. Help us reach more students across Kazakhstan!",
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
