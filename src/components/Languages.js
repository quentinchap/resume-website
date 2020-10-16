import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import franceFlag from "../assets/img/france.png";
import ukFlag from "../assets/img/uk.png";
import esFlag from "../assets/img/es.png";
import { defaultClasses, theme } from "../theme";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  icons: {
    margin: "5px 10px 5px 0px",
    height: 32,
    width: 32,
  },
  column: {
    flex: 1,
    minWidth: 200,
    margin: 5,
    display: "flex",
    alignItems: "center",
  },
}));

const Languages = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();
  const customClasses = useStyle();
  return (
    <Card className={classes.section}>
      <Typography
        variant="h2"
        gutterBottom
        color="primary"
        className={classes.columnTitle}
      >
        {t("language")}
      </Typography>
      <div className={customClasses.column}>
        <img alt="Français" src={franceFlag} className={customClasses.icons} />{" "}
        {t("nativeLanguage")}
      </div>
      <div className={customClasses.column}>
        <img alt="En" src={ukFlag} className={customClasses.icons} />{" "}
        {t("TOEIC890")}
      </div>
      <div className={customClasses.column}>
        <img alt="En" src={esFlag} className={customClasses.icons} />{" "}
        {t("basicLevel")}
      </div>
    </Card>
  );
};

export default Languages;
