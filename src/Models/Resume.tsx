export interface Resume {
  name: string;
  surnames: string;
  job: Label,
  avatar: string;
  location: string;
  aboutMe: Label;
  birthDate: Date;
  email: string;
  linkedIn: string;
  github: string;
  gitlab: string;
  docker: string;
  cv: Label;
  sections: Array<Section>;
}

export interface Section {
  key: string;
  name: Label;
  type: String;
  description?: Label;
  url?: string;
  enteringEffect: string;
  neonMenuColor: string;
  tags?: Array<string>;
  values: Array<Experience | Certificate | Project>;
}

export interface Experience extends Section {
  location: string;
  position: string;
  responsabilities: Label[];
  dateFrom: Date;
  dateTo: Date | null; // null = currently working in that enterprise
}

export interface Certificate extends Section {
  urlCert: string;
  img: string;
  date: Date;
  tags: Array<string>;
  buttons: Array<Button>;
}

export interface Button {
  name: string
  url: string,
  css: string,
  label: string,
}

export interface Project extends Section {
  purpose: Label;
  stack: Array<string>;
  github?: string,
  webUrl?: string,
}

export interface Label {
  es: string;
  en: string;
  fr: string;
}

const experienceSection = {
  key: "experience-section",
  name: {
    es: "Experiencia",
    en: "Experience",
    fr: "Expérience"
  },
  type: "timeline-carousel",
  enteringEffect: "aurora-purple",
  neonMenuColor: "rgba(255, 150, 0, 1)",
  values: [
    {
      name: {
        es: "Terramar Tours",
        en: "Terramar Tours",
        fr: "Terramar Tours"
      },
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
          es: "Desarrollo, mantenimiento y mejora de un proyecto diseñado para crear automáticamente diferentes horarios de viaje a partir de las necesidades del usuario. Proyecto MVC basado en backend Java Spring con persistencia de datos SQL y frontend de comunicaciones JSP, CSS y REST.",
          en: "Development maintenance and enhancement of a project designed to automatically create different travel schedules from user needs. MVC project based on Java Spring backend with SQL data persistence and JSP, CSS, and REST communications frontend.",
          fr: "Développement, maintenance et amélioration d’un projet conçu pour créer automatiquement des horaires de déplacement différents des besoins des utilisateurs. Projet MVC basé sur le backend Java Spring avec persistance des données SQL et frontend de communication JSP, CSS et REST.",
        },
        {
          es: "Desarrollador, mantenimiento y mejora en el sector de relaciones API de un proyecto basado en Spring y Java en el backend, y JSP y CSS en el frontend, con una base de datos SQL y la librería JOOQ.",
          en: "Developer, maintenance and enhancement in the API relations sector of a project based on Spring and Java in the backend, and JSP and CSS in the frontend, with an SQL database and the JOOQ library.",
          fr: "Développeur, maintenance et amélioration dans le secteur des relations API d’un projet basé sur Spring et Java en backend, et JSP et CSS en frontend, avec une base de données SQL et la librairie JOOQ.",
        }
      ],
      dateFrom: new Date("2013-07-17"),
      dateTo: new Date("2016-03-02"),
      tags: ["Springboot", "Java", "Jsp", "Spring security", "REST", "Sql Server"],
    },
    {
      name: {
        es: "CodiTramuntana",
        en: "CodiTramuntana",
        fr: "CodiTramuntana"
      },
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
          es: "Participación en procesos de agile para mantener un constante flujo de información a traves de cada sprint.",
          en: "Participation in agile processes to maintain a constant flow of information throughout each sprint.",
          fr: "Participation à des processus agiles pour maintenir un flux constant d'informations tout au long de chaque sprint.",
        },
        {
          es: "Desarrollo de diversos proyectos basados ​​en Ruby on Rails con MySQL como base de datos de persistencia.",
          en: "Development of various based on Ruby on Rails with MySQL as the persistence database.",
          fr: "Développement de divers projets basés sur Ruby on Rails avec MySQL comme base de données de persistance.",
        },
        {
          es: "Desarrollo de aplicaciones CRM para cliente final, con constantes reuniones de seguimiento y comunicación para asegurar un producto final de calidad.",
          en: "Development of CRM applications for the end client, with constant follow-up and communication meetings to ensure a quality final product.",
          fr: "Développement d'applications CRM pour le client final, avec des réunions de suivi et de communication constantes pour garantir un produit final de qualité.",
        },
        {
          es: "Desarrollo de aplicaciones SPA para cliente final, con constantes reuniones de seguimiento y comunicación para asegurar un producto final de calidad.",
          en: "Development of SPA applications for the end client, with constant follow-up and communication meetings to ensure a quality final product.",
          fr: "Développement d'applications SPA pour le client final, avec des réunions de suivi et de communication constantes pour garantir un produit final de qualité.",
        }
      ],
      dateFrom: new Date("2016-03-03"),
      dateTo: new Date("2016-12-01"),
      tags: ["Springboot", "Java", "Jsp", "REST", "Sql Server"],
    },
    {
      name: {
        es: "DXC Technology",
        en: "DXC Technology",
        fr: "DXC Technology"
      },
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
      name: {
        es: "Sopra Steria",
        en: "Sopra Steria",
        fr: "Sopra Steria"
      },
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
      name: {
        es: "Azimut Electronics",
        en: "Azimut Electronics",
        fr: "Azimut Electronics"
      },
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
        }, {
          es: "Proyecto basado en frontend AngularJs, con conexiones REST a backend Spring Boot con con conectividad MongoDB y comunicaciones REST.",
          en: "Project based on AngularJs frontend and Spring Boot backend with MongoDB connectivity and REST communications.",
          fr: "Projet basé sur le frontend AngularJs et le backend Spring Boot avec connectivité MongoDB et communications REST.",
        }, {
          es: "Responsable de aplicación basada en framework NextJs con React 18, javascript y backend NodeJs con squelize, librería de drivers GraphQL y persistencia de db MySql.",
          en: "Responsible for application based on NextJs framework with React 18, javascript and NodeJs backend with squelize, GraphQL driver library and MySql db persistence.",
          fr: "Responsable de l'application basée sur le framework NextJs avec React 18, javascript et backend NodeJs avec squelize, bibliothèque de pilotes GraphQL et persistance de la base de données MySql.",
        }, {
          es: "Responsable de aplicación basada en framework NextJs con React 18, javascript y backend NodeJs con squelize, librería de drivers GraphQL y persistencia de db MySql.",
          en: "Responsible for application based on NextJs framework with React 18, javascript and NodeJs backend with squelize, GraphQL driver library and MySql db persistence.",
          fr: "Responsable de l'application basée sur le framework NextJs avec React 18, javascript et backend NodeJs avec squelize, bibliothèque de pilotes GraphQL et persistance de la base de données MySql.",
        },
      ],
      dateFrom: new Date("2022-05-16"),
      dateTo: null,
      tags: ["Full stack", "Springboot", "Spring security", "Java", "AngularJs", "NextJs", "React 18", "REST", "MongoDb", "GraphQL", "nodejs"],
    }
  ] as Experience[]
}

