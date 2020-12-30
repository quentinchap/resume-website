import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { defaultClasses } from "../theme";
import profilPic from "../assets/img/profil.jpg";
import CompactCardFixedLeft from "./compactCard/compactCardFixedLeft";

const AboutMe = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();

  return (
    <CompactCardFixedLeft
      category="Chef de projet"
      title={t("about me")}
      title2={t("about me")}
      pic={profilPic}
      text={
        <div style={{ marginTop: "4vh" }}>
          <Typography variant="h2" gutterBottom className={classes.columnTitle}>
            {t("who i am")}
          </Typography>

          <Typography variant="body1" gutterBottom style={{ marginBottom: 10 }}>
            {t("about me paragraph 1")}
          </Typography>

          <Typography variant="body1" gutterBottom style={{ marginBottom: 10 }}>
            {t("about me paragraph 2")}
          </Typography>

          <Typography variant="body1" gutterBottom style={{ marginBottom: 10 }}>
            {t("about me paragraph 3")}
          </Typography>
        </div>
      }
    />
  );
};

export default AboutMe;
