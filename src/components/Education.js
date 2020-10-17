import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { defaultClasses } from "../theme";
import DynamicCard from "./DynamicCard";

const Education = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();

  const items = [
    {
      major: true,
      title: t("Ecole d'ingénieur"),
      period: "2011 - 2014",
      compagny: "ISIMA",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("isima short description"),
    },
    {
      major: true,
      title: t("CPGE ATS"),
      period: "2010 - 2011",
      compagny: "LYCEE LAFAYETTE",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("cpge short description"),
    },
    {
      major: true,
      title: t("DUT informatique"),
      period: "2008 - 2011",
      compagny: "UNIVERSITÉ D'AUVERGNE",
      city: "Clermont-Ferrand",
      country: "France",
      shortDescription: t("DUT short description"),
    },
  ];

  return (
    <Card className={classes.section}>
      {items.map((i) => (
        <DynamicCard exp={i} />
      ))}
    </Card>
  );
};

export default Education;