const certificatesSection = {
  key: "certificates-section",
  name: {
    es: "Certificados",
    en: "Certificates",
    fr: "Certificats"
  },
  type: "simple-carousel",
  enteringEffect: "",
  neonMenuColor: "rgba(0, 255, 255, 1)",
  values: [
    {
      key: "React-Course-1",
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
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/react-cero-experto/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://bardcrack.com/assets/img/courses/ZBLg0s9R1A/0223b00983822436edfa72b97c9baad1aba07504.png",
      date: new Date("2022-10-08"),
      tags: ["React", "Hooks", "Events", "Stateless", "Javascript", "Typescript", "Frontend"]
    }, {
      key: "Python-Course-1",
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
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/100-days-of-code/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-2d01021e-af92-434c-a4a3-7fc7b33976c9/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://www.feuga.es/wp-content/uploads/2023/01/python-curso-1024x576.jpg",
      date: new Date("2023-11-25"),
      tags: ["Python", "Flask", "BeautifulSoup", "Backend", "pip"]
    }, {
      key: "Nextjs-Course-1",
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
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/nextjs-fh/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-1ede8757-aa0d-406f-813a-8eaa400532c5/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://cdn.filestackcontent.com/8MbtJ4hTAaOk3KPcptqZ",
      date: new Date("2023-06-27"),
      tags: ["React", "Hooks", "Events", "Stateless", "Javascript", "Frontend"]
    }, {
      key: "SpringBoot-Course-1",
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
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/?couponCode=OF53124",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-b9804372-ae88-471e-8835-01402fa840f1/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://broadwayinfosys.com/blog/wp-content/uploads/2017/04/Spring-Framework.png",
      date: new Date("2022-06-27"),
      tags: ["React", "Hooks", "Events", "Stateless", "Javascript", "Frontend"]
    }, {
      key: "EthicalHacking-Course-1",
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
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-b9804372-ae88-471e-8835-01402fa840f1/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://img-c.udemycdn.com/course/480x270/3291970_afb5_2.jpg",
      date: new Date("2024-03-30"),
      tags: ["Nmap", "Kali", "Linux", "Sherlock", "fatrat", "hacking"]
    }, {
      key: "Mongodb-Course-1",
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
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-b990e98a-9b76-44b1-8e3e-43b68213725c/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://www.openlogic.com/sites/default/files/image/2021-06/image-blog-openlogic-what-is-mongodb.png",
      date: new Date("2022-06-13"),
      tags: ["MongoDb", "Atlas", "Robo3T", "Database", "Javascript"]
    }, {
      key: "React-Course-1",
      name: {
        es: "La guía completa para desarrolladorar apps de Android",
        en: "The Complete Developer's Guide for Android apps",
        fr: "Le guide complet du développeur por Android"
      },
      description: {
        es: "Aprendí a programar y publicar apps y juegos para Android, utilizando Material Design, bases de datos, GPS y hardware del dispositivo. Con Android Studio, corrección de errores y el control de versiones con Git y GitHub, además de crear apps multilingües.",
        en: "I learned how to program and publish apps and games for Android, using Material Design, databases, GPS and device hardware. With Android Studio, bug fixes and version control with Git and GitHub, as well as creating multilingual apps.",
        fr: "J'ai appris à programmer et à publier des applications et des jeux pour Android, en utilisant Material Design, des bases de données, le GPS et le matériel de l'appareil. Avec Android Studio, corrections de bugs et contrôle de version avec Git et GitHub, ainsi que création d'applications multilingues."
      },
      buttons: [
        {
          name: "Course",
          url: "https://www.udemy.com/course/programacion-de-android-desde-cero/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_course"
        },
        {
          name: "Certificate",
          url: "https://www.udemy.com/certificate/UC-41d264cf-7753-4311-ac23-9440056aa0bf/",
          css: "btn btn-xs btn-primary",
          label: "_go_to_certificate"
        }
      ],
      img: "https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2022/09/02/android.jpeg",
      date: new Date("2020-08-24"),
      tags: ["Java", "Android", "IntellyJ", "Studio", "Mono", "Play", "Google", "Material", "Design"]
    }
  ] as Certificate[]
}

