import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { defaultClasses } from "../theme";
import profilPic from "../assets/img/profil.jpg";

const AboutMe = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();

  return (
    <div className={classes.section}>
      <Typography
        variant="h2"
        gutterBottom
        color="primary"
        className={classes.sectionTitle}
      >
        {t("about me")}
      </Typography>
      <div className={classes.flexContainer}>
        <div className={classes.column}>
          <Typography variant="h2" gutterBottom className={classes.columnTitle}>
            {t("who i am")}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            style={{ marginBottom: 10, textAlign: "justify" }}
          >
            {t("about me paragraph 1")}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            style={{ marginBottom: 10, textAlign: "justify" }}
          >
            {t("about me paragraph 2")}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            style={{ marginBottom: 10, textAlign: "justify" }}
          >
            {t("about me paragraph 3")}
          </Typography>
        </div>
        <div className={classes.column} style={{ textAlign: "center" }}>
          <img
            src={profilPic}
            style={{ maxHeight: 400, maxWidth: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
