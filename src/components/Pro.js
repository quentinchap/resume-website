import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { defaultClasses } from "../theme";
import android from "../assets/img/icon/android.svg";
import angular from "../assets/img/icon/angular.svg";
import grails from "../assets/img/icon/grails.svg";
import ionic from "../assets/img/icon/ionic.svg";
import npm from "../assets/img/icon/npm.svg";
import docker from "../assets/img/icon/docker.svg";
import java from "../assets/img/icon/java.svg";
import c from "../assets/img/icon/c.svg";
import cordova from "../assets/img/icon/cordova.png";
import jenkins from "../assets/img/icon/jenkins.png";
import logstash from "../assets/img/icon/logstash.png";
import elasticsearch from "../assets/img/icon/elasticsearch.png";
import spring from "../assets/img/icon/spring.png";
import jersey from "../assets/img/icon/jersey.png";
import hibernate from "../assets/img/icon/hibernate.svg";
import kibana from "../assets/img/icon/kibana.svg";
import uml from "../assets/img/icon/uml.svg";
import cpp from "../assets/img/icon/cpp.svg";
import Qt from "../assets/img/icon/Qt.svg";
import DynamicCard from "./DynamicCard";

const Pro = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();

  const proItems = [
    {
      major: true,
      title: t("Chef de projet"),
      period: "2019",
      compagny: "MICHELIN",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("MichelinPM"),
      challenges: [
        t("Première expérience en gestion de projet"),
        t("Nombre d'acteurs, de techno. et de projets"),
        t("Collaboration internationnale"),
      ],
      techno: [
        {
          name: "Scrum, ",
        },
        {
          name: t("Gestion de projet, "),
        },
        {
          name: t("Architecture"),
        },
      ],
    },
    {
      major: true,
      title: t("Chargé d'enseignement vacataire"),
      period: "2018-2020",
      compagny: "ISIMA",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("partTimeTeacherJS"),
      challenges: [],
      techno: [
        {
          name: "NodeJS / Express, ",
        },
        {
          name: "ReactJS, ",
        },
        {
          name: "Mongo DB, ",
        },
        {
          name: "UX design, ",
        },
      ],
    },
    {
      major: true,
      title: t("Solution consultant"),
      period: "2018-2019",
      compagny: "MICHELIN",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("MichelinSC"),
      challenges: [
        t("Compréhension des processus supply"),
        t("Suivi d'avancement d'un partenaire exterieur"),
        t("Propositions d'architectures et de solutions résiliantes"),
      ],
      techno: [
        {
          name: t("Adaptabilité, "),
        },
        {
          name: t("Scrum, "),
        },
        {
          name: t("Connaissances en supply"),
        },
      ],
    },
    {
      major: true,
      title: t("Développeur fullstack"),
      period: "2016 - 2018",
      compagny: "MICHELIN",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("MichelinDev"),
      challenges: [
        t("Time to market très court"),
        t("S'adapter aux différents métiers"),
        t("Multiplication des technologies utilisées"),
        t("Montée en compétence en UX/Design"),
      ],
      techno: [
        {
          name: "android",
          img: android,
        },
        {
          name: "angular",
          img: angular,
        },
        {
          name: "grails",
          img: grails,
        },
        {
          name: "ionic",
          img: ionic,
        },
        {
          name: "npm",
          img: npm,
        },
        {
          name: "docker",
          img: docker,
        },
        {
          name: "cordova",
          img: cordova,
        },
        {
          name: "jenkins",
          img: jenkins,
        },
      ],
    },
    {
      major: true,
      title: t("Chargé d'enseignement vacataire"),
      period: "2016",
      compagny: "UBP",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("partTimeTeacherC"),
      challenges: [
        t("Première expérience dans l'enseignement"),
        t("Intéresser et motiver sur un créneau horaire difficile"),
        t("Vulgariser au maximum"),
      ],
      techno: [
        {
          name: "C",
          img: c,
        },
        {
          name: "java",
          img: java,
        },
      ],
    },
    {
      major: false,
      title: t("Analyste fonctionnel"),
      period: "2014 - 2016",
      compagny: "MICHELIN",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("MichelinAf"),
      challenges: [],
      techno: [],
    },
    {
      major: false,
      title: t("Alternant"),
      period: "2013 - 2014",
      compagny: "MICHELIN",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("MichelinAlternant"),
      challenges: [
        t("Beaucoup de contraintes techniques et fonctionnelles"),
        t("Application cible sensible"),
      ],
      techno: [
        {
          name: "kibana",
          img: kibana,
        },
        {
          name: "logstash",
          img: logstash,
        },
        {
          name: "elasticsearch",
          img: elasticsearch,
        },
      ],
    },
    {
      major: false,
      title: t("Développeur stagiaire"),
      period: "2013",
      compagny: "WORLDLINE",
      city: "Lyon",
      country: "France",
      shortDescription: t("worldline"),
      challenges: [
        t("Contact clients"),
        t(
          "Prise en main des outils et des méthodes d'intégration continue et de gestion de projet"
        ),
        t("Formation technique"),
      ],
      techno: [
        {
          name: "jenkins",
          img: jenkins,
        },
        {
          name: "hibernate",
          img: hibernate,
        },
        {
          name: "jersey",
          img: jersey,
        },
        {
          name: "spring",
          img: spring,
        },
      ],
    },
    {
      major: false,
      title: t("Développeur stagiaire"),
      period: "2010",
      compagny: "CHU",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("chuStage"),
      challenges: [
        t("Premier projet en totale autonomie"),
        t("Protocole de communication avec l'appareil"),
        t("Rigueur protocolaire imposée par les contraintes métier"),
      ],
      techno: [
        {
          name: "Qt",
          img: Qt,
        },
        {
          name: "cpp",
          img: cpp,
        },
        {
          name: "uml",
          img: uml,
        },
      ],
    },
    {
      major: true,
      title: t("Emplois saisonniers"),
      compagny: "Divers",
      shortDescription: t("emploisSaisonniers"),
      challenges: [
        t(
          "Ambulancier à Tissier - Nevers 58000 - Août 2011 et Juillet - Août 2012"
        ),
        t("Service Comptabilité à Logivie - Nevers 58000 - Août 2010"),
        t(
          "Chargé d'accueil à la Caisse d'épargne - Coulanges-lés-Nevers 58660 - Juillet 2009"
        ),
        t(
          "Service informatique à Logivie - Nevers 58000 - Août 2008 et Août 2009"
        ),
      ],
      techno: [],
    },
  ];

  return (
    <Fragment>
      {proItems.map((i) => {
        return <DynamicCard exp={i} />;
      })}
    </Fragment>
  );
};

export default Pro;