const projectsSection = {
  key: "projects-section",
  type: "tags-carousel",
  name: {
    es: "Proyectos",
    en: "Projects",
    fr: "Projets"
  },
  enteringEffect: "",
  neonMenuColor: "rgba(255, 255, 0, 1)",
  values: [
    {
      key: "PizzApp",
      name: {
        es: "PizzApp",
        en: "PizzApp",
        fr: "PizzApp"
      },
      purpose: {
        es: "A modo de reto y para poder tener una aplicación Fullstack cubriendo todo lo posible el sector, decidí realizar la programación completa de una aplicación de cero y con el objetivo de abarcar todos los sectores que cubre un programador Fullstack, con ese objetivo construí PizzApp.",
        en: "As a challenge and in order to have a Fullstack application covering the sector as much as possible, I decided to carry out the complete programming of an application from scratch and with the objective of covering all the sectors that a Fullstack programmer covers, with that objective I've built PizzApp.",
        fr: "Comme défi et afin d'avoir une application Fullstack couvrant le plus possible le secteur, j'ai décidé de réaliser la programmation complète d'une application à partir de zéro et dans le but de couvrir tous les secteurs que couvre un programmeur Fullstack, avec cet objectif J'ai construit PizzaApp."
      },
      description: {
        es: "Esta aplicación simula el funcionamiento entero de una pizzería, contiene una pagina web para la compra de pizza y una pagina de administración para gestionar los pedidos, con un front en Angular 17, backend basado en microservicios con dos servicios con SpringBoot 3 y uno con Node JS con Express, base de datos en mongoDb para los pedidos y en Redis para el stock de la tienda y comunicación entre microservicios, este proyecto pretende mostrar todos los sectores que domino como desarrollador Fullstack.",
        en: "This application simulates the entire operation of a pizzeria, it contains a web page for purchasing pizza and an administration page to manage orders, with a front in Angular 17, a backend based on microservices with two services with SpringBoot 3 and one with Node JS with Express, database in mongoDb for orders and in Redis for the store stock and communication between microservices, this project aims to show all the sectors that I master as a Fullstack developer.",
        fr: "Cette application simule tout le fonctionnement d'une pizzeria, elle contient une page web pour l'achat de pizza et une page d'administration pour gérer les commandes, avec un front en Angular 17, un backend basé sur des microservices avec deux services avec SpringBoot 3 et un avec Node JS avec Express, base de données en mongoDb pour les commandes et en Redis pour le stock magasin et la communication entre microservices, ce projet a pour objectif de montrer tous les secteurs que je maîtrise en tant que développeur Fullstack."
      },
      stack: ["angular", "json", "nodejs", "java", "springboot", "docker", "mongo", "redis"], 
      github: "https://github.com/flautarian/pizzapp",
      webUrl: ""
    },
    {
      key: "Python-api",
      name: {
        es: "Python-api",
        en: "Python-api",
        fr: "Python-api"
      },
      purpose: {
        es: "Con el objetivo de tener una fuente privada de persistencia y mejorar mi conocimiento de Python, la API multipropósito es un proyecto construido con Python, utilizando varias bibliotecas y marcos para diferentes funcionalidades para generar una API segura donde puedo persistir información y usarla. como API para mis otros proyectos.",
        en: "With the aim of having a private source of persistence and to improve my python knowledge, the Multi-purpose API is a project built with Python, using various libraries and frameworks for different functionalities to generate a secure API where I can persist information and use it as an API for my other projects.",
        fr: "Dans le but d'avoir une source privée de persistance et d'améliorer mes connaissances en python, l'API polyvalente est un projet construit avec Python, utilisant diverses bibliothèques et frameworks pour différentes fonctionnalités afin de générer une API sécurisée où je peux conserver les informations et les utiliser. comme API pour mes autres projets."
      },
      description: {
        es: "Una API versátil creada con Python, que integra Flask, PyMongo, Gunicorn y más para diversas funcionalidades y una implementación perfecta en Render. Este proyecto admite desarrollo web, interacciones de bases de datos, arquitectura sin servidor, generación de UUID, CORS y autenticación JWT. Para fines de claves y privacidad, el proyecto del repositorio de github actualmente es privado.",
        en: "A versatile API built with Python, integrating Flask, PyMongo, Gunicorn, and more for diverse functionalities and seamless deployment on render.com. This project supports web development, database interactions, serverless architecture, UUID generation, CORS, and JWT authentication. For keys and privacity pourposes, the github repository project is currently on private.",
        fr: "Une API polyvalente construite avec Python, intégrant Flask, PyMongo, Gunicorn et bien plus encore pour diverses fonctionnalités et un déploiement transparent sur render.com. Ce projet prend en charge le développement Web, les interactions de bases de données, l'architecture sans serveur, la génération d'UUID, l'authentification CORS et JWT. Pour des raisons de clés et de confidentialité, le projet de référentiel github est actuellement privé."
      },
      stack: ["python", "flask", "mongo", "gunicorn", "render"],
    },
    {
      key: "Python-socket-app",
      name: {
        es: "Python-socket-app",
        en: "Python-socket-app",
        fr: "Python-socket-app"
      },
      purpose: {
        es: "Como objetivo principal de tener un recurso en línea para comunicarme con varios clientes e intercambiar mensajes, tuve que crear una instancia de una API de socket con python para hacerlo posible y utilizarlo en futuros proyectos.",
        en: "As the main objective of having an online resource to communicate with various clients and message exchange, I had to create an instance of a socket API with python to make it possible and to use it in future projects.",
        fr: "Comme objectif principal d'avoir une ressource en ligne pour communiquer avec divers clients et échanger des messages, j'ai dû créer une instance d'une API socket avec python pour rendre cela possible et l'utiliser dans de futurs projets."
      },
      description: {
        es: "Una API versátil creada con Python, que integra Flask, PyMongo, Gunicorn y más para diversas funcionalidades y una implementación perfecta en Render. Este proyecto admite desarrollo web, interacciones de bases de datos, arquitectura sin servidor, generación de UUID, CORS y autenticación JWT. Para fines de claves y privacidad, el proyecto del repositorio de github actualmente es privado.",
        en: "A versatile API built with Python, integrating Flask, PyMongo, Gunicorn, and more for diverse functionalities and seamless deployment on render.com. This project supports web development, database interactions, serverless architecture, UUID generation, CORS, and JWT authentication. For keys and privacity pourposes, the github repository project is currently on private.",
        fr: "Une API polyvalente construite avec Python, intégrant Flask, PyMongo, Gunicorn et bien plus encore pour diverses fonctionnalités et un déploiement transparent sur render.com. Ce projet prend en charge le développement Web, les interactions de bases de données, l'architecture sans serveur, la génération d'UUID, l'authentification CORS et JWT. Pour des raisons de clés et de confidentialité, le projet de référentiel github est actuellement privé."
      },
      stack: ["python", "flask", "mongo", "gunicorn", "render"],
    },
    {
      key: "Copy-thon-app",
      name: {
        es: "Copy-thon-app",
        en: "Copy-thon-app",
        fr: "Copy-thon-app"
      },
      purpose: {
        es: "Con el propósito de mejorar mis habilidades con Python y automatizar tareas repetidas, he creado esta aplicación que es capaz de registrar las acciones del mouse y del teclado, guardarlas en archivos json y repetirlas cuando sea necesario. Limitaciones, la limitación de esta aplicación es que la aplicación no controla la ubicación de los elementos, solo los eventos del controlador.",
        en: "With the purpose of improving my python skills and to automatize repeated tasks, I've created this app that is capable of records mouse and keyboard actions, save them into json files and repeat them whenever are needed. Limitations, the limitation of this app is the location of elements is not being controlled by the app, only the controller events.",
        fr: "Dans le but d'améliorer mes compétences en python et d'automatiser les tâches répétées, j'ai créé cette application capable d'enregistrer les actions de la souris et du clavier, de les enregistrer dans des fichiers json et de les répéter chaque fois que nécessaire. Limitations, la limitation de cette application est que l'emplacement des éléments n'est pas contrôlé par l'application, uniquement par les événements du contrôleur."
      },
      description: {
        es: "Aplicación Python simple creada para registrar, guardar y reproducir los movimientos del mouse y el teclado capturados por un usuario y almacenados en formato json. Esta aplicación fue creada para ayudar a los usuarios a realizar tareas mecánicas y repetitivas, permitiéndoles capturar los movimientos necesarios del teclado y el mouse para reproducirlos una vez o en bucle si es necesario.",
        en: "Simple python app created to record, save and replay mouse and keyboard movements captured from a user and stored in json format. This app was created to help users to do mechanic and repetitive tasks, let them able to capture the necessary movements of the keyboard and mouse to reproduce them one time or in a loop if case needed.",
        fr: "Application python simple créée pour enregistrer, sauvegarder et rejouer les mouvements de la souris et du clavier capturés par un utilisateur et stockés au format json. Cette application a été créée pour aider les utilisateurs à effectuer des tâches mécaniques et répétitives, leur permettant de capturer les mouvements nécessaires du clavier et de la souris pour les reproduire une fois ou en boucle si nécessaire."
      },
      stack: ["python", "tkinter", "json", "i18n"],
      github: "https://github.com/flautarian/copy-thon-app"
    },
    {
      key: "Trello-App",
      name: {
        es: "Trello-App",
        en: "Trello-App",
        fr: "Trello-App"
      },
      purpose: {
        es: "Para mejorar mi conocimiento de React, decidí crear un proyecto que pudiera tener múltiples lados de una aplicación web completa hecha con React, como resultado creé este SPA con typescript que combina el sistema trello drag'n drop, seguridad de autenticación contra el servidor, conexión backend, persistencia. y conexión de sincronicidad de socket.",
        en: "To improve my React knowledge, I decided to create a project that could have multiple sides of a complete webapp made with React, as a result I created this SPA with typescript, that combines trello drag'n drop system, auth security against server, backend connection, data persistance and socket synchronicity connection.",
        fr: "Pour améliorer mes connaissances sur React, j'ai décidé de créer un projet qui pourrait avoir plusieurs faces d'une application Web complète réalisée avec React. J'ai donc créé ce SPA qui combine le système glisser-déposer Trello, la sécurité d'authentification contre le serveur, la connexion backend, la persistance. et connexion de synchronisation de prise."
      },
      description: {
        es: "Aplicación React TypeScript diseñada para facilitar la gestión de tareas, inspirada en la funcionalidad de Trello y diseñada para practicar los conceptos y el flujo de trabajo del marco de reacción.",
        en: "React TypeScript application designed to facilitate task management, inspired by Trello's functionality and made to practice the react framework concepts and workflow.",
        fr: "Application React TypeScript conçue pour faciliter la gestion des tâches, inspirée des fonctionnalités de Trello et conçue pour mettre en pratique les concepts et le flux de travail du framework React."
      },
      stack: ["react", "i18n", "json", "typescript", "javascript", "rest"],
      github: "https://github.com/flautarian/trello-app",
      webUrl: "https://trello-app-giacconidev.vercel.app/"
    },
    {
      key: "Portfolio-App",
      name: {
        es: "Portfolio-App",
        en: "Portfolio-App",
        fr: "Portfolio-App"
      },
      purpose: {
        es: "Para mejorar mi conocimiento de React, decidí crear algo para compartir con la comunidad de la misma manera que podría obtener ganancias como profesional, por esta razón, creé esta aplicación web basada en React, todo desde cero, esta aplicación web se puede usar. como un portafolio personal para alguien que busca un portafolio profesional, dinámico y bien hecho, en el que todos los datos se toman de un único archivo json que se puede personalizar fácilmente.",
        en: "To improve my React knowledge, I decided to create something to share with the community the same way I could take proffit as a professional, for this reason, I've created this react based webapp, build all from scratch, this webapp can be used as a personal portfolio for someone that is looking for a professional, dynamic and well made portfolio, which all data is taken from a single json file that can be customized easily.",
        fr: "Pour améliorer mes connaissances sur React, j'ai décidé de créer quelque chose à partager avec la communauté de la même manière que je pourrais en tirer profit en tant que professionnel, pour cette raison, j'ai créé cette application Web basée sur React, construite à partir de zéro, cette application Web peut être utilisée comme portfolio personnel pour quelqu'un qui recherche un portfolio professionnel, dynamique et bien conçu, dont toutes les données sont extraites d'un seul fichier json qui peut être facilement personnalisé."
      },
      description: {
        es: "Aplicación React TypeScript diseñada para ser un portafolio elegante y dinámico, con múltiples idiomas y todos los datos personales fácilmente personalizables, para adaptar la información de cada profesional a mostrar en su página.",
        en: "React TypeScript application designed to be a elegant and dynamic portfolio, with multiple languages and easy customizable all personal data, to adapt each professional information to show in his/her page.",
        fr: "Application React TypeScript conçue pour être un portfolio élégant et dynamique, avec plusieurs langues et toutes les données personnelles facilement personnalisables, pour adapter chaque information professionnelle à afficher sur sa page."
      },
      stack: ["react", "i18n", "json", "typescript", "javascript"],
      github: "https://github.com/flautarian/giacconi-dev-portfolio",
      webUrl: ""
    },
    {
      key: "Fullstack-init-App",
      name: {
        es: "Fullstack-init-App",
        en: "Fullstack-init-App",
        fr: "Fullstack-init-App"
      },
      purpose: {
        es: "Para tener un stack de desarrollo fácil y privado para crear nuevos proyectos, decidí crear este proyecto, para tener un impulso desde una base y permitirme concentrarme en las características con las que quería investigar.",
        en: "To have an easy and private development stack to create new projects, I decided to create this project, to have a kickstart from a base and allow me to focus on the features that I wanted to research with.",
        fr: "Pour disposer d'une pile de développement simple et privée pour créer de nouveaux projets, j'ai décidé de créer ce projet, de démarrer à partir d'une base et de me permettre de me concentrer sur les fonctionnalités avec lesquelles je souhaitais rechercher."
      },
      description: {
        es: "Esta aplicación involucra un entorno de trabajo full stack listo para iniciar implementaciones, basado en una pila dockerizada, con Angular 17 en el frontend y Springboot 3 como backend.",
        en: "This application involves a working full stack environment ready to start implementations, based on a dockerized stack, with Angular 17 on frontend and Springboot 3 as backend.",
        fr: "Cette application implique un environnement full stack fonctionnel prêt à démarrer les implémentations, basé sur une pile dockerisée, avec Angular 17 en frontend et Springboot 3 en backend."
      },
      stack: ["angular", "json", "typescript", "java", "springboot", "docker"],
      github: "https://github.com/flautarian/giacconi-dev-portfolio",
      webUrl: ""
    },
    {
      key: "Kafka-microservice-app",
      name: {
        es: "Kafka-microservice-app",
        en: "Kafka-microservice-app",
        fr: "Kafka-microservice-app"
      },
      purpose: {
        es: "He creado este proyecto para tener un backend personal con un sistema de microservicio claro y funcional realizado con trampolín con Java, con Apache Kafka para producir y consumir eventos y un entorno de jerarquía de pedidos de productos, este proyecto es perfecto para tener una gran inicialización básica y comprender las ventajas de los microservicios y sus mecanismos de mensajes.",
        en: "I've created this project to have a personal kickstart backend with a clear and functional microservice system made with Springboot with Java, with Apache Kafka to produce and consume events and a products order hierarchy environment, this project is perfect to have a great basic initialization and to understand the advantages of microservices, and it's message mechanisms.",
        fr: "J'ai créé ce projet pour avoir un backend personnel avec un système de microservice clair et fonctionnel fait avec Springboot avec Java, avec Apache Kafka pour produire et consommer des événements et un environnement de hiérarchie de commande de products, ce projet est parfait pour avoir une grande initialisation de base de base et comprendre les avantages des microservices, et ses mécanismes de message."
      },
      description: {
        es: "Proyecto creado para desarrollar un caso simple de comunicación que Springboot y Kafka hacen posible para un proyecto de backend. Al emular una empresa de productos y sus etapas de pedido, esta aplicación se ajusta perfectamente a el backend de ese tipo de negocio.",
        en: "Project created to develop a simple case of communication that springboot and kafka make possible for a backend project. Emulating a products enterprise, and its order stages, this application fits perfectly as the backend of that kind of business.",
        fr: "Projet créé pour développer un cas simple de communication que Springboot et Kafka permettent un projet backend. Emulant une entreprise de products et ses étapes de commande, cette application s'adapte parfaitement au backend de ce type d'entreprise."
      },
      stack: ["angular", "json", "java", "springboot"],
      github: "https://github.com/flautarian/kafka-springboot-microservice-comm",
      webUrl: ""
    },
    {
      key: "lightPrice-app",
      name: {
        es: "lightPrice-app",
        en: "lightPrice-app",
        fr: "lightPrice-app"
      },
      purpose: {
        es: "Esta aplicación fue creada con un objetivo simple. Necesitaba saber el costo de electricidad en constante cambio todos los días, así que vi la oportunidad de mejorar mi conocimiento al mismo tiempo, y creé una mini aplicación que obtiene los datos actuales de una API de la empresa eléctrica bien conocida, y se muestra en el Página principal en forma de gráfico.",
        en: "This app was created with a simple objective. I needed to know the constantly changing electricity cost every day, so I saw the opportunity to improve my knowledge at the same time, and I created a mini app that gets the current data of a well known electric enterprise API, and it shows on the main page in chart form.",
        fr: "Cette application a été créée avec un objectif simple. J'avais besoin de connaître le coût d'électricité en constante évolution chaque jour, alors j'ai vu l'opportunité d'améliorer mes connaissances en même temps, et j'ai créé une mini application qui obtient les données actuelles d'une API Electric Enterprise bien connue, et elle se manifeste sur le Page principale sous forme de graphique."
      },
      description: {
        es: "Project Created to Solve A Simple Necessity and, at the same time, to Increase the Knowledge of React and Nextjs.",
        en: "Project created to solve a simple necessity and, at the same time, to increase the knowledge of react and nextjs.",
        fr: "Projet créé pour résoudre une simple nécessité et, en même temps, pour augmenter les connaissances de React et NextJS."
      },
      stack: ["nextjs", "json", "react"],
      github: "https://github.com/flautarian/precioluzapp",
      webUrl: "https://precioluzapp.vercel.app/"
    }
  ] as Project[]
}

