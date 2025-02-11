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
      copyright: "© 2024 Girls Power Fund | All Rights Reserved",
      followoninsta: "Follow on Instagram",
      connect: "Let's connect!",
      footer1: "Have a Question? We can Help!",
      footer2: "We typically respond within 72 hours!",
      footer3:
        "Girls Power Fund is a platform to empower girls and young women through STEM and entrepreneurship education, mentorship, and opportunities, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      home1:
        "A platform to empower girls and young women through STEM and entrepreneurship education, mentorship, and opportunities, fostering their skills, confidence, and leadership to thrive in a technology-driven world.",
      joinus: "Join our community!",
      home2:
        "Empowering the Next Generation of Innovators Through HANDS-ON LEARNING...",
      home3title: "Education",
      home3:
        "Our approach fosters creativity, critical thinking, and collaboration. Learners leave with confidence and the tools needed to succeed in dynamic environments.",
      home4title: "Representation",
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
      home17:
        "We're raising funds for the 2024-2025 school year, to empower at least 100 students with a personal computer and Wi-Fi hotspot to be prepared for college applications, scholarships, summer programs,a nnd online professional development. Help us reach more students across Kazakhstan!",
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
      ourteammember1name: "Aziza Ibragimova",
      ourteammember2: "Project Manager",
      ourteammember2name: "Aassel Amit",
      ourteammember3: "Program Manager",
      ourteammember3name: "Aruzhan Nurmakhanova",
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
      entrepreneurship1title: "Make Money",
      entrepreneurship1:
        "You will gain access to investments to scale your business and find new partnerships.",
      entrepreneurship2:
        "women participants learned business acumen and raised money for their ventures",
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
  de: {
    translation: {
      company: "Girls Power Fund",
      home: "Home",
      aboutus: "Über uns",
      ourstory: "Unsere Geschichte",
      ourteam: "Unser Team",
      newsandmediamentions: "Presseerwähnungen",
      media: "Presseerwähnungen",
      news: "Neuigkeiten",
      contactus: "Kontaktiere Uns",
      getinvolved: "Engagiere dich",
      waystosupport: "Beteiligungsmöglichkeiten ",
      volunteer: "Volunteer",
      programs: "Programme",
      codingbootcamp: "Coding Bootcamp",
      entrepreneurship: "Entrepreneurship",
      donate: "Spenden",
      donatenow: "Jetzt Spenden",
      impact: "Unsere Wirkung",
      ourapproach: "Unser Ansatz",
      history: "Unsere Geschichte",
      financialinfo: "Finanzinformationen",
      approachsectionstats: "Statistiken zum Ansatz",
      generalimpact: "Allgemeine Auswirkungen",
      copyright: "© 2024 Mädchen Power Fonds | Alle Rechte vorbehalten",
      followoninsta: "Folgen Sie uns auf Instagram",
      connect: "Lassen Sie uns verbinden!",
      footer1: "Haben Sie eine Frage? Wir helfen Ihnen gerne!",
      footer2: "Wir antworten in der Regel innerhalb von 72 Stunden!",
      footer3:
        "Der Mädchen Power Fonds ist eine Plattform, um Mädchen und junge Frauen durch MINT- und Unternehmertumsausbildung, Mentoring und Möglichkeiten zu stärken. Wir fördern ihre Fähigkeiten, ihr Selbstvertrauen und ihre Führungskompetenzen, damit sie in einer technologiegetriebenen Welt erfolgreich sein können.",
      home1:
        "Eine Plattform, um Mädchen und junge Frauen durch MINT- und Unternehmertumsausbildung, Mentoring und Möglichkeiten zu stärken. Wir fördern ihre Fähigkeiten, ihr Selbstvertrauen und ihre Führungskompetenzen, damit sie in einer technologiegetriebenen Welt erfolgreich sein können.",
      joinus: "Treten Sie unserer Gemeinschaft bei!",
      home2:
        "Die nächste Generation von Innovatoren durch PRAKTISCHES LERNEN stärken...",
      home3title: "Bildung",
      home3:
        "Unser Ansatz fördert Kreativität, kritisches Denken und Zusammenarbeit. Lernende verlassen unser Programm mit Selbstvertrauen und den Werkzeugen, die sie benötigen, um in dynamischen Umfeldern erfolgreich zu sein.",
      home4title: "Repräsentation",
      home4:
        "Wir bringen inspirierende weibliche Rednerinnen und Führungspersönlichkeiten, die ihre Geschichten teilen und Ehrgeiz sowie Inklusion fördern. Dies befähigt Einzelpersonen, ihre Ziele zu erkennen und zu erreichen.",
      home5title: "Praktische Erfahrung",
      home5:
        "Wir bieten praktische Erfahrungen durch projektbasiertes Lernen, Mentoring und Workshops, die kulturell auf Mädchen und Frauen in Zentralasien zugeschnitten sind.",
      home6: "Erfahren Sie hier mehr über unseren Ansatz",
      home7:
        "Entdecken Sie unsere Programme, die dazu entwickelt wurden, WACHSTUM zu INSPIRIEREN und VERÄNDERUNG zu BEFÄHIGEN!",
      home8title: "Mädchen in MINT!",
      home8:
        "Dieses 2- bis 8-wöchige Programm richtet sich an junge Frauen im Alter von 15-18 Jahren, die UI/UX-Design und die Erstellung von Websites und Apps erlernen möchten. Die Teilnehmerinnen erhalten eine Ausbildung in einer der technischen Disziplinen und präsentieren ein Projekt basierend auf ihren erworbenen Fähigkeiten.",
      home9title: "ACCELERATE",
      home9:
        "Accelerate ist ein Online-Training für 300 Unternehmerinnen aus Kasachstan, Kirgisistan und Usbekistan. Die Frauen erhalten Mentoring und Zugang zu Investitionen, um ihr Geschäft auszubauen und neue Partnerschaften zu finden.",
      readmore: "Mehr Erfahren",
      home10:
        "„Nach meiner Teilnahme am Programm „Erstelle deine erste App“ des Mädchen Power Fonds habe ich erkannt, dass ich Technik liebe. Ich begann, an mehreren Wettbewerben teilzunehmen, und wurde für ein prestigeträchtiges, vollständig finanziertes Programm, Tech Girls, des US-Außenministeriums ausgewählt. Jetzt studiere ich Informatik an der NYU AD mit einem Vollstipendium.“",
      home10author: "Kuralay, Teilnehmerin von Mädchen in MINT",
      home11:
        "Unsere Alumni erhalten globale Anerkennung, gewinnen Wettbewerbe wie den Technovation Challenge, Tech Girls und Robocon und sammeln Gelder, um ihre Gemeinschaften zu verbessern.",
      home12: "Erfahren Sie hier mehr über unsere Wirkung",
      home13: "Erfahren Sie mehr über uns und was wir Ihnen bieten können",
      home14:
        "Vielen Dank, dass Sie uns helfen, die Zukunft von Hunderten junger Frauen in Kasachstan zu unterstützen",
      formname: "Name",
      formemail: "E-Mail",
      formphone: "Telefon",
      formcompany: "Unternehmen",
      formmessage: "Hinterlassen Sie uns eine Nachricht",
      formsend: "Nachricht senden",
      home16:
        "Investieren Sie in die nächste Generation weiblicher Führungskräfte in Kasachstan",
      home17title: "MACHEN SIE HEUTE EINEN UNTERSCHIED!",
      home17:
        "Wir sammeln Spenden für das Schuljahr 2024-2025, um mindestens 100 Schüler:innen mit einem eigenen Computer und einem WLAN-Hotspot auszustatten, damit sie optimal auf Bewerbungen für Universitäten, Stipendien, Sommerprogramme und Online-Weiterbildungen vorbereitet sind. Helfen Sie uns, noch mehr Schüler:innen in ganz Kasachstan zu erreichen!",
      aboutus1title: "Die Bewegung geht weiter",
      aboutus1:
        "Girls Power Fund hat sich zu einer dynamischen Bewegung entwickelt, die Mädchen weltweit inspiriert und stärkt. Unsere Reise ist geprägt von Widerstandsfähigkeit, Wachstum und einem unerschütterlichen Engagement für Gleichheit und Repräsentation. Wir entwickeln weiterhin Programme, die Barrieren durchbrechen und dauerhafte Chancen schaffen, damit jedes Mädchen die Unterstützung erhält, die es braucht, um seine Träume zu verwirklichen.",
      aboutus2title: "Neue Höhen erforschen",
      aboutus2:
        "Zum Feiern des Meilensteins, Tausende von Mädchen erreicht zu haben, verstärkte der Fund seine Mission, indem er Technologie einbezog. Online-Programme und digitale Werkzeuge wurden eingeführt, die es dem Fund ermöglichten, Mädchen weltweit zu erreichen und zu stärken. Das 'Girls Power Digital Hub' wurde eine zentrale Ressource für Lernen, Mentoring und Zusammenarbeit.",
      aboutus3title: "Eine Gemeinschaft schaffen",
      aboutus3:
        "Der Fund führte regionale Veranstaltungen, Online-Webinare und eine digitale Plattform ein, um ein Gemeinschaftsgefühl zu fördern. Diese Bemühungen schufen einen Raum, in dem Mädchen lernen, ihre Geschichten teilen und Inspiration voneinander finden konnten. Inklusivität wurde zu einem zentralen Fokus, um sicherzustellen, dass Programme für Mädchen aus unterschiedlichen Hintergründen und Regionen zugänglich sind.",
      aboutus4title: "Chancen erweitern",
      aboutus4:
        "Der Girls Power Fund erweiterte seine Programme, um praxisorientierte Workshops und Trainings anzubieten, die sich auf reale Anwendungen konzentrieren. Diese Sitzungen behandelten wesentliche Themen wie öffentliche Rede, MINT-Bildung und kreatives Problemlösen und statteten Mädchen mit Werkzeugen für den Erfolg aus. Partnerschaften mit lokalen Organisationen halfen, die Reichweite und den Einfluss zu steigern.",
      aboutus5title: "Verbindung aufbauen",
      aboutus5:
        "Der Fund startete sein erstes Mentoring-Programm, das Mädchen mit inspirierenden weiblichen Führungskräften aus verschiedenen Branchen verknüpfte. Dieser Meilenstein markierte den Beginn einer Reise, um Selbstvertrauen und Führungskompetenz unter den Teilnehmerinnen zu fördern. Zeugnisse von frühen Mentees hoben den transformativen Einfluss dieser Verbindungen hervor.",
      aboutus6title: "Der Anfang",
      aboutus6:
        "Der Girls Power Fund wurde mit einer einfachen, aber kraftvollen Mission gegründet: junge Mädchen zu stärken, indem ihnen Bildung, Mentoring und Repräsentation geboten werden. Ursprünglich als lokale Initiative gestartet, konzentrierte sich der Fund darauf, einen sicheren Raum für Mädchen zu schaffen, in dem sie ihr Potenzial entdecken und größer träumen konnten.",
      ourteam1title: "Die Frauen hinter dem Girls Power Fund",
      ourteam1:
        "Eine engagierte Gruppe von Pädagoginnen und Mentoren, vereint durch eine Leidenschaft für Inklusivität, inspirierendes Wachstum und die Schaffung von Chancen für die nächste Generation weiblicher Führungskräfte.",
      ourteamceo: "CEO & Gründerin",
      ourteamceoname: "Dinara Auyelbekova",
      ourteammember1: "Projektmanagerin",
      ourteammember1name: "Aziza Ibragimova",
      ourteammember2: "Projektmanagerin",
      ourteammember2name: "Aassel Amit",
      ourteammember3: "Programmmangerin",
      ourteammember3name: "Aruzhan Nurmakhanova",
      ourteam2: "Ein paar Worte von unserer CEO & Gründerin",
      ourteam3:
        '"Das letzte Jahr war eine Phase exponentiellen Wachstums für den Girls Power Fund. Nachdem ich das Obama Scholars Program an der Columbia University abgeschlossen hatte, kam ich mit mehr Motivation, verbesserten Fähigkeiten und einem erweiterten Netzwerk zurück. Unser Fund erhielt die ersten internationalen Stipendien (aus Großbritannien und den USA), startete sein erstes internationales Programm, das von Kasachstan auf andere zentralasiatische Länder ausgeweitet wurde, finanziert von USAID FGI, und verwandelte sich von einer gemeinnützigen Organisation in ein soziales Unternehmen. Unser Fund wurde auch als eines der besten 45 sozialen Projekte von den Young Global Changers ausgezeichnet, ausgewählt aus 700 Bewerbungen weltweit."',
      featured: "Vorstellung",
      ourteam4title: "Die Erste aus der post-sowjetischen Region",
      ourteam4:
        "Die CEO des Girls Power Fund, Dinara Auyelbekova, wurde als Obama Scholar an der Columbia University ausgewählt. Dies ist ein wettbewerbsintensives und prestigeträchtiges Programm für aufstrebende Führungskräfte weltweit. Sie ist die einzige Absolventin dieses Programms aus der post-sowjetischen Region.",
      seeall: "Alle Nachrichten und Medien ansehen",
      getinvolved1:
        "Beteiligen Sie sich, um Mädchen zu ERMÄCHTIGEN und ZUKÜNFTE zu VERÄNDERN",
      getinvolved2:
        "Werden Sie Teil unseres Teams als Freiwillige und spielen Sie eine entscheidende Rolle bei der Ermächtigung von Mädchen weltweit. Ihre Zeit und Fähigkeiten können einen bleibenden Einfluss haben!",
      getinvolved3title: "Partner",
      getinvolved3:
        "Arbeiten Sie mit uns zusammen, um dauerhafte Veränderungen zu schaffen. Gemeinsam können wir mehr Mädchen ermächtigen und unsere Reichweite erweitern, um Gemeinschaften zu transformieren.",
      getinvolved4title: "SPONSORING & SPENDE",
      getinvolved4:
        "Machen Sie einen Unterschied, indem Sie unsere Programme sponsern oder heute spenden. Ihre Unterstützung stärkt direkt Mädchen und hilft, hellere Zukunftsperspektiven aufzubauen.",
      getinvolved5: "Gesammeltes Geld im Jahr",
      getinvolved6: "Vertrauen von über 10 Unternehmen und NGOs weltweit",
      undpboost: "UNDP BOOST",
      newsandmediamentions1:
        "Der Girls Power Fund konzentriert sich darauf, Mädchen und junge Frauen zu ermutigen, ihr Wissen sowohl mit traditionellen als auch unkonventionellen Methoden in der Bildung zu erweitern und aufzubauen. Das Team führt Hard- und Soft-Skills-Schulungen für Mädchen aus benachteiligten Gemeinschaften durch, darunter MINT-Kurse sowie Schulungen zur persönlichen Entwicklung und Finanzkompetenz.",
      programs1:
        "'Ich freue mich, dass ich am Accelerate-Programm für Unternehmerinnen teilgenommen habe, da es mir geholfen hat, meinen ersten Umsatz von 10.000 USD in meinem Geschäft zu erzielen. Ich habe auch eine Gemeinschaft unterstützender und inspirierender Frauen gefunden, die mir beim Wachsen helfen.'",
      programs1author: "Dina, 2024 Accelerate-Teilnehmerin",
      codingbootcamp1: "Vorteile von Girls in STEM",
      codingbootcamp2title: "Neue Fähigkeiten lernen",
      codingbootcamp2:
        "Du wirst reale Projekte erstellen, indem du Web- und App-Entwicklungstechnologien anwendest, die du während des Programms gelernt hast.",
      codingbootcamp3title: "Freunde finden",
      codingbootcamp3:
        "Baue eine Gemeinschaft mit deinen Lehrerinnen und anderen Mädchen auf, die genauso wie du neue Dinge lernen!",
      codingbootcamp4title: "Netzwerken",
      codingbootcamp4:
        "Dieses Programm dient als Sprungbrett für deine berufliche Entwicklung, indem es dich und deine Mitstreiterinnen mit weiblichen Führungskräften in STEM vertraut macht.",
      codingbootcamp5title: "Schließe dich der Gemeinschaft an!",
      codingbootcamp5:
        "700 junge Frauen haben von unseren Hackathons, STEM-Bootcamps und Trainings profitiert",
      codingbootcamp6:
        "Interessiert daran, dein eigenes Unternehmen zu führen?",
      entrepreneurship1title: "Geld verdienen",
      entrepreneurship1:
        "Sie erhalten Zugang zu Investitionen, um Ihr Geschäft auszubauen und neue Partnerschaften zu finden.",
      entrepreneurship2:
        "weibliche Teilnehmerinnen lernten Geschäftskompetenz und sammelten Geld für ihre Unternehmungen.",
      ourimpact1:
        "Der Girls Power Fund ist das ultimative Werkzeug zur Ermächtigung junger Mädchen im Bereich MINT! Mit dem Girls Power Fund brechen wir Barrieren und zerschlagen Stereotype, indem wir Mädchen die Ressourcen bieten, die sie benötigen, um in den Bereichen Wissenschaft, Technologie, Ingenieurwesen und Mathematik erfolgreich zu sein.",
      ourimpact2:
        "95% der Teilnehmerinnen waren mit ihrer Bildungserfahrung zufrieden",
      ourimpact3:
        "$500.000 Gesamtbetrag in Bildungs- und Entwicklungsstipendien von Alumni gewonnen, um im Ausland zu studieren und ihre Projekte zu starten",
      ourimpact4:
        "Über 100 weiblich geführte Projekte, die von Alumni in ihren jeweiligen Gemeinschaften zur Lösung sozialer Probleme nach unseren Programmen gestartet wurden",
      ourimpact5: "Jahresbericht 2023",
      donate1: "Ihre Unterstützung, ihr Erfolg – SPENDEN SIE HEUTE!",
      donate2:
        "100 % Ihrer Spende fließen in Programme für junge Mädchen in Kasachstan.",
      faq: "Häufig gestellte Fragen",
      faq1: "Was bewirkt meine Spende an den Girls Power Fund?",
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
      codingbootcamp: "Кодинг Буткемп",
      entrepreneurship: "Предпринимательство",
      donate: "Пожертвовать",
      donatenow: "Пожертвовать cейчас",
      impact: "Наше влияние",
      ourapproach: "Наш подход",
      history: "Наша история",
      financialinfo: "Финансовая информация",
      approachsectionstats: "Статистика подхода",
      generalimpact: "Общее влияние",
      copyright: "© 2024 Фонд Girls Power | Все права защищены",
      followoninsta: "Подписывайтесь на нас в Instagram",
      connect: "Свяжитесь с нами!",
      footer1: "Есть вопрос? Мы ответим!",
      footer2: "Мы свяжемся с вами в течение 72 часов!",
      footer3:
        "Фонд Girls Power — это платформа, которая помогает девочкам и молодым женщинам через обучение STEM и предпринимательству, наставничество и предоставление возможностей, развивая их навыки, уверенность и лидерские качества для процветания в мире технологий.",
      home1:
        "Платформа для поддержки девочек и молодых женщин через STEM и предпринимательство, наставничество и возможности, развивая их навыки, уверенность и лидерские качества для процветания в мире технологий.",
      joinus: "Присоединяйтесь к нашему сообществу!",
      home2:
        "Вдохновляем следующее поколение новаторов через ПРАКТИЧЕСКОЕ ОБУЧЕНИЕ...",
      home3title: "Образование",
      home3:
        "Наш подход развивает креативность, критическое мышление и сотрудничество. Учащиеся уходят с уверенностью и инструментами, необходимыми для успеха в динамичной среде.",
      home4title: "Позитивные примеры",
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
        "Эта 2–8-недельная программа предназначена для молодых женщин в возрасте 15–18 лет, которые хотят изучать UI/UX-дизайн и как кодировать сайты и приложения. Участники проходят обучение в одной из технических дисциплин и представляют проект на основе изученного.",
      home9title: "ACCELERATE",
      home9:
        "ACCELERATE — это онлайн-обучение для 300 женщин-предпринимателей из Казахстана, Кыргызстана и Узбекистана. Женщины получают наставничество и доступ к инвестициям, чтобы развивать свой бизнес и находить новых партнеров.",
      readmore: "Читать далее",
      home10:
        "‘После участия в программе фонда Girls Power «Создай свое первое приложение» я поняла, что люблю технологии. Я начала участвовать в нескольких конкурсах и была выбрана для престижной полностью финансируемой программы Tech Girls Государственным департаментом США. Теперь я изучаю информатику в NYU AD с полной стипендией.’",
      home10author: "Куралай, участница Girls in STEM",
      home11:
        "Наши выпускницы добиваются мирового признания, выигрывают соревнования, такие как Technovation Challenge, Tech Girls и Robocon, а также собирают средства для улучшения своих сообществ.",
      home12: "Узнайте больше о нашем влиянии здесь",
      home13: "Узнайте больше о том, кто мы и что мы можем вам предложить",
      home14:
        "Спасибо вам за поддержку будущего сотен молодых женщин в Казахстане",
      formname: "Имя",
      formemail: "Электронная почта",
      formphone: "Телефон",
      formcompany: "Компания",
      formmessage: "Оставьте сообщение",
      formsend: "Отправить сообщение",
      home16: "Инвестируйте в следующее поколение женщин-лидеров Казахстана",
      home17title: "СДЕЛАЙТЕ РАЗНИЦУ СЕГОДНЯ!",
      home17:
        "Мы собираем средства на 2024-2025 учебный год, чтобы обеспечить как минимум 100 студентов персональными компьютерами и Wi-Fi хотспотами, подготовив их к поступлению в университет, получению стипендий, летним программам и онлайн-профессиональному развитию. Помогите нам охватить ещё больше студентов по всему Казахстану!",
      aboutus1title: "Движение продолжается",
      aboutus1:
        "Фонд Girls Power превратился в динамичное движение, вдохновляющее и поддерживающее девочек по всему миру. Наш путь определяется стойкостью, ростом и приверженностью равенству и представлению. Мы продолжаем создавать программы, разрушающие барьеры и создающие длительные возможности, обеспечивая поддержку каждой девочке для достижения ее мечты.",
      aboutus2title: "Достижение новых высот",
      aboutus2:
        "Отмечая веху — влияние на тысячи девочек, Фонд удвоил свою миссию, приняв технологии. Были введены онлайн-программы и цифровые инструменты, позволяющие Фонду достигать и поддерживать девочек на глобальном уровне. «Girls Power Digital Hub» стал центральным ресурсом для обучения, наставничества и сотрудничества.",
      aboutus3title: "Создание сообщества",
      aboutus3:
        "Фонд организовал региональные мероприятия, онлайн-вебинары и цифровую платформу, чтобы способствовать формированию сообщества. Эти усилия предоставили пространство, где девочки могли учиться, делиться историями и вдохновляться друг другом. Инклюзивность стала ключевым направлением, обеспечивающим доступность программ для девочек из разных слоев общества и регионов.",
      aboutus4title: "Расширение возможностей",
      aboutus4:
        "Фонд Girls Power расширил свои программы, включив в них тренинги, основанные на навыках, и практическое обучение, сосредоточенные на реальных приложениях. Эти занятия охватывают такие важные области, как публичные выступления, STEM-образование и креативное решение проблем, обеспечивая девочек инструментами для успеха. Партнерства с местными организациями помогли увеличить охват и влияние.",
      aboutus5title: "Создание связи",
      aboutus5:
        "Фонд запустил свою первую программу наставничества, соединяя девочек с вдохновляющими женщинами-лидерами из разных отраслей. Эта веха ознаменовала начало пути к укреплению уверенности и лидерских качеств среди участников. Отзывы первых подопечных подчеркнули трансформирующее влияние этих связей.",
      aboutus6title: "Начало",
      aboutus6:
        "Фонд Girls Power был основан с простой, но мощной миссией: расширять возможности молодых девушек, предоставляя им образование, наставничество и представительство. Начав как местная инициатива, фонд сосредоточился на создании безопасного пространства, где девочки могли бы раскрыть свой потенциал и мечтать о большем.",
      ourteam1title: "Женщины, возглавляющие Фонд Girls Power",
      ourteam1:
        "Преданная группа педагогов и наставников, объединенных страстью к развитию инклюзивности, вдохновлению на рост и созданию возможностей для следующего поколения женщин-лидеров.",
      ourteamceo: "Генеральный директор и основатель",
      ourteamceoname: "Динара Ауельбекова",
      ourteammember1: "Менеджер проектов",
      ourteammember1name: "Азиза Ибрагимова",
      ourteammember2: "Менеджер проектов",
      ourteammember2name: "Асель Амит",
      ourteammember3: "Менеджер программы",
      ourteammember3name: "Аружан Нурмаханова",
      ourteam2: "Несколько слов от нашего генерального директора и основателя",
      ourteam3:
        '"Прошлый год был периодом экспоненциального роста для фонда Girls Power. После завершения программы Obama Scholars в Колумбийском университете я вернулась с повышенной мотивацией, улучшенными навыками и сетью контактов. Наш фонд получил первые международные гранты (из Великобритании и США), запустил свою первую международную программу, расширившись из Казахстана на другие страны Центральной Азии благодаря финансированию USAID FGI и преобразовавшись из некоммерческой организации в социальное предприятие. Наш фонд также был отмечен как один из 45 лучших социальных проектов, созданных молодыми глобальными лидерами, выбранных из 700 заявок со всего мира."',
      featured: "В центре внимания",
      ourteam4title: "Первая из постсоветского региона",
      ourteam4:
        "Генеральный директор фонда Girls Power Динара Ауельбекова была выбрана как стипендиат программы Obama Scholars в Колумбийском университете. Это престижная и конкурентная программа для будущих лидеров со всего мира. Она стала единственной выпускницей этой программы из постсоветского региона.",
      seeall: "Смотреть все новости и СМИ",
      getinvolved1:
        "Присоединяйтесь, чтобы РАСШИРИТЬ возможности девочек и ИЗМЕНИТЬ их будущее",
      getinvolved2:
        "Станьте волонтером и сыграйте важную роль в расширении возможностей девочек по всему миру. Ваше время и навыки могут оставить долговечный след!",
      getinvolved3title: "Партнерство",
      getinvolved3:
        "Сотрудничайте с нами, чтобы создать долговечные изменения. Вместе мы можем расширить возможности большего числа девочек и изменить сообщества.",
      getinvolved4title: "СПОНСОРСТВО И ПОЖЕРТВОВАНИЯ",
      getinvolved4:
        "Окажите влияние, спонсируя наши программы или сделав пожертвование сегодня. Ваша поддержка напрямую помогает девочкам и способствует созданию светлого будущего.",
      getinvolved5: "Собрано средств за год",
      getinvolved6: "Доверяют более 10 компаний и НПО по всему миру",
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
      entrepreneurship1title: "Заработать деньги",
      entrepreneurship1:
        "Вы получите доступ к инвестициям для масштабирования вашего бизнеса и нахождения новых партнерств.",
      entrepreneurship2:
        "женщин-участниц освоили бизнес-навыки и собрали деньги на свои проекты.",
      ourimpact1:
        "Представляем фонд Girls Power — главный инструмент для расширения возможностей молодых девушек в STEM! С фондом Girls Power мы ломаем барьеры и стереотипы, предоставляя девочкам ресурсы, необходимые для успеха в мире науки, технологий, инженерии и математики.",
      ourimpact2: "95% участников довольны образовательным опытом.",
      ourimpact3:
        "$500,000 общей суммы грантов, выигранных выпускницами для учебы за границей и запуска своих проектов.",
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
