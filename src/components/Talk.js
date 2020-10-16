import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { defaultClasses } from "../theme";
import apihour8 from "../assets/img/apihour8.png";
import apihour24 from "../assets/img/apihour24.png";

import ArticleCard from "./ArticleCard";
import { Button } from "@material-ui/core";

const Talk = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();
  const [maxNumber, setMaxNumber] = useState(8);

  const articles = [
    {
      title: "CLERMONT'ECH API HOUR #24",
      lang: "fr",
      date: "14 DECEMBRE 2016",
      description:
      "Aborder sereinement angular (2+) et ces nouveaux paradigmes.     ",
      img: apihour24,
      link: "http://clermontech.org/talks/api-hour-24/quentin-chapelle-angular-2.html",
      type: "clermontech",
    },
    {
      title: "CLERMONT'ECH API HOUR #8",
      lang: "fr",
      date: "08 Avril 2014",
      description: "Logstash, mettez de la couleur dans vos logs!",
      img: apihour8,
      link:
        "http://clermontech.org/talks/api-hour-8/1-quentin-chapelle-logstash-mettez-de-la-couleur-dans-vos-logs.html",
      type: "clermontech",
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

export default Talk;
