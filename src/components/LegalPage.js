import { withStyles } from "@mui/styles";
import Navbar from "./header/Navbar";
import { Typography } from "@mui/material";
import Footer from "./Footer";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  mainContainer: {
    padding: "10rem 10%",
  },
  title: {
    paddingBottom: "2rem",
  },
  subtitle: {
    padding: "3rem 0 1rem 0",
  },
});

const LegalPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.mainContainer}>
        <Typography variant="h2" className={classes.title}>
          Mentions Légales
        </Typography>

        <Typography variant="h3" className={classes.subtitle}>
          Editeur
        </Typography>
        <Typography variant="body1">
          En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l'économie numérique, il est précisé aux utilisateurs
          du site https://annadevfreelance.fr/ l'identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi :
        </Typography>
        <Typography variant="body1">
          Le présent site est édité par : Marandola Anna, Auto-entreprise
        </Typography>
        <Typography variant="body1">SIRET 9000349515</Typography>
        <Typography variant="body1">
          Domiciliation: 85 boulevard Gabriel Koenigs 31300 Toulouse
        </Typography>
        <Typography variant="body1">
          Responsable de la publication et webmaster: Marandola Anna, joignable
          par email amdevfreelance@gmail.com
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>
          Hébergement
        </Typography>
        <Typography variant="body1">
          Hébergeur: Firebase Hosting, qui est domicilé 188 King ST, San
          Francisco, CA 94107, United States, https://firebase.google.com/{" "}
        </Typography>

        <Typography variant="h3" className={classes.subtitle}>
          Propriété intellectuelle et contrefaçons
        </Typography>
        <Typography variant="body1">
          L’entreprise annadevfreelance.f est propriétaire des droits de
          propriété intellectuelle ou détient les droits d’usage sur tous les
          éléments accessibles sur le site, notamment : les textes, les images,
          les graphismes, le logo, les icônes,…
        </Typography>
        <Typography variant="body1">
          Toute reproduction, représentation, modification, publication,
          adaptation de tout ou partie des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable de l’entreprise annadevfreelance.f.
        </Typography>
        <Typography variant="body1">
          Toute exploitation non autorisée du site ou d’un quelconque élément
          qu’il contient sera considérée comme constitutive d’une contrefaçon et
          poursuivie conformément aux dispositions des articles L.335-2 et
          suivants du Code de Propriété Intellectuelle.
        </Typography>

        <Typography variant="h3" className={classes.subtitle}>
          Liens hypertextes et cookies
        </Typography>
        <Typography variant="body1">
          Le site internet https://annadevfreelance.fr/ possède un système de
          mesure d’audience
        </Typography>
        <Typography variant="body1">
          En application de la directive européenne dite « paquet télécom », les
          internautes doivent être informés et donner leur consentement
          préalablement à l’insertion de traceurs (plus couramment appelés «
          cookies »). Les internautes doivent disposer d’une possibilité de
          choisir de ne pas être tracés lorsqu’ils visitent un site ou utilisent
          une application. Les éditeurs de sites internet ont donc l’obligation
          de solliciter au préalable le consentement des utilisateurs.
        </Typography>
        <Typography variant="body1">
          Le refus d’installation d’un cookie peut entraîner l’impossibilité
          d’accéder à certains services. L’internaute peut toutefois configurer
          son navigateur internet pour refuser l’installation des cookies.
        </Typography>

        <Typography variant="h3" className={classes.subtitle}>Mesure d’audience</Typography>
        <Typography variant="body1">
          Les cookies de mesure d’audience sont de petits fichiers qui
          permettent de connaitre et d’analyser les statistiques de trafic sur
          le site internet : les pages visitées, le nombre de visites, le taux
          de rebond, la provenance des visites,… Les cookies de mesure
          d’audience sont totalement anonymes.
        </Typography>
        <Typography variant="body1">
          Sur ce site, c’est la solution Google Analytics qui est utilisée pour
          mesurer l’audience.
        </Typography>

        <Typography variant="h3" className={classes.subtitle}>
          Gestion des données personnelles
        </Typography>
        <Typography variant="body1">
          Vous pouvez être amené à nous indiquer votre adresse e-mail lorsque
          vous remplissez notre formulaire de contact du site https://annadevfreelance.fr/.
        </Typography>
        <Typography variant="body1">
          En aucun cas, votre adresse e-mail ne sera cédée à des tiers.
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>Liens hypertextes</Typography>
        <Typography variant="body1">
          Ce site internet contient un certain nombre de liens hypertextes vers
          d’autres sites. Cependant, https://annadevfreelance.fr/ n’a pas la
          possibilité de suivre et vérifier le contenu de ces sites, et
          n’assumera en conséquence aucune responsabilité de ce fait.
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>Flux RSS</Typography>
        <Typography variant="body1">
          Les flux RSS sont exclusivement destinés aux visiteurs du site pour
          une utilisation personnelle et ne sauraient en aucun cas servir à
          alimenter d’autres sites, sauf autorisation écrite préalable de
          https://annadevfreelance.fr/.
        </Typography>
      </div>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(LegalPage);
