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
      news: "News",
      media: "Media Mentions",
      contactus: "Contact Us",
      getinvolved: "Get Involved",
      waystosupport: "Ways to support",
      volunteer: "Volunteer",
      programs: "Programs",
      codingbootcamp: "Coding Bootcamp",
      entrepreneurship: "Entrepreneurship",
      donate: "Donate",
      donatenow: "Donate Now",
      impact: "Our Impact",
      ourapproach: "Our Approach",
      history: "Our History",
      financialinfo: "Financial Information",
      approachsectionstats: "Approach Section Stats",
      generalimpact: "General Impact",
      copyright: "© 2025 Girls Power Fund | All Rights Reserved",
      followoninsta: "Follow on Instagram",
      connect: "Let's connect!",
      footer1: "Have a Question? We can Help!",
      footer2: "We typically respond within 72 hours!",
      footer3:
        "Girls Power Fund is a platform to empower girls and young women through STEM and entrepreneurship education, mentorship, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      home1:
        "A platform to empower girls and young women through STEM and entrepreneurship education, mentorship, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      joinus: "Join our community!",
      home2:
        "Empowering the Next Generation of Innovators Through HANDS-ON LEARNING...",
      home3title: "Education",
      home3:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
      home4title: "Role Models",
      home4:
        "We bring inspirational female speakers and leaders to share their journeys, encouraging ambition and inclusivity. Empowers individuals to envision and achieve their goals.",
      home5title: "Hands on experience",
      home5:
        "We provide hands-on experiences through project-based learning, mentorship, and workshops culturally tailored for girls and women in Central Asia.",
      home6: "Learn more about our approach here",
      home7:
        "Explore our programs designed to INSPIRE growth and EMPOWER change!",
      home8title: "Girls in STEM!",
      home8:
        "This 2-8 week program is for young woman ages 15-18 that want to learn UI/UX design and how to code websites and apps. Participants undergo training in one of the tech disciplines and present a project based on what they learned.",
      home9title: "ACCELERATE",
      home9:
        "Accelerate is an online training for 300 women entrepreneurs from Kazakhstan, Kyrgyzstan, and Uzbekistan. Women receive mentorship and access to investment to scale their business and find new partnerships.",
      readmore: "Read More",
      home10:
        "'After participating in the Girls power fund’s program “Create your first app,” I realized I love tech. I started participating in several competitions and was selected to a prestigious fully funded program, Tech Girls, by the US state department. Now, I am studying computer science at NYU AD with a full ride scholarship.'",
      home10author: "Kuralay, Girls in STEM participant",
      home11:
        "Our alumni achieve global recognition, winning competitions like Technovation Challenge, Tech Girls, and Robocon while raising funds to improve their communities.",
      home12: "Learn More About Our Impact Here",
      home13: "Learn More About Who We Are and What We Can Offer You",
      home14:
        "Thank you so much for helping us support the futures of hundreds of young women in Kazakhstan",
      formname: "Name",
      formemail: "Email",
      formphone: "Phone",
      formcompany: "Company",
      formmessage: "Leave us message",
      formsend: "Send message",
      home16: "Invest in Kazakhstan's Next Generation of Women Leaders",
      home17title: "MAKE A DIFFERENCE TODAY!",
      home17: "",
      aboutus1title: "The Movement Continues",
      aboutus1:
        "Girls Power Fund has evolved into a dynamic movement, inspiring and empowering girls worldwide. Our journey is defined by resilience, growth, and a steadfast commitment to equality and representation. We continue to build programs that break barriers and create lasting opportunities, ensuring every girl has the support she needs to realize her dreams.",
      aboutus2title: "Researching new heights",
      aboutus2:
        "Celebrating the milestone of impacting thousands of girls, the Fund doubled down on its mission by embracing technology. Online programs and digital tools were introduced, allowing the Fund to reach and empower girls on a global scale. The 'Girls Power Digital Hub' became a central resource for learning, mentorship, and collaboration.",
      aboutus3title: "Creating a community",
      aboutus3:
        "The Fund introduced regional events, online webinars, and a digital platform to foster a sense of community. These efforts provided a space where girls could learn, share their stories, and find inspiration from each other. Inclusivity became a key focus, ensuring programs were accessible to girls from diverse backgrounds and regions.",
      aboutus4title: "Expanding opportunities",
      aboutus4:
        "Girls Power Fund expanded its programs to include skills-based workshops and hands-on training, focusing on real-world applications. These sessions covered essential areas like public speaking, STEM education, and creative problem-solving, equipping girls with tools for success. Partnerships with local organizations helped increase outreach and impact.",
      aboutus5title: "Building Connection",
      aboutus5:
        "The Fund launched its first mentorship program, connecting girls with inspiring female leaders from various industries. This milestone marked the beginning of a journey to foster confidence and leadership among participants. Testimonials from early mentees highlighted the transformative impact of these connections.",
      aboutus6title: "The Beginning",
      aboutus6:
        "Girls Power Fund was founded with a simple but powerful mission: to empower young girls by providing them with education, mentorship, and representation. Starting as a local initiative, the Fund focused on creating a safe space for girls to discover their potential and dream bigger.",
      ourteam1title: "The Women Leading Girls Power Fund",
      ourteam1:
        "A dedicated group of educators, mentors united by a passion for fostering inclusivity, inspiring growth, and creating opportunities for the next generation of female leaders.",
      ourteamceo: "CEO & Founder",
      ourteamceoname: "Dinara Auyelbekova",
      ourteammember1: "Project Manager",
      ourteammember1name: "Assel Amit",
      ourteammember2: "Project Manager",
      ourteammember2name: "Aziza Ibragimova",
      ourteammember3: "Monitoring and Evaluation Expert",
      ourteammember3name: "Albina Tortbayeva",
      ourteam2: "A few words from our CEO & Founder",
      ourteam3:
        '"Last year was a period of exponential growth for Girls Power fund. After completing the Obama Scholars Program at Columbia University, I came back with increased motivation, improved skills and network. Our fund received first international grants (from the UK and the US), started its first international program, expanding from just Kazakhstan to other Central Asian countries funded by USAID FGI and transformed from non profit to social venture. Our fund was also awarded as top 45 social projects founded by Young global changers, chosen among 700 applications worldwide."',
      featured: "Featured",
      ourteam4title: "First from the Post Soviet Region",
      ourteam4:
        "The CEO of Girls Power fund Dinara Auyelbekova was selected as an Obama Scholar at Columbia University. This is a competitive and prestigious program for emerging leaders all over the world. She is the one and only graduate of this program from the Post Soviet region.",
      seeall: "See All News and Media",
      getinvolved1: "Get Involved to EMPOWER girls and TRANSFORM futures",
      getinvolved2:
        "Join us as a volunteer and play a vital role in empowering girls worldwide. Your time and skills can make a lasting impact!",
      getinvolved3title: "Partner",
      getinvolved3:
        "Collaborate with us to create lasting change. Together, we can empower more girls and expand our reach to transform communities.",
      getinvolved4title: "SPONSOR & DONATION",
      getinvolved4:
        "Make a difference by sponsoring our programs or donating today. Your support directly empowers girls and helps build brighter futures.",
      getinvolved5: "Money raised in year",
      getinvolved6: "Trusted by 10+ companies, NGOs around the world",
      undpboost: "UNDP BOOST",
      newsandmediamentions1:
        "Girls Power Fund focuses on encouraging girls and young women to enrich and build their knowledge using both traditional and non-traditional approaches in education. The team conducts hard and soft skills trainings for girls from underserved communities, such as STEM courses, and personal development and financial literacy trainings.",
      programs1:
        "'I am happy that I joined the Accelerate program for women entrepreneurs as it helped me to hit my first 10k USD revenue in my business. I also found a community of supportive and inspiring women to help me grow.'",
      programs1author: "Dina 2024 Accelerate participant",
      codingbootcamp1: "Benefits of Girls in STEM",
      codingbootcamp2title: "Learn New Skills",
      codingbootcamp2:
        "You will create real world projects using the web and app development technology your learned in the duration of the program.",
      codingbootcamp3title: "Make Friends",
      codingbootcamp3:
        "Build community with your teachers and the other girls learning new things just like you!",
      codingbootcamp4title: "Network",
      codingbootcamp4:
        "This programs serves as a headstart for your professional development by exposing you and your peers to female leaders in STEM.",
      codingbootcamp5title: "Join The Community!",
      codingbootcamp5:
        "young women participants have benefitted from our hackathons, STEM bootcamp and trainings",
      codingbootcamp6: "Interested in Owning Your Own Business?",
      entrepreneurshiptitle: "Benefits of Accelerate",
      entrepreneurship1title: "Make Money",
      entrepreneurship1:
        "You will gain access to investments to scale your business and find new partnerships.",
      entrepreneurship2:
        "women participants learned business acumen and raised money for their ventures",
      entrepreneurship3:
        "Accelerate program has changed my life as I was able to find a supportive community and great mentors that helped me to improve my business. I improved my hard and soft skills as well as shifted my mindset about digitalization of my product.",
      entrepreneurship3author: "Dina, Accelerate participant 2024",
      ourimpact1:
        "Introducing Girls Power Fund - the ultimate tool for empowering young girls in STEM! With Girls Power Fund, we're breaking barriers and shattering stereotypes by providing girls with the resources they need to excel in the world of science, technology, engineering, and math.",
      ourimpact2: "95% of participants satisfied with educational experience",
      ourimpact3:
        "$500,000 Total USD won in educational and development grants by alumni to study abroad and launch their projects",
      ourimpact4:
        "100+ female - led projects created in respective communities by alumni to solve social problems after our programs",
      ourimpact5: "2023 annual report",
      donate1: "Your Support, Her Success DONATE TODAY!",
      donate2:
        "100% of your donation funds programming  for young girls in Kazakhstan",
      faq: "Frequently asked questions",
      faq1: "What does my donation to Girl Power Fund do?",
    },
  },
  ru: {
    translation: {
      company: "Фонд Girls Power",
      home: "Главная",
      aboutus: "О нас",
      ourstory: "Наша история",
      ourteam: "Наша команда",
      newsandmediamentions: "Новости и упоминания в СМИ",
      media: "Упоминания в СМИ",
      news: "Новости",
      contactus: "Свяжитесь с нами",
      getinvolved: "Присоединяйтесь к нам",
      waystosupport: "Способы поддержки",
      volunteer: "Волонтерство",
      programs: "Программы",
      codingbootcamp: "Курсы программирования",
      entrepreneurship: "Предпринимательство",
      donate: "Донат",
      donatenow: "Пожертвовать cейчас",
      impact: "Вклад",
      ourapproach: "Подход",
      history: "История",
      financialinfo: "Финансовая информация",
      approachsectionstats: "Статистика",
      generalimpact: "Общее влияние",
      copyright: "© 2025 Фонд Girls Power | Все права защищены",
      followoninsta: "Подписывайтесь на нас в Instagram",
      connect: "Свяжитесь с нами!",
      footer1: "Есть вопрос? Мы ответим!",
      footer2: "Мы свяжемся с вами в течение 72 часов!",
      footer3:
        "Фонд Girls Power — это платформа, которая помогает девочкам и молодым женщинам через обучение STEM и предпринимательству, наставничество, развивая их навыки, уверенность и лидерские качества для процветания в мире технологий.",
      home1:
        "Платформа для поддержки девочек и молодых женщин через STEM и предпринимательство, наставничество, развитие их навыков, уверенность и лидерские качества для процветания в мире технологий.",
      joinus: "Присоединяйтесь к нашему сообществу!",
      home2:
        "Вдохновляем следующее поколение новаторов через ПРАКТИЧЕСКОЕ ОБУЧЕНИЕ...",
      home3title: "Образование",
      home3:
        "Наш подход развивает креативность, критическое мышление и сотрудничество. Учащиеся уходят с уверенностью и инструментами, необходимыми для успеха в динамичной среде.",
      home4title: "Ролевые модели",
      home4:
        "Мы приглашаем вдохновляющих женщин-спикеров и лидеров, чтобы поделиться своими историями, поощряя амбиции и инклюзивность. Это позволяет каждому видеть и достигать своих целей.",
      home5title: "Практический опыт",
      home5:
        "Мы предоставляем практический опыт через проектное обучение, наставничество и мастер-классы, культурно адаптированные для девочек и женщин в Центральной Азии.",
      home6: "Узнайте больше о нашем подходе здесь",
      home7:
        "Исследуйте наши программы, разработанные для ВДОХНОВЕНИЯ роста и ПОДДЕРЖКИ изменений!",
      home8title: "Девочки в STEM!",
      home8:
        "Эта 2–8-недельная программа предназначена для молодых женщин в возрасте 15–18 лет, которые хотят изучать UI/UX-дизайн и как создавать сайты и приложения. Участники проходят обучение в одной из технических дисциплин и представляют проект на основе изученного.",
      home9title: "ACCELERATE",
      home9:
        "ACCELERATE — это онлайн-обучение для 300 женщин-предпринимателей из Казахстана, Кыргызстана и Узбекистана. Женщины получают наставничество и доступ к инвестициям, чтобы развивать свой бизнес и находить новых партнеров.",
      readmore: "Читать далее",
      home10:
        "‘После участия в программе фонда Girls Power «Создай свое первое приложение» я поняла, что люблю технологии. Я начала участвовать в нескольких конкурсах и была выбрана для престижной программы Tech Girls, полностью оплачиваемой Государственным департаментом США. Теперь я изучаю информатику в NYU AD с полной стипендией.’",
      home10author: "Куралай, участница Girls in STEM",
      home11:
        "Наши выпускницы добиваются мирового признания, выигрывают соревнования, такие как Technovation Challenge, Tech Girls и Robocon, а также собирают средства для улучшения своих сообществ.",
      home12: "Узнайте больше о нашем влиянии здесь",
      home13: "Узнайте больше о том, кто мы и возможности для сотрудничества",
      home14:
        "Спасибо вам за поддержку будущего сотен молодых женщин в Казахстане",
      formname: "Имя",
      formemail: "Электронная почта",
      formphone: "Телефон",
      formcompany: "Компания",
      formmessage: "Оставьте сообщение",
      formsend: "Отправить сообщение",
      home16: "Инвестируйте в следующее поколение женщин-лидеров Казахстана",
      home17title: "Поддержите изменения СЕГОДНЯ!",
      home17: "",
      aboutus1title: "Движение продолжается",
      aboutus1:
        "Фонд Girls Power превратился в динамичное движение, вдохновляющее и поддерживающее девочек по всему миру. Наш путь определяется стойкостью, ростом и приверженностью равенству и представлению. Мы продолжаем создавать программы, разрушающие барьеры и создающие длительные возможности, обеспечивая поддержку каждой девочке для достижения ее мечты.",
      aboutus2title: "Достижение новых высот",
      aboutus2:
        "Отмечая веху — влияние на тысячи девочек, Фонд удвоил свою миссию, применив последние технологии. Были введены онлайн-программы и цифровые инструменты, позволяющие Фонду достигать и поддерживать девочек на глобальном уровне. «Girls Power Digital Hub» стал основным ресурсом для обучения, наставничества и сотрудничества.",
      aboutus3title: "Создание сообщества",
      aboutus3:
        "Фонд организовал региональные мероприятия, онлайн-вебинары и цифровую платформу, чтобы способствовать формированию сообщества. Эти усилия предоставили пространство, где девочки могли учиться, делиться историями и вдохновляться друг другом. Инклюзивность стала ключевым направлением, обеспечивающим доступность программ для девочек из разных слоев общества и регионов.",
      aboutus4title: "Расширение возможностей",
      aboutus4:
        "Фонд Girls Power расширил свои программы, включив в них тренинги, основанные на навыках, и практическое обучение, сосредоточенные на реальных приложениях. Эти занятия охватывают такие важные области, как публичные выступления, STEM-образование и креативное решение проблем, обеспечивая девочек инструментами для успеха. Партнерства с местными организациями помогли увеличить охват и влияние.",
      aboutus5title: "Создание связей",
      aboutus5:
        "Фонд запустил свою первую программу наставничества, соединяя девочек с вдохновляющими женщинами-лидерами из разных отраслей. Эта веха ознаменовала начало пути к укреплению уверенности и лидерских качеств среди участников. Отзывы первых подопечных подчеркнули трансформирующее влияние этой программы.",
      aboutus6title: "Начало",
      aboutus6:
        "Фонд Girls Power был основан с простой, но мощной миссией: расширять возможности молодых девушек, предоставляя им образование, наставничество и доступ к образованию. Начав как местная инициатива, фонд сосредоточился на создании безопасного пространства, где девочки могли бы раскрыть свой потенциал и мечтать о большем.",
      ourteam1title: "Женщины, возглавляющие Фонд Girls Power",
      ourteam1:
        "Преданная группа педагогов и наставников, объединенных страстью к развитию инклюзивности, вдохновлению на рост и созданию возможностей для следующего поколения женщин-лидеров.",
      ourteamceo: "Генеральный директор и основатель",
      ourteamceoname: "Динара Ауелбекова",
      ourteammember1: "Менеджер проектов",
      ourteammember1name: "Асель Амит",
      ourteammember2: "Менеджер проектов",
      ourteammember2name: "Aзиза Ибрагимова",
      ourteammember3: "Менеджер программы",
      ourteammember3name: "Альбина Тортбаева",
      ourteam2: "Несколько слов от нашего генерального директора и основателя",
      ourteam3:
        '"Прошлый год был периодом экспоненциального роста для фонда Girls Power. После завершения программы Obama Scholars в Колумбийском университете я вернулась с повышенной мотивацией, улучшенными навыками и сетью контактов. Наш фонд получил первые международные гранты (из Великобритании и США), запустил свою первую международную программу, расширившись из Казахстана на другие страны Центральной Азии благодаря финансированию USAID FGI и преобразовавшись из некоммерческой организации в социальное предприятие. Наш фонд также был отмечен как один из 45 лучших социальных проектов, созданных молодыми глобальными лидерами, выбранных из 700 заявок со всего мира."',
      featured: "В центре внимания",
      ourteam4title: "Первая из постсоветского региона",
      ourteam4:
        "Генеральный директор фонда Girls Power Динара Ауельбекова была выбрана как стипендиат программы Obama Scholars в Колумбийском университете. Это престижная и конкурентная программа для будущих лидеров со всего мира. Она стала первой выпускницей этой программы из постсоветского региона.",
      seeall: "Смотреть все новости и СМИ",
      getinvolved1:
        "Присоединяйтесь, чтобы РАСШИРИТЬ возможности девочек и ИЗМЕНИТЬ их будущее",
      getinvolved2:
        "Станьте волонтером и сыграйте важную роль в расширении возможностей девочек по всему миру. Ваше время и навыки могут оставить долговечный след!",
      getinvolved3title: "Партнерство",
      getinvolved3:
        "Сотрудничайте с нами, чтобы создать долгосрочные изменения. Вместе мы можем расширить возможности большего числа девочек и изменить сообщества.",
      getinvolved4title: "СПОНСОРСТВО И ВКЛАД",
      getinvolved4:
        "Окажите влияние, спонсируя наши программы или сделав пожертвование сегодня. Ваша поддержка напрямую помогает девочкам и способствует созданию светлого будущего.",
      getinvolved5: "Собрано средств за год",
      getinvolved6: "Нам доверяют более 10 компаний и НПО по всему миру",
      undpboost: "UNDP BOOST",
      newsandmediamentions1:
        "Фонд Girls Power фокусируется на том, чтобы вдохновлять девочек и молодых женщин развивать и обогащать свои знания, используя как традиционные, так и нетрадиционные подходы в образовании. Команда проводит тренинги по твердым и мягким навыкам для девочек из малообеспеченных сообществ, такие как курсы STEM, а также тренинги по личностному развитию и финансовой грамотности.",
      programs1:
        "'Я счастлива, что присоединилась к программе Accelerate для женщин-предпринимателей, так как это помогло мне достичь первых 10 000 долларов дохода в моем бизнесе. Я также нашла сообщество поддерживающих и вдохновляющих женщин, которые помогли мне расти.'",
      programs1author: "Дина, участница Accelerate 2024",
      codingbootcamp1: "Преимущества участия девочек в STEM",
      codingbootcamp2title: "Изучить новые навыки",
      codingbootcamp2:
        "Вы будете создавать проекты для реального мира, используя технологии веб- и мобильной разработки, изученные в рамках программы.",
      codingbootcamp3title: "Завести друзей",
      codingbootcamp3:
        "Стройте сообщество с вашими учителями и другими девочками, которые учатся новому, как и вы!",
      codingbootcamp4title: "Новые контакты",
      codingbootcamp4:
        "Эта программа служит стартом для вашего профессионального развития, знакомя вас и ваших сверстников с женщинами-лидерами в STEM.",
      codingbootcamp5title: "Присоединяйтесь к сообществу!",
      codingbootcamp5:
        "700 участниц получили пользу от наших хакатонов, STEM-буткемпов и тренингов.",
      codingbootcamp6: "Интересуетесь созданием собственного бизнеса?",
      entrepreneurshiptitle: "Преимущества программы",
      entrepreneurship1title: "Инвестиции",
      entrepreneurship1:
        "Вы получите доступ к инвестициям для масштабирования вашего бизнеса и построения новых партнерств.",
      entrepreneurship2:
        "300 женщин-участниц освоили бизнес-навыки и собрали деньги на свои проекты.",
      entrepreneurship3:
        "Программа Accelerate изменила мою жизнь, так как я смогла найти поддерживающее сообщество и отличных наставников, которые помогли мне улучшить мой бизнес. Я развила как профессиональные, так и личностные навыки, а также изменила своё отношение к цифровизации моего продукта.",
      entrepreneurship3author: "Лилия, участница Accelerate 2024",
      ourimpact1:
        "Представляем фонд Girls Power — главный инструмент для расширения возможностей молодых девушек в STEM! С фондом Girls Power мы ломаем барьеры и стереотипы, предоставляя девочкам ресурсы, необходимые для успеха в мире науки, технологий, инженерии и математики.",
      ourimpact2: "95% участников довольны образовательным опытом.",
      ourimpact3:
        "$500,000 - общая сумма грантов, выигранных выпускницами для учебы за границей и запуска своих проектов.",
      ourimpact4:
        "Более 100 женских проектов создано выпускницами в их сообществах для решения социальных проблем после наших программ.",
      ourimpact5: "Годовой отчет за 2023 год.",
      donate1: "Ваша поддержка – её успех. ПОЖЕРТВУЙТЕ СЕГОДНЯ!",
      donate2:
        "100 % вашего пожертвования идут на программы для девочек в Казахстане.",
      faq: "Часто задаваемые вопросы",
      faq1: "Как используется мое пожертвование?",
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Save selected language
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (lang) => {
  localStorage.setItem("language", lang); // Save selected language
});

export default i18n;
