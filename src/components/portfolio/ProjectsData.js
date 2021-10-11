import SHORTLY from "../../assets/projects/shortly/shortly-preview.png";
import SHORTLYD from "../../assets/projects/shortly/shortlyD.png";
import SHORTLYM from "../../assets/projects/shortly/shortlyM.png";
import GALLERIA from "../../assets/projects/galleria/galleria-preview.png";
import GALLERIAD from "../../assets/projects/galleria/galleriaD.png";
import GALLERIAM from "../../assets/projects/galleria/galleriaM.png";
import PHOTOSNAP from "../../assets/projects/photosnap/photosnap-preview.png";
import PHOTOSNAPLOGO from "../../assets/projects/photosnap/logo.svg";
import FRONTENDMENTOR from "../../assets/projects/shortly/fem-logo.png";
import SANFELIU from "../../assets/projects/sanfeliu/sanfeliu-preview.png";
import SANFELIULOGO from "../../assets/projects/sanfeliu/sanfeliu-logo.png";
import YUMIPREZ from "../../assets/projects/yumiPro/yumi-preview.png";
import YUMILOGO from "../../assets/projects/yumiPro/yumi-logo.png";
import AWESOMEPREZ from "../../assets/projects/awesome/awesomeTable-preview.png";
import NEOBSERVER from "../../assets/projects/neobserver/neobserver-preview.png";
import NEOBSERVERLOGO from "../../assets/projects/neobserver/neobserver-logo.png";
import BOUSSOLE from "../../assets/projects/bousole/boussole-preview.png";
import BOUSSOLELOGO from "../../assets/projects/bousole/boussole-logo.png";
import GAME from "../../assets/projects/deathQuizz/deathQuizz-preview.png";
import GAMELOGO from "../../assets/projects/deathQuizz/deathQuizz-logo.png";
import ALLERGEEK from "../../assets/projects/allergeek/allergeek-preview.png";
import ALLERGEEKLOGO from "../../assets/projects/allergeek/allergeek-logo.png";

export const tags = [
  "site vitrine",
  "e-commerce",
  "click & collect",
  "application web/mobile",
  "Restauration",
  "conception",
  "géolocalisation",
  "API",
  "dévelopement back-end",
  "dévelopement front-end",
  "audio/video",
];

