import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import Typography from "@material-ui/core/Typography";
import { defaultClasses } from "../theme";
import profilPic from "../assets/img/profil.jpg";
import CompactCard from "./compactCard/compactCard";

const AboutMe = () => {
  const { t } = useTranslation();
  const classes = defaultClasses();
  const [c, setC] = useState(false);

  return c ? (
    <div className={classes.section} style={{ padding: 0 }}>
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
        <div
          className={classes.column}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={profilPic}
            style={{ maxHeight: 400, maxWidth: 400, width: "80%" }}
            alt="profilPic"
          />
        </div>
      </div>
    </div>
  ) : (
    <div>
      <CompactCard
        category="Chef de projet"
        title={t("about me")}
        title2={t("about me")}
        text={
          <Fragment>
            <Typography
              variant="h2"
              gutterBottom
              className={classes.columnTitle}
            >
              {t("who i am")}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ marginBottom: 10 }}
            >
              {t("about me paragraph 1")}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ marginBottom: 10 }}
            >
              {t("about me paragraph 2")}
            </Typography>

            <Typography
              variant="body1"
              gutterBottom
              style={{ marginBottom: 10 }}
            >
              {t("about me paragraph 3")}
            </Typography>
          </Fragment>
        }
      />
      <div
        onClick={() => setC(true)}
        style={{
          width: 200,
          height: 200,
          background: "url(" + profilPic + ")",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          color="primary"
          className={classes.sectionTitleCompact}
        >
          {t("about me")}
        </Typography>
      </div>
    </div>
  );
};

export default AboutMe;
