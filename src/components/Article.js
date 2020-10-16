import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { defaultClasses } from "../theme";
import uneSonosDev from "../assets/img/articles/uneSonosDev.png";
import diy2 from "../assets/img/articles/diy2.png";
import hackhue from "../assets/img/articles/hackhue.png";
import ghm from "../assets/img/articles/ghm.png";
import diy1 from "../assets/img/articles/diy1.png";
import iftttha from "../assets/img/articles/iftttha.png";
import hassio from "../assets/img/articles/hassio.png";
import tweet from "../assets/img/articles/tweet.png";
import googleConf from "../assets/img/articles/googleConf.png";
import hassioAddonUne from "../assets/img/articles/hassioAddonUne.png";
import uneDialogFlow from "../assets/img/articles/uneDialogFlow.png";
import headerIFTTTGH from "../assets/img/articles/headerIFTTTGH.png";
import gh from "../assets/img/articles/gh.jpg";
import uneActionsAnGoogleIntro from "../assets/img/articles/une-actions-on-google-intro.png";
import ikea from "../assets/img/articles/ikea.jpg";
import sdkHome from "../assets/img/articles/sdkHome.jpg";
import apiha from "../assets/img/articles/apiha.jpeg";
import paris from "../assets/img/articles/paris.jpeg";
import lampe from "../assets/img/articles/lampe.jpeg";
import mqtt from "../assets/img/articles/mqtt.jpeg";
import haMiniature from "../assets/img/articles/haMiniature.jpeg";
import ha3 from "../assets/img/articles/ha3.jpeg";
import coverTrucastuceHa from "../assets/img/articles/cover-trucastuce-ha.jpeg";
import microServ2 from "../assets/img/articles/microServ2.jpg";
import microServ from "../assets/img/articles/microServ.jpg";
import cam from "../assets/img/articles/cam.jpg";
import retro from "../assets/img/articles/retro.jpg";
import awox from "../assets/img/articles/awox.jpg";
import hueMac from "../assets/img/articles/hue-mac.jpg";
import installRpi from "../assets/img/articles/install-rpi.jpg";
import ux from "../assets/img/articles/ux.jpeg";
import ai1 from "../assets/img/articles/AI1.jpeg";
import ai2 from "../assets/img/articles/AI2.jpeg";
import ArticleCard from "./ArticleCard";
import { Button } from "@material-ui/core";