export const projects = [
  {
    id: 0,
    url: SHORTLY,
    logo: FRONTENDMENTOR,
    width: "28%",
    title: "SHORTLY",
    prestation: "Developpement front-end",
    description: [
      "Intégration de l'API shrtcode pour créer des URL raccourcies.",
      "L'application permet de raccourcir toute URL valide.",
      "Conserve l'historique des liens raccourcis même après avoir actualisé le navigateur.",
      "Responsive design: mise en page optimale en fonction de la taille de l'écran.",
    ],
    client: "Frontend Mentor ",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "APIrest" },
      { label: "Javascript" },
      { label: "Leaflet" },
    ],
    date: "novembre 2020",
    githubLink: "https://github.com/AnnaMarandola/shorten_links",
    visitLink: "",
    gallery: [
      { img: SHORTLY, subtitle: "Header" },
      { img: SHORTLYD, subtitle: "version laptop" },
      { img: SHORTLYM, subtitle: "version mobile" },
    ],
    draft: false,
    tag: "API",
  },
  {
    id: 1,
    url: GALLERIA,
    logo: FRONTENDMENTOR,
    width: "28%",
    title: "Galleria",
    prestation: "Developpement front-end",
    description: [
      "Diaporama de gallerie d'art",
      "Le site permet de naviguer dans le diaporama et de visualiser chaque tableau dans une lighbox.",
      "Site optimisé pour toutes les tailles d'écran",
    ],
    client: "Challenge frontend Mentor",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Javascript" },
    ],
    date: "avril 2021",
    githubLink: "https://github.com/AnnaMarandola/Galleria",
    visitLink: "https://galleria-by-anna-m.netlify.app/",
    gallery: [
      { img: GALLERIA, subtitle: "" },
      { img: GALLERIAD, subtitle: "version desktop" },
      { img: GALLERIAM, subtitle: "version mobile et tablette" },
    ],
    draft: false,
    tag: "site vitrine",
  },
  {
    id: 2,
    url: SANFELIU,
    logo: SANFELIULOGO,
    width: "28%",
    title: "Restaurant le San feliù",
    prestation: "Developpement du site vitrine",
    description: [
      "Site vitrine responsive",
      "Présentation du concept de restauration et de l'équipe",
      "Intégration du menu",
      "section info et accès avec localisation google map",
      "section contact et reservation",
      "section 'vin du mois'",
    ],
    client: "restaurant fictif",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Styled components" },
      { label: "Javascript" },
      { label: "Leaflet" },
    ],
    date: "novembre 2019",
    githubLink: "https://github.com/AnnaMarandola/resto1",
    visitLink: "https://le-san-feliu-bar-restaurant.netlify.app/",
    gallery: [{ img: SANFELIU, subtitle: "Header" }],
    draft: false,
    tag: "Restauration",
  },
  {
    id: 3,
    url: YUMIPREZ,
    title: "Application web/mobile Yumi Pro",
    logo: YUMILOGO,
    width: "28%",
    prestation: "Conception et développement full stack",
    description: [
      "Application de création et de gestion de menu en ligne",
      "Création d'une page web dédiée au restaurant",
      "Design personnalisable selon la charte graphique de l'établissement",
      "Mise en avant des plats avec photos, descriptions, allergènes, traductions multilingue",
      "Interface de mise à jour intuitive",
      "Authentification sécurisée",
      "Génération d'un QR code permettant de consulter la page",
      "formulaire de contact",
    ],
    client: "Yumi pro",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Material-ui" },
      { label: "Javascript" },
      { label: "Redux" },
      { label: "Node.js" },
      { label: "Firebase" },
    ],
    date: "mars 2021",
    githubLink: "",
    visitLink: "https://qrmenu-64802.web.app/",
    gallery: [
      {
        img: YUMIPREZ,
        subtitle: "interface de gestion de contenu dynamique et intuitive",
      },
    ],
    draft: false,
    tag: "application web/mobile",
  },
  {
    id: 4,
    url: PHOTOSNAP,
    logo: PHOTOSNAPLOGO,
    width: "28%",
    title: "",
    prestation: "Developpement du site vitrine",
    description: [
      "Site marketing multi-page d'une application de partage de photos",
      "Mise en page optimale en fonction de la taille de l'écran",
      "Elements dynamiques au survol",
      "code optimisé pour le référencement naturel",
    ],
    client: "Frontend Mentor Challenge",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Javascript" },
    ],
    date: "juin 2021",
    githubLink: "https://github.com/AnnaMarandola/photosnap_website",
    visitLink: "https://photosnap-by-anna-marandola.netlify.app/",
    gallery: [{ img: PHOTOSNAP, subtitle: "Header" }],
    draft: false,
    tag: "dévelopement front-end",
  },
  {
    id: 5,
    url: NEOBSERVER,
    logo: NEOBSERVERLOGO,
    title: "Neobserver",
    width: "28%",
    prestation: "Developpement front-end",
    client: "Wild Code School",
    date: "octobre 2019",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Bootstrap" },
      { label: "Javascript" },
      { label: "API" },
      { label: "Scrum" },
    ],
    gallery: [{ img: NEOBSERVER, subtitle: "Header" }],
    draft: true,
    githubLink:
      "https://github.com/WildCodeSchool/toulouse-0919-js-p2-neobserver",
    tag: "dévelopement back-end",
    description: [
      "Site dédié à l'observation des astéroides",
      "Utilisation des API de la NASA",
      "Fil d'actualité sur le thème de l'espace (une nouvelle publication tous les jours)",
      "Observation du passage des astéroides en fonction des leur tailles, distance de la Terre, date et dangerosité (filtres de recherche)",
      "Projet d'école encadré par la Wild Code School",
      "Conception et dévelopement en équipe de 4, en 3 semaines",
    ],
  },
  {
    id: 6,
    width: "28%",
    url: BOUSSOLE,
    logo: BOUSSOLELOGO,
    title: "Boussole pro",
    prestation: "Developpement full stack",
    description: [
      "Application web mobile destinée aux entreprises et aux managers.",
      "L'application permet de passer un test de personalité en ligne et de collecter les résultats sous la forme de cartes thématiques.",
      "Cartographie d'équipe en fonction des résultats des membres.",
      "Contenu d'animation d'équipe personnalisé.",
      "Projet de fin d'études: réalisation d'un prototype en équipe de 4 développeurs pendant 8 semaines",
      "Méthodologie scrum",
      "Stage en remote de 4 mois",
    ],
    client: "Wake up",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Material-ui" },
      { label: "Javascript" },
      { label: "Redux" },
      { label: "Node.js" },
      { label: "Firebase" },
    ],
    visitLink: "https://boussole.io/",
    date: "dec 2019 - mai 2020",
    gallery: [{ img: BOUSSOLE, subtitle: "Header" }],
    draft: true,
    tag: "application web/mobile",
  },
  {
    id: 7,
    width: "28%",
    url: ALLERGEEK,
    logo: ALLERGEEKLOGO,
    title: "Allergeek",
    prestation: "Developpement front end",
    client: "project personnel",
    description: [
      "Application de recherche de recettes de cuisine adaptées aux allergies alimentaires.",
      "Utilisation des API Edamam : Nutrition Analysis API et Recipe Search API",
      "Mise en page adaptée à toutes les tailles d'écran",
    ],
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Material-ui" },
      { label: "Javascript" },
    ],
    date: "fev 2020 - mai 2020",
    gallery: [{ img: ALLERGEEK, subtitle: "Header" }],
    draft: true,
    visitLink: "https://allergeek-alpha.netlify.app/",
    githubLink: "https://github.com/AnnaMarandola/cooking-app",
    tag: "application web/mobile",
  },
  {
    id: 8,
    url: AWESOMEPREZ,
    title: "Visualisation de fichiers clients",
    // logo: AWESOMEPREZ,
    prestation: "Developpement full stack",
    client: "YWS",
    description: [
      "Outil de visualisation d'un fichier clients.",
      "Carte dynamique interactive.",
      "Nombreux filtres de recherche et options de tri.",
      "Fonctionnalités de mailing.",
    ],

    stack: [
      { label: "Google cloud" },
      { label: "APIrest" },
      { label: "SQL" },
      { label: "Google App" },
      { label: "Javascript" },
      { label: "Node.js" },
    ],
    date: "mars 2021",
    gallery: [
      { img: AWESOMEPREZ, subtitle: "map markers, filtres de rcherche" },
    ],
    draft: false,
    tag: "géolocalisation",
  },
  {
    id: 9,
    url: GAME,
    logo: GAMELOGO,
    title: "Death Quizz",
    width: "28%",
    prestation: "Developpement front-end",
    client: "projet personnel",
    description: [
      "Jeux de quizz multi-thématique",
      "Open Trivia Database",
      "3 niveaux de difficultés",
      "D'après le cours Typescript de Robin Lebhar - Uudemy.",   
    ],
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Redux" },
      { label: "Typescript" },
      { label: "API" },
    ],
    githubLink: "https://github.com/AnnaMarandola/quiz_React_Redux_TypeScript.git",
    gallery: [{ img: GAME, subtitle: "Header" }],
    draft: true,
    tag: "e-commerce",
  },
];
