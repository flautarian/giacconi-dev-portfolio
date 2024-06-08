export interface Resume {
  name: string;
  surnames: string;
  avatar: string;
  location: string;
  aboutMe: Label;
  birthDate: Date;
  linkedIn: string;
  gitHub: string;
  gitLab: string;
  docker: string;
  experience: Array<Experience>;
  certificates: Array<Certificate>;
  projects: Array<Project>;
}

export interface Experience {
  key: string;
  enterprise: string;
  location: string;
  description: Label;
  position: string;
  responsabilities: Label[];
  dateFrom: Date;
  dateTo: Date | null; // null = currently working in that enterprise
  tags: Array<string>;
}

export interface Certificate {
  name: Label;
  description: Label;
  url: string;
  urlCert: string;
  img: string;
  date: Date;
  tags: Array<string>;
}

export interface Project {
  name: string;
  description: Label;
  url: string;
  tags: Array<string>;
}

export interface Label {
  es: string;
  en: string;
  fr: string;
}

const exampleResume: Resume = {
  name: "Facundo",
  surnames: "Giacconi Fernandez",
  location: "Girona, Spain",
  avatar: "./img/avatar.jpeg",
  aboutMe: {
    es: "Deasrrollador Full stack dedicado al desarrollo de aplicaciones en multiples tecnologias.\n\nCurioso y autodidacta por naturaleza propia y apasioado de la tecnología y la investigación.",
    en: "Full stack developer dedicated to the development of applications in multiple technologies.\n\nCurious and self-taught by nature and passionate about technology and research.",
    fr: "Développeur full stack dédié au développement d'applications dans de multiples technologies.\n\nCurieux et autodidacte de nature et passionné de technologie et de recherche.",
  },
  birthDate: new Date("2022-03-25"),
  linkedIn: "facundo-giacconi-fernandez-a77989a3",
  gitHub: "",
  gitLab: "",
  docker: "",
  experience: [
    {
      enterprise: "Terramar Tours",
      location: "Lloret de Mar, España",
      key: "Terramar-Tours",
      description: {
        es: "Localizada en la pequeña ciudad turística 'Lloret de Mar', Terramar tours era una empresa centrada en el turismo ruso, con un motor de búsqueda creado para recopilar resultados de diferentes páginas de turismo ruso y crear paquetes de vacaciones para sus clientes.",
        en: "Localized in the small touristic town 'Lloret de Mar', Terramar tours was an enterprise focused in russian tourism, with a search engine created to collect results from different russian tourism pages and create holiday packs for clients.",
        fr: "Localisée dans la petite ville touristique de Lloret de Mar, Terramar tours était une entreprise axée sur le tourisme russe, avec un moteur de recherche créé pour collecter les résultats de différentes pages de tourisme russe et créer des packs de vacances avec ces informations.",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Desarrollo y mantenimiento/mejora de un proyecto diseñado para crear automáticamente diferentes horarios de viaje a partir de las necesidades del usuario. Proyecto MVC basado en backend Java Spring con persistencia de datos SQL y frontend de comunicaciones JSP, CSS y REST.",
          en: "Development and maintenance/enhancement of a project designed to automatically create different travel schedules from user needs. MVC project based on Java Spring backend with SQL data persistence and JSP, CSS, and REST communications frontend.",
          fr: "Développement et maintenance/amélioration d’un projet conçu pour créer automatiquement des horaires de déplacement différents des besoins des utilisateurs. Projet MVC basé sur le backend Java Spring avec persistance des données SQL et frontend de communication JSP, CSS et REST.",
        },
        {
          es: "Desarrollador y mantenimiento/mejora en el sector de relaciones API de un proyecto basado en Spring y Java en el backend, y JSP y CSS en el frontend, con una base de datos SQL y la librería JOOQ.",
          en: "Developer and maintenance/enhancement in the API relations sector of a project based on Spring and Java in the backend, and JSP and CSS in the frontend, with an SQL database and the JOOQ library.",
          fr: "Développeur et maintenance/amélioration dans le secteur des relations API d’un projet basé sur Spring et Java en backend, et JSP et CSS en frontend, avec une base de données SQL et la librairie JOOQ.",
        }
      ],
      dateFrom: new Date("2013-07-17"),
      dateTo: new Date("2016-03-02"),
      tags: ["Springboot", "Java", "Jsp", "Spring security", "REST", "Sql Server"],
    },
    {
      enterprise: "CodiTramuntana",
      location: "Girona, Spain",
      key: "CodiTramuntana",
      description: {
        es: "Coditramuntana es una empresa dedicada a acercar soluciones digitales a sus clientes. Ubicada en Girona, trabaja con un sólido equipo de 25 personas y está especializada en lenguajes de programación como Ruby.",
        en: "Coditramuntana is an enterprise dedicated to bring digital solutions to it's clients. Located in Girona, works with a solid team or 25 members and is specialized in programming languages like ruby.",
        fr: "Coditramuntana est une entreprise dédiée à apporter des solutions numériques à ses clients. Situé à Gérone, travaille avec une équipe solide de 25 membres et est spécialisé dans les langages de programmation comme Ruby.",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Desarrollo de diversos proyectos CRM y SPA basados ​​en Ruby on Rails con MySQL como base de datos de persistencia",
          en: "Development of various CRM and SPA projects based on Ruby on Rails with MySQL as the persistence database",
          fr: "Développement de divers projets CRM et SPA basés sur Ruby on Rails avec MySQL comme base de données de persistance",
        }
      ],
      dateFrom: new Date("2016-03-03"),
      dateTo: new Date("2016-12-01"),
      tags: ["Springboot", "Java", "Jsp", "REST", "Sql Server"],
    },
    {
      enterprise: "DXC Technology",
      location: "Girona, Spain",
      key: "DXC",
      description: {
        es: "DXC Technology es una empresa global de servicios de TI que ofrece soluciones en la nube, seguridad, análisis de datos y consultoría, ayudando a las organizaciones a modernizar y gestionar sus entornos tecnológicos, operando en más de 70 países",
        en: "DXC Technology is a global IT services company offering cloud solutions, security, data analytics and consulting, helping organizations modernize and manage their technological environments, operating in more than 70 countries.",
        fr: "DXC Technology est une société mondiale de services informatiques proposant des solutions cloud, de sécurité, d'analyse de données et de conseil, aidant les organisations à moderniser et à gérer leurs environnements technologiques, opérant dans plus de 70 pays.",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Desarrollo en proyecto de licitación pública gubernamental basado en Angular frontend y Spring Boot backend, utilizando búsquedas en Elasticsearch y persistencia de datos en PostgreSql.",
          en: "Development in a government public tender project based on Angular frontend and Spring Boot backend, using Elasticsearch searches and data persistence in PostgreSql.",
          fr: "Développement dans un projet d'appel d'offres gouvernemental basé sur le frontend Angular et le backend Spring Boot, en utilisant les recherches Elasticsearch et la persistance des données dans Postgres.",
        },
        {
          es: "Desarrollo en proyecto público gubernamental basado en Jsp con frontend HTML, Javascript y CSS, y backend Spring Boot, utilizando motor Elasticsearch y persistencia de datos SQL Server.",
          en: "Development in a government public project based on Jsp with HTML, Javascript, and CSS frontend, and Spring Boot backend, using Elasticsearch engine and SQL Server data persistence.",
          fr: "Développement dans un projet public gouvernemental basé sur Jsp avec frontend HTML, Javascript et CSS, et backend Spring Boot, en utilisant le moteur Elasticsearch et la persistance des données SQL Server.",
        },
        {
          es: "Desarrollador en la transición de la aplicación frontend de tecnologías Html, Jpa y Jquery a Angular.",
          en: "Development in a government public project based on Jsp with HTML, Javascript, and CSS frontend, and Spring Boot backend, using Elasticsearch engine and SQL Server data persistence.",
          fr: "Développeur dans la transition de l'application frontend des technologies Html, Jpa et Jquery vers Angular.",
        }
      ],
      dateFrom: new Date("2016-12-01"),
      dateTo: new Date("2021-09-15"),
      tags: ["Full stack", "Springboot", "Spring security", "JPA", "Java", "Jsp", "REST", "ElasticSearch", "Angular", "PostreSql"],
    },
    {
      enterprise: "Sopra Steria",
      location: "Madrid, Spain",
      key: "ST",
      description: {
        es: "Sopra Steria es una empresa europea líder en consultoría, servicios digitales y desarrollo de software. Ofrece soluciones integrales en transformación digital, incluyendo consultoría, integración de sistemas y outsourcing, y opera en más de 25 países.",
        en: "Sopra Steria is a leading European company in consulting, digital services and software development. It offers comprehensive solutions in digital transformation, including consulting, systems integration and outsourcing, and operates in more than 25 countries.",
        fr: "Sopra Steria est une entreprise européenne leader dans le conseil, les services numériques et le développement de logiciels. Elle propose des solutions complètes en matière de transformation numérique, incluant le conseil, l'intégration de systèmes et l'externalisation, et opère dans plus de 25 pays.",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Trabajando remotamente desde Austria, Desarrollador Full Stack en una compañía de seguros, con el objetivo de crear varios proyectos de microservicios para descentralizar y comunicarse en un proyecto monolítico, todos con el framework Springboot como backend y Angular 13 como frontend.",
          en: "Working remotely from Austria, Full Stack Developer at an insurance company, aiming the objective of create a various microservice projects to desentralize and comunicate with in a monolithic project, all with Springboot framework as backend and Angular 13 as frontend.",
          fr: "Travaillant à distance depuis l'Autriche, développeur Full Stack dans une compagnie d'assurance, ayant pour objectif de créer divers projets de microservices à décentraliser et à communiquer dans un projet monolithique, le tout avec le framework Springboot comme backend et Angular 13 comme frontend.",
        },
        {
          es: "Desarrollar y mejorar un proyecto de gestión de productos de seguros, con frontend Angular 6 y backend Spring Boot, junto con Apache Kafka y comunicaciones REST.",
          en: "Developing and improving an insurance product management project, with Angular 6 frontend and Spring Boot backend, along with Apache Kafka and REST communications.",
          fr: "Développer et améliorer un projet de gestion de produits d'assurance, avec le frontend Angular 6 et le backend Spring Boot, ainsi que les communications Apache Kafka et REST.",
        }
      ],
      dateFrom: new Date("2021-09-27"),
      dateTo: new Date("2022-05-20"),
      tags: ["Springboot", "Java", "REST", "Sql Server", "Apache Kafka", "Events", "Microservices"],
    },
    {
      enterprise: "Azimut Electronics",
      location: "Gandia, Spain",
      key: "AE",
      description: {
        es: "Azimut Electronics es una empresa especializada en la distribución de equipos electrónicos y soluciones tecnológicas avanzadas. Provee productos y servicios para sectores como la navegación, comunicaciones, seguridad y entretenimiento a bordo, destacándose en la integración de sistemas electrónicos para la industria marítima y otros mercados. Con un enfoque en innovación y calidad, Azimut Electronics opera en varios países, ofreciendo soporte técnico y consultoría especializada.",
        en: "Azimut Electronics is a company specialized in the distribution of electronic equipment and advanced technological solutions. It provides products and services for sectors such as navigation, communications, security and on-board entertainment, standing out in the integration of electronic systems for the maritime industry and other markets. With a focus on innovation and quality, Azimut Electronics operates in several countries, offering technical support and specialized consulting.",
        fr: "Azimut Électronique est une entreprise spécialisée dans la distribution d'équipements électroniques et de solutions technologiques avancées. Elle fournit des produits et services pour des secteurs tels que la navigation, les communications, la sécurité et le divertissement à bord, en se distinguant dans l'intégration de systèmes électroniques pour l'industrie maritime et d'autres marchés. En mettant l'accent sur l'innovation et la qualité, Azimut Electronics opère dans plusieurs pays, offrant un support technique et des conseils spécialisés.",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Trabajando en remoto desde Gandia, desarrollando y potenciando programas de entretenimiento multimedia y digital diseñados para mantener entretenidos a los clientes del transporte público de larga distancia.",
          en: "Working remotely from Gandia, developing and enhancing multimedia and digital entertainment programs designed to keep longdistance public transportation customers entertained.",
          fr: "Travailler à distance depuis Gandia, développer et améliorer des programmes de divertissement multimédia et numérique conçus pour divertir les clients des transports publics longue distance.",
        },{
          es: "Proyecto basado en frontend AngularJs, con conexiones REST a backend Spring Boot con con conectividad MongoDB y comunicaciones REST.",
          en: "Project based on AngularJs frontend and Spring Boot backend with MongoDB connectivity and REST communications.",
          fr: "Projet basé sur le frontend AngularJs et le backend Spring Boot avec connectivité MongoDB et communications REST.",
        },{
          es: "Responsable de aplicación basada en framework NextJs con React 18, javascript y backend NodeJs con squelize, librería de drivers GraphQL y persistencia de db MySql.",
          en: "Responsible for application based on NextJs framework with React 18, javascript and NodeJs backend with squelize, GraphQL driver library and MySql db persistence.",
          fr: "Responsable de l'application basée sur le framework NextJs avec React 18, javascript et backend NodeJs avec squelize, bibliothèque de pilotes GraphQL et persistance de la base de données MySql.",
        },{
          es: "Responsable de aplicación basada en framework NextJs con React 18, javascript y backend NodeJs con squelize, librería de drivers GraphQL y persistencia de db MySql.",
          en: "Responsible for application based on NextJs framework with React 18, javascript and NodeJs backend with squelize, GraphQL driver library and MySql db persistence.",
          fr: "Responsable de l'application basée sur le framework NextJs avec React 18, javascript et backend NodeJs avec squelize, bibliothèque de pilotes GraphQL et persistance de la base de données MySql.",
        },
      ],
      dateFrom: new Date("2022-05-16"),
      dateTo: null,
      tags: ["Full stack", "Springboot", "Spring security", "Java", "AngularJs", "NextJs", "React 18", "REST", "MongoDb", "GraphQL", "NodeJs"],
    },
  ],
  certificates: [{
    name: {
      es: "React: De cero a experto ( Hooks y MERN )",
      en: "React: From zero to expert (Hooks and MERN)",
      fr: "React : De zéro à expert (Hooks et MERN)"
    },
    description: {
      es: "Este curso tiene por objetivo llevarte de cero conocimiento de React hasta un nivel competitivo en el ambiente laboral de hoy en día. Este curso está construido 100% en Hooks y functional components.",
      en: "This course aims to take you from zero knowledge of React to a competitive level in today's work environment. This course is built 100% in Hooks and functional components.",
      fr: "Ce cours vise à vous faire passer d'une connaissance nulle de React à un niveau compétitif dans l'environnement de travail actuel. Ce cours est construit à 100% en Hooks et composants fonctionnels."
    },
    url: "https://www.udemy.com/course/react-cero-experto/",
    urlCert: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://bardcrack.com/assets/img/courses/ZBLg0s9R1A/0223b00983822436edfa72b97c9baad1aba07504.png",
    date: new Date("2022-10-08"),
    tags: ["React", "Hooks", "Events", "Stateless", "Javascript", "Typescript", "Frontend"]
  },{
    name: {
      es: "Cien proyectos de Python",
      en: "A hundred Python projects",
      fr: "Une centaine de projets Python"
    },
    description: {
      es: "Curso con más de 70 horas de contenido, con los principios del lenguaje de programación Python, y con la generación de 100 proyectos con dicho lenguaje, desde aplicaciones nativas con Tkinter hasta webapps y backends con Flask.",
      en: "Course with more than 70 hours of content, with the principles of the Python programming language, and with the generation of 100 projects with said language, from native applications with Tkinter to webapps and backends with Flask.",
      fr: "Cours avec plus de 70 heures de contenu, avec les principes du langage de programmation Python, et avec la génération de 100 projets avec ledit langage, des applications natives avec Tkinter aux webapps et backends avec Flask."
    },
    url: "https://www.udemy.com/course/100-days-of-code/",
    urlCert: "https://www.udemy.com/certificate/UC-2d01021e-af92-434c-a4a3-7fc7b33976c9/",
    img: "https://www.feuga.es/wp-content/uploads/2023/01/python-curso-1024x576.jpg",
    date: new Date("2023-11-25"),
    tags: ["Python", "Flask", "BeautifulSoup", "Backend", "pip"]
  },{
    name: {
      es: "Curso de NextJs",
      en: "NextJs Course",
      fr: "Cours NextJs"
    },
    description: {
      es: "Curso con más de 40 horas de contenido que cubre todo lo necesario para desarrollar una aplicación web sin estado con React y NextJs.",
      en: "Course with over 40 hours of content covering everything needed to develop a stateless web application with React and NextJs.",
      fr: "Cours avec plus de 40 heures de contenu couvrant tout le nécessaire pour développer une application Web sans état avec React et NextJs."
    },
    url: "https://www.udemy.com/course/nextjs-fh/",
    urlCert: "https://www.udemy.com/certificate/UC-1ede8757-aa0d-406f-813a-8eaa400532c5/",
    img: "https://miro.medium.com/v2/resize:fit:1000/1*v3XndYeIsBtk4CkpMf7vmA.jpeg",
    date: new Date("2023-06-27"),
    tags: ["React", "Hooks", "Events", "Stateless", "Javascript", "Frontend"]
  },{
    name: {
      es: "Spring Framework and Spring Boot",
      en: "Spring Framework and Spring Boot",
      fr: "Spring Framework au Spring Boot"
    },
    description: {
      es: "Con 75 horas de ejemplos, conocimientos y buenas prácticas, tomé este curso para refrescar y aprender nuevos tips y técnicas de uno de los frameworks más utilizados en mi carrera, el aprendizaje es continuo y no podemos detenernos solo porque ya hemos aprendido lo básico.",
      en: "With 75 hours of examples, knowledge and good practices, I took this course to refresh and learn new tips and techniques of one of the most used frameworks in my career, learning is continuous, and we can't stop only because we have already learned the basics.",
      fr: "Avec 75 heures d'exemples et de bonnes pratiques, j'ai suivi ce cours pour rafraîchir et apprendre de nouvelles astuces et techniques d'un des frameworks les plus utilisés de ma carrière, l'apprentissage est continu, et on ne peut pas s'arrêter seulement parce qu'on a déjà appris les bases."
    },
    url: "https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/?couponCode=OF53124",
    urlCert: "https://www.udemy.com/certificate/UC-b9804372-ae88-471e-8835-01402fa840f1/",
    img: "https://broadwayinfosys.com/blog/wp-content/uploads/2017/04/Spring-Framework.png",
    date: new Date("2022-06-27"),
    tags: ["React", "Hooks", "Events", "Stateless", "Javascript", "Frontend"]
  },{
    name: {
      es: "Bootcamp de hacking etico",
      en: "Ethical Hacking Bootcamp",
      fr: "Bootcamp de piratage éthique"
    },
    description: {
      es: "Completo curso de introducción al mundo del hacking etico, con control y ejemplos de herramientas utilizadas por los profesionales de OSINT, con conocimientos y prácticas de técnicas de hacking, manejo de pen testing y creación y uso de malware.",
      en: "Complete introductory course to the world of ethical hacking, with control and examples of tools used by OSINT professionals, with knowledge and practices on hacking techniques, handling of pen testing tools and creation and use of malware.",
      fr: "Cours complet d'introduction au monde du hacking éthique, avec contrôle et exemples d'outils utilisés par les professionnels OSINT, avec des connaissances et pratiques sur les techniques de hacking, la manipulation des outils de pen testing et la création et l'utilisation de malwares."
    },
    url: "https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/?couponCode=OF53124",
    urlCert: "https://www.udemy.com/certificate/UC-b9804372-ae88-471e-8835-01402fa840f1/",
    img: "https://img-c.udemycdn.com/course/480x270/3291970_afb5_2.jpg",
    date: new Date("2024-03-30"),
    tags: ["Nmap", "Kali", "Linux", "Sherlock", "fatrat", "hacking"]
  },{
    name: {
      es: "MongoDB - la guía completa para desarrolladores",
      en: "MongoDB - The Complete Developer's Guide",
      fr: "MongoDB - Le guide complet du développeur"
    },
    description: {
      es: "Master en desarrollo de MongoDB para aplicaciones web y móviles. Operaciones CRUD, índices, marco de agregación: todo sobre MongoDB, desde la creación de esquemas hasta las agregaciones, la eficiencia, los eventos, la población de datos, las operaciones CRUD y más.",
      en: "Master MongoDB Development for Web and Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB, from schema creation to aggregations,  efficience, events, data population, CRUD operations and more.",
      fr: "Maîtrisez le développement MongoDB pour les applications Web et mobiles. Opérations CRUD, index, cadre d'agrégation - Tout sur MongoDB, de la création de schémas aux agrégations, en passant par l'efficacité, les événements, le remplissage des données, les opérations CRUD et bien plus encore."
    },
    url: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
    urlCert: "https://www.udemy.com/certificate/UC-b990e98a-9b76-44b1-8e3e-43b68213725c/",
    img: "https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png",
    date: new Date("2022-06-13"),
    tags: ["MongoDb", "Atlas", "Robo3T", "Database", "Javascript"]
  },{
    name: {
      es: "MongoDB - la guía completa para desarrolladores",
      en: "MongoDB - The Complete Developer's Guide",
      fr: "MongoDB - Le guide complet du développeur"
    },
    description: {
      es: "Aprendí a programar y publicar apps y juegos para Android, utilizando Material Design, bases de datos, GPS y hardware del dispositivo. Con Android Studio, corrección de errores y el control de versiones con Git y GitHub, además de crear apps multilingües.",
      en: "I learned how to program and publish apps and games for Android, using Material Design, databases, GPS and device hardware. With Android Studio, bug fixes and version control with Git and GitHub, as well as creating multilingual apps.",
      fr: "J'ai appris à programmer et à publier des applications et des jeux pour Android, en utilisant Material Design, des bases de données, le GPS et le matériel de l'appareil. Avec Android Studio, corrections de bugs et contrôle de version avec Git et GitHub, ainsi que création d'applications multilingues."
    },
    url: "https://www.udemy.com/course/programacion-de-android-desde-cero/",
    urlCert: "https://www.udemy.com/certificate/UC-41d264cf-7753-4311-ac23-9440056aa0bf/",
    img: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/09/02/android.jpeg",
    date: new Date("2020-08-24"),
    tags: ["Java", "Android", "IntellyJ", "Studio", "Mono", "Play", "Google", "Material", "Design"]
  }
],
  projects: [],
};

export default exampleResume;