const Articles = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();
  const [maxNumber, setMaxNumber] = useState(8);

  const articles = [
    {
      title: "Introduction to AI",
      lang: "en",
      date: "30 AUGUST 2020",
      description:
        "Machine learning, deep learning, ... When you try to start learning AI there are lot of terms, concepts and methods. It can be complicated to understand what to start with...",
      img: ai2,
      link: "https://medium.com/ai-in-plain-english/introduction-to-the-ai-cdf56cfd3dd2",
      type: "medium",
    },
    {
      title: "Machine learning — Simple Linear Regression in python with sklearn",
      lang: "en",
      date: "24 AUGUST 2020",
      description:
        "On this post I’ll focus on supervised problem with continuous valued input. In other words, I’ll trained an algorithm with a dataset compose of known input and output...",
      img: ai1,
      link: "https://medium.com/ai-in-plain-english/machine-learning-simple-linear-regression-in-python-with-sklearn-8c8f8458acfb",
      type: "medium",
    },
    {
      title: "10 resources to improvement your UX/UI",
      lang: "en",
      date: "23 AUGUST 2020",
      description:
        "Nowadays a good idea is not enough. The UX and UI are at least as important as the content. But how to improve the interaction with your users? ...",
      img: ux,
      link: "https://medium.com/@chapelle.quentin/10-resources-to-improvement-your-ux-ui-8a5570801c05",
      type: "medium",
    },
    {
      title: "Mon objet connecté et Home Assistant",
      lang: "fr",
      date: "15 OCTOBRE 2018",
      description:
        "Vous l’attendiez la voila, la suite de notre série consacrée au DIY. Dans l’épisode précédent, nous avions vu comment mettre en place les briques de bases permettant de développer notre objet connecté. Nous avions...",
      img: diy2,
      link: "https://devotics.fr/mon-objet-connecte-et-home-assistant/",
      type: "devotics",
    },
    {
      title: "Google Home Max le nouvel arrivant doit-il faire peur à Sonos ?",
      lang: "fr",
      date: "01 OCTOBRE 2018",
      description:
        "Passionné de musique et de technologie c’est naturellement que mes premières acquisitions domotique furent des enceintes multirooms. A l’époque, Sonos régnait en maître sur ce marché. Facile me direz-vous, il n’y avait pas de...",
      img: ghm,
      link:
        "https://devotics.fr/google-home-max-le-nouvel-arrivant-doit-il-faire-peur-a-sonos/",
      type: "devotics",
    },
    {
      title:
        "L’Iot pour les débutants, apprenez à construire votre premier objet connecté",
      lang: "fr",
      date: "24 SEPTEMBRE 2018",
      description:
        "Parlons peu parlons DIY. Aujourd’hui, je vous propose une série d’articles légèrement technique s’adressant principalement aux débutants dans l’IoT. Nous allons voir comment construire une sonde de température Wi-Fi. Le but est qu’en quelques...",
      img: diy1,
      link:
        "https://devotics.fr/apprendre-a-construire-son-premier-objet-connecte/",
      type: "devotics",
    },
    {
      title: "Ikea TRÅDFRI et installation Hue",
      lang: "fr",
      date: "05 JUIN 2018",
      description:
        "Je vous propose aujourd’hui d’aborder un sujet simple mais loin d’être inintéressant. Nous allons parler de l’intégration de produits TRÅDFRI (gamme d’éclairages connectés d’IKEA) au sein d’un écosystème Hue (gamme d’éclairage connecté de Philips)....",
      img: ikea,
      link: "https://devotics.fr/ikea-tradfri-et-installation-hue/",
      type: "devotics",
    },
    {
      title: "IFTTT, Api officielle, et si Sonos commençait à s’ouvrir?",
      lang: "fr",
      date: "10 SEPTEMBRE 2018",
      description:
        "Vous le savez peut-être bien que je n’en parle pas beaucoup sur ce blog mais l’un des premiers produits « domotique » que j’ai acquis est une enceinte multiroom de la marque Sonos. Très vite deux...",
      img: uneSonosDev,
      link:
        "https://devotics.fr/ifttt-api-officielle-et-si-sonos-commencait-a-souvrir/",
      type: "devotics",
    },
    {
      title:
        "Développez votre première application NodeJS avec le SDK Actions on Google",
      lang: "fr",
      date: "5 JUIN 2018",
      description:
        "Aujourd’hui je vous propose de voir la suite de notre série consacrée à Action on Google. Dans ce billet nous apprendrons à construire une application NodeJs en utilisant le SDK Actions on Google. Nous...",
      img: sdkHome,
      link:
        "https://devotics.fr/developpez-votre-premiere-application-nodejs-avec-le-sdk-actions-on-google/",
      type: "devotics",
    },
    {
      title: "Analyse, mise en place de MongoDb et amélioration d’Apis",
      lang: "fr",
      date: "28 MAI 2018",
      description:
        "Chose promise chose due, voici la suite du périple au royaume des micro-services. Aujourd’hui, dans cette seconde partie, nous allons attaquer un morceau un peu plus intéressant. Nous verrons comment utiliser MongoDb et nous...",
      img: microServ2,
      link:
        "hhttps://devotics.fr/analyse-mise-en-place-de-mongodb-et-amelioration-dapis/",
      type: "devotics",
    },
    {
      title: "Les premières briques de mon micro-service",
      lang: "fr",
      date: "15 MAI 2018",
      description:
        "Après quelque temps sans écrire me revoilà avec un article assurément technique (il faut bien assumer le dev de Devotics ). Je vous propose de découvrir avec moi le monde des micro-services au travers...",
      img: microServ,
      link: "https://devotics.fr/les-premiere-briques-de-mon-micro-service/",
      type: "devotics",
    },
    {
      title: "Prise en main et comparatif des smart light d’Awox",
      lang: "fr",
      date: "3 AVRIL 2018",
      description:
        "Aujourd’hui je vous propose un test/comparatif des smart light d’Awox. En effet, l’entreprise française a eu la gentillesse de nous envoyer deux de ses produits. Nous verrons comment ces ampoules se positionnent sur un...",
      img: awox,
      link: "https://devotics.fr/smart-light-awox/",
      type: "devotics",
    },
    {
      title: "Construire une caméra ip avec un raspbery pi Zero W",
      lang: "fr",
      date: "12 FEVRIER 2018",
      description:
        "Je vous propose aujourd’hui un article qui vous permettra de mettre en place une caméra ip en utilisant un Raspberry Pi. Nous verrons comment monter un système autonome capable de streamer les images qu’il...",
      img: cam,
      link: "https://devotics.fr/construire-camera-ip-raspbery-pi-zero-w/",
      type: "devotics",
    },
    {
      title: "Tweetez autrement avec Google Home et IFTTT",
      lang: "fr",
      date: "25 JANVIER 2018",
      description:
        "Aujourd’hui je vous propose un format d’article légèrement différent. En effet, il s’agit d’un format court traitant d’une astuce simple et rapide à mettre en place. Pour cette première, nous allons voir comment mettre...",
      img: tweet,
      link: "https://devotics.fr/tweetez-autrement-google-home/",
      type: "devotics",
    },
    {
      title:
        "Dialogflow et Actions on Google, un chatbot pour votre Google Home",
      lang: "fr",
      date: "15 JANVIER 2018",
      description:
        "Dans cet article nous avons découvert les bases d’Actions on Google et comment initialiser un projet. Nous avions vu qu’il y a trois possibilités d’intégration. Aujourd’hui, pour la suite de notre dossier, je vous...",
      img: uneDialogFlow,
      link:
        "https://devotics.fr/dialogflow-actions-on-google-chatbot-google-home/",
      type: "devotics",
    },
    {
      title:
        "Introduction à Actions on Google, la plateforme dédiée à Google Assistant",
      lang: "fr",
      date: "11 DECEMBRE 2017",
      description:
        "Le 4 octobre dernier, Google nous a présenté ses nouveaux produits. Nous vous avions fait un récap de l’événement ici mais nous avons omis un élément. Erreur ? En fait non, le sujet n’a tout...",
      img: uneActionsAnGoogleIntro,
      link: "https://devotics.fr/introduction-actions-on-google/",
      type: "devotics",
    },
    {
      title: "Créez et utilisez des groupes dans Home Assistant",
      video: "https://www.youtube.com/embed/gISZDIbGnog",
      lang: "fr",
      date: "13 NOVEMBRE 2017",
      description:
        "Aujourd’hui, je vous propose un sujet assez simple que nous n’avions pas abordé en détail jusqu’ici. En effet, nous allons voir comment configurer et utiliser des groupes dans Home Assistant. Vous trouverez une très...",
      link:
        "https://devotics.fr/creer-et-utiliser-les-groupes-dans-home-assistant/",
      type: "devotics",
    },
    {
      title: "Intégrez Home Assistant à Google Home",
      video: "https://www.youtube.com/embed/mVvc1BwvaKU",
      lang: "fr",
      date: "30 OCTOBRE 2017",
      description:
        "Vous ne le savez peut-être pas, depuis la version 0.56 d’Home Assistant, il est possible de contrôler votre installation grâce à Google Assistant et donc, à Google Home! Vous me direz que c’est déjà possible grâce à IFTTT. En effet, nous l’avions vu dans...",
      link:
        "https://devotics.fr/controlez-toute-installation-home-assistant-grace-google-home/",
      type: "devotics",
    },
    {
      title: "Votre première application nodeJs / express",
      lang: "fr",
      date: "23 OCTOBRE 2017",
      img: hassioAddonUne,
      description:
        "Dans cet article, nous avons découvert Hass.io et ces nouvelles fonctionnalités. Nous nous étions notamment attardé sur les add-ons. Nous avions vu comment les utiliser ainsi que leurs avantages. Aujourd’hui, je vous propose de passer au niveau supérieur...",
      link: "https://devotics.fr/votre-premiere-app-nodejs-express/",
      type: "devotics",
    },
    {
      title: "#madebygoogle, présentation des nouveaux produits Google",
      lang: "fr",
      date: "05 OCTOBRE 2017",
      img: googleConf,
      description:
        "Hier soir, mercredi 4 octobre à 18h avait lieu la conférence #madebygoogle présentant les derniers produits de la marque. C’est l’occasion d’écrire un court article présentant les nouveautés qui nous ont été présentées. Après...",
      link:
        "https://devotics.fr/madebygoogle-presentation-des-nouveaux-produits-google/",
      type: "devotics",
    },
    {
      title: "Google Home et IFTTT",
      lang: "fr",
      date: "25 SEPTEMBRE 2017",
      img: headerIFTTTGH,
      description:
        "Hier soir, mercredi 4 octobre à 18h avait lieu la conférence #madebygoogle présentant les derniers produits de la marque. C’est l’occasion d’écrire un court article présentant les nouveautés qui nous ont été présentées. Après...",
      link: "https://devotics.fr/google-home-ifttt/",
      type: "devotics",
    },
    {
      title: "Installer, configurer et utiliser Hass.io",
      lang: "fr",
      date: "11 SEPTEMBRE 2017",
      img: hassio,
      description:
        "Je pensais avoir terminé cette série consacrée à la mise en place d’une installation Home assistant basique. Cependant, il s’avère qu’il y a encore quelques petits points intéressants à voir, ou plutôt à revoir....",
      link: "https://devotics.fr/installer-configurer-utiliser-hass-io/",
      type: "devotics",
    },
    {
      title: "À la découverte de Google Home",
      lang: "fr",
      date: "04 SEPTEMBRE 2017",
      img: gh,
      description:
        "Comme vous avez peut-être pu le voir sur Twitter : cet été, je n’ai pas pu m’empêcher de craquer sur le tout nouveau Google Home (et je ne suis pas le seul dans l’équipe...",
      link: "https://devotics.fr/a-decouverte-de-google-home/",
      type: "devotics",
    },
    {
      title: "Hack du Hue Motion",
      lang: "fr",
      date: "10 JUILLET 2017",
      img: hackhue,
      description:
        "Dans ce nouvel article de la série trucs, astuces et conf. maîtrisez Home assistant je vous propose de nous intéresser au Hue motion. Je vous en avais déjà parlé ici, le Hue motion est un petit...",
      link: "https://devotics.fr/hack-hue-motion/",
      type: "devotics",
    },
    {
      title: "Connectez Home assistant au reste du monde avec IFTTT",
      lang: "fr",
      date: "6 JUIN 2017",
      img: iftttha,
      description:
        "Pour ce deuxième article de notre série, nous allons voir comment relier Home assistant à IFTTT, un service dont nous avons déjà parlé plus globalement ici qui vous permettra très rapidement d’interconnecter la plupart des...",
      link: "https://devotics.fr/connectez-home-assistant-reste-monde-ifttt/",
      type: "devotics",
    },
    {
      title: "Votre console de jeu rétro en 5 étapes et quelques minutes",
      lang: "fr",
      date: "29 MAI 2017",
      img: retro,
      description:
        "Depuis peu, un nouveau Raspberry pi 3 à rejoint ma collection ;). Étant fan de consoles rétro je n’ai pas pu m’empêcher de me lancer dans la mise en place de ma propre installation. Pour ce...",
      link:
        "https://devotics.fr/console-de-jeu-retro-5-etapes-quelques-minutes/",
      type: "devotics",
    },
    {
      title: "Utiliser l’API REST Home Assistant",
      lang: "fr",
      date: "15 MAI 2017",
      img: apiha,
      description:
        "Nous avons déjà beaucoup parlé d’Home-assistant, de sa mise en place et de son utilisation. Ainsi, nous avons vu qu’il permet d’utiliser simplement, tous vos objets connectés. Mais voilà, il vous manque encore quelque...",
      link: "https://devotics.fr/utiliser-lapi-rest-home-assistant/",
      type: "devotics",
    },
    {
      title: "Le numérique et la présidentielle en 11 points",
      lang: "fr",
      date: "03 MAI 2017",
      img: paris,
      description:
        "Cette semaine nous vous proposons un article de veille un peu particulier. Difficile de passer à côté, dimanche, vous êtes tous conviés à choisir notre futur président. Certains sont déçus du choix qui leur...",
      link: "https://devotics.fr/macron-vs-lepen-battle-numerique/",
      type: "devotics",
    },
    {
      title: "Gestion de données et optimisation Home Assistant",
      lang: "fr",
      date: "24 AVRIL 2017",
      img: coverTrucastuceHa,
      description:
        "Aujourd’hui, je vous propose un court article d’une nouvelle série consacrée à home-assistant. Vous y trouverez uniquement des billets courts qui auront pour objectif d’ajouter une fonctionnalité ou d’améliorer un point particulier de votre...",
      link: "https://devotics.fr/home-assistant-trucs-astuces/",
      type: "devotics",
    },
    {
      title: "Contrôler vos lampes avec Hue",
      lang: "fr",
      date: "10 AVRIL 2017",
      img: lampe,
      description:
        "Il existe de nombreux systèmes d’ampoules connectées plus ou moins onéreux et réussis. Nous vous avons déjà parlé à plusieurs reprises de l’un d’entre eux mais jusqu’ici nous ne nous sommes jamais vraiment attardés....",
      link: "https://devotics.fr/controler-vos-lampes-avec-hue-part-1/",
      type: "devotics",
    },
    {
      title: "Les bases d’Home-assistant",
      lang: "fr",
      date: "13 MARS 2017",
      img: ha3,
      description:
        "Pour ce troisième billet de la série Domotique sur mesure je vous propose de voir comment mettre en place votre première automatisation Home-assistant ! Allumer vos lumières, ouvrir vos volets, recevoir des notifications personnalisées...",
      link: "https://devotics.fr/domotique-sur-mesure/",
      type: "devotics",
    },
    {
      title: "MQTT sur votre raspberry pi",
      lang: "fr",
      date: "06 MARS 2017",
      img: mqtt,
      description:
        "Bonjour à tous! Aujourd’hui je vous propose de parler de MQTT. Nous allons voir de quoi il s’agit et comment mettre en place un serveur sur notre Raspberry pi. Spoiler alert! Si vous suivez les différents...",
      link: "https://devotics.fr/mqtt-raspberry-pi/",
      type: "devotics",
    },
    {
      title: "Installez Home-assistant",
      lang: "fr",
      date: "22 FÉVRIER 2017",
      img: haMiniature,
      description:
        "Si vous avez suivi le premier billet vous devriez avoir un Raspberry Pi prêt à être utilisé. Je vous propose aujourd’hui de mettre en place un outil qui permettra de centraliser, de tracer d’unifier...",
      link: "https://devotics.fr/installez-home-assistant/",
      type: "devotics",
    },
    {
      title: "Installez votre raspberry pi",
      lang: "fr",
      date: "13 FÉVRIER 2017",
      img: installRpi,
      description:
        "J’ai toujours en réserve un jouet qui n’attend que de sortir du tiroir. Aujourd’hui, je vous propose de travailler avec un raspberry pi afin de construire les briques de base d’un petit système domotique!...",
      link: "https://devotics.fr/installez-raspberry-pi/",
      type: "devotics",
    },
    {
      title: "Contrôler vocalement vos lampes Hue via votre mac",
      lang: "fr",
      date: "07 FÉVRIER 2017",
      img: hueMac,
      description:
        "Les produits de la gamme Hue de Philips sont compatibles Homekit. Il est donc très facile de mettre en place un contrôle vocal via un iPhone ou un iPad mais ce n’est pas le...",
      link:
        "https://devotics.fr/controler-vocalement-vos-lampes-hue-via-votre-mac/",
      type: "devotics",
    },
  ];

  return (
    <div className={classes.section}>
      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {articles.map((i, index) => {
            console.log(index);
            if (index < maxNumber) return <ArticleCard {...i} />;
            return "";
          })}
        </div>
        {maxNumber < articles.length ? (
          <Button
            style={{ margin: "10px auto 10px auto", display: "block" }}
            variant="outlined"
            onClick={() => setMaxNumber(maxNumber + 8)}
          >
            Plus d'articles
          </Button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Articles;
