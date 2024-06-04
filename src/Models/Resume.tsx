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
  img: string;
  tags: Array<string>;
}

export interface Certificate {
  name: Label;
  description: Label;
  url: string;
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
      location: "Lloret de Mar, Spain",
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
      dateFrom: new Date("2012-06-25"),
      dateTo: new Date("2014-08-25"),
      img: "./img/avatars/terramar-tour.png",
      tags: ["Springboot", "Java", "Jsp", "REST", "Sql Server"],
    },
    {
      enterprise: "CodiTramuntana",
      location: "Girona, Spain",
      key: "CodiTramuntana",
      description: {
        es: "Test test test",
        en: "Test test test",
        fr: "Test test test",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
          en: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
          fr: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
        }
      ],
      dateFrom: new Date("2014-08-25"),
      dateTo: new Date("2016-10-25"),
      img: "./img/avatars/terramar-tour.png",
      tags: ["Springboot", "Java", "Jsp", "REST", "Sql Server"],
    },
    {
      enterprise: "HP",
      location: "Girona, Spain",
      key: "HP",
      description: {
        es: "Test test test",
        en: "Test test test",
        fr: "Test test test",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
          en: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
          fr: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
        }
      ],
      dateFrom: new Date("2016-10-25"),
      dateTo: null,
      img: "./img/avatars/terramar-tour.png",
      tags: ["Springboot", "Java", "Jsp", "REST", "Sql Server"],
    },
    {
      enterprise: "HP",
      location: "",
      key: "HP2",
      description: {
        es: "Test test test",
        en: "Test test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test testTest test test",
        fr: "Test test test",
      },
      position: "Full stack developer",
      responsabilities: [
        {
          es: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
          en: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday planDevelop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
          fr: "Develop different solutions and construction of an search engine that involves many russian search engines to allow clients to compare each holiday plan",
        }
      ],
      dateFrom: new Date("2016-10-25"),
      dateTo: null,
      img: "./img/avatars/terramar-tour.png",
      tags: ["Springboot", "Java", "Jsp", "REST", "Sql Server"],
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },{
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },{
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },{
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },{
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },{
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },{
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
    url: "https://www.udemy.com/certificate/UC-fcb467ab-c089-419c-9b6a-afe97f894d14/",
    img: "https://img-b.udemycdn.com/course/240x135/3096364_6113_3.jpg",
    date: new Date("2022-10-08"),
    tags: []
  },],
  projects: [],
};

export default exampleResume;
