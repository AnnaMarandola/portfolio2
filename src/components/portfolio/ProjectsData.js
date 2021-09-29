import SHORTLY from "../../assets/projects/shortly/shortly-preview.png";
import GALLERIA from "../../assets/projects/galleria/galleria-preview.png";
import PHOTOSNAP from "../../assets/projects/photosnap/photosnap-preview.png";
import SANFELIU from "../../assets/projects/sanfeliu/SanFeliu-preview.png";
import YUMIPREZ from "../../assets/projects/yumiPro/yumi-preview.png";
import AWESOMEPREZ from "../../assets/projects/awesome/awesomeTable-preview.png";
import NEOBSERVER from "../../assets/projects/neobserver/neobserver-preview.png";
import BOUSSOLE from "../../assets/projects/bousole/boussole-preview.png";
import GAME from "../../assets/projects/deathQuizz/deathQuizz-preview.png";
import ALLERGEEK  from "../../assets/projects/allergeek/allergeek-preview.png";

export const tags =  [
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
    logo: SHORTLY,
    width: "28%",
    title: "sHORTLY",
    prestation: "Developpement front-end et déploiement",
    description: [
      "Site responsive",
      "présentation du concept de restauration et de l'équipe",
      "intégration du menu",
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
    date: "novembre 2020",
    githubLink: "",
    visitLink: "https://le-san-feliu-bar-restaurant.netlify.app/",
    gallery: [
      { img: SHORTLY, subtitle: "Header" },
    ],
    draft: false,
    tag: "API"
  },
  {
    id: 1,
    url: GALLERIA,
    logo: GALLERIA,
    width: "28%",
    title: "Restaurant le San feliù",
    prestation: "Developpement du site vitrine",
    description: [
      "Site vitrine responsive",
      "présentation du concept de restauration et de l'équipe",
      "intégration du menu",
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
    date: "novembre 2020",
    githubLink: "",
    visitLink: "https://le-san-feliu-bar-restaurant.netlify.app/",
    gallery: [
      { img: GALLERIA, subtitle: "Header" },
    ],
    draft: false,
    tag: "site vitrine",
  },
  {
    id: 2,
    url: SANFELIU,
    logo: SANFELIU,
    width: "28%",
    title: "Restaurant le San feliù",
    prestation: "Developpement du site vitrine",
    description: [
      "Site vitrine responsive",
      "présentation du concept de restauration et de l'équipe",
      "intégration du menu",
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
    date: "novembre 2020",
    githubLink: "",
    visitLink: "https://le-san-feliu-bar-restaurant.netlify.app/",
    gallery: [
      { img: SANFELIU, subtitle: "Header" },
    ],
    draft: false,
    tag: "Restauration"
  },

  {
    id: 3,
    url: YUMIPREZ,
    title: "Application web/mobile Yumi Pro",
    logo: YUMIPREZ,
    width: "28%",
    prestation: "Developpement full stack",
    description: [
      "Application de création et de gestion de menu en ligne",
      "Création d'une page web dédiée au restaurant",
      "Interface de mise à jour intuitive",
      "Authentification sécurisée",
      "Génération d'un QR code permettant de consulter la page",
      "Design personnalisable selon la charte graphique de l'établissement",
      "Mise en avant des plats avec photos, descriptions, allergènes, traductions multilingue",
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
    visitLink: "",
    gallery: [
      { img: YUMIPREZ, subtitle: "interface de gestion de contenu dynamique et intuitive" },
    ],
    draft: false,
    tag: "application web/mobile"
  },
  {
    id: 4,
    url: PHOTOSNAP,
    logo: PHOTOSNAP,
    width: "28%",
    title: "Restaurant le San feliù",
    prestation: "Developpement du site vitrine",
    description: [
      "Site vitrine responsive",
      "présentation du concept de restauration et de l'équipe",
      "intégration du menu",
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
    date: "novembre 2020",
    githubLink: "",
    visitLink: "https://le-san-feliu-bar-restaurant.netlify.app/",
    gallery: [
      { img: PHOTOSNAP, subtitle: "Header" },
    ],
    draft: false,
    tag: "dévelopement front-end",
  },


  {
    id: 5,
    url: NEOBSERVER,
    title: "Blogs - API",
    width: "28%",
    prestation: "Developpement front-end",
    client: "Yumi pro",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Bootstrap" },
      { label: "Javascript" },
      { label: "API" },
    ],
    gallery: [
      { img: NEOBSERVER, subtitle: "Header" },
    ],
    draft: true,
    tag: "dévelopement back-end",

  },

  {
    id: 6,
    width: "28%",
    url: BOUSSOLE,
    title: "application web/mobile",
    prestation: "Developpement full stack",
    client: "Wake up - stage de fin de formation",
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
    date: "fev 2020 - mai 2020",
    gallery: [
      { img: BOUSSOLE, subtitle: "Header" },
    ],
    draft: true,
    tag: "audio/video",
  },
  {
    id: 7,
    width: "28%",
    url: ALLERGEEK,
    title: "application web/mobile",
    prestation: "Developpement full stack",
    client: "Wake up - stage de fin de formation",
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
    date: "fev 2020 - mai 2020",
    gallery: [
      { img: ALLERGEEK, subtitle: "Header" },
    ],
    draft: true,
    tag: "click & collect"
  },

  {
    id: 8,
    url: AWESOMEPREZ,
    title: "Visualisation de fichiers clients",
    logo: AWESOMEPREZ,
    prestation: "Developpement full stack",
    client: "projet personnel",
    stack: [
      { label: "Google cloud" },
      { label: "APIrest"},
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Javascript" },
    ],
    date: "mars 2021",
    gallery: [
      { img: AWESOMEPREZ, subtitle: "map markers, filtres de rcherche" },
    ],
    draft: false,
    tag: "géolocalisation"
  },

  {
    id: 9,
    url: GAME,
    title: "jeux",
    width: "28%",
    prestation: "Developpement front-end",
    client: "projet personnel",
    stack: [
      { label: "React" },
      { label: "HTML5" },
      { label: "CSS3" },
      { label: "Javascript" },
      { label: "Bootstrap" },
    ],
    gallery: [
      { img: GAME, subtitle: "Header" },
    ],
    draft: true,
    tag: "e-commerce"
  },


];