const summarySection = {
  key: "summary-section",
  type: "summary",
  name: {
    es: "Resumen",
    en: "Summary",
    fr: "Résumé"
  },
  enteringEffect: "confetti",
  neonMenuColor: "rgba(0, 255, 0, 1)",
  values: []
}

const exampleResume: Resume = {
  name: "Facundo",
  surnames: "Giacconi Fernandez",
  job: {
    es: "Programador Fullstack",
    en: "Fullstack developer",
    fr: "Développeur fullstack"
  },
  location: "Girona, Spain",
  avatar: "./img/avatar.jpeg",
  aboutMe: {
    es: "Deasrrollador Full stack dedicado al desarrollo de aplicaciones en multiples tecnologias.\nCurioso y autodidacta por naturaleza propia y apasioado de la tecnología y la investigación.",
    en: "Full stack developer dedicated to the development of applications in multiple technologies.\nCurious and self-taught by nature and passionate about technology and research.",
    fr: "Développeur full stack dédié au développement d'applications dans de multiples technologies.\nCurieux et autodidacte de nature et passionné de technologie et de recherche.",
  },
  birthDate: new Date("2022-03-25"),
  linkedIn: "https://www.linkedin.com/in/facundo-giacconi-fernandez-a77989a3",
  github: "https://github.com/flautarian",
  email: "fgiacconi.dev@gmail.com",
  gitlab: "",
  docker: "",
  cv: {
    es: "https://github.com/flautarian/resume-public/blob/main/CV_Facundo_Giacconi_ES.pdf",
    en: "https://github.com/flautarian/resume-public/blob/main/CV_Facundo_Giacconi_EN.pdf",
    fr: "https://github.com/flautarian/resume-public/blob/main/CV_Facundo_Giacconi_EN.pdf"
  },
  sections: [
    experienceSection,
    projectsSection,
    certificatesSection,
    summarySection
  ],
};

export default exampleResume;
